'use client';

import { useTranslations } from 'next-intl';
import type { Product } from '@/lib/types';
import { ProductCard } from './ProductCard';

type Props = {
  products: Product[];
  title?: string;
};

export function RelatedProducts({ products, title }: Props) {
  const t = useTranslations('common');

  if (products.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8" style={{ color: '#0f2257' }}>
          {title || t('relatedProducts') || 'Produits similaires'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
