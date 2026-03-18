'use client';

import { Link } from '@/i18n/navigation';
import { ArrowRight, Building2, Zap, Factory, Train, Fuel } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const INDUSTRIES = [
  {
    num: '01/06', slug: 'smart-city', icon: Building2,
    cat: 'Ville connectée', name: 'Smart City & Infrastructure Urbaine', featured: true,
    bg: 'linear-gradient(135deg, #0f2040 0%, #1e3a6e 60%, #0e4d8a 100%)',
    desc: 'Caméras de surveillance, éclairage public intelligent, bornes de recharge EV, capteurs environnementaux. Nos switches IP40 résistent aux variations thermiques extrêmes en armoire de rue.',
    useCases: ['Vidéosurveillance HD multi-caméras avec PoE', 'Réseau fibre optique de collecte urbain', 'Interconnexion intersections intelligentes', 'Gestion de flotte & mobilité connectée'],
    products: ['SW-POE-8P', 'SW-G8P-L2', 'RTR-4G-INDUS', 'AP-WIFI6-OUT'],
  },
  {
    num: '02/06', slug: 'energies-renouvelables', icon: Zap,
    cat: 'Énergies renouvelables', name: 'Énergie & Utilités',
    bg: 'linear-gradient(135deg, #1c2e0f 0%, #14532d 60%, #166534 100%)',
    desc: 'Parcs éoliens, centrales solaires, postes de distribution électrique. Résistance aux EMI et décharges électrostatiques.',
    useCases: ['SCADA postes HT/MT', 'Communication DNP3 / IEC 61850', 'Monitoring turbines éoliennes'],
    products: ['SW-G5P-PRO', 'SW-TSN-PTP'],
  },
  {
    num: '03/06', slug: 'industrie-4-0', icon: Factory,
    cat: 'Automatisation industrielle', name: 'Industrie 4.0 & Automation',
    bg: 'linear-gradient(135deg, #1c1040 0%, #3b0764 60%, #4c1d95 100%)',
    desc: 'Lignes de production, robots, automates PLC. Support PROFINET IRT pour la communication temps-réel et latence sous 1µs.',
    useCases: ['Communication PLC/SCADA PROFINET', 'Robotique collaborative temps réel', 'Contrôle de mouvement CNC'],
    products: ['SW-PROFINET', 'SW-L3-MGD'],
  },
  {
    num: '04/06', slug: 'transports-intelligents', icon: Train,
    cat: 'Mobilité & logistique', name: 'Transport Intelligent',
    bg: 'linear-gradient(135deg, #1c0a00 0%, #7c2d12 60%, #9a3412 100%)',
    desc: 'Signalisation ferroviaire, péages automatisés, gestion de flotte. Homologations EN50155 disponibles sur demande.',
    useCases: ['Commande signalisation ferroviaire', 'Caméras embarquées bus/tram PoE', 'Wi-Fi passagers temps réel'],
    products: ['SW-POE-RAIL', 'RTR-5G-MOB'],
  },
  {
    num: '05/06', slug: 'smart-city', icon: Fuel,
    cat: 'Pétrochimie & process', name: 'Pétrole, Gaz & Chimie',
    bg: 'linear-gradient(135deg, #0c1a1a 0%, #134e4a 60%, #0f766e 100%)',
    desc: 'Raffineries, plateformes offshore, sites ATEX. Équipements conçus pour les environnements explosibles et corrosifs.',
    useCases: ['Monitoring pipelines Modbus', 'Sécurité plateforme offshore', 'Contrôle procédé raffinerie'],
    products: ['SW-ATEX-5P', 'CONV-SERIAL'],
  },
];

