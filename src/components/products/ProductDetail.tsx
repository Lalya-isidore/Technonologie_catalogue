'use client';

import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import type { Product, Locale } from '@/lib/types';

import {
  Shield, Thermometer, Zap, LayoutGrid,
  Server, FileText, MessageCircle, ChevronDown,
  Download, Monitor, Lock, Radio, Clock,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

type Props = {
  product: Product;
};

/* ── Animated bar ── */
function AnimatedBar({ width, animate }: { width: number; animate: boolean }) {
  const [w, setW] = useState(0);
  useEffect(() => {
    if (animate) {
      setW(0);
      const t = setTimeout(() => setW(width), 80);
      return () => clearTimeout(t);
    }
  }, [animate, width]);
  return (
    <div style={{ height: 8, background: '#e2e8f0', borderRadius: 999, position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          height: '100%', borderRadius: 999, background: '#1d4ed8',
          width: `${w}%`, transition: 'width 1s ease',
        }}
      />
    </div>
  );
}

export function ProductDetail({ product }: Props) {
  const locale = useLocale() as Locale;
  const t = useTranslations('common');
  const tTrust = useTranslations('trustBar');
  const [activeTab, setActiveTab] = useState<'specs' | 'compare' | 'downloads' | 'faq'>('specs');
  const [compareAnimate, setCompareAnimate] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const mountLabel = product.mounting === 'din-rail' ? 'DIN Rail' : product.mounting === 'rack-19' ? 'Rack 19"' : 'Compact';

  function handleTabClick(tab: typeof activeTab) {
    setActiveTab(tab);
    if (tab === 'compare') {
      setCompareAnimate(false);
      setTimeout(() => setCompareAnimate(true), 100);
    }
  }

  return (
    <>
      {/* ── BREADCRUMB ── */}
      <div style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '12px 40px', fontSize: 12, color: '#64748b' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <Link href="/" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Accueil</Link>
          <span style={{ margin: '0 8px', color: '#e2e8f0' }}>›</span>
          <Link href="/produits" style={{ color: '#1d4ed8', textDecoration: 'none' }}>Produits</Link>
          <span style={{ margin: '0 8px', color: '#e2e8f0' }}>›</span>
          <span style={{ color: '#0f172a', fontWeight: 500 }}>{product.name[locale]}</span>
        </div>
      </div>

      {/* ── STICKY PRODUCT NAV ── */}
      <div style={{
        position: 'sticky', top: 62, zIndex: 99, background: '#fff',
        borderBottom: '1px solid #e2e8f0', padding: '0 40px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', gap: 0 }}>
          {(['specs', 'compare', 'downloads', 'faq'] as const).map((tab) => {
            const labels = { specs: 'Spécifications', compare: 'Comparaison', downloads: 'Téléchargements', faq: 'FAQ' };
            return (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                style={{
                  padding: '14px 18px', fontSize: 13, fontWeight: 600,
                  color: activeTab === tab ? '#1d4ed8' : '#64748b',
                  background: 'none', border: 'none', cursor: 'pointer',
                  borderBottom: activeTab === tab ? '2px solid #1d4ed8' : '2px solid transparent',
                  transition: 'all .2s',
                }}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>
        <Link
          href="/demande-de-devis"
          className="hidden sm:inline-flex"
          style={{
            background: '#f97316', color: '#fff', border: 'none',
            padding: '8px 18px', borderRadius: 5, fontSize: 12,
            fontWeight: 700, textDecoration: 'none',
          }}
        >
          {t('requestQuote')} →
        </Link>
      </div>

      {/* ── PRODUCT HERO ── */}
      <div ref={heroRef} style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '48px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[60px] items-start"
        >
          {/* LEFT – Gallery */}
          <div>
            <div style={{
              background: '#fff', borderRadius: 16, aspectRatio: '4/3',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative', overflow: 'hidden', marginBottom: 12,
              border: '1px solid #e2e8f0',
            }}>
              <img
                src={product.images[0]}
                alt={product.name[locale]}
                style={{ position: 'relative', zIndex: 1, width: '75%', height: '75%', objectFit: 'contain', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.1))' }}
              />
            </div>
            {/* Badges */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {product.isNew && <Badge color="green">★ {t('new')}</Badge>}
              {product.isBestseller && <Badge color="orange">★ {t('bestseller')}</Badge>}
              <Badge color="blue">{product.certifications.join(' · ')}</Badge>
              <Badge color="blue">{product.ipRating}</Badge>
              <Badge color="blue">{mountLabel}</Badge>
            </div>
          </div>

          {/* RIGHT – Info */}
          <div>
            {/* Category */}
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: '#eff6ff', border: '1px solid #bfdbfe', color: '#1d4ed8',
              fontSize: 11, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase',
              padding: '4px 12px', borderRadius: 999, marginBottom: 14,
            }}>
              <Monitor size={11} />
              Switch Ethernet Industriel
            </span>

            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: '#64748b', marginBottom: 6 }}>
              SKU: {product.sku}
            </p>
            <h1 style={{ fontSize: 28, fontWeight: 800, color: '#0b1630', lineHeight: 1.2, marginBottom: 12, letterSpacing: -0.5 }}>
              {product.name[locale]}
            </h1>
            <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, marginBottom: 24 }}>
              {product.description[locale]}
            </p>

            {/* Quick spec chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
              <QsChip icon={<LayoutGrid size={13} />}>{product.totalPorts} × {product.speed}</QsChip>
              <QsChip icon={<Shield size={13} />}>{product.ipRating}</QsChip>
              <QsChip icon={<Thermometer size={13} />}>{product.temperatureRange}</QsChip>
              <QsChip icon={<Zap size={13} />}>{product.powerInput}</QsChip>
              <QsChip icon={<Server size={13} />}>{mountLabel}</QsChip>
              <QsChip icon={<Clock size={13} />}>Garantie 3 ans</QsChip>
            </div>

            {/* Availability / Price */}
            <div style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              padding: '16px 20px', background: '#f4f7fb', border: '1px solid #e2e8f0',
              borderRadius: 10, marginBottom: 20,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 600, color: '#15803d' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                En stock — Expédition J+1
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 10, color: '#64748b', letterSpacing: 1, textTransform: 'uppercase' }}>Prix sur devis</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 22, fontWeight: 700, color: '#0b1630' }}>Sur demande</div>
              </div>
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }} className="flex-col sm:flex-row">
              <Link
                href="/demande-de-devis"
                style={{
                  flex: 1, background: '#f97316', color: '#fff', border: 'none',
                  padding: '14px 20px', borderRadius: 7, fontSize: 14, fontWeight: 700,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  textDecoration: 'none', transition: 'background .2s',
                }}
              >
                <FileText size={15} />
                {t('requestQuote')}
              </Link>
              <Link
                href="/produits"
                style={{
                  flex: 1, background: '#fff', color: '#0b1630',
                  border: '1.5px solid #e2e8f0', padding: '14px 20px', borderRadius: 7,
                  fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: 8, textDecoration: 'none', transition: 'all .2s',
                }}
              >
                <Download size={15} />
                {t('downloadDatasheet')}
              </Link>
            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/33617030308"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%', background: '#22c55e', color: '#fff', border: 'none',
                padding: 11, borderRadius: 7, fontSize: 13, fontWeight: 700,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                textDecoration: 'none', marginBottom: 16,
              }}
            >
              <MessageCircle size={14} />
              Question rapide via WhatsApp
            </a>

            {/* Trust row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              <TrustItem title={tTrust('warranty')} sub="Pièces & main d'œuvre" />
              <TrustItem title="Support 24/7" sub="Réponse < 2h" />
              <TrustItem title="Livraison rapide" sub="Stock France" />
            </div>
          </div>
        </div>
      </div>

      {/* ── TABS CONTENT ── */}
      <div style={{ maxWidth: 1200, margin: '40px auto', padding: '0 40px' }}>

        {/* TAB: SPECS */}
        {activeTab === 'specs' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Network */}
            <SpecGroup icon={<Monitor size={13} />} title="Interfaces Réseau">
              <SpecRow label="Ports" value={`${product.totalPorts} — ${product.portConfig}`} highlight />
              <SpecRow label="Débit" value={product.speed} />
              <SpecRow label="Configuration" value={product.portConfig} highlight />
            </SpecGroup>

            {/* Environment */}
            <SpecGroup icon={<Shield size={13} />} title="Environnement & Alimentation">
              <SpecRow label="Protection" value={product.ipRating} highlight />
              <SpecRow label="Température" value={product.temperatureRange} highlight />
              <SpecRow label="Alimentation" value={product.powerInput} highlight />
              <SpecRow label="Boîtier" value={`${product.casingMaterial[locale]} — ${mountLabel}`} />
            </SpecGroup>

            {/* Features */}
            {product.features.length > 0 && (
              <SpecGroup icon={<Radio size={13} />} title="Fonctionnalités">
                {product.features.map((f, i) => (
                  <SpecRow key={i} label={`Fonction ${i + 1}`} value={f[locale]} />
                ))}
              </SpecGroup>
            )}

            {/* Certifications */}
            <SpecGroup icon={<Lock size={13} />} title="Certifications & Garantie">
              <SpecRow label="Certifications" value={product.certifications.join(' · ')} highlight />
              <SpecRow label="Garantie" value="3 ans (échangeable J+1)" highlight />
              <SpecRow label="SKU" value={product.sku} />
              <SpecRow label="Montage" value={mountLabel} />
            </SpecGroup>
          </div>
        )}

        {/* TAB: COMPARE */}
        {activeTab === 'compare' && (
          <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 28 }}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0b1630', marginBottom: 20 }}>
              TSF Technology vs Concurrence — Caractéristiques clés
            </h3>
            <CompareRow
              label="Protection IP" tsfVal={product.ipRating} compVal="IP30"
              tsfWidth={100} animate={compareAnimate}
            />
            <CompareRow
              label="Plage de température" tsfVal={product.temperatureRange} compVal="-10°C / +60°C"
              tsfWidth={100} animate={compareAnimate}
            />
            <CompareRow
              label="Tension d'alimentation" tsfVal={product.powerInput} compVal="DC 12–48V"
              tsfWidth={100} animate={compareAnimate}
            />
            <CompareRow
              label="Durée de garantie" tsfVal="3 ans" compVal="1 an"
              tsfWidth={100} animate={compareAnimate}
            />
          </div>
        )}

        {/* TAB: DOWNLOADS */}
        {activeTab === 'downloads' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <DlCard icon={<FileText size={18} />} name="Fiche Technique (Datasheet)" meta="PDF · FR/EN" />
            <DlCard icon={<FileText size={18} />} name="Manuel d'installation" meta="PDF · FR/EN/DE" />
            <DlCard icon={<Monitor size={18} />} name="Firmware dernière version" meta="BIN · Latest" />
            <DlCard icon={<Shield size={18} />} name="Certificats CE/FCC/UL" meta="PDF · 1.2 MB" />
            <DlCard icon={<Lock size={18} />} name="Déclaration de conformité" meta="PDF · DoC" />
          </div>
        )}

        {/* TAB: FAQ */}
        {activeTab === 'faq' && product.faq.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {product.faq.map((faq, i) => (
              <FaqItem key={i} question={faq.question[locale]} answer={faq.answer[locale]} index={i} />
            ))}
          </div>
        )}
        {activeTab === 'faq' && product.faq.length === 0 && (
          <p style={{ color: '#64748b', fontSize: 14 }}>Aucune question fréquente pour ce produit.</p>
        )}
      </div>
    </>
  );
}

