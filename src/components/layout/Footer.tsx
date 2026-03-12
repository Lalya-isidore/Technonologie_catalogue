import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
  Shield, Thermometer, Award, Headphones, Briefcase,
  Mail, Phone, MapPin, ArrowRight,
} from 'lucide-react';

const PRODUCT_LINKS = [
  { key: 'layer3DinRail', href: '/produits/switches-ethernet/layer-3-din-rail' },
  { key: 'layer3Rack', href: '/produits/switches-ethernet/layer-3-rack' },
  { key: 'layer2ManagedRack', href: '/produits/switches-ethernet/layer-2-managed-rack' },
  { key: 'poeSwitches', href: '/produits/switches-ethernet/poe' },
  { key: 'tsnPtp', href: '/produits/switches-ethernet/tsn-ptp' },
  { key: 'compactSwitches', href: '/produits/switches-ethernet/compact' },
  { key: 'routers4g5g', href: '/produits/solutions-sans-fil/routeurs-4g-5g', isNew: true },
];

const SOLUTION_LINKS = [
  { key: 'smartCity', href: '/solutions/smart-city' },
  { key: 'renewableEnergy', href: '/solutions/energies-renouvelables' },
  { key: 'industry40', href: '/solutions/industrie-4-0' },
  { key: 'smartTransport', href: '/solutions/transports-intelligents' },
  { key: 'oilGas', href: '/solutions/petrole-gaz' },
];

const RESOURCE_LINKS = [
  { key: 'blog', href: '/blog' },
  { key: 'technicalGuides', href: '/ressources/guides-techniques' },
  { key: 'comparisons', href: '/ressources/comparatifs' },
  { key: 'glossary', href: '/ressources/glossaire' },
];

const BAND_ITEMS = [
  { icon: Shield, label: 'Certifié IP40' },
  { icon: Thermometer, label: '-40°C à +75°C' },
  { icon: Award, label: 'Garantie 3 ans' },
  { icon: Headphones, label: 'Support 24/7' },
  { icon: Briefcase, label: '300 000+ unités/an' },
] as const;

