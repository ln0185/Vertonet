"use client";

import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";

const Section = styled.section`
  padding: ${({ theme }) => `${theme.space.xl} ${theme.space.xl}`};
  width: 100%;
  margin-top: ${({ theme }) => theme.space.xl};
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

const Content = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const TextContainer = styled.div`
  width: 39.375rem;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`;

const Label = styled.div`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.loose};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const StyledLink = styled(Link)`
  align-self: flex-start;
  text-decoration: none;
`;

export default function AboutSection() {
  return (
    <Section>
      <Content>
        <TextContainer>
          <Label>Um okkur</Label>
          <Title>
            Vertonet er félag sem vinnur að því að auka fjölbreytileika í
            upplýsingatækni
          </Title>
          <Description>
            Við erum hópur af fólki sem hefur áhuga á að gera upplýsingatækni
            aðgengilegri fyrir alla. Við vinnum að því að auka fjölbreytileika í
            upplýsingatækni með því að halda viðburði, námskeið og vinnustofur.
          </Description>
          <StyledLink href="/um-okkur">
            <Button>Lesa meira</Button>
          </StyledLink>
        </TextContainer>
      </Content>
    </Section>
  );
}
