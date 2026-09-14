export interface IndustryDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  cardTeaser: string;
  overview: string;
  challengesSolved: {
    challenge: string;
    solution: string;
  }[];
  keyCapabilities: string[];
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
    cardTeaser:
      "We engineer high-concurrency financial platforms, secure payment gateways, and real-time trading dashboards built for strict data compliance and instant transaction execution.",
    overview:
      "Financial technology applications demand low latency, high data integrity, and strict security controls. We build custom real-time trading dashboards, mobile wealth management portals, payment processing gateways, and automated transaction ledgers built to perform under high market volume.",
    challengesSolved: [
      {
        challenge: "High-Concurrency Data Processing",
        solution:
          "WebSocket event streams, Redis caching layers, and asynchronous task workers architected to handle high-concurrency traffic with minimal latency.",
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
  },
  ecommerce: {
    slug: "ecommerce",
    title: "E-Commerce",
    metaTitle: "E-Commerce Development & 3D Web Experiences | SevenX Labs",
    metaDescription:
      "SevenX Labs builds high-converting e-commerce web platforms, 3D interactive product configurators, and custom storefront architectures.",
    h1: "High-Converting E-Commerce Platforms & 3D Interactive Experiences",
    tagline: "Sub-Second Page Loads, Interactive 3D Product Previews, and Scalable Checkout Pipelines",
    cardTeaser:
      "Headless Next.js storefronts, 3D WebGL product customizers, multi-currency checkout, and warehouse API integrations.",
    overview:
      "Modern e-commerce success relies on rapid page responsiveness and immersive product presentation. We build custom headless web storefronts, 3D interactive product visualizers using Three.js, and multi-currency checkout systems designed to maximize user engagement and conversion rates.",
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
  },
  edtech: {
    slug: "edtech",
    title: "EdTech",
    metaTitle: "EdTech Software Development & Learning Platforms | SevenX Labs",
    metaDescription:
      "SevenX Labs engineers interactive EdTech software, Learning Management Systems (LMS), virtual classroom portals, and AI-powered learning engines.",
    h1: "Interactive EdTech Platforms & AI Learning Engines",
    tagline: "Scalable LMS Architectures, Real-Time Assessment Systems, and Interactive Media Pipelines",
    cardTeaser:
      "Custom Learning Management Systems (LMS), live virtual classroom portals, video streaming engines, and AI-driven adaptive learning assessment platforms.",
    overview:
      "Educational technology requires highly responsive media streaming, real-time student analytics, and intuitive learning flows. We engineer custom LMS platforms, interactive virtual classroom software, and AI-assisted tutoring tools designed to engage learners and support institutional scalability.",
    challengesSolved: [
      {
        challenge: "High Latency & Media Streaming Bottlenecks",
        solution:
          "HLS video streaming integration with edge CDN caching, interactive canvas whiteboards, and low-bandwidth WebRTC real-time audio/video streams.",
      },
      {
        challenge: "Monotonous Student Engagement & Static Testing",
        solution:
          "AI-driven adaptive testing engines that dynamically calibrate problem difficulty based on real-time student performance metrics.",
      },
    ],
    keyCapabilities: [
      "Custom LMS & Portal Engineering",
      "AI-Powered Adaptive Assessment Engines",
      "Low-Latency WebRTC & Video Streaming",
      "Gamified Learning & Progress Analytics",
      "SCORM / LTI Interoperability Standards",
    ],
  },
  saas: {
    slug: "saas",
    title: "SaaS",
    metaTitle: "SaaS Product Engineering | SevenX Labs",
    metaDescription:
      "SevenX Labs builds multi-tenant B2B SaaS software platforms with subscription billing, role-based security, and cloud scalability.",
    h1: "Scalable B2B SaaS Products Engineered for High Retention",
    tagline: "From Initial Architecture to Enterprise Multi-Tenancy and Global Scale",
    cardTeaser:
      "Multi-tenant B2B SaaS architectures with automated subscription management, tenant isolation, and administrative control panels.",
    overview:
      "We partner with SaaS companies to design, engineer, and expand multi-tenant cloud platforms. Our engineering unifies clean API design, subscription billing logic, fine-grained role permissions, and fast web dashboards to maximize customer retention.",
    challengesSolved: [
      {
        challenge: "Scaling Infrastructure Costs",
        solution:
          "Auto-scaling serverless edge routes, optimized database indexes, and efficient multi-tenant data partitioning.",
      },
      {
        challenge: "Complex Onboarding & User Retention",
        solution:
          "Streamlined self-serve onboarding workflows, interactive product walkthroughs, and automated account telemetry.",
      },
    ],
    keyCapabilities: [
      "Multi-Tenant SaaS Foundations",
      "Stripe Subscription & Billing Engines",
      "Role-Based Access Control (RBAC)",
      "Developer API Ecosystems",
      "Real-Time Telemetry & Account Analytics",
    ],
  },
  startups: {
    slug: "startups",
    title: "Startups",
    metaTitle: "Startup Product Development & Engineering | SevenX Labs",
    metaDescription:
      "SevenX Labs acts as a dedicated product engineering partner for ambitious startups, building MVPs and scaling v1.0 applications quickly.",
    h1: "Agile Engineering Partner for High-Growth Startups",
    tagline: "Rapid Iteration, Senior Software Talent, and Production-Grade Code",
    cardTeaser:
      "We act as an embedded technical squad for early-stage founders, translating product wireframes into resilient v1.0 applications designed for rapid market launch and investor readiness.",
    overview:
      "Founders need to move fast without accumulating crippling technical debt. SevenX Labs operates as your dedicated product engineering squad, turning product concepts into production-grade web, mobile, and AI applications ready for market validation and investor calls.",
    challengesSolved: [
      {
        challenge: "Uncertain Technical Direction",
        solution:
          "Senior technical guidance on cloud stack, database choices, and third-party integrations to prevent costly refactoring later.",
      },
      {
        challenge: "Rapid Feature Scope Creep",
        solution:
          "Structured MVP roadmap prioritization focusing strictly on core validation metrics before expanding secondary feature sets.",
      },
    ],
    keyCapabilities: [
      "Rapid MVP Development",
      "Full-Stack Web & Mobile Apps",
      "Product Strategy & UX Design",
      "Cloud Infrastructure Setup",
      "Automated CI/CD & Production Deployment",
    ],
  },
};
