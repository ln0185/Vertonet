"use client";

import styled from "styled-components";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const MobileNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  margin-top: 1.5rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileContent = styled.div`
  display: flex;
  padding: ${({ theme }) => theme.space.md};
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

const StyledLogo = styled.img`
  height: 100%;
  width: auto;
  position: relative;
`;

const LogoLink = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
`;

const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 101;

  div {
    width: 2rem;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.colors.gray[700]};
    border-radius: 0.125rem;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 0.0625rem;

    &:first-child {
      transform: ${({ $isOpen }) => ($isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
      transform: ${({ $isOpen }) =>
        $isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => ($isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  margin-top: 4rem;
  padding-top: 5rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.white};
  backdrop-filter: blur(1.25rem);
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.space.xl};
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
`;

const MobileNavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.matterNav};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[700]};
  text-decoration: none;
  transition: color 0.2s ease;
  text-align: center;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileLanguageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
`;

const MobileLanguageLink = styled.button`
  font-family: ${({ theme }) => theme.fonts.matterNav};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[700]};
  text-decoration: none;
  transition: color 0.2s ease;
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

const MobileLanguageSeparator = styled.span`
  color: ${({ theme }) => theme.colors.gray[700]};
`;

const MobileContactButton = styled(Link)`
  display: flex;
  height: 3rem;
  padding: ${({ theme }) => `${theme.space.sm} ${theme.space.md}`};
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-family: ${({ theme }) => theme.fonts.matterNav};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 500;
  cursor: pointer;
  border: 0.0625rem solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  transition: all 0.3s ease;
  min-width: 12rem;

  &:hover {
    text-decoration: none;
    transform: translateY(-0.125rem);
    box-shadow: 0 0.25rem 0.5rem rgba(238, 41, 130, 0.3);
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  align-items: center;
  margin-top: ${({ theme }) => theme.space.lg};
`;

const SocialMediaLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-0.125rem);
  }

  img {
    width: 1.75rem;
    height: 1.75rem;
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%)
      hue-rotate(346deg) brightness(104%) contrast(97%);
  }
`;

export default function MobileNavbar() {
  const [mounted, setMounted] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const switchLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  if (!mounted) {
    return null;
  }

  const currentLanguage = i18n.language;

  return (
    <>
      <MobileNav>
        <MobileContent>
          <LogoContainer>
            <LogoLink href="/">
              <StyledLogo
                src="/resources/logos/vertonet-logo.svg"
                alt="Vertonet Logo"
              />
            </LogoLink>
          </LogoContainer>
          <HamburgerButton
            $isOpen={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <div />
            <div />
            <div />
          </HamburgerButton>
        </MobileContent>
      </MobileNav>

      <MobileMenu $isOpen={isMobileMenuOpen}>
        <MobileNavLink href="/" onClick={closeMobileMenu}>
          {currentLanguage === "en" ? "Home" : "Heim"}
        </MobileNavLink>
        <MobileNavLink href="/vidburdir" onClick={closeMobileMenu}>
          {currentLanguage === "en" ? "Events" : "Viðburðir"}
        </MobileNavLink>
        <MobileNavLink href="/um-okkur" onClick={closeMobileMenu}>
          {currentLanguage === "en" ? "About Us" : "Um okkur"}
        </MobileNavLink>
        <MobileNavLink href="#projects" onClick={closeMobileMenu}>
          {currentLanguage === "en" ? "Projects" : "Átaksverkefni"}
        </MobileNavLink>
        <MobileNavLink href="#news" onClick={closeMobileMenu}>
          {currentLanguage === "en" ? "News" : "Fréttir"}
        </MobileNavLink>
        <MobileNavLink href="#podcast" onClick={closeMobileMenu}>
          {currentLanguage === "en" ? "Podcast" : "Hlaðvarp"}
        </MobileNavLink>
        <MobileLanguageContainer>
          <MobileLanguageLink
            className={currentLanguage === "is" ? "active" : ""}
            onClick={() => switchLanguage("is")}
          >
            IS
          </MobileLanguageLink>
          <MobileLanguageSeparator>|</MobileLanguageSeparator>
          <MobileLanguageLink
            className={currentLanguage === "en" ? "active" : ""}
            onClick={() => switchLanguage("en")}
          >
            EN
          </MobileLanguageLink>
        </MobileLanguageContainer>
        <MobileContactButton href="/contact" onClick={closeMobileMenu}>
          {currentLanguage === "en" ? "Contact Us" : "Hafa samband"}
        </MobileContactButton>
        <SocialMediaContainer>
          <SocialMediaLink
            href="https://www.facebook.com/vertonet.is"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/resources/icons/facebook.svg" alt="Facebook logo" />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.instagram.com/vertonet.is"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/resources/icons/instagram.svg" alt="Instagram logo" />
          </SocialMediaLink>
          <SocialMediaLink
            href="https://www.linkedin.com/company/vertonet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/resources/icons/linkedin.svg" alt="LinkedIn logo" />
          </SocialMediaLink>
        </SocialMediaContainer>
      </MobileMenu>
    </>
  );
}
