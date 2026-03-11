'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { ArrowRight, Clock, FileText } from 'lucide-react';

const TRUST_PILLS = [
  { label: 'R\u00e9ponse sous 24h', color: '#22c55e' },
  { label: 'Devis gratuit', color: '#f97316' },
  { label: 'Sans engagement', color: '#38bdf8' },
  { label: 'Support 7j/7', color: '#22c55e' },
] as const;

export function CtaSection() {
  const t = useTranslations('common');
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    const colors = ['rgba(56,189,248,.4)', 'rgba(249,115,22,.3)', 'rgba(34,197,94,.3)', 'rgba(255,255,255,.15)'];
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      p.style.cssText = `
        position:absolute; border-radius:50%; opacity:0;
        width:${3 + Math.random() * 5}px;
        height:${3 + Math.random() * 5}px;
        left:${Math.random() * 100}%;
        top:${30 + Math.random() * 60}%;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        animation: ctaFloat ${4 + Math.random() * 6}s ${Math.random() * 5}s linear infinite;
      `;
      container.appendChild(p);
    }
    return () => { container.innerHTML = ''; };
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ background: '#0b1630', padding: '80px 48px' }}>
      {/* Animated grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(56,189,248,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,.05) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      {/* Left glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-120px', left: '-80px',
          width: '480px', height: '480px',
          background: 'radial-gradient(circle, rgba(29,78,216,.22) 0%, transparent 65%)',
        }}
      />

      {/* Right glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-100px', right: '-60px',
          width: '360px', height: '360px',
          background: 'radial-gradient(circle, rgba(249,115,22,.1) 0%, transparent 65%)',
        }}
      />

      {/* Floating particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none z-[1] overflow-hidden" />

      {/* Inner */}
      <div className="relative z-[2] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-center">

        {/* Left */}
        <div>
          <div
            className="cta-fade-up inline-flex items-center gap-2 font-mono text-[10px] uppercase mb-[18px]"
            style={{ color: '#38bdf8', letterSpacing: '3px', animationDelay: '0.1s' }}
          >
            <span className="w-7 h-px opacity-60" style={{ background: '#38bdf8' }} />
            Experts \u00e0 votre \u00e9coute
          </div>

          <h2
            className="cta-fade-up font-extrabold leading-[1.1] text-white mb-4"
            style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-0.5px', animationDelay: '0.2s' }}
          >
            Besoin d&apos;un devis<br />
            <span style={{ color: '#38bdf8' }}>personnalis\u00e9 ?</span>
          </h2>

          <p
            className="cta-fade-up text-[15px] leading-[1.65] max-w-[500px] mb-8"
            style={{ color: '#94a3b8', animationDelay: '0.3s' }}
          >
            Notre \u00e9quipe d&apos;experts vous accompagne dans le choix de la solution r\u00e9seau industrielle adapt\u00e9e \u00e0 vos besoins. R\u00e9ponse sous 24h, devis gratuit et sans engagement.
          </p>

          {/* Trust pills */}
          <div className="cta-fade-up flex gap-2.5 flex-wrap" style={{ animationDelay: '0.4s' }}>
            {TRUST_PILLS.map(({ label, color }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full text-[12px] font-medium"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: '5px 14px',
                  color: '#94a3b8',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div
          className="cta-slide-right relative rounded-2xl flex flex-col gap-3 w-full lg:w-[320px] shrink-0"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.1)',
            padding: '36px 32px',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            animationDelay: '0.25s',
          }}
        >
          {/* Shimmer border on hover */}
          <span className="cta-shimmer absolute -inset-px rounded-[17px] pointer-events-none opacity-0 transition-opacity duration-[400ms]" />

          {/* Card header */}
          <div className="flex items-center gap-2.5 mb-1">
            <div
              className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
              style={{ background: 'rgba(29,78,216,0.2)', border: '1px solid rgba(29,78,216,0.4)' }}
            >
              <FileText size={18} style={{ color: '#38bdf8' }} />
            </div>
            <div>
              <div className="text-[13px] font-bold text-white">Obtenir un devis</div>
              <div className="text-[11px]" style={{ color: '#94a3b8' }}>Gratuit &middot; Sans engagement</div>
            </div>
          </div>

          <div className="h-px" style={{ background: 'rgba(255,255,255,0.08)' }} />

          {/* Orange CTA button */}
          <Link
            href="/demande-de-devis"
            className="flex items-center justify-center gap-2 rounded-[10px] text-[14px] font-bold text-white no-underline transition-all duration-[220ms] hover:-translate-y-0.5"
            style={{ background: '#f97316', padding: '14px 20px' }}
          >
            {t('requestQuote')} <ArrowRight size={16} />
          </Link>

          {/* WhatsApp button */}
          <a
            href="https://wa.me/33617030308"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-[10px] text-[14px] font-semibold no-underline transition-all duration-[220ms] hover:-translate-y-0.5"
            style={{
              background: 'rgba(34,197,94,0.12)',
              color: '#22c55e',
              border: '1px solid rgba(34,197,94,0.3)',
              padding: '13px 20px',
            }}
          >
            <span className="w-[7px] h-[7px] rounded-full cta-wa-pulse" style={{ background: '#22c55e' }} />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {t('whatsappSupport')}
          </a>

          {/* Response time */}
          <div className="flex items-center justify-center gap-1.5 text-[11px]" style={{ color: '#94a3b8' }}>
            <Clock size={12} className="opacity-50" />
            Temps de r&eacute;ponse moyen : <strong className="text-white ml-0.5">1h42</strong>
          </div>
        </div>
      </div>

      {/* Scoped styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .cta-fade-up {
          opacity: 0;
          transform: translateY(16px);
          animation: ctaFadeUp 0.6s forwards;
        }
        @keyframes ctaFadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .cta-slide-right {
          opacity: 0;
          transform: translateX(24px);
          animation: ctaSlideRight 0.7s forwards;
        }
        @keyframes ctaSlideRight {
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes ctaFloat {
          0%   { opacity: 0; transform: translateY(0) scale(0); }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { opacity: 0; transform: translateY(-120px) scale(1); }
        }

        .cta-wa-pulse {
          animation: ctaWaPulse 1.8s infinite;
        }
        @keyframes ctaWaPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: .4; transform: scale(1.6); }
        }

        .cta-shimmer {
          background: linear-gradient(135deg, rgba(56,189,248,.4), rgba(29,78,216,.2), transparent 60%);
        }
        .cta-slide-right:hover .cta-shimmer {
          opacity: 1 !important;
        }

        .btn-orange-hover:hover {
          background: #ea6a00 !important;
          box-shadow: 0 8px 24px rgba(249,115,22,.35);
        }
        .btn-wa-hover:hover {
          background: rgba(34,197,94,.2) !important;
          border-color: rgba(34,197,94,.6) !important;
          box-shadow: 0 8px 24px rgba(34,197,94,.2);
        }
      `}} />
    </section>
  );
}
