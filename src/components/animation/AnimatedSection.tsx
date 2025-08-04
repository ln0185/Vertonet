"use client";

import styled from "styled-components";
import { useEffect, ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AnimatedContainer = styled.div`
  width: 100%;
`;

interface AnimatedSectionProps {
  children: ReactNode;
  animationType?: "fadeIn" | "slideUp" | "scaleIn";
  delay?: number;
  duration?: number;
  trigger?: string;
}

export default function AnimatedSection({
  children,
  animationType = "fadeIn",
  delay = 0,
  duration = 1,
  trigger = "top 80%",
}: AnimatedSectionProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const animationOptions = {
      trigger: elementRef.current,
      start: trigger,
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    };

    if (animationType === "fadeIn") {
      gsap.fromTo(
        elementRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: animationOptions,
        }
      );
    } else if (animationType === "slideUp") {
      gsap.fromTo(
        elementRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: animationOptions,
        }
      );
    } else if (animationType === "scaleIn") {
      gsap.fromTo(
        elementRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration,
          delay,
          ease: "power2.out",
          scrollTrigger: animationOptions,
        }
      );
    }
  }, [animationType, delay, duration, trigger]);

  return <AnimatedContainer ref={elementRef}>{children}</AnimatedContainer>;
}
