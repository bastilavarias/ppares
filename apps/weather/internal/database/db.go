package database

import (
	"log"
	"os"
	"sync"
	"time"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var (
	dbInstance *gorm.DB
	once       sync.Once
)

func Init(dsn string) {
	once.Do(func() {
		newLogger := logger.New(
			log.New(os.Stdout, "\r\n", log.LstdFlags),
			logger.Config{
				SlowThreshold:             time.Second,
				LogLevel:                  logger.Info,
				IgnoreRecordNotFoundError: true,
				Colorful:                  true,
			},
		)

		var err error
		dbInstance, err = gorm.Open(sqlite.Open(dsn), &gorm.Config{
			Logger: newLogger,
		})
		if err != nil {
			log.Fatalf("Failed to connect to database: %v", err)
		}

		log.Println("Database connection initialized successfully.")
	})
}

func GetDB() *gorm.DB {
	if dbInstance == nil {
		log.Panic("Database has not been initialized. Call Init() first.")
	}
	return dbInstance
}

func CloseDB() {
	if dbInstance != nil {
		sqlDB, err := dbInstance.DB()
		if err != nil {
			log.Printf("Error getting underlying SQL DB: %v", err)
			return
		}
		err = sqlDB.Close()
		if err != nil {
			log.Printf("Error closing database connection: %v", err)
		} else {
			log.Println("Database connection closed.")
		}
	}
}
