"use client";
import styled from "styled-components";
import React from "react";
import Image from "next/image";

const NEWS_CARDS = [
  {
    image: "/resources/images/news1.png",
    label: "ÁTAKSVERKEFNI",
    title: "Smíðum saman playbook vertonet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc morbi risus auctor ultricies. Ornare dapibus arcu sit lorem. Turpis est a dignissim sit rhoncus magnis fames ultrices pulvinar.",
  },
  {
    image: "/resources/images/news2.png",
    label: "ÁTAKSVERKEFNI",
    title: "Smíðum saman playbook vertonet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc morbi risus auctor ultricies. Ornare dapibus arcu sit lorem. Turpis est a dignissim sit rhoncus magnis fames ultrices pulvinar.",
  },
  {
    image: "/resources/images/news3.png",
    label: "ÁTAKSVERKEFNI",
    title: "Smíðum saman playbook vertonet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc morbi risus auctor ultricies. Ornare dapibus arcu sit lorem. Turpis est a dignissim sit rhoncus magnis fames ultrices pulvinar.",
  },
  {
    image: "/resources/images/news3.png",
    label: "ÁTAKSVERKEFNI",
    title: "Smíðum saman playbook vertonet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Nunc morbi risus auctor ultricies. Ornare dapibus arcu sit lorem. Turpis est a dignissim sit rhoncus magnis fames ultrices pulvinar.",
  },
];

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.background.baby};
  padding: 8rem ${({ theme }) => theme.space.xl};
  width: 100%;
`;

const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xl};
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 350;
`;

const Carousel = styled.div`
  width: 100%;
  overflow: hidden;
`;

const Cards = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.lg};

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

const Card = styled.div`
  flex: 0 0 25.8125rem;
  background: ${({ theme }) => theme.colors.white};
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  height: 40rem;
  overflow: hidden;
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 17.875rem;
  position: relative;
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.space.lg} ${({ theme }) => theme.space.lg};
  height: calc(45rem - 17.875rem);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`;

const CardLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.lg};
`;

const CardHeading = styled.h3`
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 300;
`;

const CardDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.loose};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export default function NewsSection() {
  return (
    <Section>
      <Content>
        <Title>Hvað er að frétta?</Title>
        <Carousel>
          <Cards>
            {NEWS_CARDS.map((card, index) => (
              <Card key={index}>
                <CardImageWrapper>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    style={{ objectFit: "cover" }}
                    loading="eager"
                  />
                </CardImageWrapper>
                <CardContent>
                  <CardLabel>{card.label}</CardLabel>
                  <CardText>
                    <CardHeading>{card.title}</CardHeading>
                    <CardDescription>{card.description}</CardDescription>
                  </CardText>
                </CardContent>
              </Card>
            ))}
            {/* Duplicate cards for infinite scroll */}
            {NEWS_CARDS.map((card, index) => (
              <Card key={`dup-${index}`}>
                <CardImageWrapper>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    style={{ objectFit: "cover" }}
                    loading="eager"
                  />
                </CardImageWrapper>
                <CardContent>
                  <CardLabel>{card.label}</CardLabel>
                  <CardText>
                    <CardHeading>{card.title}</CardHeading>
                    <CardDescription>{card.description}</CardDescription>
                  </CardText>
                </CardContent>
              </Card>
            ))}
          </Cards>
        </Carousel>
      </Content>
    </Section>
  );
}
