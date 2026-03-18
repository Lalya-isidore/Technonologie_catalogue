'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { ArrowRight, Shield, Thermometer, Award, Headphones, Package, CheckCircle, Globe, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ── Counter animation hook ── */
function useCounter(target: number, delay: number, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const start = performance.now();
      function step(now: number) {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }, delay);
    return () => clearTimeout(timeout);
  }, [target, delay, duration]);

  return value;
}

/* ── Network Canvas ── */
interface NetworkNode {
  x: number;
  y: number;
  r: number;
  label: string;
  isHub?: boolean;
}

interface Packet {
  from: number;
  to: number;
  t: number;
  speed: number;
  dir: number;
  color: string;
}

const NODES: NetworkNode[] = [
  { x: 0.5, y: 0.5, r: 22, label: '', isHub: true },
  { x: 0.2, y: 0.15, r: 12, label: 'Switch' },
  { x: 0.75, y: 0.12, r: 10, label: 'IoT' },
  { x: 0.88, y: 0.5, r: 12, label: 'Router' },
  { x: 0.72, y: 0.88, r: 10, label: '5G' },
  { x: 0.28, y: 0.88, r: 10, label: 'Edge' },
  { x: 0.08, y: 0.5, r: 12, label: 'Sensor' },
];

const EDGES: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 2], [3, 4], [5, 6],
];

