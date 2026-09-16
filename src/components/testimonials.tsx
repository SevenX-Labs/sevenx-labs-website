"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Star,
  Quote,
  ExternalLink,
  CheckCircle2,
  Play,
  Pause,
} from "lucide-react";

export interface TestimonialItem {
  id: string;
  projectTitle: string;
  projectCategory: string;
  projectUrl: string;
  displayUrl: string;
  clientName: string;
  clientRole: string;
  quote: string;
  impactMetric: string;
  rating: number;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  accentColor: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "kickat",
    projectTitle: "Kickat E-Commerce",
    projectCategory: "E-Commerce Platform",
    projectUrl: "https://kickat.co.in",
    displayUrl: "kickat.co.in",
    clientName: "Kickat Retail Team",
    clientRole: "E-Commerce Operations",
    quote:
      "SevenX Labs engineered a top-notch e-commerce store with seamless cart performance, sub-second page loads, and intuitive checkout. Our online sales conversions and customer checkout speed improved significantly after launch.",
    impactMetric: "⚡ Sub-second load times & 45% increase in online conversions",
    rating: 5,
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-600",
    badgeBorder: "border-amber-500/30",
    accentColor: "from-amber-500/15 via-orange-500/10 to-transparent",
  },
  {
    id: "mandarlawn",
    projectTitle: "Mandar Lawn & Banquets",
    projectCategory: "Luxury Event Venue Website",
    projectUrl: "https://mandarlawn.com",
    displayUrl: "mandarlawn.com",
    clientName: "Mandar Lawn Management",
    clientRole: "Banquet Operations & Events",
    quote:
      "The luxury website designed by SevenX Labs perfectly captures the elegance of our banquet spaces. The high-resolution venue gallery and instant booking inquiry form led to a direct surge in event inquiries.",
    impactMetric: "🏆 3x increase in direct venue booking inquiries",
    rating: 5,
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-600",
    badgeBorder: "border-emerald-500/30",
    accentColor: "from-emerald-500/15 via-teal-500/10 to-transparent",
  },
  {
    id: "yfadvisors",
    projectTitle: "YF Advisors (Web & Admin)",
    projectCategory: "Financial Advisory & Admin Portal",
    projectUrl: "https://yfadvisors.in",
    displayUrl: "yfadvisors.in",
    clientName: "YF Advisors Leadership",
    clientRole: "Financial & Corporate Consultancy",
    quote:
      "SevenX Labs built both our corporate advisory website and our custom backend admin portal. The real-time dashboard enables our team to track client leads, streamline operational workflows, and enforce data security effortlessly.",
    impactMetric: "🔒 100% real-time lead tracking & secure role permissions",
    rating: 5,
    badgeBg: "bg-purple-500/10",
    badgeText: "text-purple-600",
    badgeBorder: "border-purple-500/30",
    accentColor: "from-purple-500/15 via-indigo-500/10 to-transparent",
  },
  {
    id: "femmeflo",
    projectTitle: "FemmeFlo",
    projectCategory: "Women's Health & Wellness Web Platform",
    projectUrl: "https://femmeflo.in",
    displayUrl: "femmeflo.in",
    clientName: "FemmeFlo Product Team",
    clientRole: "Healthcare & Wellness Platform",
    quote:
      "The wellness platform designed by SevenX Labs provides an exceptionally clean, accessible, and intuitive user experience. Our users love the navigation flow and seamless consultation inquiry process.",
    impactMetric: "✨ Exceptional UI/UX & high user engagement",
    rating: 5,
    badgeBg: "bg-rose-500/10",
    badgeText: "text-rose-600",
    badgeBorder: "border-rose-500/30",
    accentColor: "from-rose-500/15 via-pink-500/10 to-transparent",
  },
];

