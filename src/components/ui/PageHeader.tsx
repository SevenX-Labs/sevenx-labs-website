import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "./Breadcrumbs";

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  theme?: "light" | "dark";
}

export function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumbs,
  theme = "light",
}: PageHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={`relative w-full pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b ${
        isDark
          ? "bg-[#0D0D11] text-white border-white/10"
          : "bg-[#FAF9F6] text-zinc-900 border-black/[0.08]"
      }`}
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className={`absolute top-0 right-1/4 w-[450px] h-[450px] rounded-full blur-3xl ${
            isDark ? "bg-blue-600/10" : "bg-blue-500/10"
          }`}
        />
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"
              : "bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]"
          } bg-[size:64px_64px]`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-5">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}

        {badge && (
          <span
            className={`px-3.5 py-1 text-[11px] font-mono font-bold uppercase tracking-[0.25em] rounded-full w-max flex items-center gap-2 border ${
              isDark
                ? "bg-white/[0.04] text-[#3B82F6] border-blue-500/30"
                : "bg-black/[0.04] text-[#3B82F6] border-blue-200/60"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
            {badge}
          </span>
        )}

        <h1
          className={`font-general text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1.08] max-w-4xl ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h1>

        {subtitle && (
          <p
            className={`text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed ${
              isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
