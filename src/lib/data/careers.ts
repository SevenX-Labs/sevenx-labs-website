export interface JobPosition {
  id: string;
  title: string;
  category: "Engineering" | "AI & Data" | "Design" | "Infrastructure" | "Product";
  type: "Full-time" | "Contract" | "Part-time";
  location: string;
  experience: string;
  techStack: string[];
  summary: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
  featured?: boolean;
}

export const OPEN_POSITIONS: JobPosition[] = [
  {
    id: "sr-fullstack-engineer",
    title: "Senior Full Stack Engineer (Next.js & NestJS)",
    category: "Engineering",
    type: "Full-time",
    location: "Remote / Hybrid (India)",
    experience: "4+ Years",
    featured: true,
    techStack: ["Next.js 16", "React 19", "TypeScript", "Node.js", "NestJS", "PostgreSQL", "Prisma", "TailwindCSS"],
    summary: "Architect and build high-performance web applications, multi-tenant SaaS platforms, and scalable eCommerce backends for ambitious startups.",
    responsibilities: [
      "Design and implement scalable REST and GraphQL APIs using NestJS and Node.js.",
      "Develop responsive, high-speed frontend applications using Next.js 16, React 19, and Server Components.",
      "Optimize database queries, indexing, and data models in PostgreSQL and Prisma.",
      "Collaborate closely with UI/UX designers and product managers to deliver flawless digital experiences.",
      "Mentor junior engineers and champion clean architecture, unit testing, and code reviews."
    ],
    requirements: [
      "4+ years of professional experience building web applications with TypeScript, React, and Node.js.",
      "Deep understanding of Next.js App Router, SSR, SSG, and serverless architectures.",
      "Proven track record with NestJS, Express, microservices, and relational databases.",
      "Strong grasp of frontend performance optimization, Web Vitals, and state management.",
      "Excellent problem-solving skills and autonomous ownership mentality."
    ],
    perks: [
      "Competitive Salary + Performance Bonuses",
      "Flexible Remote-First Work Culture",
      "Latest M-Series MacBook / Workstation Stipend",
      "Annual Health Insurance Coverage",
      "Dedicated Learning & Course Allowance"
    ]
  },
  {
    id: "ai-llm-engineer",
    title: "AI & LLM Integration Engineer",
    category: "AI & Data",
    type: "Full-time",
    location: "Remote (Global)",
    experience: "2+ Years",
    featured: true,
    techStack: ["Python", "LangChain", "LlamaIndex", "OpenAI API", "Anthropic Claude", "Pinecone", "FastAPI", "TypeScript"],
    summary: "Build autonomous AI agents, automated workflow pipelines, RAG systems, and custom LLM integrations for enterprise client products.",
    responsibilities: [
      "Develop and fine-tune Retrieval-Augmented Generation (RAG) pipelines and vector database indexing.",
      "Build custom AI agents, tool invocation scripts, and multi-modal workflows using Python and FastAPI.",
      "Integrate state-of-the-art LLMs (OpenAI, Anthropic, Gemini, Llama) into production web applications.",
      "Evaluate and benchmark model accuracy, latency, and token consumption to optimize operational costs.",
      "Establish robust guardrails, prompt engineering standards, and fallback strategies."
    ],
    requirements: [
      "2+ years of experience developing AI/ML applications, LLM agents, or vector search pipelines.",
      "Proficiency in Python, FastAPI, TypeScript, and modern AI frameworks (LangChain, LlamaIndex).",
      "Hands-on experience with vector databases like Pinecone, Qdrant, Weaviate, or Pgvector.",
      "Solid understanding of embeddings, semantic search, prompt engineering, and agentic workflows.",
      "Ability to ship production-ready code with minimal oversight."
    ],
    perks: [
      "Top-tier compensation matching global benchmarks",
      "Direct R&D budget for experimental AI tooling & GPU credits",
      "Flexible work hours across timezones",
      "Health & Wellness stipend",
      "Opportunity to shape next-gen AI products"
    ]
  },
  {
    id: "lead-uiux-designer",
    title: "Lead UI/UX Product Designer",
    category: "Design",
    type: "Full-time",
    location: "Remote / Hybrid",
    experience: "3+ Years",
    featured: true,
    techStack: ["Figma", "Design Systems", "Interactive Prototyping", "User Research", "Framer", "Micro-animations"],
    summary: "Craft iconic visual identity systems, intuitive web & mobile user interfaces, and scalable design component libraries.",
    responsibilities: [
      "Lead product design from initial wireframes and interactive prototypes to high-fidelity UI specifications.",
      "Build and maintain comprehensive Figma design systems with reusable tokens, variants, and dark modes.",
      "Conduct user research, usability testing, and competitive UX benchmarking.",
      "Work hand-in-hand with frontend engineers to ensure pixel-perfect design implementation.",
      "Create engaging micro-animations, motion concepts, and marketing collateral."
    ],
    requirements: [
      "3+ years of experience designing web and mobile applications for tech companies or digital agencies.",
      "A stunning portfolio demonstrating mastery of typography, visual hierarchy, grid systems, and layout aesthetics.",
      "Expert knowledge of Figma, component properties, auto-layout, and prototyping tools.",
      "Strong understanding of modern web design trends (glassmorphism, micro-interactions, dark mode).",
      "Clear articulate communication skills to defend design decisions."
    ],
    perks: [
      "Competitive Salary package",
      "Work with global clients on high-visibility projects",
      "Framer & Figma Professional licenses provided",
      "Flexible working schedule",
      "Creative freedom with zero micro-management"
    ]
  },
  {
    id: "react-native-engineer",
    title: "React Native Mobile App Engineer",
    category: "Engineering",
    type: "Full-time",
    location: "Remote (India)",
    experience: "3+ Years",
    featured: false,
    techStack: ["React Native", "Expo", "TypeScript", "Zustand", "iOS", "Android", "REST APIs", "Push Notifications"],
    summary: "Build high-speed, cross-platform iOS and Android applications with fluid animations and offline-first capabilities.",
    responsibilities: [
      "Develop cross-platform mobile applications using React Native, Expo, and TypeScript.",
      "Implement smooth 60fps animations, custom UI components, and native device feature bridges.",
      "Integrate payment gateways, push notifications, analytics, and deep linking.",
      "Publish and manage iOS App Store and Google Play Store build submissions.",
      "Maintain high test coverage, crash analytics monitoring, and performance tuning."
    ],
    requirements: [
      "3+ years building and deploying production React Native applications.",
      "Solid command of JavaScript/TypeScript, React hooks, and mobile state management.",
      "Experience submitting apps to Apple App Store and Google Play Console.",
      "Familiarity with native iOS (Swift) or Android (Kotlin) code is a major plus.",
      "Strong focus on mobile UX, battery efficiency, and network resilience."
    ],
    perks: [
      "Competitive base pay + annual performance bonus",
      "Remote work flexibilities",
      "Testing hardware & device allowance",
      "Health Insurance coverage",
      "Skill development budget"
    ]
  },
  {
    id: "devops-cloud-engineer",
    title: "Cloud Infrastructure & DevOps Engineer",
    category: "Infrastructure",
    type: "Full-time",
    location: "Remote",
    experience: "3+ Years",
    featured: false,
    techStack: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Vercel", "Cloudflare", "Nginx"],
    summary: "Architect automated CI/CD pipelines, container orchestration, zero-downtime deployments, and cloud security monitoring.",
    responsibilities: [
      "Design, provision, and maintain cloud infrastructure on AWS and Cloudflare using Terraform.",
      "Build automated GitHub Actions CI/CD pipelines for Next.js, Node.js, and Python microservices.",
      "Manage Docker container registries, Kubernetes clusters, and load balancing configurations.",
      "Implement centralized logging, real-time alerting, and automated security vulnerability scanning.",
      "Optimize cloud infrastructure costs, latency, and disaster recovery strategies."
    ],
    requirements: [
      "3+ years experience as a DevOps or Site Reliability Engineer (SRE).",
      "Strong proficiency with AWS services (EC2, ECS, S3, RDS, CloudFront, Route53).",
      "Expert knowledge of Docker, Kubernetes, Terraform, and shell scripting.",
      "Experience managing Vercel deployments, DNS routing, and SSL certificates.",
      "Proven ability to debug complex network, memory, and deployment issues."
    ],
    perks: [
      "Industry-leading compensation package",
      "100% remote workspace flexibility",
      "AWS Certification sponsorship",
      "Comprehensive medical coverage",
      "High autonomy and system ownership"
    ]
  }
];

export const CAREER_STATS = [
  { value: "100%", label: "Remote & Flexible", sublabel: "Work from anywhere" },
  { value: "5+", label: "Product Squads", sublabel: "Web, AI & Mobile" },
  { value: "98%", label: "Client Satisfaction", sublabel: "World-class engineering" },
  { value: "0%", label: "Corporate Bureaucracy", sublabel: "Pure impact & execution" },
];

export const CULTURE_VALUES = [
  {
    icon: "Code2",
    title: "Engineering Mastery",
    description: "We don't settle for code that just works. We write clean, self-documenting, performant TypeScript and resilient architectures."
  },
  {
    icon: "Zap",
    title: "High Autonomy & Speed",
    description: "You own your features end-to-end. We minimize meeting overhead so you can stay in flow state and ship impactful code."
  },
  {
    icon: "Sparkles",
    title: "Cutting-Edge Stack",
    description: "We work with Next.js 16, React 19, NestJS, Python AI models, and modern cloud infrastructures—never legacy tech debt."
  },
  {
    icon: "ShieldCheck",
    title: "Work-Life Balance",
    description: "High performance doesn't mean burnout. Flexible work hours, async communication, and respect for personal time."
  }
];
