export interface ServiceDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
  cardTeaser: string;
  overview: string;
  whatWeBuild: string[];
  capabilities: {
    title: string;
    description: string;
  }[];
  technologies: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedSolutions: {
    title: string;
    slug: string;
  }[];
  relatedCaseStudies: {
    title: string;
    slug: string;
  }[];
}

export const SERVICES: Record<string, ServiceDetail> = {
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    metaTitle: "Web Application Development Services",
    metaDescription:
      "SevenX Labs engineers high-performance web applications, customer portals, and enterprise dashboards using Next.js, React, TypeScript, and PostgreSQL.",
    h1: "Full-Stack Web Application Development",
    tagline: "Custom Web Application Engineering Built for Speed, Scale, and Conversion",
    cardTeaser:
      "Custom web applications, customer portals, and interactive dashboards engineered with Next.js, React, and TypeScript.",
    overview:
      "We architect full-stack web products built around strict performance standards, clean code boundaries, and measurable conversion goals. Whether you need a customer-facing web application, an internal operations portal, or a scalable backend API layer, our team handles front-end interactivity and server-side infrastructure in a single unified workflow.",
    whatWeBuild: [
      "Custom Web Applications",
      "Interactive Analytics Dashboards",
      "Customer Portals & Admin Panels",
      "E-Commerce & Checkout Platforms",
      "High-Throughput REST & GraphQL APIs",
      "Frontend Design System Implementations",
    ],
    capabilities: [
      {
        title: "Full-Stack TypeScript Architecture",
        description:
          "End-to-end web product development utilizing Next.js App Router, React 19, Node.js, and TypeScript for type safety and maintainability.",
      },
      {
        title: "Server-Side Rendering & Edge Caching",
        description:
          "Optimizing initial bundle size, server-side rendering (SSR), and edge caching for sub-second page loads and strong Core Web Vitals.",
      },
      {
        title: "Interactive Real-Time Dashboards",
        description:
          "Building responsive data visualization interfaces powered by WebSockets, Redis pub/sub streams, and optimistic UI state updates.",
      },
      {
        title: "Relational Database & API Design",
        description:
          "Designing normalized PostgreSQL schemas, efficient query indexing, connection pooling, and authenticated API endpoints.",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "TailwindCSS", "PostgreSQL", "Redis", "Prisma"],
    process: [
      {
        step: "01",
        title: "Architecture & Data Modeling",
        description: "Defining data models, system boundaries, API contracts, and user flows before writing code.",
      },
      {
        step: "02",
        title: "Component & UI Engineering",
        description: "Translating design specifications into modular, accessible, and responsive TypeScript components.",
      },
      {
        step: "03",
        title: "Backend & Integration",
        description: "Engineering secure API endpoints, database migrations, third-party webhooks, and authentication.",
      },
      {
        step: "04",
        title: "Testing, Optimization & Launch",
        description: "Running automated end-to-end tests, load testing, Core Web Vitals audits, and production deployment.",
      },
    ],
    faqs: [
      {
        question: "Why do you use Next.js and TypeScript for web applications?",
        answer:
          "Next.js provides hybrid rendering (SSR, SSG, and ISR), excellent search engine crawlability, and fast edge performance. TypeScript ensures strict type safety across the entire stack, drastically reducing runtime bugs as your application grows.",
      },
      {
        question: "How do you ensure web applications maintain fast load times?",
        answer:
          "We optimize Core Web Vitals by minimizing client JavaScript bundles, using server components where appropriate, optimizing image/asset delivery, and implementing efficient database indexing and caching layers.",
      },
      {
        question: "Can you build custom administrative dashboards and internal tools?",
        answer:
          "Yes. We frequently engineer bespoke administrative portals, analytics dashboards, and back-office management interfaces with role-based access control and real-time data sync.",
      },
      {
        question: "Who owns the code and intellectual property once completed?",
        answer:
          "You retain full ownership of all custom source code, design assets, and deployment configurations upon project delivery without any proprietary vendor lock-in.",
      },
      {
        question: "Can you integrate our web application with existing databases or third-party APIs?",
        answer:
          "Yes. We routinely build middleware layers, webhook handlers, and secure REST/GraphQL connectors to integrate with CRMs, payment gateways, ERPs, and legacy databases.",
      },
    ],
    relatedSolutions: [
      { title: "SaaS Development", slug: "saas-development" },
      { title: "MVP Development", slug: "mvp-development" },
    ],
    relatedCaseStudies: [
      { title: "FinFuse Wealth Platform", slug: "finfuse" },
      { title: "Maison Lumina Luxury", slug: "maison-lumina" },
    ],
  },

  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    metaTitle: "Cross-Platform Mobile App Development",
    metaDescription:
      "SevenX Labs builds high-performance iOS and Android mobile applications using React Native, offline-first data sync, and hardware integration.",
    h1: "Cross-Platform Mobile App Development",
    tagline: "Native Performance, Shared Codebase Velocity on iOS & Android",
    cardTeaser:
      "Native and cross-platform mobile applications delivering responsive performance, offline resilience, and hardware biometric security.",
    overview:
      "We design and engineer mobile applications that deliver smooth native performance across iOS and Android from a unified codebase. By leveraging React Native, we eliminate the cost and overhead of maintaining separate platform teams while providing direct access to native device hardware, biometrics, and background services.",
    whatWeBuild: [
      "Cross-Platform iOS & Android Apps",
      "Real-Time Streaming & Chat Apps",
      "Offline-First Business Applications",
      "FinTech & Transactional Mobile Portals",
      "Hardware-Integrated Mobile Tools",
      "Mobile Onboarding & Subscription Flows",
    ],
    capabilities: [
      {
        title: "React Native Architecture",
        description:
          "Engineering unified mobile applications that achieve native responsiveness and 60fps animations on both iOS and Android.",
      },
      {
        title: "Offline-First Data Synchronization",
        description:
          "Implementing local SQLite/WatermelonDB caching with optimistic UI updates and background reconciliation when connectivity returns.",
      },
      {
        title: "Native Hardware & Biometrics",
        description:
          "Integrating device capabilities including Face ID, Touch ID, camera hardware, push notifications (APNs/FCM), and location services.",
      },
      {
        title: "App Store Lifecycle & CI/CD",
        description:
          "Automating build pipelines with Fastlane, managing TestFlight/Google Play beta distribution, and handling App Store review compliance.",
      },
    ],
    technologies: ["React Native", "Expo", "TypeScript", "iOS SDK", "Android SDK", "SQLite", "Firebase", "Fastlane"],
    process: [
      {
        step: "01",
        title: "Mobile UX & Device Flows",
        description: "Designing touch-first mobile navigation, gesture interactions, and offline fallback states.",
      },
      {
        step: "02",
        title: "Core Architecture & State",
        description: "Setting up cross-platform state persistence, local database storage, and API client layers.",
      },
      {
        step: "03",
        title: "Native Bridge & Hardware Integration",
        description: "Wiring push notifications, biometrics, deep linking, and third-party native SDKs.",
      },
      {
        step: "04",
        title: "App Store Submission & Release",
        description: "Managing signing certificates, provisioning profiles, store listing metadata, and staged rollouts.",
      },
    ],
    faqs: [
      {
        question: "Why choose React Native over building separate native iOS and Android apps?",
        answer:
          "React Native allows a single team to write, test, and maintain one unified codebase that compiles to native UI components on both iOS and Android. This can significantly reduce duplicated platform-specific development and maintenance effort while maintaining responsive native performance.",
      },
      {
        question: "How does the mobile app handle poor or offline network connectivity?",
        answer:
          "We engineer an offline-first architecture using local SQLite storage and optimistic UI updates. Actions taken offline are queued locally and automatically synced with the server once connectivity is restored.",
      },
      {
        question: "Do you handle the Apple App Store and Google Play Store submission process?",
        answer:
          "Yes. We handle end-to-end store provisioning, including signing certificates, metadata configuration, TestFlight beta distribution, and addressing App Store review guidelines.",
      },
      {
        question: "Can existing web backend APIs be reused for the mobile application?",
        answer:
          "Yes. We build standard RESTful or GraphQL API clients in the mobile app to securely communicate with your existing backend servers and databases.",
      },
    ],
    relatedSolutions: [
      { title: "MVP Development", slug: "mvp-development" },
      { title: "SaaS Development", slug: "saas-development" },
    ],
    relatedCaseStudies: [
      { title: "FinFuse Wealth Platform", slug: "finfuse" },
    ],
  },

  "ai-development": {
    slug: "ai-development",
    title: "AI Development",
    metaTitle: "Custom AI Development & LLM Engineering",
    metaDescription:
      "SevenX Labs builds custom AI applications, RAG pipelines, vector search systems, and autonomous agents with LangChain, PgVector, and Python.",
    h1: "Enterprise AI Development & Engineering",
    tagline: "Custom RAG Pipelines, Vector Indexing, and Deterministic AI Systems",
    cardTeaser:
      "Autonomous AI systems, Retrieval-Augmented Generation (RAG) vector pipelines, and LLM integrations for intelligent digital products.",
    overview:
      "We engineer custom artificial intelligence systems that connect large language models with your organization's proprietary data stores. Rather than building generic wrapper scripts, we develop production RAG architectures, localized vector search indexes, deterministic evaluation guardrails, and autonomous agent workflows designed for technical accuracy and enterprise data privacy.",
    whatWeBuild: [
      "Retrieval-Augmented Generation (RAG) Systems",
      "Custom Vector Search & Semantic Indexes",
      "Domain-Specific LLM Integrations",
      "Autonomous Multi-Step AI Agents",
      "Document Intelligence & Parsing Engines",
      "Model Evaluation & Guardrail Pipelines",
    ],
    capabilities: [
      {
        title: "Production RAG Architecture",
        description:
          "Designing semantic chunking, embedding generation, and hybrid dense/sparse retrieval pipelines that ground LLM outputs in verified factual sources.",
      },
      {
        title: "Vector Databases & Semantic Search",
        description:
          "Implementing scalable vector similarity indexing using PostgreSQL (`pgvector`) or dedicated vector databases with metadata filtering.",
      },
      {
        title: "Deterministic Guardrails & Evaluation",
        description:
          "Establishing confidence score thresholds, structured JSON schema outputs, and automated output evaluation metrics.",
      },
      {
        title: "Enterprise Data Privacy & Security",
        description:
          "Deploying private models and private cloud endpoints configured with zero-data-retention policies to safeguard internal company data from public model training.",
      },
    ],
    technologies: ["Python", "FastAPI", "LangChain", "PgVector", "PostgreSQL", "OpenAI API", "Anthropic Claude", "Docker"],
    process: [
      {
        step: "01",
        title: "Data Audit & Chunking Strategy",
        description: "Analyzing source data formats, document hierarchies, and optimal token chunking boundaries.",
      },
      {
        step: "02",
        title: "Vector Indexing & Embedding",
        description: "Generating high-dimensional embeddings and indexing vectors with localized metadata filtering.",
      },
      {
        step: "03",
        title: "Pipeline & Agent Orchestration",
        description: "Building LangChain retrieval workflows, prompt templates, and deterministic output parsers.",
      },
      {
        step: "04",
        title: "Evaluation & Production Deployment",
        description: "Benchmarking retrieval precision, response groundedness, token costs, and deploying behind secure APIs.",
      },
    ],
    faqs: [
      {
        question: "How does Retrieval-Augmented Generation (RAG) improve answer grounding?",
        answer:
          "RAG works by first searching your private database for the exact paragraphs relevant to a user's question, and then instructing the LLM to generate answers grounded in that retrieved context with source attribution.",
      },
      {
        question: "Is our proprietary company data exposed or used to train external models?",
        answer:
          "No. We configure enterprise private API endpoints with zero-data-retention parameters, or deploy open-source models on your private cloud infrastructure, designed to protect internal data confidentiality.",
      },
      {
        question: "What is the difference between AI Development and AI Automation?",
        answer:
          "AI Development refers to engineering custom AI features, models, and RAG pipelines inside a software application. AI Automation focuses on applying AI to streamline and automate back-office operational business workflows.",
      },
      {
        question: "How do you measure and evaluate AI performance in production?",
        answer:
          "We implement continuous evaluation metrics measuring context relevance, answer faithfulness, latency, and token consumption, backed by automated test suites that run against benchmark question-answer sets.",
      },
    ],
    relatedSolutions: [
      { title: "AI Automation", slug: "ai-automation" },
      { title: "SaaS Development", slug: "saas-development" },
    ],
    relatedCaseStudies: [
      { title: "Synapse AI Intelligence", slug: "synapse-ai-engine" },
    ],
  },

  "custom-software-development": {
    slug: "custom-software-development",
    title: "Custom Software Development",
    metaTitle: "Custom Software Development Firm",
    metaDescription:
      "SevenX Labs engineers bespoke software applications, modular backend systems, and operational platforms tailored to your business workflows.",
    h1: "Bespoke Custom Software Engineering",
    tagline: "Clean Architecture, Scalable Backends, and Freedom from Vendor Lock-In",
    cardTeaser:
      "Tailored enterprise platforms, internal operating systems, and scalable backend infrastructure designed around your exact workflows.",
    overview:
      "When off-the-shelf software packages impose operational constraints or costly per-seat licensing, bespoke software provides the exact functionality and data control your business needs. We engineer maintainable, modular software systems built with clear domain boundaries, strict security controls, and complete source code ownership.",
    whatWeBuild: [
      "Bespoke Business Applications",
      "Internal Operations Platforms",
      "Custom Workflow & Booking Engines",
      "Multi-System API Gateways",
      "Data Processing & Pipeline Services",
      "Role-Based Administrative Portals",
    ],
    capabilities: [
      {
        title: "Domain-Driven Backend Design",
        description:
          "Structuring clean modular monoliths or microservices where business logic is cleanly decoupled from infrastructure and third-party frameworks.",
      },
      {
        title: "Role-Based Access & Security",
        description:
          "Implementing granular permission hierarchies (RBAC), multi-factor authentication, audit logging, and encrypted data storage.",
      },
      {
        title: "High-Throughput Relational Systems",
        description:
          "Architecting robust PostgreSQL database schemas with ACID compliance, connection pooling, and automated backup strategies.",
      },
      {
        title: "Third-Party Integration Middleware",
        description:
          "Connecting legacy databases, payment processors, communication APIs, and ERP systems through resilient middleware adapters.",
      },
    ],
    technologies: ["TypeScript", "Node.js", "Python", "PostgreSQL", "Redis", "Docker", "Prisma", "OpenAPI"],
    process: [
      {
        step: "01",
        title: "Workflow Mapping & Discovery",
        description: "Documenting business logic, entity relationships, security requirements, and operational bottlenecks.",
      },
      {
        step: "02",
        title: "System Architecture Design",
        description: "Drafting schema diagrams, API specifications, and infrastructure blueprints.",
      },
      {
        step: "03",
        title: "Iterative Engineering Sprints",
        description: "Building modular features with continuous integration, automated unit testing, and staging reviews.",
      },
      {
        step: "04",
        title: "Deployment & Knowledge Transfer",
        description: "Production launch, complete documentation handoff, and infrastructure access transfer.",
      },
    ],
    faqs: [
      {
        question: "When should a business invest in custom software instead of buying off-the-shelf tools?",
        answer:
          "Custom software is ideal when commercial tools require clunky workarounds, create vendor lock-in, charge escalating per-user fees, or fail to support your proprietary competitive business processes.",
      },
      {
        question: "How do you ensure our internal team can maintain the codebase after delivery?",
        answer:
          "We write clean, strictly-typed TypeScript/Python code following standard modular patterns, accompanied by comprehensive API documentation, setup guides, and automated test coverage.",
      },
      {
        question: "Can custom software integrate with our existing accounting, CRM, or legacy databases?",
        answer:
          "Yes. We build custom API connectors and data synchronization pipelines to integrate seamlessly with your existing software ecosystem without disrupting active operations.",
      },
      {
        question: "What is your development approach to avoid unnecessary complexity?",
        answer:
          "We prioritize modular monoliths over complex distributed microservices for early and mid-stage systems, keeping infrastructure simple, maintainable, and cost-effective until scale dictates otherwise.",
      },
    ],
    relatedSolutions: [
      { title: "Digital Transformation", slug: "digital-transformation" },
      { title: "SaaS Development", slug: "saas-development" },
    ],
    relatedCaseStudies: [
      { title: "KubeFlow Enterprise", slug: "kubeflow-enterprise" },
    ],
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    metaTitle: "Product UI/UX Design & Design Systems",
    metaDescription:
      "SevenX Labs creates high-conversion product UI/UX designs, Figma design systems, interactive prototypes, and developer-ready interfaces.",
    h1: "Product UI/UX Design & Design Systems",
    tagline: "Clarity, Conversion, and Engineering-Ready Design Systems",
    cardTeaser:
      "User research, interactive wireframing, high-fidelity UI systems, and conversion-focused product interfaces built for clarity.",
    overview:
      "Great software design is about clear user journeys, intuitive data density, and frictionless conversion. We design digital products from user research through high-fidelity Figma design systems, ensuring that every interface is visually refined, accessible, and structured for seamless engineering handoff.",
    whatWeBuild: [
      "Figma Design Systems & Token Libraries",
      "B2B SaaS & Web App Interfaces",
      "Mobile App UI/UX (iOS & Android)",
      "Complex Dashboard & Analytics Layouts",
      "Interactive Clickable Prototypes",
      "User Onboarding & Checkout Flows",
    ],
    capabilities: [
      {
        title: "Figma Component & Token Systems",
        description:
          "Building scalable component libraries with auto-layout, responsive constraints, and design tokens that map directly to CSS/Tailwind variables.",
      },
      {
        title: "User Journey & Onboarding Optimization",
        description:
          "Designing streamlined registration, onboarding, and activation flows that minimize user cognitive load and churn.",
      },
      {
        title: "Data Density & Dashboard UX",
        description:
          "Structuring complex tabular data, visual charts, and filtering mechanisms so power users can navigate dense information effortlessly.",
      },
      {
        title: "Accessibility & WCAG Compliance",
        description:
          "Ensuring color contrast ratios, focus states, and typography hierarchies meet WCAG 2.1 AA accessibility standards.",
      },
    ],
    technologies: ["Figma", "FigJam", "Design Tokens", "Tailwind CSS", "Storybook", "WCAG 2.1 AA"],
    process: [
      {
        step: "01",
        title: "Research & Journey Mapping",
        description: "Mapping user personas, core operational workflows, and information architecture hierarchy.",
      },
      {
        step: "02",
        title: "Wireframing & Prototyping",
        description: "Creating low-fidelity wireframes to validate layout concepts, interaction logic, and content hierarchy.",
      },
      {
        step: "03",
        title: "High-Fidelity Visual Design",
        description: "Applying typography scales, color tokens, micro-interactions, and component states.",
      },
      {
        step: "04",
        title: "Design System & Dev Handoff",
        description: "Documenting spacing tokens, interaction states, and exporting production-ready Figma specs for developers.",
      },
    ],
    faqs: [
      {
        question: "How do you ensure Figma designs translate smoothly into code?",
        answer:
          "Because our design team works alongside software engineers, we build Figma components using autolayout and design tokens that mirror CSS flexbox, grid, and Tailwind CSS utility classes.",
      },
      {
        question: "Do you provide clickable prototypes for user testing and investor presentations?",
        answer:
          "Yes. We create interactive, high-fidelity prototypes in Figma that simulate real user interactions, micro-animations, and screen transitions for stakeholders and user validation.",
      },
      {
        question: "Can you redesign an existing software application without disrupting current users?",
        answer:
          "Yes. We conduct UX audits on existing platforms to identify friction points and iteratively modernize interfaces module by module to avoid jarring changes for active users.",
      },
      {
        question: "What design assets do we receive at the end of the project?",
        answer:
          "You receive the complete Figma project file with organized component libraries, design token documentation, interactive prototypes, and exported graphic assets.",
      },
    ],
    relatedSolutions: [
      { title: "MVP Development", slug: "mvp-development" },
      { title: "SaaS Development", slug: "saas-development" },
    ],
    relatedCaseStudies: [
      { title: "Maison Lumina Luxury", slug: "maison-lumina" },
      { title: "FinFuse Wealth Platform", slug: "finfuse" },
    ],
  },

  "cloud-devops": {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    metaTitle: "Cloud Infrastructure & DevOps Consulting",
    metaDescription:
      "SevenX Labs architects cloud infrastructure on AWS and GCP, automated CI/CD deployment pipelines, Terraform IaC, and Kubernetes clusters.",
    h1: "Cloud Infrastructure & DevOps Engineering",
    tagline: "Infrastructure as Code, Automated CI/CD Pipelines, and High Availability",
    cardTeaser:
      "High-availability cloud infrastructure on AWS and GCP, automated CI/CD deployment pipelines, Kubernetes, and continuous monitoring.",
    overview:
      "Reliable software requires dependable cloud infrastructure. We design, deploy, and maintain cloud environments using Infrastructure as Code (IaC), container orchestration, and automated CI/CD deployment pipelines. Our DevOps engineering ensures your applications deploy predictably, scale dynamically, and remain observable 24/7.",
    whatWeBuild: [
      "Terraform Infrastructure as Code (IaC)",
      "Automated CI/CD Build & Release Pipelines",
      "Docker & Kubernetes (EKS / GKE) Clusters",
      "Multi-Environment VPC & Cloud Networks",
      "Database Clustering & Automated Backup Pipelines",
      "Prometheus & Grafana Observability Stacks",
    ],
    capabilities: [
      {
        title: "Infrastructure as Code (Terraform)",
        description:
          "Declaring entire cloud topologies in version-controlled Terraform code to ensure repeatable, drift-free environments across staging and production.",
      },
      {
        title: "Automated Rolling & Blue/Green Deployments",
        description:
          "Configuring blue/green and rolling release pipelines in GitHub Actions with automated smoke testing and rollback triggers to minimize deployment disruption.",
      },
      {
        title: "Kubernetes & Container Orchestration",
        description:
          "Deploying and managing containerized applications on AWS EKS or GCP GKE with horizontal pod autoscaling and ingress controllers.",
      },
      {
        title: "Observability & Alerting Telemetry",
        description:
          "Setting up centralized logging, distributed tracing, and Prometheus/Grafana dashboards for real-time performance and uptime monitoring.",
      },
    ],
    technologies: ["AWS", "Google Cloud", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Grafana"],
    process: [
      {
        step: "01",
        title: "Infrastructure Audit & Architecture",
        description: "Evaluating current hosting, traffic patterns, security perimeters, and reliability bottlenecks.",
      },
      {
        step: "02",
        title: "IaC Manifest Authoring",
        description: "Writing modular Terraform configurations for VPCs, compute instances, databases, and IAM policies.",
      },
      {
        step: "03",
        title: "CI/CD Pipeline Automation",
        description: "Implementing automated testing, Docker container builds, and deployment workflows in GitHub Actions.",
      },
      {
        step: "04",
        title: "Telemetry & Production Cutover",
        description: "Deploying observability agents, configuring alerts, and executing smooth traffic routing.",
      },
    ],
    faqs: [
      {
        question: "Why is Infrastructure as Code (IaC) with Terraform important?",
        answer:
          "IaC eliminates manual console clicks by defining your entire infrastructure in code. This allows for automated environment replication (dev, staging, prod), version history tracking, and prevents configuration drift.",
      },
      {
        question: "How do you handle deployment updates to minimize service interruption?",
        answer:
          "We implement rolling deployments and blue/green release topologies where new application containers are health-checked before receiving live traffic to prevent service disruption and allow instant rollback if anomalies occur.",
      },
      {
        question: "Can you help optimize and reduce our monthly AWS or Google Cloud bills?",
        answer:
          "Yes. We conduct cloud infrastructure audits to identify over-provisioned compute instances, unattached storage volumes, inefficient database tiers, and implement auto-scaling to control cloud spend.",
      },
      {
        question: "Do you support both AWS and Google Cloud Platform (GCP)?",
        answer:
          "Yes. We have deep engineering experience architecting and managing production infrastructure across both AWS (EKS, ECS, RDS, S3) and GCP (GKE, Cloud SQL, Cloud Run).",
      },
    ],
    relatedSolutions: [
      { title: "Digital Transformation", slug: "digital-transformation" },
      { title: "SaaS Development", slug: "saas-development" },
    ],
    relatedCaseStudies: [
      { title: "KubeFlow Enterprise", slug: "kubeflow-enterprise" },
    ],
  },
};
