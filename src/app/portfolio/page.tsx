import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";
import { BreadcrumbJsonLd, ItemListJsonLd } from "@/components/seo/JsonLd";
import { CASE_STUDIES } from "@/lib/data/case-studies";
import { absoluteUrl } from "@/lib/site-config";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "Portfolio & Case Studies | SevenX Labs",
  },
  description:
    "Explore our portfolio of high-concurrency web platforms, mobile applications, AI agents, and enterprise cloud solutions engineered by SevenX Labs.",
  alternates: {
    canonical: absoluteUrl("/portfolio"),
  },
  openGraph: {
    title: "Portfolio & Case Studies | SevenX Labs",
    description:
      "Explore our portfolio of high-concurrency web platforms, mobile applications, AI agents, and enterprise cloud solutions engineered by SevenX Labs.",
    url: absoluteUrl("/portfolio"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio & Case Studies | SevenX Labs",
    description:
      "Explore our portfolio of high-concurrency web platforms, mobile applications, AI agents, and enterprise cloud solutions engineered by SevenX Labs.",
  },
};

export default function PortfolioPage() {
  const caseStudyItems = Object.values(CASE_STUDIES).map((study) => ({
    name: study.title,
    url: absoluteUrl(`/portfolio/${study.slug}`),
    description: study.overview,
  }));

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col pt-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: absoluteUrl("/") },
          { name: "Work", item: absoluteUrl("/portfolio") },
        ]}
      />
      <ItemListJsonLd
        name="SevenX Labs Case Studies & Portfolio"
        description="Featured software engineering case studies and technical delivery milestones."
        itemListElement={caseStudyItems}
      />
      <Navbar />
      <Portfolio />
      <Footer />
    </main>
  );
}
