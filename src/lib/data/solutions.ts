export interface SolutionDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  cardTeaser: string;
  overview: string;
  keyDeliverables: string[];
  features: {
    title: string;
    description: string;
  }[];
  idealFor: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServiceSlug: string;
}

export const SOLUTIONS: Record<string, SolutionDetail> = {
  "saas-development": {
    slug: "saas-development",
    title: "SaaS Development",
    metaTitle: "SaaS Product Engineering & Multi-Tenant Development",
    metaDescription:
      "SevenX Labs builds multi-tenant B2B SaaS software platforms with subscription billing, role-based security, and cloud scalability.",
    h1: "Engineered for Multi-Tenancy, High Retention and Global Scale",
    tagline: "From Multi-Tenant Architecture to Billing Integration & Control Panels",
    cardTeaser:
      "Multi-tenant SaaS architectures featuring automated subscription billing, tenant isolation, SAML auth, and administrative control panels.",
    overview:
      "Engineering a commercial SaaS product requires robust data isolation, recurring revenue integration, and continuous deployment workflows. We partner with product founders and vendors to build SaaS platforms designed to handle thousands of concurrent tenant accounts without operational friction.",
    keyDeliverables: [
      "Multi-Tenant Database Architecture",
      "Stripe / Merchant Subscription Integration",
      "Authentication & OAuth / SAML Integration",
      "Admin Control Panels & Analytics Dashboards",
      "Public REST / GraphQL Developer APIs",
      "Automated CI/CD & Cloud Infrastructure",
    ],
    features: [
      {
        title: "Multi-Tenant Data Isolation",
        description:
          "Isolating tenant datasets via schema separation or row-level security (RLS) to maintain data confidentiality across organizational accounts.",
      },
      {
        title: "Flexible Billing & Usage Tracking",
        description:
          "Configuring tiered plans, usage-based metering, seat licensing, enterprise quotes, and automated invoice delivery.",
      },
      {
        title: "Fast Onboarding & Frictionless UX",
        description:
          "Streamlined onboarding flows designed to minimize friction and assist user conversion.",
      },
      {
        title: "Scalable Infrastructure",
        description:
          "Built on serverless edge networks and auto-scaling database pools to handle user spikes smoothly.",
      },
    ],
    idealFor: [
      "B2B Software Startups",
      "Established Businesses Launching SaaS Offerings",
      "Enterprise Vendors Modernizing Legacy Products",
    ],
    faqs: [
      {
        question: "How long does a production SaaS MVP development cycle take?",
        answer:
          "Delivery timelines depend on product scope, technical complexity, third-party integrations, and feedback cycles.",
      },
      {
        question: "Which billing processors do you support for SaaS applications?",
        answer:
          "We primarily integrate Stripe Billing, Paddle, and Chargebee, supporting localized payment methods, tax handling, and subscription logic.",
      },
    ],
    relatedServiceSlug: "web-development",
  },
  "mvp-development": {
    slug: "mvp-development",
    title: "MVP Development",
    metaTitle: "MVP Development Services for Startups",
    metaDescription:
      "Launch a production-grade Minimum Viable Product (MVP) with SevenX Labs. Fast iteration, robust code quality, and investor-ready design.",
    h1: "Turn Product Concepts Into Investor-Ready MVPs",
    tagline: "Product Engineering Focused on Speed-to-Market and Scalable Foundations",
    cardTeaser:
      "Rapid, production-ready MVP development designed for early market validation, investor demos, and scalable expansion.",
    overview:
      "We accelerate product launches by focusing on core functional journeys while maintaining high code quality. Our rapid MVP delivery process provides founders with an investor-ready application built on modern stacks, ensuring your initial version can evolve cleanly into your v1.0 architecture.",
    keyDeliverables: [
      "Core User Journeys & Product Design",
      "Production-Ready Frontend & Backend Code",
      "Essential Third-Party API Integrations",
      "Product Analytics & Event Tracking",
      "Scalable Cloud Hosting Setup",
    ],
    features: [
      {
        title: "Feature Prioritization Framework",
        description:
          "Focusing strictly on high-impact features required to validate core value propositions while deferring non-essential scope.",
      },
      {
        title: "Production Architecture",
        description:
          "Building on modern stacks (Next.js, TypeScript, PostgreSQL) so your MVP code can evolve directly into your v1.0 product.",
      },
      {
        title: "Polished UI/UX",
        description:
          "Delivering clean, responsive UI/UX and snappy interactions that instill confidence during user demos and investor calls.",
      },
    ],
    idealFor: [
      "Venture-Backed Founders",
      "Bootstrapped Entrepreneurs",
      "Corporate Innovation Labs Testing New Concepts",
    ],
    faqs: [
      {
        question: "What happens after the MVP is launched?",
        answer:
          "We transition smoothly into continuous feature iterations based on user telemetry, feedback, and product milestones.",
      },
    ],
    relatedServiceSlug: "web-development",
  },
  "ai-automation": {
    slug: "ai-automation",
    title: "AI Automation",
    metaTitle: "AI Automation Solutions & Workflows",
    metaDescription:
      "Automate manual business workflows with custom AI agents, document processing pipelines, and intelligent system integrations engineered by SevenX Labs.",
    h1: "Automate Complex Workflows With Custom AI Pipelines",
    tagline: "Streamline Operational Bottlenecks with AI Agents and Data Engines",
    cardTeaser:
      "Custom document intelligence engines, automated data extraction, and intelligent workflow agents with human review controls.",
    overview:
      "Operational bottlenecks and manual data processing slow down business execution. We engineer custom AI automation software that connects disparate databases, parses unstructured documents, and executes multi-step operational workflows with automated validation rules.",
    keyDeliverables: [
      "Automated Document Processing Pipelines",
      "Customer Support AI Agents",
      "Multi-System Workflow Orchestration",
      "Intelligent Data Extraction & Normalization",
      "Human-in-the-Loop Review Interfaces",
    ],
    features: [
      {
        title: "Document Intelligence",
        description:
          "Extracting structured JSON data from PDF invoices, contracts, receipts, and records using multimodal AI models.",
      },
      {
        title: "Intelligent Workflow Agents",
        description:
          "Software agents designed to execute multi-step operations across internal databases, CRMs, and communication tools.",
      },
      {
        title: "Validation Controls",
        description:
          "Structured JSON schema enforcement and validation rules with automatic escalation to human operators when ambiguity occurs.",
      },
    ],
    idealFor: [
      "Operations-Heavy Enterprises",
      "Fintech & Insurance Providers",
      "Logistics & Supply Chain Companies",
    ],
    faqs: [
      {
        question: "How do you ensure AI automation reliability?",
        answer:
          "We implement structured JSON schema enforcement, validation checks, and automated fallback logic with human-in-the-loop review triggers.",
      },
    ],
    relatedServiceSlug: "ai-development",
  },
  "digital-transformation": {
    slug: "digital-transformation",
    title: "Digital Transformation",
    metaTitle: "Digital Transformation & System Modernization",
    metaDescription:
      "Modernize legacy software systems, migrate to the cloud, and streamline digital operations with custom product engineering by SevenX Labs.",
    h1: "Modernize Legacy Systems for Growth, Agility and Security",
    tagline: "Re-engineering Legacy Enterprise Architectures into Modern Digital Platforms",
    cardTeaser:
      "System modernization, legacy codebase refactoring, cloud migrations, and modern API integration for enterprise platforms.",
    overview:
      "Aging technology platforms and fragmented databases limit operational agility. We systematically modernize legacy software through incremental refactoring, API integration layers, and zero-downtime cloud migrations that preserve core data integrity while unlocking modern capabilities.",
    keyDeliverables: [
      "Legacy Codebase Modernization",
      "Cloud Infrastructure Migration",
      "API & Database Integration",
      "Security Best-Practices Review",
      "Team Onboarding & Documentation",
    ],
    features: [
      {
        title: "Incremental Migration Strategy",
        description:
          "Executing gradual service cutovers to ensure business operations continue uninterrupted during major system upgrades.",
      },
      {
        title: "Modern API Layers",
        description:
          "Connecting legacy databases with clean REST/GraphQL APIs, enabling instant connectivity to modern web and mobile apps.",
      },
    ],
    idealFor: [
      "Mid-Market Enterprises",
      "Established Organizations with Monolithic Legacy Systems",
    ],
    faqs: [
      {
        question: "Can SevenX Labs modernize systems without rewriting everything from scratch?",
        answer:
          "Yes, we frequently apply incremental migration strategies (such as the Strangler Fig pattern) to replace legacy modules step-by-step.",
      },
    ],
    relatedServiceSlug: "custom-software-development",
  },
};
