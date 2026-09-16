import { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-config";
import { PageHeader } from "@/components/ui/PageHeader";
import { CareersContent } from "@/components/careers/CareersContent";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Careers & Team | SevenX Labs",
  description:
    "Learn about engineering culture, team values, and working with SevenX Labs - an elite engineering studio building next-gen web platforms and AI automation systems.",
  alternates: {
    canonical: absoluteUrl("/careers"),
  },
  openGraph: {
    title: "Careers & Culture at SevenX Labs",
    description:
      "Remote-first engineering studio building next-gen web applications and digital products.",
    url: absoluteUrl("/careers"),
    siteName: "SevenX Labs",
    locale: "en_US",
    type: "website",
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#0D0D11]">
      <PageHeader
        badge="JOIN SEVENX LABS"
        title="CAREERS AT SEVENX LABS"
        subtitle="We are an elite engineering studio building next-generation web platforms, AI systems, and digital products."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Careers", href: "/careers" },
        ]}
        theme="dark"
      />

      <CareersContent />

      <CTASection
        title="Ready to Build Next-Gen Digital Products?"
        description="Have an inquiry or project proposal? Send us your details on our contact page."
        buttonText="SEND CONTACT DETAILS"
        buttonHref="/contact"
      />
    </main>
  );
}
