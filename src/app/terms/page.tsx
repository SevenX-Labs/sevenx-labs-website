import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { SITE_CONFIG, absoluteUrl } from "@/lib/site-config";

const title = "Terms of Service | SevenX Labs";
const description =
  "Review the Terms of Service governing access to the SevenX Labs website, intellectual property ownership, and software engineering engagements.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: absoluteUrl("/terms"),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/terms"),
    siteName: SITE_CONFIG.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <Navbar />

      <PageHeader
        badge="LEGAL & ENGAGEMENT TERMS"
        title="Terms of Service"
        subtitle="Terms governing the use of the SevenX Labs website and general expectations for our software engineering engagements."
        breadcrumbs={[{ name: "Terms of Service", href: "/terms" }]}
      />

      <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 md:px-12 w-full">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-10">
          <div className="flex items-center justify-between border-b border-black/[0.06] pb-6 text-xs font-mono text-slate-500">
            <span>EFFECTIVE DATE: NOVEMBER 2026</span>
            <span>{SITE_CONFIG.legalName}</span>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-general text-xl sm:text-2xl font-bold uppercase text-black">
              1. Acceptance of Terms
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              By accessing or using the {SITE_CONFIG.name} website at {SITE_CONFIG.defaultDomain}, you agree to be bound by these Terms of Service and our{" "}
              <Link href="/privacy" className="text-[#3B82F6] font-semibold hover:underline">
                Privacy Policy
              </Link>
              . Software development, UI/UX design, and consulting services are additionally governed by executed Master Services Agreements (MSA) and Statements of Work (SOW).
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-general text-xl sm:text-2xl font-bold uppercase text-black">
              2. Website Intellectual Property
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              All editorial copy, visual designs, source code, 3D graphics, trademarks, and case study materials published on this website belong to {SITE_CONFIG.name} or are displayed with client permission. You may not copy, redistribute, or scrape site assets for commercial reuse without written authorization.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-general text-xl sm:text-2xl font-bold uppercase text-black">
              3. Client Deliverables &amp; Code Ownership
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Upon full settlement of agreed project milestones under an applicable Statement of Work, clients receive full ownership of custom source code, design systems, and deployment configurations created specifically for their engagement, free from proprietary vendor lock-in.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-general text-xl sm:text-2xl font-bold uppercase text-black">
              4. Limitation of Liability
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Information on this website is provided for informational purposes to describe our{" "}
              <Link href="/services" className="text-[#3B82F6] font-semibold hover:underline">
                engineering services
              </Link>{" "}
              and{" "}
              <Link href="/solutions" className="text-[#3B82F6] font-semibold hover:underline">
                business solutions
              </Link>
              . To the maximum extent permitted by law, {SITE_CONFIG.name} disclaims liability for indirect or consequential damages arising from general website use.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-general text-xl sm:text-2xl font-bold uppercase text-black">
              5. Contact Information
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              For legal notices or questions regarding these terms, please contact{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-[#3B82F6] font-semibold hover:underline"
              >
                {SITE_CONFIG.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Start a Transparent Partnership?"
        description="Clear milestones, full source code ownership, and direct engineering communication from day one."
        buttonText="DISCUSS YOUR PROJECT"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}

