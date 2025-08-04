export const theme = {
  colors: {
    primary: "#EE2982",
    white: "#ffffff",
    gray: {
      100: "#fef9fa",
      300: "#d9d9d9",
      500: "#757575",
      600: "#3c3c3c",
      700: "#1e1e1e",
    },
    grayscale: {
      600: "#3c3c3c",
      700: "#1e1e1e",
    },
    text: {
      secondary: "#515151",
      dark: "#000c17",
      muted: "#666666",
    },
    error: "#ef4444",
    background: {
      cta: "#f7f0f3",
      board: "#f3f1ea",
      baby: "#F8F5F6",
    },
    shadow: {
      card: "rgba(12, 12, 13, 0.05)",
      image: "rgba(0, 0, 0, 0.25)",
    },
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1200px",
  },
  space: {
    xs: "0.75rem", // 12px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xl: "2.5rem", // 40px
    "2xl": "3rem", // 48px
    "3xl": "4rem", // 64px
    "4xl": "5rem", // 80px
  },
  borderRadius: {
    sm: "0.5rem", // 8px
    lg: "2.75rem", // 44px
  },
  fonts: {
    matter: '"Matter", sans-serif',
    matterNav: '"Matter-Nav", sans-serif',
    tobias: '"TobiasTRIAL", serif',
  },
  fontSizes: {
    xs: "0.875rem", // 14px
    sm: "1rem", // 16px
    md: "1.125rem", // 18px
    lg: "1.25rem", // 20px
    xl: "1.5rem", // 24px
    "2xl": "2.25rem", // 36px
    "3xl": "2.5rem", // 40px
    "4xl": "3rem", // 48px
    "5xl": "4rem", // 64px
  },
  lineHeights: {
    normal: "normal",
    relaxed: "1.2",
    loose: "1.6",
  },
};

export type Theme = typeof theme;