/* ── Sub-components ── */

function Badge({ color, children }: { color: 'green' | 'blue' | 'orange'; children: React.ReactNode }) {
  const styles: Record<string, { bg: string; color: string; border: string }> = {
    green: { bg: '#f0fdf4', color: '#15803d', border: '#bbf7d0' },
    blue: { bg: '#eff6ff', color: '#1d4ed8', border: '#bfdbfe' },
    orange: { bg: '#fff7ed', color: '#c2410c', border: '#fed7aa' },
  };
  const s = styles[color];
  return (
    <span style={{
      fontSize: 10, fontWeight: 700, padding: '5px 10px', borderRadius: 5,
      fontFamily: "'Space Mono', monospace", letterSpacing: 0.5,
      background: s.bg, color: s.color, border: `1px solid ${s.border}`,
    }}>
      {children}
    </span>
  );
}

function QsChip({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 6,
      background: '#f4f7fb', border: '1px solid #e2e8f0', borderRadius: 7,
      padding: '7px 12px', fontSize: 12, fontWeight: 600, color: '#0f172a',
    }}>
      <span style={{ color: '#1d4ed8', display: 'flex' }}>{icon}</span>
      {children}
    </div>
  );
}

function TrustItem({ title, sub }: { title: string; sub: string }) {
  return (
    <div style={{ textAlign: 'center', fontSize: 11, color: '#64748b' }}>
      <strong style={{ display: 'block', fontSize: 12, color: '#0f172a', fontWeight: 700 }}>{title}</strong>
      {sub}
    </div>
  );
}

