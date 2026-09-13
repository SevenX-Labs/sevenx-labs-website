"use client";

import React, { useState } from "react";
import { JsonLd } from "@/components/seo/JsonLd";

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
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
        {faqs.map((faq, idx) => {
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
                  className={`w-8 h-8 rounded-full border border-black/10 flex items-center justify-center shrink-0 font-mono text-sm transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-black text-white" : "bg-black/5 text-black"
                  }`}
                >
                  ↓
                </span>
              </button>
              {isOpen && (
                <div className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
