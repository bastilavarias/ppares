package pagasa

type SynopticStation struct {
	Province     string `json:"province"`
	Municipality string `json:"municipality"`
	Latitude     string `json:"latitude"`
	Longitude    string `json:"longitude"`
	SiteID       int    `json:"site_id"`
}

type AutomatedStation struct {
	Province     string `json:"province"`
	Municipality string `json:"municipality"`
	Latitude     string `json:"latitude"`
	Longitude    string `json:"longitude"`
	SiteID       int    `json:"site_id"`
}
type SynopticStationResponse struct {
	Value     map[string]SynopticStation `json:"value"`
	Timestamp int64                      `json:"timestamp"`
}
