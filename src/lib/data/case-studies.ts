export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  overview: string;
  challenge: string;
  objective: string;
  solution: string;
  architecture: string[];
  features: {
    title: string;
    description: string;
  }[];
  technologies: string[];
  outcomes: {
    title: string;
    description: string;
  }[];
  contribution: string;
  relatedServices: {
    title: string;
    slug: string;
  }[];
  relatedSolutions: {
    title: string;
    slug: string;
  }[];
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "synapse-ai-engine": {
    slug: "synapse-ai-engine",
    title: "Synapse AI Intelligence Platform",
    subtitle: "Custom Enterprise RAG & Semantic Search Architecture",
    category: "AI & Vector Search",
    metaTitle: "Synapse AI Intelligence Platform Case Study | SevenX Labs",
    metaDescription:
      "How SevenX Labs designed and engineered Synapse AI, an enterprise RAG platform with vector indexing, semantic search, and human-in-the-loop validation.",
    overview:
      "Synapse AI is an enterprise knowledge retrieval and semantic search engine designed to connect disparate private document repositories with large language models, enabling verified question answering and structured data extraction.",
    challenge:
      "The client possessed massive repositories of unstructured documentation, technical PDFs, and historical databases. Standard keyword search failed to extract relevant contextual data, while direct LLM prompting lacked verified source attribution and context control.",
    objective:
      "Engineer a secure, private Retrieval-Augmented Generation (RAG) platform that indexes internal documentation with strict data isolation and low-latency semantic search.",
    solution:
      "SevenX Labs architected a custom Python/FastAPI backend utilizing LangChain and PgVector in PostgreSQL. We implemented hybrid dense/sparse search with deterministic reranking, chunk-level citation linking, and exception escalation queues.",
    architecture: [
      "FastAPI microservices handling document chunking, embedding generation, and vector indexing.",
      "PostgreSQL with pgvector for localized vector similarity search and metadata filtering.",
      "Deterministic reranking engine that validates context relevance before passing prompts to the LLM.",
      "Next.js administrative portal for managing document ingestion and human-in-the-loop review queues.",
    ],
    features: [
      {
        title: "Hybrid Semantic Retrieval",
        description:
          "Combines dense vector embeddings with sparse keyword search for high-precision document recall.",
      },
      {
        title: "Verifiable Citation Linking",
        description:
          "Every generated response links directly to exact source paragraph coordinates for full auditability.",
      },
      {
        title: "Confidence Scoring & Exception Queues",
        description:
          "Automatically flags ambiguous queries and routes edge cases to human reviewers when confidence drops.",
      },
    ],
    technologies: ["Python", "FastAPI", "LangChain", "PostgreSQL", "PgVector", "Next.js", "TypeScript", "Docker"],
    outcomes: [
      {
        title: "Sub-Second Query Latency",
        description: "Delivered fast semantic search and response streaming across extensive document repositories.",
      },
      {
        title: "Grounded Answer Accuracy",
        description: "Significantly improved answer grounding through strict context boundary enforcement and paragraph-level citation mapping.",
      },
      {
        title: "Enterprise Data Privacy",
        description: "Private deployment configured around enterprise data privacy and retention policies.",
      },
    ],
    contribution:
      "Full system architecture, RAG vector pipeline engineering, backend API development, and frontend dashboard integration.",
    relatedServices: [
      { title: "AI Development", slug: "ai-development" },
      { title: "Web Development", slug: "web-development" },
      { title: "Cloud & DevOps", slug: "cloud-devops" },
    ],
    relatedSolutions: [
      { title: "AI Automation", slug: "ai-automation" },
      { title: "SaaS Development", slug: "saas-development" },
    ],
  },
  finfuse: {
    slug: "finfuse",
    title: "FinFuse Wealth & Analytics Platform",
    subtitle: "High-Concurrency Real-Time Financial App & Web Dashboard",
    category: "Web & Mobile",
    metaTitle: "FinFuse Wealth Platform Case Study | SevenX Labs",
    metaDescription:
      "Explore how SevenX Labs built FinFuse, a cross-platform iOS & Android mobile trading app and web dashboard for real-time market tracking.",
    overview:
      "FinFuse is a wealth management and portfolio intelligence application combining real-time market data streaming, automated portfolio rebalancing, and interactive charting across mobile and web platforms.",
    challenge:
      "The client required an application capable of maintaining low-latency WebSocket market feeds across mobile and desktop interfaces during high-volume trading hours without UI stutter, frame drops, or state desynchronization.",
    objective:
      "Architect a unified React Native mobile codebase alongside a Next.js web portal, powered by a resilient WebSocket streaming infrastructure.",
    solution:
      "SevenX Labs engineered a high-concurrency Node.js event architecture backed by Redis pub/sub messaging. The mobile app was built with React Native utilizing GPU-accelerated canvas charts for fluid 60fps technical analysis.",
    architecture: [
      "React Native cross-platform mobile application sharing core business logic with the web portal.",
      "Node.js & Redis pub/sub streaming microservices broadcasting real-time price ticks.",
      "PostgreSQL database with read replicas handling high-throughput transactional logging.",
      "Biometric authentication (Face ID / Fingerprint) integration for instant secure mobile access.",
    ],
    features: [
      {
        title: "Real-Time WebSocket Streaming",
        description:
          "Low-latency persistent socket connections broadcasting instantaneous financial market updates.",
      },
      {
        title: "GPU-Accelerated Charts",
        description:
          "Smooth responsive charting modules optimized for interactive technical indicator analysis.",
      },
      {
        title: "Offline Portfolio Caching",
        description:
          "Optimistic local storage allowing investors to view balances and pending orders without connectivity.",
      },
    ],
    technologies: ["React Native", "Next.js", "TypeScript", "Node.js", "Redis", "WebSockets", "PostgreSQL"],
    outcomes: [
      {
        title: "Continuous State Synchronization",
        description: "Seamless real-time synchronization across mobile apps and web administrative dashboards.",
      },
      {
        title: "Smooth 60fps Mobile Performance",
        description: "Fluid rendering across iOS and Android without frame drops during heavy data streaming.",
      },
      {
        title: "Unified Codebase Velocity",
        description: "Shared business logic allowed new features to deploy simultaneously to web and mobile.",
      },
    ],
    contribution:
      "End-to-end product design, React Native mobile engineering, Next.js web application, and real-time backend streaming architecture.",
    relatedServices: [
      { title: "Mobile App Development", slug: "mobile-app-development" },
      { title: "Web Development", slug: "web-development" },
      { title: "UI/UX Design", slug: "ui-ux-design" },
    ],
    relatedSolutions: [
      { title: "SaaS Development", slug: "saas-development" },
      { title: "MVP Development", slug: "mvp-development" },
    ],
  },
  "maison-lumina": {
    slug: "maison-lumina",
    title: "Maison Lumina Luxury Commerce",
    subtitle: "Interactive 3D Web Storefront & Product Customizer",
    category: "E-Commerce & 3D Web",
    metaTitle: "Maison Lumina Luxury Case Study | SevenX Labs",
    metaDescription:
      "How SevenX Labs designed and developed a luxury e-commerce web platform with interactive 3D WebGL product previews and optimized page speeds.",
    overview:
      "Maison Lumina is a bespoke luxury design brand that required a digital showroom allowing customers to interactively customize furniture finishes, textures, and dimensions in photorealistic 3D before purchasing.",
    challenge:
      "High-fidelity 3D assets typically require large file downloads, causing slow page loads, poor Core Web Vitals (LCP), and high bounce rates on mobile networks.",
    objective:
      "Deliver a fast, responsive storefront featuring 3D product customization while maintaining sub-second load times and smooth mobile interactivity.",
    solution:
      "SevenX Labs engineered a custom Next.js storefront using React Three Fiber with Draco 3D mesh compression and progressive Level-of-Detail (LOD) streaming, reducing asset sizes while preserving photorealistic lighting.",
    architecture: [
      "Next.js edge-rendered storefront with server-side caching and dynamic metadata.",
      "React Three Fiber WebGL canvas with Draco-compressed GLTF assets and procedural lighting.",
      "Stripe payment gateway integration supporting multi-currency checkout and automated invoicing.",
      "Headless content layer allowing rapid catalog updates without redeployments.",
    ],
    features: [
      {
        title: "Interactive 3D Customizer",
        description:
          "Real-time 360-degree rotation, zoom, and procedural material swapping on luxury catalog items.",
      },
      {
        title: "Draco Mesh Optimization",
        description:
          "Advanced compression pipeline reducing 3D file weights for fast mobile initial rendering.",
      },
      {
        title: "Multi-Currency Global Checkout",
        description:
          "Localized checkout with automated tax calculation, currency conversion, and fraud prevention.",
      },
    ],
    technologies: ["Next.js", "React Three Fiber", "Three.js", "TypeScript", "TailwindCSS", "Stripe API"],
    outcomes: [
      {
        title: "Optimized Core Web Vitals",
        description: "Fast Largest Contentful Paint (LCP) and smooth rendering even on mobile 4G networks.",
      },
      {
        title: "High-Fidelity Product Visualization",
        description: "Photorealistic material shaders accurately representing fabric, wood, and metal finishes.",
      },
      {
        title: "Frictionless Global Commerce",
        description: "Seamless international payments and multi-currency checkout workflow.",
      },
    ],
    contribution:
      "UI/UX product design, 3D WebGL asset optimization pipeline, Next.js frontend development, and Stripe payment integration.",
    relatedServices: [
      { title: "Web Development", slug: "web-development" },
      { title: "UI/UX Design", slug: "ui-ux-design" },
    ],
    relatedSolutions: [
      { title: "MVP Development", slug: "mvp-development" },
      { title: "SaaS Development", slug: "saas-development" },
    ],
  },
  "kubeflow-enterprise": {
    slug: "kubeflow-enterprise",
    title: "KubeFlow Enterprise Cloud",
    subtitle: "Multi-Region Kubernetes Infrastructure & DevOps Automation",
    category: "Cloud & DevOps",
    metaTitle: "KubeFlow Enterprise DevOps Case Study | SevenX Labs",
    metaDescription:
      "Discover how SevenX Labs modernized enterprise infrastructure using Terraform, automated Kubernetes clusters, and continuous CI/CD deployment pipelines.",
    overview:
      "KubeFlow Enterprise provides continuous cloud orchestration and automated deployment pipelines for distributed enterprise services operating across global cloud regions.",
    challenge:
      "The client's legacy infrastructure relied on manual server provisioning, causing configuration drift between environments, slow release cycles, and service interruptions during major updates.",
    objective:
      "Transition monolithic server workloads to automated Infrastructure as Code (IaC) using Terraform and multi-region Kubernetes clusters designed for high availability.",
    solution:
      "SevenX Labs architected a multi-region EKS/GKE cluster topology configured with automated blue/green deployment pipelines via GitHub Actions and Terraform, backed by Prometheus telemetry.",
    architecture: [
      "Modular Terraform IaC manifests managing multi-environment VPCs, subnets, and Kubernetes clusters.",
      "Dockerized microservices orchestrated by Kubernetes with Horizontal Pod Autoscaling (HPA).",
      "Automated blue/green deployment pipelines with automated health checks and instant rollback triggers.",
      "Prometheus and Grafana observability stack providing real-time infrastructure metrics and alerting.",
    ],
    features: [
      {
        title: "Automated Blue/Green Deployments",
        description:
          "Continuous releases with automated canary traffic routing and health-check rollbacks.",
      },
      {
        title: "Declarative Infrastructure as Code",
        description:
          "Entire cloud footprint defined in version-controlled Terraform modules for reproducible environments.",
      },
      {
        title: "Dynamic Auto-Scaling",
        description:
          "Automated horizontal pod scaling matching computational capacity to real-time traffic demand.",
      },
    ],
    technologies: ["Kubernetes", "AWS", "Google Cloud", "Terraform", "Docker", "GitHub Actions", "Prometheus", "Grafana"],
    outcomes: [
      {
        title: "Automated Rolling Deployments",
        description: "Minimized release-window maintenance disruption through automated rolling blue/green pipelines.",
      },
      {
        title: "Elimination of Configuration Drift",
        description: "Ensured consistent parity between staging and production environments via declarative IaC.",
      },
      {
        title: "Optimized Cloud Resource Utilization",
        description: "Right-sized node pools and automated scaling reduced unnecessary idle cloud capacity.",
      },
    ],
    contribution:
      "Cloud architecture design, Terraform IaC writing, Kubernetes cluster setup, and automated CI/CD pipeline engineering.",
    relatedServices: [
      { title: "Cloud & DevOps", slug: "cloud-devops" },
      { title: "Custom Software Development", slug: "custom-software-development" },
    ],
    relatedSolutions: [
      { title: "Digital Transformation", slug: "digital-transformation" },
      { title: "SaaS Development", slug: "saas-development" },
    ],
  },
};
