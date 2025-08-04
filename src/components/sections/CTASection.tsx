"use client";

import styled from "styled-components";
import Button from "../ui/Button";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import AnimatedText from "../animation/AnimatedText";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Section = styled.section`
  display: flex;
  width: 100%;
  height: 50rem;
  padding: 9.5rem 1.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  flex-shrink: 0;
  background: ${({ theme }) => theme.colors.background.baby};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 6rem 1rem;
    height: auto;
    min-height: 35rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.5rem 0.75rem;
    height: auto;
    min-height: 2.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  align-self: stretch;
  width: 100%;
  max-width: 41rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    max-width: none;
    padding: 0 2rem;
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 100%;
    padding: 0.5rem;
    gap: 0.5rem;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  align-self: stretch;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    padding: 0;
    gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding: 1rem;
    gap: 1rem;
  }
`;

const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-size: ${({ theme }) => theme.fontSizes["5xl"]};
  font-style: normal;
  font-weight: 350;
  line-height: 4.5rem;
  text-align: left;
  width: 41rem;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    max-width: 100%;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    line-height: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 100%;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    line-height: 2.5rem;
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray[600]};
  font-family: ${({ theme }) => theme.fonts.matter};
  width: 41rem;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-style: normal;
  font-weight: 300;
  line-height: 2.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: 1.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    max-width: 100%;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.sm};
    padding: 0.5rem 0 0.5rem 0;
    padding-right: ${({ theme }) => theme.space.md};
    font-weight: 200;
    line-height: 1.25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.space.lg};
  width: 41rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    justify-content: flex-start;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export default function CTASection() {
  const { t } = useTranslation();
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate button
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.2, ease: "power2.out" }
      );
    }
  }, [t]);

  return (
    <Section>
      <Content>
        <TextContainer>
          <Heading>
            <AnimatedText
              animationType="words"
              duration={1.5}
              stagger={0.04}
              ease="power3.out"
            >
              {t("cta.title")}
            </AnimatedText>
          </Heading>
          <Description>
            <AnimatedText
              animationType="words"
              duration={1.2}
              stagger={0.02}
              ease="power2.out"
              delay={0.5}
            >
              {t("cta.description")}
            </AnimatedText>
          </Description>
          <ButtonContainer ref={buttonRef}>
            <Link href="/contact" style={{ textDecoration: "none" }}>
              <Button showArrow={false}>{t("cta.contact")}</Button>
            </Link>
          </ButtonContainer>
        </TextContainer>
      </Content>
    </Section>
  );
}
