'use client';

import { useState, useMemo } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { Server, Network, Plug, Zap, Clock, Cpu, MessageSquare, ArrowRight } from 'lucide-react';

type FilterGroup = 'all' | 'switches' | 'routers' | 'iot';

const CATEGORIES = [
  { key: 'layer3DinRail', href: '/produits/switches-ethernet/layer-3-din-rail', icon: Server, count: 2, iconClass: 'cat-icon-blue', group: 'routers' as FilterGroup },
  { key: 'layer3Rack', href: '/produits/switches-ethernet/layer-3-rack', icon: Server, count: 8, iconClass: 'cat-icon-navy', group: 'routers' as FilterGroup },
  { key: 'layer2ManagedRack', href: '/produits/switches-ethernet/layer-2-managed-rack', icon: Network, count: 16, iconClass: 'cat-icon-blue', group: 'switches' as FilterGroup },
  { key: 'layer2ManagedDinRail', href: '/produits/switches-ethernet/layer-2-managed-din-rail', icon: Network, count: 19, iconClass: 'cat-icon-slate', group: 'switches' as FilterGroup },
  { key: 'unmanagedRack', href: '/produits/switches-ethernet/unmanaged-rack', icon: Plug, count: 13, iconClass: 'cat-icon-slate', group: 'switches' as FilterGroup },
  { key: 'unmanagedDinRail', href: '/produits/switches-ethernet/unmanaged-din-rail', icon: Plug, count: 19, iconClass: 'cat-icon-slate', group: 'switches' as FilterGroup },
  { key: 'poeSwitches', href: '/produits/switches-ethernet/poe', icon: Zap, count: 7, iconClass: 'cat-icon-orange', group: 'iot' as FilterGroup },
  { key: 'tsnPtp', href: '/produits/switches-ethernet/tsn-ptp', icon: Clock, count: 5, iconClass: 'cat-icon-green', group: 'iot' as FilterGroup },
  { key: 'compactSwitches', href: '/produits/switches-ethernet/compact', icon: Cpu, count: 12, iconClass: 'cat-icon-teal', group: 'iot' as FilterGroup },
] as const;

const FILTERS: { key: FilterGroup; label: string }[] = [
  { key: 'all', label: 'Tous' },
  { key: 'switches', label: 'Switches' },
  { key: 'routers', label: 'Routers' },
  { key: 'iot', label: 'IoT' },
];

