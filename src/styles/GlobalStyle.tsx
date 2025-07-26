"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Matter";
    src: url("/resources/fonts/Matter-Regular.woff") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "TobiasTRIAL";
    src: url("/resources/fonts/TobiasTRIAL-Light.woff") format("woff");
    font-weight: 200;
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
    min-height: 100vh; /* Fallback */
    min-height: calc(var(--vh, 1vh) * 100);
    display: flex;
    flex-direction: column;
  }

  main {
    width: 100%;
    padding-top: 80px; /* Space for fixed navbar */
    flex: 1;
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
