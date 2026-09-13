import React from "react";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { absoluteUrl } from "@/lib/site-config";

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const jsonLdItems = [
    { name: "Home", item: absoluteUrl("/") },
    ...items.map((it) => ({
      name: it.name,
      item: absoluteUrl(it.href || "#"),
    })),
  ];

  return (
    <>
      <BreadcrumbJsonLd items={jsonLdItems} />
      <nav aria-label="Breadcrumb" className="flex items-center text-xs font-mono text-zinc-500 py-3">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
          </li>
          {items.map((item, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-zinc-400">/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-black transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span className="text-zinc-900 font-semibold">{item.name}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
