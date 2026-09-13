export const SITE_CONFIG = {
  name: "SevenX Labs",
  legalName: "SevenX Labs",
  tagline: "Digital Products & Engineering Studio",
  description:
    "SevenX Labs designs and engineers high-performance web applications, mobile apps, AI solutions and custom software for startups and growing businesses.",
  defaultDomain: "https://sevenx-labs.vercel.app",
  get siteUrl() {
    return process.env.NEXT_PUBLIC_SITE_URL || this.defaultDomain;
  },
  email: "sevenxlabs07@gmail.com",
  social: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/sevenx-labs",
    github: process.env.NEXT_PUBLIC_GITHUB_URL || "", // Omit generic github link if not configured
  },
  founders: ["SevenX Labs Engineering Team"],
};

export function absoluteUrl(path: string): string {
  const baseUrl = SITE_CONFIG.siteUrl.replace(/\/$/, "");
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
}
