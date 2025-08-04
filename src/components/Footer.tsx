"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.gray[700]};
  padding: ${({ theme }) => theme.space.xl} 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: calc(100% - ${({ theme }) => theme.space["3xl"]});
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space["3xl"]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
    padding: 0 ${({ theme }) => theme.space.md};
  }
`;

const LogoContainer = styled.div`
  height: 2.2rem;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const StyledLogo = styled(Image)`
  height: 100% !important;
  width: auto !important;
  position: relative !important;
  filter: brightness(0) invert(1);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  align-items: center;
  margin-right: ${({ theme }) => theme.space["3xl"]};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`;

const SocialLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.gray[600]};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-0.125rem);
  }
`;

const SocialIcon = styled(Image)`
  width: 1.25rem !important;
  height: 1.25rem !important;
  position: relative !important;
  filter: brightness(0) invert(1);
`;

const Copyright = styled.p`
  font-family: ${({ theme }) => theme.fonts.matter};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.gray[300]};
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
    transform: none;
    text-align: center;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer>
          <StyledLogo
            src="/resources/logos/vertonet-logo.svg"
            alt="Vertonet logo"
            width={120}
            height={35}
            priority
          />
        </LogoContainer>

        <SocialLinks>
          <SocialLink
            href="https://facebook.com"
            target="https://www.facebook.com/vertonet.is"
            rel="vertonet facebook page"
          >
            <SocialIcon
              src="/resources/icons/facebook.svg"
              alt="Facebook logo"
              width={20}
              height={20}
            />
          </SocialLink>

          <SocialLink
            href="https://instagram.com"
            target="https://www.instagram.com/vertonet.is"
            rel="vertonet instagram page"
          >
            <SocialIcon
              src="/resources/icons/instagram.svg"
              alt="Instagram logo"
              width={20}
              height={20}
            />
          </SocialLink>

          <SocialLink
            href="https://linkedin.com"
            target="https://www.linkedin.com/company/vertonet"
            rel="vertonet linkedin page"
          >
            <SocialIcon
              src="/resources/icons/linkedin.svg"
              alt="LinkedIn logo"
              width={20}
              height={20}
            />
          </SocialLink>
        </SocialLinks>

        <Copyright>
          © {new Date().getFullYear()} Vertonet. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
}
