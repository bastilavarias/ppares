package main

import (
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

func main() {
	engine := html.New("./web", ".html") //
	app := fiber.New(fiber.Config{
		Views: engine,
	})
	app.Static("/static", "./web/static")
	app.Get("/", func(c *fiber.Ctx) error {
		return c.Render("index", fiber.Map{
			"Title": "Awesome Landing Page (NPM Assets)",
		})
	})
	app.Get("/htmx-content", func(c *fiber.Ctx) error {
		return c.SendString(`
            <div id="dynamic-content" class="uk-card uk-card-body uk-card-secondary uk-width-1-1 uk-margin-top uk-animation-slide-bottom uk-border-rounded">
                <p class="uk-text-lead uk-text-center">Content loaded dynamically via HTMX!</p>
                <p class="uk-text-small uk-text-center">This fragment was served by Go Fiber.</p>
            </div>
        `)
	})

	// Start the Fiber server on port 3000.
	log.Fatal(app.Listen(":3000"))
}
