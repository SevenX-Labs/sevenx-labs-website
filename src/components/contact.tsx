"use client";

import React, { useState } from "react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════
   CONTACT / START A PROJECT — SevenX Labs
   Premium High-End Project Inquiry & Direct Channels
   ═══════════════════════════════════════════════════════════════ */

const PROJECT_TYPES = [
  "Web",
  "Mobile",
  "AI",
  "SaaS",
  "Custom Software",
  "Other",
];

const BUDGET_RANGES = [
  "₹1L–₹3L",
  "₹3L–₹5L",
  "₹5L–₹10L",
  "₹10L+",
  "Let's discuss",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
    projectType: "Web",
    budget: "₹3L–₹5L",
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const officialEmail = "sevenxlabs07@gmail.com";
  const linkedInUrl = "https://linkedin.com/company/sevenx-labs";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(officialEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMsg("Please enter a valid work email address.");
      return;
    }
    if (!formData.projectDetails.trim()) {
      setErrorMsg("Please describe your project briefly.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 850);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      projectDetails: "",
      projectType: "Web",
      budget: "₹3L–₹5L",
    });
    setIsSubmitted(false);
    setErrorMsg("");
  };

  return (
    <section
      id="contact"
      className="relative w-full pt-14 pb-20 lg:pt-18 lg:pb-28 bg-[#FAF9F6] text-zinc-900 border-t border-black/[0.06] overflow-hidden font-sans select-none"
    >
      {/* Background Architectural Grid & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-100/20 via-blue-100/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-gradient-to-bl from-purple-100/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* ASYMMETRIC TWO-COLUMN COMPOSITION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-start">
          
          {/* ─── LEFT COLUMN: EDITORIAL HEADLINE & DIRECT CHANNELS ─── */}
          <div className="lg:col-span-5 flex flex-col items-start gap-9">
            
            {/* Header Badge */}
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 bg-black/[0.04] text-[#3B82F6] text-[10.5px] font-mono font-bold uppercase tracking-[0.3em] rounded-full border border-blue-200/60 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                START A PROJECT
              </span>
              <span className="h-px w-16 bg-gradient-to-r from-blue-400/30 to-transparent" />
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-4">
              <h2 className="font-general text-4xl sm:text-5xl md:text-[3.5rem] font-extrabold text-black leading-[1.04] tracking-tight uppercase">
                LET&apos;S BUILD
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-blue-600 to-purple-600">
                  SOMETHING
                </span>
                <br />
                GREAT.
              </h2>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal max-w-md">
                Have an idea, product or business challenge? Tell us what you&apos;re building and we&apos;ll help turn it into a high-performance digital product.
              </p>
            </div>

            {/* Project Availability Beacon */}
            <div className="w-full max-w-md py-3.5 px-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-black/[0.07] shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  Available for new projects
                </span>
              </div>
              <span className="text-[11px] font-mono font-medium text-slate-500 uppercase tracking-wider">
                Q3 / Q4
              </span>
            </div>

            {/* Direct Communication Channels (Email + LinkedIn) */}
            <div className="flex flex-col gap-3.5 w-full max-w-md pt-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-slate-400">
                DIRECT INQUIRIES
              </span>

              <div className="flex flex-col gap-3">
                
                {/* 1. Official Email Card (Full Clickable mailto + dedicated Copy) */}
                <div className="group relative flex items-center justify-between p-4 sm:p-4.5 rounded-2xl bg-white hover:bg-white border border-black/[0.08] hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-md">
                  <a
                    href={`mailto:${officialEmail}?subject=Project%20Inquiry%20-%20SevenX%20Labs`}
                    className="flex items-center gap-3.5 flex-1 min-w-0"
                  >
                    {/* Mail Vector SVG Icon */}
                    <div className="w-10 h-10 rounded-xl bg-blue-50/80 border border-blue-200/60 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                        Email Us
                      </span>
                      <span className="text-sm sm:text-[15px] font-bold text-black group-hover:text-blue-600 transition-colors truncate">
                        {officialEmail}
                      </span>
                    </div>
                  </a>

                  <button
                    type="button"
                    title="Copy Email"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleCopyEmail();
                    }}
                    className={`ml-2 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer shrink-0 ${
                      copiedEmail
                        ? "bg-emerald-500 text-white shadow-sm"
                        : "bg-slate-100 text-slate-700 hover:bg-black hover:text-white"
                    }`}
                  >
                    {copiedEmail ? "COPIED ✓" : "COPY"}
                  </button>
                </div>

                {/* 2. Official LinkedIn Card (Full Clickable Redirect) */}
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between p-4 sm:p-4.5 rounded-2xl bg-white hover:bg-white border border-black/[0.08] hover:border-[#0A66C2]/60 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 flex-1 min-w-0">
                    {/* LinkedIn Official Vector SVG Icon */}
                    <div className="w-10 h-10 rounded-xl bg-blue-50/60 border border-blue-200/50 flex items-center justify-center text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-all shrink-0">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </div>

                    <div className="flex flex-col min-w-0">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-semibold">
                        LinkedIn
                      </span>
                      <span className="text-sm sm:text-[15px] font-bold text-black group-hover:text-[#0A66C2] transition-colors truncate">
                        SevenX Labs
                      </span>
                    </div>
                  </div>

                  <span className="ml-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-bold group-hover:bg-[#0A66C2] group-hover:text-white transition-all flex items-center gap-1 shrink-0">
                    <span>VISIT</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </span>
                </a>

              </div>

              {/* Response Time Indicator */}
              <div className="flex items-center gap-2 pt-1 text-xs text-slate-500 font-mono">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Response time: under 24 hours · NDA on request</span>
              </div>
            </div>

          </div>

          {/* ─── RIGHT COLUMN: PREMIUM EDITORIAL PROJECT INQUIRY FORM ─── */}
          <div className="lg:col-span-7 w-full">
            <div className="relative w-full p-8 sm:p-10 md:p-12 rounded-[28px] bg-white border border-black/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-9">
                  
                  {/* FIELD 01: YOUR NAME */}
                  <div className="flex flex-col gap-2 relative">
                    <label
                      htmlFor="name"
                      className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 flex items-center justify-between"
                    >
                      <span>01 — YOUR NAME</span>
                      {focusedField === "name" && (
                        <span className="text-blue-600 text-[10px] font-medium tracking-normal lowercase">
                          required
                        </span>
                      )}
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-transparent py-3 text-base sm:text-lg text-black placeholder:text-slate-400 font-medium focus:outline-none border-b border-black/[0.12] focus:border-blue-600 transition-colors"
                      required
                    />
                  </div>

                  {/* FIELD 02: WORK EMAIL */}
                  <div className="flex flex-col gap-2 relative">
                    <label
                      htmlFor="email"
                      className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 flex items-center justify-between"
                    >
                      <span>02 — WORK EMAIL</span>
                      {focusedField === "email" && (
                        <span className="text-blue-600 text-[10px] font-medium tracking-normal lowercase">
                          we respect your privacy
                        </span>
                      )}
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full bg-transparent py-3 text-base sm:text-lg text-black placeholder:text-slate-400 font-medium focus:outline-none border-b border-black/[0.12] focus:border-blue-600 transition-colors"
                      required
                    />
                  </div>

                  {/* FIELD 03: WHAT ARE YOU BUILDING? */}
                  <div className="flex flex-col gap-2 relative">
                    <label
                      htmlFor="projectDetails"
                      className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 flex items-center justify-between"
                    >
                      <span>03 — WHAT ARE YOU BUILDING?</span>
                      {focusedField === "projectDetails" && (
                        <span className="text-blue-600 text-[10px] font-medium tracking-normal lowercase">
                          timeline, scope & goals
                        </span>
                      )}
                    </label>
                    <textarea
                      id="projectDetails"
                      rows={3}
                      value={formData.projectDetails}
                      onFocus={() => setFocusedField("projectDetails")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="Tell us briefly about your project..."
                      className="w-full bg-transparent py-3 text-base sm:text-lg text-black placeholder:text-slate-400 font-medium focus:outline-none border-b border-black/[0.12] focus:border-blue-600 transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* FIELD 04: PROJECT TYPE (SELECTABLE PILLS) */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500">
                      04 — PROJECT TYPE
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {PROJECT_TYPES.map((type) => {
                        const isSelected = formData.projectType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                              isSelected
                                ? "bg-black text-white shadow-md border border-black scale-[1.02]"
                                : "bg-[#FAF9F6] text-slate-700 border border-black/[0.1] hover:border-black/[0.25] hover:bg-white"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* FIELD 05: BUDGET RANGE (SELECTABLE PILLS) */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500">
                      05 — BUDGET RANGE
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {BUDGET_RANGES.map((range) => {
                        const isSelected = formData.budget === range;
                        return (
                          <button
                            key={range}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: range })}
                            className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                              isSelected
                                ? "bg-blue-600 text-white shadow-md border border-blue-600 scale-[1.02]"
                                : "bg-[#FAF9F6] text-slate-700 border border-black/[0.1] hover:border-black/[0.25] hover:bg-white"
                            }`}
                          >
                            {range}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* INLINE VALIDATION ERROR */}
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium">
                      {errorMsg}
                    </div>
                  )}

                  {/* SUBMIT BUTTON */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 bg-black text-white text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-800 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING...</span>
                      ) : (
                        <>
                          <span>SEND PROJECT DETAILS</span>
                          <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">
                            ↗
                          </span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              ) : (
                /* ─── SUCCESS STATE ─── */
                <div className="flex flex-col items-start gap-6 py-12">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 text-xl font-bold">
                    ✓
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-emerald-600">
                      SUBMISSION CONFIRMED
                    </span>
                    <h3 className="font-general text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
                      PROJECT RECEIVED.
                    </h3>
                  </div>

                  <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-md">
                    Thanks for reaching out. We&apos;ll review your project details and get back to you within 24 hours at <strong className="text-black font-semibold">{formData.email}</strong>.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Link
                      href="/"
                      className="px-6 py-3 bg-black text-white text-xs font-mono font-bold uppercase tracking-widest rounded-full hover:bg-zinc-800 transition-all"
                    >
                      BACK TO HOME
                    </Link>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-6 py-3 bg-slate-100 text-slate-700 text-xs font-mono font-bold uppercase tracking-widest rounded-full hover:bg-slate-200 transition-all cursor-pointer"
                    >
                      SEND ANOTHER INQUIRY
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
