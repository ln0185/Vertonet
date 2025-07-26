"use client";

import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";

const Section = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space["4xl"]};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space.xl};
`;

const TextContainer = styled.div`
  width: 100%;
  max-width: 32rem;
  height: 33rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-weight: 350;
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.loose};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Image = styled.div`
  width: 34.3125rem;
  height: 33.3125rem;
  background-image: url("/resources/images/events.jpg");
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function EventsSection() {
  return (
    <Section>
      <Content>
        <TextContainer>
          <Info>
            <Heading>Viðburðir Vertonet</Heading>
            <Description>
              Vertonet heldur margvíslega viðburði í samstarfi við helstu
              upplýsingatæknifyrirtæki á Íslandi og stendur fyrir verkefnum sem
              stuðla að því að auka fjölbreytileika í upplýsingatækni.
            </Description>
            <StyledLink href="/vidburdir">
              <Button>Skoða viðburði</Button>
            </StyledLink>
          </Info>
        </TextContainer>
        <Image />
      </Content>
    </Section>
  );
}
