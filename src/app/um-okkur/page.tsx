"use client";

import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  width: 100%;
  max-width: 90rem;
  margin: 6rem auto;
  padding: 0;
`;

const PhotoGrid = styled.div`
  display: flex;
  gap: 1.25rem;
  padding: 2.5rem 1.25rem;
  width: 100%;
`;

const MainPhoto = styled.div`
  width: 37.8125rem;
  height: 34.75rem;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const PhotoGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  width: 49.6875rem;
`;

const SmallPhoto = styled.div<{ height?: string }>`
  width: 23.5625rem;
  height: ${(props) => props.height || "13.5rem"};
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const WidePhoto = styled.div`
  width: 48.375rem;
  height: 20.1875rem;
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ContentSection = styled.section`
  padding: 2.5rem 5rem;
  display: flex;
  gap: 27.9375rem;
`;

const Label = styled.div`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

const TextContent = styled.div`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: 1.3125rem;
  line-height: 2.0625rem;
  color: ${({ theme }) => theme.colors.gray[600]};
  width: 45.6875rem;
`;

const BoardSection = styled.section`
  padding: 2.5rem 5rem;
`;

const BoardTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 5rem;
`;

const BoardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  width: 100%;
  justify-content: flex-start;
`;

const BoardPhoto = styled.div`
  width: 100%;
  height: 25rem;
  background-color: ${({ theme }) => theme.colors.background.board};
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
`;

const BoardCard = styled.div`
  width: 25.6875rem;
  display: flex;
  flex-direction: column;
  gap: 1.8125rem;

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
`;

const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text.muted};
  margin: 0;
`;

export default function AboutPage() {
  return (
    <Container>
      <PhotoGrid>
        <MainPhoto>
          <Image
            src="/resources/images/umokkur1.png"
            alt="Vertonet event"
            fill
            style={{ objectFit: "cover" }}
          />
        </MainPhoto>
        <PhotoGroup>
          <SmallPhoto>
            <Image
              src="/resources/images/umokkur2.png"
              alt="Vertonet activity"
              fill
              style={{ objectFit: "cover" }}
            />
          </SmallPhoto>
          <SmallPhoto>
            <Image
              src="/resources/images/umokkur3.png"
              alt="Vertonet workshop"
              fill
              style={{ objectFit: "cover" }}
            />
          </SmallPhoto>
          <WidePhoto>
            <Image
              src="/resources/images/umokkur4.png"
              alt="Vertonet team"
              fill
              style={{ objectFit: "cover" }}
            />
          </WidePhoto>
        </PhotoGroup>
      </PhotoGrid>

      <ContentSection>
        <Label>UM OKKUR</Label>
        <TextContent>
          <p>
            Lorem ipsum dolor sit amet consectetur. Enim nec venenatis eu quam
            orci. Tincidunt id egestas magna ut non a elit curabitur viverra.
          </p>
          <p>
            Turpis vulputate donec ullamcorper faucibus pellentesque amet. Amet
            amet velit nunc ultrices. Praesent vitae feugiat vel adipiscing
            faucibus nullam ac id egestas. Magnis mauris morbi quam nulla duis.
            Pellentesque dignissim vitae integer tellus sed volutpat. Nunc in
            pellentesque turpis cursus massa.
          </p>
          <p>
            Turpis vulputate donec ullamcorper faucibus pellentesque amet. Amet
            amet velit nunc ultrices. Praesent vitae feugiat vel adipiscing
            faucibus nullam ac id egestas. Magnis mauris morbi quam nulla duis.
            Pellentesque dignissim.
          </p>
        </TextContent>
      </ContentSection>

      <BoardSection>
        <BoardTitle>STJÓRN</BoardTitle>
        <BoardGrid>
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <BoardCard key={index}>
              <BoardPhoto>
                <Image
                  src="/resources/images/karitas.png"
                  alt="Karítas Ólafsdóttir"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </BoardPhoto>
              <CardContent>
                <CardText>
                  <Name>Karítas Ólafsdóttir</Name>
                  <Title>Vefstjóri og fjölmiðlafulltrúi</Title>
                </CardText>
                <Image
                  src="/resources/icons/arrow-up-right.svg"
                  alt="Arrow"
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