export function SolutionsContent() {
  return (
    <>
      {/* ── HERO ── */}
      <div style={{ background: '#0b1630', padding: '56px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 100%, rgba(29,78,216,0.2), transparent 60%)' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 999, padding: '5px 14px', fontSize: 11, color: '#94a3b8', fontWeight: 600, letterSpacing: 0.5, marginBottom: 18 }}>
            Solutions métier
          </div>
          <h1 style={{ fontSize: 40, fontWeight: 800, color: '#fff', letterSpacing: -0.5, marginBottom: 14, lineHeight: 1.15 }}>
            Réseau industriel adapté<br />à votre secteur
          </h1>
          <p style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.7 }}>
            Nos équipements IP40 sont déployés dans 6 secteurs critiques à travers le monde. Découvrez les configurations recommandées pour votre environnement.
          </p>
        </div>
      </div>

      {/* ── INDUSTRIES ── */}
      <div style={{ maxWidth: 1200, margin: '40px auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0b1630' }}>6 secteurs, 1 standard de fiabilité</h2>
          <p style={{ fontSize: 14, color: '#64748b', maxWidth: 400, lineHeight: 1.6, textAlign: 'right' }}>
            Chaque secteur a ses contraintes. Nos équipements IP40 s&apos;adaptent à tous.
          </p>
        </div>

        {/* Featured industry */}
        {INDUSTRIES.filter((i) => i.featured).map((ind) => (
          <div key={ind.num} style={{ border: '1px solid #e2e8f0', borderRadius: 16, overflow: 'hidden', marginBottom: 20 }}>
            <div style={{ height: 280, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: ind.bg }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 700, position: 'absolute', top: 16, left: 20, zIndex: 1, letterSpacing: 1 }}>{ind.num}</div>
              <div style={{ position: 'relative', zIndex: 1 }}><ind.icon size={64} style={{ color: 'rgba(255,255,255,0.9)' }} /></div>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,14,31,0.85) 0%, transparent 60%)' }} />
            </div>
            <div style={{ background: '#fff', padding: 28 }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#1d4ed8', marginBottom: 8 }}>{ind.cat}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: '#0b1630', marginBottom: 8, letterSpacing: -0.3 }}>{ind.name}</div>
              <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, marginBottom: 16 }}>{ind.desc}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 16 }}>
                {ind.useCases.map((uc) => (
                  <div key={uc} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#0f172a' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#1d4ed8', flexShrink: 0 }} />
                    {uc}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                {ind.products.map((p) => (
                  <span key={p} style={{ fontSize: 10, fontWeight: 700, background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe', padding: '3px 9px', borderRadius: 5, fontFamily: "'Space Mono', monospace" }}>{p}</span>
                ))}
              </div>
              <Link href={`/solutions/${ind.slug}`} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, color: '#1d4ed8', textDecoration: 'none' }}>
                Voir les produits {ind.cat} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}

        {/* Other industries grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {INDUSTRIES.filter((i) => !i.featured).map((ind) => (
            <div key={ind.num} style={{ border: '1px solid #e2e8f0', borderRadius: 16, overflow: 'hidden' }}>
              <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', background: ind.bg }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 700, position: 'absolute', top: 16, left: 20, zIndex: 1, letterSpacing: 1 }}>{ind.num}</div>
                <div style={{ position: 'relative', zIndex: 1 }}><ind.icon size={48} style={{ color: 'rgba(255,255,255,0.9)' }} /></div>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,14,31,0.85) 0%, transparent 60%)' }} />
              </div>
              <div style={{ background: '#fff', padding: 24 }}>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#1d4ed8', marginBottom: 8 }}>{ind.cat}</div>
                <div style={{ fontSize: 18, fontWeight: 800, color: '#0b1630', marginBottom: 8, letterSpacing: -0.3 }}>{ind.name}</div>
                <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6, marginBottom: 16 }}>{ind.desc}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginBottom: 16 }}>
                  {ind.useCases.map((uc) => (
                    <div key={uc} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#0f172a' }}>
                      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#1d4ed8', flexShrink: 0 }} />
                      {uc}
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {ind.products.map((p) => (
                    <span key={p} style={{ fontSize: 10, fontWeight: 700, background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe', padding: '3px 9px', borderRadius: 5, fontFamily: "'Space Mono', monospace" }}>{p}</span>
                  ))}
                </div>
                <Link href={`/solutions/${ind.slug}`} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, color: '#1d4ed8', textDecoration: 'none' }}>
                  Explorer <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── STATS BAND ── */}
      <div style={{ background: '#0b1630', padding: '40px', margin: '40px 0' }}>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6" style={{ maxWidth: 1200, margin: '0 auto' }}>
          {[
            { num: '300k+', label: 'Unités déployées/an' },
            { num: '6', label: 'Secteurs industriels' },
            { num: '40+', label: 'Pays clients' },
            { num: '-40°C', label: 'Température min.' },
            { num: '24/7', label: 'Support technique' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 28, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: '#64748b' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ padding: '0 40px', marginBottom: 60 }}>
        <div style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16, padding: '48px 40px', textAlign: 'center', maxWidth: 1200, margin: '0 auto', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 300, height: 300, background: 'radial-gradient(circle, rgba(29,78,216,0.06), transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#eff6ff', border: '1px solid #bfdbfe', color: '#1d4ed8', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 999, marginBottom: 16, letterSpacing: 0.5 }}>
            Votre secteur, notre expertise
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0b1630', marginBottom: 12 }}>
            Vous ne trouvez pas votre secteur ?
          </h2>
          <p style={{ fontSize: 14, color: '#64748b', maxWidth: 500, margin: '0 auto 28px', lineHeight: 1.7 }}>
            Nos ingénieurs analysent vos contraintes spécifiques et vous proposent la configuration réseau optimale, gratuitement.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/demande-de-devis" style={{ background: '#f97316', color: '#fff', border: 'none', padding: '14px 28px', borderRadius: 7, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
              Demander une étude technique gratuite →
            </Link>
            <Link href="/produits" style={{ background: '#f4f7fb', border: '1.5px solid #e2e8f0', color: '#0f172a', padding: '14px 28px', borderRadius: 7, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
              Voir tous les produits
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
