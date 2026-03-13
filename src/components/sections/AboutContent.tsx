'use client';

import { useState, useEffect, useRef } from 'react';
import { Link } from '@/i18n/navigation';
import { Shield, Clock, Zap, ArrowRight, Users, MapPin, Mail, Phone } from 'lucide-react';

export function AboutContent() {
  return (
    <>
      {/* ── HERO ── */}
      <div style={{ padding: '72px 40px', position: 'relative', overflow: 'hidden' }}>
        {/* Background image */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/images/about-hero.webp)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        {/* Dark overlay for readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(11,22,48,0.92) 0%, rgba(11,22,48,0.8) 50%, rgba(11,22,48,0.7) 100%)' }} />
        {/* Blue glow accents */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: 600, height: 600, background: 'radial-gradient(circle, rgba(29,78,216,0.18), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 400, height: 400, background: 'radial-gradient(circle, rgba(249,115,22,0.08), transparent 60%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[60px] items-center"
        >
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 999, padding: '5px 14px', fontSize: 11, color: '#94a3b8', fontWeight: 600, letterSpacing: 0.5, marginBottom: 18 }}>
              Notre histoire
            </div>
            <h1 style={{ fontSize: 42, fontWeight: 800, color: '#fff', letterSpacing: -0.5, marginBottom: 14, lineHeight: 1.15 }}>
              Pionnier du réseau<br />industriel <span style={{ color: '#60a5fa' }}>fiable</span>
            </h1>
            <p style={{ fontSize: 15, color: '#94a3b8', lineHeight: 1.75, marginBottom: 28 }}>
              TSF Technology by Lannkin conçoit et distribue des équipements réseau industriels IP40 pour les environnements les plus exigeants. 300 000+ unités déployées dans 40+ pays.
            </p>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {['SIREN 953 478 971', 'TVA FR45953478971', 'France — Hermival-les-Vaux'].map((b) => (
                <span key={b} style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, fontWeight: 700, padding: '5px 12px', borderRadius: 6, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8' }}>{b}</span>
              ))}
            </div>
          </div>

          {/* Identity card */}
          <div style={{ background: 'rgba(11,22,48,0.55)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: 28 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#64748b', marginBottom: 20 }}>Identité de l&apos;entreprise</div>
            {[
              ['Raison sociale', 'Lannkin'],
              ['Marque commerciale', 'TSF Technology'],
              ['SIREN', '953 478 971'],
              ['SIRET', '953 478 971 00013'],
              ['TVA', 'FR45953478971'],
              ['Siège social', '14100 Hermival-les-Vaux'],
              ['Statut', '● Actif'],
            ].map(([key, val]) => (
              <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: 13 }}>
                <span style={{ color: '#64748b', fontWeight: 500 }}>{key}</span>
                <span style={{ color: val === '● Actif' ? '#22c55e' : '#fff', fontWeight: 600, fontFamily: "'Space Mono', monospace", fontSize: 12 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── VALUES ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 40px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#1d4ed8', marginBottom: 10 }}>Nos valeurs</div>
        <h2 style={{ fontSize: 30, fontWeight: 800, color: '#0b1630', marginBottom: 14, letterSpacing: -0.5 }}>Pourquoi TSF Technology ?</h2>
        <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.75, maxWidth: 600, marginBottom: 40 }}>
          Des équipements conçus pour durer, dans des environnements où la fiabilité n&apos;est pas une option.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: <Shield size={18} />, title: 'Fiabilité industrielle', desc: "IP40, aluminium haute résistance, -40°C à +75°C. Nos produits sont conçus pour 20+ ans de service continu sans défaillance.", num: '01' },
            { icon: <Clock size={18} />, title: 'Support réactif 24/7', desc: "Notre équipe technique répond en moins de 2h, 7j/7. Remplacement garanti sous J+1 en cas de défaillance.", num: '02' },
            { icon: <Zap size={18} />, title: 'Certifications exigeantes', desc: "CE, FCC, UL, RoHS certifiés sur l'intégralité du catalogue. Conformité réglementaire garantie.", num: '03' },
          ].map((v) => (
            <div key={v.num} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 24, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -10, right: 12, fontFamily: "'Space Mono', monospace", fontSize: 60, fontWeight: 700, color: 'rgba(29,78,216,0.05)', lineHeight: 1 }}>{v.num}</div>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: '#eff6ff', border: '1px solid #bfdbfe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, color: '#1d4ed8' }}>{v.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#0b1630', marginBottom: 6 }}>{v.title}</div>
              <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65 }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── NUMBERS ── */}
      <AnimatedNumbers />

      {/* ── TIMELINE + CERTIFICATIONS ── */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 40px' }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: '#1d4ed8', marginBottom: 10 }}>Notre parcours</div>
        <h2 style={{ fontSize: 30, fontWeight: 800, color: '#0b1630', marginBottom: 14, letterSpacing: -0.5 }}>Chronologie</h2>
        <p style={{ fontSize: 15, color: '#64748b', lineHeight: 1.75, maxWidth: 600, marginBottom: 40 }}>
          De la création à la distribution internationale.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
          {/* Timeline */}
          <AnimatedTimeline />

          {/* Certifications */}
          <div className="grid grid-cols-2 gap-[14px]" style={{ alignSelf: 'start' }}>
            {[
              { badge: 'CE', name: 'Conformité Européenne', desc: 'Directive RED & LVD' },
              { badge: 'FCC', name: 'États-Unis', desc: 'Part 15 Class B' },
              { badge: 'UL', name: 'Sécurité électrique', desc: 'UL 61010-1' },
              { badge: 'RoHS', name: 'Substances', desc: 'Directive 2011/65/UE' },
            ].map((c) => (
              <div key={c.badge} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 12, padding: 24, textAlign: 'center' }}>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 22, fontWeight: 700, color: '#1d4ed8', marginBottom: 8 }}>{c.badge}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#0b1630', marginBottom: 4 }}>{c.name}</div>
                <div style={{ fontSize: 11, color: '#64748b' }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── LANNKIN SECTION ── */}
      <div style={{ background: '#fff', borderTop: '1px solid #e2e8f0', padding: '60px 40px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }} className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: 8, padding: '10px 16px', marginBottom: 20 }}>
              <div style={{ width: 28, height: 28, background: '#1d4ed8', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 12, color: '#fff' }}>L</div>
              <span style={{ fontSize: 13, fontWeight: 700, color: '#0b1630' }}>TSF Technology by Lannkin</span>
            </div>
            <h2 style={{ fontSize: 26, fontWeight: 800, color: '#0b1630', marginBottom: 12 }}>La société mère : Lannkin</h2>
            <p style={{ fontSize: 14, color: '#64748b', lineHeight: 1.7, marginBottom: 20 }}>
              Lannkin est la société holding dont TSF Technology est la marque commerciale principale. Basée en Normandie, elle opère la distribution et le support technique pour l&apos;ensemble de la gamme sur le marché européen.
            </p>
            <div style={{ background: '#f4f7fb', border: '1px solid #e2e8f0', borderRadius: 8, padding: '16px 20px' }}>
              {[
                ['SIREN', '953 478 971'],
                ['SIRET', '953 478 971 00013'],
                ['N° TVA intracommunautaire', 'FR45953478971'],
                ['Téléphone', '+33 6 17 03 03 08'],
                ['Email', 'contact@tsf-technology.com'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', fontSize: 12, borderBottom: '1px solid #e2e8f0' }}>
                  <span style={{ color: '#64748b' }}>{k}</span>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, color: '#0f172a', fontSize: 11 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual stats */}
          <div style={{ background: '#0b1630', borderRadius: 16, padding: 36, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { icon: <Users size={16} />, num: 'Support 24/7', label: 'Équipe technique disponible' },
              { icon: <Clock size={16} />, num: '< 2h', label: 'Délai de réponse garanti' },
              { icon: <Shield size={16} />, num: '3 ans', label: 'Garantie sur tous les produits' },
              { icon: <ArrowRight size={16} />, num: 'J+1', label: 'Expédition depuis stock France' },
            ].map((s) => (
              <div key={s.num} style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 10, padding: '14px 16px' }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(29,78,216,0.2)', border: '1px solid rgba(29,78,216,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#60a5fa' }}>{s.icon}</div>
                <div>
                  <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 18, fontWeight: 700, color: '#fff' }}>{s.num}</div>
                  <div style={{ fontSize: 11, color: '#64748b' }}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* ── Animated Timeline ── */

const TIMELINE_ITEMS = [
  { year: '2021', title: 'Création de Lannkin', desc: 'Fondation de la société à Hermival-les-Vaux, Normandie. Vision : démocratiser l\'accès aux équipements réseau industriels IP40 en Europe.', active: false },
  { year: '2022', title: 'Lancement TSF Technology', desc: 'Création de la marque TSF Technology et premiers partenariats fabricants asiatiques certifiés. Premier catalogue de 40 références.', active: false },
  { year: '2024', title: '102 références & expansion', desc: 'Doublement du catalogue, lancement des gammes 5G et Wi-Fi 6 industriels. Dépassement des 300 000 unités vendues annuellement.', active: true },
];

function AnimatedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate line growing
          setLineHeight(100);
          // Animate items appearing one by one
          TIMELINE_ITEMS.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => [...prev, i]);
            }, 400 + i * 350);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ position: 'relative', paddingLeft: 32 }}>
      {/* Animated line */}
      <div style={{
        position: 'absolute', left: 10, top: 8, bottom: 8, width: 2,
        background: '#e2e8f0',
        overflow: 'hidden',
      }}>
        <div style={{
          width: '100%',
          height: `${lineHeight}%`,
          background: 'linear-gradient(to bottom, #1d4ed8, #60a5fa)',
          transition: 'height 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          borderRadius: 2,
        }} />
      </div>

      {TIMELINE_ITEMS.map((item, i) => {
        const visible = visibleItems.includes(i);
        return (
          <div key={item.year} style={{
            position: 'relative', marginBottom: 36,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}>
            {/* Dot */}
            <div style={{
              position: 'absolute', left: -26, top: 4, width: 16, height: 16,
              borderRadius: '50%',
              background: item.active ? '#1d4ed8' : '#fff',
              border: '2.5px solid #1d4ed8',
              zIndex: 1,
              transform: visible ? 'scale(1)' : 'scale(0)',
              transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}>
              {/* Pulse ring on active dot */}
              {item.active && visible && (
                <span style={{
                  position: 'absolute', inset: -6,
                  borderRadius: '50%',
                  border: '2px solid #1d4ed8',
                  animation: 'timelinePulse 2s ease-in-out infinite',
                }} />
              )}
            </div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, fontWeight: 700, color: '#1d4ed8', marginBottom: 4, letterSpacing: 0.5 }}>{item.year}</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#0b1630', marginBottom: 4 }}>{item.title}</div>
            <div style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>{item.desc}</div>
          </div>
        );
      })}

      {/* Keyframe animation for pulse */}
      <style>{`
        @keyframes timelinePulse {
          0%, 100% { opacity: 0; transform: scale(0.8); }
          50% { opacity: 0.5; transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
}

/* ── Animated Numbers ── */

const STATS = [
  { target: 300, suffix: 'k+', label: 'Unités vendues / an' },
  { target: 102, suffix: '', label: 'Références catalogue' },
  { target: 40, suffix: '+', label: 'Pays clients' },
  { target: 3, suffix: ' ans', label: 'Garantie sur tout' },
];

function AnimatedNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [values, setValues] = useState<number[]>(STATS.map(() => 0));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const duration = 1800;
    const fps = 60;
    const totalFrames = Math.round(duration / (1000 / fps));
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease-out cubic for a decelerating "electric" feel
      const eased = 1 - Math.pow(1 - progress, 3);

      setValues(STATS.map((s) => Math.round(eased * s.target)));

      if (frame >= totalFrames) {
        clearInterval(counter);
        setValues(STATS.map((s) => s.target));
      }
    }, 1000 / fps);

    return () => clearInterval(counter);
  }, [started]);

  return (
    <div ref={ref} style={{ background: '#0b1630', padding: '56px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <h2 style={{ fontSize: 26, fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: 36 }}>TSF Technology en chiffres</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 12, overflow: 'hidden' }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{ background: 'rgba(255,255,255,0.03)', padding: '28px 24px', textAlign: 'center' }}>
              <div style={{
                fontFamily: "'Space Mono', monospace", fontSize: 34, fontWeight: 700, color: '#fff', marginBottom: 4,
                opacity: started ? 1 : 0,
                transition: 'opacity 0.3s ease',
              }}>
                {values[i]}{s.suffix}
              </div>
              <div style={{ fontSize: 12, color: '#64748b' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
