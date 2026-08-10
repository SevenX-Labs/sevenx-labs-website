"use client";

import { useState } from "react";
import Preloader from "./preloader";
import SevenX3DLogo from "./SevenX3DLogo";

export default function Hero() {
  const [showPreloader, setShowPreloader] = useState(true);

  return (
    <section className="relative w-full min-h-screen lg:min-h-[calc(100vh-68px)] flex items-center bg-[#FDFDFD] text-zinc-900 overflow-hidden font-sans selection:bg-black selection:text-white">
      {/* Animated Preloader */}
      {showPreloader && (
        <Preloader
          onComplete={() => setShowPreloader(false)}
        />
      )}

      {/* Premium ambient light & technical background grid */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Soft background light glow */}
        <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-gradient-to-br from-blue-100/30 via-cyan-100/15 to-transparent rounded-full blur-3xl" />

        {/* Faint Square Architectural Grid Lines (matching reference image) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-20 md:pt-24 lg:pt-20 pb-12 lg:pb-16 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Content (55% width) */}
          <div className="lg:col-span-7 flex flex-col items-start max-w-2xl">

            {/* Typography Title (With blue WE BUILD, curved underline, and grid backdrop) */}
            <div className="relative">
              <h1 className="font-general text-3xl sm:text-5xl lg:text-[3.35rem] xl:text-[3.7rem] font-extrabold tracking-tight text-black leading-[1.05] uppercase">
                {/* Line 1: WE BUILD in vibrant royal blue */}
                <span className="text-[#3B82F6]">WE BUILD</span>

                <br />

                {/* Line 2: DIGITAL PRODUCTS with curved underline */}
                <span className="relative inline-block pb-1">
                  DIGITAL PRODUCTS
                  {/* Curved SVG Underline */}
                  <svg
                    className="absolute bottom-0 left-0 w-full h-3 md:h-4 text-[#3B82F6] overflow-visible pointer-events-none"
                    viewBox="0 0 280 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 3 10 C 70 2, 210 14, 277 5"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>

                <br />

                {/* Line 3: THAT MOVE BUSINESS */}
                <span>THAT MOVE BUSINESS</span>

                <br />

                {/* Line 4: FORWARD with vibrant blue dot */}
                <span className="inline-flex items-baseline">
                  FORWARD
                  <span className="w-2.5 h-2.5 rounded-full bg-[#3B82F6] ml-1.5 inline-block shrink-0" />
                </span>
              </h1>
            </div>

            {/* Subtext (26px spacing from headline) */}
            <p className="mt-6 md:mt-7 text-base md:text-[1.05rem] text-slate-600 max-w-[510px] leading-relaxed font-normal">
              We design and engineer high-performance web, mobile, AI and custom software solutions for ambitious businesses.
            </p>

            {/* Action CTA buttons (32px spacing from subtext) */}
            <div className="mt-8 md:mt-9 flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-3 pl-7 pr-4 py-3.5 bg-black text-white text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 hover:bg-zinc-800 shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <span>Start a Project</span>
                <span className="flex items-center justify-center w-7 h-7 bg-white/20 rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </span>
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center text-sm font-semibold text-zinc-700 hover:text-black transition-colors py-2 relative after:content-[''] after:absolute after:bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-black hover:after:w-full after:transition-all after:duration-300"
              >
                View Our Work
              </a>
            </div>
          </div>

          {/* Right Column: Floating 3D SevenX Logo & Particle System (45% width) */}
          <div id="hero-logo-anchor" className="lg:col-span-5 relative flex items-center justify-center lg:justify-end h-[420px] md:h-[450px]">
            <div className="relative w-full max-w-[420px] lg:max-w-[450px]">
              {/* 3D WebGL SevenX Logo Canvas */}
              <SevenX3DLogo isReady={!showPreloader} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
