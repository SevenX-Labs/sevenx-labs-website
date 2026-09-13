import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/site-config";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About SevenX Labs | Digital Products & Engineering Studio",
  description:
    "Learn about SevenX Labs, a product engineering studio designing high-performance web, mobile, AI and custom software solutions for growing businesses.",
  alternates: {
    canonical: absoluteUrl("/about"),
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <OrganizationJsonLd />
      <Navbar />

      <PageHeader
        badge="PRODUCT ENGINEERING STUDIO"
        title="We Build Digital Products That Move Business Forward"
        subtitle="SevenX Labs is a digital product studio partnering with startups and growth-stage companies to design, engineer, and scale resilient software applications."
        breadcrumbs={[{ name: "About" }]}
      />

      {/* CORE PHILOSOPHY SECTION */}
      <section id="philosophy" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              OUR PHILOSOPHY
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
              Engineering Excellence Without Compromise
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
              <span className="text-2xl">⚡</span>
              <h3 className="font-general text-xl font-bold uppercase text-black">Performance First</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Speed is a core product feature. We engineer sub-second page loads, low-latency microservices, and smooth 60fps mobile interfaces that keep users engaged.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
              <span className="text-2xl">🧠</span>
              <h3 className="font-general text-xl font-bold uppercase text-black">Practical AI & Automation</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We focus on real business impact, avoiding AI hype. Our vector pipelines, agents, and RAG architectures solve actual operational bottlenecks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
              <span className="text-2xl">📐</span>
              <h3 className="font-general text-xl font-bold uppercase text-black">Clean Architecture</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We write maintainable, well-structured TypeScript and Python code bases designed to adapt smoothly as business requirements evolve.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
              <span className="text-2xl">🤝</span>
              <h3 className="font-general text-xl font-bold uppercase text-black">Transparent Partnership</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Direct communication, two-week agile sprints, continuous staging deployments, and zero hidden costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SEVENX SECTION */}
      <section id="why-sevenx" className="py-20 md:py-28 bg-[#0D0D11] text-white w-full border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              WHY SEVENX LABS
            </span>
            <h2 className="font-general text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
              Built for Teams That Expect Premium Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-4">
              <span className="text-3xl font-mono font-bold text-[#3B82F6]">01</span>
              <h3 className="font-general text-xl font-bold uppercase text-white">Full-Lifecycle Delivery</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                From initial technical discovery and UI/UX design systems to cloud deployment and ongoing maintenance, we take full ownership.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-4">
              <span className="text-3xl font-mono font-bold text-[#3B82F6]">02</span>
              <h3 className="font-general text-xl font-bold uppercase text-white">100% IP Ownership</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                You retain complete ownership of all repositories, custom codebases, design tokens, and cloud infrastructure assets.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-4">
              <span className="text-3xl font-mono font-bold text-[#3B82F6]">03</span>
              <h3 className="font-general text-xl font-bold uppercase text-white">Modern Tech Stack</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We leverage Next.js, React Native, TypeScript, FastAPI, PostgreSQL, Kubernetes, and AWS to build scalable web products.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
