"use client";

import styled from "styled-components";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 57.125rem;
  padding: 9.5rem 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  flex-shrink: 0;
  background: #f7f0f3;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  align-self: stretch;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  align-self: stretch;
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  font-style: normal;
  font-weight: 350;
  line-height: 4.5rem;
  text-align: left;
  width: 43.125rem;
  height: auto;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-family: ${({ theme }) => theme.fonts.matter};
  width: 43.125rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-style: normal;
  font-weight: 300;
  line-height: 2.25rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.lg};
  width: 43.125rem;
`;

export default function CTASection() {
  const { t } = useTranslation();

  return (
    <Section>
      <Content>
        <TextContainer>
          <Heading>{t("cta.title")}</Heading>
          <Description>{t("cta.description")}</Description>
          <ButtonContainer>
            <Button showArrow={false}>{t("cta.contact")}</Button>
          </ButtonContainer>
        </TextContainer>
      </Content>
    </Section>
  );
}
