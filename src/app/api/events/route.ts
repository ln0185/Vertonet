import { NextRequest, NextResponse } from "next/server";

// PredinctHQ API proxy endpoint
export async function GET(request: NextRequest) {
  console.log("Received request for events");

  try {
    const { searchParams } = new URL(request.url);
    const limit = searchParams.get("limit") || "6";
    const language = searchParams.get("language") || "en";

    const apiKey = process.env.PREDINCTHQ_API_KEY;

    if (!apiKey) {
      console.warn("PredinctHQ API key not found, using fallback events");
      return NextResponse.json({
        events: getFallbackEvents(language, parseInt(limit)),
      });
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
        const formattedEvents = data.results
          .slice(0, parseInt(limit))
          .map((event: any) => {
            const formatted = {
              id: event.id,
              title: event.title,
              location: getEventLocation(event),
              date: formatEventDate(event.start, language),
              image: event.image || null,
              description: event.description || "",
              url: event.url || null,
              category: event.category || "conference",
            };
            return formatted;
          });

        return NextResponse.json({ events: formattedEvents });
      } else {
        console.log("No events found, using fallback");
        return NextResponse.json({
          events: getFallbackEvents(language, parseInt(limit)),
        });
      }
    } catch (apiError) {
      console.error("PredictHQ API error:", apiError);
      return NextResponse.json({
        events: getFallbackEvents(language, parseInt(limit)),
      });
    }
  } catch (error) {
    console.error("Error in events API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function getFallbackEvents(language = "en", limit = 6) {
  const events = [
    {
      id: "fallback-1",
      title: language === "is" ? "Tækniráðstefna 2024" : "Tech Conference 2024",
      location: language === "is" ? "Reykjavík, Ísland" : "Reykjavík, Iceland",
      date: language === "is" ? "15. mars 2024" : "March 15, 2024",
      image: null,
      description:
        language === "is"
          ? "Stærsta tækniráðstefna Íslands með yfir 500 þátttakendum."
          : "Iceland's largest tech conference with over 500 participants.",
      url: null,
      category: "conference",
    },
    {
      id: "fallback-2",
      title: language === "is" ? "Hugbúnaðarhátíð" : "Software Festival",
      location: language === "is" ? "Akureyri, Ísland" : "Akureyri, Iceland",
      date: language === "is" ? "22. apríl 2024" : "April 22, 2024",
      image: null,
      description:
        language === "is"
          ? "Hátíð fyrir hugbúnaðarhönnuði og forritara."
          : "Festival for software designers and developers.",
      url: null,
      category: "conference",
    },
    {
      id: "fallback-3",
      title: language === "is" ? "Grænni Tækni" : "Green Tech Expo",
      location:
        language === "is" ? "Hafnarfjörður, Ísland" : "Hafnarfjörður, Iceland",
      date: language === "is" ? "10. maí 2024" : "May 10, 2024",
      image: null,
      description:
        language === "is"
          ? "Sýning á nýjustu grænu tækni og sjálfbærni."
          : "Exhibition of the latest green technology and sustainability.",
      url: null,
      category: "expo",
    },
    {
      id: "fallback-4",
      title: language === "is" ? "Spilunarmiðstöð" : "Gaming Center",
      location: language === "is" ? "Kópavogur, Ísland" : "Kópavogur, Iceland",
      date: language === "is" ? "18. júní 2024" : "June 18, 2024",
      image: null,
      description:
        language === "is"
          ? "Miðstöð fyrir tölvuleikja og spilunartækni."
          : "Center for computer games and gaming technology.",
      url: null,
      category: "conference",
    },
    {
      id: "fallback-5",
      title:
        language === "is" ? "Gervigreind og Framtíðin" : "AI and the Future",
      location: language === "is" ? "Garðabær, Ísland" : "Garðabær, Iceland",
      date: language === "is" ? "25. júlí 2024" : "July 25, 2024",
      image: null,
      description:
        language === "is"
          ? "Ráðstefna um gervigreind og áhrif hennar á framtíðina."
          : "Conference about artificial intelligence and its impact on the future.",
      url: null,
      category: "conference",
    },
    {
      id: "fallback-6",
      title: language === "is" ? "Netöryggi 2024" : "Cybersecurity 2024",
      location:
        language === "is" ? "Mosfellsbær, Ísland" : "Mosfellsbær, Iceland",
      date: language === "is" ? "5. ágúst 2024" : "August 5, 2024",
      image: null,
      description:
        language === "is"
          ? "Ráðstefna um netöryggi og persónuvernd."
          : "Conference about cybersecurity and privacy protection.",
      url: null,
      category: "conference",
    },
  ];

  return events.slice(0, limit);
}

function formatEventDate(dateString: string, language = "en") {
  try {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    if (language === "is") {
      // Icelandic date formatting
      const months = [
        "janúar",
        "febrúar",
        "mars",
        "apríl",
        "maí",
        "júní",
        "júlí",
        "ágúst",
        "september",
        "október",
        "nóvember",
        "desember",
      ];
      const month = months[date.getMonth()];
      return `${date.getDate()}. ${month} ${date.getFullYear()}`;
    } else {
      return date.toLocaleDateString("en-US", options);
    }
  } catch (error) {
    console.error("Error formatting date:", error);
    return dateString;
  }
}

function getEventLocation(event: any) {
  if (event.place && event.place.country && event.place.locality) {
    const country =
      event.place.country === "IS" ? "Iceland" : event.place.country;
    return `${event.place.locality}, ${country}`;
  } else if (event.place && event.place.country) {
    const country =
      event.place.country === "IS" ? "Iceland" : event.place.country;
    return country;
  } else {
    return "Iceland";
  }
}
