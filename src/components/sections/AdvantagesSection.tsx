'use client';

import { useEffect, useRef } from 'react';
import { Shield, Thermometer, Monitor, Radio, Award, Headphones } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface VsBar {
  label: string;
  val: string;
  pct: number;
  type: 'tsf' | 'comp';
}

interface Advantage {
  num: string;
  icon: LucideIcon;
  badge: string;
  title: string;
  desc: string;
  bars: VsBar[];
}

const ADVANTAGES: Advantage[] = [
  {
    num: '01',
    icon: Shield,
    badge: 'IP40 vs IP30',
    title: 'Protection IP40',
    desc: 'Nos concurrents proposent IP30. Notre IP40 garantit une meilleure protection contre les particules industrielles, poussières et projections.',
    bars: [
      { label: 'TSF', val: 'IP40', pct: 85, type: 'tsf' },
      { label: 'Conc.', val: 'IP30', pct: 55, type: 'comp' },
    ],
  },
  {
    num: '02',
    icon: Thermometer,
    badge: '-40°C vs -10°C',
    title: '-40°C à +75°C',
    desc: 'Plage de température étendue là où les concurrents se limitent à -10°C / +60°C. Opérationnel en conditions extrêmes.',
    bars: [
      { label: 'TSF', val: '-40°C', pct: 92, type: 'tsf' },
      { label: 'Conc.', val: '-10°C', pct: 40, type: 'comp' },
    ],
  },
  {
    num: '03',
    icon: Monitor,
    badge: 'Alu HR vs Standard',
    title: 'Boîtier Aluminium',
    desc: 'Alliage aluminium haute résistance contre les coques métal standard de la concurrence. Meilleure dissipation thermique.',
    bars: [
      { label: 'TSF', val: 'Alu HR', pct: 88, type: 'tsf' },
      { label: 'Conc.', val: 'Métal', pct: 52, type: 'comp' },
    ],
  },
  {
    num: '04',
    icon: Radio,
    badge: '9-60V vs 12-48V',
    title: 'DC 9~60V',
    desc: "Plage d'alimentation élargie (9-60V) vs 12-48V chez les concurrents. Plus de flexibilité terrain, moins de contraintes d'installation.",
    bars: [
      { label: 'TSF', val: '9–60V', pct: 90, type: 'tsf' },
      { label: 'Conc.', val: '12–48V', pct: 60, type: 'comp' },
    ],
  },
  {
    num: '05',
    icon: Award,
    badge: '3 ans',
    title: 'Garantie 3 ans',
    desc: 'Garantie constructeur de 3 ans sur tous les produits avec remplacement prioritaire. Au-delà des 1 à 2 ans standards du marché.',
    bars: [
      { label: 'TSF', val: '3 ans', pct: 100, type: 'tsf' },
      { label: 'Conc.', val: '1–2 ans', pct: 55, type: 'comp' },
    ],
  },
  {
    num: '06',
    icon: Headphones,
    badge: '< 2h',
    title: 'Support 24/7',
    desc: 'Équipe technique disponible 7j/7 par WhatsApp, email et téléphone. Réponse sous 2h, résolution sous 24h garantie.',
    bars: [
      { label: 'TSF', val: '< 2h', pct: 95, type: 'tsf' },
      { label: 'Conc.', val: '24–48h', pct: 35, type: 'comp' },
    ],
  },
];

function VsBarBlock({ bars }: { bars: VsBar[] }) {
  return (
    <div
      className="relative z-[1] rounded-lg p-[12px_14px] flex flex-col gap-[7px]"
      style={{ background: '#f4f7fb', border: '1px solid #e2e8f0' }}
    >
      {bars.map((b, i) => (
        <div key={b.label}>
          <div className="flex items-center gap-2 text-[11.5px] font-semibold">
            <span className="w-9 shrink-0 font-mono text-[10px]" style={{ color: '#64748b' }}>
              {b.label}
            </span>
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: '#e2e8f0' }}>
              <div
                className={`h-full rounded-full transition-[width] duration-[1200ms] ${b.type === 'tsf' ? 'why-bar-tsf' : 'why-bar-comp'}`}
                style={{ width: '0%' }}
                data-pct={b.pct}
              />
            </div>
            <span
              className="w-[52px] text-right shrink-0 font-mono text-[10px]"
              style={{ color: b.type === 'tsf' ? '#1d4ed8' : '#64748b', fontWeight: b.type === 'tsf' ? 700 : 400 }}
            >
              {b.val}
            </span>
          </div>
          {i === 0 && <div className="h-px my-[4px]" style={{ background: '#e2e8f0' }} />}
        </div>
      ))}
    </div>
  );
}

