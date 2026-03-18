'use client';

import { useCallback, useRef } from 'react';
import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import type { Product } from '@/lib/types';
import type { Locale } from '@/lib/types';

import { Gauge, LayoutGrid, Shield, Thermometer, GitCompare, Heart, ArrowRight } from 'lucide-react';

type Props = {
  product: Product;
  index?: number;
};

export function ProductCard({ product, index = 0 }: Props) {
  const locale = useLocale() as Locale;
  const t = useTranslations('common');
  const cardRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-6px)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (card) card.style.transform = '';
  }, []);

  return (
    <Link
      ref={cardRef}
      href={`/produits/${product.slug[locale]}`}
      className="prod-card group relative bg-white flex flex-col no-underline overflow-hidden card-elevated"
      style={{
        animationDelay: `${0.08 + index * 0.07}s`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
              \u2605 {t('bestseller')}
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
        <img
          src={product.images[0]}
          alt={product.name[locale]}
          className="relative w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 pt-4">
        {/* SKU */}
        <p className="font-mono text-[11px] font-medium mb-1.5" style={{ color: '#94a3b8' }}>
          {product.sku}
        </p>

        {/* Name */}
        <h3
          className="text-[14.5px] font-bold leading-snug mb-1.5 transition-colors duration-200 group-hover:!text-[#1d4ed8] line-clamp-2"
          style={{ color: '#0f2257' }}
        >
          {product.name[locale]}
        </h3>

        {/* Description */}
        <p className="text-[12.5px] leading-[1.6] line-clamp-2 mb-4 flex-1" style={{ color: '#64748b' }}>
          {product.shortDescription[locale]}
        </p>

        {/* Spec chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          <span
            className="inline-flex items-center gap-1 px-2 py-[3px] rounded-md text-[11px] font-medium"
            style={{ background: '#eff4ff', color: '#1d4ed8' }}
          >
            <LayoutGrid size={11} />
            {product.totalPorts} ports
          </span>
          <span
            className="inline-flex items-center gap-1 px-2 py-[3px] rounded-md text-[11px] font-medium"
            style={{ background: '#eff4ff', color: '#1d4ed8' }}
          >
            <Gauge size={11} />
            {product.speed}
          </span>
          <span
            className="inline-flex items-center gap-1 px-2 py-[3px] rounded-md text-[11px] font-medium"
            style={{ background: '#eff4ff', color: '#1d4ed8' }}
          >
            <Shield size={11} />
            {product.ipRating}
          </span>
          <span
            className="inline-flex items-center gap-1 px-2 py-[3px] rounded-md text-[11px] font-medium"
            style={{ background: '#eff4ff', color: '#1d4ed8' }}
          >
            <Thermometer size={11} />
            {product.temperatureRange}
          </span>
        </div>

        {/* Footer: quote CTA + actions */}
        <div className="pt-3 flex items-center justify-between" style={{ borderTop: '1px solid #f1f5f9' }}>
          <span className="text-[12px] font-semibold" style={{ color: '#1d4ed8' }}>
            {t('requestQuote')}
          </span>
          <div className="flex items-center gap-1.5">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
              style={{ border: '1px solid #e2e8f0', color: '#94a3b8' }}
            >
              <GitCompare size={13} />
            </span>
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
              style={{ border: '1px solid #e2e8f0', color: '#94a3b8' }}
            >
              <Heart size={13} />
            </span>
            <span
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-[11.5px] font-semibold text-white transition-all"
              style={{ background: '#1d4ed8' }}
            >
              {t('details')} <ArrowRight size={12} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
