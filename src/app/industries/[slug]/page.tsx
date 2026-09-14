import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { INDUSTRIES } from "@/lib/data/industries";
import { absoluteUrl } from "@/lib/site-config";
import Link from "next/link";
import { ArrowUpRight, Check, ShieldCheck } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = INDUSTRIES[slug];
  if (!ind) return {};

  return {
    title: { absolute: `${ind.metaTitle}` },
    description: ind.metaDescription,
    alternates: { canonical: absoluteUrl(`/industries/${slug}`) },
    openGraph: {
      title: `${ind.metaTitle}`,
      description: ind.metaDescription,
      url: absoluteUrl(`/industries/${slug}`),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${ind.metaTitle}`,
      description: ind.metaDescription,
    },
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const ind = INDUSTRIES[slug];
  if (!ind) notFound();

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: absoluteUrl("/") },
          { name: "Industries", item: absoluteUrl("/industries") },
          { name: ind.title, item: absoluteUrl(`/industries/${slug}`) },
        ]}
      />
      <Navbar />

      <PageHeader
        badge="INDUSTRY DOMAIN FOCUS"
        title={ind.h1}
        subtitle={ind.tagline}
        breadcrumbs={[
          { name: "Industries", href: "/industries" },
          { name: ind.title, href: `/industries/${slug}` },
        ]}
      />

      {/* OVERVIEW */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="p-8 sm:p-12 bg-white rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-6 max-w-4xl">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            DOMAIN OVERVIEW
          </span>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            {ind.overview}
          </p>
        </div>
      </section>

      {/* CHALLENGES SOLVED & CAPABILITIES */}
      <section className="py-20 bg-white border-y border-black/[0.06] w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              DOMAIN CHALLENGES & SOLUTIONS
            </span>
            <h2 className="font-general text-3xl font-extrabold uppercase text-black">
              Engineering Domain Solutions
            </h2>

            <div className="flex flex-col gap-6">
              {ind.challengesSolved.map((item) => (
                <div key={item.challenge} className="p-6 bg-[#FAF9F6] rounded-2xl border border-black/[0.08] flex flex-col gap-3">
                  <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase tracking-wider">
                    CHALLENGE: {item.challenge}
                  </span>
                  <p className="text-slate-700 text-xs leading-relaxed font-medium">
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              KEY CAPABILITIES
            </span>
            <h2 className="font-general text-3xl font-extrabold uppercase text-black">
              Sector Technical Scope
            </h2>
            <ul className="flex flex-col gap-3">
              {ind.keyCapabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-3 text-slate-700 text-sm font-medium p-3 bg-[#FAF9F6] rounded-xl border border-black/[0.06]">
                  <ShieldCheck className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title={`ENGINEER YOUR ${ind.title.toUpperCase()} PLATFORM`}
        description={`Partner with SevenX Labs to build secure, high-concurrency software tailored for the ${ind.title.toLowerCase()} domain.`}
        buttonText="SCHEDULE A CONSULTATION"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}
