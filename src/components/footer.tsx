"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const exploreLinks = [
    { name: "Home", href: "/", ariaLabel: "SevenX Labs Home" },
    { name: "About", href: "/about", ariaLabel: "About SevenX Labs" },
    { name: "Work", href: "/portfolio", ariaLabel: "SevenX Labs Portfolio and Work" },
    { name: "Contact", href: "/contact", ariaLabel: "Contact SevenX Labs" },
  ];

  const servicesLinks = [
    { name: "Web Development", href: "/services/web-development", ariaLabel: "Web Development Services" },
    { name: "Mobile Apps", href: "/services/mobile-app-development", ariaLabel: "Mobile App Development Services" },
    { name: "UI/UX Design", href: "/services/ui-ux-design", ariaLabel: "UI/UX Design Services" },
    { name: "AI Integration", href: "/services/ai-development", ariaLabel: "AI Development and Integration" },
  ];

  const solutionsLinks = [
    { name: "SaaS Development", href: "/solutions/saas-development", ariaLabel: "SaaS Product Development" },
    { name: "MVP Development", href: "/solutions/mvp-development", ariaLabel: "Rapid MVP Development" },
    { name: "Blockchain", href: "/solutions/digital-transformation", ariaLabel: "Enterprise Blockchain & Digital Transformation" },
    { name: "AI Integration", href: "/solutions/ai-automation", ariaLabel: "AI Automation Solutions" },
  ];

  return (
    <footer className="relative w-full bg-[#0A0A0A] text-[#FAFAFA] font-sans overflow-hidden">
      {/* Top edge subtle gradient glow divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[120px] bg-blue-500/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-[120px] flex flex-col justify-between relative z-10">
        {/* ─── 4-COLUMN CONTENT GRID ─── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 lg:gap-16">
          {/* COLUMN 1: EXPLORE */}
          <div className="flex flex-col gap-5">
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#FAFAFA]/90">
              EXPLORE
            </span>
            <ul className="flex flex-col gap-3.5">
              {exploreLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-label={item.ariaLabel}
                    className="text-[14px] font-normal text-[#FAFAFA]/70 hover:text-[#FAFAFA] transition-all duration-300 ease-out inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 2: SERVICES */}
          <div className="flex flex-col gap-5">
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#FAFAFA]/90">
              SERVICES
            </span>
            <ul className="flex flex-col gap-3.5">
              {servicesLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    aria-label={item.ariaLabel}
                    className="text-[14px] font-normal text-[#FAFAFA]/70 hover:text-[#FAFAFA] transition-all duration-300 ease-out inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SOLUTIONS */}
          <div className="flex flex-col gap-5">
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#FAFAFA]/90">
              SOLUTIONS
            </span>
            <ul className="flex flex-col gap-3.5">
              {solutionsLinks.map((item, idx) => (
                <li key={`${item.name}-${idx}`}>
                  <Link
                    href={item.href}
                    aria-label={item.ariaLabel}
                    className="text-[14px] font-normal text-[#FAFAFA]/70 hover:text-[#FAFAFA] transition-all duration-300 ease-out inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONNECT */}
          <div className="flex flex-col gap-5">
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-[#FAFAFA]/90">
              CONNECT
            </span>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={SITE_CONFIG.social.linkedin || "https://linkedin.com/company/sevenx-labs"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SevenX Labs LinkedIn"
                  className="group inline-flex items-center gap-1.5 text-[14px] font-normal text-[#FAFAFA]/70 hover:text-[#FAFAFA] transition-all duration-300 ease-out"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FAFAFA]/40 group-hover:text-[#FAFAFA] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@sevenxlabs.com"
                  aria-label="Email SevenX Labs"
                  className="text-[14px] font-normal text-[#FAFAFA]/70 hover:text-[#FAFAFA] transition-all duration-300 ease-out inline-block"
                >
                  hello@sevenxlabs.com
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/sevenxlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="SevenX Labs Twitter / X"
                  className="group inline-flex items-center gap-1.5 text-[14px] font-normal text-[#FAFAFA]/70 hover:text-[#FAFAFA] transition-all duration-300 ease-out"
                >
                  <span>Twitter/X</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FAFAFA]/40 group-hover:text-[#FAFAFA] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ─── BOTTOM BAR: COPYRIGHT & LEGAL ─── */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAFAFA]/50 font-normal">
          <div>
            <span>© {currentYear} SevenX Labs. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#FAFAFA]/50">
            <span className="hover:text-[#FAFAFA] transition-colors duration-300 cursor-pointer">Privacy</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="hover:text-[#FAFAFA] transition-colors duration-300 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
