"use client";

import React, { useState } from "react";
import Link from "next/link";

/* ═══════════════════════════════════════════════════════════════
   CONTACT / START A PROJECT — SevenX Labs
   High-End Editorial Form & Minimalist Contact Section
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

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@sevenxlabs.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
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
      setErrorMsg("Please tell us briefly about your project.");
      return;
    }

    setErrorMsg("");
    setIsSubmitting(true);

    // Simulate clean submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
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
      {/* Background Subtle Architectural Grid & Ambient Glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-100/20 via-blue-100/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-20 w-[550px] h-[550px] bg-gradient-to-bl from-purple-100/15 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        
        {/* ASYMMETRIC TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* ─── LEFT COLUMN: EDITORIAL HEADLINE & DIRECT CHANNELS ─── */}
          <div className="lg:col-span-5 flex flex-col items-start gap-10">
            
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
              <h2 className="font-general text-4xl sm:text-5xl md:text-[3.6rem] font-extrabold text-black leading-[1.04] tracking-tight uppercase">
                LET&apos;S BUILD
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-blue-600 to-purple-600">
                  SOMETHING
                </span>
                <br />
                GREAT.
              </h2>

              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal max-w-md pt-2">
                Have an idea, product or business challenge? Tell us what you&apos;re building and we&apos;ll help turn it into a digital product.
              </p>
            </div>

            {/* Availability Indicator */}
            <div className="w-full max-w-md py-3.5 px-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-black/[0.06] shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-slate-700">
                  Available for new projects
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Q3 / Q4
              </span>
            </div>

            {/* Contact Channels / Direct Links */}
            <div className="flex flex-col gap-5 pt-4 w-full max-w-md border-t border-black/[0.07]">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-slate-400">
                LET&apos;S TALK
              </span>

              <div className="flex flex-col gap-3.5">
                {/* Email Item with Click-to-Copy */}
                <div
                  onClick={handleCopyEmail}
                  className="group flex items-center justify-between p-3.5 rounded-xl bg-white/60 hover:bg-white border border-black/[0.05] hover:border-black/[0.12] transition-all cursor-pointer shadow-sm hover:shadow"
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      Email
                    </span>
                    <span className="text-sm font-semibold text-black group-hover:text-blue-600 transition-colors">
                      hello@sevenxlabs.com
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-black font-mono transition-colors">
                    {copiedEmail ? "COPIED ✓" : "COPY ↗"}
                  </span>
                </div>

                {/* Socials Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3.5 rounded-xl bg-white/60 hover:bg-white border border-black/[0.05] hover:border-black/[0.12] transition-all shadow-sm hover:shadow"
                  >
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        Network
                      </span>
                      <span className="text-sm font-semibold text-black group-hover:text-blue-600 transition-colors">
                        LinkedIn
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-3.5 rounded-xl bg-white/60 hover:bg-white border border-black/[0.05] hover:border-black/[0.12] transition-all shadow-sm hover:shadow"
                  >
                    <div className="flex flex-col">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                        Code
                      </span>
                      <span className="text-sm font-semibold text-black group-hover:text-blue-600 transition-colors">
                        GitHub
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 text-xs text-slate-400 font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>Average response time: under 24 hours</span>
              </div>
            </div>

          </div>

          {/* ─── RIGHT COLUMN: PREMIUM EDITORIAL PROJECT INQUIRY FORM ─── */}
          <div className="lg:col-span-7 w-full">
            <div className="relative w-full p-8 sm:p-10 md:p-12 rounded-[28px] bg-white border border-black/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-9">
                  
                  {/* FIELD 01: YOUR NAME */}
                  <div className="flex flex-col gap-2 relative">
                    <label
                      htmlFor="name"
                      className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center justify-between"
                    >
                      <span>01 — YOUR NAME</span>
                      {focusedField === "name" && (
                        <span className="text-blue-600 text-[10px] lowercase font-normal">
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
                      className="w-full bg-transparent py-3 text-base sm:text-lg text-black placeholder:text-slate-300 font-medium focus:outline-none border-b border-black/[0.12] focus:border-blue-600 transition-colors"
                      required
                    />
                  </div>

                  {/* FIELD 02: WORK EMAIL */}
                  <div className="flex flex-col gap-2 relative">
                    <label
                      htmlFor="email"
                      className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center justify-between"
                    >
                      <span>02 — WORK EMAIL</span>
                      {focusedField === "email" && (
                        <span className="text-blue-600 text-[10px] lowercase font-normal">
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
                      className="w-full bg-transparent py-3 text-base sm:text-lg text-black placeholder:text-slate-300 font-medium focus:outline-none border-b border-black/[0.12] focus:border-blue-600 transition-colors"
                      required
                    />
                  </div>

                  {/* FIELD 03: WHAT ARE YOU BUILDING? */}
                  <div className="flex flex-col gap-2 relative">
                    <label
                      htmlFor="projectDetails"
                      className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 flex items-center justify-between"
                    >
                      <span>03 — WHAT ARE YOU BUILDING?</span>
                      {focusedField === "projectDetails" && (
                        <span className="text-blue-600 text-[10px] lowercase font-normal">
                          goals, timeline & scope
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
                      className="w-full bg-transparent py-3 text-base sm:text-lg text-black placeholder:text-slate-300 font-medium focus:outline-none border-b border-black/[0.12] focus:border-blue-600 transition-colors resize-none"
                      required
                    />
                  </div>

                  {/* FIELD 04: PROJECT TYPE (SELECTABLE PILLS) */}
                  <div className="flex flex-col gap-3">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
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
                                : "bg-[#FAF9F6] text-slate-600 border border-black/[0.08] hover:border-black/[0.2] hover:bg-white"
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
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
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
                                : "bg-[#FAF9F6] text-slate-600 border border-black/[0.08] hover:border-black/[0.2] hover:bg-white"
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
                      className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-black text-white text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-800 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.99] disabled:opacity-50 cursor-pointer"
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
                    Thanks for reaching out. We&apos;ll review your project details and get back to you within 24 hours.
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
