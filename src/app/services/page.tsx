import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { SERVICES } from "@/lib/data/services";
import { absoluteUrl } from "@/lib/site-config";

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

export default function ServicesIndexPage() {
  const serviceList = Object.values(SERVICES);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <Navbar />

      <PageHeader
        badge="OUR CAPABILITIES"
        title="Software Engineering Services Built for Performance & Scale"
        subtitle="We design and engineer high-performance web applications, mobile apps, AI solutions, and custom software for growing businesses."
        breadcrumbs={[{ name: "Services" }]}
      />

      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <div
              key={service.slug}
              className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-md hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between gap-6 group"
            >
              <div className="flex flex-col gap-4">
                <span className="px-3 py-1 bg-black/[0.04] text-[#3B82F6] text-[10px] font-mono font-bold uppercase tracking-widest rounded-full w-max">
                  EXPERT CAPABILITY
                </span>

                <h2 className="font-general text-2xl font-extrabold uppercase text-black group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.overview}
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
                <Link
                  href={`/services/${service.slug}`}
                  aria-label={`Explore SevenX Labs ${service.title} services`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black group-hover:text-blue-600 transition-colors"
                >
                  <span>Explore Service</span>
                  <span>↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
