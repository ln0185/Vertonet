"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Matter";
    src: url("/resources/fonts/Matter-Regular.woff") format("woff");
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "TobiasTRIAL";
    src: url("/resources/fonts/TobiasTRIAL-Light.woff") format("woff");
    font-weight: 350;
    font-style: normal;
    font-display: swap;
  }
 @font-face {
    font-family: "TobiasTRIAL-Nav";
    src: url("/resources/fonts/TobiasTRIAL-Regular.woff") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
    -webkit-text-size-adjust: 100%;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh; /* Fallback */
    min-height: calc(var(--vh, 1vh) * 100);
    font-family: ${({ theme }) => theme.fonts.matter};
    color: ${({ theme }) => theme.colors.gray[700]};
    background-color: ${({ theme }) => theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  #__next {
    isolation: isolate;
  }

  .home-page {
    width: 100%;
    margin: 0 auto;
    min-height: 100vh; /* Fallback */
    min-height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
  }

  main {
    width: 100%;
    padding-top: 80px; 
    flex: 1;
  }


  .button {
    display: flex;
    height: 2.5rem;
    padding: 0.75rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.375rem;
    border-radius: 2.75rem;
    font-family: ${({ theme }) => theme.fonts.matter};
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
    cursor: pointer;
    border: 0.0625rem solid ${({ theme }) => theme.colors.primary};
    transition: all 0.2s ease;
  }

  .button--primary {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }

  .button--primary:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  .button--outline {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
  }

  .button--outline:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .button--light {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    color: ${({ theme }) => theme.colors.gray[700]};
  }

  .button--light:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .button--dark {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.gray[700]};
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  }

  .button--dark:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .button__icon {
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .icon {
    width: 100%;
    height: 100%;
    position: absolute;
    transition: opacity 0.2s ease;
  }

  .icon--default {
    opacity: 1;
  }

  .icon--hover {
    opacity: 0;
  }

  .button:hover .icon--default {
    opacity: 0;
  }

  .button:hover .icon--hover {
    opacity: 1;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;
