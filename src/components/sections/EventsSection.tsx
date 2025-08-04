"use client";

import styled from "styled-components";
import Button from "../ui/Button";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space["4xl"]};
  background: ${({ theme }) => theme.colors.background.baby};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.space.lg} ${({ theme }) => theme.space.md};
  }

  @media (max-width: ${({ theme }) =>
      theme.breakpoints.tablet}) and (min-width: ${({ theme }) =>
      theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.space.xl} ${({ theme }) => theme.space.lg};
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.space.lg};
  }
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 32rem;
  height: 33rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    max-width: none;
    height: auto;
    justify-content: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: auto;
    justify-content: flex-start;
    padding-bottom: ${({ theme }) => theme.space.sm};
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
  }
`;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-weight: 350;
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.gray[700]};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.loose};
  color: ${({ theme }) => theme.colors.gray[600]};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const Image = styled.div`
  width: 34rem;
  height: 33rem;
  background-image: url("/resources/images/events.jpg");
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    height: 20rem;
    order: -1;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function EventsSection() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const getTranslatedTitle = () =>
    currentLanguage === "en" ? "Vertonet Events" : "Viðburðir Vertonet";
  const getTranslatedDescription = () =>
    currentLanguage === "en"
      ? "Vertonet hosts various events in collaboration with leading tech companies in Iceland and runs projects that promote diversity in IT."
      : "Vertonet heldur margvíslega viðburði í samstarfi við helstu upplýsingatæknifyrirtæki á Íslandi og stendur fyrir verkefnum sem stuðla að því að auka fjölbreytileika í upplýsingatækni.";
  const getTranslatedButton = () =>
    currentLanguage === "en" ? "View Events" : "Skoða viðburði";

  return (
    <Section>
      <Content>
        <TextContainer>
          <Info>
            <Heading>{getTranslatedTitle()}</Heading>
            <Description>{getTranslatedDescription()}</Description>
            <StyledLink href="/vidburdir">
              <Button>{getTranslatedButton()}</Button>
            </StyledLink>
          </Info>
        </TextContainer>
        <Image />
      </Content>
    </Section>
  );
}
