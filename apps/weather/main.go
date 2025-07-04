package main

import (
	"context"
	"encoding/json"
	"log"
	"os"
	"time"

	"github.com/chromedp/chromedp"
	"weather/pkg/pagasa"
)

func main() {
	targetURL := "https://www.pagasa.dost.gov.ph"
	chromedpCtx, chromedpCancel := chromedp.NewContext(context.Background())
	defer chromedpCancel()
	globalCtx, globalCancel := context.WithTimeout(chromedpCtx, 1*time.Minute)
	defer globalCancel()
	scraper := pagasa.NewScraper(globalCtx)
	synopticStations, err := scraper.GetSynopticStations(globalCtx, targetURL)
	if err != nil {
		log.Printf("Error fetching synoptic stations: %v", err)
	} else {
		if len(synopticStations) > 0 {
			// Marshal to JSON for structured logging
			jsonData, err := json.MarshalIndent(synopticStations, "", "  ")
			if err != nil {
				log.Printf("Error marshalling synoptic stations to JSON: %v", err)
			} else {
				log.Printf("Synoptic Stations Data:\n%s", jsonData)
			}
		} else {
			log.Println("No synoptic stations found.")
		}
	}

	os.Exit(0)
}
