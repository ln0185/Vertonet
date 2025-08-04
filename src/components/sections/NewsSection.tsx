"use client";
import styled from "styled-components";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const NEWS_CARDS = [
  {
    image: "/resources/images/news1.png",
    label: "ÁTAKSVERKEFNI",
    title: "Smíðum saman playbook fyrir fjölbreytileika",
    description:
      "Vertonet hefur byrjað að þróa playbook sem leiðbeiningar fyrir fyrirtæki um hvernig þau geta aukið fjölbreytileika í starfsliði sínu. Playbookið mun innihalda bestu starfsvenjur og aðferðir til að skapa inklúsíf umhverfi fyrir konur og kynsegin einstaklinga í tækni.",
  },
  {
    image: "/resources/images/news2.png",
    label: "VIÐBURÐUR",
    title: "Fyrirtækjaheimsókn til Gangverk",
    description:
      "Vertonet hélt fyrirtækjaheimsókn til Gangverk þar sem meðlimir gátu kynnt sér hvernig fyrirtækið vinnur að fjölbreytileika og inklúsífni. Heimóknin gaf tækifæri á að læra af reynslu og bestu starfsvenjum fyrirtækisins.",
  },
  {
    image: "/resources/images/news3.png",
    label: "HLAÐVARP",
    title: "Nýtt þáttaröð um fjölbreytileika",
    description:
      "Vertonet hefur sett af stað nýja þáttaröð í hlaðvarpi um fjölbreytileika í tækni. Þættirnir fjalla um reynslu konna og kynsegin einstaklinga í greininni og gefa innsýn í hvernig fyrirtæki geta skapað inklúsífari umhverfi.",
  },
  {
    image: "/resources/images/news1.png",
    label: "VIÐBURÐUR",
    title: "Verkefni með Háskóla Íslands",
    description:
      "Vertonet er að vinna að verkefni með Háskóla Íslands til að auka fjölbreytileika í tæknimenntun. Verkefnið miðar að því að laða að fleiri konur og kynsegin einstaklinga til tæknigreinarinnar og skapa betri tækifæri fyrir þá.",
  },
  {
    image: "/resources/images/news2.png",
    label: "ÁTAKSVERKEFNI",
    title: "Könnun á fjölbreytileika í tækni",
    description:
      "Vertonet hefur lokið könnun á fjölbreytileika í tæknigreinum á Íslandi. Niðurstöðurnar sýna framvindu en einnig þörf á frekari aðgerðum til að auka fjölbreytileika og skapa jafnrétti fyrir konur og kynsegin einstaklinga.",
  },
  {
    image: "/resources/images/news3.png",
    label: "HLAÐVARP",
    title: "Mentoring program í hlaðvarpi",
    description:
      "Vertonet hefur sett af stað nýtt mentoring program fyrir konur og kynsegin einstaklinga í tækni. Programmið tengir reynsluríka fagfólk við þá sem eru að byrja feril sinn eða vilja þróa sig frekar í greininni.",
  },
  {
    image: "/resources/images/news1.png",
    label: "VIÐBURÐUR",
    title: "Vertonet hlaut verðlaun",
    description:
      "Vertonet hlaut verðlaun fyrir framúrskarandi starf við að auka fjölbreytileika í tækni á Íslandi. Verðlaunin viðurkenna langvarandi áhrif samtakanna og framlag þeirra til að skapa inklúsífari tæknigrein.",
  },
];

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.space["3xl"]} ${({ theme }) => theme.space.xl};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.xl};
  }
`;

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.space.sm};
  }
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 350;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

const MoreNewsLink = styled.a`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[700]};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  transition: color 0.2s ease;
  align-self: flex-end;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MoreNewsArrow = styled.div`
  width: 2rem;
  height: 2rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  svg {
    width: 0.875rem;
    height: 0.875rem;
    fill: ${({ theme }) => theme.colors.gray[700]};
  }
`;

