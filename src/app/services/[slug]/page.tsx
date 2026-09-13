import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ServiceJsonLd } from "@/components/seo/JsonLd";
import { SERVICES } from "@/lib/data/services";
import { CASE_STUDIES } from "@/lib/data/case-studies";
import { absoluteUrl } from "@/lib/site-config";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug];
  if (!service) return {};

  const fullTitle = `${service.metaTitle} | SevenX Labs`;

  return {
    title: {
      absolute: fullTitle,
    },
    description: service.metaDescription,
    alternates: {
      canonical: absoluteUrl(`/services/${slug}`),
    },
    openGraph: {
      title: fullTitle,
      description: service.metaDescription,
      url: absoluteUrl(`/services/${slug}`),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES[slug];

  if (!service) {
    notFound();
  }

  const relatedStudies = service.relatedCaseStudySlugs
    .map((csSlug) => CASE_STUDIES[csSlug])
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <ServiceJsonLd
        name={service.title}
        description={service.metaDescription}
        url={absoluteUrl(`/services/${service.slug}`)}
      />

      <Navbar />

      <PageHeader
        badge={`SEVENX LABS SERVICE — ${service.title.toUpperCase()}`}
        title={service.h1}
        subtitle={service.tagline}
        breadcrumbs={[
          { name: "Services", href: "/services" },
          { name: service.title },
        ]}
      />

      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              OVERVIEW
            </span>
            <p className="text-base sm:text-lg md:text-xl text-slate-700 font-medium leading-relaxed">
              {service.overview}
            </p>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-3xl border border-black/[0.08] shadow-md flex flex-col gap-4">
            <h2 className="font-general text-lg font-bold uppercase text-black">What We Build</h2>
            <ul className="flex flex-col gap-2.5">
              {service.whatWeBuild.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-y border-black/[0.06] w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              CAPABILITIES
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
              Engineering Expertise & Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#FAF9F6] rounded-3xl border border-black/[0.08] flex flex-col gap-3"
              >
                <h3 className="font-general text-xl font-bold uppercase text-black">{cap.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col gap-8">
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
          TECHNOLOGY STACK
        </span>
        <div className="flex flex-wrap gap-3">
          {service.technologies.map((tech) => (
            <span
              key={tech}
              className="px-5 py-2.5 bg-white border border-black/10 rounded-full text-xs font-mono font-semibold text-zinc-800 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#0D0D11] text-white w-full border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              OUR METHODOLOGY
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-4"
              >
                <span className="text-3xl font-mono font-bold text-[#3B82F6]">{step.step}</span>
                <h3 className="font-general text-lg font-bold uppercase text-white">{step.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {relatedStudies.length > 0 && (
        <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              REAL WORLD RESULTS
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase text-black">
              Relevant Case Studies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/portfolio/${study.slug}`}
                aria-label={`Read ${study.title} case study`}
                className="group p-8 bg-white rounded-3xl border border-black/[0.08] hover:border-blue-500/40 transition-all flex flex-col gap-4 shadow-sm hover:shadow-xl"
              >
                <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase">
                  {study.category}
                </span>
                <h3 className="font-general text-2xl font-bold uppercase text-black group-hover:text-blue-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{study.overview}</p>
                <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs font-mono font-bold">
                  <span>{study.metric}</span>
                  <span>Read Case Study ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 max-w-5xl mx-auto px-6 md:px-12 w-full flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase text-black">
              Service FAQ
            </h2>
          </div>

          <FAQAccordion faqs={service.faqs} />
        </section>
      )}

      <CTASection />
      <Footer />
    </main>
  );
}
