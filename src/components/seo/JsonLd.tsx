import React from "react";
import { SITE_CONFIG } from "@/lib/site-config";

interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown>>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  const sameAs = [SITE_CONFIG.social.linkedin, SITE_CONFIG.social.github].filter(
    (url): url is string => Boolean(url && url.startsWith("http") && url !== "https://github.com")
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.siteUrl,
    logo: `${SITE_CONFIG.siteUrl}/logo.png`,
    description: SITE_CONFIG.description,
    email: SITE_CONFIG.email,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  return <JsonLd data={schema} />;
}

export function WebSiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.siteUrl,
    description: SITE_CONFIG.description,
  };

  return <JsonLd data={schema} />;
}

export function ServiceJsonLd({
  name,
  description,
  url,
  providerName = SITE_CONFIG.name,
}: {
  name: string;
  description: string;
  url: string;
  providerName?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: providerName,
      url: SITE_CONFIG.siteUrl,
    },
  };

  return <JsonLd data={schema} />;
}

export function ArticleJsonLd({
  headline,
  description,
  url,
  datePublished,
  authorName,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  authorName: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    author: {
      "@type": "Organization",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.siteUrl}/logo.png`,
      },
    },
  };

  return <JsonLd data={schema} />;
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; item: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: it.name,
      item: it.item,
    })),
  };

  return <JsonLd data={schema} />;
}
