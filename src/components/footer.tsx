"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#0D0D11] text-white overflow-hidden font-sans border-t border-white/[0.08]">
      {/* Background Architectural Grid & Subtle Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-16 md:pt-20 pb-12">
        
        {/* ─── TOP SECTION: Brand Headline & Primary CTA ─── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-white/[0.08]">
          <div className="flex flex-col gap-4 max-w-xl">
            <Link href="/" className="inline-flex items-center gap-2 focus:outline-none w-max">
              <span className="font-general text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase flex items-center gap-2">
                <span>SevenX</span>
                <span className="font-light text-zinc-400">Labs</span>
                <span className="w-2 h-2 rounded-full bg-[#3B82F6] inline-block" />
              </span>
            </Link>

            <p className="font-general text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight uppercase">
              Building digital products <br className="hidden sm:block" />
              <span className="text-zinc-400">that move business forward.</span>
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-3.5 px-8 py-4 bg-white text-black text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-xl shadow-white/5 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </Link>
          </div>
        </div>

        {/* ─── MIDDLE SECTION: 3 Navigation Columns ─── */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 md:gap-8 py-14 border-b border-white/[0.08]">
          
          {/* Column 1: EXPLORE (col-span-4) */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              EXPLORE
            </span>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/#about" },
                { name: "Services", href: "/#services" },
                { name: "Work", href: "/portfolio" },
                { name: "Process", href: "/#how-we-work" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 inline-flex items-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: SERVICES (col-span-4) */}
          <div className="col-span-1 lg:col-span-4 flex flex-col gap-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              SERVICES
            </span>
            <ul className="flex flex-col gap-2.5">
              {[
                { name: "Web Development", href: "/#services" },
                { name: "Mobile Development", href: "/#services" },
                { name: "AI & Automation", href: "/#services" },
                { name: "UI/UX Design", href: "/#services" },
                { name: "Custom Software", href: "/#services" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 inline-flex items-center"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: CONNECT (col-span-4) */}
          <div className="col-span-2 md:col-span-1 lg:col-span-4 flex flex-col gap-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              CONNECT
            </span>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="https://linkedin.com/company/sevenx-labs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span>LinkedIn</span>
                  <span className="text-xs text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span>GitHub</span>
                  <span className="text-xs text-zinc-500 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sevenxlabs07@gmail.com"
                  className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span>Email</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ─── BOTTOM BAR: Copyright, Legal & Availability Badge ─── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-10 text-xs text-zinc-500 font-mono">
          
          <div className="flex items-center gap-2">
            <span>© {currentYear} SevenX Labs. All rights reserved.</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-zinc-300 transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-zinc-300 transition-colors">
                Terms
              </Link>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-full text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="text-[11px]">Available for new projects</span>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
