'use client';

import { useState } from 'react';
import type { FaqItem } from '@/lib/mdx';

interface LegacyFaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  /** New format from frontmatter (preferred) */
  faq?: FaqItem[];
  /** Legacy format used in existing MDX body content */
  faqs?: LegacyFaqItem[];
}

/**
 * Renderiza a seção visível de FAQ com accordion.
 * Aceita tanto o formato novo ({q, a}) quanto o legado ({question, answer}).
 */
export function FaqSection({ faq, faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: FaqItem[] = Array.isArray(faq)
    ? faq
    : Array.isArray(faqs)
      ? faqs.map((f) => ({ q: f.question, a: f.answer }))
      : [];

  if (!items || items.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Perguntas Frequentes
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <details
            key={index}
            open={openIndex === index}
            onToggle={(e) => {
              if ((e.target as HTMLDetailsElement).open) {
                setOpenIndex(index);
              } else if (openIndex === index) {
                setOpenIndex(null);
              }
            }}
            className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
          >
            <summary className="cursor-pointer px-5 py-4 font-semibold text-gray-900 text-sm leading-relaxed list-none flex items-center justify-between hover:bg-gray-100 transition-colors">
              <span>{item.q}</span>
              <span className="text-gray-400 text-lg ml-3 shrink-0 group-open:rotate-45 transition-transform">
                +
              </span>
            </summary>
            <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

