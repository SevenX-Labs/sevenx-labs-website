import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full py-16 sm:py-24 lg:py-36 bg-[#FDFDFD] text-zinc-900 border-t border-black/[0.06] overflow-hidden font-sans select-none"
    >
      {/* Subtle Architectural Grid Texture & Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-100/20 via-blue-100/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-gradient-to-br from-purple-100/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* ASYMMETRIC TWO-COLUMN COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Substantial space reserved for 3D Digital Architecture Sculpture */}
          <div id="about-logo-anchor" className="lg:col-span-5 hidden lg:block h-[480px] pointer-events-none" />

          {/* RIGHT COLUMN: About Us Editorial Content matching reference image */}
          <div className="lg:col-span-7 flex flex-col items-start gap-7">
            
            {/* Section Header with Line */}
            <div className="flex items-center gap-4 w-full">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6] bg-blue-50/80 px-3.5 py-1 rounded-full border border-blue-200/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                ABOUT US
              </span>
              <span className="h-[1px] flex-1 bg-gradient-to-r from-blue-500/30 via-black/10 to-transparent" />
            </div>

            {/* Headline matching image */}
            <h2 className="font-general text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold text-black leading-[1.08] tracking-tight uppercase">
              WE BUILD
              <br />
              <span className="relative inline-block text-[#3B82F6]">
                TECHNOLOGY
                {/* Highlight line underneath */}
                <span className="absolute bottom-1 left-0 w-full h-2 bg-[#3B82F6]/15 -z-10 rounded-sm" />
              </span>
              <br />
              PEOPLE ACTUALLY USE.
            </h2>

            {/* Supporting Copy matching image with bold emphasis */}
            <div className="flex flex-col gap-5 text-slate-500 leading-relaxed text-base md:text-lg max-w-xl font-normal">
              <p>
                SevenX Labs is a software engineering and product studio. We turn ambitious ideas into <strong className="font-bold text-black">reliable, scalable products</strong> — not prototypes that stall after launch.
              </p>
              <p>
                Web, mobile, AI, and custom software: <strong className="font-bold text-black">one team</strong> carries the work from first sketch to production, so nothing gets lost in a handoff.
              </p>
            </div>

            {/* Thin Horizontal Divider Line */}
            <div className="w-full h-[1px] bg-black/10 my-1" />

            {/* OUR PHILOSOPHY Section with solid square bullets */}
            <div className="flex flex-col gap-3.5">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-400 font-semibold">
                OUR PHILOSOPHY
              </span>
              <ul className="flex flex-col gap-2.5 font-general font-extrabold text-sm sm:text-base uppercase tracking-wider">
                <li className="flex items-center gap-2.5 text-black">
                  <span className="text-[10px] text-black">■</span>
                  <span>THINK DEEPLY.</span>
                </li>
                <li className="flex items-center gap-2.5 text-[#3B82F6]">
                  <span className="text-[10px] text-[#3B82F6]">■</span>
                  <span>BUILD PRECISELY.</span>
                </li>
                <li className="flex items-center gap-2.5 text-black">
                  <span className="text-[10px] text-black">■</span>
                  <span>SHIP RELENTLESSLY.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
