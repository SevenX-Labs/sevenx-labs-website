export interface ServiceDetail {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  tagline: string;
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
    overview:
      "SevenX Labs engineers web applications designed for performance, resilience, and user engagement. From complex web portals and multi-tenant SaaS architectures to high-concurrency dashboards, we build frontend and backend systems aligned with core business goals.",
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
        title: "Performance & Web Vitals Optimization",
        description:
          "Optimized initial page rendering, Core Web Vitals compliance, server-side caching, edge deployment, and asset reduction.",
      },
      {
        title: "API-First Architecture & Microservices",
        description:
          "Resilient RESTful APIs and GraphQL interfaces connected to microservices, databases, and third-party integrations.",
      },
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "TailwindCSS",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "Docker",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & Technical Scoping",
        description: "We map business requirements, project architecture, data models, and user flows.",
      },
      {
        step: "02",
        title: "UI/UX & System Architecture",
        description: "Wireframes, high-fidelity prototypes, and cloud backend architecture planning.",
      },
      {
        step: "03",
        title: "Agile Development & CI/CD",
        description: "Iterative two-week sprints with continuous integration and verification.",
      },
      {
        step: "04",
        title: "QA, Security & Launch",
        description: "Automated test suites, security checks, performance optimization, and deployment execution.",
      },
    ],
    faqs: [
      {
        question: "Why choose Next.js and React for web application development?",
        answer:
          "Next.js provides hybrid server-side rendering (SSR), static site generation (SSG), dynamic edge routes, and automatic code splitting, optimizing load speed and search engine indexability.",
      },
      {
        question: "How do you ensure web application security?",
        answer:
          "We follow OWASP recommendations, implement input sanitization, HTTPS-only data transmission, secure session handling, rate limiting, and dependency vulnerability checks.",
      },
      {
        question: "Can SevenX Labs refactor or upgrade an existing web codebase?",
        answer:
          "Yes, we assist clients with legacy codebase migrations, upgrading legacy React apps to modern Next.js App Router, or optimizing database query layers.",
      },
    ],
    relatedCaseStudySlugs: ["finfuse", "maison-lumina"],
    relatedServices: [
      { title: "Mobile App Development", slug: "mobile-app-development" },
      { title: "UI/UX Design", slug: "ui-ux-design" },
      { title: "Cloud & DevOps", slug: "cloud-devops" },
    ],
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    metaTitle: "Mobile App Development Company",
    metaDescription:
      "SevenX Labs builds native and cross-platform iOS and Android mobile applications using React Native and TypeScript, focused on performance and UX.",
    h1: "Mobile Apps Built for Real-World Users and Business Growth",
    tagline: "Cross-Platform iOS & Android Engineering with Responsive UX",
    overview:
      "We design, build, and deploy native and cross-platform mobile apps for iOS and Android. Whether building a consumer fintech app or an internal logistics tool, our apps focus on smooth interactions, offline resilience, and secure API integrations.",
    whatWeBuild: [
      "iOS & Android Mobile Apps",
      "React Native Applications",
      "Cross-Platform Systems",
      "Mobile UI/UX Design Systems",
      "Real-Time Chat & Notification Apps",
      "Fintech & Payment Applications",
    ],
    capabilities: [
      {
        title: "Cross-Platform React Native Engineering",
        description:
          "High code reuse across iOS and Android when the product architecture is suitable for cross-platform development.",
      },
      {
        title: "Real-Time Push & Offline Sync",
        description:
          "Background sync, push notification pipelines via Firebase/APNs, and local storage engines for offline usability.",
      },
      {
        title: "Mobile Security & Biometric Auth",
        description:
          "Hardware-backed Keychain/Keystore security, Face ID / Touch ID authentication, payload encryption, and secure token handling.",
      },
      {
        title: "App Store & Play Store Deployment",
        description:
          "End-to-end submission management, automated builds, TestFlight beta distribution, and store configuration support.",
      },
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "iOS / Swift",
      "Android / Kotlin",
      "Expo",
      "Zustand",
      "GraphQL / REST APIs",
      "Firebase",
    ],
    process: [
      {
        step: "01",
        title: "Product Definition & Mobile UX",
        description: "Defining user journeys, touch interaction guidelines, and offline capabilities.",
      },
      {
        step: "02",
        title: "Architecture & Native Setup",
        description: "Setting up state containers, local storage engines, and native module integrations.",
      },
      {
        step: "03",
        title: "Sprint Build & Mobile Testing",
        description: "Continuous testing on real physical devices and device cloud simulators.",
      },
      {
        step: "04",
        title: "Store Launch & Analytics",
        description: "App Store and Google Play publication along with error logging and user telemetry setup.",
      },
    ],
    faqs: [
      {
        question: "Should I build a native app or a React Native cross-platform app?",
        answer:
          "React Native enables shipping to both iOS and Android simultaneously with high code reuse, reducing duplicated development effort compared with maintaining separate native codebases depending on product scope.",
      },
      {
        question: "How do you handle mobile app updates?",
        answer:
          "We configure over-the-air (OTA) update pipelines for quick bug fixes alongside standard store release pipelines for major version upgrades.",
      },
    ],
    relatedCaseStudySlugs: ["finfuse"],
    relatedServices: [
      { title: "Web Development", slug: "web-development" },
      { title: "UI/UX Design", slug: "ui-ux-design" },
      { title: "AI Development", slug: "ai-development" },
    ],
  },
  "ai-development": {
    slug: "ai-development",
    title: "AI Development & Automation",
    metaTitle: "AI Development Company | AI Agents & RAG Solutions",
    metaDescription:
      "SevenX Labs builds custom AI applications, LLM integrations, RAG architectures, and autonomous AI agents designed to automate workflows and empower teams.",
    h1: "AI Products and Automation Built for Real Business Problems",
    tagline: "Custom LLM Integrations, Retrieval-Augmented Generation (RAG), and Intelligent Workflows",
    overview:
      "We build custom AI software and intelligent workflow pipelines that integrate into your existing business operations. From vector retrieval systems to automated document processing, our AI solutions prioritize accuracy, security, and measurable operational value.",
    whatWeBuild: [
      "Autonomous AI Agents",
      "Retrieval-Augmented Generation (RAG)",
      "LLM Integration & Fine-Tuning",
      "Workflow Automation Systems",
      "Document Intelligence Platforms",
      "AI-Powered Search & Analytics",
    ],
    capabilities: [
      {
        title: "Custom RAG & Vector Search Systems",
        description:
          "Grounded domain Q&A using retrieval, source attribution, vector databases (Pinecone, Qdrant, PGVector), and verification pipelines.",
      },
      {
        title: "Autonomous Agent Orchestration",
        description:
          "Multi-agent systems designed to execute multi-step business workflows, invoke external APIs, and validate outputs.",
      },
      {
        title: "LLM Fine-Tuning & Integration",
        description:
          "Adapting foundational models (OpenAI, Claude, Llama 3) for domain-specific vocabulary, output formatting, and token cost optimization.",
      },
      {
        title: "Enterprise AI Security & Privacy",
        description:
          "Designed to protect proprietary data through private VPC deployments, access controls, data minimization, and secure API configurations.",
      },
    ],
    technologies: [
      "Python",
      "TypeScript",
      "LangChain / LlamaIndex",
      "OpenAI API",
      "Anthropic Claude API",
      "Pinecone / Qdrant / PGVector",
      "FastAPI",
    ],
    process: [
      {
        step: "01",
        title: "AI Opportunity Assessment",
        description: "Identifying high-value workflows, assessing data availability, and selecting model strategies.",
      },
      {
        step: "02",
        title: "Data Pipeline & Vector Setup",
        description: "Cleaning domain data, chunking strategies, embedding generation, and vector index design.",
      },
      {
        step: "03",
        title: "Model Integration & Prompt Tuning",
        description: "Developing evaluation benchmarks, guardrails, fallback mechanisms, and validation tools.",
      },
      {
        step: "04",
        title: "Production Deployment & Monitoring",
        description: "Deploying API endpoints, latency monitoring, token usage tracking, and human review interfaces.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between RAG and fine-tuning an LLM?",
        answer:
          "RAG dynamically retrieves real-time contextual information from a database during user queries without altering model weights. Fine-tuning modifies internal model weights for tone or specialized syntax.",
      },
      {
        question: "How do you protect business data during AI implementation?",
        answer:
          "We utilize enterprise zero-data-retention API configurations or self-hosted open models within your private cloud infrastructure.",
      },
    ],
    relatedCaseStudySlugs: ["synapse-ai-engine"],
    relatedServices: [
      { title: "Custom Software Development", slug: "custom-software-development" },
      { title: "Web Development", slug: "web-development" },
      { title: "Cloud & DevOps", slug: "cloud-devops" },
    ],
  },
  "custom-software-development": {
    slug: "custom-software-development",
    title: "Custom Software Development",
    metaTitle: "Custom Software Development Company",
    metaDescription:
      "SevenX Labs engineers custom business software, enterprise platforms, ERP/CRM systems, and scalable software applications tailored to unique business workflows.",
    h1: "Custom Software Built Around the Way Your Business Works",
    tagline: "Scalable Enterprise Platforms, Internal Tools, and Core Software Architecture",
    overview:
      "Off-the-shelf software often creates operational bottlenecks. SevenX Labs builds custom software solutions engineered around your exact workflows, integrating disparate systems and streamlining manual tasks.",
    whatWeBuild: [
      "Enterprise Resource Planning (ERP)",
      "Custom CRM Platforms",
      "Internal Business Tools & Portals",
      "Workflow Automation Engines",
      "Custom Admin Dashboards",
      "Legacy System Modernization",
    ],
    capabilities: [
      {
        title: "Domain-Driven System Design",
        description:
          "Architecting software around core business domain models to prevent technical debt and simplify future feature expansion.",
      },
      {
        title: "Legacy Infrastructure Modernization",
        description:
          "Refactoring legacy monolithic systems into modern modular services without interrupting ongoing business operations.",
      },
      {
        title: "Integration & Middleware Pipelines",
        description:
          "Connecting databases, ERPs, payment gateways, and third-party SaaS tools through robust middleware integration.",
      },
      {
        title: "Security Best Practices & RBAC",
        description:
          "Granular role-based access control, security best practices, comprehensive activity audit logs, and data retention controls.",
      },
    ],
    technologies: [
      "Node.js",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "Redis",
      "Docker / Kubernetes",
      "AWS / GCP",
      "REST & GraphQL",
    ],
    process: [
      {
        step: "01",
        title: "Workflow Mapping",
        description: "Deep dive into business operations, user roles, data touchpoints, and systemic bottlenecks.",
      },
      {
        step: "02",
        title: "Architecture Specification",
        description: "Database schema modeling, API contract definition, and technology stack selection.",
      },
      {
        step: "03",
        title: "Incremental Engineering",
        description: "Building production-grade modules with test coverage, continuous integration, and feedback loops.",
      },
      {
        step: "04",
        title: "Migration & Support",
        description: "Data migration execution, system integration testing, user role setup, and long-term support.",
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
    overview:
      "Great software engineering requires exceptional visual design. Our UI/UX design team bridges user research with functional product design, delivering design systems and user interfaces that look impressive and drive engagement.",
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
    overview:
      "We design, automate, and manage high-availability cloud infrastructure on AWS and GCP. From containerization and Kubernetes orchestration to CI/CD release engineering, we keep your applications secure, fast, and resilient.",
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
