"use client";

import styled from "styled-components";
import Image from "next/image";
import React from "react";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
`;

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.space.xl};
  height: 4.5rem;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.space.xl};
  gap: ${({ theme }) => theme.space.xs};
  align-self: stretch;
  width: 100%;
  height: 2rem;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(1.25rem);
`;

const LogoContainer = styled.div`
  height: 4.375rem;
  display: flex;
  align-items: center;
  margin-top: -0.875rem;
  margin-bottom: -0.875rem;
  position: relative;
`;

const StyledLogo = styled(Image)`
  height: 100% !important;
  width: auto !important;
  position: relative !important;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.xl};
`;

const Menu = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.xl};
  height: 100%;
  align-items: center;
`;

const Link = styled.a`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.gray[700]};
  text-decoration: none;
  transition: color 0.2s ease;
  line-height: 2rem;
  text-align: right;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ContactButton = styled.button`
  display: flex;
  height: 2.5rem;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.space.xs};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: 400;
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  cursor: pointer;
  border: 0.0625rem solid ${({ theme }) => theme.colors.primary};
  transition: all 0.2s ease;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ButtonIconContainer = styled.div`
  width: 1rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const IconContainer = styled.div<{ $isHover?: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: opacity 0.2s ease;
  opacity: ${({ $isHover }) => ($isHover ? 0 : 1)};

  ${ContactButton}:hover & {
    opacity: ${({ $isHover }) => ($isHover ? 1 : 0)};
  }
`;

export default function Navbar() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents flash of unstyled content
  }

  return (
    <Nav>
      <Wrapper>
        <Content>
          <LogoContainer>
            <StyledLogo
              src="/resources/logos/vertonet-logo.png"
              alt="Vertonet"
              fill
              style={{ objectFit: "contain" }}
              priority
              loading="eager"
            />
          </LogoContainer>
          <RightSection>
            <Menu>
              <Link href="#events">Viðburðir</Link>
              <Link href="#about">Um okkur</Link>
              <Link href="#projects">Átaksverkefni</Link>
              <Link href="#news">Fréttir</Link>
              <Link href="#podcast">Hlaðvarp</Link>
            </Menu>
            <ContactButton>
              <span>Hafa samband</span>
              <ButtonIconContainer>
                <IconContainer $isHover={false}>
                  <Image
                    src="/resources/icons/arrow-up-right-white.svg"
                    alt=""
                    width={16}
                    height={16}
                    style={{ width: "100%", height: "100%" }}
                    loading="eager"
                  />
                </IconContainer>
                <IconContainer $isHover={true}>
                  <Image
                    src="/resources/icons/arrow-up-right-dark.svg"
                    alt=""
                    width={16}
                    height={16}
                    style={{ width: "100%", height: "100%" }}
                    loading="eager"
                  />
                </IconContainer>
              </ButtonIconContainer>
            </ContactButton>
          </RightSection>
        </Content>
      </Wrapper>
    </Nav>
  );
}
