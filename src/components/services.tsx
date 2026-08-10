"use client";

import React, { useRef, useEffect, useState } from "react";
import ServicesParticleCanvas from "./ServicesParticleCanvas";

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const services = [
    {
      number: "01",
      title: "Web & Mobile Engineering",
      category: "WEBSITE DEV & MOBILE APPS",
      description:
        "High-performance website development, custom UI/UX web design, and native/cross-platform Android & iOS mobile applications engineered for enterprise scale.",
      tags: ["Website Dev", "Web Design", "iOS Apps", "Android Dev", "React / Next.js"],
    },
    {
      number: "02",
      title: "AI Automation & ML Agents",
      category: "AI AUTOMATION & MACHINE LEARNING",
      description:
        "Building autonomous AI agents, machine learning (ML) models, predictive AI pipelines, and enterprise workflow automation.",
      tags: ["AI Automation", "AI Agents", "Machine Learning", "Custom LLMs", "RAG Systems"],
    },
    {
      number: "03",
      title: "Cloud Ops & Infrastructure",
      category: "DEVOPS & CLOUD ARCHITECTURE",
      description:
        "Resilient multi-cloud management (AWS/GCP), Kubernetes microservices, 99.99% uptime SLA, automated CI/CD pipelines, and serverless scale.",
      tags: ["Cloud Ops", "Kubernetes", "Docker", "AWS / GCP", "Terraform"],
    },
    {
      number: "04",
      title: "Brand Design & Motion",
      category: "LOGO DESIGN & ANIMATION",
      description:
        "Crafting iconic 2D/3D logo design, interactive logo animations, motion graphics, and cohesive digital design systems that elevate your brand.",
      tags: ["Logo Design", "Logo Animation", "Motion Graphics", "Brand Identity", "UI/UX Design"],
    },
    {
      number: "05",
      title: "E-Commerce & Enterprise CRM",
      category: "ECOMMERCE & ENTERPRISE SOLUTIONS",
      description:
        "Custom e-commerce web & app development platforms, enterprise software solutions, and seamless CRM integrations (Salesforce, HubSpot, APIs).",
      tags: ["E-Commerce Web & Apps", "Enterprise Solutions", "CRM Integration", "API Gateways"],
    },
    {
      number: "06",
      title: "SEO, Analytics & Strategy",
      category: "SEO OPTIMIZATION & PRODUCT STRATEGY",
      description:
        "Data-driven search engine optimization (SEO), conversion rate analytics, user behavior tracking, and GTM Product Strategy.",
      tags: ["SEO Optimization", "Analytics", "Product Strategy", "Conversion Rate", "Growth Roadmap"],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;
      const totalScroll = rect.height - windowH;
      if (totalScroll <= 0) return;

      const current = -rect.top;
      const progress = Math.min(1, Math.max(0, current / totalScroll));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalSteps = services.length;
  const rawStep = scrollProgress * (totalSteps - 0.2);
  const activeIdx = Math.min(totalSteps - 1, Math.max(0, Math.floor(rawStep)));

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative w-full h-[550vh] bg-[#FAF9F6] text-zinc-900 select-none font-space border-t border-black/[0.06]"
    >
      {/* Sticky Viewport Container - Adaptive Flex Layout */}
      <div className="sticky top-0 w-full h-screen flex flex-col justify-between py-6 md:py-10 px-6 md:px-12 lg:px-16 overflow-hidden">
        
        {/* Background Architectural Grid */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 -right-32 w-[650px] h-[650px] bg-gradient-to-br from-blue-100/20 via-cyan-100/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-0 w-[550px] h-[550px] bg-gradient-to-tr from-purple-100/15 to-transparent rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:64px_64px]" />
        </div>

        {/* HEADER */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 shrink-0">
          <div className="flex flex-col gap-1.5 md:gap-2">
            <span className="px-3.5 py-1 bg-black/[0.04] text-[#3B82F6] text-[11px] font-mono font-bold uppercase tracking-[0.25em] rounded-full border border-blue-200/60 w-max flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              OUR CAPABILITIES
            </span>

            <h2 className="font-general text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight uppercase leading-[1.08]">
              OUR SERVICES.
            </h2>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed max-w-md font-normal">
            We offer comprehensive digital solutions that transform your business and drive innovation across every touchpoint.
          </p>
        </div>

        {/* MAIN DISPLAY STAGE - 2 Columns (3D Particle Canvas on Left, Cards on Right) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 my-2 md:my-4 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[380px] max-h-[460px]">
          
          {/* LEFT COLUMN: Dedicated 3D Morphing Particle Emblem Canvas */}
          <div className="flex lg:col-span-5 items-center justify-center h-[220px] sm:h-[280px] lg:h-full relative shrink-0">
            <ServicesParticleCanvas activeIdx={activeIdx} />
            
            {/* Dynamic Label underneath 3D Particle Canvas */}
            <div className="absolute bottom-1 lg:bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-black/10 text-[11px] font-mono font-bold text-zinc-700 shadow-sm flex items-center gap-2 z-10 pointer-events-none">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-ping" />
              <span>3D EMBLEM: {services[activeIdx].category}</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Stacked Services Cards (Cards flow Right -> Left) */}
          <div className="col-span-1 lg:col-span-7 relative h-full flex items-center justify-center">
            {services.map((service, idx) => {
              const offset = idx - activeIdx;
              
              let posX = offset * 420;
              let opacity = 1;
              let scale = 1;

              if (offset < 0) {
                posX = offset * 480;
                opacity = 0;
                scale = 0.9;
              } else if (offset === 0) {
                posX = 0;
                opacity = 1;
                scale = 1;
              } else if (offset === 1) {
                posX = 440; // Clean gap on right
                opacity = 0.85;
                scale = 0.94;
              } else {
                posX = 900 + (offset - 2) * 440;
                opacity = 0;
                scale = 0.9;
              }

              const isRevealed = offset === 0;

              return (
                <div
                  key={service.number}
                  className={`group absolute w-[320px] sm:w-[380px] md:w-[410px] h-[400px] sm:h-[430px] md:h-[440px] p-6 sm:p-8 md:p-9 rounded-[28px] border transition-all duration-700 ease-out flex flex-col justify-between overflow-hidden shadow-2xl ${
                    isRevealed
                      ? "bg-[#121217] text-white border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
                      : "bg-[#181820] text-zinc-400 border-white/5 opacity-70"
                  }`}
                  style={{
                    transform: `translateX(${posX}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: 10 - Math.abs(offset),
                  }}
                >
                  {/* Glowing Corner Aura */}
                  {isRevealed && (
                    <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-600/30 via-purple-600/15 to-transparent rounded-full blur-2xl pointer-events-none" />
                  )}

                  {/* Dot Matrix Texture */}
                  <div className="absolute bottom-4 right-4 w-36 h-36 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:12px_12px] opacity-30 pointer-events-none" />

                  {/* TOP ROW: Stage Number & Arrow Button */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span
                      className={`font-general font-extrabold text-2xl sm:text-3xl transition-colors ${
                        isRevealed ? "text-[#3B82F6]" : "text-zinc-600"
                      }`}
                    >
                      {service.number}
                    </span>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isRevealed
                          ? "bg-[#3B82F6] text-white shadow-lg"
                          : "bg-white/5 text-zinc-600 border border-white/10"
                      }`}
                    >
                      <svg
                        className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>

                  {/* CONTENT (Revealed ONLY when card reaches front/center) */}
                  <div
                    className={`relative z-10 flex-1 flex flex-col justify-center gap-3 transition-all duration-500 ${
                      isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    {isRevealed && (
                      <>
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#3B82F6]">
                          {service.category}
                        </span>

                        <h3 className="font-general text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight uppercase">
                          {service.title}
                        </h3>

                        <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                          {service.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 bg-white/10 rounded-full text-[11px] font-mono text-zinc-200 border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  {/* BOTTOM COUNTER */}
                  <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/5">
                    <span>CAPABILITY</span>
                    <span>0{idx + 1} / 06</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* FOOTER SCROLL INDICATOR */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-zinc-500 shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-bold text-black">0{activeIdx + 1}</span>
            <span>/ 06 SERVICES</span>
          </div>

          <span className="uppercase font-semibold tracking-wider text-[11px]">SCROLL DOWN TO REVEAL →</span>
        </div>

      </div>
    </section>
  );
}
