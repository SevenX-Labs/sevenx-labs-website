import { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-config";
import { PageHeader } from "@/components/ui/PageHeader";
import { CareersContent } from "@/components/careers/CareersContent";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/seo/JsonLd";
import { OPEN_POSITIONS } from "@/lib/data/careers";

export const metadata: Metadata = {
  title: "Careers & Open Positions | SevenX Labs",
  description:
    "Join SevenX Labs - an elite engineering studio building next-gen web applications, AI automation platforms, and scalable mobile products. View open roles in Engineering, AI, Design, and DevOps.",
  alternates: {
    canonical: absoluteUrl("/careers"),
  },
  openGraph: {
    title: "Careers at SevenX Labs | Build Next-Gen Digital Products",
    description:
      "Join our remote-first engineering studio. Open roles for Senior Full Stack Engineers, AI Engineers, UI/UX Designers, and DevOps Architects.",
    url: absoluteUrl("/careers"),
    siteName: "SevenX Labs",
    locale: "en_US",
    type: "website",
  },
};

export default function CareersPage() {
  // Generate JobPosting JSON-LD schemas for open roles
  const jobPostingSchemas = OPEN_POSITIONS.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: `${job.summary} Key skills required: ${job.techStack.join(", ")}.`,
    identifier: {
      "@type": "PropertyValue",
      name: "SevenX Labs",
      value: job.id,
    },
    datePosted: "2026-09-01",
    employmentType: "FULL_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "SevenX Labs",
      sameAs: absoluteUrl("/"),
      logo: absoluteUrl("/icon.png"),
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressLocality: "Remote / Hybrid",
      },
    },
  }));

  return (
    <main className="min-h-screen bg-[#0D0D11]">
      <JsonLd data={jobPostingSchemas} />

      <PageHeader
        badge="JOIN SEVENX LABS"
        title="CAREERS AT SEVENX LABS"
        subtitle="We are hiring elite engineers, AI architects, and product designers to build next-generation web platforms and digital systems."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Careers", href: "/careers" },
        ]}
        theme="dark"
      />

      <CareersContent />

      <CTASection
        title="Ready to Build the Future of Software?"
        description="Don't see your exact role? We are always eager to talk to visionary engineers and product thinkers."
        buttonText="SEE ALL OPENINGS"
        buttonHref="#openings"
      />
    </main>
  );
}