export default function Testimonials() {
  // Duplicate array for seamless infinite looping marquee
  const marqueeItems = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section
      id="testimonials"
      className="relative w-full py-20 md:py-28 bg-[#FAF9F6] text-zinc-900 select-none overflow-hidden font-space border-t border-black/[0.06]"
    >
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-100/20 via-purple-100/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col gap-10 md:gap-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/[0.08] pb-6">
          <div className="flex flex-col gap-2.5 max-w-2xl">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-[11px] font-mono font-bold uppercase tracking-[0.2em] rounded-full border border-blue-200/80 flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                VERIFIED CLIENT REVIEWS
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/[0.04] text-zinc-600 text-[11px] font-mono font-medium rounded-full border border-black/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                100% Production Tested
              </span>
            </div>

            <h2 className="font-general text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight uppercase leading-none">
              WHAT OUR CLIENTS SAY.
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              Direct feedback and measurable business impact from founders and business teams running production software engineered by SevenX Labs.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white border border-black/10 shadow-sm text-xs font-mono font-bold text-zinc-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>LIVE LOOP • HOVER TO PAUSE</span>
            </div>
          </div>
        </div>

      </div>

      {/* INFINITE LOOP MARQUEE CONTAINER WITH FADE EDGES */}
      <div className="relative z-10 w-full overflow-hidden pt-4 pb-4 before:absolute before:left-0 before:top-0 before:z-20 before:h-full before:w-16 sm:before:w-28 before:bg-gradient-to-r before:from-[#FAF9F6] before:to-transparent after:absolute after:right-0 after:top-0 after:z-20 after:h-full after:w-16 sm:after:w-28 after:bg-gradient-to-l after:from-[#FAF9F6] after:to-transparent">
        <div
          className="flex w-max gap-6 sm:gap-8 animate-marquee hover:[animation-play-state:paused]"
          style={{ animationDuration: "32s" }}
        >
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group relative w-[320px] sm:w-[420px] lg:w-[460px] shrink-0 rounded-[28px] bg-white border border-black/[0.08] p-6 sm:p-8 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between gap-6"
            >
              {/* AMBIENT ACCENT OVERLAY */}
              <div
                className={`absolute top-0 right-0 w-72 h-72 bg-gradient-to-br ${item.accentColor} rounded-full blur-3xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 flex flex-col gap-4">
                {/* CARD HEADER: PROJECT BADGE & DIRECT LINK */}
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <span
                    className={`px-3 py-0.5 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider border ${item.badgeBg} ${item.badgeText} ${item.badgeBorder}`}
                  >
                    {item.projectCategory}
                  </span>

                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-black transition-colors"
                  >
                    <span>{item.displayUrl}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* RATING & QUOTE */}
                <div className="flex flex-col gap-3 pt-1">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <div className="relative">
                    <Quote className="w-8 h-8 text-black/5 absolute -top-2 -left-2 pointer-events-none" />
                    <p className="relative z-10 text-zinc-700 text-xs sm:text-sm leading-relaxed font-normal italic">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* IMPACT METRIC BADGE */}
                <div className="p-3 rounded-xl bg-black/[0.03] border border-black/[0.06] flex items-center gap-2 text-xs font-mono font-semibold text-zinc-800">
                  <Sparkles className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                  <span>{item.impactMetric}</span>
                </div>
              </div>

              {/* CARD FOOTER: AUTHOR DETAILS */}
              <div className="relative z-10 pt-4 border-t border-black/[0.06] flex items-center justify-between gap-4">
                <div className="flex flex-col gap-0.5">
                  <span className="font-general text-sm font-extrabold text-black uppercase">
                    {item.clientName}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {item.clientRole} · {item.projectTitle}
                  </span>
                </div>

                <a
                  href={item.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit project ${item.projectTitle}`}
                  className="p-2.5 rounded-full bg-black/[0.04] hover:bg-black hover:text-white text-black transition-all duration-300"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA BANNER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 mt-8">
        <div className="relative w-full rounded-[32px] bg-[#0D0D11] text-white border border-white/10 p-6 sm:p-10 md:p-14 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-2 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-[11px] font-mono font-bold uppercase tracking-widest w-max mx-auto md:mx-0">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>READY FOR HIGH-IMPACT RESULTS?</span>
            </div>

            <h3 className="font-general text-xl sm:text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Let&apos;s Build Your Next Digital Product With SevenX Labs
            </h3>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">
              Partner with our engineering team to design, build, and deploy production software tailored to your business goals.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="/contact"
              aria-label="Contact SevenX Labs to start a project"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white text-black text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:scale-[0.98] w-full sm:w-auto justify-center"
            >
              <span>Work With Us</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}