function WhyCard({ adv, index }: { adv: Advantage; index: number }) {
  const Icon = adv.icon;

  return (
    <div
      className="why-card group relative bg-white flex flex-col overflow-hidden cursor-default transition-colors duration-[250ms] hover:!bg-[#fafcff]"
      style={{
        padding: '36px 32px',
        animationDelay: `${0.05 + index * 0.08}s`,
      }}
    >
      {/* Bottom accent line on hover */}
      <span
        className="absolute bottom-0 left-0 right-0 h-[3px] scale-x-0 origin-left transition-transform duration-[400ms] group-hover:scale-x-100"
        style={{ background: 'linear-gradient(90deg, #1d4ed8, #0ea5e9)' }}
      />

      {/* Big decorative number */}
      <span
        className="absolute pointer-events-none leading-none font-black transition-colors duration-300"
        style={{
          top: '-12px',
          right: '20px',
          fontSize: '100px',
          color: 'rgba(29,78,216,0.08)',
        }}
      >
        {adv.num}
      </span>

      {/* Top: icon + badge */}
      <div className="relative z-[1] flex items-center gap-3 mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-[250ms] group-hover:!bg-[#1d4ed8] group-hover:scale-105"
          style={{
            background: 'rgba(29,78,216,0.08)',
            border: '1px solid rgba(29,78,216,0.2)',
          }}
        >
          <Icon size={22} strokeWidth={2} className="why-icon transition-colors duration-[250ms]" style={{ color: '#1d4ed8' }} />
        </div>
        <span
          className="inline-flex items-center gap-[5px] rounded-full text-[11px] font-bold font-mono"
          style={{
            background: '#ecfdf5',
            border: '1px solid #bbf7d0',
            padding: '4px 10px',
            color: '#16a34a',
          }}
        >
          <span className="text-[9px] opacity-70">&uarr;</span>
          {adv.badge}
        </span>
      </div>

      {/* Title */}
      <h3
        className="relative z-[1] text-[18px] font-extrabold leading-[1.2] mb-2.5"
        style={{ color: '#0b1630', letterSpacing: '-0.2px' }}
      >
        {adv.title}
      </h3>

      {/* Description */}
      <p
        className="relative z-[1] text-[13.5px] leading-[1.65] flex-1 mb-5"
        style={{ color: '#64748b' }}
      >
        {adv.desc}
      </p>

      {/* VS comparison bars */}
      <VsBarBlock bars={adv.bars} />
    </div>
  );
}

export function AdvantagesSection() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll<HTMLElement>('[data-pct]');
            bars.forEach((bar) => {
              setTimeout(() => {
                bar.style.width = bar.dataset.pct + '%';
              }, 200);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    const cards = grid.querySelectorAll('.why-card');
    cards.forEach((c) => observer.observe(c));

    return () => observer.disconnect();
  }, []);

  return (
    <section style={{ background: '#f4f7fb' }} className="py-20 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <div
            className="inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-semibold uppercase mb-5"
            style={{
              background: 'rgba(29,78,216,0.08)',
              border: '1px solid rgba(29,78,216,0.2)',
              color: '#1d4ed8',
              letterSpacing: '0.5px',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full hero-pulse" style={{ background: '#1d4ed8' }} />
            Avantages Concurrentiels
          </div>
          <h2
            className="font-extrabold leading-[1.15] mb-3.5"
            style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', color: '#0b1630', letterSpacing: '-0.5px' }}
          >
            Pourquoi choisir <span style={{ color: '#1d4ed8' }}>TSF Technology</span> ?
          </h2>
          <p className="text-[15px] leading-[1.65] max-w-[480px] mx-auto" style={{ color: '#64748b' }}>
            Des sp&eacute;cifications sup&eacute;rieures aux standards du march&eacute;, &agrave; des prix comp&eacute;titifs.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden rounded-2xl"
          style={{
            gap: '1px',
            background: '#e2e8f0',
            border: '1px solid #e2e8f0',
            boxShadow: '0 4px 24px rgba(15,23,42,0.07)',
          }}
        >
          {ADVANTAGES.map((adv, i) => (
            <WhyCard key={adv.num} adv={adv} index={i} />
          ))}
        </div>
      </div>

      {/* Scoped styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .why-bar-tsf { background: linear-gradient(90deg, #1d4ed8, #0ea5e9); }
        .why-bar-comp { background: #cbd5e1; }

        .why-card {
          opacity: 0;
          transform: translateY(18px);
          animation: whyCardIn 0.5s forwards;
        }
        @keyframes whyCardIn {
          to { opacity: 1; transform: translateY(0); }
        }

        .why-card:hover .why-icon {
          color: white !important;
        }
      `}} />
    </section>
  );
}
