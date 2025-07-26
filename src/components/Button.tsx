"use client";

import styled, { css } from "styled-components";
import Image from "next/image";

type ButtonVariant = "primary" | "outline" | "light" | "dark";

interface ButtonProps {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button<{ $variant?: ButtonVariant }>`
  display: flex;
  height: 2.5rem; // 40px
  padding: 0.75rem 1rem; // 12px 16px
  justify-content: center;
  align-items: center;
  gap: 0.375rem; // 6px
  border-radius: ${(props) => props.theme.borderRadius.lg};
  font-family: ${(props) => props.theme.fonts.matter};
  font-size: ${(props) => props.theme.fontSizes.xs};
  font-weight: 400;
  line-height: 1.3;
  cursor: pointer;
  transition: all 0.2s ease;

  ${(props) => {
    switch (props.$variant) {
      case "outline":
        return css`
          background-color: transparent;
          border: 0.0625rem solid ${(props) => props.theme.colors.primary}; // 1px
          color: ${(props) => props.theme.colors.primary};

          &:hover {
            background-color: ${(props) => props.theme.colors.primary};
            color: ${(props) => props.theme.colors.white};
            border-color: ${(props) => props.theme.colors.primary};
          }
        `;
      case "light":
        return css`
          background-color: ${(props) => props.theme.colors.white};
          border: 0.0625rem solid ${(props) => props.theme.colors.gray[300]}; // 1px
          color: ${(props) => props.theme.colors.gray[700]};

          &:hover {
            background-color: ${(props) => props.theme.colors.gray[700]};
            color: ${(props) => props.theme.colors.white};
            border-color: ${(props) => props.theme.colors.gray[700]};
          }
        `;
      case "dark":
        return css`
          background-color: ${(props) => props.theme.colors.gray[700]};
          color: ${(props) => props.theme.colors.white};
          border: 0.0625rem solid ${(props) => props.theme.colors.gray[300]}; // 1px

          &:hover {
            background-color: ${(props) => props.theme.colors.white};
            color: ${(props) => props.theme.colors.gray[700]};
          }
        `;
      default: // primary
        return css`
          background-color: ${(props) => props.theme.colors.primary};
          color: ${(props) => props.theme.colors.white};
          border: 0.0625rem solid ${(props) => props.theme.colors.primary}; // 1px

          &:hover {
            background-color: ${(props) => props.theme.colors.white};
            color: ${(props) => props.theme.colors.primary};
          }
        `;
    }
  }}
`;

const ButtonIcon = styled.div`
  width: 1rem; // 16px
  height: 1rem; // 16px
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const IconWrapper = styled.div<{ $isHover?: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: opacity 0.2s ease;
  opacity: ${(props) => (props.$isHover ? 0 : 1)};

  ${StyledButton}:hover & {
    opacity: ${(props) => (props.$isHover ? 1 : 0)};
  }
`;

export default function Button({
  variant = "primary",
  children,
  onClick,
}: ButtonProps) {
  const hasIcon = typeof children === "string";

  return (
    <StyledButton $variant={variant} onClick={onClick}>
      {children}
      {hasIcon && (
        <ButtonIcon>
          <IconWrapper $isHover={false}>
            <Image
              src="/resources/icons/arrow-up-right-white.svg"
              alt=""
              width={16}
              height={16}
              style={{ width: "100%", height: "100%" }}
            />
          </IconWrapper>
          <IconWrapper $isHover={true}>
            <Image
              src="/resources/icons/arrow-up-right-dark.svg"
              alt=""
              width={16}
              height={16}
              style={{ width: "100%", height: "100%" }}
            />
          </IconWrapper>
        </ButtonIcon>
      )}
    </StyledButton>
  );
}
