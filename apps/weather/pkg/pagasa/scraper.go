package pagasa

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"github.com/chromedp/chromedp"
)

const (
	localStorageKeySynoptic = "homeSearch-v1"
)

type Scraper interface {
	GetSynopticStations(ctx context.Context, targetURL string) ([]SynopticStation, error)
	GetAutomatedStations(ctx context.Context, targetURL string) ([]AutomatedStation, error)
}

type ChromedpScraper struct {
	baseCtx context.Context
}

func NewScraper(baseCtx context.Context) *ChromedpScraper {
	return &ChromedpScraper{
		baseCtx: baseCtx,
	}
}

func (s *ChromedpScraper) GetSynopticStations(ctx context.Context, targetURL string) ([]SynopticStation, error) {
	var raw string
	taskCtx, cancel := chromedp.NewContext(s.baseCtx)
	defer cancel()
	err := chromedp.Run(taskCtx,
		chromedp.Navigate(targetURL),
		chromedp.Sleep(3*time.Second),
		chromedp.Evaluate(fmt.Sprintf(`localStorage.getItem("%s")`, localStorageKeySynoptic), &raw),
	)
	if err != nil {
		return nil, fmt.Errorf("failed to navigate or evaluate localStorage for synoptic data: %w", err)
	}
	if raw == "" || raw == "null" {
		return nil, fmt.Errorf("localStorage key '%s' returned empty or null data for synoptic stations", localStorageKeySynoptic)
	}
	var response SynopticStationResponse
	if err := json.Unmarshal([]byte(raw), &response); err != nil {
		return nil, fmt.Errorf("failed to parse synoptic stations JSON: %w", err)
	}
	var stations []SynopticStation
	for _, station := range response.Value {
		stations = append(stations, station)
	}

	return stations, nil
}
