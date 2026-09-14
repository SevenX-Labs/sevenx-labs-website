import { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import { absoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    absolute: "Contact SevenX Labs | Start Your Product Project",
  },
  description:
    "Get in touch with SevenX Labs to discuss your web application, mobile app, AI solution, or custom software project.",
  alternates: {
    canonical: absoluteUrl("/contact"),
  },
  openGraph: {
    title: "Contact SevenX Labs | Start Your Product Project",
    description:
      "Get in touch with SevenX Labs to discuss your web application, mobile app, AI solution, or custom software project.",
    url: absoluteUrl("/contact"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SevenX Labs | Start Your Product Project",
    description:
      "Get in touch with SevenX Labs to discuss your web application, mobile app, AI solution, or custom software project.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col pt-16">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
