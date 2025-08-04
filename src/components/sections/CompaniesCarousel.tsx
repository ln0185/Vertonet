"use client";

import Image from "next/image";
import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";

// Individual logo dimensions from Figma design
const LOGO_DIMENSIONS = [
  { width: 184, height: 87 }, // logo1
  { width: 205.06, height: 65 }, // logo2
  { width: 145.35, height: 51 }, // logo3
  { width: 151.2, height: 80 }, // logo4
  { width: 141, height: 60 }, // logo5
  { width: 127.747, height: 67 }, // logo6
  { width: 188, height: 30 }, // logo7
  { width: 245, height: 70 }, // logo8
];

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background.baby};
  margin: 0;
  padding: 1.5rem 0;
  width: 100%;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0.5rem 0;
    margin: 0;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 87px;
  flex-shrink: 0;
  margin-right: 1.3125rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 40px;
    margin-right: 0.75rem;
  }

  &:nth-child(5) {
    align-items: flex-end;
    padding-bottom: 0.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      padding-bottom: 0.125rem;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Logo = styled(Image)`
  object-fit: contain;
  max-height: 100%;
`;

const Track = styled.div<{ $width: number }>`
  display: flex;
  align-items: center;
  width: ${(props) => props.$width}px;

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-33.333%);
    }
  }

  animation: scroll 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const LogoSet = styled.div`
  display: flex;
`;

export default function CompaniesCarousel() {
  const [trackWidth, setTrackWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (trackRef.current) {
      const singleSetWidth = trackRef.current.scrollWidth / 3;
      setTrackWidth(singleSetWidth * 3);
    }
  }, []);

  const renderLogos = () =>
    LOGO_DIMENSIONS.map((dimensions, index) => (
      <LogoWrapper key={`logo-${index}`}>
        <Logo
          src={`/resources/logos/logo${index + 1}.svg`}
          alt="Company logo"
          width={dimensions.width}
          height={dimensions.height}
          loading="eager"
          priority={index < 3}
          draggable={false}
        />
      </LogoWrapper>
    ));

  return (
    <Section>
      <CarouselContainer>
        <Track ref={trackRef} $width={trackWidth}>
          <LogoSet>{renderLogos()}</LogoSet>
          <LogoSet>{renderLogos()}</LogoSet>
          <LogoSet>{renderLogos()}</LogoSet>
        </Track>
      </CarouselContainer>
    </Section>
  );
}
