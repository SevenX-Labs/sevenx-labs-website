import { ArrowUpRight, CheckCircle2, Lock, Globe2, Building2 } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { INDUSTRIES } from "@/lib/data/industries";
import { absoluteUrl } from "@/lib/site-config";
import { ItemListJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "Industry Specific Software Solutions | SevenX Labs",
  },
  description:
    "Discover how SevenX Labs delivers specialized software engineering across FinTech, E-Commerce, SaaS, and Startup domains.",
  alternates: {
    canonical: absoluteUrl("/industries"),
  },
  openGraph: {
    title: "Industry Specific Software Solutions | SevenX Labs",
    description:
      "Discover how SevenX Labs delivers specialized software engineering across FinTech, E-Commerce, SaaS, and Startup domains.",
    url: absoluteUrl("/industries"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industry Specific Software Solutions | SevenX Labs",
    description:
      "Discover how SevenX Labs delivers specialized software engineering across FinTech, E-Commerce, SaaS, and Startup domains.",
  },
};

const INDUSTRY_FAQS = [
  {
    question: "How do you ensure data security and compliance for FinTech software?",
    answer: "We integrate end-to-end TLS encryption, field-level database encryption, SOC2 Type II compliance controls, PCI-DSS payment tokenization, and strict OAuth2/OIDC identity management."
  },
  {
    question: "How do you build E-Commerce platforms that handle traffic spikes during sales events?",
    answer: "We utilize serverless API edge caching, CDN asset distribution, distributed Redis session caching, and decoupled headless checkout flows that scale horizontally on Kubernetes."
  },
  {
    question: "Do you offer post-launch maintenance for industry applications?",
    answer: "Yes, we provide SLA-backed SRE support, 24/7 uptime monitoring, vulnerability patching, database optimization, and continuous feature expansion contracts."
  }
];

export default function IndustriesIndexPage() {
  const industryList = Object.values(INDUSTRIES);

  const industryItemList = industryList.map((ind) => ({
    name: ind.title,
    url: absoluteUrl(`/industries/${ind.slug}`),
    description: ind.overview,
  }));

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <ItemListJsonLd
        name="SevenX Labs Industry Solutions"
        description="Specialized software engineering across FinTech, E-Commerce, SaaS, and Startups."
        itemListElement={industryItemList}
      />
      <FAQPageJsonLd faqs={INDUSTRY_FAQS} />
      <Navbar />

      <PageHeader
        badge="INDUSTRY EXPERTISE"
        title="Software Engineering Tailored to Your Industry Dynamics"
        subtitle="We bring deep domain knowledge in FinTech, E-Commerce, SaaS, and Startup product development."
        breadcrumbs={[{ name: "Industries", href: "/industries" }]}
      />

      {/* INDUSTRIES GRID */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industryList.map((ind) => (
            <div
              key={ind.slug}
              className="bg-white p-8 md:p-10 rounded-3xl border border-black/[0.08] shadow-md hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between gap-6 group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-50 text-[#3B82F6] border border-blue-100 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full">
                    DOMAIN FOCUS
                  </span>
                </div>

                <h2 className="font-general text-2xl md:text-3xl font-extrabold uppercase text-black group-hover:text-blue-600 transition-colors">
                  {ind.title}
                </h2>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {ind.cardTeaser}
                </p>

                {/* Key capabilities preview */}
                <div className="flex flex-col gap-2 pt-2">
                  {ind.keyCapabilities?.slice(0, 3).map((cap: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-sans text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
                <Link
                  href={`/industries/${ind.slug}`}
                  aria-label={`Explore SevenX Labs ${ind.title} industry solutions`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black group-hover:text-blue-600 transition-colors"
                >
                  <span>Explore Industry Focus</span>
                  <ArrowUpRight className="w-4 h-4 inline-block ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DOMAIN EXCELLENCE STRIP */}
      <section className="py-20 bg-zinc-950 text-white w-full border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              SPECIALIZED KNOWLEDGE
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              Domain Mastery That Prevents Costly Rework
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-3">
              <Lock className="w-8 h-8 text-[#3B82F6]" />
              <h3 className="font-general text-xl font-bold uppercase text-white">Regulatory Readiness</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                We understand compliance framework requirements upfront so architecture passes security audits on the first run.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-3">
              <Globe2 className="w-8 h-8 text-[#3B82F6]" />
              <h3 className="font-general text-xl font-bold uppercase text-white">Global Edge Networks</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Multi-region database replication and CDN routing to serve international userbases with minimal latency.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-3">
              <Building2 className="w-8 h-8 text-[#3B82F6]" />
              <h3 className="font-general text-xl font-bold uppercase text-white">Enterprise Scalability</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Built to handle enterprise SLAs, heavy data workloads, and high transactional concurrency reliably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY FAQS */}
      <section className="py-20 md:py-28 max-w-4xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col gap-3 mb-12 text-center">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            INDUSTRY FAQS
          </span>
          <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
            Domain Questions & Answers
          </h2>
        </div>
        <FAQAccordion items={INDUSTRY_FAQS} />
      </section>

      <CTASection title="SPECIALIZED SOFTWARE ENGINEERING FOR YOUR SECTOR" description="Discover how our domain-focused engineering teams solve sector-specific performance, data security, and scaling challenges." buttonText="DISCUSS YOUR INDUSTRY ROADMAP" buttonHref="/contact" />
      <Footer />
    </main>
  );
}
