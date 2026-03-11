'use client';

import { useState, useMemo } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { Product, Locale } from '@/lib/types';
import { ProductGrid } from './ProductGrid';
import { Filter, SortAsc, Search, X } from 'lucide-react';

const LAYER_OPTIONS = [
  { value: 'all', labelKey: 'all' },
  { value: 'layer-3', label: 'Layer 3' },
  { value: 'layer-2-managed', label: 'Layer 2 Managed' },
  { value: 'layer-2-unmanaged', label: 'Unmanaged' },
  { value: 'poe', label: 'PoE' },
  { value: 'tsn-ptp', label: 'TSN / PTP' },
  { value: 'compact', label: 'Compact' },
] as const;

const MOUNTING_OPTIONS = [
  { value: 'all', labelKey: 'all' },
  { value: 'din-rail', label: 'DIN Rail' },
  { value: 'rack-19', label: 'Rack 19"' },
  { value: 'compact', label: 'Compact' },
] as const;

const SORT_OPTIONS = [
  { value: 'price-asc', label: 'Prix ↑' },
  { value: 'price-desc', label: 'Prix ↓' },
  { value: 'ports-desc', label: 'Ports ↓' },
  { value: 'name', label: 'Nom A-Z' },
] as const;

type Props = {
  products: Product[];
  title?: string;
};

export function CatalogPage({ products, title }: Props) {
  const locale = useLocale() as Locale;
  const t = useTranslations('common');

  const [search, setSearch] = useState('');
  const [layer, setLayer] = useState('all');
  const [mounting, setMounting] = useState('all');
  const [sort, setSort] = useState<string>('price-asc');

  const filtered = useMemo(() => {
    let result = [...products];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.sku.toLowerCase().includes(q) ||
          p.name[locale].toLowerCase().includes(q) ||
          p.portConfig.toLowerCase().includes(q)
      );
    }

    if (layer !== 'all') {
      result = result.filter((p) => p.layer === layer);
    }

    if (mounting !== 'all') {
      result = result.filter((p) => p.mounting === mounting);
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.priceUSD - b.priceUSD);
        break;
      case 'price-desc':
        result.sort((a, b) => b.priceUSD - a.priceUSD);
        break;
      case 'ports-desc':
        result.sort((a, b) => b.totalPorts - a.totalPorts);
        break;
      case 'name':
        result.sort((a, b) => a.name[locale].localeCompare(b.name[locale]));
        break;
    }

    return result;
  }, [products, search, layer, mounting, sort, locale]);

  const hasFilters = search || layer !== 'all' || mounting !== 'all';

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-dark mb-2">
          {title || 'Tous les produits'}
        </h1>
        <p className="text-medium">
          {filtered.length} {t('results')}
        </p>
      </div>

      {/* Filters bar */}
      <div className="flex flex-wrap items-center gap-3 mb-8 p-4 bg-gray-50 rounded-xl">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="SKU, nom, ports..."
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
          />
        </div>

        {/* Layer filter */}
        <div className="flex items-center gap-1.5">
          <Filter size={14} className="text-medium" />
          <select
            value={layer}
            onChange={(e) => setLayer(e.target.value)}
            className="py-2.5 px-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
          >
            {LAYER_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {'labelKey' in opt ? t(opt.labelKey) : opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Mounting filter */}
        <select
          value={mounting}
          onChange={(e) => setMounting(e.target.value)}
          className="py-2.5 px-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
        >
          {MOUNTING_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {'labelKey' in opt ? t(opt.labelKey) : opt.label}
            </option>
          ))}
        </select>

        {/* Sort */}
        <div className="flex items-center gap-1.5">
          <SortAsc size={14} className="text-medium" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="py-2.5 px-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {hasFilters && (
          <button
            onClick={() => { setSearch(''); setLayer('all'); setMounting('all'); }}
            className="flex items-center gap-1 px-3 py-2 text-sm text-danger-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <X size={14} />
            Reset
          </button>
        )}
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <ProductGrid products={filtered} />
      ) : (
        <div className="text-center py-20">
          <p className="text-lg text-medium">{t('noResults')}</p>
        </div>
      )}
    </div>
  );
}
