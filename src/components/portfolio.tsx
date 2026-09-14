"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, FolderGit2, Layers, Cpu, Server, CheckCircle2 } from "lucide-react";
import { CASE_STUDIES } from "@/lib/data/case-studies";

export default function Portfolio() {
  const caseStudyList = Object.values(CASE_STUDIES);

  return (
    <section
      id="portfolio"
      className="relative w-full py-20 md:py-32 bg-[#FAF9F6] text-zinc-900 font-space border-t border-black/[0.06] overflow-hidden"
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

            <h1 className="font-general text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black tracking-tight uppercase leading-[1.08]">
              FEATURED WORK.
            </h1>
          </div>

          <div className="flex flex-col gap-2 max-w-md">
            <p className="text-slate-600 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
              A curated look into production architectures, high-concurrency systems, and bespoke digital products engineered by SevenX Labs.
            </p>
          </div>
        </div>

        {/* CASE STUDIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudyList.map((cs) => (
            <div
              key={cs.slug}
              className="bg-white p-8 sm:p-10 rounded-3xl border border-black/[0.08] shadow-md hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between gap-6 group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-50 text-[#3B82F6] border border-blue-100 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full">
                    {cs.category}
                  </span>
                </div>

                <h2 className="font-general text-2xl md:text-3xl font-extrabold uppercase text-black group-hover:text-blue-600 transition-colors">
                  {cs.title}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed font-normal">
                  {cs.overview}
                </p>

                <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500">
                    KEY OUTCOMES
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {cs.outcomes.slice(0, 2).map((out, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs font-sans text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0 mt-0.5" />
                        <span><strong>{out.title}:</strong> {out.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cs.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-slate-50 rounded-lg border border-slate-200/60 text-[11px] font-mono font-bold text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
                <Link
                  href={`/portfolio/${cs.slug}`}
                  aria-label={`View ${cs.title} technical case study`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black group-hover:text-blue-600 transition-colors"
                >
                  <span>Explore Technical Case Study</span>
                  <ArrowUpRight className="w-4 h-4 inline-block ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
