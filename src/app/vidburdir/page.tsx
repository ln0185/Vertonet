"use client";

import styled from "styled-components";
import Image from "next/image";
import CTASection from "@/components/CTASection";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { buildApiUrl } from "@/lib/utils/api";

const Container = styled.div`
  width: 100%;
  max-width: calc(100% - 6rem);
  margin: 9rem auto;
  padding: 0;
`;

const PageTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-weight: 300;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
  margin-bottom: 2.5rem;
`;

const EventGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-bottom: 5rem;
`;

const EventImage = styled.div`
  width: 100%;
  height: 19.875rem;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 0.25rem 0.25rem ${({ theme }) => theme.colors.shadow.image};
`;

const EventCard = styled.div<{ $clickable?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 2.25rem ${({ theme }) => theme.colors.shadow.card};
  width: 100%;
  height: fit-content;

  ${({ $clickable }) =>
    $clickable &&
    `
    &:hover {
      cursor: pointer;

      ${EventImage} {
        transform: scale(1.02);
      }
    }
  `}
`;

const EventContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  padding: 0.75rem 0;
  padding-left: 0.5rem;
`;

const EventTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin: 0;
  line-height: normal;
  font-weight: 500;
`;

const EventDetails = styled.div`
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: 0.875rem;
  line-height: normal;
  white-space: nowrap;
`;

const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  white-space: nowrap;
`;

const LoadingText = styled.div`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  padding: 2rem 0;
`;

const ErrorText = styled.div`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.error || "#ef4444"};
  text-align: center;
  padding: 2rem 0;
`;

interface ApiEvent {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string | null;
  url: string | null;
  description: string | null;
}

export default function EventsPage() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [upcomingEvents, setUpcomingEvents] = useState<ApiEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          buildApiUrl("/api/events", {
            limit: "6",
            language: currentLanguage,
          })
        );

        if (!response.ok) {
          throw new Error("Failed to fetch events");
        }

        const data = await response.json();
        setUpcomingEvents(data.events || []);
      } catch (err) {
        console.error("Error fetching events:", err);
        setError("Failed to load upcoming events");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [currentLanguage]);

  const pastEvents =
    currentLanguage === "en"
      ? [
          {
            title: "Company Visit to Syndis",
            location: "Skeifan 19, 108 Reykjavík",
            date: "February 15, 2025, 17:00",
          },
          {
            title: "Company Visit to Origo",
            location: "Borgartún 37, 105 Reykjavík",
            date: "January 12, 2025, 14:00",
          },
          {
            title: "Company Visit to TM Software",
            location: "Borgartún 37, 105 Reykjavík",
            date: "November 23, 2024, 17:00",
          },
        ]
      : [
          {
            title: "Fyrirtækjaheimsókn til Syndis",
            location: "Skeifan 19, 108 Reykjavík",
            date: "15. febrúar 2025, 17:00",
          },
          {
            title: "Fyrirtækjaheimsókn til Origo",
            location: "Borgartún 37, 105 Reykjavík",
            date: "12. janúar 2025, 14:00",
          },
          {
            title: "Fyrirtækjaheimsókn til TM Software",
            location: "Borgartún 37, 105 Reykjavík",
            date: "23. nóvember 2024, 17:00",
          },
        ];

  const getTranslatedLocation = () =>
    currentLanguage === "en" ? "Location" : "Staðsetning";
  const getTranslatedUpcoming = () =>
    currentLanguage === "en" ? "Upcoming Events" : "Viðburðir á döfinni";
  const getTranslatedPast = () =>
    currentLanguage === "en" ? "Past Events" : "Fyrri viðburðir";

  return (
    <>
      <Container>
        <PageTitle>{getTranslatedUpcoming()}</PageTitle>

        {loading ? (
          <LoadingText>
            {currentLanguage === "en"
              ? "Loading upcoming events..."
              : "Hleður viðburði á döfinni..."}
          </LoadingText>
        ) : error ? (
          <ErrorText>{error}</ErrorText>
        ) : upcomingEvents.length > 0 ? (
          <EventGrid>
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={event.id || index}
                $clickable={true}
                onClick={() => {
                  console.log("Event clicked:", event.title, "URL:", event.url);
                  if (event.url) {
                    window.open(event.url, "_blank");
                  } else {
                    // Fallback: search for the event on Google
                    const searchQuery = encodeURIComponent(
                      event.title + " Iceland"
                    );
                    window.open(
                      `https://www.google.com/search?q=${searchQuery}`,
                      "_blank"
                    );
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                <EventImage>
                  {event.image ? (
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <Image
                      src={`/resources/images/vidburdir${(index % 6) + 1}.png`}
                      alt={event.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </EventImage>
                <EventContent>
                  <EventTitle>{event.title}</EventTitle>
                  <EventDetails>
                    <LocationWrapper>
                      <Image
                        src="/resources/icons/location.svg"
                        alt={getTranslatedLocation()}
                        width={11}
                        height={15}
                      />
                      <span>{event.location}</span>
                    </LocationWrapper>
                    <span>{event.date}</span>
                  </EventDetails>
                </EventContent>
              </EventCard>
            ))}
          </EventGrid>
        ) : (
          <LoadingText>
            {currentLanguage === "en"
              ? "No upcoming events found"
              : "Engir viðburðir á döfinni fundust"}
          </LoadingText>
        )}

        <PageTitle>{getTranslatedPast()}</PageTitle>

        <EventGrid>
          {pastEvents.map((event, index) => (
            <EventCard
              key={index}
              $clickable={false}
              onClick={() => {
                // Past events don't have URLs, so no action needed
              }}
              style={{ cursor: "default" }}
            >
              <EventImage>
                <Image
                  src={
                    index === 0
                      ? "/resources/images/vidburdir6.png"
                      : `/resources/images/umokkur${index + 1}.png`
                  }
                  alt={event.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </EventImage>
              <EventContent>
                <EventTitle>{event.title}</EventTitle>
                <EventDetails>
                  <LocationWrapper>
                    <Image
                      src="/resources/icons/location.svg"
                      alt={getTranslatedLocation()}
                      width={11}
                      height={15}
                    />
                    <span>{event.location}</span>
                  </LocationWrapper>
                  <span>{event.date}</span>
                </EventDetails>
              </EventContent>
            </EventCard>
          ))}
        </EventGrid>
      </Container>
      <CTASection />
    </>
  );
}
