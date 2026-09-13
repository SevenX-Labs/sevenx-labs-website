import { ArrowUpRight } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { INDUSTRIES } from "@/lib/data/industries";
import { CASE_STUDIES } from "@/lib/data/case-studies";
import { absoluteUrl } from "@/lib/site-config";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const ind = INDUSTRIES[slug];
  if (!ind) return {};

  const fullTitle = ind.metaTitle.includes("SevenX Labs")
    ? ind.metaTitle
    : `${ind.metaTitle} | SevenX Labs`;

  return {
    title: { absolute: fullTitle },
    description: ind.metaDescription,
    alternates: {
      canonical: absoluteUrl(`/industries/${slug}`),
    },
    openGraph: {
      title: fullTitle,
      description: ind.metaDescription,
      url: absoluteUrl(`/industries/${slug}`),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: ind.metaDescription,
    },
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const ind = INDUSTRIES[slug];

  if (!ind) {
    notFound();
  }

  const relatedStudies = ind.caseStudySlugs
    .map((csSlug) => CASE_STUDIES[csSlug])
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <ServiceJsonLd
        name={ind.title}
        description={ind.metaDescription}
        url={absoluteUrl(`/industries/${ind.slug}`)}
      />

      <Navbar />

      <PageHeader
        badge={`SEVENX LABS INDUSTRY — ${ind.title.toUpperCase()}`}
        title={ind.h1}
        subtitle={ind.tagline}
        breadcrumbs={[
          { name: "Industries", href: "/industries" },
          { name: ind.title },
        ]}
      />

      {/* OVERVIEW */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="flex flex-col gap-6 max-w-3xl">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            INDUSTRY OVERVIEW
          </span>
          <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
            {ind.overview}
          </p>
        </div>
      </section>

      {/* CHALLENGES SOLVED */}
      <section className="py-20 bg-white border-y border-black/[0.06] w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              DOMAIN CHALLENGES
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
              Problems We Solve in {ind.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ind.challengesSolved.map((item, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#FAF9F6] rounded-3xl border border-black/[0.08] flex flex-col gap-4"
              >
                <span className="text-xs font-mono font-bold text-red-600 uppercase">
                  CHALLENGE: {item.challenge}
                </span>
                <p className="text-slate-700 text-sm leading-relaxed font-medium">
                  <span className="font-bold text-black">OUR SOLUTION: </span>
                  {item.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY CAPABILITIES */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col gap-8">
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
          INDUSTRY CAPABILITIES
        </span>
        <h2 className="font-general text-3xl font-extrabold uppercase text-black">What We Deliver</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ind.keyCapabilities.map((cap, idx) => (
            <div key={idx} className="p-5 bg-white rounded-2xl border border-black/10 text-sm font-semibold text-zinc-800 shadow-sm flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      {relatedStudies.length > 0 && (
        <section className="py-20 bg-[#0D0D11] text-white w-full border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12">
            <div className="flex flex-col gap-3 max-w-2xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
                CASE STUDIES
              </span>
              <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
                {ind.title} Client Success
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedStudies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/portfolio/${study.slug}`}
                  className="group p-8 bg-white/[0.03] border border-white/10 hover:border-blue-500/40 rounded-3xl transition-all flex flex-col gap-4"
                >
                  <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase">
                    {study.category}
                  </span>
                  <h3 className="font-general text-2xl font-bold uppercase text-white group-hover:text-blue-400 transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{study.overview}</p>
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono font-bold text-zinc-300">
                    <span>{study.metric}</span>
                    <span className="inline-flex items-center gap-1">Read Case Study <ArrowUpRight className="w-3.5 h-3.5" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
      <Footer />
    </main>
  );
}
