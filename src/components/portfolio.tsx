"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ExternalLink,
  Globe,
  ShoppingBag,
  Layout,
  Smartphone,
  Sparkles,
  CheckCircle2,
  Zap,
  Lock,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

export interface PortfolioProject {
  id: string;
  title: string;
  subtitle: string;
  category: "ecommerce" | "website" | "webapp" | "app";
  categoryLabel: string;
  image?: string;
  video?: string;
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
    id: "turfzy-app",
    title: "Turfzy App",
    subtitle: "Cross-Platform iOS & Android Mobile Application",
    category: "app",
    categoryLabel: "Mobile App",
    image: "/portfolio/app-preview.png",
    video:
      "https://res.cloudinary.com/cqpabdjk/video/upload/v1790086447/WhatsApp_Video_2026-09-20_at_5.50.16_PM.mp4",
    url: "https://turfzy.com",
    displayUrl: "Turfzy App",
    description:
      "Full-featured mobile application engineered for sports enthusiasts to discover local turfs, book slots in real-time, view leaderboards, and track match stats.",
    highlights: [
      "Real-Time Slot & Turf Booking Engine",
      "Player Leaderboards & Match Tracking",
      "Cross-Platform Native iOS & Android UI",
    ],
    tags: ["React Native", "iOS & Android", "Sports Booking", "Real-Time DB", "Mobile App"],
    badge: "Mobile App",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-600",
    badgeBorder: "border-rose-500/30",
    accentGlow: "from-rose-500/15 via-pink-500/10 to-transparent",
  },
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
    tags: ["Healthcare", "Website Project", "UI/UX Design", "Wellness"],
    badge: "Website Project",
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-600",
    badgeBorder: "border-rose-500/30",
    accentGlow: "from-rose-500/15 via-pink-500/10 to-transparent",
  },
];

