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
  relatedCaseStudySlugs: string[];
  relatedServices: {
    title: string;
    slug: string;
  }[];
}

export const SERVICES: Record<string, ServiceDetail> = {
  "web-development": {
    slug: "web-development",
    title: "Web Development",
    metaTitle: "Web Development Company",
    metaDescription:
      "SevenX Labs builds high-performance web applications, custom SaaS platforms, and enterprise web solutions using Next.js, React, and TypeScript.",
    h1: "Web Development That Turns Ideas Into High-Performance Products",
    tagline: "Custom Web Application Engineering Built for Speed, Scale, and Conversion",
    cardTeaser:
      "Custom web applications, SaaS platforms, and interactive dashboards engineered with Next.js, React, and TypeScript.",
    overview:
      "We architect full-stack web products built around strict performance standards, clean code boundaries, and measurable conversion goals. Whether you need a customer-facing web application, an internal operations portal, or a scalable SaaS platform, our team handles front-end interactivity and server-side infrastructure in a single unified workflow.",
    whatWeBuild: [
      "Custom Web Applications",
      "SaaS Platforms",
      "Business & Analytics Dashboards",
      "E-commerce Platforms",
      "API & Backend Systems",
      "Frontend Engineering Architecture",
    ],
    capabilities: [
      {
        title: "Full-Stack Web Engineering",
        description:
          "End-to-end web product development utilizing React, Next.js, Node.js, and TypeScript for structured execution and smooth user experiences.",
      },
      {
        title: "Multi-Tenant SaaS Architecture",
        description:
          "Designing scalable SaaS foundations with isolated data partitioning, subscription billing integration, role-based access control, and automated deployments.",
      },
      {
        title: "High-Concurrency Dashboards",
        description:
          "Building real-time data visualization platforms backed by WebSockets, Redis pub/sub streams, and responsive UI interfaces.",
      },
      {
        title: "Performance & Core Web Vitals",
        description:
          "Optimizing initial bundle size, server-side rendering (SSR), edge caching, and browser execution for fast page availability.",
      },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "TailwindCSS", "PostgreSQL", "Redis"],
    process: [
      {
        step: "01",
        title: "Architecture & Scoping",
        description: "Defining data models, system boundaries, API contracts, and user flows.",
      },
      {
        step: "02",
        title: "UI/UX & Component Design",
        description: "Designing responsive interfaces, component libraries, and interactive wireframes.",
      },
      {
        step: "03",
        title: "Sprint Engineering",
        description: "Writing clean, type-safe code in two-week development sprints with continuous staging previews.",
      },
      {
        step: "04",
        title: "Testing & Deployment",
        description: "Automated CI/CD setup, security vulnerability reviews, performance profiling, and production launch.",
      },
    ],
    faqs: [
      {
        question: "What frameworks do you use for web development?",
        answer:
          "We primarily build on Next.js, React, TypeScript, Node.js, and TailwindCSS for frontend applications, paired with PostgreSQL, Redis, and FastAPI for backend infrastructure.",
      },
      {
        question: "Can SevenX Labs upgrade or rebuild an existing web application?",
        answer:
          "Yes, we frequently audit, refactor, and modernize legacy codebases, improving rendering speed, code organization, and feature scalability.",
      },
    ],
    relatedCaseStudySlugs: ["finfuse", "maison-lumina"],
    relatedServices: [
      { title: "Mobile App Development", slug: "mobile-app-development" },
      { title: "AI Development", slug: "ai-development" },
      { title: "UI/UX Design", slug: "ui-ux-design" },
    ],
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    metaTitle: "Mobile App Development Company",
    metaDescription:
      "SevenX Labs engineers native iOS and Android mobile apps alongside cross-platform React Native applications built for performance and scale.",
    h1: "Mobile Apps Engineered for Smooth Performance and Native Feel",
    tagline: "iOS, Android, and Cross-Platform React Native App Engineering",
    cardTeaser:
      "Native iOS/Android and cross-platform React Native apps designed for fluid touch interactions, offline sync, and fast release cycles.",
    overview:
      "From consumer mobile products to field-agent operational apps, we engineer mobile applications that deliver native rendering performance across devices. We unify cross-platform codebases to minimize engineering friction while writing native modules whenever deep hardware integration or complex background tasks are required.",
    whatWeBuild: [
      "React Native Apps",
      "Native iOS Applications",
      "Native Android Applications",
      "Cross-Platform Mobile Codebases",
      "Real-Time Chat & Telemetry Apps",
      "App Store & Play Store Publishing",
    ],
    capabilities: [
      {
        title: "Cross-Platform React Native",
        description:
          "Building single-codebase mobile applications sharing 85%+ logic between iOS and Android while maintaining native 60 FPS UI performance.",
      },
      {
        title: "Offline Data Synchronization",
        description:
          "Implementing local SQLite/WatermelonDB storage with background sync for seamless operation in low-connectivity environments.",
      },
      {
        title: "Biometric & Hardware Integration",
        description:
          "Integrating Face ID, Touch ID, camera hardware, push notifications, and location services directly into native device APIs.",
      },
      {
        title: "App Store CI/CD Pipelines",
        description:
          "Automated mobile build releases via Fastlane and TestFlight for rapid QA feedback loops and zero-downtime updates.",
      },
    ],
    technologies: ["React Native", "TypeScript", "Swift", "Kotlin", "Fastlane", "SQLite", "Firebase"],
    process: [
      {
        step: "01",
        title: "Mobile UX Mapping",
        description: "Designing touch-first mobile interfaces, gesture controls, and navigation stacks.",
      },
      {
        step: "02",
        title: "Core Architecture Setup",
        description: "Configuring state management, offline database storage, and API authentication logic.",
      },
      {
        step: "03",
        title: "Feature Engineering & Testing",
        description: "Building screens, hardware integration, unit tests, and cross-device testing on physical hardware.",
      },
      {
        step: "04",
        title: "Store Submission & Launch",
        description: "Managing Apple App Store and Google Play Store submission, compliance checks, and metadata configuration.",
      },
    ],
    faqs: [
      {
        question: "Should we build a React Native app or separate native apps?",
        answer:
          "React Native is ideal for 90% of cross-platform business applications, saving up to 40% in engineering timeline while delivering native UI speed.",
      },
      {
        question: "Do you handle App Store and Google Play store submissions?",
        answer:
          "Yes, we manage the complete submission process, including certificate configuration, TestFlight beta distribution, and review guidelines compliance.",
      },
    ],
    relatedCaseStudySlugs: ["finfuse"],
    relatedServices: [
      { title: "Web Development", slug: "web-development" },
      { title: "UI/UX Design", slug: "ui-ux-design" },
    ],
  },
  "ai-development": {
    slug: "ai-development",
    title: "AI Development",
    metaTitle: "AI Software Development & LLM Integration",
    metaDescription:
      "SevenX Labs builds custom AI applications, production RAG pipelines, LLM integrations, AI agents, and vector search engines.",
    h1: "Practical AI Engineering for Real-World Software Products",
    tagline: "LLM Integrations, RAG Architectures, Vector Search, and Autonomous AI Agents",
    cardTeaser:
      "Production AI applications, RAG search engines, vector databases, and autonomous LLM workflows connected directly to your business data.",
    overview:
      "We transition artificial intelligence from research experiments into production software. By orchestrating retrieval pipelines, vector embeddings, fine-tuned models, and structured evaluation checks, we build practical AI systems that process complex document workflows, automate repetitive tasks, and surface real-time data insights.",
    whatWeBuild: [
      "RAG (Retrieval-Augmented Generation) Pipelines",
      "Custom AI Agents & Workflows",
      "LLM API Integrations",
      "Vector Search Engines",
      "Document Processing & Intelligence",
      "Fine-Tuned Domain Models",
    ],
    capabilities: [
      {
        title: "Production RAG Architecture",
        description:
          "Connecting enterprise document repositories with vector databases (PgVector, Pinecone) for accurate ground-truth document retrieval.",
      },
      {
        title: "Autonomous AI Agents",
        description:
          "Building multi-step AI workflow agents capable of tool execution, structured output validation, and external database querying.",
      },
      {
        title: "Structured Schema Extraction",
        description:
          "Extracting clean JSON payloads from unstructured PDFs, emails, invoices, and legacy contracts with strict schema enforcement.",
      },
      {
        title: "AI Evaluation & Guardrails",
        description:
          "Implementing hallucination monitoring, prompt injection prevention, latency tracking, and evaluation test suites.",
      },
    ],
    technologies: ["Python", "FastAPI", "LangChain", "LlamaIndex", "PgVector", "OpenAI API", "Hugging Face"],
    process: [
      {
        step: "01",
        title: "Use-Case & Data Scoping",
        description: "Evaluating your business data, accuracy expectations, latency thresholds, and API model costs.",
      },
      {
        step: "02",
        title: "Vector Pipeline & RAG Prototyping",
        description: "Chunking domain documents, indexing vector embeddings, and tuning retrieval strategies.",
      },
      {
        step: "03",
        title: "Agent & Application Integration",
        description: "Building production API endpoints, user interfaces, validation rules, and error fallback handlers.",
      },
      {
        step: "04",
        title: "Evaluation & Production Scaling",
        description: "Running automated accuracy benchmarks, monitoring inference costs, and deploying to cloud infrastructure.",
      },
    ],
    faqs: [
      {
        question: "How do you prevent AI model hallucinations in business applications?",
        answer:
          "We use strict RAG retrieval boundaries, schema-validated JSON outputs, temperature tuning, and automated ground-truth check logic.",
      },
      {
        question: "Can SevenX Labs integrate AI into our existing software system?",
        answer:
          "Yes, we build lightweight API microservices that connect directly to your existing database, backend servers, or web dashboard.",
      },
    ],
    relatedCaseStudySlugs: ["synapse-ai-engine"],
    relatedServices: [
      { title: "Custom Software Development", slug: "custom-software-development" },
      { title: "Cloud & DevOps", slug: "cloud-devops" },
    ],
  },
  "custom-software-development": {
    slug: "custom-software-development",
    title: "Custom Software Development",
    metaTitle: "Custom Software Development Company",
    metaDescription:
      "SevenX Labs builds custom enterprise software, APIs, database architectures, and internal tools engineered for operational efficiency.",
    h1: "Custom Software Engineered for Your Exact Business Workflows",
    tagline: "Bespoke Software Platforms, Legacy Refactoring, and API Ecosystems",
    cardTeaser:
      "Tailored enterprise software platforms, custom API integrations, and backend architectures built to solve specialized business bottlenecks.",
    overview:
      "When standard commercial software cannot support your business operations or unique data flows, we engineer custom software platforms built from the ground up. We create clean domain abstractions, decoupled microservices, and secure API bridges that integrate cleanly into your existing technical stack.",
    whatWeBuild: [
      "Custom Enterprise Software",
      "Internal Operational Dashboards",
      "API & Microservice Ecosystems",
      "Database Architecture & Migrations",
      "Legacy Software Refactoring",
      "Automated Business Workflow Tools",
    ],
    capabilities: [
      {
        title: "Domain-Driven Design (DDD)",
        description:
          "Architecting software systems around clean domain models, modular service boundaries, and clear data flows.",
      },
      {
        title: "API Ecosystem Development",
        description:
          "Building secure REST and GraphQL API gateways equipped with rate-limiting, OAuth2 authentication, and interactive developer documentation.",
      },
      {
        title: "Database Architecture & Optimization",
        description:
          "Designing normalized relational schemas, query caching layers, indexing strategies, and automated data migration pipelines.",
      },
      {
        title: "Legacy System Modernization",
        description:
          "Incrementally decoupling monolithic codebases into maintainable microservices with zero operational downtime.",
      },
    ],
    technologies: ["Node.js", "Python", "FastAPI", "TypeScript", "PostgreSQL", "Redis", "Docker"],
    process: [
      {
        step: "01",
        title: "Domain Discovery & Schema Scoping",
        description: "Mapping business logic, database relationships, operational edge cases, and API requirements.",
      },
      {
        step: "02",
        title: "Architecture Blueprinting",
        description: "Defining microservice boundaries, API specs, database schemas, and security permissions.",
      },
      {
        step: "03",
        title: "Agile Development Sprints",
        description: "Building backend modules, frontend interfaces, unit test coverage, and continuous integration pipelines.",
      },
      {
        step: "04",
        title: "Integration & Hardening",
        description: "Executing load testing, security auditing, third-party API validation, and production cutover.",
      },
    ],
    faqs: [
      {
        question: "How is custom software development structured?",
        answer:
          "Project scope, technical complexity, third-party integrations, and milestone timelines are defined during an initial architecture discovery phase.",
      },
      {
        question: "Who owns the intellectual property (IP) of the software?",
        answer:
          "You retain full ownership of the custom codebase, intellectual property, architecture designs, and repository assets upon completion.",
      },
    ],
    relatedCaseStudySlugs: ["synapse-ai-engine", "kubeflow-enterprise"],
    relatedServices: [
      { title: "Web Development", slug: "web-development" },
      { title: "AI Development", slug: "ai-development" },
      { title: "Cloud & DevOps", slug: "cloud-devops" },
    ],
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    metaTitle: "UI/UX Design Services & Product Strategy",
    metaDescription:
      "SevenX Labs creates intuitive product designs, wireframes, design systems, and visual interfaces that reduce friction and elevate user engagement.",
    h1: "UI/UX Design That Makes Complex Products Simple to Use",
    tagline: "User-Centered Product Architecture, Interactive Design Systems & Prototypes",
    cardTeaser:
      "User-centered interface design, clickable prototypes, and tokenized Figma design systems built for clean developer handoff.",
    overview:
      "We shape digital product experiences by pairing clear user architecture with modern visual systems. Through interactive wireframing, component design tokens, and iterative user testing, we ensure every screen interface communicates clarity while transitioning smoothly into production code.",
    whatWeBuild: [
      "Product Design & Wireframing",
      "UI Design Systems & Tokens",
      "Mobile & Web App Interface Design",
      "Interactive Prototypes",
      "UX Audits & Redesigns",
      "Developer-Ready Design Handoffs",
    ],
    capabilities: [
      {
        title: "Design Systems & Component Libraries",
        description:
          "Building scalable component kits and tokenized stylesheets for rapid, consistent visual execution.",
      },
      {
        title: "User Experience Architecture",
        description:
          "User journey mapping, information hierarchy design, and intuitive navigation structures based on usability feedback.",
      },
      {
        title: "Visual Interface Design",
        description:
          "Modern typography, glassmorphism accents, smooth micro-interactions, and balanced color palettes tailored to brand identity.",
      },
      {
        title: "Interactive Prototyping & Handoff",
        description:
          "Clickable prototypes for user testing alongside developer documentation for accurate translation into code.",
      },
    ],
    technologies: ["Figma", "Framer", "Adobe CC", "TailwindCSS", "Tokens Studio", "GSAP / Motion"],
    process: [
      {
        step: "01",
        title: "UX Research & Discovery",
        description: "User persona profiling, competitive audits, and core feature scoping.",
      },
      {
        step: "02",
        title: "Wireframing & Information Architecture",
        description: "Low-fidelity layout mapping for fast feedback on UX logic and screen flows.",
      },
      {
        step: "03",
        title: "Design System & UI Polishing",
        description: "Creating visual tokens, high-fidelity screen designs, dark/light themes, and state variations.",
      },
      {
        step: "04",
        title: "Prototype & Engineering Alignment",
        description: "Interactive prototyping, usability validation, and developer handoff support.",
      },
    ],
    faqs: [
      {
        question: "Do you provide design handoffs for internal development teams?",
        answer:
          "Yes, we provide structured Figma libraries with design tokens, asset exports, responsive auto-layouts, and implementation guidelines.",
      },
      {
        question: "Can SevenX Labs handle both design and development?",
        answer:
          "Yes, our integrated team handles product strategy, UI/UX design, frontend development, and backend engineering in a single unified workflow.",
      },
    ],
    relatedCaseStudySlugs: ["maison-lumina", "finfuse"],
    relatedServices: [
      { title: "Web Development", slug: "web-development" },
      { title: "Mobile App Development", slug: "mobile-app-development" },
    ],
  },
  "cloud-devops": {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    metaTitle: "Cloud Infrastructure & DevOps Services",
    metaDescription:
      "SevenX Labs architects resilient cloud environments on AWS and GCP with automated CI/CD pipelines, Kubernetes, Docker, and high availability.",
    h1: "Cloud Infrastructure Built for Performance, Reliability and Scale",
    tagline: "Automated Deployment Pipelines, Container Orchestration, and System Reliability",
    cardTeaser:
      "Automated deployment pipelines, Kubernetes cluster management, Infrastructure as Code (IaC), and cloud reliability engineering.",
    overview:
      "Our cloud engineering team builds automated deployment foundations and resilient server topologies that maintain high uptime. By leveraging Terraform manifests, Docker containerization, and zero-downtime release pipelines, we eliminate manual server management and safeguard your production systems.",
    whatWeBuild: [
      "Cloud Infrastructure Architecture",
      "Automated CI/CD Pipelines",
      "Kubernetes & Container Orchestration",
      "Infrastructure as Code (IaC)",
      "Database Optimization & Replication",
      "Monitoring, Alerting & Security Auditing",
    ],
    capabilities: [
      {
        title: "Infrastructure as Code (Terraform)",
        description:
          "Version-controlled, reproducible cloud provisioning preventing configuration drift and simplifying expansion.",
      },
      {
        title: "Automated CI/CD Release Engineering",
        description:
          "Zero-downtime blue/green or rolling deployments via GitHub Actions, GitLab CI, or ArgoCD.",
      },
      {
        title: "High Availability & Failover Topology",
        description:
          "Multi-AZ failover design, automated database backups, read replicas, and disaster recovery planning.",
      },
      {
        title: "Cloud Cost Optimization (FinOps)",
        description:
          "Auditing idle cloud resources, optimizing spot instances, right-sizing cluster nodes, and setting spending alerts.",
      },
    ],
    technologies: [
      "AWS",
      "Google Cloud Platform (GCP)",
      "Kubernetes",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "Nginx",
      "Datadog / Prometheus",
    ],
    process: [
      {
        step: "01",
        title: "Infrastructure Audit",
        description: "Evaluating existing topology, security policies, scaling limits, and cloud monthly expenditure.",
      },
      {
        step: "02",
        title: "IaC & Pipeline Design",
        description: "Drafting Terraform manifests, containerizing microservices, and defining build/deploy stages.",
      },
      {
        step: "03",
        title: "Staging Migration & Load Testing",
        description: "Deploying shadow staging environments, stress testing endpoints, and validating failover routines.",
      },
      {
        step: "04",
        title: "Production Cutover & Monitoring",
        description: "Executing zero-downtime production cutovers with performance telemetry and automated alerting.",
      },
    ],
    faqs: [
      {
        question: "Which cloud platforms does SevenX Labs support?",
        answer:
          "We primarily specialize in Amazon Web Services (AWS) and Google Cloud Platform (GCP), alongside modern Vercel/Cloudflare edge networks.",
      },
      {
        question: "How do you maintain zero-downtime deployments?",
        answer:
          "We use rolling deployment strategies, blue/green cluster routing, health check probes, and automated rollback triggers if error metrics trip.",
      },
    ],
    relatedCaseStudySlugs: ["kubeflow-enterprise"],
    relatedServices: [
      { title: "Custom Software Development", slug: "custom-software-development" },
      { title: "Web Development", slug: "web-development" },
    ],
  },
};
