'use client';

import { useState, useCallback } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { getBestsellers, getNewProducts } from '@/data/products';
import { getProductImages } from '@/data/product-images';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import type { Product, Locale } from '@/lib/types';

import {
  Gauge, LayoutGrid, Shield, Thermometer,
  GitCompare, Heart, ArrowRight, ChevronLeft, ChevronRight,
} from 'lucide-react';

/** Mini image slider for product cards */
function CardImageSlider({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);

  const prev = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIdx((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      <Image
        src={images[idx]}
        alt={alt}
        fill
        className="object-contain transition-opacity duration-300"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: 'rgba(255,255,255,0.9)', boxShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
            aria-label="Image précédente"
          >
            <ChevronLeft size={14} style={{ color: '#0f2257' }} />
          </button>
          <button
            onClick={next}
            className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: 'rgba(255,255,255,0.9)', boxShadow: '0 1px 4px rgba(0,0,0,0.15)' }}
            aria-label="Image suivante"
          >
            <ChevronRight size={14} style={{ color: '#0f2257' }} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full transition-all"
                style={{
                  background: i === idx ? '#1d4ed8' : 'rgba(148,163,184,0.5)',
                  transform: i === idx ? 'scale(1.3)' : 'scale(1)',
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function FeaturedCard({ product, index }: { product: Product; index: number }) {
  const locale = useLocale() as Locale;
  const t = useTranslations('common');
  const images = getProductImages(product.sku);

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
          height: '190px',
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
        }}
      >
        {images.length > 0 ? (
          <CardImageSlider images={images} alt={product.name[locale]} />
        ) : (
          <>
            <svg className="absolute inset-0 w-full h-full opacity-[0.35]">
              <defs>
                <pattern id={`dotGridFeat-${product.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#cbd5e1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#dotGridFeat-${product.id})`} />
            </svg>
            <div className="relative transition-transform duration-300 group-hover:scale-110" style={{ color: '#94a3b8' }}>
              <LayoutGrid size={56} strokeWidth={1} />
            </div>
          </>
        )}
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
              Sélection
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
