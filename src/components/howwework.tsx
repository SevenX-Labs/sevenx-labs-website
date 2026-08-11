"use client";

import React, { useEffect, useRef, useState } from "react";
import ScrollFloat from "./ScrollFloat";

interface StepItem {
  number: string;
  badge: string;
  title: string;
  description: string;
  tags: string[];
  rotation: string;
  gridCol: string;
}

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pinCoords, setPinCoords] = useState<{ x: number; y: number }[]>([]);
  const [noteCoord, setNoteCoord] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const steps: StepItem[] = [
    {
      number: "01",
      badge: "PHASE 01 — STRATEGY",
      title: "Define",
      description:
        "We start by understanding your goals, audience, and market. We define the right strategy and roadmap to ensure we're building the right things.",
      tags: ["Requirements", "Roadmap", "Tech Stack"],
      rotation: "lg:rotate-[2.5deg]",
      gridCol: "lg:col-start-2",
    },
    {
      number: "02",
      badge: "PHASE 02 — EXPERIENCE",
      title: "Design",
      description:
        "We craft clean, intuitive and engaging designs that communicate your brand clearly and create meaningful experiences for your users.",
      tags: ["UI/UX", "Design Systems", "Prototypes"],
      rotation: "lg:rotate-[-2.5deg]",
      gridCol: "lg:col-start-1",
    },
    {
      number: "03",
      badge: "PHASE 03 — DEVELOPMENT",
      title: "Build",
      description:
        "Our team brings the designs to life with robust, scalable and future-ready development. Clean code, best practices and performance are our priority.",
      tags: ["Clean Code", "API Integration", "Security & QA"],
      rotation: "lg:rotate-[2deg]",
      gridCol: "lg:col-start-2",
    },
    {
      number: "04",
      badge: "PHASE 04 — LAUNCH & SCALE",
      title: "Launch",
      description:
        "We test, optimize and launch your product with precision. Post-launch support ensures smooth performance and continuous growth.",
      tags: ["Cloud Deploy", "Monitoring", "Scale"],
      rotation: "lg:rotate-[-2deg]",
      gridCol: "lg:col-start-1",
    },
  ];

  // Measure exact pin & note pixel positions on screen
  const updateCoords = () => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();

    const coords = [0, 1, 2, 3].map((idx) => {
      const pinEl = document.getElementById(`push-pin-${idx}`);
      if (!pinEl) return { x: 0, y: 0 };
      const r = pinEl.getBoundingClientRect();
      return {
        x: r.left + r.width / 2 - containerRect.left,
        y: r.top + r.height / 2 - containerRect.top,
      };
    });

    setPinCoords(coords);

    const noteEl = document.getElementById("delivered-note");
    if (noteEl) {
      const nr = noteEl.getBoundingClientRect();
      setNoteCoord({
        x: nr.left - containerRect.left,
        y: nr.top + nr.height / 2 - containerRect.top,
      });
    }
  };

  useEffect(() => {
    updateCoords();
    const timer1 = setTimeout(updateCoords, 100);
    const timer2 = setTimeout(updateCoords, 400);
    window.addEventListener("resize", updateCoords);
    window.addEventListener("scroll", updateCoords);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("resize", updateCoords);
      window.removeEventListener("scroll", updateCoords);
    };
  }, []);

  return (
    <section
      id="how-we-work"
      className="relative w-full py-24 sm:py-32 lg:py-40 bg-[#FAF9F6] text-zinc-900 border-t border-black/[0.06] overflow-hidden font-sans select-none"
    >
      {/* Background Architectural Grid & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -right-32 w-[650px] h-[650px] bg-gradient-to-br from-blue-100/25 via-cyan-100/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-purple-100/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* HEADER */}
        <div className="flex flex-col items-start gap-5 mb-16 sm:mb-24 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 bg-black/[0.04] text-[#3B82F6] text-[11px] font-mono font-bold uppercase tracking-[0.25em] rounded-full border border-blue-200/60 flex items-center gap-2">
              OUR PROCESS
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            </span>
          </div>

          <div className="font-general text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-[1.08] tracking-tight uppercase flex flex-col items-start gap-1">
            <ScrollFloat
              animationDuration={0.8}
              ease="back.out(1.6)"
              scrollStart="top 90%"
              stagger={0.02}
              containerClassName="my-0"
              textClassName="font-general text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-[1.08] tracking-tight uppercase"
            >
              LET US SHOW YOU HOW
            </ScrollFloat>
            <ScrollFloat
              animationDuration={0.8}
              ease="back.out(1.6)"
              scrollStart="top 88%"
              stagger={0.02}
              containerClassName="my-0"
              textClassName="font-general text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-[1.08] tracking-tight uppercase"
            >
              WE DRIVE YOUR BRAND TO
            </ScrollFloat>
            <ScrollFloat
              animationDuration={0.9}
              ease="back.out(1.6)"
              scrollStart="top 85%"
              stagger={0.025}
              containerClassName="my-0"
              textClassName="font-general text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-blue-600 to-purple-600 leading-[1.08] tracking-tight uppercase"
            >
              NEW HEIGHTS
            </ScrollFloat>
          </div>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal max-w-xl">
            A clear, collaborative and proven process designed to turn your ideas into powerful digital experiences.
          </p>
        </div>

        {/* DYNAMIC PIN-TO-PIN CONNECTING JOURNEY CONTAINER */}
        <div ref={containerRef} className="relative w-full">
          
          {/* DYNAMIC SVG DOTTED LINES CONNECTING PIN TO PIN & TO DELIVERED ARROW */}
          {pinCoords.length === 4 && (
            <svg
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 stroke-zinc-600 overflow-visible"
              fill="none"
            >
              <defs>
                <marker
                  id="black-arrow-head"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#2563EB" />
                </marker>
              </defs>

              {/* Path 1: Pin 0 -> Pin 1 */}
              {pinCoords[0].x > 0 && pinCoords[1].x > 0 && (
                <path
                  d={`M ${pinCoords[0].x} ${pinCoords[0].y} C ${pinCoords[0].x - 140} ${pinCoords[0].y + 130}, ${pinCoords[1].x + 140} ${pinCoords[1].y - 130}, ${pinCoords[1].x} ${pinCoords[1].y}`}
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              )}

              {/* Path 2: Pin 1 -> Pin 2 */}
              {pinCoords[1].x > 0 && pinCoords[2].x > 0 && (
                <path
                  d={`M ${pinCoords[1].x} ${pinCoords[1].y} C ${pinCoords[1].x + 140} ${pinCoords[1].y + 130}, ${pinCoords[2].x - 140} ${pinCoords[2].y - 130}, ${pinCoords[2].x} ${pinCoords[2].y}`}
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              )}

              {/* Path 3: Pin 2 -> Pin 3 */}
              {pinCoords[2].x > 0 && pinCoords[3].x > 0 && (
                <path
                  d={`M ${pinCoords[2].x} ${pinCoords[2].y} C ${pinCoords[2].x - 140} ${pinCoords[2].y + 130}, ${pinCoords[3].x + 140} ${pinCoords[3].y - 130}, ${pinCoords[3].x} ${pinCoords[3].y}`}
                  stroke="#3B82F6"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              )}

              {/* Path 4: Pin 3 -> Ready to be delivered note */}
              {pinCoords[3].x > 0 && noteCoord.x > 0 && (
                <path
                  d={`M ${pinCoords[3].x} ${pinCoords[3].y} C ${pinCoords[3].x + 160} ${pinCoords[3].y + 140}, ${noteCoord.x - 140} ${noteCoord.y - 20}, ${noteCoord.x - 15} ${noteCoord.y}`}
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  markerEnd="url(#black-arrow-head)"
                />
              )}
            </svg>
          )}

          {/* 4 PINNED CARDS IN A 2-COLUMN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 sm:gap-y-20 lg:gap-y-32 items-start relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className={`relative flex justify-center w-full ${step.gridCol}`}
              >
                {/* Hanging Physical Card Container */}
                <div
                  className={`group relative w-full max-w-[460px] pt-12 p-7 sm:p-9 rounded-[28px] bg-white border border-black/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_28px_65px_rgba(37,99,235,0.12)] hover:border-blue-200 transition-all duration-500 origin-top hover:rotate-0 hover:-translate-y-2 transform-gpu ${step.rotation}`}
                >
                  {/* 3D Metallic Push Pin tack at TOP CENTER */}
                  <div
                    id={`push-pin-${idx}`}
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-zinc-700 via-zinc-900 to-black shadow-[0_4px_12px_rgba(0,0,0,0.3)] border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform z-30"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-400 shadow-inner" />
                  </div>

                  {/* Inner Card Content */}
                  <div className="flex flex-col gap-4">
                    {/* Top Row: Number + Badge */}
                    <div className="flex items-center justify-between">
                      <span className="font-general font-extrabold text-3xl sm:text-4xl text-zinc-300 group-hover:text-[#3B82F6] transition-colors duration-300">
                        {step.number}
                      </span>
                      <span className="text-[10px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full bg-black/[0.03] border border-black/[0.06] text-slate-500 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                        {step.badge}
                      </span>
                    </div>

                    {/* Step Title with ScrollFloat */}
                    <div className="mt-1">
                      <ScrollFloat
                        animationDuration={0.8}
                        ease="back.out(1.6)"
                        stagger={0.03}
                        scrollStart="top 92%"
                        containerClassName="my-0"
                        textClassName="font-general text-2xl sm:text-3xl font-extrabold text-black tracking-tight group-hover:text-[#3B82F6] transition-colors duration-300"
                      >
                        {step.title}
                      </ScrollFloat>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                      {step.description}
                    </p>

                    {/* Deliverable Tags */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-black/[0.04]">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-sans font-medium rounded-md bg-slate-50 text-slate-600 border border-black/[0.04] group-hover:border-blue-100 group-hover:bg-blue-50/50 group-hover:text-blue-700 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CLOSING ANNOTATION NOTE & STATEMENT (RIGHT-ALIGNED) */}
          <div className="relative z-10 flex flex-col items-end gap-2 mt-16 sm:mt-24 pr-4 sm:pr-8 lg:pr-20 text-right">
            <div
              id="delivered-note"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-black/[0.08] shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <ScrollFloat
                animationDuration={0.8}
                ease="back.out(1.6)"
                scrollStart="top 90%"
                stagger={0.02}
                containerClassName="my-0"
                textClassName="font-general font-extrabold text-lg sm:text-xl text-black"
              >
                Ready to be delivered!
              </ScrollFloat>
            </div>
            <p className="text-xs sm:text-sm font-sans text-slate-500 italic pr-2">
              We&apos;re excited to build something amazing together.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
