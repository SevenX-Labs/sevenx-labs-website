import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ItemListJsonLd } from "@/components/seo/JsonLd";
import { SITE_CONFIG, absoluteUrl } from "@/lib/site-config";
import { ArrowUpRight, CheckCircle2, Layers, TrendingUp, Wrench } from "lucide-react";

const portfolioTitle = "Software Engineering Portfolio & Case Studies | SevenX Labs";
const portfolioDescription =
  "Explore our portfolio of high-concurrency web platforms, mobile applications, e-commerce stores, and custom admin portals engineered by SevenX Labs.";

export const metadata: Metadata = {
  title: {
    absolute: portfolioTitle,
  },
  description: portfolioDescription,
  alternates: {
    canonical: absoluteUrl("/portfolio"),
  },
  openGraph: {
    title: portfolioTitle,
    description: portfolioDescription,
    url: absoluteUrl("/portfolio"),
    siteName: SITE_CONFIG.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioTitle,
    description: portfolioDescription,
  },
};

interface CaseStudyDetail {
  id: string;
  name: string;
  domain: string;
  url: string;
  category: string;
  challenge: string;
  architecture: string;
  stack: string[];
  deliverables: string[];
  outcome: string;
  serviceLink: { label: string; href: string };
}

const CASE_STUDIES: CaseStudyDetail[] = [
  {
    id: "kickat",
    name: "Kickat",
    domain: "kickat.co.in",
    url: "https://kickat.co.in",
    category: "E-Commerce Platform",
    challenge:
      "Kickat needed a fast, mobile-first retail storefront capable of handling dense product catalogs and multi-variant inventory without the slow page transitions and checkout drop-offs common on template e-commerce builds.",
    architecture:
      "We engineered a server-rendered Next.js and React storefront with edge-cached catalog pages, optimistic cart state management, streamlined checkout validation, and an integrated payment gateway workflow.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Payment Gateway"],
    deliverables: [
      "Custom storefront UI and responsive product discovery filters",
      "Optimistic shopping cart and frictionless checkout pipeline",
      "Real-time inventory sync and order confirmation webhooks",
      "Core Web Vitals optimization for mobile shoppers",
    ],
    outcome:
      "Achieved sub-second page load times across product and checkout routes and drove a +45% increase in online sales conversions after launch.",
    serviceLink: { label: "Web Development Services", href: "/services/web-development" },
  },
  {
    id: "mandarlawn",
    name: "Mandar Lawn & Banquets",
    domain: "mandarlawn.com",
    url: "https://mandarlawn.com",
    category: "Luxury Event Venue & Instant Booking Platform",
    challenge:
      "Mandar Lawn & Banquets lacked a digital presence that matched the scale and prestige of its event spaces, causing prospective wedding and corporate clients to abandon inquiries due to slow image loading and unclear package details.",
    architecture:
      "We built a responsive React web platform featuring progressive high-resolution gallery rendering, structured venue capacity breakdowns, and a direct event inquiry workflow tuned for local search visibility.",
    stack: ["React", "Tailwind CSS", "Responsive UI/UX", "Technical SEO"],
    deliverables: [
      "Luxury hospitality visual architecture and venue showcase",
      "Optimized high-resolution photo galleries with lazy loading",
      "Direct event date and banquet package inquiry workflow",
      "Mobile-first navigation and local search metadata",
    ],
    outcome:
      "Delivered a 3x increase in direct venue booking inquiries and significantly shortened the time from initial site visit to scheduled venue walkthrough.",
    serviceLink: { label: "UI/UX Design & Strategy", href: "/services/ui-ux-design" },
  },
  {
    id: "yfadvisors",
    name: "YF Advisors",
    domain: "yfadvisors.in",
    url: "https://yfadvisors.in",
    category: "Financial Advisory Web Platform & Custom Backend Admin Portal",
    challenge:
      "YF Advisors needed both an authoritative corporate advisory website to convert institutional leads and a secure internal operations portal to replace fragmented spreadsheets and manual lead follow-ups.",
    architecture:
      "We paired a high-speed public advisory site with a custom role-based backend administration portal featuring real-time client lead pipelines, granular permission boundaries, and automated operational reporting.",
    stack: ["Next.js", "TypeScript", "RBAC Auth", "PostgreSQL", "Analytics Dashboard"],
    deliverables: [
      "Corporate financial advisory website and client intake flows",
      "Custom backend admin panel with real-time lead tracking",
      "Role-Based Access Control (RBAC) and permission auditing",
      "Automated operational workflow tracking and analytics reports",
    ],
    outcome:
      "Enabled 100% real-time lead tracking across advisory teams with strict role permissions, eliminating manual spreadsheet handoffs.",
    serviceLink: { label: "Custom Software Development", href: "/services/custom-software-development" },
  },
  {
    id: "femmeflo",
    name: "FemmeFlo",
    domain: "femmeflo.in",
    url: "https://femmeflo.in",
    category: "Women's Health & Wellness Platform",
    challenge:
      "FemmeFlo required an approachable, trustworthy healthcare and wellness web platform where visitors could explore sensitive health guidance comfortably and book consultations without friction.",
    architecture:
      "We designed and engineered an accessible, WCAG-conscious web interface with structured educational wellness guides, calm visual hierarchy, and a streamlined consultation inquiry flow.",
    stack: ["React", "TypeScript", "Accessible UI/UX", "Wellness Content Architecture"],
    deliverables: [
      "Accessible, mobile-responsive women's health UI/UX system",
      "Structured wellness guides and educational resource navigation",
      "Streamlined consultation scheduling and inquiry workflow",
      "High-contrast typography and fast mobile page performance",
    ],
    outcome:
      "Increased consultation inquiry completions and delivered an accessible, high-engagement wellness experience across desktop and mobile devices.",
    serviceLink: { label: "SaaS & Product Solutions", href: "/solutions/saas-development" },
  },
];