const ArrowButton = styled.button`
  width: 3rem;
  height: 3rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray[100]};
    border-color: ${({ theme }) => theme.colors.gray[500]};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    fill: ${({ theme }) => theme.colors.gray[700]};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 0.875rem;
      height: 0.875rem;
    }
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.space.sm};
  margin-top: -1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: -1.5rem;
  }
`;

const Carousel = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Cards = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.lg};
  transform: translateX(var(--translate-x, 0rem));
  transition: transform 0.3s ease;
`;

const Card = styled.div`
  flex: 0 0 25.8125rem;
  background: ${({ theme }) => theme.colors.white};
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  height: 40rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex: 0 0 20rem;
    height: 34rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex: 0 0 18rem;
    height: 30rem;
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 17.875rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 14rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 12rem;
  }
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.space.lg} ${({ theme }) => theme.space.lg};
  height: calc(40rem - 17.875rem);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.space.md} ${({ theme }) => theme.space.md};
    height: calc(34rem - 14rem);
    gap: ${({ theme }) => theme.space.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.space.sm} ${({ theme }) => theme.space.sm};
    height: calc(30rem - 12rem);
    gap: ${({ theme }) => theme.space.sm};
  }
`;

const CardLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.space.md};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.space.sm};
  }
`;

const CardHeading = styled.h3`
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 300;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const CardDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.loose};
  color: ${({ theme }) => theme.colors.gray[500]};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xs};
  }
`;

