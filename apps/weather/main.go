package main

import (
	"context"
	"fmt"
	"os"
	"weather/pkg/pagasa"
)

func main() {
	appCtx, appCancel := context.WithCancel(context.Background())
	defer appCancel()

	pagasaScraper, _ := pagasa.NewPagasaScraper(appCtx)

	synopticStations, _ := pagasaScraper.GetSynopticStations(appCtx)
	fmt.Println("Synoptic Stations")
	fmt.Println(synopticStations)
	fmt.Println("-----")

	automatedStations, _ := pagasaScraper.GetAutomatedStations(appCtx)
	//pagasaScraper.GetAutomatedStations(appCtx)
	fmt.Println("Automated Stations")
	fmt.Println(automatedStations)
	fmt.Println("-----")

	os.Exit(0)
}