function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const animRef = useRef<number>(0);
  const packetsRef = useRef<Packet[]>(
    EDGES.map(([a, b]) => ({
      from: a,
      to: b,
      t: Math.random(),
      speed: 0.004 + Math.random() * 0.003,
      dir: Math.random() > 0.5 ? 1 : -1,
      color: Math.random() > 0.5 ? '#38bdf8' : '#f97316',
    }))
  );

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const W = canvas.width;
    const H = canvas.height;
    ctx.clearRect(0, 0, W, H);
    frameRef.current++;

    const getPos = (ni: number) => ({
      x: NODES[ni].x * W,
      y: NODES[ni].y * H,
    });

    // Edges
    EDGES.forEach(([a, b]) => {
      const pa = getPos(a);
      const pb = getPos(b);
      ctx.beginPath();
      ctx.moveTo(pa.x, pa.y);
      ctx.lineTo(pb.x, pb.y);
      ctx.strokeStyle = 'rgba(56,189,248,0.12)';
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // Packets
    packetsRef.current.forEach((p) => {
      p.t += p.speed * p.dir;
      if (p.t > 1) { p.t = 0; p.dir = 1; }
      if (p.t < 0) { p.t = 1; p.dir = -1; }

      const pa = getPos(p.from);
      const pb = getPos(p.to);
      const px = pa.x + (pb.x - pa.x) * p.t;
      const py = pa.y + (pb.y - pa.y) * p.t;

      // Glow trail
      const grd = ctx.createRadialGradient(px, py, 0, px, py, 8);
      grd.addColorStop(0, p.color + 'cc');
      grd.addColorStop(1, p.color + '00');
      ctx.beginPath();
      ctx.arc(px, py, 8, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Dot
      ctx.beginPath();
      ctx.arc(px, py, 3, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
    });

    // Nodes
    NODES.forEach((n) => {
      const x = n.x * W;
      const y = n.y * H;

      // Glow
      const grd = ctx.createRadialGradient(x, y, 0, x, y, n.r * 2.5);
      grd.addColorStop(0, n.isHub ? 'rgba(29,78,216,0.4)' : 'rgba(56,189,248,0.25)');
      grd.addColorStop(1, 'transparent');
      ctx.beginPath();
      ctx.arc(x, y, n.r * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Circle
      ctx.beginPath();
      ctx.arc(x, y, n.r, 0, Math.PI * 2);
      ctx.fillStyle = n.isHub ? '#1d4ed8' : 'rgba(30,58,132,0.8)';
      ctx.fill();
      ctx.strokeStyle = n.isHub ? '#60a5fa' : 'rgba(56,189,248,0.5)';
      ctx.lineWidth = n.isHub ? 2 : 1;
      ctx.stroke();

      // Hub icon
      if (n.isHub) {
        ctx.strokeStyle = 'rgba(255,255,255,0.7)';
        ctx.lineWidth = 1.5;
        const s = 8;
        ctx.beginPath(); ctx.arc(x, y - s, 3, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(x - s, y + s / 2, 3, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(x + s, y + s / 2, 3, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y - s + 3); ctx.lineTo(x - s + 1, y + s / 2 - 1);
        ctx.moveTo(x, y - s + 3); ctx.lineTo(x + s - 1, y + s / 2 - 1);
        ctx.moveTo(x - s + 3, y + s / 2); ctx.lineTo(x + s - 3, y + s / 2);
        ctx.stroke();
      }

      // Label
      if (n.label) {
        ctx.fillStyle = 'rgba(148,163,184,0.9)';
        ctx.font = '10px Inter, sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, x, y + n.r + 12);
      }
    });

    // Hub pulse ring
    const hub = NODES[0];
    const cx = hub.x * W;
    const cy = hub.y * H;
    const pulseRadius = hub.r + 10 + (frameRef.current % 120) / 4;
    const pulseAlpha = 1 - (frameRef.current % 120) / 120;
    ctx.beginPath();
    ctx.arc(cx, cy, pulseRadius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(96,165,250,${pulseAlpha * 0.5})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    animRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const timeout = setTimeout(() => {
      animRef.current = requestAnimationFrame(draw);
    }, 350);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [draw]);

  return <canvas ref={canvasRef} className="w-full mb-6" style={{ height: 200 }} />;
}

/* ── Ticker data ── */
const TICKER_ITEMS: { icon: LucideIcon; text: string }[] = [
  { icon: Shield, text: 'Certifié IP40' },
  { icon: Thermometer, text: '-40°C à +75°C' },
  { icon: Award, text: 'Garantie 3 ans' },
  { icon: Headphones, text: 'Support 24/7' },
  { icon: Package, text: '300 000+ unités/an' },
  { icon: CheckCircle, text: 'CE | FCC | UL' },
  { icon: Globe, text: '6 langues disponibles' },
  { icon: Zap, text: 'Livraison rapide' },
];

/* ── HeroSection ── */
export function HeroSection() {
  const t = useTranslations('hero');


  const count102 = useCounter(102, 900);
  const countIP40 = useCounter(40, 1050);
  const countTemp = useCounter(40, 1200);

  return (
    <>
      <section
        className="relative min-h-[75vh] lg:min-h-screen flex items-start lg:items-center overflow-hidden pt-[40px] lg:pt-[108px]"
        style={{ background: '#0b1630' }}
      >
        {/* Circuit board background pattern */}
        <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.12 }}>
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                {/* Horizontal traces */}
                <line x1="0" y1="40" x2="60" y2="40" stroke="#38bdf8" strokeWidth="1.5"/>
                <line x1="80" y1="40" x2="200" y2="40" stroke="#38bdf8" strokeWidth="1"/>
                <line x1="0" y1="100" x2="120" y2="100" stroke="#60a5fa" strokeWidth="1"/>
                <line x1="140" y1="100" x2="200" y2="100" stroke="#38bdf8" strokeWidth="1.5"/>
                <line x1="0" y1="160" x2="80" y2="160" stroke="#60a5fa" strokeWidth="1"/>
                <line x1="100" y1="160" x2="200" y2="160" stroke="#38bdf8" strokeWidth="1"/>
                {/* Vertical traces */}
                <line x1="60" y1="0" x2="60" y2="40" stroke="#38bdf8" strokeWidth="1"/>
                <line x1="60" y1="40" x2="60" y2="100" stroke="#60a5fa" strokeWidth="0.8"/>
                <line x1="140" y1="60" x2="140" y2="140" stroke="#38bdf8" strokeWidth="1"/>
                <line x1="100" y1="120" x2="100" y2="200" stroke="#60a5fa" strokeWidth="0.8"/>
                {/* Junction dots */}
                <circle cx="60" cy="40" r="3" fill="#38bdf8"/>
                <circle cx="140" cy="100" r="3" fill="#60a5fa"/>
                <circle cx="100" cy="160" r="3" fill="#38bdf8"/>
                <circle cx="80" cy="40" r="2" fill="#60a5fa"/>
                <circle cx="120" cy="100" r="2" fill="#38bdf8"/>
                {/* IC chip shapes */}
                <rect x="25" y="70" width="16" height="20" rx="2" fill="none" stroke="#38bdf8" strokeWidth="1"/>
                <line x1="25" y1="75" x2="18" y2="75" stroke="#38bdf8" strokeWidth="0.8"/>
                <line x1="25" y1="80" x2="18" y2="80" stroke="#38bdf8" strokeWidth="0.8"/>
                <line x1="25" y1="85" x2="18" y2="85" stroke="#38bdf8" strokeWidth="0.8"/>
                <line x1="41" y1="75" x2="48" y2="75" stroke="#38bdf8" strokeWidth="0.8"/>
                <line x1="41" y1="80" x2="48" y2="80" stroke="#38bdf8" strokeWidth="0.8"/>
                <line x1="41" y1="85" x2="48" y2="85" stroke="#38bdf8" strokeWidth="0.8"/>
                {/* Small components */}
                <rect x="150" y="30" width="12" height="6" rx="1" fill="none" stroke="#60a5fa" strokeWidth="0.8"/>
                <rect x="165" y="150" width="12" height="6" rx="1" fill="none" stroke="#38bdf8" strokeWidth="0.8"/>
                {/* Diagonal traces */}
                <line x1="80" y1="40" x2="100" y2="60" stroke="#60a5fa" strokeWidth="0.8"/>
                <line x1="140" y1="140" x2="160" y2="160" stroke="#38bdf8" strokeWidth="0.8"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>

        {/* Background gradient overlays */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 20% 50%, rgba(29,78,216,0.25) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 80% 30%, rgba(56,189,248,0.1) 0%, transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] pointer-events-none" style={{ background: 'linear-gradient(to top, #0b1630, transparent)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-10 w-full z-[2]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            {/* ── LEFT ── */}
            <div>
              <div
                className="hero-slide-left inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs mb-7"
                style={{
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: '#94a3b8',
                  animationDelay: '0.1s',
                }}
              >
                <span className="w-2 h-2 rounded-full hero-pulse" style={{ background: '#22c55e' }} />
                102 produits &mdash; 9 cat&eacute;gories &mdash; 6 langues
              </div>

              <h1
                className="hero-slide-left text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-white leading-[1.1] mb-5"
                style={{ animationDelay: '0.25s' }}
              >
                {t('title')}
              </h1>

              <p
                className="hero-slide-left text-[15px] leading-[1.7] max-w-[420px] mb-9"
                style={{ color: '#94a3b8', animationDelay: '0.4s' }}
              >
                {t('subtitle')}
              </p>

              <div
                className="hero-slide-left flex flex-col sm:flex-row gap-3.5 items-start sm:items-center"
                style={{ animationDelay: '0.55s' }}
              >
                <Link
                  href="/produits"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-[5px] transition-all hover:-translate-y-0.5"
                  style={{ background: '#f97316' }}
                >
                  {t('cta1')}
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/demande-de-devis"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-[5px] transition-all hover:-translate-y-0.5"
                  style={{ border: '1px solid rgba(255,255,255,0.25)' }}
                >
                  {t('cta2')}
                </Link>
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div
              className="hero-slide-right hidden lg:flex justify-center items-center"
              style={{ animationDelay: '0.3s' }}
            >
              <div
                className="relative w-full max-w-[520px] rounded-2xl p-8 mt-6 mb-8"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Guarantee badge */}
                <div
                  className="hero-badge-pop absolute -top-4 -right-4 px-4 py-2 rounded-md text-xs font-bold text-white"
                  style={{ background: '#22c55e', animationDelay: '1.2s' }}
                >
                  &#x2713; Garantie 3 ans
                </div>

                {/* Network canvas */}
                <NetworkCanvas />

                {/* Stats row */}
                <div
                  className="grid grid-cols-3 rounded-[10px] overflow-hidden mb-4"
                  style={{ gap: 1, background: 'rgba(255,255,255,0.08)' }}
                >
                  <div
                    className="hero-fade-up text-center p-4"
                    style={{ background: 'rgba(255,255,255,0.04)', animationDelay: '0.9s' }}
                  >
                    <div className="text-lg mb-1.5" style={{ color: '#94a3b8' }}>&#x2B21;</div>
                    <div className="text-[22px] font-extrabold text-white font-mono">{count102}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: '#94a3b8' }}>Produits</div>
                  </div>
                  <div
                    className="hero-fade-up text-center p-4"
                    style={{ background: 'rgba(255,255,255,0.04)', animationDelay: '1.05s' }}
                  >
                    <div className="text-lg mb-1.5" style={{ color: '#94a3b8' }}>&#x1F6E1;</div>
                    <div className="text-[22px] font-extrabold text-white font-mono">IP{countIP40}</div>
                    <div className="text-[11px] mt-0.5" style={{ color: '#94a3b8' }}>Protection</div>
                  </div>
                  <div
                    className="hero-fade-up text-center p-4"
                    style={{ background: 'rgba(255,255,255,0.04)', animationDelay: '1.2s' }}
                  >
                    <div className="text-lg mb-1.5" style={{ color: '#94a3b8' }}>&#x1F321;</div>
                    <div className="text-[22px] font-extrabold text-white font-mono">-{countTemp}&deg;C</div>
                    <div className="text-[11px] mt-0.5" style={{ color: '#94a3b8' }}>&agrave; +75&deg;C</div>
                  </div>
                </div>

                {/* Certs row */}
                <div className="grid grid-cols-3 gap-2">
                  {['CE', 'FCC', 'UL'].map((cert, i) => (
                    <div
                      key={cert}
                      className="hero-fade-up text-center py-2 rounded-md text-xs font-bold font-mono"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#38bdf8',
                        animationDelay: `${1.3 + i * 0.1}s`,
                      }}
                    >
                      {cert}
                    </div>
                  ))}
                </div>

                {/* Support badge */}
                <div
                  className="hero-badge-pop absolute -bottom-4 left-8 flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-bold text-white"
                  style={{ background: '#f97316', animationDelay: '1.6s' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white hero-pulse" />
                  Support 24/7
                </div>
              </div>
            </div>
          </div>

          {/* Mobile stats */}
          <div className="grid grid-cols-3 gap-4 mt-10 pt-6 lg:hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-white font-mono">{count102}</div>
              <div className="text-xs mt-1" style={{ color: '#94a3b8' }}>Produits</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-white font-mono">IP{countIP40}</div>
              <div className="text-xs mt-1" style={{ color: '#94a3b8' }}>Protection</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-extrabold text-white font-mono">-{countTemp}&deg;C</div>
              <div className="text-xs mt-1" style={{ color: '#94a3b8' }}>&agrave; +75&deg;C</div>
            </div>
          </div>
        </div>

      </section>

      {/* ── TICKER ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}} />
      <div
        style={{
          background: '#1d4ed8',
          marginTop: '8px',
          padding: '12px 0',
          overflow: 'hidden',
          whiteSpace: 'nowrap' as const,
        }}
      >
        <div
          style={{
            display: 'inline-block',
            animation: 'tickerScroll 20s linear infinite',
          }}
        >
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginRight: '64px',
                fontSize: '13px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.9)',
              }}
            >
              <item.icon size={14} style={{ opacity: 0.7 }} />
              <span>{item.text}</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
