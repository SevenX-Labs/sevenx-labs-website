"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ShieldCheck, Sparkles, Clock } from "lucide-react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative w-full py-24 md:py-32 bg-[#FAF9F6] text-zinc-900 select-none overflow-hidden font-space border-t border-black/[0.06]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-blue-100/20 via-purple-100/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12 sm:gap-16">
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
              Trusted by high-growth startups, enterprise software platforms, and visionary founders.
            </p>
          </div>
        </div>

        {/* COMING SOON SHOWCASE CARD */}
        <div className="relative w-full rounded-[32px] bg-[#0D0D11] text-white border border-white/10 p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl flex flex-col items-center text-center justify-center gap-6">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Coming Soon</span>
          </div>

          <h3 className="relative z-10 font-general text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white max-w-2xl leading-tight">
            Client Testimonials & Case Reviews Are Currently Being Updated
          </h3>

          <p className="relative z-10 text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed font-normal">
            We are currently documenting verified client reviews, impact metrics, and technical performance audits from our latest enterprise and startup deployments.
          </p>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 pt-2">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Verified Client Feedback
            </span>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
              <Sparkles className="w-4 h-4 text-blue-400" />
              Production Impact Metrics
            </span>
          </div>

          <div className="relative z-10 pt-4">
            <Link
              href="/contact"
              aria-label="Contact SevenX Labs to start a project"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white text-black text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5 active:scale-[0.98]"
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
