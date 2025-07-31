const express = require("express");
const cors = require("cors");
const fetch = require("cross-fetch");
require("dotenv").config({ path: ".env.local" });

const app = express();
const PORT = process.env.PORT || 3001;

// CORS configuration
app.use(
  cors({
    origin: [
      // Production domain
      "https://vertonet.vercel.app",
      // Preview deployments (Vercel creates unique URLs for each PR)
      "https://vertonet-psk8bhsfl-helenes-projects-f9fa7660.vercel.app/",
      // Development
      "http://localhost:3000",
      // Allow any Vercel preview deployment
      "https://vertonet-psk8bhsfl-helenes-projects-f9fa7660.vercel.app/",
    ],
    credentials: true,
  })
);

app.use(express.json());

// PredinctHQ API proxy endpoint
app.get("/api/events", async (req, res) => {
  console.log("Received request for events:", req.query);
  try {
    const { limit = 6, language = "en" } = req.query;
    const apiKey = process.env.PREDINCTHQ_API_KEY;

    if (!apiKey) {
      console.warn("PredinctHQ API key not found, using fallback events");
      return res.json({ events: getFallbackEvents(language, limit) });
    }

    try {
      // Use REST API directly
      const params = new URLSearchParams({
        country: "IS", // ISO country code for Iceland
        "start.gte": new Date().toISOString().split(".")[0] + "Z", // From today, without milliseconds
        limit: limit.toString(),
        category: "conferences,expos",
        sort: "start", // Sort by start date
      });

      const response = await fetch(
        `https://api.predicthq.com/v1/events?${params.toString()}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            Accept: "application/json",
          },
          timeout: 30000, // 30 second timeout
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! status: ${response.status}, body: ${errorText}`
        );
      }

      const data = await response.json();

      if (data.results && data.results.length > 0) {
        console.log("PredictHQ API returned", data.results.length, "events");
        const formattedEvents = data.results.slice(0, limit).map((event) => {
          const formatted = {
            id: event.id,
            title: event.title,
            location: getEventLocation(event),
            date: formatEventDate(event.start, language),
            image: event.image || null,
            url: event.url || null,
            description: event.description || null,
          };
          console.log(
            "Formatted event:",
            formatted.title,
            "URL:",
            formatted.url,
            "Description:",
            formatted.description?.substring(0, 100) + "..."
          );
          return formatted;
        });

        return res.json({ events: formattedEvents });
      }

      return res.json({ events: getFallbackEvents(language, limit) });
    } catch (error) {
      console.error("Error using PredictHQ REST API:", error);
      return res.json({ events: getFallbackEvents(language, limit) });
    }
  } catch (error) {
    console.error(
      "Error fetching events from PredinctHQ API, using fallback events:",
      error
    );
    const { language = "en", limit = 6 } = req.query;
    return res.json({ events: getFallbackEvents(language, limit) });
  }
});

