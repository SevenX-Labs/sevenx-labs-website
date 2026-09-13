export interface IndustryDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  overview: string;
  challengesSolved: {
    challenge: string;
    solution: string;
  }[];
  keyCapabilities: string[];
  caseStudySlugs: string[];
}

export const INDUSTRIES: Record<string, IndustryDetail> = {
  fintech: {
    slug: "fintech",
    title: "FinTech",
    metaTitle: "FinTech Software Development Services | SevenX Labs",
    metaDescription:
      "SevenX Labs engineers high-concurrency fintech platforms, trading apps, secure payment gateways, and banking software with strict security standards.",
    h1: "High-Concurrency FinTech Engineering Built on Trust and Speed",
    tagline: "Secure Payment Engines, Real-Time Trading Dashboards, and Wealth Management Platforms",
    overview:
      "Financial technology applications require sub-second latency, zero data loss, and hardware-grade security. We engineer custom trading dashboards, mobile wealth management apps, payment processing pipelines, and automated ledger software built to handle high transactional volume.",
    challengesSolved: [
      {
        challenge: "High-Concurrency Data Processing",
        solution:
          "WebSocket event streams, Redis caching layers, and asynchronous task workers handling 100,000+ active user connections with zero latency lags.",
      },
      {
        challenge: "Security & Regulatory Compliance",
        solution:
          "End-to-end payload encryption, PCI-DSS compliance readiness, biometric authentication, and immutable audit logging.",
      },
    ],
    keyCapabilities: [
      "Real-Time Trading Dashboards",
      "Payment Gateway & Merchant Integrations",
      "KYC / AML Automated Verification",
      "Cross-Platform Wealth Management Apps",
      "Multi-Currency Digital Wallets",
    ],
    caseStudySlugs: ["finfuse"],
  },
  ecommerce: {
    slug: "ecommerce",
    title: "E-Commerce",
    metaTitle: "E-Commerce Development & 3D Web Experiences | SevenX Labs",
    metaDescription:
      "SevenX Labs builds high-converting e-commerce web platforms, 3D interactive product configurators, and custom storefront architectures.",
    h1: "High-Converting E-Commerce Platforms & 3D Interactive Experiences",
    tagline: "Sub-Second Page Loads, Interactive 3D Product Previews, and Scalable Checkout Pipelines",
    overview:
      "Modern e-commerce requires exceptional performance and immersive product presentation. We build custom head-less e-commerce storefronts, 3D interactive web previews using Three.js, and multi-currency checkout solutions optimized for conversion rate optimization.",
    challengesSolved: [
      {
        challenge: "Slow Page Load Drops Conversions",
        solution:
          "Headless Next.js storefront architectures with edge image optimization, yielding sub-second LCP scores and high Google Core Web Vitals.",
      },
      {
        challenge: "Generic Product Visuals",
        solution:
          "Interactive 3D WebGL product visualizers allowing buyers to customize colors, textures, and dimensions in real-time.",
      },
    ],
    keyCapabilities: [
      "Headless Storefront Development",
      "Interactive 3D WebGL Configurators",
      "Stripe & Payment Gateway Integrations",
      "Custom Inventory & Warehouse APIs",
      "Conversion Rate Optimization (CRO)",
    ],
    caseStudySlugs: ["maison-lumina"],
  },
  saas: {
    slug: "saas",
    title: "SaaS",
    metaTitle: "SaaS Product Engineering | SevenX Labs",
    metaDescription:
      "SevenX Labs builds multi-tenant B2B SaaS software platforms with subscription billing, role-based security, and cloud scalability.",
    h1: "Scalable B2B SaaS Products Engineered for High Retention",
    tagline: "From Initial Architecture to Enterprise Multi-Tenancy and Global Scale",
    overview:
      "We partner with SaaS companies to design, build, and scale multi-tenant software platforms. Our engineering focuses on clean API architecture, seamless subscription billing, robust role permissions, and fast dashboard interfaces.",
    challengesSolved: [
      {
        challenge: "Scaling Infrastructure Costs",
        solution:
          "Auto-scaling serverless edge routes, optimized database indexes, and efficient multi-tenant data partitioning.",
      },
    ],
    keyCapabilities: [
      "Multi-Tenant SaaS Foundations",
      "Stripe Subscription & Billing Engines",
      "Role-Based Access Control (RBAC)",
      "Developer API Ecosystems",
    ],
    caseStudySlugs: ["synapse-ai-engine"],
  },
  startups: {
    slug: "startups",
    title: "Startups",
    metaTitle: "Startup Product Development & Engineering | SevenX Labs",
    metaDescription:
      "SevenX Labs acts as a dedicated product engineering partner for ambitious startups, building MVPs and scaling v1.0 applications quickly.",
    h1: "Agile Engineering Partner for High-Growth Startups",
    tagline: "Rapid Iteration, Senior Software Talent, and Production-Grade Code",
    overview:
      "Startups need to move fast without accumulating crippling technical debt. SevenX Labs functions as your embedded product engineering team, turning wireframes into production applications ready for market launch and investor demos.",
    challengesSolved: [
      {
        challenge: "Uncertain Technical Direction",
        solution:
          "Senior technical guidance on cloud stack, database choices, and third-party integrations to prevent costly refactoring later.",
      },
    ],
    keyCapabilities: [
      "Rapid MVP Development",
      "Full-Stack Web & Mobile Apps",
      "Product Strategy & UX Design",
      "Cloud Infrastructure Setup",
    ],
    caseStudySlugs: ["synapse-ai-engine", "finfuse"],
  },
};
