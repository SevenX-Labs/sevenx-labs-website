import { ArrowUpRight, CheckCircle2, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SOLUTIONS } from "@/lib/data/solutions";
import { absoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Targeted Engineering Solutions | SevenX Labs",
  },
  description:
    "Explore SevenX Labs specialized engineering solutions: SaaS Development, MVP Development, AI Automation, and Enterprise Digital Transformation.",
  alternates: {
    canonical: absoluteUrl("/solutions"),
  },
  openGraph: {
    title: "Targeted Engineering Solutions | SevenX Labs",
    description:
      "Explore SevenX Labs specialized engineering solutions: SaaS Development, MVP Development, AI Automation, and Enterprise Digital Transformation.",
    url: absoluteUrl("/solutions"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Targeted Engineering Solutions | SevenX Labs",
    description:
      "Explore SevenX Labs specialized engineering solutions: SaaS Development, MVP Development, AI Automation, and Enterprise Digital Transformation.",
  },
};

const SOLUTION_FAQS = [
  {
    question: "How fast can SevenX Labs launch an investor-ready MVP?",
    answer: "Our rapid MVP development lifecycle takes 6 to 10 weeks from initial technical discovery to production deployment, including core UI/UX design, authentication, multi-tenant billing, and cloud deployment."
  },
  {
    question: "How do you handle multi-tenancy and subscriptions for SaaS products?",
    answer: "We engineer resilient multi-tenant database partitioning (row-level security or tenant schema isolation), role-based access control (RBAC), and automated Stripe/Paddle webhook billing infrastructure."
  },
  {
    question: "Can SevenX Labs integrate AI automation into legacy backend systems?",
    answer: "Yes, we build modular microservice adapters and custom API gateways that connect legacy databases and ERPs with modern AI agent pipelines without needing to replace core legacy infrastructure."
  }
];

export default function SolutionsIndexPage() {
  const solutionList = Object.values(SOLUTIONS);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <Navbar />

      <PageHeader
        badge="BUSINESS SOLUTIONS"
        title="High-Impact Software Solutions Tailored to Your Growth Strategy"
        subtitle="Whether launching a new SaaS platform, building an investor-ready MVP, or automating operations, our solutions deliver rapid ROI."
        breadcrumbs={[{ name: "Solutions" }]}
      />

      {/* SOLUTIONS GRID */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionList.map((sol) => (
            <div
              key={sol.slug}
              className="bg-white p-8 md:p-10 rounded-3xl border border-black/[0.08] shadow-md hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between gap-6 group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-50 text-[#3B82F6] border border-blue-100 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full">
                    STRATEGIC SOLUTION
                  </span>
                </div>

                <h2 className="font-general text-2xl md:text-3xl font-extrabold uppercase text-black group-hover:text-blue-600 transition-colors">
                  {sol.title}
                </h2>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {sol.overview}
                </p>

                {/* Key deliverables preview */}
                <div className="flex flex-col gap-2 pt-2">
                  {sol.keyDeliverables?.slice(0, 3).map((deliv: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-sans text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
                <Link
                  href={`/solutions/${sol.slug}`}
                  aria-label={`Explore SevenX Labs ${sol.title} solution`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black group-hover:text-blue-600 transition-colors"
                >
                  <span>Explore Solution Details</span>
                  <ArrowUpRight className="w-4 h-4 inline-block ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUE PROPOSITION STRIP */}
      <section className="py-20 bg-zinc-950 text-white w-full border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              MEASURABLE RESULTS
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              Designed for Measurable Business Metrics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-3">
              <TrendingUp className="w-8 h-8 text-[#3B82F6]" />
              <h3 className="font-general text-xl font-bold uppercase text-white">Faster Time-to-Market</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Compress multi-month development cycles into focused 6-to-10 week release milestones without sacrificing technical quality.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-3">
              <Zap className="w-8 h-8 text-[#3B82F6]" />
              <h3 className="font-general text-xl font-bold uppercase text-white">Automated Ops</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Eliminate manual data entry and routine workflows with custom AI pipelines that operate 24/7 with zero downtime.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-3">
              <ShieldCheck className="w-8 h-8 text-[#3B82F6]" />
              <h3 className="font-general text-xl font-bold uppercase text-white">Zero Tech Debt</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Production codebases written strictly in TypeScript with full test coverage, comprehensive API docs, and clean architecture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION FAQS */}
      <section className="py-20 md:py-28 max-w-4xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col gap-3 mb-12 text-center">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            SOLUTION FAQS
          </span>
          <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
            Frequently Asked Questions
          </h2>
        </div>
        <FAQAccordion items={SOLUTION_FAQS} />
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
