"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ExternalLink,
  Globe,
  ShoppingBag,
  Layout,
  Sparkles,
  CheckCircle2,
  Zap,
  Lock,
} from "lucide-react";

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: "ecommerce" | "website" | "webapp";
  categoryLabel: string;
  image: string;
  url: string;
  displayUrl: string;
  description: string;
  highlights: string[];
  tags: string[];
  badge: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  accentGlow: string;
}

const PROJECTS: PortfolioProject[] = [
  {
    id: "kickat",
    title: "Kickat E-Commerce",
    subtitle: "High-Performance Online Shopping & Retail Platform",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    image: "/portfolio/kickat.png",
    url: "https://kickat.co.in",
    displayUrl: "kickat.co.in",
    description:
      "A complete custom e-commerce solution engineered for seamless product discovery, fast checkout flow, inventory synchronization, and high online sales conversion.",
    highlights: [
      "Sub-Second Page Load Speed",
      "Seamless Cart & Secure Checkout",
      "Dynamic Product Catalog & Filters",
    ],
    tags: ["Next.js", "E-Commerce", "Tailwind CSS", "Payment Gateway"],
    badge: "E-Commerce Platform",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-600",
    badgeBorder: "border-amber-500/30",
    accentGlow: "from-amber-500/15 via-orange-500/10 to-transparent",
  },
  {
    id: "mandarlawn",
    title: "Mandar Lawn & Banquets",
    subtitle: "Luxury Event Venue & Banquets Showcase",
    category: "website",
    categoryLabel: "Website Project",
    image: "/portfolio/mandarlawn.png",
    url: "https://mandarlawn.com",
    displayUrl: "mandarlawn.com",
    description:
      "Elegant hospitality & banquet website showcasing luxury event spaces, interactive photo galleries, package offerings, and instant inquiry booking flows.",
    highlights: [
      "Immersive High-Res Venue Gallery",
      "Direct Event Booking Inquiries",
      "Fully Responsive Mobile Experience",
    ],
    tags: ["React", "Hospitality", "UI/UX Design", "SEO"],
    badge: "Website Project",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-600",
    badgeBorder: "border-emerald-500/30",
    accentGlow: "from-emerald-500/15 via-teal-500/10 to-transparent",
  },
  {
    id: "yfa-web",
    title: "YF Advisors (Website)",
    subtitle: "Financial Consultancy & Advisory Services Platform",
    category: "website",
    categoryLabel: "Website Project",
    image: "/portfolio/yfa-web.png",
    url: "https://yfadvisors.in",
    displayUrl: "yfadvisors.in",
    description:
      "Corporate web platform engineered for YF Advisors, highlighting financial consultancy solutions, leadership team profiles, and streamlined client intake.",
    highlights: [
      "Corporate Advisory Brand Positioning",
      "SEO & Page Speed Optimized",
      "Integrated Client Consultation Form",
    ],
    tags: ["Corporate Website", "Financial Services", "SEO", "Performance"],
    badge: "Website Project",
    badgeBg: "bg-blue-500/10",
    badgeText: "text-blue-600",
    badgeBorder: "border-blue-500/30",
    accentGlow: "from-blue-500/15 via-indigo-500/10 to-transparent",
  },
  {
    id: "yfa-admin",
    title: "YF Advisors (Admin Panel)",
    subtitle: "Custom Administrative & Operations Portal",
    category: "webapp",
    categoryLabel: "Web App & Admin",
    image: "/portfolio/yfa-admin.png",
    url: "https://yfadvisors.in",
    displayUrl: "yfadvisors.in (Admin Panel)",
    description:
      "Secure, real-time administrative control panel enabling YF Advisors to manage client leads, operational workflows, performance analytics, and security permissions.",
    highlights: [
      "Real-Time Lead & Operations Dashboard",
      "Role-Based Access & Security Controls",
      "Interactive Analytics & Report Generation",
    ],
    tags: ["Admin Dashboard", "Web Application", "Analytics", "Role Management"],
    badge: "Admin Panel",
    badgeBg: "bg-purple-500/10",
    badgeText: "text-purple-600",
    badgeBorder: "border-purple-500/30",
    accentGlow: "from-purple-500/15 via-indigo-500/10 to-transparent",
  },
  {
    id: "femmeflo",
    title: "FemmeFlo",
    subtitle: "Women's Health & Wellness Web Platform",
    category: "website",
    categoryLabel: "Website Project",
    image: "/portfolio/femmeflo.png",
    url: "https://femmeflo.in",
    displayUrl: "femmeflo.in",
    description:
      "Modern healthcare & wellness web platform designed for women's health awareness, consultation scheduling, interactive wellness guides, and smooth UI.",
    highlights: [
      "Intuitive Women's Health Navigation",
      "Interactive Wellness & Health Content",
      "Consultation Inquiry Flow",
    ],
    tags: ["Healthcare", "Web App", "UI/UX Design", "Wellness"],
    badge: "Website Project",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-600",
    badgeBorder: "border-rose-500/30",
    accentGlow: "from-rose-500/15 via-pink-500/10 to-transparent",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative w-full pt-4 md:pt-6 pb-16 md:pb-24 bg-[#FAF9F6] text-zinc-900 font-space border-t border-black/[0.06] overflow-hidden"
    >
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/30 via-purple-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-100/30 via-emerald-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-8 md:gap-10">
        
        {/* COMPACT HERO HEADER & FILTER BAR */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-black/[0.08] pb-6">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="px-3 py-0.5 bg-[#3B82F6]/10 text-[#3B82F6] text-[11px] font-mono font-bold uppercase tracking-[0.2em] rounded-full border border-blue-200/80 w-max flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                PORTFOLIO SHOWCASE
              </span>

              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-black/[0.04] text-zinc-600 text-[11px] font-mono font-medium rounded-full border border-black/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                5 Production Builds
              </span>
            </div>

            <h1 className="font-general text-3xl sm:text-4xl md:text-5xl font-extrabold text-black tracking-tight uppercase leading-none">
              OUR PORTFOLIO.
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-snug font-normal max-w-xl">
              Production e-commerce stores, client websites, and web application admin portals engineered by SevenX Labs.
            </p>
          </div>

          {/* FLOATING FILTER NAVIGATION */}
          <div className="flex flex-col gap-2 shrink-0">
            <div className="p-1 rounded-2xl bg-white/90 backdrop-blur-md border border-black/10 shadow-md flex flex-wrap items-center gap-1">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === "all"
                    ? "bg-black text-white shadow-sm"
                    : "text-zinc-600 hover:text-black hover:bg-black/[0.04]"
                }`}
              >
                All ({PROJECTS.length})
              </button>

              <button
                onClick={() => setActiveFilter("ecommerce")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                  activeFilter === "ecommerce"
                    ? "bg-amber-500 text-white shadow-sm shadow-amber-500/20"
                    : "text-zinc-600 hover:text-black hover:bg-black/[0.04]"
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                E-Commerce ({PROJECTS.filter((p) => p.category === "ecommerce").length})
              </button>

              <button
                onClick={() => setActiveFilter("website")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                  activeFilter === "website"
                    ? "bg-[#3B82F6] text-white shadow-sm shadow-blue-500/20"
                    : "text-zinc-600 hover:text-black hover:bg-black/[0.04]"
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                Websites ({PROJECTS.filter((p) => p.category === "website").length})
              </button>

              <button
                onClick={() => setActiveFilter("webapp")}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                  activeFilter === "webapp"
                    ? "bg-purple-600 text-white shadow-sm shadow-purple-600/20"
                    : "text-zinc-600 hover:text-black hover:bg-black/[0.04]"
                }`}
              >
                <Layout className="w-3.5 h-3.5" />
                Admin & Web Apps ({PROJECTS.filter((p) => p.category === "webapp").length})
              </button>
            </div>
          </div>
        </div>

        {/* PROJECTS SHOWCASE GRID - IMMEDIATELY VISIBLE */}
        <div className="flex flex-col gap-10 md:gap-12">
          {filteredProjects.map((project, idx) => {
            const isFeatured = idx === 0 && activeFilter === "all";

            return (
              <div
                key={project.id}
                className={`group relative rounded-[28px] bg-white border border-black/[0.08] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 ${
                  isFeatured ? "p-5 sm:p-8 lg:p-10 bg-gradient-to-br from-white via-slate-50/50 to-white" : "p-5 sm:p-8"
                }`}
              >
                {/* ACCENT GLOW OVERLAY */}
                <div
                  className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${project.accentGlow} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div
                  className={`relative z-10 grid grid-cols-1 ${
                    isFeatured ? "lg:grid-cols-12 gap-6 lg:gap-10 items-center" : "lg:grid-cols-12 gap-6"
                  }`}
                >
                  {/* LEFT: macOS BROWSER MOCKUP CONTAINER */}
                  <div
                    className={`${
                      isFeatured ? "lg:col-span-7" : "lg:col-span-6"
                    } flex flex-col gap-2`}
                  >
                    <div className="relative w-full rounded-2xl bg-[#0F0F14] border border-black/20 overflow-hidden shadow-xl group-hover:border-black/30 transition-all duration-500">
                      {/* BROWSER TOP HEADER BAR */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1A1A22] border-b border-white/10 text-xs font-mono">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] inline-block shadow-sm" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] inline-block shadow-sm" />
                          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] inline-block shadow-sm" />
                        </div>

                        {/* URL BAR */}
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors text-[11px] truncate max-w-[200px] sm:max-w-xs group/url"
                        >
                          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                          <span className="truncate font-mono">https://{project.displayUrl}</span>
                          <ExternalLink className="w-3 h-3 text-zinc-500 group-hover/url:text-white shrink-0 ml-auto" />
                        </a>

                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border hidden sm:inline-block ${project.badgeBg} ${project.badgeText} ${project.badgeBorder}`}
                        >
                          {project.badge}
                        </span>
                      </div>

                      {/* SCREENSHOT PREVIEW IMAGE - PERFECT NATIVE ASPECT RATIO (1351x768) */}
                      <div className="relative w-full aspect-[1351/768] bg-[#0F0F14] overflow-hidden">
                        <Image
                          src={project.image}
                          alt={`${project.title} - ${project.subtitle}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                          className="object-contain object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                          priority={idx < 2}
                        />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: PROJECT DETAILS & HIGHLIGHTS */}
                  <div
                    className={`${
                      isFeatured ? "lg:col-span-5" : "lg:col-span-6"
                    } flex flex-col justify-between gap-5`}
                  >
                    <div className="flex flex-col gap-3">
                      {/* CATEGORY BADGE & URL */}
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <span
                          className={`px-3 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border ${project.badgeBg} ${project.badgeText} ${project.badgeBorder}`}
                        >
                          {project.badge}
                        </span>

                        <span className="text-xs font-mono text-zinc-400">
                          {project.categoryLabel}
                        </span>
                      </div>

                      {/* TITLE & SUBTITLE */}
                      <div className="flex flex-col gap-0.5">
                        <h2 className="font-general text-2xl sm:text-3xl font-extrabold text-black tracking-tight uppercase leading-tight">
                          {project.title}
                        </h2>
                        <p className="text-[#3B82F6] font-mono text-xs sm:text-sm font-semibold">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* DESCRIPTION */}
                      <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* IMPACT HIGHLIGHT BULLETS */}
                      <div className="flex flex-col gap-1.5 pt-2 border-t border-black/[0.06]">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                          Architecture Highlights
                        </span>
                        <div className="flex flex-col gap-1.5">
                          {project.highlights.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-xs font-medium text-zinc-800">
                              <Zap className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* TECH STACK BADGES */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md bg-black/[0.04] border border-black/10 text-zinc-700 text-[10px] font-mono font-semibold"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* ACTION FOOTER BUTTON */}
                    <div className="pt-3 border-t border-black/[0.06] flex items-center justify-between gap-4">
                      <span className="text-xs font-mono text-zinc-400 hidden sm:inline-block">
                        Production Live Website
                      </span>

                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit live site ${project.title}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#3B82F6] transition-all duration-300 shadow-md hover:-translate-y-0.5 active:scale-[0.98] ml-auto sm:ml-0"
                      >
                        <span>Visit Live Site</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM CTA SHOWCASE BANNER */}
        <div className="relative w-full rounded-[32px] bg-[#0D0D11] text-white border border-white/10 p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 mt-2">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest w-max mx-auto md:mx-0">
              <Sparkles className="w-3.5 h-3.5" />
              <span>START A PROJECT WITH SEVENX LABS</span>
            </div>

            <h2 className="font-general text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Have an Idea for an E-Commerce or Custom Web Application?
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
              We design and engineer high-concurrency web applications, bespoke client portals, and scalable e-commerce systems with sub-second performance.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/contact"
              aria-label="Start a project with SevenX Labs"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white text-black text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
