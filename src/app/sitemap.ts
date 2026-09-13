import { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";
import { SERVICES } from "@/lib/data/services";
import { SOLUTIONS } from "@/lib/data/solutions";
import { INDUSTRIES } from "@/lib/data/industries";
import { CASE_STUDIES } from "@/lib/data/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split("T")[0];

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/industries",
    "/portfolio",
    "/contact",
  ].map((route) => ({
    url: absoluteUrl(route),
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const serviceRoutes = Object.keys(SERVICES).map((slug) => ({
    url: absoluteUrl(`/services/${slug}`),
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const solutionRoutes = Object.keys(SOLUTIONS).map((slug) => ({
    url: absoluteUrl(`/solutions/${slug}`),
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const industryRoutes = Object.keys(INDUSTRIES).map((slug) => ({
    url: absoluteUrl(`/industries/${slug}`),
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const caseStudyRoutes = Object.keys(CASE_STUDIES).map((slug) => ({
    url: absoluteUrl(`/portfolio/${slug}`),
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...industryRoutes,
    ...caseStudyRoutes,
  ];
}