function ProjectMediaPreview({
  project,
  isPriority = false,
}: {
  project: PortfolioProject;
  isPriority?: boolean;
}) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && project.video) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const promise = videoRef.current.play();
      if (promise !== undefined) {
        promise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
    }
  }, [project.video]);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  if (project.category === "app") {
    return (
      <div className="relative w-full py-3 sm:py-5 flex items-center justify-center">
        {/* STANDALONE SMARTPHONE MOCKUP - NO OUTER WEB CONTAINER */}
        <div className="relative w-[170px] sm:w-[200px] aspect-[390/812] bg-[#16161E] rounded-[36px] p-2 border-[4px] border-zinc-800 shadow-2xl shadow-black/50 flex flex-col items-center group/phone hover:scale-[1.03] transition-transform duration-500">
          {/* DYNAMIC ISLAND / CAMERA NOTCH */}
          <div className="absolute top-3 z-30 w-16 h-3 rounded-full bg-black border border-white/10 flex items-center justify-center gap-1 pointer-events-none">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
            <div className="w-1 h-1 rounded-full bg-blue-500/80 animate-pulse" />
          </div>

          {/* SCREEN CONTAINER - ONLY MOBILE APP VIDEO */}
          <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-black flex items-center justify-center">
            {project.video && (
              <>
                <video
                  ref={videoRef}
                  src={project.video}
                  poster={project.image}
                  autoPlay
                  muted={true}
                  loop
                  playsInline
                  preload="auto"
                  onLoadedMetadata={(e) => {
                    e.currentTarget.muted = true;
                    e.currentTarget
                      .play()
                      .then(() => setIsPlaying(true))
                      .catch(() => setIsPlaying(false));
                  }}
                  onCanPlay={(e) => {
                    e.currentTarget.muted = true;
                    e.currentTarget
                      .play()
                      .then(() => setIsPlaying(true))
                      .catch(() => setIsPlaying(false));
                  }}
                  className="w-full h-full object-cover"
                />

                {/* HOVER CONTROLS OVERLAY */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover/phone:opacity-100 transition-opacity flex items-center justify-center gap-1.5 z-20 pointer-events-auto">
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause Video" : "Play Video"}
                    className="p-2 rounded-full bg-black/80 hover:bg-black text-white backdrop-blur-md transition-all border border-white/20"
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                    className="p-2 rounded-full bg-black/80 hover:bg-black text-white backdrop-blur-md transition-all border border-white/20"
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // DESKTOP / WEB APP BROWSER MOCKUP
  return (
    <div className="relative w-full rounded-2xl bg-[#0F0F14] border border-black/20 overflow-hidden shadow-xl group-hover:border-black/30 transition-all duration-500">
      {/* BROWSER TOP HEADER BAR */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#1A1A22] border-b border-white/10 text-xs font-mono">
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
          className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors text-[10px] truncate max-w-[170px] sm:max-w-xs group/url"
        >
          <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
          <span className="truncate font-mono">https://{project.displayUrl}</span>
          <ExternalLink className="w-2.5 h-2.5 text-zinc-500 group-hover/url:text-white shrink-0 ml-auto" />
        </a>

        <span
          className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border hidden sm:inline-block ${project.badgeBg} ${project.badgeText} ${project.badgeBorder}`}
        >
          {project.badge}
        </span>
      </div>

      {/* MEDIA CONTAINER */}
      <div className="relative w-full aspect-[1351/720] bg-[#0F0F14] overflow-hidden group/browser">
        {project.video ? (
          <>
            <video
              ref={videoRef}
              src={project.video}
              poster={project.image}
              autoPlay
              muted={true}
              loop
              playsInline
              preload="auto"
              onLoadedMetadata={(e) => {
                e.currentTarget.muted = true;
                e.currentTarget
                  .play()
                  .then(() => setIsPlaying(true))
                  .catch(() => setIsPlaying(false));
              }}
              className="w-full h-full object-cover object-top"
            />
            {!isPlaying && (
              <button
                onClick={togglePlay}
                className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center gap-1.5 text-white z-20 cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 ml-0.5 fill-white" />
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider">Play Video</span>
              </button>
            )}
            {isPlaying && (
              <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover/browser:opacity-100 transition-opacity flex items-center gap-1.5 z-20">
                <button
                  onClick={togglePlay}
                  aria-label="Pause Video"
                  className="p-1.5 rounded-full bg-black/80 hover:bg-black text-white backdrop-blur-md transition-all border border-white/20"
                >
                  <Pause className="w-3 h-3" />
                </button>
                <button
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                  className="p-1.5 rounded-full bg-black/80 hover:bg-black text-white backdrop-blur-md transition-all border border-white/20"
                >
                  {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
                </button>
              </div>
            )}
          </>
        ) : project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} - ${project.subtitle}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            priority={isPriority}
          />
        ) : null}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative w-full pt-4 md:pt-8 pb-16 md:pb-24 bg-[#FAF9F6] text-zinc-900 font-space border-t border-black/[0.06] overflow-hidden"
    >
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/30 via-purple-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-100/30 via-emerald-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col gap-8 md:gap-10">
        
        {/* HERO HEADER SECTION */}
        <div className="flex flex-col gap-5 border-b border-black/[0.08] pb-6">
          <div className="flex flex-col gap-2.5 max-w-3xl">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-[11px] font-mono font-bold uppercase tracking-[0.2em] rounded-full border border-blue-200/80 flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                PORTFOLIO SHOWCASE
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/[0.04] text-zinc-600 text-[11px] font-mono font-medium rounded-full border border-black/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                {PROJECTS.length} Production Builds
              </span>
            </div>

            <h1 className="font-general text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight uppercase leading-none">
              OUR PORTFOLIO.
            </h1>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              A curated showcase of production e-commerce stores, client websites, web applications, and mobile apps engineered by SevenX Labs.
            </p>
          </div>

          {/* CATEGORY FILTER TABS */}
          <div className="flex items-center justify-between gap-4 flex-wrap pt-2">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none max-w-full">
              <div className="flex items-center gap-1.5 bg-black/[0.03] p-1.5 rounded-2xl border border-black/[0.06]">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeFilter === "all"
                      ? "bg-black text-white shadow-md"
                      : "text-zinc-600 hover:text-black hover:bg-black/[0.04]"
                  }`}
                >
                  All ({PROJECTS.length})
                </button>

                <button
                  onClick={() => setActiveFilter("app")}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                    activeFilter === "app"
                      ? "bg-rose-600 text-white shadow-sm shadow-rose-600/20"
                      : "text-zinc-600 hover:text-black hover:bg-black/[0.04]"
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  Apps ({PROJECTS.filter((p) => p.category === "app").length})
                </button>

                <button
                  onClick={() => setActiveFilter("ecommerce")}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
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
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
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
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                    activeFilter === "webapp"
                      ? "bg-purple-600 text-white shadow-sm shadow-purple-600/20"
                      : "text-zinc-600 hover:text-black hover:bg-black/[0.04]"
                  }`}
                >
                  <Layout className="w-3.5 h-3.5" />
                  Admin ({PROJECTS.filter((p) => p.category === "webapp").length})
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FULL-WIDTH LIST OF PROJECTS */}
        <div className="flex flex-col gap-6 md:gap-8">

          {/* EMPTY STATE FOR UNMATCHED FILTERS */}
          {filteredProjects.length === 0 && (
            <div className="relative w-full rounded-[28px] bg-white border border-black/[0.08] p-10 md:p-16 text-center flex flex-col items-center justify-center gap-4 shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                <Smartphone className="w-8 h-8" />
              </div>

              <div className="flex flex-col gap-1 max-w-lg">
                <h3 className="font-general text-2xl font-extrabold text-black uppercase">
                  Mobile & Native App Case Studies Coming Soon
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed">
                  We design and engineer cross-platform iOS & Android mobile applications with offline sync, sub-second performance, and intuitive mobile UX. Verified client mobile case studies are currently being prepared.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#3B82F6] transition-all shadow-md"
              >
                <span>Inquire About Mobile Apps</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {/* COMPACT LIST ROW CARDS */}
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative rounded-[24px] sm:rounded-[28px] bg-white border border-black/[0.08] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 p-4 sm:p-6 lg:p-7 bg-gradient-to-br from-white via-slate-50/40 to-white"
            >
              {/* ACCENT GLOW OVERLAY */}
              <div
                className={`absolute top-0 right-0 w-72 h-72 bg-gradient-to-br ${project.accentGlow} rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-center">
                {/* LEFT: COMPACT MEDIA PREVIEW CONTAINER */}
                <div className="lg:col-span-5 flex flex-col gap-2">
                  <ProjectMediaPreview project={project} isPriority={idx === 0} />
                </div>

                {/* RIGHT: PROJECT DETAILS & HIGHLIGHTS */}
                <div className="lg:col-span-7 flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-2.5">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${project.badgeBg} ${project.badgeText} ${project.badgeBorder}`}
                      >
                        {project.badge}
                      </span>

                      <span className="text-[11px] font-mono text-zinc-400">
                        {project.categoryLabel}
                      </span>
                    </div>

                    <div className="flex flex-col gap-0.5">
                      <h2 className="font-general text-xl sm:text-2xl font-extrabold text-black tracking-tight uppercase leading-tight">
                        {project.title}
                      </h2>
                      <p className="text-[#3B82F6] font-mono text-xs font-semibold">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed font-normal">
                      {project.description}
                    </p>

                    <div className="flex flex-col gap-1 pt-1 border-t border-black/[0.06]">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                        Highlights
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                        {project.highlights.map((item) => (
                          <div key={item} className="flex items-center gap-1.5 text-xs font-medium text-zinc-800">
                            <Zap className="w-3 h-3 text-[#3B82F6] shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-0.5">
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

                  <div className="pt-2.5 border-t border-black/[0.06] flex items-center justify-between gap-4">
                    <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline-block">
                      Production Deployment
                    </span>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit live project ${project.title}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#3B82F6] transition-all duration-300 shadow-md hover:-translate-y-0.5 active:scale-[0.98] w-full sm:w-auto justify-center"
                    >
                      <span>Visit Live Showcase</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>

        {/* BOTTOM CTA SHOWCASE BANNER */}
        <div className="relative w-full rounded-[32px] bg-[#0D0D11] text-white border border-white/10 p-6 sm:p-10 md:p-14 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 mt-2">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-[11px] font-mono font-bold uppercase tracking-widest w-max mx-auto md:mx-0">
              <Sparkles className="w-3.5 h-3.5" />
              <span>START A PROJECT WITH SEVENX LABS</span>
            </div>

            <h2 className="font-general text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Have an Idea for a Mobile App, E-Commerce, or Web Application?
            </h2>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
              We design and engineer high-concurrency web applications, iOS & Android mobile apps, bespoke client portals, and scalable e-commerce systems with sub-second performance.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              aria-label="Start a project with SevenX Labs"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white text-black text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:scale-[0.98] w-full sm:w-auto justify-center"
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
