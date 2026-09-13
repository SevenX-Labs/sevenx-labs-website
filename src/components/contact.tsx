"use client";
import { Check, ArrowUpRight } from "lucide-react";


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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
    projectType: "Web",
    budget: "",
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
      budget: "",
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

            {/* Direct Communication Channels (Gmail Icon & LinkedIn Icon Only) */}
            <div className="flex flex-col gap-3 pt-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-slate-400">
                DIRECT CHANNELS
              </span>

              <div className="flex items-center gap-3.5">
                
                {/* 1. Gmail Icon Button (Redirects to mailto) */}
                <a
                  href={`mailto:${officialEmail}?subject=Project%20Inquiry%20-%20SevenX%20Labs`}
                  title={`Email us: ${officialEmail}`}
                  className="group relative w-14 h-14 rounded-2xl bg-white hover:bg-red-50/30 border border-black/[0.08] hover:border-red-500/40 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer"
                >
                  <svg className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                    <path
                      fill="#EA4335"
                      d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                    />
                  </svg>
                </a>

                {/* 2. LinkedIn Icon Button (Redirects to LinkedIn page) */}
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Visit SevenX Labs on LinkedIn"
                  className="group relative w-14 h-14 rounded-2xl bg-white hover:bg-blue-50/30 border border-black/[0.08] hover:border-[#0A66C2]/40 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 cursor-pointer"
                >
                  <svg className="w-7 h-7 fill-[#0A66C2] transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25a1.62 1.62 0 0 0-1.62 1.62c0 .89.73 1.62 1.62 1.62a1.62 1.62 0 0 0 1.62-1.62c0-.89-.73-1.62-1.62-1.62Z" />
                  </svg>
                </a>

              </div>

              {/* Response Time Indicator */}
              <div className="flex items-center gap-2 pt-2 text-xs text-slate-500 font-mono">
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

                  {/* FIELD 05: BUDGET RANGE (TEXT INPUT) */}
                  <div className="flex flex-col gap-2 relative">
                    <label
                      htmlFor="budget"
                      className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 flex items-center justify-between"
                    >
                      <span>05 — BUDGET RANGE</span>
                      {focusedField === "budget" && (
                        <span className="text-blue-600 text-[10px] font-medium tracking-normal lowercase">
                          approx. budget or expected range
                        </span>
                      )}
                    </label>
                    <input
                      id="budget"
                      type="text"
                      value={formData.budget}
                      onFocus={() => setFocusedField("budget")}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="e.g. ₹3L–₹5L, $5k–$10k, or Let's discuss"
                      className="w-full bg-transparent py-3 text-base sm:text-lg text-black placeholder:text-slate-400 font-medium focus:outline-none border-b border-black/[0.12] focus:border-blue-600 transition-colors"
                    />
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
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              ) : (
                /* ─── SUCCESS STATE ─── */
                <div className="flex flex-col items-start gap-6 py-12">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600"><Check className="w-6 h-6" /></div>

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
