export interface CaseStudyDetail {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  metric: string;
  image: string;
  tags: string[];
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
  results: {
    stat: string;
    label: string;
  }[];
  contribution: string;
  relatedServices: {
    title: string;
    slug: string;
  }[];
}

export const CASE_STUDIES: Record<string, CaseStudyDetail> = {
  "synapse-ai-engine": {
    slug: "synapse-ai-engine",
    title: "Synapse AI Automation Engine",
    subtitle: "Enterprise LLM Agent Platform & Vector Search",
    category: "AI & SaaS",
    metaTitle: "Synapse AI Case Study | SevenX Labs",
    metaDescription:
      "How SevenX Labs designed and engineered Synapse AI Engine, an autonomous RAG workflow platform reducing manual data processing time by 80%.",
    metric: "80% Time Reduction",
    image: "/portfolio_ai_saas.png",
    tags: ["AI Agents", "Python / FastAPI", "LangChain", "PGVector", "Next.js"],
    overview:
      "Synapse AI is an enterprise automation engine built to orchestrate multi-step document extraction, domain Q&A, and workflow execution across unstructured company data repositories.",
    challenge:
      "Enterprise teams were spending thousands of manual hours copying data between unstructured PDF reports, legacy databases, and CRM platforms, causing operational delays and error rates.",
    objective:
      "Build a secure, private vector search and multi-agent pipeline that processes unstructured documents in seconds while providing zero-hallucination accuracy controls and complete audit trails.",
    solution:
      "SevenX Labs architected a hybrid Retrieval-Augmented Generation (RAG) platform using PGVector and LangChain connected to a custom Next.js admin portal. The platform parses incoming PDFs, extracts key entities into structured JSON schemas, and coordinates autonomous workflow execution.",
    architecture: [
      "Next.js App Router frontend with real-time SSE streaming for live token generation.",
      "FastAPI microservices handling document parsing, vector embedding generation, and prompt pipeline execution.",
      "PostgreSQL with PGVector extension for low-latency similarity search.",
      "Isolated VPC deployment with enterprise data privacy contracts.",
    ],
    features: [
      {
        title: "Sub-Second Semantic Retrieval",
        description: "Hybrid vector search combining keyword sparse vectors with dense embeddings for high-precision retrieval.",
      },
      {
        title: "Human-in-the-Loop Validation",
        description: "Low-confidence extraction triggers automatically route to human review queues before database commit.",
      },
      {
        title: "Role-Based Audit Logging",
        description: "Comprehensive trail logging every query, prompt generation, document view, and API invocation.",
      },
    ],
    technologies: ["Next.js", "TypeScript", "Python", "FastAPI", "LangChain", "PGVector", "PostgreSQL", "Docker"],
    results: [
      { stat: "80%", label: "Reduction in document processing time" },
      { stat: "99.2%", label: "Extraction accuracy rate" },
      { stat: "< 400ms", label: "Average query retrieval latency" },
    ],
    contribution:
      "SevenX Labs led product strategy, UX design, vector pipeline architecture, backend API engineering, and frontend dashboard implementation.",
    relatedServices: [
      { title: "AI Development & Automation", slug: "ai-development" },
      { title: "Web Development", slug: "web-development" },
      { title: "Custom Software Development", slug: "custom-software-development" },
    ],
  },
  finfuse: {
    slug: "finfuse",
    title: "FinFuse Wealth Platform",
    subtitle: "High-Concurrency Web & Mobile Trading App",
    category: "Web & Mobile",
    metaTitle: "FinFuse Wealth Platform Case Study | SevenX Labs",
    metaDescription:
      "Explore how SevenX Labs built FinFuse, a cross-platform iOS & Android mobile trading app and web dashboard for 100,000+ active investors.",
    metric: "100k+ Active Users",
    image: "/portfolio_fintech.png",
    tags: ["React Native", "TypeScript", "Node.js", "WebSockets"],
    overview:
      "FinFuse is a next-generation wealth management platform combining real-time stock and portfolio tracking, automated recurring investments, and interactive charting on web and mobile.",
    challenge:
      "The client required an application capable of maintaining WebSocket price feeds across mobile and web during peak market opening hours without crashing or lagging.",
    objective:
      "Architect a unified React Native mobile codebase alongside a Next.js web application powered by a resilient WebSocket event backend.",
    solution:
      "SevenX Labs engineered a high-concurrency Node.js microservices architecture backed by Redis pub/sub. The mobile application was built using React Native with custom native charting modules for 60fps rendering.",
    architecture: [
      "React Native mobile app for iOS & Android sharing 85%+ code with web components.",
      "Node.js & Redis pub/sub microservices streaming real-time market ticks.",
      "Biometric hardware integration (Face ID / Fingerprint) for instant secure access.",
    ],
    features: [
      {
        title: "Real-Time Ticker Stream",
        description: "Low-latency WebSocket connections delivering sub-100ms market updates.",
      },
      {
        title: "Interactive Financial Charts",
        description: "Custom GPU-accelerated canvas charts for technical indicator analysis.",
      },
    ],
    technologies: ["React Native", "Next.js", "TypeScript", "Node.js", "Redis", "WebSockets", "PostgreSQL"],
    results: [
      { stat: "100,000+", label: "Active daily investors" },
      { stat: "99.99%", label: "System availability SLA" },
      { stat: "60 FPS", label: "Smooth chart rendering" },
    ],
    contribution:
      "Full design and end-to-end engineering of web portal, iOS app, Android app, and WebSocket streaming backend.",
    relatedServices: [
      { title: "Mobile App Development", slug: "mobile-app-development" },
      { title: "Web Development", slug: "web-development" },
      { title: "UI/UX Design", slug: "ui-ux-design" },
    ],
  },
  "maison-lumina": {
    slug: "maison-lumina",
    title: "Maison Lumina Luxury",
    subtitle: "3D E-Commerce Platform & Design System",
    category: "E-Commerce",
    metaTitle: "Maison Lumina Luxury Case Study | SevenX Labs",
    metaDescription:
      "How SevenX Labs designed and developed a high-converting luxury e-commerce web platform with interactive 3D product previews and sub-second loads.",
    metric: "+45% Conversion",
    image: "/portfolio_ecommerce.png",
    tags: ["E-Commerce", "Three.js", "TailwindCSS", "Stripe API"],
    overview:
      "Maison Lumina is a high-end luxury furniture brand requiring an online storefront that mirrors the physical luxury showroom experience through interactive 3D WebGL product customization.",
    challenge:
      "Heavy 3D models typically slow down web pages, leading to high bounce rates and poor Core Web Vitals on mobile devices.",
    objective:
      "Deliver a sub-second page load storefront featuring 3D product previews without sacrificing mobile loading speed.",
    solution:
      "SevenX Labs built a custom Next.js storefront using Three.js / React Three Fiber with Draco 3D mesh compression, reducing model load sizes by 75% while rendering photorealistic materials.",
    architecture: [
      "Next.js headless storefront hosted on edge serverless nodes.",
      "Three.js WebGL canvas renderer with Draco-compressed 3D GLTF assets.",
      "Stripe payment gateway integration for global multi-currency checkout.",
    ],
    features: [
      {
        title: "Interactive 3D Customizer",
        description: "Customers rotate, zoom, and swap materials on luxury furniture pieces in real-time.",
      },
      {
        title: "Sub-Second LCP Performance",
        description: "Optimized mesh loading ensuring instant page availability on mobile and desktop.",
      },
    ],
    technologies: ["Next.js", "Three.js", "React Three Fiber", "TailwindCSS", "TypeScript", "Stripe API"],
    results: [
      { stat: "+45%", label: "Conversion rate increase" },
      { stat: "0.8s", label: "Largest Contentful Paint (LCP)" },
      { stat: "75%", label: "Reduction in 3D asset file size" },
    ],
    contribution:
      "Brand identity alignment, UI/UX design, 3D WebGL optimization, and full-stack Next.js web engineering.",
    relatedServices: [
      { title: "Web Development", slug: "web-development" },
      { title: "UI/UX Design", slug: "ui-ux-design" },
    ],
  },
  "kubeflow-enterprise": {
    slug: "kubeflow-enterprise",
    title: "KubeFlow Enterprise",
    subtitle: "Multi-Region Cloud Infrastructure & DevOps",
    category: "Cloud Ops",
    metaTitle: "KubeFlow Enterprise DevOps Case Study | SevenX Labs",
    metaDescription:
      "Discover how SevenX Labs migrated legacy enterprise monoliths to automated multi-region Kubernetes clusters with 99.99% SLA.",
    metric: "99.99% Uptime SLA",
    image: "/portfolio_cloud.png",
    tags: ["Kubernetes", "AWS / GCP", "Docker", "Terraform"],
    overview:
      "KubeFlow Enterprise provides continuous cloud orchestration for data processing workloads across global multi-region deployments.",
    challenge:
      "Legacy monolithic infrastructure was suffering from deployment outages, manual server configuration drift, and high monthly cloud costs.",
    objective:
      "Migrate workloads to automated Infrastructure as Code (IaC) using Terraform and Kubernetes, achieving 99.99% SLA uptime.",
    solution:
      "SevenX Labs architected a multi-region EKS/GKE cluster topology configured with automated blue/green deployment pipelines via GitHub Actions and Terraform.",
    architecture: [
      "Terraform IaC manifests managing multi-region EKS clusters.",
      "Dockerized microservices with automated Horizontal Pod Autoscaling (HPA).",
      "Datadog monitoring and alert infrastructure.",
    ],
    features: [
      {
        title: "Zero-Downtime Blue/Green Deploys",
        description: "Continuous deployments with instant rollback capability if error metrics trip.",
      },
      {
        title: "Automated Cloud FinOps",
        description: "Node right-sizing and spot instance usage cut cloud infrastructure spend by 35%.",
      },
    ],
    technologies: ["Kubernetes", "AWS", "Google Cloud", "Terraform", "Docker", "GitHub Actions", "Datadog"],
    results: [
      { stat: "99.99%", label: "Guaranteed uptime SLA" },
      { stat: "35%", label: "Cloud cost savings" },
      { stat: "0", label: "Downtime during major releases" },
    ],
    contribution:
      "Cloud architecture design, Terraform IaC writing, Kubernetes cluster setup, and CI/CD pipeline automation.",
    relatedServices: [
      { title: "Cloud & DevOps", slug: "cloud-devops" },
      { title: "Custom Software Development", slug: "custom-software-development" },
    ],
  },
};
