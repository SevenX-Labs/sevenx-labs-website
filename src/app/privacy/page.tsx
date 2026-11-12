import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { CTASection } from "@/components/ui/CTASection";
import { SITE_CONFIG, absoluteUrl } from "@/lib/site-config";

const title = "Privacy Policy & Data Protection | SevenX Labs";
const description =
  "Learn how SevenX Labs collects, uses, and protects your personal information when you visit our website or submit a project inquiry.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: absoluteUrl("/privacy"),
  },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/privacy"),
    siteName: SITE_CONFIG.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col">
      <Navbar />

      <PageHeader
        badge="LEGAL & COMPLIANCE"
        title="Privacy Policy"
        subtitle="How SevenX Labs handles, secures, and protects information shared through our digital properties and project inquiries."
        breadcrumbs={[{ name: "Privacy Policy", href: "/privacy" }]}
      />

      <section className="py-16 md:py-24 max-w-4xl mx-auto px-6 md:px-12 w-full">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-black/[0.08] shadow-sm flex flex-col gap-10">
          <div className="flex items-center justify-between border-b border-black/[0.06] pb-6 text-xs font-mono text-slate-500">
            <span>EFFECTIVE DATE: NOVEMBER 2026</span>
            <span>{SITE_CONFIG.legalName}</span>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-general text-xl sm:text-2xl font-bold uppercase text-black">
              1. Information We Collect
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When you submit a project inquiry or contact {SITE_CONFIG.name} through our website, we collect the contact details and project context you voluntarily provide, including your name, work email address, project description, project category, and indicative budget range. We do not sell, rent, or trade personal information with third parties.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-general text-xl sm:text-2xl font-bold uppercase text-black">
              2. How We Use Information
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Information submitted via our contact channels is used solely to review your technical requirements, respond to your inquiry, prepare architectural scoping proposals, execute mutual non-disclosure agreements (NDAs), and deliver contracted engineering services.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-general text-xl sm:text-2xl font-bold uppercase text-black">
              3. Data Security &amp; Retention
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We enforce HTTPS encryption in transit, strict access controls on internal inquiry records, and minimal data retention practices. Inquiry records are retained only as long as necessary to evaluate or maintain an active business relationship, or as required by applicable law.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-general text-xl sm:text-2xl font-bold uppercase text-black">
              4. Third-Party Services &amp; Links
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Our website may reference external client showcases or third-party platforms (such as LinkedIn or X). Those external sites operate under their own privacy policies, and we encourage you to review their practices when visiting them.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-general text-xl sm:text-2xl font-bold uppercase text-black">
              5. Your Rights &amp; Contact
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              You may request access to, correction of, or deletion of any personal information you have shared with us at any time by emailing{" "}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="text-[#3B82F6] font-semibold hover:underline"
              >
                {SITE_CONFIG.email}
              </a>{" "}
              or reaching out through our{" "}
              <Link href="/contact" className="text-[#3B82F6] font-semibold hover:underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Questions About Data Security or NDAs?"
        description="We sign mutual NDAs prior to technical discovery and enforce strict data isolation across every engineering engagement."
        buttonText="CONTACT OUR TEAM"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}

