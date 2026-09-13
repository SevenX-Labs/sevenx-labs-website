import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { SOLUTIONS } from "@/lib/data/solutions";
import { absoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Targeted Engineering Solutions | SevenX Labs",
  },
  description:
    "Explore SevenX Labs specialized engineering solutions: SaaS Development, MVP Development, AI Automation, and Enterprise Digital Transformation.",
  alternates: {
    canonical: absoluteUrl("/solutions"),
  },
  openGraph: {
    title: "Targeted Engineering Solutions | SevenX Labs",
    description:
      "Explore SevenX Labs specialized engineering solutions: SaaS Development, MVP Development, AI Automation, and Enterprise Digital Transformation.",
    url: absoluteUrl("/solutions"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Targeted Engineering Solutions | SevenX Labs",
    description:
      "Explore SevenX Labs specialized engineering solutions: SaaS Development, MVP Development, AI Automation, and Enterprise Digital Transformation.",
  },
};

export default function SolutionsIndexPage() {
  const solutionList = Object.values(SOLUTIONS);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <Navbar />

      <PageHeader
        badge="BUSINESS SOLUTIONS"
        title="High-Impact Software Solutions Tailored to Your Growth Strategy"
        subtitle="Whether launching a new SaaS platform, building an investor-ready MVP, or automating operations, our solutions deliver rapid ROI."
        breadcrumbs={[{ name: "Solutions" }]}
      />

      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutionList.map((sol) => (
            <div
              key={sol.slug}
              className="bg-white p-8 md:p-10 rounded-3xl border border-black/[0.08] shadow-md hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between gap-6 group"
            >
              <div className="flex flex-col gap-4">
                <span className="px-3 py-1 bg-black/[0.04] text-[#3B82F6] text-[10px] font-mono font-bold uppercase tracking-widest rounded-full w-max">
                  SOLUTION AREA
                </span>

                <h2 className="font-general text-2xl md:text-3xl font-extrabold uppercase text-black group-hover:text-blue-600 transition-colors">
                  {sol.title}
                </h2>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                  {sol.overview}
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between">
                <Link
                  href={`/solutions/${sol.slug}`}
                  aria-label={`Explore SevenX Labs ${sol.title} solution`}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-black group-hover:text-blue-600 transition-colors"
                >
                  <span>Explore Solution</span>
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