export function Footer() {
  const tNav = useTranslations('nav');
  const tFooter = useTranslations('footer');

  return (
    <footer role="contentinfo" aria-label="Pied de page" className="relative overflow-hidden" style={{ background: '#060c1a', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
      {/* Top glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-160px', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(29,78,216,.12) 0%, transparent 65%)',
        }}
      />

      {/* ── TOP BAND ── */}
      <div
        className="flex items-center justify-between gap-6 flex-wrap px-6 py-4 lg:px-14 lg:py-5"
        style={{
          background: '#0b1630',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div className="flex items-center gap-7 flex-wrap">
          {BAND_ITEMS.map(({ icon: Icon, label }, i) => (
            <div key={label} className="flex items-center gap-0">
              <div className="flex items-center gap-[7px] text-[12px] font-medium" style={{ color: '#cbd5e1' }}>
                <Icon size={14} style={{ color: '#38bdf8' }} />
                {label}
              </div>
              {i < BAND_ITEMS.length - 1 && (
                <div className="hidden sm:block ml-7 w-px h-4" style={{ background: 'rgba(255,255,255,0.07)' }} />
              )}
            </div>
          ))}
        </div>
        <Link
          href="/demande-de-devis"
          className="inline-flex items-center gap-[7px] text-[13px] font-bold text-white no-underline whitespace-nowrap rounded-md transition-all duration-200 hover:-translate-y-px shrink-0"
          style={{ background: '#f97316', padding: '9px 20px' }}
        >
          {tNav('requestQuote')} <ArrowRight size={14} />
        </Link>
      </div>

      {/* ── MAIN ── */}
      <div
        className="relative z-[1] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[260px_1fr_1fr_1fr] px-6 pt-10 pb-8 lg:px-14 lg:pt-14 lg:pb-10 gap-8 lg:gap-12"
      >
        {/* Brand column */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 text-[18px] font-black text-white"
              style={{ background: '#1d4ed8' }}
            >
              T
            </div>
            <div>
              <div className="text-[17px] font-extrabold text-white">{tFooter('brandName')}</div>
              <div className="text-[10px] uppercase tracking-[2px]" style={{ color: '#475569' }}>
                by {tFooter('companyName')}
              </div>
            </div>
          </div>

          <p className="text-[13px] leading-[1.7] mb-6" style={{ color: '#475569' }}>
            Expert en Communication Internet Industrielle Fiable. Switches Ethernet, Routeurs 4G/5G et solutions IoT pour les environnements industriels les plus exigeants.
          </p>

          {/* Contact */}
          <div className="flex flex-col gap-2.5 mb-7">
            <a
              href="mailto:contact@tsf-technology.com"
              className="ftr-link flex items-start gap-2.5 text-[13px] no-underline transition-colors"
              style={{ color: '#cbd5e1' }}
            >
              <Mail size={14} className="mt-px shrink-0" style={{ color: '#475569' }} />
              {tFooter('email')}
            </a>
            <a
              href="tel:+33617030308"
              className="ftr-link flex items-start gap-2.5 text-[13px] no-underline transition-colors"
              style={{ color: '#cbd5e1' }}
            >
              <Phone size={14} className="mt-px shrink-0" style={{ color: '#475569' }} />
              {tFooter('whatsapp')}
            </a>
            <div className="flex items-start gap-2.5 text-[13px]" style={{ color: '#cbd5e1' }}>
              <MapPin size={14} className="mt-px shrink-0" style={{ color: '#475569' }} />
              <span>{tFooter('address')}</span>
            </div>
          </div>

          {/* Legal block */}
          <div
            className="rounded-lg flex flex-col gap-1"
            style={{
              background: '#0f1d38',
              border: '1px solid rgba(255,255,255,0.07)',
              padding: '12px 14px',
            }}
          >
            <span className="font-mono text-[10px] tracking-[0.3px]" style={{ color: '#475569' }}>
              SIREN <span style={{ color: '#cbd5e1' }}>953 478 971</span>
            </span>
            <span className="font-mono text-[10px] tracking-[0.3px]" style={{ color: '#475569' }}>
              SIRET <span style={{ color: '#cbd5e1' }}>953 478 971 00013</span>
            </span>
            <span className="font-mono text-[10px] tracking-[0.3px]" style={{ color: '#475569' }}>
              TVA <span style={{ color: '#cbd5e1' }}>FR45953478971</span>
            </span>
          </div>
        </div>

        {/* Products column */}
        <div>
          <div className="ftr-col-title flex items-center gap-2 text-[11px] font-bold tracking-[2.5px] uppercase text-white mb-5">
            {tNav('products')}
            <span className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
          </div>
          <ul className="flex flex-col gap-2.5 list-none">
            {PRODUCT_LINKS.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="ftr-nav-link text-[13.5px] no-underline transition-all" style={{ color: '#475569' }}>
                  {tNav(item.key)}
                  {'isNew' in item && item.isNew && (
                    <span
                      className="ml-1.5 text-[9px] font-bold rounded-full align-middle"
                      style={{
                        background: 'rgba(34,197,94,0.15)',
                        border: '1px solid rgba(34,197,94,0.3)',
                        color: '#22c55e',
                        padding: '1px 6px',
                      }}
                    >
                      NEW
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions + Resources column */}
        <div>
          <div className="ftr-col-title flex items-center gap-2 text-[11px] font-bold tracking-[2.5px] uppercase text-white mb-5">
            {tNav('solutions')}
            <span className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
          </div>
          <ul className="flex flex-col gap-2.5 list-none">
            {SOLUTION_LINKS.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="ftr-nav-link text-[13.5px] no-underline transition-all" style={{ color: '#475569' }}>
                  {tNav(item.key)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ftr-col-title flex items-center gap-2 text-[11px] font-bold tracking-[2.5px] uppercase text-white mb-5 mt-8">
            {tNav('resources')}
            <span className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
          </div>
          <ul className="flex flex-col gap-2.5 list-none">
            {RESOURCE_LINKS.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="ftr-nav-link text-[13.5px] no-underline transition-all" style={{ color: '#475569' }}>
                  {tNav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* About + CTA column */}
        <div>
          <div className="ftr-col-title flex items-center gap-2 text-[11px] font-bold tracking-[2.5px] uppercase text-white mb-5">
            {tNav('about')}
            <span className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.07)' }} />
          </div>
          <ul className="flex flex-col gap-2.5 list-none">
            <li>
              <Link href="/a-propos" className="ftr-nav-link text-[13.5px] no-underline transition-all" style={{ color: '#475569' }}>
                {tNav('about')}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="ftr-nav-link text-[13.5px] no-underline transition-all" style={{ color: '#475569' }}>
                {tNav('contact')}
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" className="ftr-nav-link text-[13.5px] no-underline transition-all" style={{ color: '#475569' }}>
                {tFooter('legalNotice')}
              </Link>
            </li>
            <li>
              <Link href="/cgv" className="ftr-nav-link text-[13.5px] no-underline transition-all" style={{ color: '#475569' }}>
                {tFooter('terms')}
              </Link>
            </li>
            <li>
              <Link href="/confidentialite" className="ftr-nav-link text-[13.5px] no-underline transition-all" style={{ color: '#475569' }}>
                {tFooter('privacy')}
              </Link>
            </li>
          </ul>

          {/* WhatsApp + Devis buttons */}
          <div className="mt-8 flex flex-col gap-2.5">
            <a
              href="https://wa.me/33617030308"
              target="_blank"
              rel="noopener noreferrer"
              className="ftr-wa flex items-center gap-2 rounded-lg text-[13px] font-semibold no-underline transition-all"
              style={{
                background: 'rgba(34,197,94,0.1)',
                border: '1px solid rgba(34,197,94,0.25)',
                padding: '12px 14px',
                color: '#22c55e',
              }}
            >
              <span className="w-[7px] h-[7px] rounded-full shrink-0 ftr-wa-dot" style={{ background: '#22c55e' }} />
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Support 24/7
            </a>
            <Link
              href="/demande-de-devis"
              className="flex items-center justify-center rounded-lg text-[13px] font-bold text-white no-underline transition-all duration-200 hover:!bg-[#ea6a00]"
              style={{ background: '#f97316', padding: '12px 14px' }}
            >
              Demander un Devis Gratuit
            </Link>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        className="flex items-center justify-between gap-4 flex-wrap px-6 py-4 lg:px-14 lg:py-5"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}
      >
        <span className="font-mono text-[11px]" style={{ color: '#475569' }}>
          &copy; 2025 <span style={{ color: '#cbd5e1' }}>TSF Technology</span> &mdash; Tous droits r&eacute;serv&eacute;s
        </span>

        <div className="flex gap-2">
          {['CE', 'FCC', 'UL', 'RoHS'].map((cert) => (
            <span
              key={cert}
              className="font-mono text-[10px] font-bold rounded"
              style={{
                color: '#38bdf8',
                background: 'rgba(56,189,248,0.08)',
                border: '1px solid rgba(56,189,248,0.2)',
                padding: '3px 9px',
              }}
            >
              {cert}
            </span>
          ))}
        </div>

        <div className="flex gap-5">
          <Link href="/mentions-legales" className="ftr-bottom-link text-[12px] no-underline transition-colors" style={{ color: '#475569' }}>
            {tFooter('legalNotice')}
          </Link>
          <Link href="/cgv" className="ftr-bottom-link text-[12px] no-underline transition-colors" style={{ color: '#475569' }}>
            CGV
          </Link>
          <Link href="/confidentialite" className="ftr-bottom-link text-[12px] no-underline transition-colors" style={{ color: '#475569' }}>
            Confidentialit&eacute;
          </Link>
          <Link href="/sitemap" className="ftr-bottom-link text-[12px] no-underline transition-colors" style={{ color: '#475569' }}>
            {tFooter('sitemap')}
          </Link>
        </div>
      </div>

      {/* Scoped styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .ftr-link:hover { color: #38bdf8 !important; }
        .ftr-nav-link:hover { color: #38bdf8 !important; padding-left: 12px; }
        .ftr-bottom-link:hover { color: #fff !important; }
        .ftr-wa:hover { background: rgba(34,197,94,0.18) !important; }
        .ftr-wa-dot { animation: ftrPulse 1.8s infinite; }
        @keyframes ftrPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: .4; transform: scale(1.6); }
        }

        @media (max-width: 768px) {
          footer > div:last-child { flex-direction: column; align-items: flex-start !important; gap: 12px !important; }
        }
      `}} />
    </footer>
  );
}
