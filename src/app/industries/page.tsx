import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { INDUSTRIES } from "@/lib/data/industries";
import { absoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Industry Specific Software Solutions | SevenX Labs",
  description:
    "Discover how SevenX Labs delivers specialized software engineering across FinTech, E-Commerce, SaaS, and Startup domains.",
  alternates: {
    canonical: absoluteUrl("/industries"),
  },
};

export default function IndustriesIndexPage() {
  const industryList = Object.values(INDUSTRIES);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <Navbar />

      <PageHeader
        badge="INDUSTRY EXPERTISE"
        title="Software Engineering Tailored to Your Industry Dynamics"
        subtitle="We bring deep domain knowledge in FinTech, E-Commerce, SaaS, and Startup product development."
        breadcrumbs={[{ name: "Industries" }]}
      />

      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industryList.map((ind) => (
            <div
              key={ind.slug}
              className="bg-white p-8 md:p-10 rounded-3xl border border-black/[0.08] shadow-md hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between gap-6 group"
            >
              <div className="flex flex-col gap-4">
                <span className="px-3 py-1 bg-black/[0.04] text-[#3B82F6] text-[10px] font-mono font-bold uppercase tracking-widest rounded-full w-max">
                  INDUSTRY SECTOR
                </span>

                <h2 className="font-general text-2xl md:text-3xl font-extrabold uppercase text-black group-hover:text-blue-600 transition-colors">
                  {ind.title}
                </h2>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {ind.overview}
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
                <Link
                  href={`/industries/${ind.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black group-hover:text-blue-600 transition-colors"
                >
                  <span>Explore Industry</span>
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
