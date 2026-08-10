"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const categories = ["All", "AI & ML", "Web & Mobile", "E-Commerce", "Cloud Ops"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Synapse AI Engine",
      subtitle: "Autonomous AI Agents & Custom LLM Pipeline",
      category: "AI & ML",
      description:
        "Engineered an enterprise-grade AI automation platform powering multi-modal agents, RAG document search, and real-time LLM analytics.",
      metric: "3.2M Daily Ops",
      image: "/portfolio_ai_saas.png",
      tags: ["AI Agents", "Python", "RAG Systems", "Next.js"],
      link: "#",
    },
    {
      id: 2,
      title: "FinFuse Wealth Platform",
      subtitle: "High-Concurrency Web & Mobile Trading App",
      category: "Web & Mobile",
      description:
        "Built a real-time cross-platform iOS & Android trading mobile app and web dashboard handling 100,000+ daily active investors.",
      metric: "100k+ Active Users",
      image: "/portfolio_fintech.png",
      tags: ["React Native", "TypeScript", "Node.js", "WebSockets"],
      link: "#",
    },
    {
      id: 3,
      title: "Maison Lumina Luxury",
      subtitle: "3D E-Commerce Platform & Design System",
      category: "E-Commerce",
      description:
        "Designed and developed a high-converting luxury e-commerce web platform with interactive 3D product previews and sub-second page loads.",
      metric: "+45% Conversion",
      image: "/portfolio_ecommerce.png",
      tags: ["E-Commerce", "Three.js", "TailwindCSS", "Stripe API"],
      link: "#",
    },
    {
      id: 4,
      title: "KubeFlow Enterprise",
      subtitle: "Multi-Region Cloud Infrastructure & DevOps",
      category: "Cloud Ops",
      description:
        "Migrated legacy enterprise architecture to automated multi-region Kubernetes clusters with zero-downtime CI/CD deployment pipelines.",
      metric: "99.99% Uptime SLA",
      image: "/portfolio_cloud.png",
      tags: ["Kubernetes", "AWS / GCP", "Docker", "Terraform"],
      link: "#",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="relative w-full py-24 md:py-36 bg-[#FAF9F6] text-zinc-900 select-none font-space border-t border-black/[0.06] overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] bg-gradient-to-br from-blue-100/20 via-purple-100/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12 sm:gap-16">
        
        {/* HEADER & FILTER TABS */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="flex flex-col gap-3">
            <span className="px-3.5 py-1 bg-black/[0.04] text-[#3B82F6] text-[11px] font-mono font-bold uppercase tracking-[0.25em] rounded-full border border-blue-200/60 w-max flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              SELECTED CASE STUDIES
            </span>

            <h2 className="font-general text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight uppercase leading-[1.08]">
              OUR PORTFOLIO.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white/80 rounded-full border border-black/10 backdrop-blur-md shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#3B82F6] text-white shadow-md shadow-blue-500/20"
                    : "text-zinc-600 hover:text-black hover:bg-black/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECTS GRID (2 Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-[32px] border border-black/[0.08] hover:border-blue-500/40 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl"
            >
              {/* IMAGE MOCKUP CONTAINER */}
              <div className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] overflow-hidden bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Gradient Overlay Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Metric Badge Overlay */}
                <div className="absolute top-4 right-4 px-3.5 py-1.5 bg-white/90 backdrop-blur-md border border-black/10 rounded-full text-xs font-mono font-bold text-blue-600 shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                  <span>{project.metric}</span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest text-white">
                  {project.category}
                </div>
              </div>

              {/* PROJECT CONTENT */}
              <div className="p-8 sm:p-9 flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#3B82F6]">
                    {project.subtitle}
                  </span>

                  <h3 className="font-general text-2xl sm:text-3xl font-extrabold text-black tracking-tight leading-tight uppercase group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* TECH TAGS & ARROW LINK */}
                <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-black/[0.04] rounded-full text-[11px] font-mono text-zinc-700 border border-black/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="w-10 h-10 rounded-full bg-black/[0.04] group-hover:bg-[#3B82F6] text-black group-hover:text-white flex items-center justify-center transition-all duration-300 border border-black/10 group-hover:border-blue-500 shrink-0">
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
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
