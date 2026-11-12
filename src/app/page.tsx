import type { Metadata } from "next";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import HowWeWork from "@/components/howwework";
import WhySevenX from "@/components/whysevenx";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ItemListJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { SERVICES } from "@/lib/data/services";
import { SITE_CONFIG, absoluteUrl } from "@/lib/site-config";

const homeTitle = "SevenX Labs | Custom Software, Web & AI Engineering";

export const metadata: Metadata = {
  title: { absolute: homeTitle },
  description: SITE_CONFIG.description,
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    title: homeTitle,
    description: SITE_CONFIG.description,
    url: absoluteUrl("/"),
    siteName: SITE_CONFIG.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: SITE_CONFIG.description,
  },
};

export default function Home() {
  const serviceItems = Object.values(SERVICES).map((service) => ({
    name: service.title,
    url: absoluteUrl(`/services/${service.slug}`),
    description: service.overview,
  }));

  return (
    <div className="flex flex-col flex-1">
      <ItemListJsonLd
        name="SevenX Labs Engineering Services"
        description="Comprehensive software engineering, AI development, and digital product creation services by SevenX Labs."
        itemListElement={serviceItems}
      />
      <BreadcrumbJsonLd
        items={[{ name: "Home", item: absoluteUrl("/") }]}
      />
      <Navbar />
      <main className="flex flex-col flex-1" id="main-content">
        <Hero />
        <About />
        <Services />
        <HowWeWork />
        <WhySevenX />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