export function CategoriesOverview() {
  const t = useTranslations('nav');
  const [activeFilter, setActiveFilter] = useState<FilterGroup>('all');

  const filteredCategories = useMemo(() => {
    if (activeFilter === 'all') return CATEGORIES;
    return CATEGORIES.filter((c) => c.group === activeFilter);
  }, [activeFilter]);

  return (
    <section style={{ background: '#f4f7fc' }} className="pt-8 pb-16 lg:pt-10 lg:pb-20">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6" style={{ marginBottom: '36px' }}>
          <div className="max-w-[560px]">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold mb-4"
              style={{
                background: '#eff4ff',
                border: '1px solid rgba(29,78,216,0.2)',
                color: '#1d4ed8',
                letterSpacing: '0.5px',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#1d4ed8' }} />
              Catalogue complet
            </div>
            <h2
              className="font-extrabold leading-[1.15]"
              style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', color: '#0f2257', letterSpacing: '-0.5px' }}
            >
              9 cat&eacute;gories,<br />
              <span style={{ color: '#1d4ed8' }}>102 produits</span>
            </h2>
            <p className="mt-3.5 text-[15px] leading-[1.7] max-w-[480px]" style={{ color: '#64748b' }}>
              Des switches Ethernet Layer-3 aux solutions TSN temps-r&eacute;el, trouvez l&apos;&eacute;quipement adapt&eacute; &agrave; votre infrastructure industrielle.
            </p>
          </div>
          <div className="flex gap-3 items-center shrink-0 flex-wrap">
            {FILTERS.map(({ key, label }) => {
              const isActive = activeFilter === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  className="px-[18px] py-2 rounded-full text-[13px] font-medium cursor-pointer transition-all duration-200"
                  style={{
                    background: isActive ? '#1d4ed8' : '#fff',
                    color: isActive ? '#fff' : '#64748b',
                    border: isActive ? '1.5px solid #1d4ed8' : '1.5px solid #e2e8f0',
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredCategories.map(({ key, href, icon: Icon, count, iconClass }, i) => (
            <Link
              key={key}
              href={href}
              className="cat-card group relative flex items-center gap-5 bg-white rounded-[14px] p-[26px_28px] no-underline overflow-hidden transition-all duration-[250ms]"
              style={{
                border: '1.5px solid #e2e8f0',
                boxShadow: '0 1px 3px rgba(15,34,87,0.07), 0 1px 2px rgba(15,34,87,0.04)',
                animationDelay: `${0.05 + i * 0.05}s`,
              }}
            >
              <div className={`${iconClass} w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-[250ms] group-hover:scale-[1.08]`}>
                <Icon size={24} strokeWidth={1.8} />
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="text-[14.5px] font-bold leading-[1.3] mb-1 transition-colors duration-200 group-hover:!text-[#1d4ed8]"
                  style={{ color: '#0f2257' }}
                >
                  {t(key)}
                </div>
                <div className="text-xs font-medium" style={{ color: '#64748b' }}>
                  {count} produits
                </div>
              </div>
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm transition-all duration-[250ms] group-hover:!bg-[#1d4ed8] group-hover:!border-[#1d4ed8] group-hover:!text-white group-hover:translate-x-[3px]"
                style={{ border: '1.5px solid #e2e8f0', color: '#64748b' }}
              >
                <ArrowRight size={14} />
              </div>
              {/* Bottom blue line on hover */}
              <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1d4ed8] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="cat-card mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white rounded-[14px] p-7 sm:p-[28px_36px]"
          style={{
            border: '1.5px solid #e2e8f0',
            boxShadow: '0 1px 3px rgba(15,34,87,0.07), 0 1px 2px rgba(15,34,87,0.04)',
            animationDelay: '0.6s',
          }}
        >
          <div>
            <strong className="block text-base font-bold mb-1" style={{ color: '#0f2257' }}>
              Vous ne trouvez pas ce qu&apos;il vous faut ?
            </strong>
            <span className="text-[13px]" style={{ color: '#64748b' }}>
              Notre &eacute;quipe peut vous aider &agrave; identifier le produit id&eacute;al pour votre infrastructure.
            </span>
          </div>
          <div className="flex gap-3 items-center shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 text-[13.5px] font-semibold text-white rounded-[7px] transition-all hover:-translate-y-0.5 no-underline"
              style={{ background: '#1d4ed8' }}
            >
              <MessageSquare size={15} strokeWidth={2.5} />
              Parler &agrave; un expert
            </Link>
            <Link
              href="/produits"
              className="inline-flex items-center gap-1 px-6 py-2.5 text-[13.5px] font-semibold rounded-[7px] transition-all no-underline hover:!bg-[#eff4ff]"
              style={{ color: '#1d4ed8', border: '1.5px solid rgba(29,78,216,0.3)' }}
            >
              Voir tous les produits
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Scoped styles for icon colors & card animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        .cat-icon-blue   { background: #eff4ff; color: #1d4ed8; }
        .cat-icon-navy   { background: #e8eeff; color: #1e3a8a; }
        .cat-icon-orange { background: #fff4ed; color: #ea580c; }
        .cat-icon-green  { background: #f0fdf4; color: #16a34a; }
        .cat-icon-teal   { background: #ecfeff; color: #0891b2; }
        .cat-icon-slate  { background: #f1f5f9; color: #475569; }

        .cat-card {
          opacity: 0;
          transform: translateY(20px);
          animation: catCardReveal 0.5s forwards;
        }
        @keyframes catCardReveal {
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}
