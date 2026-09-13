import { ArrowUpRight, CheckCircle2, Cpu, Shield, Layers } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SERVICES } from "@/lib/data/services";
import { absoluteUrl } from "@/lib/site-config";
import { ItemListJsonLd, FAQPageJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    absolute: "Product Engineering Services | SevenX Labs",
  },
  description:
    "Explore SevenX Labs product engineering services: Web Development, Mobile Apps, AI Development, Custom Software, UI/UX Design, and Cloud DevOps.",
  alternates: {
    canonical: absoluteUrl("/services"),
  },
  openGraph: {
    title: "Product Engineering Services | SevenX Labs",
    description:
      "Explore SevenX Labs product engineering services: Web Development, Mobile Apps, AI Development, Custom Software, UI/UX Design, and Cloud DevOps.",
    url: absoluteUrl("/services"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Engineering Services | SevenX Labs",
    description:
      "Explore SevenX Labs product engineering services: Web Development, Mobile Apps, AI Development, Custom Software, UI/UX Design, and Cloud DevOps.",
  },
};

const SERVICE_FAQS = [
  {
    question: "Which technology stack do you use for full-stack web applications?",
    answer: "We primarily utilize Next.js 16, React 19, TypeScript, Tailwind CSS, FastAPI, Node.js, and PostgreSQL to deliver high-performance web products with sub-second page loads."
  },
  {
    question: "Do you build native or cross-platform mobile apps?",
    answer: "We build native-performance cross-platform applications using React Native and Expo, as well as native iOS (Swift) and Android (Kotlin) apps depending on hardware integration requirements."
  },
  {
    question: "How do you integrate AI models into existing software products?",
    answer: "We design custom RAG pipelines, fine-tune LLMs, build vector databases using PgVector and Pinecone, and expose secure REST/gRPC endpoints for seamless integration."
  },
  {
    question: "What is your code handover and cloud infrastructure deployment process?",
    answer: "We deliver fully containerized Docker image builds, automated GitHub Actions CI/CD pipelines, Terraform infrastructure-as-code manifests, and complete developer documentation."
  }
];

export default function ServicesIndexPage() {
  const serviceList = Object.values(SERVICES);

  const serviceItemList = serviceList.map((srv) => ({
    name: srv.title,
    url: absoluteUrl(`/services/${srv.slug}`),
    description: srv.overview,
  }));

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <ItemListJsonLd
        name="SevenX Labs Engineering Services"
        description="Comprehensive software engineering capabilities including Web, Mobile, AI, and Cloud development."
        itemListElement={serviceItemList}
      />
      <FAQPageJsonLd faqs={SERVICE_FAQS} />
      <Navbar />

      <PageHeader
        badge="OUR CAPABILITIES"
        title="Software Engineering Services Built for Performance & Scale"
        subtitle="We design and engineer high-performance web applications, mobile apps, AI solutions, and custom software for growing businesses."
        breadcrumbs={[{ name: "Services", href: "/services" }]}
      />

      {/* SERVICES GRID */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <div
              key={service.slug}
              className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-md hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between gap-6 group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-blue-50 text-[#3B82F6] border border-blue-100 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full">
                    EXPERT CAPABILITY
                  </span>
                </div>

                <h2 className="font-general text-2xl font-extrabold uppercase text-black group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.overview}
                </p>

                {/* Key deliverables preview */}
                <div className="flex flex-col gap-2 pt-2">
                  {service.whatWeBuild?.slice(0, 3).map((item: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-sans text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`Explore SevenX Labs ${service.title} services`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black group-hover:text-blue-600 transition-colors"
                >
                  <span>Explore Service Details</span>
                  <ArrowUpRight className="w-4 h-4 inline-block ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY OUR ENGINEERING SERVICES STAND OUT */}
      <section className="py-20 bg-black text-white w-full border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col gap-12">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              OUR COMMITMENT
            </span>
            <h2 className="font-general text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight">
              Enterprise Rigor with Startup Speed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-4">
              <Cpu className="w-8 h-8 text-[#3B82F6]" />
              <h3 className="font-general text-xl font-bold uppercase text-white">Sub-Second Speed</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Zero bloated runtime scripts. We optimize server-side rendering, asset delivery, database indexes, and API latency for instant responsiveness.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-4">
              <Shield className="w-8 h-8 text-[#3B82F6]" />
              <h3 className="font-general text-xl font-bold uppercase text-white">Bank-Grade Security</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                SOC2, PCI-DSS, and HIPAA compliance readiness built directly into API endpoints, authentication middleware, and database encryption schemas.
              </p>
            </div>

            <div className="p-8 bg-white/[0.03] border border-white/10 rounded-3xl flex flex-col gap-4">
              <Layers className="w-8 h-8 text-[#3B82F6]" />
              <h3 className="font-general text-xl font-bold uppercase text-white">Modular Scalability</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Decoupled microservice and micro-frontend architectures designed to handle millions of requests without costly refactoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE FAQS */}
      <section className="py-20 md:py-28 max-w-4xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col gap-3 mb-12 text-center">
          <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
            CAPABILITY FAQS
          </span>
          <h2 className="font-general text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-black">
            Questions About Our Services
          </h2>
        </div>
        <FAQAccordion items={SERVICE_FAQS} />
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
