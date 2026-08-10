import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import HowWeWork from "@/components/howwework";
import Testimonials from "@/components/testimonials";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowWeWork />
      <Testimonials />
    </div>
  );
}