function SpecGroup({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden' }}>
      <div style={{
        padding: '14px 20px', background: '#0b1630', color: '#fff',
        fontSize: 12, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span style={{ color: '#60a5fa', display: 'flex' }}>{icon}</span>
        {title}
      </div>
      {children}
    </div>
  );
}

function SpecRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div style={{
      display: 'flex', padding: '11px 20px', borderBottom: '1px solid #e2e8f0',
      gap: 16, fontSize: 13,
    }}>
      <span style={{ color: '#64748b', fontWeight: 500, minWidth: 140, flexShrink: 0 }}>{label}</span>
      <span style={{
        color: highlight ? '#1d4ed8' : '#0f172a', fontWeight: 600,
        fontFamily: "'Space Mono', monospace", fontSize: 12,
      }}>
        {value}
      </span>
    </div>
  );
}

function CompareRow({ label, tsfVal, compVal, tsfWidth, animate }: {
  label: string; tsfVal: string; compVal: string; tsfWidth: number; animate: boolean;
}) {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 6 }}>
        <span style={{ fontWeight: 600, color: '#0f172a' }}>{label}</span>
        <span style={{ color: '#1d4ed8', fontWeight: 700 }}>{tsfVal} vs {compVal}</span>
      </div>
      <AnimatedBar width={animate ? tsfWidth : 0} animate={animate} />
      <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
        <span style={{
          fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4,
          fontFamily: "'Space Mono', monospace",
          background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe',
        }}>
          TSF: {tsfVal}
        </span>
        <span style={{
          fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4,
          fontFamily: "'Space Mono', monospace",
          background: '#f8fafc', color: '#64748b', border: '1px solid #e2e8f0',
        }}>
          Standard: {compVal}
        </span>
      </div>
    </div>
  );
}

