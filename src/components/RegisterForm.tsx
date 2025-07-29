"use client";

import styled from "styled-components";
import Button from "./Button";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <Section>
      <Content>
        <TextContainer>
          <Heading>{t("register.title")}</Heading>
          <Description>{t("register.description")}</Description>
        </TextContainer>
        <Form>
          <FormGroup>
            <Label htmlFor="name">{t("register.name")}</Label>
            <Input
              type="text"
              id="name"
              placeholder={t("register.namePlaceholder")}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">{t("register.email")}</Label>
            <Input
              type="email"
              id="email"
              placeholder={t("register.emailPlaceholder")}
            />
          </FormGroup>
          <StyledButton>{t("register.submit")}</StyledButton>
        </Form>
      </Content>
    </Section>
  );
}
