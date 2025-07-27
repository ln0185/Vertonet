"use client";

import styled from "styled-components";
import Button from "./Button";

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.space.xl} ${theme.space.sm}`};
`;

const Content = styled.div`
  max-width: 43.125rem;
  margin: 0 auto;
`;

const TextContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
  text-align: center;
`;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: ${({ theme }) => theme.lineHeights.loose};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.md};
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space.xs};
`;

const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const Input = styled.input`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.gray[700]};
  background: ${({ theme }) => theme.colors.white};
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

export default function RegisterForm() {
  return (
    <Section>
      <Content>
        <TextContainer>
          <Heading>Skráðu þig í samtökin</Heading>
          <Description>Fáðu boð á næsta viðburð</Description>
        </TextContainer>
        <Form>
          <FormGroup>
            <Label htmlFor="name">Nafn</Label>
            <Input type="text" id="name" placeholder="Skrifaðu nafnið þitt" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Netfang</Label>
            <Input
              type="email"
              id="email"
              placeholder="Skrifaðu netfangið þitt"
            />
          </FormGroup>
          <StyledButton>Skrá mig núna</StyledButton>
        </Form>
      </Content>
    </Section>
  );
}
