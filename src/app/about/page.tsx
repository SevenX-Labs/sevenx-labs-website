import { Zap, Brain, Code2, Handshake, ShieldCheck, Cpu, Layers, GitBranch, Rocket, Server, Terminal, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "About SevenX Labs | Digital Products & Engineering Studio",
  },
  description:
    "Learn about SevenX Labs, a product engineering studio designing high-performance web, mobile, AI and custom software solutions for growing businesses.",
  alternates: {
    canonical: absoluteUrl("/about"),
  },
  openGraph: {
    title: "About SevenX Labs | Digital Products & Engineering Studio",
    description:
      "Learn about SevenX Labs, a product engineering studio designing high-performance web, mobile, AI and custom software solutions for growing businesses.",
    url: absoluteUrl("/about"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SevenX Labs | Digital Products & Engineering Studio",
    description:
      "Learn about SevenX Labs, a product engineering studio designing high-performance web, mobile, AI and custom software solutions for growing businesses.",
  },
};

const ABOUT_FAQS = [
  {
    question: "What types of companies does SevenX Labs partner with?",
    answer: "We partner with funded startups, venture-backed scaleups, and forward-thinking mid-market enterprises looking to build, modernize, or scale flagship digital products across Web, Mobile, and AI ecosystems."
  },
  {
    question: "How does intellectual property (IP) transfer work?",
    answer: "You retain 100% full ownership of all custom source code, architecture documentation, design systems, vector pipelines, and cloud infrastructure configurations upon delivery. We operate on a strict work-for-hire model."
  },
  {
    question: "What is your typical project engagement model?",
    answer: "We offer dedicated product engineering squads (cross-functional teams of architects, full-stack engineers, and UI/UX designers) for continuous development, as well as fixed-scope milestone delivery for rapid MVP prototyping."
  },
  {
    question: "How do you guarantee product quality and sub-second performance?",
    answer: "Every application we build undergoes automated CI/CD pipeline verification, static code analysis, Lighthouse performance audits, end-to-end security scanning, and strict TypeScript/Python type safety checks before deployment."
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <FAQPageJsonLd faqs={ABOUT_FAQS} />
      <Navbar />

      <PageHeader
        badge="PRODUCT ENGINEERING STUDIO"
        title="We Build Digital Products That Move Business Forward"
        subtitle="SevenX Labs is a digital product studio partnering with startups and growth-stage companies to design, engineer, and scale resilient software applications."
        breadcrumbs={[{ name: "About", href: "/about" }]}
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
            <p className="text-zinc-600 text-sm leading-relaxed mt-2">
              We eliminate traditional agency bloat. Our multidisciplinary squads combine senior technical architecture with product management to deliver mission-critical software.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-general text-xl font-bold uppercase text-black">Performance First</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Speed is a core product feature. We engineer sub-second page loads, low-latency microservices, and smooth mobile interfaces that maximize conversion and retention.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-general text-xl font-bold uppercase text-black">Practical AI Architecture</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We bridge research and reality. Our production RAG systems, AI agent workflows, and vector databases integrate directly into business workflows.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-general text-xl font-bold uppercase text-black">Clean Architecture</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We write maintainable, modular TypeScript and Python codebases built to adapt smoothly as business requirements and user scale evolve.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="font-general text-xl font-bold uppercase text-black">Transparent Partnership</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Direct communication with lead engineers, bi-weekly sprint demos, continuous staging environments, and zero hidden overhead.
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
              <h3 className="font-general text-xl font-bold uppercase text-white">Full-Lifecycle Ownership</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                From initial technical discovery and Figma design systems to Kubernetes cloud deployment and continuous SRE monitoring, we handle the entire execution stack.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-4">
              <span className="text-3xl font-mono font-bold text-[#3B82F6]">02</span>
              <h3 className="font-general text-xl font-bold uppercase text-white">100% IP Ownership</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                You retain total ownership of all repositories, custom codebases, design tokens, CI/CD scripts, and cloud infrastructure assets from day one.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-4">
              <span className="text-3xl font-mono font-bold text-[#3B82F6]">03</span>
              <h3 className="font-general text-xl font-bold uppercase text-white">Modern Enterprise Tech Stack</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We leverage Next.js, React Native, TypeScript, FastAPI, PostgreSQL, PgVector, Kubernetes, and AWS to build resilient software applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILED PROCESS METHODOLOGY */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="flex flex-col gap-3 mb-14 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            ENGINEERING LIFECYCLE
          </span>
          <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
            How We Execute Projects from 0 to 1
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Our structured product engineering methodology guarantees rapid feedback loops, robust architectural foundations, and predictable delivery dates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-4 relative">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6] font-mono font-bold text-sm">
              01
            </div>
            <h3 className="font-general text-lg font-bold uppercase text-black">Architecture Blueprint</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              We define database schemas, domain models, microservice boundaries, API specs, and technical risk matrices before writing code.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-4 relative">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6] font-mono font-bold text-sm">
              02
            </div>
            <h3 className="font-general text-lg font-bold uppercase text-black">Design & UI Systems</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              We craft high-fidelity Figma components, design tokens, micro-interactions, and responsive layouts tailored to brand identity.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-4 relative">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6] font-mono font-bold text-sm">
              03
            </div>
            <h3 className="font-general text-lg font-bold uppercase text-black">Agile Sprint Delivery</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Two-week development sprints with automated CI/CD pipelines, staging previews, continuous code reviews, and weekly client demos.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-4 relative">
            <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6] font-mono font-bold text-sm">
              04
            </div>
            <h3 className="font-general text-lg font-bold uppercase text-black">Hardening & Production Launch</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Comprehensive security audits, load testing, SEO optimization, analytics telemetry, and zero-downtime production deployment.
            </p>
          </div>
        </div>
      </section>

      {/* TECH MATRIX SECTION */}
      <section className="py-20 bg-zinc-950 text-white w-full border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              TECHNOLOGY ECOSYSTEM
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              Modern Tools for Scalable Systems
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col gap-3">
              <h3 className="text-sm font-mono font-bold uppercase text-[#3B82F6]">Web & Mobile</h3>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">Next.js 16</li>
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">React 19</li>
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">TypeScript</li>
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">React Native</li>
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">Tailwind CSS</li>
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">GSAP</li>
              </ul>
            </div>

            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col gap-3">
              <h3 className="text-sm font-mono font-bold uppercase text-[#3B82F6]">Backend & AI</h3>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">FastAPI</li>
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">Node.js</li>
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">Python</li>
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">LangChain</li>
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">PgVector</li>
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">OpenAI API</li>
              </ul>
            </div>

            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col gap-3">
              <h3 className="text-sm font-mono font-bold uppercase text-[#3B82F6]">Cloud & DevOps</h3>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">AWS</li>
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">Google Cloud</li>
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">Docker</li>
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">Kubernetes</li>
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">PostgreSQL</li>
                <li className="px-2.5 py-1 bg-white/5 rounded-lg border border-white/10">Redis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO FAQS SECTION */}
      <section className="py-20 md:py-28 max-w-4xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col gap-3 mb-12 text-center">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
            Everything You Need to Know
          </h2>
        </div>
        <FAQAccordion items={ABOUT_FAQS} />
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
