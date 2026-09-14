import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ItemListJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { SOLUTIONS } from "@/lib/data/solutions";
import { absoluteUrl } from "@/lib/site-config";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, TrendingUp, Zap, ShieldCheck, HelpCircle } from "lucide-react";

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
    answer: "We isolate tenant data using either dedicated schemas or row-level security policies depending on your compliance requirements, and integrate subscription billing through Stripe or Paddle — including tiered plans, usage-based metering, and automated invoicing — so your platform can scale from a handful of pilot accounts to thousands of paying tenants without a billing-logic rewrite."
  },
  {
    question: "Can SevenX Labs integrate AI automation into legacy backend systems?",
    answer: "Yes. We typically connect automation pipelines to legacy systems through a middleware API layer rather than modifying the legacy codebase directly, which lets us add document processing, workflow orchestration, or AI-driven data extraction without disrupting systems that are already in production."
  }
];

const FIT_MATRIX = [
  {
    condition: "Launching something new and need to validate demand fast",
    target: "MVP Development",
    slug: "mvp-development"
  },
  {
    condition: "Already have paying customers and need to scale to more tenants",
    target: "SaaS Development",
    slug: "saas-development"
  },
  {
    condition: "Buried in manual, repetitive operational work",
    target: "AI Automation",
    slug: "ai-automation"
  },
  {
    condition: "Running on legacy systems that are limiting growth",
    target: "Digital Transformation",
    slug: "digital-transformation"
  }
];

export default function SolutionsIndexPage() {
  const solutionList = Object.values(SOLUTIONS);

  const solutionItemList = solutionList.map((sol) => ({
    name: sol.title,
    url: absoluteUrl(`/solutions/${sol.slug}`),
    description: sol.cardTeaser || sol.overview,
  }));

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <ItemListJsonLd
        name="SevenX Labs Engineering Solutions"
        description="High-impact software solutions tailored for business growth."
        itemListElement={solutionItemList}
      />
      <FAQPageJsonLd faqs={SOLUTION_FAQS} />
      <Navbar />

      <PageHeader
        badge="BUSINESS SOLUTIONS"
        title="High-Impact Software Solutions Tailored to Your Growth Strategy"
        subtitle="Whether launching a new SaaS platform, building an investor-ready MVP, or automating operations, our solutions deliver rapid ROI."
        breadcrumbs={[{ name: "Solutions", href: "/solutions" }]}
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
                  {sol.cardTeaser || sol.overview}
                </p>

                {/* Key deliverables preview */}
                <div className="flex flex-col gap-2 pt-2">
                  {sol.keyDeliverables?.slice(0, 4).map((deliv: string, idx: number) => (
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

      {/* NEW SECTION — WHICH SOLUTION FITS WHERE YOU ARE? */}
      <section className="py-20 bg-white border-y border-black/[0.06] w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              SOLUTION SELECTION GUIDE
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
              Which Solution Fits Where You Are?
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-black/[0.1] text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  <th className="py-4 px-6 w-2/3">If you&apos;re...</th>
                  <th className="py-4 px-6 w-1/3">Start here</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.06] text-sm md:text-base text-slate-800">
                {FIT_MATRIX.map((row) => (
                  <tr key={row.slug} className="hover:bg-[#FAF9F6] transition-colors">
                    <td className="py-5 px-6 font-medium text-slate-700">{row.condition}</td>
                    <td className="py-5 px-6">
                      <Link
                        href={`/solutions/${row.slug}`}
                        className="inline-flex items-center gap-1.5 font-mono font-bold text-xs uppercase tracking-wider text-[#3B82F6] hover:text-blue-700 transition-colors group"
                      >
                        <span>{row.target}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
                Eliminate manual data entry and routine workflows with custom AI pipelines engineered for continuous, always-on operation.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-3">
              <ShieldCheck className="w-8 h-8 text-[#3B82F6]" />
              <h3 className="font-general text-xl font-bold uppercase text-white">Built to Last</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Production codebases written in TypeScript with strong test coverage, clear API documentation, and clean, modular architecture that keeps future maintenance costs low.
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

      <CTASection
        title="NOT SURE WHICH SOLUTION FITS?"
        description="Tell us where growth is being held back — your product, your operations, or your infrastructure — and we'll map the fastest path to fixing it."
        buttonText="START YOUR PROJECT"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}
