import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ServiceJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { SOLUTIONS } from "@/lib/data/solutions";
import { absoluteUrl } from "@/lib/site-config";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import React from "react";

interface SolutionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(SOLUTIONS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const sol = SOLUTIONS[slug];
  if (!sol) return {};

  const fullTitle = sol.metaTitle.includes("SevenX Labs")
    ? sol.metaTitle
    : `${sol.metaTitle} | SevenX Labs`;

  return {
    title: { absolute: fullTitle },
    description: sol.metaDescription,
    alternates: {
      canonical: absoluteUrl(`/solutions/${slug}`),
    },
    openGraph: {
      title: fullTitle,
      description: sol.metaDescription,
      url: absoluteUrl(`/solutions/${slug}`),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: sol.metaDescription,
    },
  };
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const sol = SOLUTIONS[slug];

  if (!sol) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <FAQPageJsonLd faqs={sol.faqs} />
      <ServiceJsonLd
        name={sol.title}
        description={sol.metaDescription}
        url={absoluteUrl(`/solutions/${sol.slug}`)}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: absoluteUrl("/") },
          { name: "Solutions", item: absoluteUrl("/solutions") },
          { name: sol.title, item: absoluteUrl(`/solutions/${slug}`) },
        ]}
      />

      <Navbar />

      <PageHeader
        badge={`SEVENX LABS SOLUTION — ${sol.title.toUpperCase()}`}
        title={sol.h1}
        subtitle={sol.tagline}
        breadcrumbs={[
          { name: "Solutions", href: "/solutions" },
          { name: sol.title, href: `/solutions/${slug}` },
        ]}
      />

      {/* OVERVIEW SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              SOLUTION OVERVIEW
            </span>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 font-normal leading-relaxed">
              {sol.overview}
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-black/[0.08] shadow-md flex flex-col gap-5">
            <h2 className="font-general text-lg font-bold uppercase text-black">Key Deliverables</h2>
            <ul className="flex flex-col gap-3">
              {sol.keyDeliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700 font-medium leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 bg-white border-y border-black/[0.06] w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              FEATURES & ADVANTAGES
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
              Designed for Measurable Business Value
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sol.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#FAF9F6] rounded-3xl border border-black/[0.08] flex flex-col gap-3 hover:border-blue-200 transition-all duration-300"
              >
                <h3 className="font-general text-xl font-bold uppercase text-black">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-normal">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            TARGET ORGANIZATIONS
          </span>
          <h2 className="font-general text-3xl font-extrabold uppercase text-black">Ideal For</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sol.idealFor.map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl border border-black/10 font-mono text-xs sm:text-sm font-semibold text-zinc-800 shadow-sm flex items-start gap-3 leading-relaxed">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6] shrink-0 mt-1.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTEXTUAL INTERNAL LINKS: RELATED SERVICES */}
      {sol.relatedServices && sol.relatedServices.length > 0 && (
        <section className="py-16 bg-white border-y border-black/[0.06] w-full">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
                COMPLEMENTARY CAPABILITIES
              </span>
              <h3 className="font-general text-xl font-bold uppercase text-black">Related Engineering Services</h3>
              <div className="flex flex-wrap gap-3">
                {sol.relatedServices.map((svc) => (
                  <Link
                    key={svc.slug}
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FAF9F6] hover:bg-blue-50 text-slate-800 hover:text-[#3B82F6] border border-black/[0.08] hover:border-blue-200 rounded-xl text-xs font-mono font-bold uppercase transition-colors group"
                  >
                    <span>{svc.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 max-w-sm">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-slate-500">
                PORTFOLIO &amp; WORK
              </span>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-mono font-bold uppercase text-black hover:text-[#3B82F6] transition-colors"
              >
                <span>Explore Featured Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* FAQ SECTION */}
      {sol.faqs && sol.faqs.length > 0 && (
        <section className="py-20 max-w-4xl mx-auto px-6 md:px-12 w-full flex flex-col gap-10">
          <div className="flex flex-col gap-3 text-center">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase text-black">
              Solution FAQ
            </h2>
          </div>

          <FAQAccordion items={sol.faqs} />
        </section>
      )}

      <CTASection
        title={`READY TO ACCELERATE YOUR ${sol.title.toUpperCase()} ROADMAP?`}
        description={`Partner with SevenX Labs to map the fastest technical path to building and scaling your ${sol.title.toLowerCase()} solution.`}
        buttonText="START A PROJECT"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}
