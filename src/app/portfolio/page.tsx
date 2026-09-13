import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";
import { absoluteUrl } from "@/lib/site-config";
import React from "react";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | SevenX Labs",
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
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col pt-16">
      <Navbar />
      <Portfolio />
      <Footer />
    </main>
  );
}
