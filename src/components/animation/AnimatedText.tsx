"use client";

import styled from "styled-components";
import { useEffect, ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

// Register the SplitText plugin
gsap.registerPlugin(SplitText);

const TextContainer = styled.span`
  display: inline-block;
`;

interface AnimatedTextProps {
  children: ReactNode;
  animationType?: "chars" | "words" | "lines" | "fadeIn";
  duration?: number;
  stagger?: number;
  delay?: number;
  ease?: string;
  y?: number;
  className?: string;
}

export default function AnimatedText({
  children,
  animationType = "chars",
  duration = 1,
  stagger = 0.05,
  delay = 0,
  ease = "power2.out",
  y = 50,
  className = "",
}: AnimatedTextProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof children === "string" && elementRef.current) {
      // Create split text based on animation type
      const split = new SplitText(elementRef.current, {
        type:
          animationType === "chars"
            ? "chars"
            : animationType === "words"
            ? "words"
            : animationType === "lines"
            ? "lines"
            : "chars",
        charsClass: "char",
        wordsClass: "word",
        linesClass: "line",
      });

      const elements =
        animationType === "chars"
          ? split.chars
          : animationType === "words"
          ? split.words
          : animationType === "lines"
          ? split.lines
          : split.chars;

      // Set initial state
      gsap.set(elements, {
        y,
        opacity: 0,
      });

      // Animate elements
      gsap.to(elements, {
        y: 0,
        opacity: 1,
        duration,
        stagger,
        ease,
        delay,
      });
    }
  }, [children, animationType, duration, stagger, delay, ease, y]);

  return (
    <TextContainer ref={elementRef} className={className}>
      {children}
    </TextContainer>
  );
}
