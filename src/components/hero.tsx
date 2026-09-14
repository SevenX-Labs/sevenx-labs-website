"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Preloader from "./preloader";

const SevenX3DLogo = dynamic(() => import("./SevenX3DLogo"), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
});

let hasAlreadyLoadedInSession = false;

export default function Hero() {
  const [showPreloader, setShowPreloader] = useState(!hasAlreadyLoadedInSession);

  const handlePreloaderComplete = () => {
    hasAlreadyLoadedInSession = true;
    setShowPreloader(false);
  };

  return (
    <section id="hero" className="relative w-full lg:min-h-[calc(100vh-68px)] flex items-start lg:items-center bg-[#FDFDFD] text-zinc-900 overflow-hidden font-sans selection:bg-black selection:text-white">
      {/* Animated Preloader */}
      {showPreloader && (
        <Preloader
          onComplete={handlePreloaderComplete}
        />
      )}

      {/* Ambient Gradient & Technical Grid Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-white">
        <div
          className="absolute -top-[140px] sm:-top-[180px] left-1/2 -translate-x-1/2 w-[150%] sm:w-[120%] max-w-[1600px] h-[360px] sm:h-[440px] rounded-[50%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(59, 130, 246, 0.12) 0%, rgba(99, 102, 241, 0.07) 40%, rgba(147, 197, 253, 0.02) 70%, transparent 100%)",
            filter: "blur(32px)",
          }}
        />
        <div
          className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[110%] max-w-[1100px] h-[260px] rounded-[50%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 65%, rgba(59, 130, 246, 0.09) 0%, rgba(147, 197, 253, 0.04) 50%, transparent 85%)",
            filter: "blur(24px)",
          }}
        />

        <div
          className="absolute -bottom-[140px] sm:-bottom-[180px] left-1/2 -translate-x-1/2 w-[150%] sm:w-[120%] max-w-[1600px] h-[360px] sm:h-[440px] rounded-[50%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(59, 130, 246, 0.12) 0%, rgba(99, 102, 241, 0.07) 40%, rgba(147, 197, 253, 0.02) 70%, transparent 100%)",
            filter: "blur(32px)",
          }}
        />
        <div
          className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 w-[110%] max-w-[1100px] h-[260px] rounded-[50%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 35%, rgba(59, 130, 246, 0.09) 0%, rgba(147, 197, 253, 0.04) 50%, transparent 85%)",
            filter: "blur(24px)",
          }}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:68px_68px]" />
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white via-white to-transparent pointer-events-none" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-24 sm:pt-28 lg:pt-20 pb-14 sm:pb-16 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 items-center">
          {/* Left Column: Headline & Content */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-2xl">
            <div className="relative">
              <h1 className="font-general text-[1.85rem] sm:text-4xl md:text-5xl lg:text-[3.35rem] xl:text-[3.7rem] font-extrabold tracking-tight text-black leading-[1.08] uppercase">
                <span className="text-[#3B82F6]">WE BUILD</span>
                <br />
                <span className="relative inline-block pb-1">
                  DIGITAL PRODUCTS
                  <svg
                    className="absolute bottom-0 left-0 w-full h-3 md:h-4 text-[#3B82F6] overflow-visible pointer-events-none"
                    viewBox="0 0 280 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M 3 10 C 70 2, 210 14, 277 5" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
                <br />
                <span>THAT MOVE BUSINESS</span>
                <br />
                <span className="inline-flex items-baseline">
                  FORWARD
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] ml-1.5 inline-block shrink-0" />
                </span>
              </h1>
            </div>

            <p className="mt-2.5 sm:mt-5 text-sm sm:text-base text-slate-600 max-w-[510px] leading-relaxed font-normal">
              We design and engineer high-performance web, mobile, AI and custom software solutions for ambitious businesses.
            </p>

            <div className="mt-3.5 sm:mt-6 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="/contact"
                aria-label="Start a project with SevenX Labs"
                className="group relative inline-flex items-center gap-3 pl-6 pr-3.5 py-3 sm:pl-7 sm:pr-4 sm:py-3.5 bg-black text-white text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-zinc-800 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>START A PROJECT</span>
                <span className="flex items-center justify-center w-7 h-7 bg-white/20 rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </a>
              <a
                href="/portfolio"
                aria-label="View SevenX Labs portfolio case studies"
                className="inline-flex items-center text-sm font-semibold text-zinc-700 hover:text-black transition-colors py-2 relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-black hover:after:w-full after:transition-all after:duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* Right Column: 3D SevenX Logo (Lazy Loaded Client Component) */}
          <div id="hero-logo-anchor" className="lg:col-span-5 relative flex items-center justify-center lg:justify-end h-[220px] sm:h-[260px] lg:h-[450px] mt-2 lg:mt-0">
            <div className="relative w-full h-full flex items-center justify-center max-w-[280px] sm:max-w-[340px] lg:max-w-[450px]">
              <SevenX3DLogo isReady={!showPreloader} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
