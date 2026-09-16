export interface JobPosition {
  id: string;
  title: string;
  category: "Engineering" | "AI & Data" | "Design" | "Infrastructure" | "Product";
  type: "Full-time" | "Part-time" | "Contract";
  location: string;
  experience: string;
  featured: boolean;
  techStack: string[];
  summary: string;
  responsibilities: string[];
  requirements: string[];
  perks: string[];
}

// No active job openings currently as per company directive
export const OPEN_POSITIONS: JobPosition[] = [];

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
