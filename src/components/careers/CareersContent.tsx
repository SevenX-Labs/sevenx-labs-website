"use client";

import React, { useState, useMemo } from "react";
import {
  Code2,
  Zap,
  Sparkles,
  ShieldCheck,
  Search,
  Filter,
  ArrowUpRight,
  Briefcase,
  ChevronDown,
  ChevronUp,
  MapPin,
  Clock,
  CheckCircle2,
  Laptop,
  GraduationCap,
  HeartHandshake,
  Heart,
  Coffee,
  Globe,
  Mail,
} from "lucide-react";
import { OPEN_POSITIONS, CAREER_STATS, CULTURE_VALUES, JobPosition } from "@/lib/data/careers";
import { ApplicationModal } from "./ApplicationModal";

export function CareersContent() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedPositionId, setExpandedPositionId] = useState<string | null>(
    OPEN_POSITIONS[0]?.id || null
  );
  const [applyingPosition, setApplyingPosition] = useState<JobPosition | null>(null);

  const categories = ["ALL", "Engineering", "AI & Data", "Design", "Infrastructure"];

  const filteredPositions = useMemo(() => {
    return OPEN_POSITIONS.filter((pos) => {
      const matchesCategory =
        selectedCategory === "ALL" || pos.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        pos.title.toLowerCase().includes(query) ||
        pos.summary.toLowerCase().includes(query) ||
        pos.techStack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  const toggleExpand = (id: string) => {
    setExpandedPositionId((prev) => (prev === id ? null : id));
  };

  const getCultureIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-6 h-6 text-[#60A5FA]" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-amber-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default:
        return <Briefcase className="w-6 h-6 text-[#60A5FA]" />;
    }
  };

  return (
    <div className="w-full space-y-20 pb-20 bg-[#0D0D11] text-white">
      {/* ─── 1. CAREER STATS STRIP ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl">
          {CAREER_STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col gap-1 text-center md:text-left">
              <span className="font-general text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#60A5FA]">
                {stat.label}
              </span>
              <span className="text-[11px] text-zinc-400 font-normal">
                {stat.sublabel}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 2. CULTURE & VALUES SECTION ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-10">
        <div className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto">
          <span className="px-3.5 py-1 bg-white/[0.04] text-[#60A5FA] text-[11px] font-mono font-bold uppercase tracking-[0.25em] rounded-full border border-blue-500/30 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-pulse" />
            OUR ENGINEERING PHILOSOPHY
          </span>
          <h2 className="font-general text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            Why Build With SevenX Labs?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed">
            We are engineered for craftsmen who take pride in shipping high-performance software. No corporate red tape, just deep technical focus and meaningful impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CULTURE_VALUES.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {getCultureIcon(val.icon)}
              </div>
              <h3 className="text-lg font-bold font-general uppercase tracking-tight text-white">
                {val.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-normal leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. OPEN POSITIONS LISTING ─── */}
      <section id="openings" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-8 scroll-mt-28">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/10">
          <div className="space-y-2">
            <span className="px-3.5 py-1 bg-blue-500/10 text-[#60A5FA] text-[11px] font-mono font-bold uppercase tracking-[0.25em] rounded-full border border-blue-500/30">
              CURRENT OPPORTUNITIES
            </span>
            <h2 className="font-general text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
              Open Positions ({filteredPositions.length})
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by role or tech stack..."
              className="w-full bg-white/[0.04] border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition cursor-pointer shrink-0 border ${
                selectedCategory === cat
                  ? "bg-white text-black border-white shadow-lg"
                  : "bg-white/[0.03] text-zinc-400 border-white/10 hover:text-white hover:border-white/20"
              }`}
            >
              {cat === "ALL" ? "All Disciplines" : cat}
            </button>
          ))}
        </div>

        {/* Job Listings Accordion */}
        {filteredPositions.length === 0 ? (
          <div className="p-12 text-center rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
            <p className="text-sm font-mono text-zinc-400">No open positions matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSelectedCategory("ALL");
                setSearchQuery("");
              }}
              className="text-xs font-mono text-[#60A5FA] underline hover:text-blue-300 cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredPositions.map((pos) => {
              const isExpanded = expandedPositionId === pos.id;

              return (
                <div
                  key={pos.id}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "bg-white/[0.04] border-blue-500/50 shadow-xl"
                      : "bg-white/[0.02] border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Accordion Header */}
                  <div
                    onClick={() => toggleExpand(pos.id)}
                    className="p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer select-none"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {pos.featured && (
                          <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> Priority Role
                          </span>
                        )}
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-[#60A5FA] border border-blue-500/30 text-[10px] font-mono font-bold uppercase tracking-wider">
                          {pos.category}
                        </span>
                        <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-zinc-500" />
                          {pos.location}
                        </span>
                        <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                          <Clock className="w-3 h-3 text-zinc-500" />
                          {pos.experience}
                        </span>
                      </div>

                      <h3 className="font-general text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white">
                        {pos.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 max-w-3xl leading-relaxed">
                        {pos.summary}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 pt-2 md:pt-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setApplyingPosition(pos);
                        }}
                        className="px-5 py-2.5 bg-white text-black text-xs font-mono font-bold uppercase tracking-wider rounded-full hover:bg-zinc-200 transition cursor-pointer shadow-md flex items-center gap-2"
                      >
                        <span>Apply Now</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-400">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Body Details */}
                  {isExpanded && (
                    <div className="px-6 pb-8 sm:px-8 space-y-6 pt-2 border-t border-white/10 text-xs sm:text-sm text-zinc-300">
                      {/* Tech Stack Tags */}
                      <div className="space-y-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#60A5FA]">
                          TECH STACK & TOOLS:
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          {pos.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Responsibilities & Requirements */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                        <div className="space-y-3 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
                          <h4 className="font-mono font-bold uppercase tracking-wider text-white text-xs flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#60A5FA]" /> What You'll Do
                          </h4>
                          <ul className="space-y-2 text-zinc-400">
                            {pos.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-[#60A5FA]">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-3 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
                          <h4 className="font-mono font-bold uppercase tracking-wider text-white text-xs flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> What We're Looking For
                          </h4>
                          <ul className="space-y-2 text-zinc-400">
                            {pos.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-emerald-400">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Perks */}
                      <div className="space-y-2 pt-2">
                        <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-amber-400">
                          ROLE PERKS & BENEFITS:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {pos.perks.map((perk, pIdx) => (
                            <span
                              key={pIdx}
                              className="px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 font-mono"
                            >
                              ✦ {perk}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Bar inside Expanded view */}
                      <div className="pt-4 flex items-center justify-between border-t border-white/10">
                        <span className="text-xs text-zinc-500 font-mono">
                          Position ID: {pos.id}
                        </span>
                        <button
                          onClick={() => setApplyingPosition(pos)}
                          className="px-6 py-3 bg-[#3B82F6] hover:bg-blue-600 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-full transition shadow-lg shadow-blue-500/20 flex items-center gap-2 cursor-pointer"
                        >
                          <span>Submit Application</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* ─── 4. PERKS & BENEFITS GRID ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-10">
        <div className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto">
          <span className="px-3.5 py-1 bg-white/[0.04] text-[#60A5FA] text-[11px] font-mono font-bold uppercase tracking-[0.25em] rounded-full border border-blue-500/30">
            PERKS & REWARDS
          </span>
          <h2 className="font-general text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            Designed for Top Performers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-[#60A5FA] flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-general uppercase text-white">Remote-First Culture</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Work from anywhere in India or globally with asynchronous communication and flexible working hours.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Laptop className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-general uppercase text-white">Hardware & Tech Stipend</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Get powered with M-Series MacBook Pros, high-resolution monitors, and professional software subscriptions.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-general uppercase text-white">Learning Allowance</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              $1,000 annual budget for courses, books, tech conferences, and specialized certification programs.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-general uppercase text-white">Health & Wellness</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Comprehensive health insurance covering medical, dental, and wellness support for you and dependents.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-general uppercase text-white">Performance Bonuses</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Bi-annual performance evaluations with direct profit-share & project milestone bonuses.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-general uppercase text-white">Team Retreats & Offsites</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Annual all-expenses-paid team hackathons and relaxation offsites to connect in person.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 5. SPECULATIVE APPLICATION BANNER ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-zinc-900 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="px-3 py-1 bg-white/10 text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full">
              GENERAL APPLICATIONS
            </span>
            <h3 className="font-general text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              Don't See Your Exact Role?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
              We are always searching for talented full-stack engineers, AI researchers, and UI architects. Send us your CV and github profile directly.
            </p>
          </div>

          <a
            href="mailto:tanishka@sevenxlabs.in?subject=Speculative%20Application%20-%20SevenX%20Labs"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all duration-300 shrink-0 shadow-xl"
          >
            <Mail className="w-4 h-4 text-[#3B82F6]" />
            <span>Email Resume</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Application Modal */}
      <ApplicationModal
        position={applyingPosition}
        onClose={() => setApplyingPosition(null)}
      />
    </div>
  );
}