function DlCard({ icon, name, meta }: { icon: React.ReactNode; name: string; meta: string }) {
  return (
    <div style={{
      background: '#fff', border: '1px solid #e2e8f0', borderRadius: 10,
      padding: 20, display: 'flex', alignItems: 'center', gap: 14,
      cursor: 'pointer', transition: 'all .2s',
    }}
      className="hover:shadow-md"
    >
      <div style={{
        width: 40, height: 40, borderRadius: 8, background: '#eff6ff',
        border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center',
        justifyContent: 'center', flexShrink: 0, color: '#1d4ed8',
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>{name}</div>
        <div style={{ fontSize: 11, color: '#64748b', marginTop: 2, fontFamily: "'Space Mono', monospace" }}>{meta}</div>
      </div>
    </div>
  );
}

function FaqItem({ question, answer, index }: { question: string; answer: string; index?: number }) {
  const [open, setOpen] = useState(false);
  const num = String((index ?? 0) + 1).padStart(2, '0');

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        border: `1px solid ${open ? '#789cd8' : '#e2e8f0'}`,
        boxShadow: open ? '0 4px 24px rgba(15,82,186,0.08)' : '0 1px 3px rgba(0,0,0,0.04)',
        transition: 'all 0.3s',
        animation: 'faqItemIn 0.4s ease both',
        animationDelay: `${(index ?? 0) * 0.06}s`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex', alignItems: 'flex-start', gap: 16,
          width: '100%', padding: '16px 20px', textAlign: 'left',
          background: 'none', border: 'none', cursor: 'pointer',
        }}
      >
        <span style={{
          flexShrink: 0, width: 36, height: 36, borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 12, fontWeight: 700,
          background: open ? '#1d4ed8' : '#f1f5f9',
          color: open ? '#fff' : '#64748b',
          transition: 'all 0.3s',
        }}>
          {num}
        </span>
        <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: '#0f172a', lineHeight: 1.4, paddingTop: 6 }}>
          {question}
        </span>
        <ChevronDown size={18} style={{
          flexShrink: 0, marginTop: 8,
          color: open ? '#1d4ed8' : '#94a3b8',
          transition: 'transform 0.3s, color 0.3s',
          transform: open ? 'rotate(180deg)' : 'none',
        }} />
      </button>
      <div style={{
        display: 'grid',
        gridTemplateRows: open ? '1fr' : '0fr',
        transition: 'grid-template-rows 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ padding: '0 20px 16px', paddingLeft: 72 }}>
            <p style={{ fontSize: 13, color: '#475569', lineHeight: 1.7, margin: 0 }}>
              {answer}
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes faqItemIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
