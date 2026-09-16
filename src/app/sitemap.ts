import { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";
import { SERVICES } from "@/lib/data/services";
import { SOLUTIONS } from "@/lib/data/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split("T")[0];

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/solutions",
    "/portfolio",
    "/careers",
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

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
  ];
}
