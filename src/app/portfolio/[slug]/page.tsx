import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { CASE_STUDIES } from "@/lib/data/case-studies";
import { absoluteUrl } from "@/lib/site-config";
import { ArrowUpRight, CheckCircle2, Layers, Cpu, Server, Sparkles } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES[slug];
  if (!cs) return {};

  return {
    title: { absolute: `${cs.metaTitle}` },
    description: cs.metaDescription,
    alternates: { canonical: absoluteUrl(`/portfolio/${slug}`) },
    openGraph: {
      title: cs.metaTitle,
      description: cs.metaDescription,
      url: absoluteUrl(`/portfolio/${slug}`),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: cs.metaTitle,
      description: cs.metaDescription,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const cs = CASE_STUDIES[slug];
  if (!cs) notFound();

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: absoluteUrl("/") },
          { name: "Work", item: absoluteUrl("/portfolio") },
          { name: cs.title, item: absoluteUrl(`/portfolio/${slug}`) },
        ]}
      />
      <Navbar />

      <PageHeader
        badge={`CASE STUDY — ${cs.category.toUpperCase()}`}
        title={cs.title.toUpperCase()}
        subtitle={cs.subtitle}
        breadcrumbs={[
          { name: "Work", href: "/portfolio" },
          { name: cs.title, href: `/portfolio/${slug}` },
        ]}
      />

      {/* OVERVIEW & CONTEXT */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 p-8 sm:p-12 bg-white rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              PROJECT OVERVIEW
            </span>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {cs.overview}
            </p>
          </div>

          <div className="lg:col-span-4 p-8 bg-[#0D0D11] text-white rounded-3xl border border-white/10 shadow-lg flex flex-col gap-6">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#60A5FA]">
              ENGINEERING CONTRIBUTION
            </span>
            <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed font-normal">
              {cs.contribution}
            </p>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500">PRIMARY CATEGORY</span>
              <span className="text-xs font-mono font-bold text-white">{cs.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE VS SOLUTION */}
      <section className="py-20 bg-white border-y border-black/[0.06] w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF9F6] border border-black/[0.08] flex flex-col gap-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-red-600">
              THE TECHNICAL CHALLENGE
            </span>
            <h2 className="font-general text-2xl font-bold uppercase text-black">
              Architectural Constraints
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              {cs.challenge}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#FAF9F6] border border-blue-200/80 flex flex-col gap-4">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              THE SEVENX SOLUTION
            </span>
            <h2 className="font-general text-2xl font-bold uppercase text-black">
              Engineered Execution
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
              {cs.solution}
            </p>
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE & FEATURES */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            SYSTEM DESIGN & ARCHITECTURE
          </span>
          <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
            Production Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-5">
            <h3 className="font-general text-lg font-bold uppercase text-black">Architectural Foundations</h3>
            <ul className="flex flex-col gap-4">
              {cs.architecture.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-[#3B82F6] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 gap-4">
            {cs.features.map((feat, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-black/[0.08] shadow-sm flex flex-col gap-2">
                <h4 className="font-general text-base font-bold uppercase text-black">{feat.title}</h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERED OUTCOMES (QUALITATIVE & VERIFIABLE) */}
      <section className="py-20 bg-zinc-950 text-white w-full border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#60A5FA]">
              ENGINEERING OUTCOMES
            </span>
            <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
              Delivered Performance & Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cs.outcomes.map((outcome, idx) => (
              <div key={idx} className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-3">
                <span className="w-2 h-2 rounded-full bg-[#60A5FA]" />
                <h3 className="font-general text-lg font-bold uppercase text-white">{outcome.title}</h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-normal">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES USED */}
      <section className="py-16 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col gap-6">
        <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
          TECHNOLOGIES UTILIZED
        </span>
        <div className="flex flex-wrap gap-2.5">
          {cs.technologies.map((tech) => (
            <span key={tech} className="px-4 py-2 bg-white rounded-xl border border-black/[0.08] shadow-sm text-xs font-mono font-bold text-slate-800">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CONTEXTUAL INTERNAL LINKS */}
      <section className="py-16 bg-white border-t border-black/[0.06] w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col gap-4 max-w-md">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              RELATED CAPABILITIES
            </span>
            <h3 className="font-general text-xl font-bold uppercase text-black">Explore Underlying Services</h3>
            <div className="flex flex-wrap gap-3">
              {cs.relatedServices.map((svc) => (
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

          <div className="flex flex-col gap-4 max-w-md">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              RELATED SOLUTIONS
            </span>
            <h3 className="font-general text-xl font-bold uppercase text-black">Explore Strategic Solutions</h3>
            <div className="flex flex-wrap gap-3">
              {cs.relatedSolutions.map((sol) => (
                <Link
                  key={sol.slug}
                  href={`/solutions/${sol.slug}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#FAF9F6] hover:bg-blue-50 text-slate-800 hover:text-[#3B82F6] border border-black/[0.08] hover:border-blue-200 rounded-xl text-xs font-mono font-bold uppercase transition-colors group"
                >
                  <span>{sol.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="READY TO ENGINEER YOUR NEXT PRODUCT?"
        description="Partner with SevenX Labs to build production-grade web platforms, mobile applications, and AI systems."
        buttonText="START A PROJECT"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}
