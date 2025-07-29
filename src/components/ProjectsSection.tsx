"use client";

import styled from "styled-components";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Section = styled.section`
  width: 100%;
  height: 57.125rem;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.space.xl};
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 54.625rem;
  background-image: url("/resources/images/companies.jpg");
  background-position: center;
  background-size: cover;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const CardContainer = styled.div`
  position: absolute;
  left: 3.5625rem;
  top: 50%;
  transform: translateY(-50%);
  padding: ${({ theme }) =>
    `${theme.space.xs} ${theme.space.xl} ${theme.space.xs} 0`};
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[100]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: 3rem;
  width: 34.3125rem;
  height: 44.5rem;
`;

const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-weight: 350;
  font-size: ${({ theme }) => theme.fontSizes["3xl"]};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.loose};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export default function ProjectsSection() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const getTranslatedLabel = () =>
    currentLanguage === "en" ? "PROJECTS" : "ÁTAKSVERKEFNI";
  const getTranslatedTitle = () =>
    currentLanguage === "en"
      ? "Vertonet runs projects that promote diversity in IT"
      : "Vertonet stendur fyrir verkefnum sem stuðla að því að auka fjölbreytileika í upplýsingatækni";
  const getTranslatedDescription = () =>
    currentLanguage === "en"
      ? "We are always looking for new and exciting opportunities to strengthen our network and create a platform for women and non-binary individuals in IT."
      : "Við erum alltaf á höttunum eftir nýjum og spennandi tækifærum til að efla tengslanet okkar og skapa vettvang fyrir konur og kvár í upplýsingatækni.";
  const getTranslatedButton = () =>
    currentLanguage === "en" ? "View Projects" : "Skoða verkefni";

  return (
    <Section>
      <BackgroundImage />
      <CardContainer>
        <Card>
          <Content>
            <Label>{getTranslatedLabel()}</Label>
            <TextContainer>
              <Heading>{getTranslatedTitle()}</Heading>
              <Description>{getTranslatedDescription()}</Description>
            </TextContainer>
            <Button>{getTranslatedButton()}</Button>
          </Content>
        </Card>
      </CardContainer>
    </Section>
  );
}
