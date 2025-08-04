"use client";

import styled from "styled-components";
import Button from "../ui/Button";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import AnimatedText from "../animation/AnimatedText";
import { useGSAP } from "@/lib/hooks/useGSAP";
import { useEffect, useRef } from "react";

const Section = styled.section`
  padding: 9.25rem ${({ theme }) => theme.space.xl};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 7rem ${({ theme }) => theme.space.lg};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 5rem ${({ theme }) => theme.space.md};
  }
`;

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const TitleContainer = styled.div`
  width: 100%;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-weight: 350;
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  line-height: 3.375rem;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes["3xl"]};
    line-height: 2.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes["2xl"]};
    line-height: 2.25rem;
  }
`;

const RightAlignedContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const TextContainer = styled.div`
  width: 35.5rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-right: 2rem;
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 2.125rem;
  color: ${({ theme }) => theme.colors.gray[600]};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: 1.75rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: 1.5rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function AboutSection() {
  const { t } = useTranslation();
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate button
    if (buttonRef.current) {
      const { gsap } = require("gsap");
      gsap.fromTo(
        buttonRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 1.5, ease: "power2.out" }
      );
    }
  }, [t]);

  return (
    <Section>
      <Content>
        <TitleContainer>
          <Title>
            <AnimatedText
              animationType="chars"
              duration={1.2}
              stagger={0.03}
              ease="power3.out"
            >
              {t("about.title")}
            </AnimatedText>
          </Title>
        </TitleContainer>
        <RightAlignedContent>
          <TextContainer>
            <Description>
              <AnimatedText
                animationType="words"
                duration={1}
                stagger={0.02}
                ease="power2.out"
                delay={0.5}
              >
                {t("about.description")}
              </AnimatedText>
            </Description>
            <div ref={buttonRef}>
              <StyledLink href="/um-okkur">
                <Button variant="text">{t("about.readMore")}</Button>
              </StyledLink>
            </div>
          </TextContainer>
        </RightAlignedContent>
      </Content>
    </Section>
  );
}
