"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About us", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "How we work", href: "/#how-we-work" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Reviews", href: "/#testimonials" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border-b border-black/[0.04] py-1"
          : "bg-transparent py-2"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-16 md:h-[68px]">
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 focus:outline-none shrink-0"
        >
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-black font-sans group-hover:opacity-85 transition-opacity flex items-center gap-1.5">
            <span>SevenX</span>
            <span className="font-light text-zinc-600">Labs</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 inline-block ml-0.5" />
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-7 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-black/[0.06] shadow-sm">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[11px] uppercase tracking-widest font-semibold transition-colors relative py-0.5 ${
                  isActive
                    ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-black"
                    : "text-zinc-500 hover:text-black font-medium after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-black hover:after:w-full after:transition-all after:duration-250"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 text-[11px] font-semibold tracking-widest uppercase bg-black text-white rounded-full hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span
            className={`w-6 h-[2px] bg-black transition-transform duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[5px]" : ""
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-xl border-t border-black/[0.04] ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href;

            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-xs uppercase tracking-widest font-semibold transition-colors ${
                  isActive ? "text-black font-bold" : "text-zinc-500 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            onClick={() => setMobileOpen(false)}
            className="inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-wider uppercase bg-black text-white rounded-full mt-2"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  );
}
