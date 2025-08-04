# GSAP Animations Implementation

This project now includes GSAP animations with split text effects for enhanced user experience.

## Features

- **Split Text Animations**: Character, word, and line-based text animations
- **Scroll-Triggered Animations**: Elements animate when they come into view
- **Reusable Components**: Easy-to-use animated components
- **Customizable**: Configurable duration, stagger, easing, and delays

## Components

### AnimatedText

A reusable component for text animations with split text effects.

```tsx
import AnimatedText from "@/components/AnimatedText";

<AnimatedText
  animationType="chars"
  duration={1.2}
  stagger={0.03}
  ease="power3.out"
  delay={0.5}
>
  Your text here
</AnimatedText>;
```

**Props:**

- `animationType`: "chars" | "words" | "lines" | "fadeIn"
- `duration`: Animation duration in seconds
- `stagger`: Delay between each element animation
- `delay`: Initial delay before animation starts
- `ease`: GSAP easing function
- `y`: Initial Y offset for elements

### AnimatedSection

A wrapper component for scroll-triggered animations.

```tsx
import AnimatedSection from "@/components/AnimatedSection";

<AnimatedSection animationType="slideUp" delay={0.2} duration={1}>
  <YourComponent />
</AnimatedSection>;
```

**Props:**

- `animationType`: "fadeIn" | "slideUp" | "scaleIn"
- `delay`: Initial delay before animation starts
- `duration`: Animation duration in seconds
- `trigger`: Scroll trigger point (default: "top 80%")

### useGSAP Hook

Custom hook for GSAP animations.

```tsx
import { useGSAP } from "@/lib/hooks/useGSAP";

const { elementRef, animateText, animateIn, animateOnScroll } = useGSAP();
```

## Usage Examples

### Basic Text Animation

```tsx
<Title>
  <AnimatedText
    animationType="chars"
    duration={1.2}
    stagger={0.03}
    ease="power3.out"
  >
    Animated Title
  </AnimatedText>
</Title>
```

### Scroll-Triggered Section

```tsx
<AnimatedSection animationType="slideUp" delay={0.2}>
  <EventsSection />
</AnimatedSection>
```

### Complex Animation Sequence

```tsx
<Section>
  <Title>
    <AnimatedText
      animationType="chars"
      duration={1.5}
      stagger={0.04}
      ease="power3.out"
    >
      Main Heading
    </AnimatedText>
  </Title>
  <Description>
    <AnimatedText
      animationType="words"
      duration={1.2}
      stagger={0.02}
      ease="power2.out"
      delay={0.5}
    >
      Description text with word-by-word animation
    </AnimatedText>
  </Description>
</Section>
```

## Animation Types

### Text Animations

- **chars**: Each character animates individually
- **words**: Each word animates as a unit
- **lines**: Each line animates as a block
- **fadeIn**: Simple fade-in animation

### Section Animations

- **fadeIn**: Fade in from transparent
- **slideUp**: Slide up from below
- **scaleIn**: Scale in from smaller size

## Easing Functions

Common GSAP easing functions:

- `power2.out`: Smooth deceleration
- `power3.out`: More pronounced deceleration
- `back.out`: Slight overshoot
- `elastic.out`: Bouncy effect
- `bounce.out`: Bounce effect

## Demo Page

Visit `/animation-demo` to see all animation types in action.

## Dependencies

- GSAP (GreenSock Animation Platform)
- SplitText plugin
- ScrollTrigger plugin

## Installation

GSAP is already installed in this project. If you need to install it manually:

```bash
npm install gsap
```

## Best Practices

1. **Performance**: Use reasonable stagger values (0.02-0.1) to avoid overwhelming animations
2. **Accessibility**: Ensure animations don't interfere with user experience
3. **Timing**: Use delays to create natural animation sequences
4. **Mobile**: Test animations on mobile devices for performance
5. **Reduced Motion**: Consider users who prefer reduced motion

## Customization

You can customize animations by modifying the `useGSAP` hook or creating new animation components. The global styles include CSS classes for split text elements that can be customized as needed.
