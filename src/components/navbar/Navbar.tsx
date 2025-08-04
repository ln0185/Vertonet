"use client";

import styled from "styled-components";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  margin-top: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
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
  height: 2.2rem;
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
  gap: ${({ theme }) => theme.space["2xl"]};
`;

const Menu = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space["2xl"]};
  height: 100%;
  align-items: center;
`;

const NavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.matterNav};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[700]};
  text-decoration: none;
  transition: color 0.2s ease;
  line-height: 2rem;
  text-align: right;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LanguageLink = styled.button`
  font-family: ${({ theme }) => theme.fonts.matterNav};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[700]};
  text-decoration: none;
  transition: color 0.2s ease;
  line-height: 2rem;
  text-align: right;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const LanguageSeparator = styled.span`
  color: ${({ theme }) => theme.colors.gray[700]};
  padding: 0 1rem;
`;

const ContactButton = styled.button`
  display: flex;
  height: 2.5rem;
  padding: ${({ theme }) => `${theme.space.xs} ${theme.space.sm}`};
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-family: ${({ theme }) => theme.fonts.matterNav};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 500;
  line-height: 2rem;
  cursor: pointer;
  border: 0.0625rem solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  min-width: 8rem;
  text-decoration: none;

  &:hover {
    padding-right: 2.5rem;
    text-decoration: none;

    .arrow-icon {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

const ArrowIcon = styled(Image)`
  position: absolute;
  right: 0.75rem;
  opacity: 0;
  transform: translateX(-0.5rem);
  transition: all 0.3s ease;
`;

const LogoLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export default function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const { i18n } = useTranslation();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  if (!mounted) {
    return null;
  }

  const currentLanguage = i18n.language;

  return (
    <Nav>
      <Content>
        <LogoContainer>
          <LogoLink href="/">
            <StyledLogo
              src="/resources/logos/vertonet-logo.svg"
              alt="Vertonet"
              fill
              style={{ objectFit: "contain" }}
              priority
              loading="eager"
            />
          </LogoLink>
        </LogoContainer>
        <RightSection>
          <Menu>
            <NavLink href="/">
              {currentLanguage === "en" ? "Home" : "Heim"}
            </NavLink>
            <NavLink href="/vidburdir">
              {currentLanguage === "en" ? "Events" : "Viðburðir"}
            </NavLink>
            <NavLink href="/um-okkur">
              {currentLanguage === "en" ? "About Us" : "Um okkur"}
            </NavLink>
            <NavLink href="#projects">
              {currentLanguage === "en" ? "Projects" : "Átaksverkefni"}
            </NavLink>
            <NavLink href="#news">
              {currentLanguage === "en" ? "News" : "Fréttir"}
            </NavLink>
            <NavLink href="#podcast">
              {currentLanguage === "en" ? "Podcast" : "Hlaðvarp"}
            </NavLink>
            <LanguageContainer>
              <LanguageLink
                className={currentLanguage === "is" ? "active" : ""}
                onClick={() => switchLanguage("is")}
              >
                IS
              </LanguageLink>
              <LanguageSeparator>|</LanguageSeparator>
              <LanguageLink
                className={currentLanguage === "en" ? "active" : ""}
                onClick={() => switchLanguage("en")}
              >
                EN
              </LanguageLink>
            </LanguageContainer>
          </Menu>
          <ContactButton as={Link} href="/contact">
            {currentLanguage === "en" ? "Contact Us" : "Hafa samband"}
            <ArrowIcon
              src="/resources/icons/arrow-up-right-white.svg"
              alt="Arrow"
              width={20}
              height={20}
              className="arrow-icon"
            />
          </ContactButton>
        </RightSection>
      </Content>
    </Nav>
  );
}
