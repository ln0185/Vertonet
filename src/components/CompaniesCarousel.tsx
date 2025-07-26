"use client";

import Image from "next/image";
import styled from "styled-components";
import React from "react";

const LOGOS = [
  { height: 87, width: 184 }, // 5.4375rem, 11.5rem
  { height: 65, width: 205 }, // 4.0625rem, 12.8125rem
  { height: 51, width: 145 }, // 3.1875rem, 9.0625rem
  { height: 80, width: 151 }, // 5rem, 9.4375rem
  { height: 58, width: 189 }, // 3.625rem, 11.8125rem
  { height: 67, width: 128 }, // 4.1875rem, 8rem
  { height: 66, width: 195 }, // 4.125rem, 12.1875rem
  { height: 70, width: 245 }, // 4.375rem, 15.3125rem
  { height: 70, width: 245 }, // 4.375rem, 15.3125rem
];

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.space.md} 0`};
  width: 100%;
  margin: ${({ theme }) => `${theme.space.xl} 0`};
  overflow: hidden;
`;

const Carousel = styled.div`
  max-width: max-content;
  margin: 0 auto;
  display: flex;
  gap: 1.3125rem;
  align-items: center;
  width: fit-content;

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }

  animation: scroll 40s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Logo = styled(Image)`
  /* Image styles are handled by Next.js Image component */
`;

export default function CompaniesCarousel() {
  return (
    <Section>
      <Carousel>
        {/* First set of logos */}
        {[...Array(9)].map((_, index) => (
          <Logo
            key={`logo-${index}`}
            src={`/resources/logos/logo${index + 1}.png`}
            alt="Company logo"
            width={LOGOS[index].width}
            height={LOGOS[index].height}
            loading="eager"
          />
        ))}
        {/* Second set for seamless loop */}
        {[...Array(9)].map((_, index) => (
          <Logo
            key={`logo-dup-${index}`}
            src={`/resources/logos/logo${index + 1}.png`}
            alt="Company logo"
            width={LOGOS[index].width}
            height={LOGOS[index].height}
            loading="eager"
          />
        ))}
      </Carousel>
    </Section>
  );
}
