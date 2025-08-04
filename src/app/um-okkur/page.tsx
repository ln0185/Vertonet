"use client";

import styled from "styled-components";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  width: 100%;
  max-width: calc(100% - 6rem);
  margin: 6rem auto;
  padding: 0;

  @media (max-width: 768px) {
    max-width: calc(100% - 2rem);
    margin: 4rem auto;
    margin-bottom: 1rem;
  }
`;

const PhotoGrid = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 2.5rem 1rem;
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const MainPhoto = styled.div`
  width: 100%;
  height: 35rem;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    height: 23rem;
  }
`;

const MainPhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const PhotoGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  width: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SmallPhoto = styled.div<{ height?: string }>`
  flex: 1 1 48.5%;
  min-width: 0;
  height: ${(props) => props.height || "13.5rem"};
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const WidePhoto = styled.div`
  width: 100%;
  height: 20rem;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ContentSection = styled.section`
  padding: 2.5rem 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1.5rem 1rem;
  }
`;

const Label = styled.div`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.dark};
`;

const TextContent = styled.div`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: 1.3125rem;
  font-weight: normal;
  line-height: 2.0625rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  max-width: 45rem;
  width: 100%;

  @media (max-width: 768px) {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const BoardSection = styled.section`
  padding: 2.5rem 3rem;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const BoardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2.5rem 0;
  gap: 2.5rem 1.25rem;
  width: 100%;
  justify-content: flex-start;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const BoardPhoto = styled.div`
  width: 100%;
  height: 25rem;
  background-color: #e0e0e0;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    height: 20rem;
  }
`;

const BoardPhotoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

interface BoardCardProps {
  index: number;
}

const BoardCard = styled.div<BoardCardProps>`
  width: 25.6875rem;
  display: flex;
  flex-direction: column;
  gap: 1.8125rem;

  @media (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    cursor: pointer;

    ${BoardPhoto} {
      transform: scale(1.02);
    }
  }
`;

const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Name = styled.h3`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text.dark};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.muted};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <Container>
      <PhotoGrid>
        <MainPhoto>
          <MainPhotoImage
            src="/resources/images/umokkur1.png"
            alt={t("aboutPage.imageAlts.event")}
            onLoad={() => console.log("Main photo loaded")}
            onError={(e) => console.error("Main photo error:", e)}
          />
        </MainPhoto>
        <PhotoGroup>
          <SmallPhoto>
            <Image
              src="/resources/images/umokkur2.png"
              alt={t("aboutPage.imageAlts.activity")}
              fill
              style={{ objectFit: "cover" }}
            />
          </SmallPhoto>
          <SmallPhoto>
            <Image
              src="/resources/images/umokkur3.png"
              alt={t("aboutPage.imageAlts.workshop")}
              fill
              style={{ objectFit: "cover" }}
            />
          </SmallPhoto>
          <WidePhoto>
            <Image
              src="/resources/images/umokkur4.png"
              alt={t("aboutPage.imageAlts.team")}
              fill
              style={{ objectFit: "cover" }}
            />
          </WidePhoto>
        </PhotoGroup>
      </PhotoGrid>

      <ContentSection>
        <Label>{t("aboutPage.label")}</Label>
        <TextContent>
          <p>{t("aboutPage.content.p1")}</p>
          <p>{t("aboutPage.content.p2")}</p>
          <p>{t("aboutPage.content.p3")}</p>
          <p>{t("aboutPage.content.p4")}</p>
        </TextContent>
      </ContentSection>

      <BoardSection>
        <Label>{t("aboutPage.boardLabel")}</Label>
        <BoardGrid>
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <BoardCard key={index} index={index}>
              <BoardPhoto>
                <BoardPhotoImage
                  src="/resources/images/karitas.png"
                  alt="Karítas Ólafsdóttir"
                  onLoad={() => console.log(`Board photo ${index} loaded`)}
                  onError={(e) =>
                    console.error(`Board photo ${index} error:`, e)
                  }
                />
              </BoardPhoto>
              <CardContent>
                <CardText>
                  <Name>Karítas Ólafsdóttir</Name>
                  <Title>{t("aboutPage.boardMember.title")}</Title>
                </CardText>
                <Image
                  src="/resources/icons/linkedin.svg"
                  alt={t("aboutPage.boardMember.linkedinAlt")}
                  width={30}
                  height={30}
                />
              </CardContent>
            </BoardCard>
          ))}
        </BoardGrid>
      </BoardSection>
    </Container>
  );
}
