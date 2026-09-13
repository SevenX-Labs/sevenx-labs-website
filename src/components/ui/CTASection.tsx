import React from "react";
import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTASection({
  title = "Ready to Build Something Extraordinary?",
  description = "Partner with SevenX Labs to design, engineer, and scale high-performance web, mobile, AI, and custom software products.",
  buttonText = "Start Your Project",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#0D0D11] text-white overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <span className="px-3.5 py-1 bg-white/[0.05] text-[#3B82F6] text-[11px] font-mono font-bold uppercase tracking-[0.25em] rounded-full border border-blue-500/30 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
          LET'S TALK ENGINEERING
        </span>

        <h2 className="font-general text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white max-w-3xl leading-tight">
          {title}
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>

        <div className="pt-4">
          <Link
            href={buttonHref}
            className="group inline-flex items-center gap-3.5 px-8 py-4 bg-white text-black text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <span>{buttonText}</span>
            <span className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
