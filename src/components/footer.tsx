"use client";
import { ArrowUpRight, Mail, Globe, Share2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SITE_CONFIG } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const showGithub = Boolean(
    SITE_CONFIG.social.github &&
      SITE_CONFIG.social.github.startsWith("http") &&
      SITE_CONFIG.social.github !== "https://github.com"
  );

  return (
    <footer className="relative w-full bg-[#0D0D11] text-white overflow-hidden font-sans border-t border-white/10">
      {/* Background Architectural Grid & Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 pb-12">
        {/* ─── TOP SECTION: Brand Headline & Primary CTA ─── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 pb-16 border-b border-white/10">
          <div className="max-w-xl flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
              <span className="text-sm font-mono font-bold tracking-[0.25em] text-white uppercase">
                SEVENX LABS
              </span>
            </div>
            <p className="font-general text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.1] uppercase">
              Building digital products <br className="hidden sm:block" />
              <span className="text-zinc-400">that move business forward.</span>
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact"
              aria-label="Start a project with SevenX Labs"
              className="group inline-flex items-center gap-3.5 px-8 py-4 bg-white text-black text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><ArrowUpRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>

        {/* ─── MIDDLE SECTION: 5 Navigation Columns ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/10">
          {/* Column 1: EXPLORE */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#60A5FA]">
              EXPLORE
            </span>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "Home", href: "/", ariaLabel: "SevenX Labs Home Page" },
                { name: "About", href: "/about", ariaLabel: "About SevenX Labs Studio" },
                { name: "Services", href: "/services", ariaLabel: "View Engineering Services" },
                { name: "Solutions", href: "/solutions", ariaLabel: "View Business Solutions" },
                { name: "Work", href: "/portfolio", ariaLabel: "View Featured Portfolio Projects" },
                { name: "Contact", href: "/contact", ariaLabel: "Contact Engineering Studio" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-label={item.ariaLabel}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 inline-flex items-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: SERVICES */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#60A5FA]">
              SERVICES
            </span>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "Web Development", href: "/services/web-development" },
                { name: "Mobile Apps", href: "/services/mobile-app-development" },
                { name: "AI Development", href: "/services/ai-development" },
                { name: "Custom Software", href: "/services/custom-software-development" },
                { name: "UI/UX Design", href: "/services/ui-ux-design" },
                { name: "Cloud & DevOps", href: "/services/cloud-devops" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-label={`SevenX Labs ${item.name} Services`}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 inline-flex items-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: SOLUTIONS */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#60A5FA]">
              SOLUTIONS
            </span>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "SaaS Development", href: "/solutions/saas-development" },
                { name: "MVP Development", href: "/solutions/mvp-development" },
                { name: "AI Automation", href: "/solutions/ai-automation" },
                { name: "Digital Transformation", href: "/solutions/digital-transformation" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-label={`SevenX Labs ${item.name} Solution`}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 inline-flex items-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>



          {/* Column 5: CONNECT */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#60A5FA]">
              CONNECT
            </span>
            <ul className="flex flex-col gap-3">
              {SITE_CONFIG.social.linkedin && (
                <li>
                  <a
                    href={SITE_CONFIG.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="SevenX Labs LinkedIn Profile"
                    className="text-sm text-zinc-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <Share2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              )}
              {showGithub && (
                <li>
                  <a
                    href={SITE_CONFIG.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="SevenX Labs GitHub Organization"
                    className="text-sm text-zinc-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <Globe className="w-4 h-4 text-[#60A5FA] shrink-0" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              )}
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  aria-label="Send email to SevenX Labs"
                  className="text-sm text-zinc-300 hover:text-white transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── BOTTOM BAR: Copyright & Availability Badge ─── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-10 text-xs text-zinc-500 font-mono">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {currentYear} SevenX Labs. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-[11px]">Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
