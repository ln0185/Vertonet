"use client";

import styled from "styled-components";
import Button from "./Button";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) =>
    `${theme.space["3xl"]} ${theme.space.sm} ${theme.space.xl} ${theme.space.sm}`};
  margin-top: ${({ theme }) => theme.space["3xl"]};
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
  font-size: ${({ theme }) => theme.fontSizes["2xl"]};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: ${({ theme }) => theme.space.sm};
`;

const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.md};
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
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

const TextArea = styled.textarea`
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  color: ${({ theme }) => theme.colors.gray[700]};
  background: ${({ theme }) => theme.colors.white};
  resize: vertical;
  min-height: 7.5rem;
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`;

const Message = styled.p<{ $isError: boolean }>`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  color: ${({ theme, $isError }) =>
    $isError ? theme.colors.error : theme.colors.primary};
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

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
    setIsError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(t("contact.success"));
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setMessage(data.error || t("contact.error"));
        setIsError(true);
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setMessage(t("contact.error"));
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section>
      <Content>
        <TextContainer>
          <Heading>{t("contact.title")}</Heading>
          <Description>{t("contact.description")}</Description>
        </TextContainer>
        <Form onSubmit={handleSubmit}>
          <Row>
            <FormGroup>
              <Label htmlFor="firstName">{t("contact.firstName")}</Label>
              <Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder={t("contact.firstNamePlaceholder")}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="lastName">{t("contact.lastName")}</Label>
              <Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder={t("contact.lastNamePlaceholder")}
                required
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label htmlFor="email">{t("contact.email")}</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t("contact.emailPlaceholder")}
                required
              />
            </FormGroup>
          </Row>
          <FormGroup>
            <Label htmlFor="company">{t("contact.company")}</Label>
            <Input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder={t("contact.companyPlaceholder")}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="subject">{t("contact.subject")}</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder={t("contact.subjectPlaceholder")}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">{t("contact.message")}</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t("contact.messagePlaceholder")}
              required
            />
          </FormGroup>
          {message && <Message $isError={isError}>{message}</Message>}
          <StyledButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? t("contact.submitting") : t("contact.submit")}
          </StyledButton>
        </Form>
      </Content>
    </Section>
  );
}
