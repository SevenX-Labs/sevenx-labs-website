"use client";
import { ArrowRight } from "lucide-react";


import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

const ServicesParticleCanvas = dynamic(
  () => import("./ServicesParticleCanvas"),
  {
    ssr: false,
    loading: () => <div className="w-full h-[360px]" />,
  }
);

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const activeIdxRef = useRef(0);
  activeIdxRef.current = activeIdx;

  const services = [
    {
      number: "01",
      title: "Web & SaaS Development",
      slug: "web-development",
      category: "Full-Stack Engineering",
      description:
        "Custom web applications, multi-tenant SaaS platforms, and enterprise dashboards built for speed, conversion, and global scale.",
      tags: ["Next.js", "React", "TypeScript", "Node.js"],
    },
    {
      number: "02",
      title: "AI Development & Agents",
      slug: "ai-development",
      category: "Intelligence & RAG",
      description:
        "Autonomous AI agents, Retrieval-Augmented Generation (RAG) vector pipelines, and LLM integrations for intelligent workflow automation.",
      tags: ["Python", "LangChain", "PGVector", "OpenAI"],
    },
    {
      number: "03",
      title: "Mobile App Development",
      slug: "mobile-app-development",
      category: "iOS & Android",
      description:
        "Native and cross-platform mobile applications delivering 60fps performance, offline resilience, and hardware biometric security.",
      tags: ["React Native", "TypeScript", "iOS", "Android"],
    },
    {
      number: "04",
      title: "Custom Software Engineering",
      slug: "custom-software-development",
      category: "Enterprise Systems",
      description:
        "Tailored enterprise platforms, ERP/CRM systems, and legacy infrastructure modernization designed around your exact business workflows.",
      tags: ["PostgreSQL", "Redis", "REST APIs", "GraphQL"],
    },
    {
      number: "05",
      title: "UI/UX Design & Strategy",
      slug: "ui-ux-design",
      category: "Product Design",
      description:
        "User research, interactive wireframing, high-fidelity UI systems, and conversion-focused product interfaces built for clarity.",
      tags: ["Figma", "Design Systems", "Prototyping", "UX"],
    },
    {
      number: "06",
      title: "Cloud & DevOps Architecture",
      slug: "cloud-devops",
      category: "Infrastructure & Scale",
      description:
        "High-availability cloud infrastructure on AWS and GCP, automated CI/CD pipelines, Kubernetes, and continuous monitoring.",
      tags: ["AWS", "GCP", "Kubernetes", "Docker", "Terraform"],
    },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const windowH = window.innerHeight;

        const totalScrollableDistance = rect.height - windowH;
        if (totalScrollableDistance <= 0) return;

        const currentScrollProgress = -rect.top;
        const progressRatio = Math.min(
          1,
          Math.max(0, currentScrollProgress / totalScrollableDistance)
        );

        const rawStep = progressRatio * (services.length - 1);
        const targetStep = Math.min(
          services.length - 1,
          Math.max(0, Math.round(rawStep))
        );

        if (targetStep !== activeIdxRef.current) {
          setActiveIdx(targetStep);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [services.length]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full h-[320vh] bg-[#FAF9F6] text-zinc-900 font-space select-none border-t border-black/[0.06]"
    >
      <div className="sticky top-0 w-full h-[100dvh] flex flex-col justify-between pt-12 sm:pt-16 lg:pt-20 pb-4 sm:pb-8 lg:pb-10 px-4 sm:px-8 lg:px-16 overflow-hidden">
        
        {/* Ambient Gradient Background Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-blue-100/25 via-purple-100/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* SECTION HEADER */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-6 shrink-0">
          <div className="flex flex-col gap-1.5 sm:gap-3">
            <span className="px-3.5 py-1 bg-black/[0.04] text-[#3B82F6] text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.25em] rounded-full border border-blue-200/60 w-max flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              CAPABILITIES & SERVICES
            </span>

            <h2 className="font-general text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight uppercase leading-[1.08]">
              WHAT WE ENGINEER.
            </h2>
          </div>

          <div className="flex flex-col gap-1 sm:gap-2 max-w-md">
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Scroll down to explore our core product engineering, AI automation, and cloud architecture capabilities.
            </p>
          </div>
        </div>

        {/* MAIN DISPLAY GRID */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-2 sm:my-4">
          
          {/* DESKTOP-ONLY 3D Interactive Emblem Pod (Hidden on mobile) */}
          <div className="hidden lg:flex col-span-5 relative items-center justify-center h-full z-30">
            <div className="relative w-full max-w-[460px] h-[440px] lg:h-[460px] rounded-[32px] bg-white/80 backdrop-blur-xl border border-black/[0.08] shadow-2xl overflow-hidden flex flex-col items-center justify-center p-6 transition-transform duration-500 hover:scale-[1.01]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-blue-50/20 to-purple-50/15 pointer-events-none" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
              
              <div className="relative z-10 w-full h-full flex items-center justify-center">
                <ServicesParticleCanvas activeIdx={activeIdx} />
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-black/[0.08] text-[11px] font-mono font-bold text-zinc-700 shadow-sm flex items-center gap-2 z-20 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-ping" />
                <span>3D EMBLEM: {services[activeIdx].category}</span>
              </div>
            </div>
          </div>

          {/* STACKED SERVICE CARDS CONTAINER */}
          <div className="col-span-1 lg:col-span-7 relative flex items-center justify-center z-20 h-[330px] sm:h-[390px] lg:h-[460px]">
            {services.map((service, idx) => {
              const offset = idx - activeIdx;
              
              // Positioning logic:
              // offset === 0: active card (posX = 0, opacity = 1, scale = 1)
              // offset === 1: next upcoming card peeking on right (posX = 320px, opacity = 0.7, scale = 0.94)
              // offset > 1: upcoming cards offscreen to right (posX = 650px, opacity = 0)
              // offset < 0: past cards slide out to left & fade out cleanly without overlapping 3D pod (posX = -120px, opacity = 0)
              
              let posX = 0;
              let opacity = 0;
              let scale = 0.95;

              if (offset === 0) {
                posX = 0;
                opacity = 1;
                scale = 1;
              } else if (offset === 1) {
                posX = 320;
                opacity = 0.7;
                scale = 0.94;
              } else if (offset > 1) {
                posX = 650;
                opacity = 0;
                scale = 0.9;
              } else if (offset < 0) {
                posX = -120;
                opacity = 0;
                scale = 0.92;
              }

              const isRevealed = offset === 0;

              return (
                <div
                  key={service.number}
                  className={`group absolute w-[88vw] max-w-[340px] sm:w-[380px] lg:w-[410px] h-full p-6 sm:p-7 lg:p-8 rounded-[24px] sm:rounded-[28px] border transition-all duration-700 ease-out flex flex-col justify-between overflow-hidden shadow-2xl ${
                    isRevealed
                      ? "bg-[#121217] text-white border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.25)] opacity-100 scale-100"
                      : "bg-[#181820] text-zinc-400 border-white/5 opacity-0 lg:opacity-70 scale-95 lg:scale-94"
                  }`}
                  style={{
                    transform: typeof window !== "undefined" && window.innerWidth < 1024
                      ? `translateX(${offset * 100}%) scale(${isRevealed ? 1 : 0.95})`
                      : `translateX(${posX}px) scale(${scale})`,
                    zIndex: 10 - Math.abs(offset),
                  }}
                >
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-600/30 via-purple-600/15 to-transparent rounded-full blur-2xl pointer-events-none transition-opacity duration-500 ${isRevealed ? "opacity-100" : "opacity-0"}`} />

                  <div className="absolute bottom-4 right-4 w-36 h-36 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:12px_12px] opacity-30 pointer-events-none" />

                  {/* CARD TOP HEADER: Service Number + Link Button */}
                  <div className="relative z-10 flex items-center justify-between shrink-0">
                    <span
                      className={`font-general font-extrabold text-2xl sm:text-3xl transition-colors ${
                        isRevealed ? "text-[#3B82F6]" : "text-zinc-600"
                      }`}
                    >
                      {service.number}
                    </span>

                    <Link
                      href={`/services/${service.slug}`}
                      aria-label={`Explore ${service.title} engineering services`}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isRevealed
                          ? "bg-[#3B82F6] text-white shadow-lg hover:bg-blue-500"
                          : "bg-white/5 text-zinc-600 border border-white/10 hover:text-white"
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
                    </Link>
                  </div>

                  {/* CARD BODY: Category, Title, Description, Tags — always in DOM for crawlability */}
                  <div
                    className={`relative z-10 flex-1 flex flex-col justify-center gap-2 sm:gap-2.5 transition-all duration-500 my-auto ${
                      isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#3B82F6]">
                      {service.category}
                    </span>

                    <h3 className="font-general text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight uppercase">
                      <Link href={`/services/${service.slug}`} aria-label={`View details for ${service.title}`}>
                        {service.title}
                      </Link>
                    </h3>

                    <p className="text-zinc-300 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                      {service.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 bg-white/10 rounded-full text-[10px] sm:text-[11px] font-mono text-zinc-200 border border-white/10 shrink-0"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CARD FOOTER: Capability & Index */}
                  <div className="relative z-10 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-zinc-400 pt-2 border-t border-white/5 shrink-0">
                    <span>CAPABILITY</span>
                    <span>0{idx + 1} / 06</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM STATUS ROW */}
        <div className="relative z-30 max-w-7xl mx-auto w-full flex items-center justify-between text-xs font-mono text-zinc-500 shrink-0 pt-2 pb-2 bg-[#FAF9F6] border-t border-black/[0.06]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-black text-sm">0{activeIdx + 1}</span>
            <span>/ 06 SERVICES</span>
          </div>

          <span className="uppercase font-semibold tracking-wider text-[10px] sm:text-[11px] inline-flex items-center gap-1.5"><span>SCROLL DOWN TO REVEAL</span><ArrowRight className="w-3.5 h-3.5" /></span>
        </div>

      </div>
    </section>
  );
}