// Fallback events function
function getFallbackEvents(language = "en", limit = 6) {
  const events =
    language === "is"
      ? [
          {
            id: "fallback-1",
            title: "Fyrirtækjaheimsókn til Gangverk",
            location: "Gangverk, Ármúli 6, 108 Reykjavík",
            date: formatEventDate("2025-01-15T18:00:00", language),
            image: "/resources/images/vidburdir1.png",
            description:
              "Mánaðarlegur tæknifundur fyrir forritara og tæknifólk",
          },
          {
            id: "fallback-2",
            title: "Fyrirtækjaheimsókn til Advania",
            location: "Advania, Guðrúnartún 10, 105 Reykjavík",
            date: formatEventDate("2025-02-20T17:00:00", language),
            image: "/resources/images/vidburdir2.png",
            description: "Árlegur ráðstefna um konur í tækni",
          },
          {
            id: "fallback-3",
            title: "Fyrirtækjaheimsókn til Kolibri",
            location: "Kolibri, Borgartún 26, Reykjavík",
            date: formatEventDate("2025-03-18T17:00:00", language),
            image: "/resources/images/vidburdir3.png",
            description: "54 klukkustunda startup keppni og netvæðing",
          },
          {
            id: "fallback-4",
            title: "Fyrirtækjaheimsókn til Aranja",
            location: "Aranja, Nóatún 17, 105 Reykjavík",
            date: formatEventDate("2025-04-12T14:00:00", language),
            image: "/resources/images/vidburdir4.png",
            description: "Hands-on verkefni um gervigreind og vélanám",
          },
          {
            id: "fallback-5",
            title: "Fyrirtækjaheimsókn til Overcast",
            location: "Overcast, Höfðabakka 9D, 110 Reykjavík",
            date: formatEventDate("2025-05-10T17:00:00", language),
            image: "/resources/images/vidburdir5.png",
            description: "Summit um stafræna umbreytingu og nýsköpun",
          },
          {
            id: "fallback-6",
            title: "Tæknifundur Reykjavík",
            location: "Innovation House, Grandagarður 1, Reykjavík",
            date: formatEventDate("2025-06-15T18:00:00", language),
            image: "/resources/images/vidburdir6.png",
            description: "Ráðstefna um öryggi á netinu og bestu venjur",
          },
        ]
      : [
          {
            id: "fallback-1",
            title: "Company Visit to Gangverk",
            location: "Gangverk, Ármúli 6, 108 Reykjavík",
            date: formatEventDate("2025-01-15T18:00:00", language),
            image: "/resources/images/vidburdir1.png",
            description:
              "Monthly tech meetup for developers and tech enthusiasts",
          },
          {
            id: "fallback-2",
            title: "Company Visit to Advania",
            location: "Advania, Guðrúnartún 10, 105 Reykjavík",
            date: formatEventDate("2025-02-20T17:00:00", language),
            image: "/resources/images/vidburdir2.png",
            description: "Annual conference celebrating women in technology",
          },
          {
            id: "fallback-3",
            title: "Company Visit to Kolibri",
            location: "Kolibri, Borgartún 26, Reykjavík",
            date: formatEventDate("2025-03-18T17:00:00", language),
            image: "/resources/images/vidburdir3.png",
            description: "54-hour startup competition and networking event",
          },
          {
            id: "fallback-4",
            title: "Company Visit to Aranja",
            location: "Aranja, Nóatún 17, 105 Reykjavík",
            date: formatEventDate("2025-04-12T14:00:00", language),
            image: "/resources/images/vidburdir4.png",
            description: "Hands-on workshop on AI and ML technologies",
          },
          {
            id: "fallback-5",
            title: "Company Visit to Overcast",
            location: "Overcast, Höfðabakka 9D, 110 Reykjavík",
            date: formatEventDate("2025-05-10T17:00:00", language),
            image: "/resources/images/vidburdir5.png",
            description:
              "Summit focusing on digital transformation and innovation",
          },
          {
            id: "fallback-6",
            title: "Tech Meetup Reykjavík",
            location: "Innovation House, Grandagarður 1, Reykjavík",
            date: formatEventDate("2025-06-15T18:00:00", language),
            image: "/resources/images/vidburdir6.png",
            description:
              "Conference on cybersecurity best practices and trends",
          },
        ];

  return events.slice(0, limit);
}

// Helper functions
function formatEventDate(dateString, language = "en") {
  try {
    const date = new Date(dateString);

    if (language === "is") {
      return date.toLocaleDateString("is-IS", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } else {
      return date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    }
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString;
  }
}

function getEventLocation(event) {
  const parts = [];

  if (event.venue_name) {
    parts.push(event.venue_name);
  }

  if (event.venue_address) {
    parts.push(event.venue_address);
  }

  if (event.city_name) {
    parts.push(event.city_name);
  }

  if (event.country_name && event.country_name !== "Iceland") {
    parts.push(event.country_name);
  }

  return parts.length > 0 ? parts.join(", ") : "Location TBA";
}

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`);
  console.log(
    `Test the API: http://localhost:${PORT}/api/events?limit=1&language=en`
  );
});
