import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import HowWeWork from "@/components/howwework";
import WhySevenX from "@/components/whysevenx";
import Testimonials from "@/components/testimonials";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
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