export default function NewsSection() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const getTranslatedLabel = (label: string) => {
    const translations: { [key: string]: { en: string; is: string } } = {
      ÁTAKSVERKEFNI: { en: "PROJECTS", is: "ÁTAKSVERKEFNI" },
      VIÐBURÐUR: { en: "EVENT", is: "VIÐBURÐUR" },
      HLAÐVARP: { en: "PODCAST", is: "HLAÐVARP" },
    };
    return (
      translations[label]?.[
        currentLanguage as keyof { en: string; is: string }
      ] || label
    );
  };

  const getTranslatedTitle = (title: string) => {
    const translations: { [key: string]: { en: string; is: string } } = {
      "Smíðum saman playbook fyrir fjölbreytileika": {
        en: "Building a diversity playbook together",
        is: "Smíðum saman playbook fyrir fjölbreytileika",
      },
      "Fyrirtækjaheimsókn til Gangverk": {
        en: "Company visit to Gangverk",
        is: "Fyrirtækjaheimsókn til Gangverk",
      },
      "Nýtt þáttaröð um fjölbreytileika": {
        en: "New podcast series about diversity",
        is: "Nýtt þáttaröð um fjölbreytileika",
      },
      "Verkefni með Háskóla Íslands": {
        en: "Project with University of Iceland",
        is: "Verkefni með Háskóla Íslands",
      },
      "Könnun á fjölbreytileika í tækni": {
        en: "Survey on diversity in tech",
        is: "Könnun á fjölbreytileika í tækni",
      },
      "Mentoring program í hlaðvarpi": {
        en: "Mentoring program in podcast",
        is: "Mentoring program í hlaðvarpi",
      },
      "Vertonet hlaut verðlaun": {
        en: "Vertonet received an award",
        is: "Vertonet hlaut verðlaun",
      },
    };
    return (
      translations[title]?.[
        currentLanguage as keyof { en: string; is: string }
      ] || title
    );
  };

  const getTranslatedDescription = (description: string) => {
    const translations: { [key: string]: { en: string; is: string } } = {
      "Vertonet hefur byrjað að þróa playbook sem leiðbeiningar fyrir fyrirtæki um hvernig þau geta aukið fjölbreytileika í starfsliði sínu. Playbookið mun innihalda bestu starfsvenjur og aðferðir til að skapa inklúsíf umhverfi fyrir konur og kynsegin einstaklinga í tækni.":
        {
          en: "Vertonet has started developing a playbook as a guide for companies on how they can increase diversity in their workforce. The playbook will include best practices and methods to create an inclusive environment for women and non-binary individuals in tech.",
          is: "Vertonet hefur byrjað að þróa playbook sem leiðbeiningar fyrir fyrirtæki um hvernig þau geta aukið fjölbreytileika í starfsliði sínu. Playbookið mun innihalda bestu starfsvenjur og aðferðir til að skapa inklúsíf umhverfi fyrir konur og kynsegin einstaklinga í tækni.",
        },
      "Vertonet hélt fyrirtækjaheimsókn til Gangverk þar sem meðlimir gátu kynnt sér hvernig fyrirtækið vinnur að fjölbreytileika og inklúsífni. Heimóknin gaf tækifæri á að læra af reynslu og bestu starfsvenjum fyrirtækisins.":
        {
          en: "Vertonet held a company visit to Gangverk where members could learn about how the company works on diversity and inclusion. The visit provided an opportunity to learn from the company's experience and best practices.",
          is: "Vertonet hélt fyrirtækjaheimsókn til Gangverk þar sem meðlimir gátu kynnt sér hvernig fyrirtækið vinnur að fjölbreytileika og inklúsífni. Heimóknin gaf tækifæri á að læra af reynslu og bestu starfsvenjum fyrirtækisins.",
        },
      "Vertonet hefur sett af stað nýja þáttaröð í hlaðvarpi um fjölbreytileika í tækni. Þættirnir fjalla um reynslu konna og kynsegin einstaklinga í greininni og gefa innsýn í hvernig fyrirtæki geta skapað inklúsífari umhverfi.":
        {
          en: "Vertonet has launched a new podcast series about diversity in tech. The episodes discuss the experiences of women and non-binary individuals in the field and provide insights into how companies can create more inclusive environments.",
          is: "Vertonet hefur sett af stað nýja þáttaröð í hlaðvarpi um fjölbreytileika í tækni. Þættirnir fjalla um reynslu konna og kynsegin einstaklinga í greininni og gefa innsýn í hvernig fyrirtæki geta skapað inklúsífari umhverfi.",
        },
      "Vertonet er að vinna að verkefni með Háskóla Íslands til að auka fjölbreytileika í tæknimenntun. Verkefnið miðar að því að laða að fleiri konur og kynsegin einstaklinga til tæknigreinarinnar og skapa betri tækifæri fyrir þá.":
        {
          en: "Vertonet is working on a project with the University of Iceland to increase diversity in tech education. The project aims to attract more women and non-binary individuals to the tech field and create better opportunities for them.",
          is: "Vertonet er að vinna að verkefni með Háskóla Íslands til að auka fjölbreytileika í tæknimenntun. Verkefnið miðar að því að laða að fleiri konur og kynsegin einstaklinga til tæknigreinarinnar og skapa betri tækifæri fyrir þá.",
        },
      "Vertonet og Advania hafa undirritað samstarfssamning um að auka fjölbreytileika í tækni á Íslandi. Samstarfið mun fela í sér sameiginlega viðburði, menntun og þróun á bestu starfsvenjum fyrir inklúsíf vinnuumhverfi.":
        {
          en: "Vertonet and Advania have signed a partnership agreement to increase diversity in tech in Iceland. The partnership will include joint events, education, and development of best practices for inclusive work environments.",
          is: "Vertonet og Advania hafa undirritað samstarfssamning um að auka fjölbreytileika í tækni á Íslandi. Samstarfið mun fela í sér sameiginlega viðburði, menntun og þróun á bestu starfsvenjum fyrir inklúsíf vinnuumhverfi.",
        },
      "Vertonet hefur lokið könnun á fjölbreytileika í tæknigreinum á Íslandi. Niðurstöðurnar sýna framvindu en einnig þörf á frekari aðgerðum til að auka fjölbreytileika og skapa jafnrétti fyrir konur og kynsegin einstaklinga.":
        {
          en: "Vertonet has completed a survey on diversity in tech fields in Iceland. The results show progress but also the need for further action to increase diversity and create equality for women and non-binary individuals.",
          is: "Vertonet hefur lokið könnun á fjölbreytileika í tæknigreinum á Íslandi. Niðurstöðurnar sýna framvindu en einnig þörf á frekari aðgerðum til að auka fjölbreytileika og skapa jafnrétti fyrir konur og kynsegin einstaklinga.",
        },
      "Vertonet hefur sett af stað nýtt mentoring program fyrir konur og kynsegin einstaklinga í tækni. Programmið tengir reynsluríka fagfólk við þá sem eru að byrja feril sinn eða vilja þróa sig frekar í greininni.":
        {
          en: "Vertonet has launched a new mentoring program for women and non-binary individuals in tech. The program connects experienced professionals with those who are starting their careers or want to develop further in the field.",
          is: "Vertonet hefur sett af stað nýtt mentoring program fyrir konur og kynsegin einstaklinga í tækni. Programmið tengir reynsluríka fagfólk við þá sem eru að byrja feril sinn eða vilja þróa sig frekar í greininni.",
        },
      "Vertonet hlaut verðlaun fyrir framúrskarandi starf við að auka fjölbreytileika í tækni á Íslandi. Verðlaunin viðurkenna langvarandi áhrif samtakanna og framlag þeirra til að skapa inklúsífari tæknigrein.":
        {
          en: "Vertonet received an award for outstanding work in increasing diversity in tech in Iceland. The award recognizes the organization's long-term impact and contribution to creating a more inclusive tech industry.",
          is: "Vertonet hlaut verðlaun fyrir framúrskarandi starf við að auka fjölbreytileika í tækni á Íslandi. Verðlaunin viðurkenna langvarandi áhrif samtakanna og framlag þeirra til að skapa inklúsífari tæknigrein.",
        },
    };
    return (
      translations[description]?.[
        currentLanguage as keyof { en: string; is: string }
      ] || description
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(NEWS_CARDS.length - 1, prev + 1));
  };

  const translateX = -currentIndex * (25.8125 + 2); // card width + gap

  return (
    <Section id="news">
      <Content>
        <Header>
          <Title>
            {currentLanguage === "en" ? "What's New?" : "Hvað er að frétta?"}
          </Title>
          <MoreNewsLink href="#news">
            {t("news.moreNews")}
            <MoreNewsArrow>
              <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 5L12.5 10L7.5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MoreNewsArrow>
          </MoreNewsLink>
        </Header>
        <Carousel ref={carouselRef}>
          <Cards
            style={
              { "--translate-x": `${translateX}rem` } as React.CSSProperties
            }
          >
            {NEWS_CARDS.map((card, index) => (
              <Card key={index}>
                <CardImageWrapper>
                  <Image
                    src={card.image}
                    alt={getTranslatedTitle(card.title)}
                    fill
                    style={{ objectFit: "cover" }}
                    loading="eager"
                  />
                </CardImageWrapper>
                <CardContent>
                  <CardLabel>{getTranslatedLabel(card.label)}</CardLabel>
                  <CardText>
                    <CardHeading>{getTranslatedTitle(card.title)}</CardHeading>
                    <CardDescription>
                      {getTranslatedDescription(card.description)}
                    </CardDescription>
                  </CardText>
                </CardContent>
              </Card>
            ))}
          </Cards>
        </Carousel>
        <ArrowContainer>
          <ArrowButton onClick={handlePrevious} disabled={currentIndex === 0}>
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.5 15L7.5 10L12.5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ArrowButton>
          <ArrowButton
            onClick={handleNext}
            disabled={currentIndex === NEWS_CARDS.length - 1}
          >
            <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.5 5L12.5 10L7.5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ArrowButton>
        </ArrowContainer>
      </Content>
    </Section>
  );
}
