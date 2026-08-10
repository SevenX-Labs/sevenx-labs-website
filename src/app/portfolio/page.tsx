import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import React from "react";

export const metadata = {
  title: "Portfolio & Case Studies | SevenX Labs",
  description:
    "Explore our portfolio of high-concurrency web platforms, mobile applications, AI agents, and enterprise cloud solutions engineered by SevenX Labs.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col pt-16">
      <Navbar />
      <Portfolio />
    </main>
  );
}
