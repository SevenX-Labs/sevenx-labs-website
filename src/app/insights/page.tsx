import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { ARTICLES } from "@/lib/data/insights";
import { absoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "SevenX Insights | Software Architecture & Engineering Blog",
  description:
    "Technical insights, engineering breakdowns, and architecture guides on AI, Web, Mobile, SaaS, and Custom Software engineering from SevenX Labs.",
  alternates: {
    canonical: absoluteUrl("/insights"),
  },
};

export default function InsightsIndexPage() {
  const articlesList = Object.values(ARTICLES);

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <Navbar />

      <PageHeader
        badge="SEVENX INSIGHTS"
        title="Engineering Insights, AI Guides & Tech Architecture"
        subtitle="Practical guides and technical analysis written by our product engineering team. Real value, zero fluff."
        breadcrumbs={[{ name: "Insights" }]}
      />

      {/* ARTICLES GRID */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesList.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="bg-white p-8 rounded-3xl border border-black/[0.08] shadow-md hover:shadow-xl hover:border-blue-500/40 transition-all duration-300 flex flex-col justify-between gap-6 group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-[10px] font-mono font-bold uppercase tracking-widest rounded-full">
                    {article.category}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">
                    {article.readTime}
                  </span>
                </div>

                <h2 className="font-general text-xl font-bold uppercase text-black group-hover:text-blue-600 transition-colors line-clamp-2">
                  {article.title}
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between text-xs font-mono font-bold">
                <span className="text-zinc-500">{article.publishedAt}</span>
                <span className="group-hover:text-blue-600 transition-colors">Read Article ↗</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
