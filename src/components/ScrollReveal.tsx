"use client";

import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement>;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.08,
  baseRotation = 3,
  blurStrength = 8,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom 50%",
  wordAnimationEnd = "bottom 50%",
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/\s+/).filter(Boolean).map((word, index) => (
      <span
        className="inline-block word mr-[0.28em] last:mr-0 will-change-[opacity,filter,transform]"
        key={index}
      >
        {word}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const scroller =
        scrollContainerRef && scrollContainerRef.current
          ? scrollContainerRef.current
          : window;

      if (baseRotation !== 0) {
        gsap.fromTo(
          el,
          { transformOrigin: "0% 50%", rotate: baseRotation },
          {
            ease: "none",
            rotate: 0,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top 85%",
              end: rotationEnd,
              scrub: 1,
            },
          }
        );
      }

      const wordElements = el.querySelectorAll<HTMLElement>(".word");

      gsap.fromTo(
        wordElements,
        {
          opacity: baseOpacity,
          willChange: "opacity, filter",
        },
        {
          ease: "none",
          opacity: 1,
          stagger: {
            each: 0.05,
            from: "start",
          },
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top 85%",
            end: wordAnimationEnd,
            scrub: 1,
          },
        }
      );

      if (enableBlur) {
        gsap.fromTo(
          wordElements,
          { filter: `blur(${blurStrength}px)` },
          {
            ease: "none",
            filter: "blur(0px)",
            stagger: {
              each: 0.05,
              from: "start",
            },
            scrollTrigger: {
              trigger: el,
              scroller,
              start: "top 85%",
              end: wordAnimationEnd,
              scrub: 1,
            },
          }
        );
      }
    }, el);

    return () => {
      ctx.revert();
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <h2 ref={containerRef} className={`my-3 overflow-hidden ${containerClassName}`}>
      <p
        className={`leading-[1.2] font-semibold flex flex-wrap ${textClassName}`}
      >
        {splitText}
      </p>
    </h2>
  );
};

export default ScrollReveal;
