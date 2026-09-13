"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, FolderGit2, Layers, Cpu, Clock } from "lucide-react";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative w-full py-24 md:py-36 bg-[#FAF9F6] text-zinc-900 select-none font-space border-t border-black/[0.06] overflow-hidden"
    >
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] bg-gradient-to-br from-blue-100/20 via-purple-100/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12 sm:gap-16">
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

          <div className="flex flex-col gap-2 max-w-md">
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              A curated look into production architectures, high-concurrency systems, and bespoke digital products engineered by SevenX Labs.
            </p>
          </div>
        </div>

        {/* COMING SOON SHOWCASE CARD */}
        <div className="relative w-full rounded-[32px] bg-[#0D0D11] text-white border border-white/10 p-8 sm:p-12 md:p-20 overflow-hidden shadow-2xl flex flex-col items-center text-center justify-center gap-8">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

          <div className="relative z-10 flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-xs font-mono font-bold uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Coming Soon</span>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-4 max-w-3xl">
            <h3 className="font-general text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Case Studies & Featured Projects Showcase Coming Soon
            </h3>

            <p className="text-zinc-400 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl">
              We are currently preparing detailed technical case studies highlighting full-stack architectures, real-time trading engines, document AI systems, and multi-region Kubernetes cloud infrastructure.
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl pt-2">
            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col items-center gap-2 text-center">
              <FolderGit2 className="w-6 h-6 text-[#3B82F6]" />
              <span className="font-general text-sm font-bold uppercase text-white">Full Architecture Breakdowns</span>
              <span className="text-[11px] font-mono text-zinc-400">Deep system design diagrams & schemas</span>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col items-center gap-2 text-center">
              <Cpu className="w-6 h-6 text-cyan-400" />
              <span className="font-general text-sm font-bold uppercase text-white">Production AI & Web Platforms</span>
              <span className="text-[11px] font-mono text-zinc-400">Sub-second latency & high concurrency</span>
            </div>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex flex-col items-center gap-2 text-center">
              <Layers className="w-6 h-6 text-purple-400" />
              <span className="font-general text-sm font-bold uppercase text-white">Verified Client Impact</span>
              <span className="text-[11px] font-mono text-zinc-400">Measurable revenue & efficiency metrics</span>
            </div>
          </div>

          <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              aria-label="Start a project with SevenX Labs"
              className="group inline-flex items-center gap-3.5 px-8 py-4 bg-white text-black text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span>Start a Project With Us</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/services"
              aria-label="Explore SevenX Labs engineering services"
              className="px-6 py-4 text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
            >
              Explore Capabilities →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
