"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote:
        "SevenX Labs delivered our AI agent infrastructure and custom LLM pipeline 3 weeks ahead of schedule. Their engineering standards and speed are bank-grade.",
      author: "Elena Rostova",
      role: "CTO at NexaFlow AI",
      location: "San Francisco, CA",
      metric: "300% Infra Speedup",
      avatar: "/avatar_elena.png",
      rating: 5,
      tags: ["AI Agents", "Custom LLMs", "Python"],
    },
    {
      id: 2,
      quote:
        "The mobile app and high-concurrency web platform SevenX Labs engineered handles over 100,000 daily active users with zero downtime. Exceptional 3D UI/UX.",
      author: "Marcus Vance",
      role: "VP of Product at Horizon Fintech",
      location: "London, UK",
      metric: "100k+ Daily Users",
      avatar: "/avatar_marcus.png",
      rating: 5,
      tags: ["React Native", "Next.js", "Kubernetes"],
    },
    {
      id: 3,
      quote:
        "Our e-commerce conversion rate jumped by 42% within a month of launching our redesigned platform. Their SEO optimization and analytics strategy are top-tier.",
      author: "Sophia Chen",
      role: "Head of Growth at OmniStore",
      location: "Singapore",
      metric: "+42% Conversion",
      avatar: "/avatar_sophia.png",
      rating: 5,
      tags: ["E-Commerce", "SEO Optimization", "Analytics"],
    },
    {
      id: 4,
      quote:
        "SevenX Labs migrated our legacy monolithic app into a multi-region Kubernetes cluster with zero data loss. Best Cloud Ops team we have ever partnered with.",
      author: "David Miller",
      role: "Founder at CloudScale Ops",
      location: "Austin, TX",
      metric: "99.99% Uptime SLA",
      avatar: "/avatar_elena.png",
      rating: 5,
      tags: ["Cloud Ops", "Kubernetes", "Docker"],
    },
    {
      id: 5,
      quote:
        "SevenX Labs' brand design, 3D logo animation, and GTM product strategy transformed our company pitch deck and platform, leading directly to our seed round.",
      author: "Alexander Wright",
      role: "Managing Director at Apex",
      location: "New York, NY",
      metric: "$12M Seed Round",
      avatar: "/avatar_marcus.png",
      rating: 5,
      tags: ["Logo Animation", "GTM Strategy", "UI/UX"],
    },
  ];

  // Double the array for seamless infinite looping
  const loopTestimonials = [...testimonials, ...testimonials];
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="testimonials"
      className="relative w-full pt-12 pb-16 lg:pt-16 lg:pb-20 bg-[#FAF9F6] text-zinc-900 select-none overflow-hidden font-space border-t border-black/[0.06]"
    >
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-100/20 via-purple-100/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12 sm:gap-16">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <span className="px-3.5 py-1 bg-black/[0.04] text-[#3B82F6] text-[11px] font-mono font-bold uppercase tracking-[0.25em] rounded-full border border-blue-200/60 w-max flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              CLIENT REVIEWS & IMPACT
            </span>

            <h2 className="font-general text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight uppercase leading-[1.08]">
              WHAT OUR CLIENTS SAY.
            </h2>
          </div>

          <div className="flex flex-col gap-2 max-w-md">
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Trusted by high-growth AI startups, enterprise fintech platforms, and visionary founders worldwide.
            </p>
            <span className="text-[11px] font-mono text-blue-600 font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
              HOVER CARD TO PAUSE AUTO-SCROLL
            </span>
          </div>
        </div>

        {/* INFINITE AUTO-SCROLL MARQUEE TRACK */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex items-center gap-6 sm:gap-8 w-max animate-marquee hover:[animation-play-state:paused] py-4">
            {loopTestimonials.map((item, index) => {
              const uniqueKey = `${item.id}-${index}`;
              const isHovered = hoveredId === item.id;

              return (
                <div
                  key={uniqueKey}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group relative w-[330px] sm:w-[380px] md:w-[420px] p-8 rounded-[28px] border transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden shadow-xl shrink-0 ${
                    isHovered
                      ? "bg-[#121217] text-white border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.25)] -translate-y-2 scale-[1.02]"
                      : "bg-white text-zinc-900 border-black/[0.08] hover:border-blue-500/40 hover:shadow-2xl"
                  }`}
                >
                  {/* Glowing Corner Highlight */}
                  {isHovered && (
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-600/30 via-purple-600/15 to-transparent rounded-full blur-2xl pointer-events-none" />
                  )}

                  <div className="relative z-10 flex flex-col gap-5">
                    {/* TOP ROW: Rating & Impact Metric Tag */}
                    <div className="flex items-center justify-between">
                      {/* 5-Star Rating */}
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Impact Metric Badge */}
                      <span className={`px-3 py-1 text-[11px] font-mono font-bold rounded-full border ${
                        isHovered 
                          ? "bg-blue-500/20 text-blue-400 border-blue-400/30" 
                          : "bg-blue-50 text-[#3B82F6] border-blue-200"
                      }`}>
                        {item.metric}
                      </span>
                    </div>

                    {/* QUOTE TEXT */}
                    <p className={`text-xs sm:text-sm md:text-base leading-relaxed font-normal italic min-h-[72px] ${
                      isHovered ? "text-zinc-200" : "text-slate-700"
                    }`}>
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* AUTHOR FOOTER */}
                  <div className={`relative z-10 pt-5 mt-5 border-t flex items-center justify-between ${
                    isHovered ? "border-white/10" : "border-black/[0.06]"
                  }`}>
                    <div className="flex items-center gap-3.5">
                      <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-blue-500/40 shrink-0">
                        <Image
                          src={item.avatar}
                          alt={item.author}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex flex-col">
                        <span className={`font-general font-extrabold text-sm sm:text-base leading-tight ${
                          isHovered ? "text-white" : "text-black"
                        }`}>
                          {item.author}
                        </span>
                        <span className={`text-[11px] font-mono ${
                          isHovered ? "text-zinc-400" : "text-slate-500"
                        }`}>
                          {item.role}
                        </span>
                      </div>
                    </div>

                    {/* Verified Badge */}
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
                      isHovered 
                        ? "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                        : "bg-blue-50 text-[#3B82F6] border border-blue-200"
                    }`}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

