'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '@/lib/types';
import type { Locale } from '@/i18n/routing';

type Props = {
  faqs: FAQ[];
  locale: Locale;
  title?: string;
};

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-5 py-4 text-left text-sm font-medium text-dark hover:bg-gray-50 transition-colors"
      >
        {question}
        <ChevronDown
          size={18}
          className={`shrink-0 ml-2 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-medium leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export function FAQSection({ faqs, locale, title }: Props) {
  if (!faqs.length) return null;

  return (
    <section className="py-12 md:py-16">
      <div className="container-wide">
        {title && (
          <h2 className="text-2xl font-bold text-dark mb-8">{title}</h2>
        )}
        <div className="space-y-3 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <FaqItem
              key={i}
              question={faq.question[locale]}
              answer={faq.answer[locale]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
