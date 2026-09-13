"use client";
import Image from "next/image";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export type CardNavLink = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo?: React.ReactNode | string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  ctaText?: string;
  ctaHref?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = "SevenX Labs",
  items,
  className = "",
  ease = "power3.out",
  baseColor = "#ffffff",
  menuColor = "#000000",
  buttonBgColor = "#111111",
  buttonTextColor = "#ffffff",
  ctaText = "Contact Us",
  ctaHref = "/#contact",
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 270;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
      const contentEl = navEl.querySelector(".card-nav-content") as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = "visible";
        contentEl.style.pointerEvents = "auto";
        contentEl.style.position = "static";
        contentEl.style.height = "auto";

        // trigger reflow
        void contentEl.offsetHeight;

        const topBar = 60;
        const padding = 20;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        const totalDesired = topBar + contentHeight + padding;
        const maxAvailable = window.innerHeight - 28;
        return Math.min(totalDesired, maxAvailable);
      }
    }
    return 270;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: "hidden" });
    if (cardsRef.current.length > 0) {
      gsap.set(cardsRef.current, { y: 50, opacity: 0 });
    }

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease,
    });

    if (cardsRef.current.length > 0) {
      tl.to(
        cardsRef.current,
        { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 },
        "-=0.1"
      );
    }

    return tl;
  };

  useIsomorphicLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useIsomorphicLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        if (navRef.current) {
          gsap.set(navRef.current, { height: newHeight });
        }

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const closeMenu = () => {
    if (!isExpanded) return;
    const tl = tlRef.current;
    if (!tl) return;
    setIsHamburgerOpen(false);
    tl.eventCallback("onReverseComplete", () => setIsExpanded(false));
    tl.reverse();
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    closeMenu();
    if (typeof window !== "undefined") {
      if (window.location.pathname === "/" || window.location.pathname === "") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        const heroEl = document.getElementById("hero");
        if (heroEl) {
          heroEl.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container fixed left-1/2 -translate-x-1/2 w-[94%] max-w-5xl lg:max-w-6xl z-50 top-3 md:top-4 ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? "open" : ""} block h-[60px] p-0 rounded-2xl shadow-[0_10px_35px_rgb(0,0,0,0.08)] border border-black/[0.08] relative overflow-hidden will-change-[height]`}
        style={{
          backgroundColor: baseColor,
          maxHeight: isExpanded ? "calc(100dvh - 24px)" : "60px",
        }}
      >
        {/* Top Header Bar */}
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between px-3 md:px-5 z-[2]">
          {/* Hamburger / Close Toggle Button */}
          <div
            className={`hamburger-menu ${isHamburgerOpen ? "open" : ""} group h-10 w-10 flex flex-col items-center justify-center cursor-pointer gap-[6px] rounded-xl hover:bg-black/5 transition-colors focus:outline-none`}
            onClick={toggleMenu}
            onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggleMenu();
              }
            }}
            role="button"
            aria-label={isExpanded ? "Close menu" : "Open menu"}
            aria-expanded={isExpanded}
            tabIndex={0}
            style={{ color: menuColor }}
          >
            <div
              className={`hamburger-line w-[22px] h-[2px] bg-current transition-all duration-300 ease-out [transform-origin:50%_50%] ${
                isHamburgerOpen ? "translate-y-[4px] rotate-45" : ""
              } group-hover:opacity-75`}
            />
            <div
              className={`hamburger-line w-[22px] h-[2px] bg-current transition-all duration-300 ease-out [transform-origin:50%_50%] ${
                isHamburgerOpen ? "-translate-y-[4px] -rotate-45" : ""
              } group-hover:opacity-75`}
            />
          </div>

          {/* Center Logo */}
          <div className="logo-container flex items-center justify-center">
            {typeof logo === "string" ? (
              <Link href="/" onClick={handleLogoClick} className="focus:outline-none cursor-pointer">
                <Image src={logo} alt={logoAlt} width={140} height={28} className="logo h-[28px] w-auto object-contain" />
              </Link>
            ) : logo ? (
              <div onClick={handleLogoClick} className="cursor-pointer focus:outline-none">
                {logo}
              </div>
            ) : (
              <Link
                href="/"
                onClick={handleLogoClick}
                className="group flex items-center gap-1.5 focus:outline-none cursor-pointer"
              >
                <span className="text-lg md:text-xl font-extrabold tracking-tight text-black font-sans flex items-center gap-1">
                  <span>SevenX</span>
                  <span className="font-light text-zinc-600">Labs</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] inline-block ml-0.5" />
                </span>
              </Link>
            )}
          </div>

          {/* Right CTA Button */}
          <Link
            href={ctaHref}
            onClick={closeMenu}
            className="card-nav-cta-button inline-flex items-center justify-center text-xs md:text-sm font-semibold tracking-wide rounded-xl px-4 md:px-5 h-[38px] transition-all duration-300 hover:opacity-90 active:scale-[0.98] shadow-sm"
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            {ctaText}
          </Link>
        </div>

        {/* Dropdown / Expandable Cards Container */}
        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-2.5 md:p-3 pb-5 flex flex-col items-stretch gap-2.5 justify-start z-[1] overflow-y-auto md:overflow-visible overscroll-contain touch-pan-y ${
            isExpanded ? "visible pointer-events-auto" : "invisible pointer-events-none"
          } md:flex-row md:items-end md:gap-3`}
          aria-hidden={!isExpanded}
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {(items || []).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card shrink-0 md:shrink select-none relative flex flex-col justify-between gap-3 p-4 md:p-4.5 rounded-xl min-w-0 flex-[1_1_auto] h-auto min-h-[135px] md:h-full md:min-h-0 md:flex-[1_1_0%] transition-transform hover:-translate-y-0.5 duration-200 shadow-sm"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-bold tracking-tight text-[17px] md:text-[19px] font-sans">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-1.5">
                {item.links?.map((lnk, i) => (
                  <Link
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-1.5 no-underline cursor-pointer opacity-90 hover:opacity-100 text-[13px] md:text-[13.5px] font-medium transition-opacity py-0.5"
                    href={lnk.href}
                    onClick={closeMenu}
                    aria-label={lnk.ariaLabel || lnk.label}
                  >
                    <svg
                      className="w-3.5 h-3.5 shrink-0 opacity-70"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                    <span>{lnk.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
