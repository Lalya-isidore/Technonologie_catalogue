'use client';

import { useLocale, useTranslations } from 'next-intl';
import { getBestsellers, getNewProducts } from '@/data/products';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import type { Locale } from '@/lib/types';

import {
  Network, Gauge, LayoutGrid, Shield, Thermometer,
  GitCompare, Heart, ArrowRight,
} from 'lucide-react';

function FeaturedCard({ product, index }: { product: Product; index: number }) {
  const locale = useLocale() as Locale;
  const t = useTranslations('common');

  return (
    <Link
      href={`/produits/${product.slug[locale]}`}
      className="prod-card group relative bg-white rounded-2xl flex flex-col no-underline overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        border: '1.5px solid #e2e8f0',
        boxShadow: '0 1px 3px rgba(15,34,87,0.06)',
        animationDelay: `${0.08 + index * 0.07}s`,
      }}
    >
      {/* Top blue gradient line on hover */}
      <span
        className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
        style={{ background: 'linear-gradient(90deg, #1d4ed8, #3b82f6)' }}
      />

      {/* Badge */}
      {(product.isBestseller || product.isNew) && (
        <div className="absolute top-3 left-3 z-10">
          {product.isBestseller && (
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-white rounded-md"
              style={{ background: '#ea580c' }}
            >
              &#9733; {t('bestseller')}
            </span>
          )}
          {product.isNew && !product.isBestseller && (
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold text-white rounded-md"
              style={{ background: '#16a34a' }}
            >
              {t('new')}
            </span>
          )}
        </div>
      )}

      {/* Image zone */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{
          height: '170px',
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        }}
      >
        <svg className="absolute inset-0 w-full h-full opacity-[0.35]">
          <defs>
            <pattern id={`dotGridFeat-${product.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#cbd5e1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#dotGridFeat-${product.id})`} />
        </svg>
        <div className="relative transition-transform duration-300 group-hover:scale-110" style={{ color: '#94a3b8' }}>
          <Network size={56} strokeWidth={1} />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 pt-4">
        <p className="font-mono text-[11px] font-medium mb-1.5" style={{ color: '#94a3b8' }}>
          {product.sku}
        </p>
        <h3
          className="text-[14.5px] font-bold leading-snug mb-1.5 transition-colors duration-200 group-hover:!text-[#1d4ed8] line-clamp-2"
          style={{ color: '#0f2257' }}
        >
          {product.name[locale]}
        </h3>
        <p className="text-[12.5px] leading-[1.6] line-clamp-2 mb-4 flex-1" style={{ color: '#64748b' }}>
          {product.shortDescription[locale]}
        </p>

        {/* Spec chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span className="inline-flex items-center gap-1 px-2 py-[3px] rounded-md text-[11px] font-medium" style={{ background: '#eff4ff', color: '#1d4ed8' }}>
            <LayoutGrid size={11} /> {product.totalPorts} ports
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-[3px] rounded-md text-[11px] font-medium" style={{ background: '#eff4ff', color: '#1d4ed8' }}>
            <Gauge size={11} /> {product.speed}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-[3px] rounded-md text-[11px] font-medium" style={{ background: '#eff4ff', color: '#1d4ed8' }}>
            <Shield size={11} /> {product.ipRating}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-[3px] rounded-md text-[11px] font-medium" style={{ background: '#eff4ff', color: '#1d4ed8' }}>
            <Thermometer size={11} /> {product.temperatureRange}
          </span>
        </div>

        {/* Footer */}
        <div className="pt-3 flex items-center justify-between" style={{ borderTop: '1px solid #f1f5f9' }}>
          <span className="text-[12px] font-semibold" style={{ color: '#1d4ed8' }}>
            {t('requestQuote')}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors" style={{ border: '1px solid #e2e8f0', color: '#94a3b8' }}>
              <GitCompare size={13} />
            </span>
            <span className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors" style={{ border: '1px solid #e2e8f0', color: '#94a3b8' }}>
              <Heart size={13} />
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11.5px] font-semibold text-white transition-all" style={{ background: '#1d4ed8' }}>
              {t('details')} <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export function FeaturedProducts() {
  const t = useTranslations('common');
  const bestsellers = getBestsellers().slice(0, 4);
  const newProducts = getNewProducts().slice(0, 4);
  const featured = [...bestsellers, ...newProducts].slice(0, 8);

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="flex items-end justify-between" style={{ marginBottom: '40px' }}>
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold mb-3"
              style={{
                background: '#eff4ff',
                border: '1px solid rgba(29,78,216,0.2)',
                color: '#1d4ed8',
                letterSpacing: '0.5px',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#1d4ed8' }} />
              S&eacute;lection
            </div>
            <h2
              className="font-extrabold leading-[1.15]"
              style={{ fontSize: 'clamp(26px, 3vw, 38px)', color: '#0f2257', letterSpacing: '-0.5px' }}
            >
              {t('relatedProducts')}
            </h2>
          </div>
          <Link
            href="/produits"
            className="hidden sm:inline-flex items-center gap-1.5 text-[13.5px] font-semibold no-underline transition-colors hover:!text-[#1e40af]"
            style={{ color: '#1d4ed8' }}
          >
            {t('viewAll')} <ArrowRight size={15} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {featured.map((product, i) => (
            <FeaturedCard key={product.id} product={product} index={i} />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/produits"
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold no-underline"
            style={{ color: '#1d4ed8' }}
          >
            {t('viewAll')} <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      {/* Scoped animation styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .prod-card {
          opacity: 0;
          transform: translateY(20px);
          animation: prodCardReveal 0.5s forwards;
        }
        @keyframes prodCardReveal {
          to { opacity: 1; transform: translateY(0); }
        }
        .prod-card:hover {
          box-shadow: 0 12px 28px rgba(15,34,87,0.12), 0 4px 12px rgba(15,34,87,0.06) !important;
        }
      `}} />
    </section>
  );
}
