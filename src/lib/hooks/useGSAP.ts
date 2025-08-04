import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

export const useGSAP = () => {
  const elementRef = useRef<HTMLElement | HTMLAnchorElement>(null);

  const animateText = (text: string, options = {}) => {
    if (!elementRef.current) return;

    // Default animation
    const defaultAnimation = {
      duration: 1,
      stagger: 0.05,
      ease: "power2.out",
      y: 50,
      opacity: 0,
      delay: 0,
    };

    const animationOptions = { ...defaultAnimation, ...options };

    // Create split text
    const split = new SplitText(elementRef.current, {
      type: "chars,words,lines",
      charsClass: "char",
      wordsClass: "word",
      linesClass: "line",
    });

    const chars = split.chars;
    const words = split.words;
    const lines = split.lines;

    // Set initial state
    gsap.set(chars, {
      y: animationOptions.y,
      opacity: animationOptions.opacity,
    });

    // Animate characters
    gsap.to(chars, {
      y: 0,
      opacity: 1,
      duration: animationOptions.duration,
      stagger: animationOptions.stagger,
      ease: animationOptions.ease,
      delay: animationOptions.delay,
    });

    return { split, chars, words, lines };
  };

  const animateIn = (options = {}) => {
    if (!elementRef.current) return;

    const defaultOptions = {
      duration: 1,
      ease: "power2.out",
      y: 50,
      opacity: 0,
    };

    const animationOptions = { ...defaultOptions, ...options };

    gsap.fromTo(
      elementRef.current,
      {
        y: animationOptions.y,
        opacity: animationOptions.opacity,
      },
      {
        y: 0,
        opacity: 1,
        duration: animationOptions.duration,
        ease: animationOptions.ease,
      }
    );
  };

  const animateOnScroll = (options = {}) => {
    if (!elementRef.current) return;

    const defaultOptions = {
      trigger: elementRef.current,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    };

    const scrollOptions = { ...defaultOptions, ...options };

    gsap.fromTo(
      elementRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: scrollOptions,
      }
    );
  };

  return {
    elementRef,
    animateText,
    animateIn,
    animateOnScroll,
  };
};
