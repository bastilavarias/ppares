package pagasa

import (
	"context"
	"encoding/json"
	"fmt"
	"strconv"
	"strings"
	"time"

	"github.com/chromedp/chromedp"
	"github.com/gocolly/colly/v2"
)

const (
	localStorageKeySynoptic = "homeSearch-v1"
	pagasaBaseURL           = "https://www.pagasa.dost.gov.ph"
	pagasaAWSURL            = "https://bagong.pagasa.dost.gov.ph/automated-weather-station"
)

type Scraper interface {
	GetSynopticStations(opCtx context.Context) ([]SynopticStation, error)
	GetAutomatedStations(opCtx context.Context) ([]AutomatedStation, error)
	GetLatestNewsColly(opCtx context.Context, newsPageURL string) ([]map[string]string, error)
	Close()
}

type PagasaScraper struct {
	ChromedpAllocCtx context.Context
	ChromedpCancel   context.CancelFunc
	ChromedpTaskCtx  context.Context
	CollyCollector   *colly.Collector
}

func NewPagasaScraper(parentCtx context.Context) (*PagasaScraper, error) {
	chromedpAllocCtx, chromedpCancel := chromedp.NewContext(parentCtx)
	chromedpTaskCtx, _ := chromedp.NewContext(chromedpAllocCtx)
	allowedDomain := strings.SplitN(strings.TrimPrefix(pagasaAWSURL, "https://"), "/", 2)[0]
	collyCollector := colly.NewCollector(
		colly.AllowedDomains(
			allowedDomain,
		),
		colly.UserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"),
		colly.IgnoreRobotsTxt(),
		colly.MaxDepth(1),
	)

	return &PagasaScraper{
		ChromedpAllocCtx: chromedpAllocCtx,
		ChromedpCancel:   chromedpCancel,
		ChromedpTaskCtx:  chromedpTaskCtx,
		CollyCollector:   collyCollector,
	}, nil
}

func (s *PagasaScraper) Close() {
	s.ChromedpCancel()
}

func (s *PagasaScraper) GetSynopticStations(opCtx context.Context) ([]SynopticStation, error) {
	var raw string
	var scrapeErr error
	var stations []SynopticStation
	done := make(chan struct{})

	go func() {
		defer close(done)
		taskCtx, cancel := context.WithTimeout(s.ChromedpTaskCtx, 45*time.Second)
		defer cancel()
		err := chromedp.Run(taskCtx,
			chromedp.Navigate(pagasaBaseURL),
			chromedp.Sleep(5*time.Second),
			chromedp.Evaluate(fmt.Sprintf(`localStorage.getItem("%s")`, localStorageKeySynoptic), &raw),
		)
		if err != nil {
			scrapeErr = fmt.Errorf("chromedp failed to navigate or evaluate localStorage for synoptic data (%s): %w", pagasaBaseURL, err)
			return
		}
		if raw == "" || raw == "null" {
			scrapeErr = fmt.Errorf("localStorage key '%s' returned empty or null data for synoptic stations from %s", localStorageKeySynoptic, pagasaBaseURL)
			return
		}
		var response SynopticStationResponse
		if err := json.Unmarshal([]byte(raw), &response); err != nil {
			scrapeErr = fmt.Errorf("failed to parse synoptic stations JSON: %w", err)
			return
		}
		for _, station := range response.Value {
			stations = append(stations, station)
		}

	}()
	select {
	case <-opCtx.Done():
		return nil, opCtx.Err()
	case <-done:
		if scrapeErr != nil {
			return nil, scrapeErr
		}

		return stations, nil
	}
}

func (s *PagasaScraper) GetAutomatedStations(opCtx context.Context) ([]AutomatedStation, error) {
	var stations []AutomatedStation
	var scrapeErr error

	s.CollyCollector.OnHTML("table.table tbody tr", func(e *colly.HTMLElement) {
		var currentRow struct {
			Columns []string
		}
		e.ForEach("td", func(i int, cell *colly.HTMLElement) {
			columnText := cell.Text
			currentRow.Columns = append(currentRow.Columns, columnText)
		})
		parsedRow, _ := constructRawAWSData(currentRow.Columns)
		stations = append(stations, parsedRow)
	})
	s.CollyCollector.OnScraped(func(r *colly.Response) {})
	collyDone := make(chan struct{})
	go func() {
		defer close(collyDone)
		visitErr := s.CollyCollector.Visit(pagasaAWSURL)
		if visitErr != nil && scrapeErr == nil {
			scrapeErr = fmt.Errorf("colly visit error for %s: %w", pagasaAWSURL, visitErr)
		}
	}()
	select {
	case <-opCtx.Done():
		return nil, opCtx.Err()
	case <-collyDone:
		if scrapeErr != nil {
			return nil, scrapeErr
		}

		return stations, nil
	}

}

func constructRawAWSData(data []string) (AutomatedStation, error) {
	var station AutomatedStation
	if len(data) != 10 {
		return station, fmt.Errorf("expected 10 elements in the input array, but got %d", len(data))
	}
	id, err := strconv.Atoi(data[0])
	if err != nil {
		return station, fmt.Errorf("error parsing StationID '%s': %w", data[0], err)
	}
	station.StationID = id
	station.StationName = data[1]
	tempStr := strings.TrimSuffix(data[2], " °C")
	temp, err := strconv.ParseFloat(tempStr, 64)
	if err != nil {
		return station, fmt.Errorf("error parsing Temperature '%s': %w", data[2], err)
	}
	station.Temperature = temp
	humidityStr := strings.TrimSuffix(data[3], " %")
	humidity, err := strconv.Atoi(humidityStr)
	if err != nil {
		return station, fmt.Errorf("error parsing Humidity '%s': %w", data[3], err)
	}
	station.Humidity = humidity
	windSpeedStr := strings.TrimSuffix(data[4], " km/hr")
	windSpeed, err := strconv.ParseFloat(windSpeedStr, 64)
	if err != nil {
		return station, fmt.Errorf("error parsing WindSpeed '%s': %w", data[4], err)
	}
	station.WindSpeed = windSpeed
	station.WindDirection = data[5]
	rainfallStr := strings.TrimSuffix(data[6], " mm/hr")
	rainfall, err := strconv.ParseFloat(rainfallStr, 64)
	if err != nil {
		return station, fmt.Errorf("error parsing Rainfall '%s': %w", data[6], err)
	}
	station.Rainfall = rainfall
	pressure, err := strconv.ParseFloat(data[7], 64)
	if err != nil {
		return station, fmt.Errorf("error parsing Pressure '%s': %w", data[7], err)
	}
	station.Pressure = pressure
	miscValueFloat, err := strconv.ParseFloat(data[8], 64)
	if err != nil {
		return station, fmt.Errorf("error parsing MiscValue '%s': %w", data[8], err)
	}
	station.MiscValue = int(miscValueFloat)
	const layout = "January 2, 2006, 3:04 pm"
	lastUpdate, err := time.Parse(layout, data[9])
	if err != nil {
		return station, fmt.Errorf("error parsing LastUpdate '%s': %w", data[9], err)
	}
	station.LastUpdate = lastUpdate

	return station, nil
}
