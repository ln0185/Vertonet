"use client";

import styled from "styled-components";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.space.md} ${theme.space.lg}`};
`;

const Content = styled.div`
  max-width: 44rem;
  margin: 3rem auto;
`;

const TextContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.space.xl};
  text-align: center;
`;

const Heading = styled.h2`
  font-family: ${({ theme }) => theme.fonts.tobias};
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: ${({ theme }) => theme.space.sm};

  @media (min-width: 48rem) {
    font-size: ${({ theme }) => theme.fontSizes["4xl"]};
  }
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.loose};
  color: ${({ theme }) => theme.colors.gray[600]};

  @media (min-width: 48rem) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
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

const Message = styled.p<{ $isError: boolean }>`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme, $isError }) =>
    $isError ? theme.colors.gray[700] : theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

const StyledButton = styled(Button)`
  width: 100%;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space.md};

  @media (max-width: 48rem) {
    grid-template-columns: 1fr;
  }
`;

export default function RegisterForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successful!");
        setFormData({ firstName: "", lastName: "", email: "" });
      } else {
        setMessage(data.error || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setMessage("An error occurred during registration");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section>
      <Content>
        <TextContainer>
          <Heading>{t("register.title")}</Heading>
          <Description>{t("register.description")}</Description>
        </TextContainer>
        <Form onSubmit={handleSubmit}>
          <Row>
            <FormGroup>
              <Label htmlFor="firstName">{t("register.firstName")}</Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder={t("register.firstNamePlaceholder")}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="lastName">{t("register.lastName")}</Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder={t("register.lastNamePlaceholder")}
                required
              />
            </FormGroup>
          </Row>
          <FormGroup>
            <Label htmlFor="email">{t("register.email")}</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder={t("register.emailPlaceholder")}
              required
            />
          </FormGroup>
          {message && (
            <Message $isError={message !== "Registration successful!"}>
              {message}
            </Message>
          )}
          <StyledButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? t("register.submitting") : t("register.submit")}
          </StyledButton>
        </Form>
      </Content>
    </Section>
  );
}
