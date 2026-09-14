import { notFound } from "next/navigation";
import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { BreadcrumbJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";
import { SERVICES } from "@/lib/data/services";
import { absoluteUrl } from "@/lib/site-config";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SERVICES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES[slug];
  if (!service) return {};

  return {
    title: { absolute: `${service.metaTitle} | SevenX Labs` },
    description: service.metaDescription,
    alternates: { canonical: absoluteUrl(`/services/${slug}`) },
    openGraph: {
      title: `${service.metaTitle} | SevenX Labs`,
      description: service.metaDescription,
      url: absoluteUrl(`/services/${slug}`),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.metaTitle} | SevenX Labs`,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES[slug];
  if (!service) notFound();

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <FAQPageJsonLd faqs={service.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: absoluteUrl("/") },
          { name: "Services", item: absoluteUrl("/services") },
          { name: service.title, item: absoluteUrl(`/services/${slug}`) },
        ]}
      />
      <Navbar />

      <PageHeader
        badge="ENGINEERING SERVICE"
        title={service.h1}
        subtitle={service.tagline}
        breadcrumbs={[
          { name: "Services", href: "/services" },
          { name: service.title, href: `/services/${slug}` },
        ]}
      />

      {/* OVERVIEW */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="p-8 sm:p-12 bg-white rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-6 max-w-4xl">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            SERVICE OVERVIEW
          </span>
          <p className="text-slate-700 text-base md:text-lg leading-relaxed">
            {service.overview}
          </p>
        </div>
      </section>

      {/* WHAT WE BUILD & CAPABILITIES */}
      <section className="py-20 bg-white border-y border-black/[0.06] w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              CORE DELIVERABLES
            </span>
            <h2 className="font-general text-3xl font-extrabold uppercase text-black">
              What We Engineer
            </h2>
            <ul className="flex flex-col gap-3">
              {service.whatWeBuild.map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <span className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#3B82F6] shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.capabilities.map((cap) => (
              <div key={cap.title} className="p-6 bg-[#FAF9F6] rounded-2xl border border-black/[0.08] flex flex-col gap-3">
                <h3 className="font-general text-base font-bold uppercase text-black">{cap.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col gap-8">
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
          TECHNOLOGY STACK
        </span>
        <div className="flex flex-wrap gap-3">
          {service.technologies.map((tech) => (
            <span key={tech} className="px-4 py-2 bg-white rounded-xl border border-black/[0.08] shadow-sm text-xs font-mono font-bold text-slate-800">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* FAQS */}
      <section className="py-20 max-w-4xl mx-auto px-6 md:px-12 w-full border-t border-black/[0.06]">
        <div className="flex flex-col gap-3 mb-12 text-center">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
            Service FAQ
          </h2>
        </div>
        <FAQAccordion items={service.faqs} />
      </section>

      <CTASection
        title={`READY TO ENGINEER YOUR ${service.title.toUpperCase()} SOLUTION?`}
        description={`Partner with SevenX Labs to design, build, and deploy your ${service.title.toLowerCase()} platform with production reliability.`}
        buttonText="START A PROJECT"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}
