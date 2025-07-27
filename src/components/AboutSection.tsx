"use client";

import styled from "styled-components";
import Button from "./Button";
import Link from "next/link";

const Section = styled.section`
  padding: 9.25rem ${({ theme }) => theme.space.xl};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.baby};
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
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 2.125rem;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default function AboutSection() {
  return (
    <Section>
      <Content>
        <TitleContainer>
          <Title>Hvað er Vertonet ?</Title>
        </TitleContainer>
        <RightAlignedContent>
          <TextContainer>
            <Description>
              Markmið okkar er að skapa vettvang fyrir konur og kvár í
              margvíslegum störfum innan atvinnugreinarinnar til þess að
              tengjast, fræðast og styðja hvert annað
            </Description>
            <StyledLink href="/um-okkur">
              <Button variant="text">Lesa um Vertonet</Button>
            </StyledLink>
          </TextContainer>
        </RightAlignedContent>
      </Content>
    </Section>
  );
}
