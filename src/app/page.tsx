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
import { absoluteUrl } from "@/lib/site-config";

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
