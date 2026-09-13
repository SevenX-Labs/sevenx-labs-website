import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { ARTICLES } from "@/lib/data/insights";
import { SERVICES } from "@/lib/data/services";
import { absoluteUrl } from "@/lib/site-config";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(ARTICLES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLES[slug];
  if (!article) return {};

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: absoluteUrl(`/insights/${slug}`),
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: absoluteUrl(`/insights/${slug}`),
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ARTICLES[slug];

  if (!article) {
    notFound();
  }

  const relatedService = article.relatedServiceSlug
    ? SERVICES[article.relatedServiceSlug]
    : null;

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <ArticleJsonLd
        headline={article.title}
        description={article.metaDescription}
        url={absoluteUrl(`/insights/${article.slug}`)}
        datePublished={article.publishedAt}
        authorName={article.author.name}
      />

      <Navbar />

      <PageHeader
        badge={`INSIGHTS — ${article.category.toUpperCase()}`}
        title={article.title}
        subtitle={`${article.publishedAt} • ${article.readTime} • By ${article.author.name}`}
        breadcrumbs={[
          { name: "Insights", href: "/insights" },
          { name: article.title },
        ]}
      />

      {/* ARTICLE CONTENT */}
      <section className="py-20 max-w-4xl mx-auto px-6 md:px-12 w-full">
        <div className="bg-white p-8 md:p-14 rounded-3xl border border-black/[0.08] shadow-md flex flex-col gap-8">
          <p className="text-lg font-medium text-slate-800 leading-relaxed italic border-l-4 border-[#3B82F6] pl-6 py-1 bg-blue-50/50 rounded-r-2xl">
            {article.summary}
          </p>

          <div className="prose prose-slate max-w-none prose-headings:font-general prose-headings:uppercase prose-headings:tracking-tight prose-headings:font-bold prose-h3:text-xl prose-h4:text-lg prose-a:text-blue-600 font-sans text-slate-700 leading-relaxed whitespace-pre-line">
            {article.content}
          </div>
        </div>
      </section>

      {/* RELATED SERVICE PROMPT */}
      {relatedService && (
        <section className="pb-20 max-w-4xl mx-auto px-6 md:px-12 w-full">
          <div className="p-8 bg-[#0D0D11] text-white rounded-3xl border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
                NEED HELP IMPLEMENTING THIS?
              </span>
              <h3 className="font-general text-xl font-bold uppercase text-white">
                {relatedService.title} Services
              </h3>
            </div>
            <Link
              href={`/services/${relatedService.slug}`}
              className="px-6 py-3 bg-white text-black font-mono text-xs font-bold uppercase tracking-wider rounded-full hover:bg-zinc-200 transition-colors w-max shrink-0"
            >
              Learn More ↗
            </Link>
          </div>
        </section>
      )}

      <CTASection />
      <Footer />
    </main>
  );
}