export default function PortfolioPage() {
  const itemListElements = CASE_STUDIES.map((cs) => ({
    name: `${cs.name} — ${cs.category}`,
    url: cs.url,
    description: cs.outcome,
  }));

  return (
    <main className="min-h-screen bg-[#FAF9F6] text-zinc-900 flex flex-col pt-20">
      <ItemListJsonLd
        name="SevenX Labs Featured Client Case Studies"
        description="Verified production builds across e-commerce, hospitality, financial advisory, healthcare, and mobile applications."
        itemListElement={itemListElements}
      />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 w-full pt-2">
        <Breadcrumbs items={[{ name: "Portfolio", href: "/portfolio" }]} />
      </div>

      <Portfolio />

      {/* DETAILED VERIFIED CLIENT CASE STUDIES */}
      <section
        id="case-studies"
        className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 w-full border-t border-black/[0.08]"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-3 max-w-2xl">
            <span className="text-[11px] font-mono font-bold uppercase tracking-[0.25em] text-[#3B82F6]">
              ENGINEERING CASE STUDIES
            </span>
            <h2 className="font-general text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-black">
              Architecture, Deliverables &amp; Outcomes
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              A closer technical look at the production challenges, system architectures, and measurable business outcomes behind our verified client deployments.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 shrink-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#3B82F6] hover:text-blue-700 transition-colors"
            >
              <span>Explore Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-black hover:text-[#3B82F6] transition-colors"
            >
              <span>Explore Solutions</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CASE_STUDIES.map((cs) => (
            <article
              key={cs.id}
              className="bg-white rounded-3xl border border-black/[0.08] p-8 sm:p-10 shadow-sm flex flex-col justify-between gap-6"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-start justify-between gap-4 border-b border-black/[0.06] pb-5">
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#3B82F6]">
                      {cs.category}
                    </span>
                    <h3 className="font-general text-2xl font-extrabold uppercase text-black">
                      {cs.name}
                    </h3>
                    <span className="text-xs font-mono text-zinc-500">{cs.domain}</span>
                  </div>

                  <a
                    href={cs.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/[0.04] hover:bg-black hover:text-white text-xs font-mono font-bold text-zinc-800 transition-colors shrink-0"
                  >
                    <span>Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                    <Wrench className="w-3.5 h-3.5 text-[#3B82F6]" />
                    Challenge
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                    <Layers className="w-3.5 h-3.5 text-[#3B82F6]" />
                    Technical Architecture &amp; Stack
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">{cs.architecture}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cs.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-[#FAF9F6] border border-black/[0.08] text-[11px] font-mono font-semibold text-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-500">
                    Key Deliverables
                  </span>
                  <ul className="flex flex-col gap-2">
                    {cs.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 border-t border-black/[0.06] flex flex-col gap-4">
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-start gap-2.5">
                  <TrendingUp className="w-4 h-4 text-[#3B82F6] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-medium text-zinc-900 leading-relaxed">
                    <strong className="font-bold uppercase font-mono text-[11px] text-[#3B82F6] mr-1.5">
                      Outcome:
                    </strong>
                    {cs.outcome}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-mono">
                  <Link
                    href={cs.serviceLink.href}
                    className="inline-flex items-center gap-1.5 font-bold uppercase text-black hover:text-[#3B82F6] transition-colors"
                  >
                    <span>{cs.serviceLink.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 font-bold uppercase text-[#3B82F6] hover:text-blue-700 transition-colors"
                  >
                    <span>Start Similar Build</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
