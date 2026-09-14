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
  relatedServices: {
    title: string;
    slug: string;
  }[];
  relatedCaseStudies: {
    title: string;
    slug: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const SOLUTIONS: Record<string, SolutionDetail> = {
  "saas-development": {
    slug: "saas-development",
    title: "SaaS Development",
    metaTitle: "Multi-Tenant SaaS Product Engineering",
    metaDescription:
      "SevenX Labs architects multi-tenant B2B SaaS platforms with strict tenant data isolation, Stripe/Paddle subscription billing, and automated CI/CD pipelines.",
    h1: "Multi-Tenant SaaS Product Engineering",
    tagline: "Scalable Tenant Data Isolation, Automated Billing, and Multi-Region Deployments",
    cardTeaser:
      "Engineering a commercial SaaS product requires more than feature parity — it demands dependable tenant data isolation, recurring-revenue billing, and a deployment pipeline that can ship safely multiple times a week. We architect multi-tenant platforms using row-level security or schema-based isolation, integrate subscription logic through Stripe or Paddle, and build the CI/CD pipelines that let you onboard thousands of accounts without operational firefighting.",
    overview:
      "We architect and build commercial SaaS platforms designed for multi-tenant scalability, predictable subscription revenue, and automated tenant onboarding. From database partitioning with PostgreSQL Row-Level Security (RLS) to complex usage-based metering via Stripe or Paddle, we handle the foundational engineering required for software products to scale from pilot customers to thousands of concurrent organizations.",
    keyDeliverables: [
      "Multi-Tenant Database Architecture",
      "Stripe / Merchant Subscription Integration",
      "Authentication & OAuth / SAML Integration",
      "Usage-Based Billing & Metering",
      "Tenant Provisioning & Self-Service Onboarding",
      "Role-Based Access Control & Audit Logging",
    ],
    features: [
      {
        title: "Strict Tenant Data Isolation",
        description:
          "Enforcing strict data boundaries using PostgreSQL Row-Level Security (RLS) or schema-per-tenant isolation using strict tenant isolation and database-level access controls to reduce the risk of cross-tenant data exposure.",
      },
      {
        title: "Flexible Subscription & Metered Billing",
        description:
          "Integrating tiered pricing, free trials, prorations, add-ons, and usage-based event metering through Stripe or Paddle webhooks.",
      },
      {
        title: "Enterprise SSO & SAML Authentication",
        description:
          "Enabling corporate clients to authenticate seamlessly using Google Workspace, Microsoft Azure AD, Okta, and SAML 2.0 protocols.",
      },
      {
        title: "Automated Tenant Provisioning",
        description:
          "Zero-touch tenant workspace creation, automated subdomains, invitation management, and self-service account administration.",
      },
    ],
    idealFor: [
      "Product Founders launching new B2B SaaS platforms",
      "Software Vendors migrating on-prem tools to cloud SaaS",
      "Growing SaaS teams scaling to multi-tenant architectures",
    ],
    relatedServices: [
      { title: "Web Development", slug: "web-development" },
      { title: "Cloud & DevOps", slug: "cloud-devops" },
    ],
    relatedCaseStudies: [
      { title: "FinFuse Wealth Platform", slug: "finfuse" },
      { title: "Synapse AI Intelligence", slug: "synapse-ai-engine" },
    ],
    faqs: [
      {
        question: "How do you handle multi-tenancy and data isolation for SaaS platforms?",
        answer:
          "We isolate tenant data using either dedicated schemas or PostgreSQL Row-Level Security (RLS) policies depending on your compliance requirements, ensuring that database queries automatically restrict data access to the authenticated tenant context.",
      },
      {
        question: "Can you integrate both recurring subscription tiers and usage-based metering?",
        answer:
          "Yes. We integrate subscription billing engines (such as Stripe Billing or Paddle) supporting fixed recurring plans, per-seat licenses, and background event-driven usage metering without requiring billing logic rewrites.",
      },
      {
        question: "How does the platform support Enterprise Single Sign-On (SSO)?",
        answer:
          "We implement SAML 2.0 and OAuth OpenID Connect workflows, allowing your enterprise customers to enforce single sign-on through providers like Okta, Azure AD, and Google Workspace.",
      },
      {
        question: "Who manages the cloud hosting and production deployments?",
        answer:
          "We configure automated CI/CD deployment pipelines on your AWS, GCP, or Vercel cloud accounts, handing over full administrative ownership upon deployment.",
      },
    ],
  },

  "mvp-development": {
    slug: "mvp-development",
    title: "MVP Development",
    metaTitle: "Rapid MVP Development for Startups",
    metaDescription:
      "SevenX Labs builds investor-ready MVPs on production foundations using Next.js, TypeScript, and PostgreSQL for focused product launches.",
    h1: "Rapid, Production-Grade MVP Development",
    tagline: "Validate Product-Market Fit Fast on Foundations Built for v1.0",
    cardTeaser:
      "Speed matters, but so does the code you're standing on six months after launch. Our MVP process narrows scope to the user journeys that actually prove product-market fit, then builds on production-grade foundations — Next.js, TypeScript, PostgreSQL — so the version you ship to your first 100 users can scale directly into v1.0 instead of being rebuilt from scratch.",
    overview:
      "We help founders and product teams accelerate time-to-market by ruthlessly scoping early product versions to the core journeys that validate product-market fit. Rather than writing throwaway prototype scripts, we build on production-ready technology foundations (Next.js, TypeScript, PostgreSQL) so your initial release can scale directly into v1.0 without a costly rebuild.",
    keyDeliverables: [
      "Product Discovery & Scope Prioritization",
      "Interactive Figma UX/UI Prototype",
      "Production-Grade Full-Stack Application",
      "Authentication & Payment Processing",
      "Analytics & User Telemetry Setup",
      "Deployment & Investor Demo Preparation",
    ],
    features: [
      {
        title: "Focused Scope Prioritization",
        description:
          "Eliminating secondary feature creep to focus engineering bandwidth on the core differentiating value proposition.",
      },
      {
        title: "Non-Disposable Architecture",
        description:
          "Writing strictly-typed, modular TypeScript code that serves as the permanent foundation for your future engineering team.",
      },
      {
        title: "Short, Focused Development Cycles",
        description:
          "Structured milestone delivery sprints providing early weekly builds for user testing and stakeholder review.",
      },
      {
        title: "Investor-Ready Polish & Reliability",
        description:
          "High-fidelity visual design, responsive interfaces, and clean database architectures ready for investor diligence.",
      },
    ],
    idealFor: [
      "Early-stage Founders preparing to raise venture capital",
      "Established businesses testing a new digital product idea",
      "Product managers validating a new business unit feature",
    ],
    relatedServices: [
      { title: "Web Development", slug: "web-development" },
      { title: "Mobile App Development", slug: "mobile-app-development" },
      { title: "UI/UX Design", slug: "ui-ux-design" },
    ],
    relatedCaseStudies: [
      { title: "Maison Lumina Luxury", slug: "maison-lumina" },
      { title: "FinFuse Wealth Platform", slug: "finfuse" },
    ],
    faqs: [
      {
        question: "How long does an MVP build typically take?",
        answer:
          "Our MVP development process is optimized for focused delivery cycles, typically structured across short iterative milestones from initial scoping and UI/UX design to production deployment.",
      },
      {
        question: "Will we need to rebuild the application from scratch after launching our MVP?",
        answer:
          "No. Because we build on production-grade stacks (Next.js, TypeScript, PostgreSQL) with clean modular code boundaries, your MVP code can evolve directly into your v1.0 architecture without throwaway rewrites.",
      },
      {
        question: "How do you help decide which features belong in the MVP?",
        answer:
          "We collaborate during discovery to prioritize the single core user journey that proves product-market fit, moving secondary ideas to a post-launch roadmap to ensure fast delivery.",
      },
      {
        question: "Can you assist with investor demos and technical diligence?",
        answer:
          "Yes. We ensure the application is visually polished, fully responsive, and supported by clean architectural documentation that passes technical due diligence.",
      },
    ],
  },

  "ai-automation": {
    slug: "ai-automation",
    title: "AI Automation",
    metaTitle: "Enterprise AI Workflow Automation Solutions",
    metaDescription:
      "SevenX Labs engineers custom AI automation pipelines for unstructured document parsing, database sync, and operational validation workflows.",
    h1: "Enterprise AI Workflow & Document Automation",
    tagline: "Intelligent Document Processing, Data Extraction, and Human-in-the-Loop Pipelines",
    cardTeaser:
      "Manual workflows don't just cost time — they introduce the inconsistency and error rates that slow growing teams down. We design AI automation pipelines using retrieval-augmented generation and structured validation rules, connecting disparate databases, parsing unstructured documents, and routing edge cases to a human reviewer only when the model's confidence drops below a defined threshold.",
    overview:
      "We design and deploy custom AI automation pipelines that eliminate manual operational bottlenecks. By combining optical character recognition (OCR), large language models, structured validation schemas, and human-in-the-loop exception queues, our systems parse complex unstructured documents, synchronize databases, and execute multi-step operational workflows with high accuracy.",
    keyDeliverables: [
      "Unstructured Document Parsing & Extraction",
      "Intelligent Invoice, Receipt & Contract Pipelines",
      "Confidence-Scored Human-in-the-Loop Review Queues",
      "Automated Database & CRM/ERP Synchronization",
      "Real-Time Error Alerting & Audit Logging",
      "Middleware API Connector Integration",
    ],
    features: [
      {
        title: "Intelligent Document Processing (IDP)",
        description:
          "Extracting clean, structured JSON data from messy PDFs, scans, emails, and contracts without manual templates.",
      },
      {
        title: "Confidence Scoring & Exception Routing",
        description:
          "Automatically approving high-confidence extractions while routing ambiguous edge cases to a human review queue.",
      },
      {
        title: "Non-Disruptive Middleware Integration",
        description:
          "Connecting automation pipelines directly to your existing databases, ERPs, and CRMs through secure middleware APIs.",
      },
      {
        title: "Full Audit Trails & Data Lineage",
        description:
          "Logging every automated extraction and human confirmation with exact source paragraph coordinates for regulatory compliance.",
      },
    ],
    idealFor: [
      "Operations teams overwhelmed by manual document data entry",
      "Logistics, FinTech, and healthcare companies processing high-volume forms",
      "Growing businesses looking to scale operations without linear headcount growth",
    ],
    relatedServices: [
      { title: "AI Development", slug: "ai-development" },
      { title: "Custom Software Development", slug: "custom-software-development" },
    ],
    relatedCaseStudies: [
      { title: "Synapse AI Intelligence", slug: "synapse-ai-engine" },
    ],
    faqs: [
      {
        question: "What is the difference between AI Automation and standard Zapier/Make automations?",
        answer:
          "Zapier handles simple if-this-then-that triggers between standardized APIs. Custom AI automation handles complex, unstructured, messy documents (PDFs, invoices, handwriting), performs semantic validation, and routes confidence-scored exceptions to human reviewers.",
      },
      {
        question: "How do you handle edge cases when the AI model is uncertain?",
        answer:
          "Our pipelines output confidence scores for each extracted field. If confidence drops below your defined threshold, the item is automatically placed into a human-in-the-loop review dashboard for quick team verification.",
      },
      {
        question: "Can AI automation pipelines integrate with legacy databases and ERP systems?",
        answer:
          "Yes. We build middleware API layers that read and write data to your existing ERP, CRM, or relational database without requiring alterations to your underlying legacy codebase.",
      },
      {
        question: "How do you ensure data security and compliance?",
        answer:
          "All data pipelines are deployed on private, encrypted infrastructure and can be configured around your organization's data-retention and compliance requirements.",
      },
    ],
  },

  "digital-transformation": {
    slug: "digital-transformation",
    title: "Digital Transformation",
    metaTitle: "Legacy System Modernization & Cloud Migration",
    metaDescription:
      "SevenX Labs modernizes legacy software through incremental refactoring, the Strangler Fig pattern, API middleware, and cloud migration designed for continuous operation.",
    h1: "Legacy Software Modernization & Cloud Migration",
    tagline: "Incremental System Refactoring, API Modernization, and Resilient Cloud Replatforming",
    cardTeaser:
      "Legacy platforms rarely fail all at once — they slow teams down one workaround at a time. We modernize aging systems incrementally, using patterns like the Strangler Fig to migrate services module by module, layer in modern REST/GraphQL APIs, and move infrastructure to the cloud without a single high-risk, all-at-once cutover.",
    overview:
      "We help established organizations modernize aging software architectures, brittle monolithic databases, and legacy infrastructure without the catastrophic risks of all-at-once ground-up rewrites. Using proven patterns like the Strangler Fig, we incrementally decouple modules, wrap legacy backends in modern API layers, and transition workloads to scalable cloud environments while maintaining uninterrupted business operations.",
    keyDeliverables: [
      "Legacy Architecture & Dependency Audit",
      "Strangler Fig Incremental Migration Roadmap",
      "Modern REST & GraphQL Middleware API Layers",
      "Database Replication & Schema Modernization",
      "Cloud Replatforming & Migration (AWS / GCP)",
      "Automated CI/CD Deployment Pipeline Migration",
    ],
    features: [
      {
        title: "Strangler Fig Incremental Migration",
        description:
          "Replacing legacy system features service by service behind an API gateway, eliminating the risk of massive all-at-once cutovers.",
      },
      {
        title: "Legacy API Encapsulation",
        description:
          "Building modern REST/GraphQL middleware layers that unlock legacy database capabilities for modern web and mobile apps.",
      },
      {
        title: "Database Migration & Data Integrity",
        description:
          "Employing real-time change data capture (CDC) and shadow writing to replicate and validate legacy data into modern PostgreSQL databases with controlled cutovers.",
      },
      {
        title: "Modern DevOps & Infrastructure",
        description:
          "Containerizing legacy workloads with Docker and migrating them to automated Terraform-managed cloud environments.",
      },
    ],
    idealFor: [
      "Enterprises running on legacy monolithic software that slows down releases",
      "Companies facing difficulty hiring engineers for obsolete legacy stacks",
      "Organizations needing to expose legacy backend data to modern web/mobile apps",
    ],
    relatedServices: [
      { title: "Custom Software Development", slug: "custom-software-development" },
      { title: "Cloud & DevOps", slug: "cloud-devops" },
    ],
    relatedCaseStudies: [
      { title: "KubeFlow Enterprise", slug: "kubeflow-enterprise" },
    ],
    faqs: [
      {
        question: "Why is the Strangler Fig pattern safer than a complete ground-up rewrite?",
        answer:
          "Complete rewrites carry high failure rates because business operations must pause and release all new features simultaneously. The Strangler Fig pattern modernizes the system incrementally, replacing one service at a time behind an API gateway without disrupting live operations.",
      },
      {
        question: "How do you protect data integrity and minimize downtime during legacy database migrations?",
        answer:
          "We use dual-write or change data capture (CDC) replication strategies where the legacy and modern databases run in parallel until data integrity is fully verified before switching traffic.",
      },
      {
        question: "Can we build a modern frontend without replacing our entire legacy backend immediately?",
        answer:
          "Yes. We frequently build modern Next.js frontends connected to an API middleware layer that communicates with your legacy backend, providing immediate UX improvements while backend modernization proceeds.",
      },
      {
        question: "How do you handle undocumented legacy codebases?",
        answer:
          "We conduct thorough code and database audits, map data flows and integration points, and reverse-engineer business logic into automated integration tests before refactoring.",
      },
    ],
  },
};
