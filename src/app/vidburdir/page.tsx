"use client";

import styled from "styled-components";
import Image from "next/image";
import CTASection from "@/components/CTASection";

const Container = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 9rem auto;
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

const EventCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 1rem 2.25rem ${({ theme }) => theme.colors.shadow.card};
  width: 100%;
  height: fit-content;

  &:hover {
    cursor: pointer;

    ${EventImage} {
      transform: scale(1.02);
    }
  }
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

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Fyrirtækjaheimsókn til Gangverk",
      location: "Ármúli 6, 108 Reykjavík",
      date: "18. september 2025, 14:00",
      image: "/resources/images/vidburdir1.png",
    },
    {
      id: 2,
      title: "Fyrirtækjaheimsókn til Advania",
      location: "Guðrúnartún 10, 105 Reykjavík",
      date: "24. október 2025, 17:00",
      image: "/resources/images/vidburdir2.png",
    },
    {
      id: 3,
      title: "Fyrirtækjaheimsókn til Kolibri",
      location: "Borgartún 26, Reykjavík",
      date: "14. janúar 2026, 17:00",
      image: "/resources/images/vidburdir3.png",
    },
    {
      id: 4,
      title: "Fyrirtækjaheimsókn til Aranja",
      location: "Nóatún 17, 105 Reykjavík",
      date: "23. februar 2025, 14:00",
      image: "/resources/images/vidburdir4.png",
    },
    {
      id: 5,
      title: "Fyrirtækjaheimsókn til Overcast",
      location: "Höfðabakka 9D, 110 Reykjavík",
      date: "18. mars 2025, 17:00",
      image: "/resources/images/vidburdir5.png",
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Fyrirtækjaheimsókn til Syndis",
      location: "Skeifan 19, 108 Reykjavík",
      date: "15. febrúar 2025, 17:00",
      image: "/resources/images/vidburdir6.png",
    },
    {
      id: 2,
      title: "Fyrirtækjaheimsókn til Origo",
      location: "Borgartún 37, 105 Reykjavík",
      date: "12. janúar 2025, 14:00",
      image: "/resources/images/umokkur3.png",
    },
    {
      id: 3,
      title: "Fyrirtækjaheimsókn til TM Software",
      location: "Borgartún 37, 105 Reykjavík",
      date: "23. nóvember 2026, 17:00",
      image: "/resources/images/umokkur1.png",
    },
  ];

  return (
    <>
      <Container>
        <PageTitle>Viðburðir á döfinni</PageTitle>

        <EventGrid>
          {upcomingEvents.map((event) => (
            <EventCard key={event.id}>
              <EventImage>
                <Image
                  src={event.image}
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
                      alt="Location"
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

        <PageTitle>Fyrri viðburðir</PageTitle>

        <EventGrid>
          {pastEvents.map((event) => (
            <EventCard key={event.id}>
              <EventImage>
                <Image
                  src={event.image}
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
                      alt="Location"
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
