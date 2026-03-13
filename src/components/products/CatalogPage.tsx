'use client';

import { useState, useMemo } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { Product, Locale } from '@/lib/types';
import { ProductCard } from './ProductCard';
import { Search, X } from 'lucide-react';

const LAYER_OPTIONS = [
  { value: 'all', label: 'Tous' },
  { value: 'layer-3', label: 'Layer 3' },
  { value: 'layer-2-managed', label: 'Layer 2 Managés' },
  { value: 'layer-2-unmanaged', label: 'Non-Managés' },
  { value: 'poe', label: 'PoE' },
  { value: 'tsn-ptp', label: 'TSN / PTP' },
  { value: 'compact', label: 'Compact' },
] as const;

const MOUNTING_OPTIONS = [
  { value: 'all', label: 'Tous' },
  { value: 'din-rail', label: 'DIN Rail' },
  { value: 'rack-19', label: 'Rack 19"' },
  { value: 'compact', label: 'Compact' },
] as const;

const SORT_OPTIONS = [
  { value: 'price-asc', label: 'Pertinence' },
  { value: 'ports-desc', label: 'Ports (décroissant)' },
  { value: 'ports-asc', label: 'Ports (croissant)' },
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
        (p) => p.sku.toLowerCase().includes(q) || p.name[locale].toLowerCase().includes(q) || p.portConfig.toLowerCase().includes(q)
      );
    }
    if (layer !== 'all') result = result.filter((p) => p.layer === layer);
    if (mounting !== 'all') result = result.filter((p) => p.mounting === mounting);
    switch (sort) {
      case 'price-asc': result.sort((a, b) => a.priceUSD - b.priceUSD); break;
      case 'ports-desc': result.sort((a, b) => b.totalPorts - a.totalPorts); break;
      case 'ports-asc': result.sort((a, b) => a.totalPorts - b.totalPorts); break;
      case 'name': result.sort((a, b) => a.name[locale].localeCompare(b.name[locale])); break;
    }
    return result;
  }, [products, search, layer, mounting, sort, locale]);

  const hasFilters = search || layer !== 'all' || mounting !== 'all';

  // Active filter pills
  const activePills: { label: string; clear: () => void }[] = [];
  if (layer !== 'all') {
    const opt = LAYER_OPTIONS.find((o) => o.value === layer);
    if (opt) activePills.push({ label: opt.label, clear: () => setLayer('all') });
  }
  if (mounting !== 'all') {
    const opt = MOUNTING_OPTIONS.find((o) => o.value === mounting);
    if (opt) activePills.push({ label: opt.label, clear: () => setMounting('all') });
  }

  return (
    <>
      {/* ── HERO ── */}
      <div style={{ background: '#0b1630', padding: '48px 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, left: -80, width: 500, height: 500, background: 'radial-gradient(circle, rgba(29,78,216,0.2), transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -40, right: 100, width: 300, height: 300, background: 'radial-gradient(circle, rgba(249,115,22,0.1), transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 999, padding: '5px 14px', fontSize: 11, color: '#94a3b8', marginBottom: 16, fontWeight: 600, letterSpacing: 0.5 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            Catalogue complet
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 800, color: '#fff', marginBottom: 10, letterSpacing: -0.5 }}>
            {title || 'Tous nos produits industriels'}
          </h1>
          <p style={{ fontSize: 15, color: '#94a3b8', maxWidth: 600, lineHeight: 1.7 }}>
            Switches Ethernet, Routeurs 4G/5G, Points d&apos;accès Wi-Fi 6 et solutions IoT. IP40, -40°C à +75°C, certifiés CE/FCC/UL.
          </p>
          <div style={{ display: 'flex', gap: 32, marginTop: 28, flexWrap: 'wrap' }}>
            <HeroStat num="102" label={<>Références<br />disponibles</>} />
            <HeroStat num="9" label={<>Catégories<br />produits</>} />
            <HeroStat num="3 ans" label={<>Garantie<br />sur tout</>} />
            <HeroStat num="J+1" label={<>Expédition<br />depuis France</>} />
          </div>
        </div>
      </div>

      {/* ── CATALOGUE LAYOUT ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 40px' }}
        className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-7 items-start"
      >
        {/* SIDEBAR FILTERS */}
        <div className="hidden lg:block" style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, position: 'sticky', top: 80, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', background: '#0b1630', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: 13, fontWeight: 700 }}>Filtres</span>
            {hasFilters && (
              <button onClick={() => { setSearch(''); setLayer('all'); setMounting('all'); }}
                style={{ fontSize: 11, color: '#94a3b8', cursor: 'pointer', fontWeight: 600, background: 'none', border: 'none' }}>
                Réinitialiser
              </button>
            )}
          </div>

          {/* Search */}
          <div style={{ padding: '16px 20px', borderBottom: '1px solid #e2e8f0' }}>
            <div style={{ position: 'relative' }}>
              <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher un produit…"
                style={{ width: '100%', padding: '9px 12px 9px 34px', border: '1px solid #e2e8f0', borderRadius: 7, fontSize: 13, fontFamily: 'inherit', color: '#0f172a', outline: 'none' }}
              />
            </div>
          </div>

          {/* Category filter */}
          <FilterSection title="Catégorie">
            {LAYER_OPTIONS.filter(o => o.value !== 'all').map((opt) => (
              <FilterCheckbox key={opt.value} label={opt.label} checked={layer === opt.value}
                onChange={() => setLayer(layer === opt.value ? 'all' : opt.value)}
                count={products.filter(p => p.layer === opt.value).length}
              />
            ))}
          </FilterSection>

          {/* Mounting filter */}
          <FilterSection title="Montage">
            {MOUNTING_OPTIONS.filter(o => o.value !== 'all').map((opt) => (
              <FilterCheckbox key={opt.value} label={opt.label} checked={mounting === opt.value}
                onChange={() => setMounting(mounting === opt.value ? 'all' : opt.value)}
                count={products.filter(p => p.mounting === opt.value).length}
              />
            ))}
          </FilterSection>
        </div>

        {/* MAIN CONTENT */}
        <div>
          {/* Active filter pills */}
          {activePills.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
              {activePills.map((pill) => (
                <button key={pill.label} onClick={pill.clear}
                  style={{ display: 'flex', alignItems: 'center', gap: 5, background: '#eff6ff', border: '1px solid #bfdbfe', color: '#1d4ed8', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 999, cursor: 'pointer' }}>
                  {pill.label} <X size={10} />
                </button>
              ))}
            </div>
          )}

          {/* Category tabs */}
          <div style={{ display: 'flex', gap: 6, marginBottom: 24, flexWrap: 'wrap' }}>
            {LAYER_OPTIONS.map((opt) => (
              <button key={opt.value} onClick={() => setLayer(opt.value)}
                style={{
                  padding: '8px 16px', borderRadius: 999, fontSize: 12, fontWeight: 700, cursor: 'pointer',
                  border: layer === opt.value ? '1.5px solid #1d4ed8' : '1.5px solid #e2e8f0',
                  background: layer === opt.value ? '#1d4ed8' : '#fff',
                  color: layer === opt.value ? '#fff' : '#64748b',
                  transition: 'all .2s',
                }}>
                {opt.label}
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, marginLeft: 5, opacity: 0.7 }}>
                  {opt.value === 'all' ? products.length : products.filter(p => p.layer === opt.value).length}
                </span>
              </button>
            ))}
          </div>

          {/* Results bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <div style={{ fontSize: 13, color: '#64748b' }}>
              <strong style={{ color: '#0f172a', fontWeight: 700 }}>{filtered.length} produits</strong> trouvés
            </div>
            <select value={sort} onChange={(e) => setSort(e.target.value)}
              style={{ padding: '8px 14px', border: '1px solid #e2e8f0', borderRadius: 7, fontSize: 13, fontFamily: 'inherit', color: '#0f172a', background: '#fff', outline: 'none', cursor: 'pointer' }}>
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>Trier par : {opt.label}</option>
              ))}
            </select>
          </div>

          {/* Mobile search */}
          <div className="lg:hidden" style={{ marginBottom: 16 }}>
            <div style={{ position: 'relative' }}>
              <Search size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}
                placeholder="Rechercher…"
                style={{ width: '100%', padding: '9px 12px 9px 34px', border: '1px solid #e2e8f0', borderRadius: 7, fontSize: 13, fontFamily: 'inherit', color: '#0f172a', outline: 'none' }}
              />
            </div>
          </div>

          {/* Product grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-[14px]">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontSize: 16, color: '#64748b' }}>{t('noResults')}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* ── Sub-components ── */

function HeroStat({ num, label }: { num: string; label: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 22, fontWeight: 700, color: '#fff' }}>{num}</div>
      <div style={{ fontSize: 12, color: '#64748b', lineHeight: 1.4 }}>{label}</div>
    </div>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: '16px 20px', borderBottom: '1px solid #e2e8f0' }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#64748b', marginBottom: 12 }}>{title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>{children}</div>
    </div>
  );
}

function FilterCheckbox({ label, checked, onChange, count }: { label: string; checked: boolean; onChange: () => void; count: number }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 9, cursor: 'pointer', padding: '3px 0' }}>
      <input type="checkbox" checked={checked} onChange={onChange}
        style={{ width: 15, height: 15, accentColor: '#1d4ed8', cursor: 'pointer' }} />
      <span style={{ fontSize: 13, color: '#0f172a' }}>{label}</span>
      <span style={{ marginLeft: 'auto', fontSize: 10, fontWeight: 700, color: '#64748b', fontFamily: "'Space Mono', monospace" }}>{count}</span>
    </label>
  );
}
