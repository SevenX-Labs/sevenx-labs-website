import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { PageHeader } from "@/components/ui/PageHeader";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { FAQPageJsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG, absoluteUrl } from "@/lib/site-config";
import { ArrowUpRight, Clock, Code2, FileCheck2, Layers, Rocket, ShieldCheck } from "lucide-react";

const contactTitle = "Contact SevenX Labs | Discuss Your Software Project";
const contactDescription =
  "Contact SevenX Labs to scope your web app, mobile application, AI pipeline, or custom software project. Technical review and NDA available within 24 hours.";

export const metadata: Metadata = {
  title: {
    absolute: contactTitle,
  },
  description: contactDescription,
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title: contactTitle,
    description: contactDescription,
    url: absoluteUrl("/contact"),
    siteName: SITE_CONFIG.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: contactTitle,
    description: contactDescription,
  },
};

const DISCOVERY_STEPS = [
  {
    step: "01",
    title: "Technical Review (<24h)",
    description:
      "Senior product engineers review your project brief, stack requirements, and target launch timeline within one business day and prepare clarifying architecture questions.",
    icon: Clock,
  },
  {
    step: "02",
    title: "Architecture & Scope Call",
    description:
      "We run a focused 30-to-45 minute technical discovery session to map core user journeys, third-party integrations, data security constraints, and build-versus-buy trade-offs.",
    icon: Code2,
  },
  {
    step: "03",
    title: "Proposal & Roadmap",
    description:
      "You receive a concrete technical specification, sprint-by-sprint milestone roadmap, transparent fixed or retainer pricing, and clear ownership terms.",
    icon: FileCheck2,
  },
];

const ENGAGEMENT_MODELS = [
  {
    badge: "MODEL 01 — LAUNCH FAST",
    title: "Fixed-Scope MVP Builds",
    description:
      "Best for founders and product teams validating product-market fit. We narrow scope to the core user workflows and ship on production foundations (Next.js, TypeScript, PostgreSQL) in 6 to 10 weeks.",
    href: "/solutions/mvp-development",
    linkLabel: "Explore MVP Development",
    icon: Rocket,
  },
  {
    badge: "MODEL 02 — CONTINUOUS DELIVERY",
    title: "Dedicated Product Engineering Retainers",
    description:
      "Best for scaling companies needing senior full-stack, mobile, and DevOps velocity. Embedded engineers ship weekly releases directly in your repository with full CI/CD and telemetry.",
    href: "/services/web-development",
    linkLabel: "Explore Web & SaaS Engineering",
    icon: Layers,
  },
  {
    badge: "MODEL 03 — TARGETED EXPERTISE",
    title: "Technical Audits & AI Integration",
    description:
      "Best for existing teams needing architecture reviews, legacy modernization plans, cloud cost optimization, or production RAG and LLM workflow automation.",
    href: "/services/ai-development",
    linkLabel: "Explore AI Engineering",
    icon: ShieldCheck,
  },
];

const CONTACT_FAQS = [
  {
    question: "Do you sign an NDA before reviewing our project details?",
    answer:
      "Yes. We sign a mutual Non-Disclosure Agreement (NDA) on request prior to any technical discovery call or codebase review so your product roadmap and proprietary data remain protected.",
  },
  {
    question: "How quickly will we hear back after submitting an inquiry?",
    answer:
      "A senior engineer reviews every submission and responds within 24 hours on business days with initial feedback and proposed times for a scoping call.",
  },
  {
    question: "What are your typical project minimums and delivery timelines?",
    answer:
      "Focused MVP builds and custom web platforms typically run 6 to 10 weeks with milestone-based pricing, while smaller technical audits, UI/UX design sprints, or AI pipeline integrations can be scoped as 2-to-4 week engagements.",
  },
  {
    question: "How do you handle timezone overlap and ongoing communication?",
    answer:
      "We maintain daily async updates in Slack or Linear alongside scheduled overlap hours for live sprint demos and architecture reviews across India (IST), Europe (CET/GMT), and North America (EST/PST).",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <FAQPageJsonLd faqs={CONTACT_FAQS} />
      <Navbar />

      <PageHeader
        badge="CONTACT SEVENX LABS"
        title="Start Your Software Engineering Project"
        subtitle="Share your product goals, technical constraints, or modernization roadmap. We respond within 24 hours with a clear engineering path forward."
        breadcrumbs={[{ name: "Contact", href: "/contact" }]}
      />

      <Contact />

      {/* WHAT HAPPENS NEXT: 3-STEP DISCOVERY PROCESS */}
      <section className="py-20 bg-white border-y border-black/[0.06] w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              WHAT HAPPENS NEXT
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
              Our 3-Step Technical Discovery Process
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Every inquiry goes directly to senior engineers — never a sales script. Here is how we move from initial contact to an actionable build plan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {DISCOVERY_STEPS.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="p-8 rounded-3xl bg-[#FAF9F6] border border-black/[0.08] flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-wider">
                      STEP {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-general text-xl font-bold uppercase text-black">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT MODELS */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              ENGAGEMENT MODELS
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
              Flexible Ways to Partner With SevenX Labs
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-5 shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#3B82F6] hover:text-blue-700 transition-colors"
            >
              <span>All Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-black hover:text-[#3B82F6] transition-colors"
            >
              <span>All Solutions</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ENGAGEMENT_MODELS.map((model) => {
            const Icon = model.icon;
            return (
              <div
                key={model.title}
                className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#3B82F6]">
                      {model.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="font-general text-xl font-extrabold uppercase text-black">
                    {model.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {model.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-black/[0.06]">
                  <Link
                    href={model.href}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-black hover:text-[#3B82F6] transition-colors"
                  >
                    <span>{model.linkLabel}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT & DISCOVERY FAQ */}
      <section className="py-20 bg-white border-t border-black/[0.06] w-full">
        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col gap-3 mb-12 text-center">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              CONTACT &amp; DISCOVERY FAQ
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
              Common Questions Before Starting
            </h2>
          </div>
          <FAQAccordion items={CONTACT_FAQS} />
        </div>
      </section>

      <Footer />
    </main>
  );
}
