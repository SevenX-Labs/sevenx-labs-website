"use client";

import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { JsonLd } from "@/components/seo/JsonLd";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs?: FAQItem[];
  items?: FAQItem[];
}

export function FAQAccordion({ faqs, items }: FAQAccordionProps) {
  const faqList = faqs || items || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqList || faqList.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <div className="flex flex-col divide-y divide-black/10 border-y border-black/10">
        {faqList.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-5 transition-colors">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                aria-expanded={isOpen}
              >
                <span className="font-general text-lg sm:text-xl font-bold text-black uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <span
                  className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-black text-white" : "bg-black/5 text-black"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              <div
                className={`mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl ${
                  isOpen ? "block animate-fadeIn" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
