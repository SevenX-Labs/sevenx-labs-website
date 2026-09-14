import { 
  Zap, 
  Brain, 
  Code2, 
  Handshake, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  GitBranch, 
  Rocket, 
  Server, 
  Terminal, 
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Target,
  Compass,
  Users,
  Building2,
  Briefcase,
  Workflow,
  Check
} from "lucide-react";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";
import Link from "next/link";
import { absoluteUrl } from "@/lib/site-config";
import { CASE_STUDIES } from "@/lib/data/case-studies";

export const metadata: Metadata = {
  title: {
    absolute: "About SevenX Labs | Digital Products & Engineering Studio",
  },
  description:
    "SevenX Labs is a software engineering and product studio partnering with ambitious companies to design, engineer, and scale high-performance digital products, AI systems, and cloud infrastructure.",
  alternates: {
    canonical: absoluteUrl("/about"),
  },
  openGraph: {
    title: "About SevenX Labs | Digital Products & Engineering Studio",
    description:
      "SevenX Labs is a software engineering and product studio partnering with ambitious companies to design, engineer, and scale high-performance digital products, AI systems, and cloud infrastructure.",
    url: absoluteUrl("/about"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SevenX Labs | Digital Products & Engineering Studio",
    description:
      "SevenX Labs is a software engineering and product studio partnering with ambitious companies to design, engineer, and scale high-performance digital products, AI systems, and cloud infrastructure.",
  },
};

const ABOUT_FAQS = [
  {
    question: "What types of companies does SevenX Labs partner with?",
    answer: "We partner with funded startups validating new products, growth-stage businesses expanding digital channels, established product teams requiring specialized engineering capability, and organizations modernizing legacy technology systems."
  },
  {
    question: "How does intellectual property (IP) transfer work?",
    answer: "You retain 100% full ownership of all custom source code, architecture documentation, design systems, vector pipelines, and cloud infrastructure configurations upon delivery. We operate on a strict work-for-hire model."
  },
  {
    question: "What is your typical project engagement model?",
    answer: "We work through dedicated product engineering teams for ongoing product evolution as well as structured, milestone-based engagements for milestone delivery and rapid MVP creation."
  },
  {
    question: "How do you guarantee product quality and production performance?",
    answer: "Every application we engineer undergoes automated CI/CD verification, static code analysis, performance profiling, end-to-end security scanning, and strict type safety checks before deployment."
  }
];

export default function AboutPage() {
  const featuredCases = [
    CASE_STUDIES["synapse-ai-engine"],
    CASE_STUDIES["finfuse"],
    CASE_STUDIES["maison-lumina"],
    CASE_STUDIES["kubeflow-enterprise"],
  ].filter(Boolean);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <FAQPageJsonLd faqs={ABOUT_FAQS} />
      <Navbar />

      {/* SECTION 01 — ABOUT SEVENX HERO */}
      <section id="overview">
        <PageHeader
          badge="ABOUT SEVENX LABS"
          title="ENGINEERING DIGITAL PRODUCTS FOR THE REAL WORLD"
          subtitle="SevenX Labs is a software engineering and product studio that helps businesses turn ideas, products, and operational challenges into reliable digital systems."
          breadcrumbs={[{ name: "About", href: "/about" }]}
        />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16 w-full -mt-8">
          <div className="p-8 sm:p-10 md:p-12 bg-white rounded-3xl border border-black/[0.08] shadow-sm flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="flex flex-col gap-4 max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3B82F6] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
                END-TO-END PRODUCT STUDIO
              </span>
              <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                We combine product thinking, software engineering, AI, design, and cloud infrastructure to take digital products from early concept through production and continued improvement.
              </p>
            </div>
            
            <div className="flex flex-wrap md:flex-col gap-3 shrink-0 pt-2 border-t md:border-t-0 md:border-l border-slate-100 md:pl-8">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                <span>Web & SaaS Platforms</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                <span>Cross-Platform Mobile</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                <span>Production AI & RAG</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-[#3B82F6]" />
                <span>Cloud & DevOps Pipelines</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ANCHOR NAV */}
      <div className="sticky top-20 z-30 bg-[#FAF9F6]/90 backdrop-blur-md border-y border-black/[0.06] hidden md:block">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-3 flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-slate-500 overflow-x-auto">
          <a href="/about#overview" className="hover:text-[#3B82F6] transition-colors">Overview</a>
          <a href="/about#capabilities" className="hover:text-[#3B82F6] transition-colors">Capabilities</a>
          <a href="/about#philosophy" className="hover:text-[#3B82F6] transition-colors">Philosophy</a>
          <a href="/about#approach" className="hover:text-[#3B82F6] transition-colors">Engineering Mindset</a>
          <a href="/about#process" className="hover:text-[#3B82F6] transition-colors">How We Work</a>
          <a href="/about#why-sevenx" className="hover:text-[#3B82F6] transition-colors">Why SevenX</a>
          <a href="/about#who-we-work-with" className="hover:text-[#3B82F6] transition-colors">Who We Work With</a>
          <a href="/about#technology" className="hover:text-[#3B82F6] transition-colors">Technology</a>
          <a href="/about#work" className="hover:text-[#3B82F6] transition-colors">Featured Work</a>
        </div>
      </div>

      {/* SECTION 02 — WHAT WE DO */}
      <section id="capabilities" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full border-t border-black/[0.06]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              CAPABILITIES & SPECIALIZATIONS
            </span>
            <h2 className="font-general text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              ONE TEAM ACROSS THE PRODUCT LIFECYCLE
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#3B82F6] hover:text-blue-700 transition-colors group"
          >
            <span>EXPLORE SERVICES</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col justify-between gap-6 hover:border-blue-200 transition-all duration-300">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="font-general text-2xl font-bold uppercase text-black">PRODUCT ENGINEERING</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We design and engineer web, mobile and custom software products around real business and user requirements — from customer-facing applications to internal platforms and SaaS products.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 text-xs font-mono text-slate-600">
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">Web Applications</li>
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">SaaS Platforms</li>
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">Mobile Apps</li>
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">APIs & Dashboards</li>
            </ul>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col justify-between gap-6 hover:border-blue-200 transition-all duration-300">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="font-general text-2xl font-bold uppercase text-black">AI ENGINEERING</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We build practical AI systems that connect models, business data and software workflows to solve specific product and operational problems.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 text-xs font-mono text-slate-600">
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">LLM Integrations</li>
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">RAG Architectures</li>
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">Vector Search</li>
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">AI Agents & Workflows</li>
            </ul>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col justify-between gap-6 hover:border-blue-200 transition-all duration-300">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-general text-2xl font-bold uppercase text-black">PRODUCT DESIGN</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We design digital products around clear user journeys, usable interfaces and design systems that can move cleanly into engineering.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 text-xs font-mono text-slate-600">
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">User Flows & UX</li>
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">UI Design Systems</li>
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">Interactive Prototypes</li>
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">Responsive Design</li>
            </ul>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col justify-between gap-6 hover:border-blue-200 transition-all duration-300">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="font-general text-2xl font-bold uppercase text-black">CLOUD & INFRASTRUCTURE</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We build the infrastructure and deployment foundations required to run applications reliably in production.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 text-xs font-mono text-slate-600">
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">AWS & GCP</li>
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">Docker & Kubernetes</li>
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">CI/CD Pipelines</li>
              <li className="px-3 py-1 bg-slate-50 rounded-lg border border-slate-200/60">IaC & Telemetry</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 03 — OUR PHILOSOPHY */}
      <section id="philosophy" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full border-t border-black/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              OUR PHILOSOPHY
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
              Engineering Excellence Without Compromise
            </h2>
            <p className="text-zinc-600 text-sm leading-relaxed mt-2">
              We eliminate traditional agency bloat. Our technical leadership and product engineering discipline deliver software built for long-term production resilience.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-general text-xl font-bold uppercase text-black">01 — Performance First</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Performance is part of the product experience, not something to fix after launch. We prioritize frontend rendering speed, API latency, and database query optimization from day one.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-general text-xl font-bold uppercase text-black">02 — Practical AI Architecture</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We focus on AI where it creates real product or business value. Depending on the use case, this includes RAG systems, AI agents, document intelligence, vector search, and application-level evaluation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="font-general text-xl font-bold uppercase text-black">03 — Clean Architecture</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Software should remain understandable after the first release. We favor modular systems, clear boundaries, maintainable code, and architectures that evolve cleanly as requirements change.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
                <Handshake className="w-5 h-5" />
              </div>
              <h3 className="font-general text-xl font-bold uppercase text-black">04 — Transparent Partnership</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Good software development requires clear communication. Product decisions, technical trade-offs, progress, and risks remain completely visible throughout the engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04 — HOW WE THINK ABOUT ENGINEERING */}
      <section id="approach" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full border-t border-black/[0.06]">
        <div className="flex flex-col gap-3 mb-14 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            ENGINEERING PRINCIPLES
          </span>
          <h2 className="font-general text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
            HOW WE THINK ABOUT ENGINEERING
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
            <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-wider">PRINCIPLE 01</span>
            <h3 className="font-general text-lg font-bold uppercase text-black">Business Before Technology</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Technology should support the business objective. We understand what the product needs to achieve before selecting architecture, frameworks, or infrastructure.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
            <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-wider">PRINCIPLE 02</span>
            <h3 className="font-general text-lg font-bold uppercase text-black">Production Over Prototypes</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              A prototype can prove an idea. A production system has to support real users, real data, integrations, and operational requirements reliably.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
            <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-wider">PRINCIPLE 03</span>
            <h3 className="font-general text-lg font-bold uppercase text-black">Simplicity Before Complexity</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              We avoid introducing architectural or infrastructure complexity unless the product actually needs it for performance, security, or scale.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
            <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-wider">PRINCIPLE 04</span>
            <h3 className="font-general text-lg font-bold uppercase text-black">Build for the Next Stage</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Good architecture should support current requirements while leaving clear, modular room for the product to evolve smoothly as demand grows.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 05 — HOW WE WORK */}
      <section id="process" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full border-t border-black/[0.06]">
        <div className="flex flex-col gap-3 mb-14 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            ENGAGEMENT LIFECYCLE
          </span>
          <h2 className="font-general text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
            FROM FIRST CONVERSATION TO PRODUCTION
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            A structured execution methodology ensuring technical clarity, continuous visibility, and predictable delivery at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-4 relative">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6] font-mono font-bold text-sm">
              01
            </div>
            <h3 className="font-general text-xl font-bold uppercase text-black">DISCOVER</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Understand business objectives, user expectations, existing codebases, technical requirements, system constraints, and strategic priorities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-4 relative">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6] font-mono font-bold text-sm">
              02
            </div>
            <h3 className="font-general text-xl font-bold uppercase text-black">DEFINE</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Establish core functional requirements, product scope boundaries, technical architecture specifications, data schemas, and sprint roadmaps.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-4 relative">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6] font-mono font-bold text-sm">
              03
            </div>
            <h3 className="font-general text-xl font-bold uppercase text-black">DESIGN</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Create detailed user flows, interactive wireframes, intuitive interface designs, component tokens, and responsive design systems.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-4 relative">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6] font-mono font-bold text-sm">
              04
            </div>
            <h3 className="font-general text-xl font-bold uppercase text-black">ENGINEER</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Build high-performance web frontends, mobile codebases, scalable APIs, database schema migrations, vector search pipelines, and cloud environments.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-4 relative">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6] font-mono font-bold text-sm">
              05
            </div>
            <h3 className="font-general text-xl font-bold uppercase text-black">VALIDATE</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Perform end-to-end testing, accessibility audits, performance profiling, security vulnerability checks, edge-case validation, and load testing.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-4 relative">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6] font-mono font-bold text-sm">
              06
            </div>
            <h3 className="font-general text-xl font-bold uppercase text-black">LAUNCH & IMPROVE</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Deploy to production using automated zero-downtime pipelines, set up real-time telemetry and error monitoring, and continuously iterate.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 06 — WHY SEVENX */}
      <section id="why-sevenx" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full border-t border-black/[0.06]">
        <div className="flex flex-col gap-3 mb-14 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            VALUE PROPOSITION
          </span>
          <h2 className="font-general text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
            WHY TEAMS WORK WITH SEVENX
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
              <Target className="w-4 h-4" />
            </div>
            <h3 className="font-general text-base font-bold uppercase text-black">Engineering-Led</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Technical decisions are made with the product long-term requirements and maintainability in mind.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
              <Users className="w-4 h-4" />
            </div>
            <h3 className="font-general text-base font-bold uppercase text-black">Direct Communication</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Keep communication close to the engineers involved directly in product design and architectural choices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
              <Briefcase className="w-4 h-4" />
            </div>
            <h3 className="font-general text-base font-bold uppercase text-black">Business-Aware</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              We understand the strategic business objective behind a requirement rather than building features in isolation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-general text-base font-bold uppercase text-black">Production-Focused</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Consider deployment, security, performance, monitoring, and operations as integral to engineering.
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="font-general text-base font-bold uppercase text-black">Long-Term Thinking</h3>
            <p className="text-slate-600 text-xs leading-relaxed">
              Products evolve after release. Architectures leave clean room for future features and user growth.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 07 — WHO WE WORK WITH */}
      <section id="who-we-work-with" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full border-t border-black/[0.06]">
        <div className="flex flex-col gap-3 mb-14 text-center max-w-3xl mx-auto">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            ENGAGEMENT PROFILES
          </span>
          <h2 className="font-general text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
            BUILT FOR AMBITIOUS PRODUCT TEAMS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase">PROFILE 01</span>
              <h3 className="font-general text-xl font-bold uppercase text-black">STARTUPS</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Founders and early teams validating product-market fit, prototyping MVPs, and building production-grade initial releases.
              </p>
            </div>
            <Link href="/solutions/mvp-development" className="text-xs font-mono font-bold text-[#3B82F6] hover:underline flex items-center gap-1">
              <span>MVP Engineering Solutions</span> →
            </Link>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase">PROFILE 02</span>
              <h3 className="font-general text-xl font-bold uppercase text-black">GROWING BUSINESSES</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Companies expanding digital offerings, establishing customer platforms, and automating operational workflows.
              </p>
            </div>
            <Link href="/solutions/saas-development" className="text-xs font-mono font-bold text-[#3B82F6] hover:underline flex items-center gap-1">
              <span>SaaS Product Solutions</span> →
            </Link>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase">PROFILE 03</span>
              <h3 className="font-general text-xl font-bold uppercase text-black">PRODUCT TEAMS</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Existing engineering organizations requiring specialized product design, AI vector integration, or cloud infrastructure capability.
              </p>
            </div>
            <Link href="/services/ai-development" className="text-xs font-mono font-bold text-[#3B82F6] hover:underline flex items-center gap-1">
              <span>AI Integration Services</span> →
            </Link>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase">PROFILE 04</span>
              <h3 className="font-general text-xl font-bold uppercase text-black">MODERNIZATION PROJECTS</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Organizations replacing legacy monolithic codebases, manual operational processes, or fragmented infrastructure.
              </p>
            </div>
            <Link href="/solutions/digital-transformation" className="text-xs font-mono font-bold text-[#3B82F6] hover:underline flex items-center gap-1">
              <span>Digital Transformation</span> →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 08 — TECHNOLOGY APPROACH */}
      <section id="technology" className="py-20 bg-zinc-950 text-white w-full border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-3xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              TECHNICAL FOUNDATIONS
            </span>
            <h2 className="font-general text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
              MODERN TECHNOLOGY, PURPOSEFULLY USED
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We choose technologies around the product exact requirements rather than forcing every project into a single static stack.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col gap-4">
              <h3 className="text-xs font-mono font-bold uppercase text-[#3B82F6] tracking-wider">FRONTEND</h3>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">Next.js</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">React</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">TypeScript</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">React Native</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">Tailwind CSS</li>
              </ul>
            </div>

            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col gap-4">
              <h3 className="text-xs font-mono font-bold uppercase text-[#3B82F6] tracking-wider">BACKEND</h3>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">Node.js</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">Python</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">FastAPI</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">REST & WebSockets</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">PostgreSQL</li>
              </ul>
            </div>

            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col gap-4">
              <h3 className="text-xs font-mono font-bold uppercase text-[#3B82F6] tracking-wider">AI & VECTOR PIPELINES</h3>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">LLM Integrations</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">RAG Architectures</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">PgVector</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">LangChain</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">AI Workflows</li>
              </ul>
            </div>

            <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl flex flex-col gap-4">
              <h3 className="text-xs font-mono font-bold uppercase text-[#3B82F6] tracking-wider">INFRASTRUCTURE</h3>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-zinc-300">
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">AWS</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">Google Cloud</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">Docker</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">Kubernetes</li>
                <li className="px-3 py-1 bg-white/5 rounded-lg border border-white/10">Terraform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 09 — OUR WORK */}
      <section id="work" className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full border-t border-black/[0.06]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              SELECTED CASE STUDIES
            </span>
            <h2 className="font-general text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              SEE THE ENGINEERING IN PRACTICE
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#3B82F6] hover:text-blue-700 transition-colors group"
          >
            <span>EXPLORE OUR WORK</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredCases.map((study) => (
            <div key={study.slug} className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col justify-between gap-6 hover:border-blue-200 transition-all duration-300">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#3B82F6] px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
                    {study.category}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">{study.metric}</span>
                </div>
                <h3 className="font-general text-2xl font-bold uppercase text-black">{study.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{study.overview}</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-2">
                  {study.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-[11px] font-mono text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/50">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/portfolio/${study.slug}`}
                  className="text-xs font-mono font-bold text-[#3B82F6] hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>View Case Study</span> →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION FAQS */}
      <section className="py-20 md:py-28 max-w-4xl mx-auto px-6 md:px-12 w-full border-t border-black/[0.06]">
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

      {/* SECTION 10 — FINAL CTA */}
      <CTASection
        title="HAVE A PRODUCT TO BUILD OR IMPROVE?"
        description="Tell us what you're building, what you're trying to improve, or where your current system is getting in the way. We'll help you understand the technical path forward."
        buttonText="START A PROJECT"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}
