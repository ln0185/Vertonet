"use client";

import styled from "styled-components";
import Button from "./Button";

const Section = styled.section`
  max-width: 90rem;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space.xl};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.space.xl};
`;

const TextContainer = styled.div`
  width: 32.9375rem;
  height: 33.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Label = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.loose};
  color: ${({ theme }) => theme.colors.primary};
`;

const Image = styled.div`
  width: 34.3125rem;
  height: 33.3125rem;
  background-image: url("/resources/images/events.jpg");
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

export default function EventsSection() {
  return (
    <Section>
      <Content>
        <TextContainer>
          <Label>Viðburðir</Label>
          <Info>
            <Heading>Vertonet stendur fyrir ýmsum viðburðum</Heading>
            <Description>
              Við bjóðum upp á fjölbreytta viðburði fyrir alla aldurshópa
            </Description>
          </Info>
          <Button>Skoða viðburði</Button>
        </TextContainer>
        <Image />
      </Content>
    </Section>
  );
}
