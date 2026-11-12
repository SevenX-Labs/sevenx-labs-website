export const SITE_CONFIG = {
  name: "SevenX Labs",
  legalName: "SevenX Labs",
  tagline: "Digital Products & Engineering Studio",
  description:
    "SevenX Labs designs and engineers high-performance web applications, mobile apps, AI solutions and custom software for startups and growing businesses.",
  defaultDomain: "https://sevenxlabs.in",
  get siteUrl() {
    return process.env.NEXT_PUBLIC_SITE_URL || this.defaultDomain;
  },
  email: "tanishka@sevenxlabs.in",
  careersEmail: "hr@sevenxlabs.in",
  phone: "8356093600",
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/sevenx-labs",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/sevenxlabs",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "", // Omit generic github link if not configured
  },
  founders: ["SevenX Labs Engineering Team"],
};

export function absoluteUrl(path: string): string {
  const baseUrl = SITE_CONFIG.siteUrl
    .replace(/^https?:\/\/(www\.)?/, "https://")
    .replace(/\/$/, "");
  if (!path || path === "/") {
    return baseUrl;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath.replace(/\/$/, "")}`;
}
