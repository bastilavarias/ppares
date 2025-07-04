package pagasa

import "time"

type SynopticStation struct {
	SiteID       int    `json:"site_id"`
	Province     string `json:"province"`
	Municipality string `json:"municipality"`
	Latitude     string `json:"latitude"`
	Longitude    string `json:"longitude"`
}
type SynopticStationResponse struct {
	Value     map[string]SynopticStation `json:"value"`
	Timestamp int64                      `json:"timestamp"`
}

type AutomatedStation struct {
	StationID     int
	StationName   string
	Temperature   float64
	Humidity      int
	WindSpeed     float64
	WindDirection string
	Rainfall      float64
	Pressure      float64
	MiscValue     int
	LastUpdate    time.Time
}

type AutomatedStationResponse struct {
	Value []AutomatedStation `json:"Value"` // Assuming the data is under a "Value" key
}
