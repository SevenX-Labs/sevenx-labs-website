"use client";

import React from "react";
import Link from "next/link";
import {
  Code2,
  Zap,
  Sparkles,
  ShieldCheck,
  ArrowUpRight,
  Laptop,
  GraduationCap,
  Heart,
  Coffee,
  Globe,
  Mail,
  UserCheck,
  Send,
} from "lucide-react";
import { CAREER_STATS, CULTURE_VALUES } from "@/lib/data/careers";

export function CareersContent() {
  return (
    <div className="py-16 md:py-24 space-y-20 text-white font-space">
      
      {/* ─── 1. CAREER STATS STRIP ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {CAREER_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between space-y-3"
            >
              <span className="font-general text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#60A5FA]">
                {stat.value}
              </span>
              <div>
                <h4 className="text-sm font-bold font-general uppercase text-white">{stat.label}</h4>
                <p className="text-[11px] font-mono text-zinc-400">{stat.sublabel}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 2. CULTURE & VALUES SECTION ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-12">
        <div className="flex flex-col items-center text-center space-y-4 max-w-2xl mx-auto">
          <span className="px-3.5 py-1 bg-white/[0.04] text-[#60A5FA] text-[11px] font-mono font-bold uppercase tracking-[0.25em] rounded-full border border-blue-500/30">
            ENGINEERING CULTURE
          </span>
          <h2 className="font-general text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white">
            Built for Autonomy & Mastery
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono leading-relaxed">
            We operate with zero corporate bureaucracy. High ownership, continuous shipping, and direct client impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CULTURE_VALUES.map((val, idx) => {
            const Icon =
              idx === 0
                ? Code2
                : idx === 1
                ? Zap
                : idx === 2
                ? Sparkles
                : ShieldCheck;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4 group hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#60A5FA] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-general text-xl font-extrabold uppercase text-white tracking-tight">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── 3. NO OPENINGS NOTICE SECTION ─── */}
      <section id="openings" className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 scroll-mt-28">
        <div className="p-8 sm:p-12 md:p-16 rounded-[32px] bg-gradient-to-br from-[#12121A] via-[#0D0D11] to-[#12121A] border border-white/10 shadow-2xl flex flex-col items-center text-center space-y-6">
          
          <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#60A5FA] flex items-center justify-center">
            <UserCheck className="w-8 h-8" />
          </div>

          <div className="space-y-3 max-w-2xl">
            <span className="px-3.5 py-1 bg-white/[0.04] text-zinc-400 text-[11px] font-mono font-bold uppercase tracking-widest rounded-full border border-white/10">
              CURRENT HIRING STATUS
            </span>
            <h2 className="font-general text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white leading-tight">
              No Active Job Openings Currently Available
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
              We do not have any open job vacancies at the moment. However, if you are an exceptional engineer or designer interested in reaching out, please submit your contact details directly on our contact page.
            </p>
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all duration-300 shadow-xl"
            >
              <Send className="w-4 h-4 text-[#3B82F6]" />
              <span>SEND CONTACT DETAILS</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 4. PERKS & BENEFITS GRID ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-10">
        <div className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto">
          <span className="px-3.5 py-1 bg-white/[0.04] text-[#60A5FA] text-[11px] font-mono font-bold uppercase tracking-[0.25em] rounded-full border border-blue-500/30">
            PERKS & REWARDS
          </span>
          <h2 className="font-general text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-white">
            Designed for Top Performers
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-[#60A5FA] flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-general uppercase text-white">Remote-First Culture</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Work from anywhere in India or globally with asynchronous communication and flexible working hours.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <Laptop className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-general uppercase text-white">Hardware & Tech Stipend</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Get powered with M-Series MacBook Pros, high-resolution monitors, and professional software subscriptions.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-general uppercase text-white">Learning Allowance</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              $1,000 annual budget for courses, books, tech conferences, and specialized certification programs.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-general uppercase text-white">Health & Wellness</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Comprehensive health insurance covering medical, dental, and wellness support for you and dependents.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-general uppercase text-white">Performance Bonuses</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Bi-annual performance evaluations with direct profit-share & project milestone bonuses.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center">
              <Coffee className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-general uppercase text-white">Team Retreats & Offsites</h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Annual all-expenses-paid team hackathons and relaxation offsites to connect in person.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 5. GENERAL INQUIRIES / CONTACT DETAILS LINK ─── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-zinc-900 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="px-3 py-1 bg-white/10 text-white text-[11px] font-mono font-bold uppercase tracking-wider rounded-full">
              DIRECT INQUIRIES
            </span>
            <h3 className="font-general text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
              Want to Get in Touch with SevenX Labs?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed">
              For general project inquiries, team discussions, or partner inquiries, visit our contact page to send your details directly.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-xs font-mono font-bold uppercase tracking-[0.2em] rounded-full hover:bg-zinc-200 transition-all duration-300 shrink-0 shadow-xl"
          >
            <Mail className="w-4 h-4 text-[#3B82F6]" />
            <span>CONTACT US</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}
