package main

import "weather/internal/database"

func main() {
	//appCtx, appCancel := context.WithCancel(context.Background())
	//defer appCancel()

	database.Init("root.db")
	defer database.CloseDB()
}
