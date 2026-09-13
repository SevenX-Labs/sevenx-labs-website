import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { CASE_STUDIES } from "@/lib/data/case-studies";
import { absoluteUrl } from "@/lib/site-config";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];
  if (!study) return {};

  const fullTitle = study.metaTitle.includes("SevenX Labs") ? study.metaTitle : `${study.metaTitle} | SevenX Labs`;

  return {
    title: {
      absolute: fullTitle,
    },
    description: study.metaDescription,
    alternates: {
      canonical: absoluteUrl(`/portfolio/${slug}`),
    },
    openGraph: {
      title: fullTitle,
      description: study.metaDescription,
      url: absoluteUrl(`/portfolio/${slug}`),
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: study.metaDescription,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = CASE_STUDIES[slug];

  if (!study) {
    notFound();
  }

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: study.title,
    description: study.metaDescription,
    url: absoluteUrl(`/portfolio/${study.slug}`),
    creator: {
      "@type": "Organization",
      name: "SevenX Labs",
    },
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <JsonLd data={creativeWorkSchema} />
      <Navbar />

      <PageHeader
        badge={`CASE STUDY — ${study.category.toUpperCase()}`}
        title={study.title}
        subtitle={study.subtitle}
        breadcrumbs={[
          { name: "Portfolio", href: "/portfolio" },
          { name: study.title },
        ]}
      />

      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full -mt-8 relative z-20">
        <div className="bg-white rounded-3xl p-4 sm:p-6 border border-black/[0.08] shadow-2xl flex flex-col gap-6">
          <div className="relative w-full h-[300px] sm:h-[450px] md:h-[550px] rounded-2xl overflow-hidden bg-slate-900">
            <Image
              src={study.image}
              alt={study.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-top"
              priority
            />
            <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-xs font-mono font-bold text-blue-600 shadow-lg flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
              <span>RESULT: {study.metric}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 bg-[#FAF9F6] rounded-2xl border border-black/[0.06]">
            {study.results.map((res, idx) => (
              <div key={idx} className="flex flex-col gap-1 text-center sm:text-left">
                <span className="font-general text-3xl md:text-4xl font-extrabold text-blue-600">
                  {res.stat}
                </span>
                <span className="text-xs font-mono font-semibold text-zinc-600 uppercase">
                  {res.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
                PROJECT OVERVIEW
              </span>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                {study.overview}
              </p>
            </div>

            <div className="flex flex-col gap-4 p-8 bg-white rounded-3xl border border-black/[0.08] shadow-sm">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-red-600">
                THE CHALLENGE
              </span>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{study.challenge}</p>
            </div>

            <div className="flex flex-col gap-4 p-8 bg-white rounded-3xl border border-black/[0.08] shadow-sm">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-emerald-600">
                THE OBJECTIVE
              </span>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">{study.objective}</p>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
                THE SOLUTION
              </span>
              <p className="text-slate-700 text-base leading-relaxed font-normal">{study.solution}</p>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="p-8 bg-white rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase">CATEGORY</span>
                <span className="font-general text-lg font-bold text-black">{study.category}</span>
              </div>

              {study.relatedIndustry && (
                <div className="flex flex-col gap-2 pt-4 border-t border-black/5">
                  <span className="text-xs font-mono font-bold text-zinc-400 uppercase">INDUSTRY SECTOR</span>
                  <Link
                    href={`/industries/${study.relatedIndustry.slug}`}
                    className="text-xs font-bold font-mono text-blue-600 hover:underline flex items-center gap-1"
                  >
                    <span>{study.relatedIndustry.title}</span>
                    <span>↗</span>
                  </Link>
                </div>
              )}

              <div className="flex flex-col gap-2 pt-4 border-t border-black/5">
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase">SEVENX DELIVERED</span>
                <span className="text-xs text-slate-600 leading-relaxed font-medium">
                  {study.contribution}
                </span>
              </div>

              <div className="flex flex-col gap-2 pt-4 border-t border-black/5">
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase">TECHNOLOGIES</span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {study.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 bg-black/[0.04] text-zinc-800 text-[10px] font-mono font-semibold rounded-full border border-black/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-black/[0.06] w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-10">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              SYSTEM DESIGN
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase text-black">
              Technical Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {study.architecture.map((arch, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#FAF9F6] rounded-2xl border border-black/[0.08] flex items-start gap-4"
              >
                <span className="w-8 h-8 rounded-full bg-blue-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                  0{idx + 1}
                </span>
                <p className="text-slate-700 text-sm font-medium leading-relaxed">{arch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {study.relatedServices && study.relatedServices.length > 0 && (
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col gap-8">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            RELATED SERVICES
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {study.relatedServices.map((srv) => (
              <Link
                key={srv.slug}
                href={`/services/${srv.slug}`}
                aria-label={`Explore SevenX ${srv.title} service`}
                className="p-6 bg-white rounded-2xl border border-black/10 hover:border-blue-500/40 transition-all font-general text-base font-bold uppercase text-black flex items-center justify-between shadow-sm group"
              >
                <span>{srv.title}</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CTASection
        title="Have a Similar Product in Mind?"
        description="Let's engineer a solution that delivers verified results for your business."
      />
      <Footer />
    </main>
  );
}
