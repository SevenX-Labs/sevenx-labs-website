"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Share2, Globe } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const showGithub = Boolean(
    SITE_CONFIG.social.github &&
    SITE_CONFIG.social.github.startsWith("http") &&
    SITE_CONFIG.social.github !== "https://github.com"
  );

  const exploreLinks = [
    { name: "Home", href: "/", ariaLabel: "SevenX Labs Home Page" },
    { name: "About", href: "/about", ariaLabel: "About SevenX Labs Studio" },
    { name: "Careers", href: "/careers", ariaLabel: "Careers & Hiring at SevenX Labs" },
    { name: "Work", href: "/portfolio", ariaLabel: "View Featured Work and Case Studies" },
    { name: "Contact", href: "/contact", ariaLabel: "Contact SevenX Labs Studio" },
  ];

  const servicesLinks = [
    { name: "Web Development", href: "/services/web-development", ariaLabel: "Web Development Services" },
    { name: "Mobile Apps", href: "/services/mobile-app-development", ariaLabel: "Mobile App Development Services" },
    { name: "AI Development", href: "/services/ai-development", ariaLabel: "AI Development Services" },
    { name: "UI/UX Design", href: "/services/ui-ux-design", ariaLabel: "UI/UX Design Services" },
    { name: "Custom Software", href: "/services/custom-software-development", ariaLabel: "Custom Software Development" },
    { name: "Cloud & DevOps", href: "/services/cloud-devops", ariaLabel: "Cloud & DevOps Consulting" },
  ];

  const solutionsLinks = [
    { name: "SaaS Development", href: "/solutions/saas-development", ariaLabel: "SaaS Product Engineering" },
    { name: "MVP Development", href: "/solutions/mvp-development", ariaLabel: "Rapid MVP Development" },
    { name: "AI Automation", href: "/solutions/ai-automation", ariaLabel: "Enterprise AI Automation" },
    { name: "Digital Transformation", href: "/solutions/digital-transformation", ariaLabel: "Legacy Modernization & Cloud Migration" },
  ];

  return (
    <footer className="relative w-full bg-[#0A0A0A] text-[#FAFAFA] font-sans overflow-hidden border-t border-white/10">
      {/* ─── AMBIENT GLOW & WATERMARK BACKDROP ─── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[750px] h-[200px] bg-blue-600/[0.05] blur-[100px] pointer-events-none" />
      <div className="pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 select-none text-[15vw] font-general font-black uppercase tracking-tighter text-white/[0.02] whitespace-nowrap leading-none z-0">
        SEVENX LABS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-24 pb-12 flex flex-col">
        {/* ─── TOP SECTION: BRAND IDENTITY & START A PROJECT CTA ─── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 pb-14 border-b border-white/10">
          <div className="flex flex-col gap-4 max-w-2xl">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 group w-max"
              aria-label="SevenX Labs Home"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/15 p-1.5 flex items-center justify-center shrink-0 group-hover:border-blue-400/40 transition-colors">
                <Image
                  src="/logo.png"
                  alt="SevenX Labs Logo"
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-general text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-white flex items-center gap-1.5">
                  SevenX Labs
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                </span>
              </div>
            </Link>

            <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed max-w-xl">
              Digital Products &amp; Engineering Studio. Partnering with ambitious teams to architect, engineer, and scale high-performance web applications, mobile platforms, and AI systems.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <Link
              href="/contact"
              aria-label="Start a project with SevenX Labs"
              className="group inline-flex items-center gap-3.5 px-8 py-4 bg-white text-black text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* ─── 4-COLUMN CONTENT GRID ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 lg:gap-16 py-14 border-b border-white/10">
          {/* COLUMN 1: EXPLORE */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#60A5FA]">
              EXPLORE
            </span>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-label={item.ariaLabel}
                    className="text-[14px] font-normal text-zinc-400 hover:text-white transition-all duration-300 ease-out inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2: SERVICES */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#60A5FA]">
              SERVICES
            </span>
            <ul className="flex flex-col gap-3">
              {servicesLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-label={item.ariaLabel}
                    className="text-[14px] font-normal text-zinc-400 hover:text-white transition-all duration-300 ease-out inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SOLUTIONS */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#60A5FA]">
              SOLUTIONS
            </span>
            <ul className="flex flex-col gap-3">
              {solutionsLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-label={item.ariaLabel}
                    className="text-[14px] font-normal text-zinc-400 hover:text-white transition-all duration-300 ease-out inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONNECT */}
          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#60A5FA]">
              CONNECT
            </span>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={SITE_CONFIG.social.linkedin || "https://linkedin.com/company/sevenx-labs"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SevenX Labs LinkedIn"
                  className="group inline-flex items-center gap-2 text-[14px] font-normal text-zinc-300 hover:text-white transition-all duration-300 ease-out"
                >
                  <Share2 className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/sevenxlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SevenX Labs Twitter / X"
                  className="group inline-flex items-center gap-2 text-[14px] font-normal text-zinc-300 hover:text-white transition-all duration-300 ease-out"
                >
                  <Globe className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>Twitter / X</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              {showGithub && (
                <li>
                  <a
                    href={SITE_CONFIG.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="SevenX Labs GitHub Organization"
                    className="group inline-flex items-center gap-2 text-[14px] font-normal text-zinc-300 hover:text-white transition-all duration-300 ease-out"
                  >
                    <Globe className="w-4 h-4 text-[#60A5FA] shrink-0" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </li>
              )}
              <li>
                <a
                  href="mailto:tanishka@sevenxlabs.in"
                  aria-label="Email SevenX Labs"
                  className="group inline-flex items-center gap-2 text-[14px] font-normal text-zinc-300 hover:text-white transition-all duration-300 ease-out"
                >
                  <Mail className="w-4 h-4 text-[#60A5FA] shrink-0" />
                  <span>tanishka@sevenxlabs.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── BOTTOM BAR: COPYRIGHT & AVAILABILITY STATUS ─── */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {currentYear} SevenX Labs. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-[11px]">Available for new projects</span>
            </div>

            <div className="flex items-center gap-4 text-xs text-zinc-500">
              <span className="hover:text-zinc-300 transition-colors duration-300 cursor-pointer">Privacy</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span className="hover:text-zinc-300 transition-colors duration-300 cursor-pointer">Terms</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
