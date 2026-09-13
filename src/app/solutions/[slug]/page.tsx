import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { SOLUTIONS } from "@/lib/data/solutions";
import { SERVICES } from "@/lib/data/services";
import { absoluteUrl } from "@/lib/site-config";

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
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

  const relatedService = SERVICES[sol.relatedServiceSlug];

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <ServiceJsonLd
        name={sol.title}
        description={sol.metaDescription}
        url={absoluteUrl(`/solutions/${sol.slug}`)}
      />

      <Navbar />

      <PageHeader
        badge={`SEVENX LABS SOLUTION — ${sol.title.toUpperCase()}`}
        title={sol.h1}
        subtitle={sol.tagline}
        breadcrumbs={[
          { name: "Solutions", href: "/solutions" },
          { name: sol.title },
        ]}
      />

      {/* OVERVIEW SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              SOLUTION OVERVIEW
            </span>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
              {sol.overview}
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-black/[0.08] shadow-md flex flex-col gap-4">
            <h2 className="font-general text-lg font-bold uppercase text-black">Key Deliverables</h2>
            <ul className="flex flex-col gap-2.5">
              {sol.keyDeliverables.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
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
              Designed for Measurable ROI
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sol.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#FAF9F6] rounded-3xl border border-black/[0.08] flex flex-col gap-3"
              >
                <h3 className="font-general text-xl font-bold uppercase text-black">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IDEAL FOR */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col gap-8">
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
          TARGET ORGANIZATIONS
        </span>
        <h2 className="font-general text-3xl font-extrabold uppercase text-black">Ideal For</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sol.idealFor.map((item, idx) => (
            <div key={idx} className="p-6 bg-white rounded-2xl border border-black/10 font-mono text-sm font-semibold text-zinc-800 shadow-sm flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED SERVICE */}
      {relatedService && (
        <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="p-8 bg-[#0D0D11] text-white rounded-3xl border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2 max-w-xl">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
                POWERED BY CORE SERVICE
              </span>
              <h3 className="font-general text-2xl font-bold uppercase text-white">
                {relatedService.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm">
                Learn more about our underlying engineering capabilities and technology stack.
              </p>
            </div>
            <Link
              href={`/services/${relatedService.slug}`}
              className="px-6 py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-200 transition-colors w-max shrink-0"
            >
              Explore Service ↗
            </Link>
          </div>
        </section>
      )}

      {/* FAQ SECTION */}
      {sol.faqs && sol.faqs.length > 0 && (
        <section className="py-20 max-w-5xl mx-auto px-6 md:px-12 w-full flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase text-black">
              Solution FAQ
            </h2>
          </div>

          <FAQAccordion faqs={sol.faqs} />
        </section>
      )}

      <CTASection />
      <Footer />
    </main>
  );
}
