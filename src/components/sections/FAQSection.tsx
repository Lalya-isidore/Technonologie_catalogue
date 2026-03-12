'use client';

import { useState, useMemo } from 'react';
import { Search, ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import type { FAQ } from '@/lib/types';
import type { Locale } from '@/i18n/routing';

type Props = {
  faqs: FAQ[];
  locale: Locale;
  title?: string;
  showSidebar?: boolean;
  description?: string;
};

const CATEGORY_LABELS: Record<string, string> = {
  produit: 'Produits',
  certif: 'Certifications',
  commande: 'Commande',
  secteur: 'Secteurs',
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  produit: { bg: '#0f52ba15', text: '#0f52ba' },
  certif: { bg: '#10b98115', text: '#10b981' },
  commande: { bg: '#f9731615', text: '#d9600a' },
  secteur: { bg: '#8b5cf615', text: '#7c3aed' },
};

/* ─── Single FAQ accordion item ─── */
function FaqItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
  category,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  category?: string;
}) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      className="bg-white rounded-xl overflow-hidden transition-all duration-300"
      style={{
        border: `1px solid ${isOpen ? '#789cd8' : '#e2e8f0'}`,
        boxShadow: isOpen ? '0 4px 24px rgba(15,82,186,0.08)' : '0 1px 3px rgba(0,0,0,0.04)',
        animation: 'faqItemIn 0.4s ease both',
        animationDelay: `${index * 0.06}s`,
      }}
    >
      <button
        onClick={onToggle}
        className="flex items-start gap-4 w-full px-5 py-4 text-left cursor-pointer"
      >
        {/* Numbered badge */}
        <span
          className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300"
          style={{
            background: isOpen ? '#0f52ba' : '#f1f5f9',
            color: isOpen ? '#fff' : '#64748b',
          }}
        >
          {num}
        </span>

        {/* Question text */}
        <span className="flex-1 text-sm font-semibold leading-snug pt-1.5" style={{ color: '#0f172a' }}>
          {question}
        </span>

        {/* Chevron */}
        <ChevronDown
          size={18}
          className="shrink-0 mt-2 transition-transform duration-300"
          style={{
            color: isOpen ? '#0f52ba' : '#94a3b8',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {/* Animated answer panel */}
      <div
        style={{
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div style={{ overflow: 'hidden' }}>
          <div className="px-5 pb-5" style={{ paddingLeft: '4.25rem' }}>
            <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
              {answer}
            </p>
            {category && CATEGORY_LABELS[category] && (
              <span
                className="inline-block mt-3 px-2.5 py-0.5 rounded-full text-xs font-medium"
                style={{
                  background: CATEGORY_COLORS[category]?.bg || '#f1f5f9',
                  color: CATEGORY_COLORS[category]?.text || '#64748b',
                }}
              >
                {CATEGORY_LABELS[category]}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main FAQ Section ─── */
export function FAQSection({ faqs, locale, title, showSidebar = false, description }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  /* Extract unique categories from FAQs */
  const categories = useMemo(() => {
    const cats = faqs.map((f) => f.category).filter(Boolean) as string[];
    return [...new Set(cats)];
  }, [faqs]);

  const hasCategories = categories.length > 1;

  /* Filter by category + search */
  const filteredFaqs = useMemo(() => {
    return faqs.filter((faq) => {
      const matchCat = activeCategory === 'all' || faq.category === activeCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        faq.question[locale].toLowerCase().includes(q) ||
        faq.answer[locale].toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [faqs, activeCategory, searchQuery, locale]);

  if (!faqs.length) return null;

  const handleToggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  /* ─── Shared: search bar + count + accordion items ─── */
  const accordion = (
    <>
      {/* Search bar */}
      {faqs.length >= 4 && (
        <div className="relative mb-6">
          <Search
            size={16}
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: '14px', color: '#94a3b8' }}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setOpenIndex(null);
            }}
            placeholder="Rechercher une question..."
            className="w-full py-3 bg-white text-sm placeholder:text-gray-400 transition-all focus:outline-none"
            style={{
              paddingLeft: '40px',
              paddingRight: '16px',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              color: '#0f172a',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#789cd8';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(15,82,186,0.08)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>
      )}

      {/* Count line */}
      <div className="flex items-center gap-3 mb-5">
        <span
          className="text-xs font-semibold uppercase tracking-wide"
          style={{ color: '#94a3b8' }}
        >
          {filteredFaqs.length} question{filteredFaqs.length !== 1 ? 's' : ''}
        </span>
        <span className="flex-1 h-px" style={{ background: '#e2e8f0' }} />
      </div>

      {/* Accordion items */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, i) => (
          <FaqItem
            key={`${faq.question.fr.slice(0, 30)}-${i}`}
            question={faq.question[locale]}
            answer={faq.answer[locale]}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => handleToggle(i)}
            category={faq.category}
          />
        ))}
        {filteredFaqs.length === 0 && (
          <p className="text-center text-sm py-10" style={{ color: '#94a3b8' }}>
            Aucune question ne correspond à votre recherche.
          </p>
        )}
      </div>
    </>
  );

  /* ─── Keyframes (injected once) ─── */
  const keyframes = (
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes faqItemIn {
        from { opacity: 0; transform: translateY(12px); }
        to { opacity: 1; transform: translateY(0); }
      }
    ` }} />
  );

  /* ═══════════════════════════════════════════════════════════════
     FULL LAYOUT — sidebar + accordion (homepage)
     ═══════════════════════════════════════════════════════════════ */
  if (showSidebar) {
    return (
      <section className="py-14 md:py-20" style={{ background: '#f8fafc' }}>
        {keyframes}
        <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

            {/* ── Sidebar ── */}
            <aside className="lg:w-[300px] shrink-0">
              <div className="lg:sticky lg:top-24">
                {/* Badge */}
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{ background: '#e8eef8', color: '#0f52ba' }}
                >
                  <HelpCircle size={12} />
                  FAQ
                </span>

                {/* Title */}
                <h2
                  className="text-2xl font-bold mb-2"
                  style={{ color: '#0f172a' }}
                >
                  {title || 'Questions fréquentes'}
                </h2>

                {/* Description */}
                <p
                  className="text-sm mb-6 leading-relaxed"
                  style={{ color: '#64748b' }}
                >
                  {description ||
                    'Retrouvez les réponses aux questions les plus fréquentes sur nos switches Ethernet industriels.'}
                </p>

                {/* Category filter pills */}
                {hasCategories && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {/* "All" button */}
                    <button
                      onClick={() => {
                        setActiveCategory('all');
                        setOpenIndex(null);
                      }}
                      className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer"
                      style={{
                        background: activeCategory === 'all' ? '#0f52ba' : '#fff',
                        color: activeCategory === 'all' ? '#fff' : '#64748b',
                        border: `1px solid ${activeCategory === 'all' ? '#0f52ba' : '#e2e8f0'}`,
                      }}
                    >
                      Tout ({faqs.length})
                    </button>

                    {categories.map((cat) => {
                      const count = faqs.filter((f) => f.category === cat).length;
                      const isActive = activeCategory === cat;
                      const colors = CATEGORY_COLORS[cat];
                      return (
                        <button
                          key={cat}
                          onClick={() => {
                            setActiveCategory(cat);
                            setOpenIndex(null);
                          }}
                          className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer"
                          style={{
                            background: isActive ? (colors?.text || '#0f52ba') : '#fff',
                            color: isActive ? '#fff' : '#64748b',
                            border: `1px solid ${isActive ? (colors?.text || '#0f52ba') : '#e2e8f0'}`,
                          }}
                        >
                          {CATEGORY_LABELS[cat] || cat} ({count})
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* CTA Box */}
                <div
                  className="p-5 rounded-2xl"
                  style={{ background: '#0f172a' }}
                >
                  <h3 className="text-sm font-bold text-white mb-1.5">
                    Besoin d&apos;aide ?
                  </h3>
                  <p className="text-xs mb-4 leading-relaxed" style={{ color: '#94a3b8' }}>
                    Notre équipe technique est disponible pour répondre à toutes vos questions.
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-white text-xs font-semibold rounded-lg transition-colors no-underline"
                    style={{ background: '#0f52ba' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#0d48a6')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#0f52ba')}
                  >
                    Nous contacter <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </aside>

            {/* ── Main accordion area ── */}
            <div className="flex-1 min-w-0">
              {accordion}
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ═══════════════════════════════════════════════════════════════
     COMPACT LAYOUT — no sidebar (sub-pages)
     ═══════════════════════════════════════════════════════════════ */
  return (
    <section className="py-12 md:py-16">
      {keyframes}
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        {title && (
          <div className="flex items-center gap-3 mb-8">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
              style={{ background: '#e8eef8', color: '#0f52ba' }}
            >
              <HelpCircle size={12} />
              FAQ
            </span>
            <h2 className="text-2xl font-bold" style={{ color: '#0f172a' }}>
              {title}
            </h2>
          </div>
        )}
        <div className="max-w-3xl mx-auto">
          {accordion}
        </div>
      </div>
    </section>
  );
}
