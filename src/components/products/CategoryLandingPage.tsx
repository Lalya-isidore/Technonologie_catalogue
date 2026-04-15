'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import type { Product, Locale, FAQ } from '@/lib/types';
import { ProductCard } from './ProductCard';
import {
  ArrowRight, Shield, Thermometer, Award, Zap, Clock, FileText,
  CheckCircle, ChevronDown, Search, HelpCircle, Package,
} from 'lucide-react';

/* ═══════ Types ═══════ */

interface CategoryInfo {
  title: string;
  headline: string;
  description: string;
  benefits: string[];
  stats: { value: string; label: string }[];
  useCases: string[];
  bannerImage?: string;
  heroImages?: string[];
}

type Props = {
  products: Product[];
  category: CategoryInfo;
  faqs?: FAQ[];
  locale: Locale;
};

/* ═══════ Main Component ═══════ */

export function CategoryLandingPage({ products, category, faqs, locale }: Props) {
  const t = useTranslations('common');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search) return products;
    const q = search.toLowerCase();
    return products.filter(
      (p) => p.sku.toLowerCase().includes(q) || p.name[locale].toLowerCase().includes(q) || p.portConfig.toLowerCase().includes(q)
    );
  }, [products, search, locale]);

  return (
    <main>
      {/* ═══════ HERO ═══════ */}
      <section
        className="relative overflow-hidden"
        style={{ background: '#0b1630', padding: '100px 40px 60px' }}
      >
        {/* Banner background image */}
        {category.bannerImage && (
          <>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `url(${category.bannerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(11,22,48,0.75)' }} />
          </>
        )}

        {/* Circuit pattern (fallback when no banner) */}
        {!category.bannerImage && (
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.08 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="lp-circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <line x1="0" y1="40" x2="60" y2="40" stroke="#38bdf8" strokeWidth="1.5"/>
                <line x1="80" y1="40" x2="200" y2="40" stroke="#38bdf8" strokeWidth="1"/>
                <line x1="0" y1="100" x2="120" y2="100" stroke="#60a5fa" strokeWidth="1"/>
                <line x1="140" y1="100" x2="200" y2="100" stroke="#38bdf8" strokeWidth="1.5"/>
                <line x1="0" y1="160" x2="80" y2="160" stroke="#60a5fa" strokeWidth="1"/>
                <line x1="100" y1="160" x2="200" y2="160" stroke="#38bdf8" strokeWidth="1"/>
                <line x1="60" y1="0" x2="60" y2="100" stroke="#60a5fa" strokeWidth="0.8"/>
                <line x1="140" y1="60" x2="140" y2="140" stroke="#38bdf8" strokeWidth="1"/>
                <circle cx="60" cy="40" r="3" fill="#38bdf8"/>
                <circle cx="140" cy="100" r="3" fill="#60a5fa"/>
                <circle cx="100" cy="160" r="3" fill="#38bdf8"/>
                <rect x="25" y="70" width="16" height="20" rx="2" fill="none" stroke="#38bdf8" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lp-circuit)"/>
          </svg>
        </div>
        )}

        {/* Gradient overlays */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(29,78,216,0.2) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 85% 30%, rgba(56,189,248,0.08) 0%, transparent 60%)' }} />

        <div className="relative z-[2] max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-center">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs mb-5"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', color: '#94a3b8', fontWeight: 600 }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#22c55e' }} />
              {category.title}
            </div>

            <h1
              className="font-extrabold leading-[1.08] text-white mb-5"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)', letterSpacing: '-0.5px' }}
            >
              {category.headline}
            </h1>

            <p className="text-[16px] leading-[1.7] max-w-[560px] mb-8" style={{ color: '#94a3b8' }}>
              {category.description}
            </p>

            {/* Stats row */}
            <div className="flex gap-8 flex-wrap mb-8">
              {category.stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="font-mono text-[22px] font-bold text-white">{stat.value}</div>
                  <div className="text-[11px] leading-[1.4]" style={{ color: '#64748b' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/demande-de-devis"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-bold text-white no-underline transition-all hover:-translate-y-0.5"
                style={{ background: '#f97316' }}
              >
                {t('requestQuote')} <ArrowRight size={16} />
              </Link>
              <a
                href="https://wa.me/33617030308"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[14px] font-semibold no-underline transition-all hover:-translate-y-0.5"
                style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.3)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Right — Quick Quote Card */}
          <div
            className="relative rounded-2xl hidden lg:flex flex-col gap-4"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '32px 28px',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div className="flex items-center gap-2.5 mb-1">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center" style={{ background: 'rgba(29,78,216,0.2)', border: '1px solid rgba(29,78,216,0.4)' }}>
                <FileText size={18} style={{ color: '#38bdf8' }} />
              </div>
              <div>
                <div className="text-[13px] font-bold text-white">{t('requestQuote')}</div>
                <div className="text-[11px]" style={{ color: '#94a3b8' }}>{t('ctaSubtitleShort')}</div>
              </div>
            </div>

            <div className="h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />

            {/* Benefits list */}
            <div className="flex flex-col gap-2.5">
              {category.benefits.slice(0, 4).map((benefit) => (
                <div key={benefit} className="flex items-start gap-2.5">
                  <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                  <span className="text-[13px] leading-snug" style={{ color: '#cbd5e1' }}>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />

            {/* CTA */}
            <Link
              href="/demande-de-devis"
              className="flex items-center justify-center gap-2 rounded-xl text-[14px] font-bold text-white no-underline transition-all hover:-translate-y-0.5"
              style={{ background: '#f97316', padding: '14px 20px' }}
            >
              {t('requestQuote')} <ArrowRight size={16} />
            </Link>

            <div className="flex items-center justify-center gap-1.5 text-[11px]" style={{ color: '#94a3b8' }}>
              <Clock size={12} className="opacity-50" />
              {t('responseTime')} <strong className="text-white ml-0.5">{'<'}24h</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CERTIFICATIONS BAR ═══════ */}
      <section style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '20px 40px' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-8 flex-wrap">
          {[
            { icon: Shield, label: 'IP40 Rated', color: '#1d4ed8' },
            { icon: Thermometer, label: '-40°C to +75°C', color: '#ea580c' },
            { icon: Award, label: 'CE / FCC / UL', color: '#16a34a' },
            { icon: Zap, label: 'Redundant Power', color: '#7c3aed' },
            { icon: Package, label: '3-Year Warranty', color: '#0891b2' },
          ].map(({ icon: Icon, label, color }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={16} style={{ color }} />
              <span className="text-[13px] font-semibold" style={{ color: '#475569' }}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ HERO IMAGES (product showcase) ═══════ */}
      {category.heroImages && category.heroImages.length > 0 && (
        <section style={{ background: '#f8fafc', padding: '40px' }}>
          <div className="max-w-7xl mx-auto">
            <div className={`grid gap-6 ${category.heroImages.length === 1 ? 'grid-cols-1 max-w-2xl mx-auto' : 'grid-cols-1 sm:grid-cols-2'}`}>
              {category.heroImages.map((img, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl overflow-hidden flex items-center justify-center"
                  style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '32px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}
                >
                  <img
                    src={img}
                    alt={`${category.title} - Product ${i + 1}`}
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: '320px' }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════ PRODUCTS GRID ═══════ */}
      <section style={{ padding: '48px 40px' }}>
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-[28px] font-extrabold mb-1" style={{ color: '#0f2257' }}>
                {category.title}
              </h2>
              <p className="text-[14px]" style={{ color: '#64748b' }}>
                {filtered.length} {t('results')} — {t('applications')}
              </p>
            </div>
            <div className="relative">
              <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder={t('searchProduct')}
                style={{ padding: '9px 14px 9px 34px', border: '1px solid #e2e8f0', borderRadius: 8, fontSize: 13, fontFamily: 'inherit', color: '#0f172a', outline: 'none', width: 220 }}
              />
            </div>
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[15px]" style={{ color: '#64748b' }}>{t('noResults')}</p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════ USE CASES ═══════ */}
      <section style={{ background: '#f8fafc', padding: '56px 40px' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[24px] font-extrabold mb-8" style={{ color: '#0f2257' }}>
            {t('applications')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.useCases.map((useCase) => (
              <div
                key={useCase}
                className="flex items-start gap-3 p-5 bg-white rounded-xl transition-all hover:-translate-y-0.5"
                style={{ border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
              >
                <CheckCircle size={18} className="shrink-0 mt-0.5" style={{ color: '#22c55e' }} />
                <span className="text-[14px] font-medium" style={{ color: '#1e293b' }}>{useCase}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA MID-PAGE ═══════ */}
      <section className="relative overflow-hidden" style={{ background: '#0b1630', padding: '64px 40px' }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'linear-gradient(rgba(56,189,248,.04) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }} />
        <div className="relative z-[2] max-w-4xl mx-auto text-center">
          <h2 className="text-[28px] font-extrabold text-white mb-4">
            {t('ctaTitle')}
          </h2>
          <p className="text-[15px] mb-8 max-w-lg mx-auto" style={{ color: '#94a3b8' }}>
            {t('ctaSubtitle')}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/demande-de-devis"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[15px] font-bold text-white no-underline transition-all hover:-translate-y-0.5"
              style={{ background: '#f97316' }}
            >
              {t('requestQuote')} <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-[15px] font-semibold no-underline transition-all hover:-translate-y-0.5"
              style={{ background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1px solid rgba(255,255,255,0.15)' }}
            >
              {t('contactUs')}
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════ FAQ ═══════ */}
      {faqs && faqs.length > 0 && (
        <section style={{ padding: '56px 40px' }}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold" style={{ background: '#e8eef8', color: '#0f52ba' }}>
                <HelpCircle size={12} /> FAQ
              </span>
              <h2 className="text-[24px] font-bold" style={{ color: '#0f172a' }}>
                {t('faq')}
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden transition-all"
                  style={{ border: `1px solid ${openFaq === i ? '#789cd8' : '#e2e8f0'}`, boxShadow: openFaq === i ? '0 4px 24px rgba(15,82,186,0.08)' : '0 1px 3px rgba(0,0,0,0.04)' }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex items-center gap-4 w-full px-5 py-4 text-left cursor-pointer"
                  >
                    <span className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold transition-all" style={{ background: openFaq === i ? '#0f52ba' : '#f1f5f9', color: openFaq === i ? '#fff' : '#64748b' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1 text-sm font-semibold" style={{ color: '#0f172a' }}>{faq.question[locale]}</span>
                    <ChevronDown size={18} className="shrink-0 transition-transform" style={{ color: openFaq === i ? '#0f52ba' : '#94a3b8', transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>
                  <div style={{ display: 'grid', gridTemplateRows: openFaq === i ? '1fr' : '0fr', transition: 'grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                    <div style={{ overflow: 'hidden' }}>
                      <div className="px-5 pb-5" style={{ paddingLeft: '4.25rem' }}>
                        <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{faq.answer[locale]}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
