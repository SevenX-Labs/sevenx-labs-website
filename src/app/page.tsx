import Hero from "@/components/hero";
import About from "@/components/about";
import HowWeWork from "@/components/howwework";
import Services from "@/components/services";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      <Hero />
      <About />
      <HowWeWork />
      <Services />
    </div>
  );
}
