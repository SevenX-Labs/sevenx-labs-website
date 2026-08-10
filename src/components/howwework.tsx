"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pinCoords, setPinCoords] = useState<{ x: number; y: number }[]>([]);
  const [noteCoord, setNoteCoord] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const steps = [
    {
      number: "01",
      title: "Define",
      description:
        "We start by understanding your goals, audience, and market. We define the right strategy and roadmap to ensure we're building the right things.",
      rotation: "rotate-[3deg]",
      gridCol: "lg:col-start-2",
    },
    {
      number: "02",
      title: "Design",
      description:
        "We craft clean, intuitive and engaging designs that communicate your brand clearly and create meaningful experiences for your users.",
      rotation: "rotate-[-3deg]",
      gridCol: "lg:col-start-1",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Our team brings the designs to life with robust, scalable and future-ready development. Clean code, best practices and performance are our priority.",
      rotation: "rotate-[2.5deg]",
      gridCol: "lg:col-start-2",
    },
    {
      number: "04",
      title: "Launch",
      description:
        "We test, optimize and launch your product with precision. Post-launch support ensures smooth performance and continuous growth.",
      rotation: "rotate-[-2deg]",
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
    const timer = setTimeout(updateCoords, 200);
    window.addEventListener("resize", updateCoords);
    window.addEventListener("scroll", updateCoords);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateCoords);
      window.removeEventListener("scroll", updateCoords);
    };
  }, []);

  return (
    <section
      id="how-we-work"
      className="relative w-full py-28 lg:py-40 bg-[#FAF9F6] text-zinc-900 border-t border-black/[0.06] overflow-hidden font-sans select-none"
    >
      {/* Background Architectural Grid & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -right-32 w-[650px] h-[650px] bg-gradient-to-br from-blue-100/20 via-cyan-100/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-purple-100/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* HEADER */}
        <div className="flex flex-col items-start gap-4 mb-24 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1 bg-black/[0.04] text-[#3B82F6] text-[11px] font-mono font-bold uppercase tracking-[0.25em] rounded-full border border-blue-200/60 flex items-center gap-2">
              OUR PROCESS
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            </span>
          </div>

          <h2 className="font-general text-4xl sm:text-5xl md:text-6xl font-extrabold text-black leading-[1.08] tracking-tight uppercase">
            LET US SHOW YOU HOW
            <br />
            WE DRIVE YOUR BRAND TO
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-blue-600 to-purple-600">
              NEW HEIGHTS
            </span>
          </h2>

          <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
            A clear, collaborative and proven process designed to turn your ideas into powerful digital experiences.
          </p>
        </div>

        {/* DYNAMIC PIN-TO-PIN CONNECTING JOURNEY CONTAINER */}
        <div ref={containerRef} className="relative w-full">
          
          {/* DYNAMIC SVG DOTTED LINES CONNECTING PIN TO PIN & TO DELIVERED ARROW */}
          {pinCoords.length === 4 && (
            <svg
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0 stroke-zinc-700 overflow-visible"
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
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#171717" />
                </marker>
              </defs>

              {/* Path 1: Pin 0 -> Pin 1 */}
              {pinCoords[0].x > 0 && pinCoords[1].x > 0 && (
                <path
                  d={`M ${pinCoords[0].x} ${pinCoords[0].y} C ${pinCoords[0].x - 120} ${pinCoords[0].y + 120}, ${pinCoords[1].x + 120} ${pinCoords[1].y - 120}, ${pinCoords[1].x} ${pinCoords[1].y}`}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                />
              )}

              {/* Path 2: Pin 1 -> Pin 2 */}
              {pinCoords[1].x > 0 && pinCoords[2].x > 0 && (
                <path
                  d={`M ${pinCoords[1].x} ${pinCoords[1].y} C ${pinCoords[1].x + 120} ${pinCoords[1].y + 120}, ${pinCoords[2].x - 120} ${pinCoords[2].y - 120}, ${pinCoords[2].x} ${pinCoords[2].y}`}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                />
              )}

              {/* Path 3: Pin 2 -> Pin 3 */}
              {pinCoords[2].x > 0 && pinCoords[3].x > 0 && (
                <path
                  d={`M ${pinCoords[2].x} ${pinCoords[2].y} C ${pinCoords[2].x - 120} ${pinCoords[2].y + 120}, ${pinCoords[3].x + 120} ${pinCoords[3].y - 120}, ${pinCoords[3].x} ${pinCoords[3].y}`}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                />
              )}

              {/* Path 4: Pin 3 -> Ready to be delivered note (Ending at Black Arrowhead) */}
              {pinCoords[3].x > 0 && noteCoord.x > 0 && (
                <path
                  d={`M ${pinCoords[3].x} ${pinCoords[3].y} C ${pinCoords[3].x + 160} ${pinCoords[3].y + 140}, ${noteCoord.x - 140} ${noteCoord.y - 20}, ${noteCoord.x - 15} ${noteCoord.y}`}
                  stroke="#171717"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  strokeLinecap="round"
                  markerEnd="url(#black-arrow-head)"
                />
              )}
            </svg>
          )}

          {/* 4 PINNED CARDS IN A 2-COLUMN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20 lg:gap-y-32 items-start relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className={`relative flex justify-center w-full ${step.gridCol}`}
              >
                {/* Hanging Physical Card Container */}
                <div
                  className={`group relative w-full max-w-[440px] pt-12 p-8 md:p-10 rounded-[28px] bg-[#FDFDFD] border border-black/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.13)] transition-all duration-500 origin-top hover:rotate-0 hover:-translate-y-2 transform-gpu ${step.rotation}`}
                >
                  {/* 3D Metallic Push Pin tack at TOP CENTER */}
                  <div
                    id={`push-pin-${idx}`}
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-zinc-700 via-zinc-900 to-black shadow-[0_4px_12px_rgba(0,0,0,0.3)] border-2 border-white flex items-center justify-center group-hover:scale-110 transition-transform z-30"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-400 shadow-inner" />
                  </div>

                  {/* Inner Card Content matching reference image */}
                  <div className="flex flex-col gap-4">
                    <span className="font-general font-extrabold text-3xl text-zinc-400 group-hover:text-[#3B82F6] transition-colors">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="font-general text-2xl font-extrabold text-black tracking-tight group-hover:text-[#3B82F6] transition-colors">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 text-sm md:text-base leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CLOSING ANNOTATION NOTE & STATEMENT (RIGHT-ALIGNED) */}
          <div className="relative z-10 flex flex-col items-end gap-2 mt-20 pr-6 lg:pr-24 text-right">
            <div
              id="delivered-note"
              className="inline-flex items-center gap-2 font-general font-extrabold text-xl sm:text-2xl text-black"
            >
              <span>Ready to be</span>
              <span className="text-[#3B82F6]">delivered!</span>
            </div>
            <p className="text-sm font-sans text-slate-500 italic">
              We&apos;re excited to build something amazing together.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
