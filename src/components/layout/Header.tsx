'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import {
  Menu, X, ChevronDown, Phone, Mail, Globe,
  Monitor, Zap, Cpu, Wifi, ArrowRight,
  Server, Wrench, Clock, Box, BarChart3,
  Rows3, Package, Search, BookOpen, GraduationCap, Download,
  Building2, Sun, Factory, Train, Fuel,
  Cloud, Bolt,
} from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

/* ── Data ── */
const MEGA_COL_1 = [
  { key: 'layer3DinRail', href: '/produits/switches-ethernet/layer-3-din-rail', icon: Server, sub: 'Manageable \u00b7 OSPF/VRRP' },
  { key: 'layer3Rack', href: '/produits/switches-ethernet/layer-3-rack', icon: Monitor, sub: '10G \u00b7 28\u201352 ports' },
  { key: 'layer2ManagedRack', href: '/produits/switches-ethernet/layer-2-managed-rack', icon: Wifi },
  { key: 'layer2ManagedDinRail', href: '/produits/switches-ethernet/layer-2-managed-din-rail', icon: Wrench },
  { key: 'unmanagedRack', href: '/produits/switches-ethernet/unmanaged-rack', icon: Package },
  { key: 'unmanagedDinRail', href: '/produits/switches-ethernet/unmanaged-din-rail', icon: Rows3 },
];

const MEGA_COL_2 = [
  { key: 'poeSwitches', href: '/produits/switches-ethernet/poe', icon: Zap, sub: 'IEEE 802.3af/at \u00b7 400W' },
  { key: 'tsnPtp', href: '/produits/switches-ethernet/tsn-ptp', icon: Clock, sub: 'Time-Sensitive Networking' },
  { key: 'compactSwitches', href: '/produits/switches-ethernet/compact', icon: Box, sub: 'D\u00e8s 18,50$ \u00b7 5\u20138 ports' },
];

const MEGA_COL_3 = [
  { key: 'serialServers', href: '/produits/equipements-reseau/serveurs-ports-serie', icon: ArrowRight, sub: 'RS232/485 over IP' },
  { key: 'canConverters', href: '/produits/equipements-reseau/convertisseurs-can', icon: Cpu },
  { key: 'fiberModems', href: '/produits/equipements-reseau/modems-fibre-optique', icon: BarChart3, sub: 'Longue distance' },
];

const MEGA_COL_4 = [
  { key: 'routers4g5g', href: '/produits/solutions-sans-fil/routeurs-4g-5g', icon: Wifi, sub: 'Dual SIM \u00b7 VPN \u00b7 GPS' },
  { key: 'wifi6AP', href: '/produits/solutions-sans-fil/wifi-6', icon: Wifi, sub: 'Outdoor IP67' },
  { key: 'embeddedModules', href: '/produits/solutions-sans-fil/modules-embarques', icon: Cpu, sub: 'IoT \u00b7 Edge computing' },
];

const SOLUTIONS = [
  { key: 'smartCity', href: '/solutions/smart-city', icon: Building2, featured: true },
  { key: 'renewableEnergy', href: '/solutions/energies-renouvelables', icon: Sun },
  { key: 'industry40', href: '/solutions/industrie-4-0', icon: Factory },
  { key: 'smartTransport', href: '/solutions/transports-intelligents', icon: Train },
  { key: 'oilGas', href: '/solutions/petrole-gaz', icon: Fuel },
];

const RESOURCES = [
  { key: 'blog', href: '/blog', icon: BookOpen },
  { key: 'technicalGuides', href: '/ressources/guides-techniques', icon: BookOpen },
  { key: 'comparisons', href: '/ressources/comparatifs', icon: BarChart3 },
  { key: 'glossary', href: '/ressources/glossaire', icon: Search },
];

type MegaLink = { key: string; href: string; icon: typeof Server; sub?: string };

function MegaLinkItem({ item, t }: { item: MegaLink; t: (k: string) => string }) {
  const Icon = item.icon;
  return (
    <li>
      <Link
        href={item.href}
        className="nav-mega-link flex items-center gap-2 rounded-[7px] text-[13px] no-underline transition-all"
        style={{ padding: '7px 8px', color: '#0f172a' }}
      >
        <span
          className="nav-link-icon w-7 h-7 rounded-md flex items-center justify-center shrink-0 transition-colors"
          style={{ background: '#eff6ff' }}
        >
          <Icon size={14} />
        </span>
        <span className="flex-1 min-w-0">
          <span className="block leading-[1.3]">{t(item.key)}</span>
          {item.sub && <span className="block text-[10.5px] mt-px" style={{ color: '#64748b' }}>{item.sub}</span>}
        </span>
      </Link>
    </li>
  );
}

/* ── Component ── */
export function Header() {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" role="banner">
      {/* ── TOP BAR ── */}
      <div className="hidden lg:flex items-center justify-between" style={{ background: '#060d1f', padding: '7px 40px', fontSize: '12.5px', color: '#94a3b8', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="flex items-center gap-6">
          <a href="mailto:contact@tsf-technology.com" className="nav-topbar-link flex items-center gap-2 no-underline transition-colors" style={{ color: '#94a3b8' }}>
            <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full" style={{ background: 'rgba(96,165,250,0.15)' }}>
              <Mail size={11} style={{ color: '#60a5fa' }} />
            </span>
            contact@tsf-technology.com
          </a>
          <a href="tel:+33617030308" className="nav-topbar-link flex items-center gap-2 no-underline transition-colors" style={{ color: '#94a3b8' }}>
            <span className="flex items-center justify-center w-[22px] h-[22px] rounded-full" style={{ background: 'rgba(236,72,153,0.15)' }}>
              <Phone size={11} style={{ color: '#ec4899' }} />
            </span>
            +33 6 17 03 03 08
          </a>
        </div>
        <div className="flex items-center gap-1.5 text-[12px]">
          <LanguageSwitcher />
        </div>
      </div>

      {/* ── MAIN NAV ── */}
      <div
        className="transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(15,30,60,0.97)' : 'rgba(15,30,60,0.9)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,.25)' : 'none',
          backdropFilter: 'blur(12px)',
        }}
      >
        <nav aria-label="Navigation principale" className="flex items-center" style={{ padding: '0 40px', height: '64px' }}>
          {/* Brand */}
          <Link href="/" className="flex items-center gap-[11px] no-underline shrink-0" style={{ marginRight: '40px' }}>
            <svg width="38" height="44" viewBox="0 0 38 44" fill="none" className="shrink-0">
              <path d="M19 2L3 8.5V22C3 31 10 38.5 19 42C28 38.5 35 31 35 22V8.5L19 2Z" fill="#1d4ed8"/>
              <path d="M19 2L3 8.5V22C3 31 10 38.5 19 42C28 38.5 35 31 35 22V8.5L19 2Z" fill="none" stroke="#1e40af" strokeWidth="1"/>
              <text x="19" y="27" textAnchor="middle" fontFamily="'Space Grotesk', sans-serif" fontWeight="800" fontSize="13" fill="white">TSF</text>
            </svg>
            <div>
              <div className="text-[17px] font-bold" style={{ color: '#ffffff', fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.5px' }}>TSF Technology</div>
              <div className="text-[9px] font-medium uppercase tracking-[2px]" style={{ color: '#64748b' }}>by Lannkin</div>
            </div>
          </Link>

          {/* Desktop nav items */}
          <div className="hidden lg:flex items-stretch flex-1" style={{ gap: 0 }}>

            {/* PRODUITS */}
            <div className="nav-item relative flex items-center">
              <button aria-haspopup="true" className="nav-trigger flex items-center gap-[5px] h-[64px] text-[14px] font-medium border-0 bg-transparent cursor-pointer whitespace-nowrap transition-colors" style={{ padding: '0 16px', color: '#cbd5e1' }}>
                {t('products')}
                <ChevronDown size={14} className="nav-chevron opacity-50 transition-transform" />
              </button>

              {/* Mega dropdown */}
              <div className="nav-dropdown absolute top-[calc(100%+1px)] rounded-[14px] overflow-hidden" style={{ left: '-40px', width: '860px', background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 20px 60px rgba(15,23,42,.12), 0 4px 16px rgba(15,23,42,.08)' }}>
                <div className="grid grid-cols-4" style={{ padding: '28px 28px 20px', borderBottom: '1px solid #e2e8f0', gap: 0 }}>
                  {/* Col 1 */}
                  <div style={{ padding: '0 20px 0 0', borderRight: '1px solid #e2e8f0' }}>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[2px] uppercase mb-3.5" style={{ color: '#1d4ed8' }}>
                      <Monitor size={12} /> {t('industrialSwitches')}
                    </div>
                    <ul className="flex flex-col gap-px list-none">{MEGA_COL_1.map(item => <MegaLinkItem key={item.key} item={item} t={t} />)}</ul>
                  </div>
                  {/* Col 2 */}
                  <div style={{ padding: '0 20px', borderRight: '1px solid #e2e8f0' }}>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[2px] uppercase mb-3.5" style={{ color: '#1d4ed8' }}>
                      <Zap size={12} /> Switch PoE &amp; Sp&eacute;ciaux
                    </div>
                    <ul className="flex flex-col gap-px list-none">{MEGA_COL_2.map(item => <MegaLinkItem key={item.key} item={item} t={t} />)}</ul>
                  </div>
                  {/* Col 3 */}
                  <div style={{ padding: '0 20px', borderRight: '1px solid #e2e8f0' }}>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[2px] uppercase mb-3.5" style={{ color: '#1d4ed8' }}>
                      <Globe size={12} /> {t('networkEquipment')}
                    </div>
                    <ul className="flex flex-col gap-px list-none">{MEGA_COL_3.map(item => <MegaLinkItem key={item.key} item={item} t={t} />)}</ul>
                  </div>
                  {/* Col 4 */}
                  <div style={{ paddingLeft: '20px' }}>
                    <div className="flex items-center gap-1.5 text-[10px] font-bold tracking-[2px] uppercase mb-3.5" style={{ color: '#1d4ed8' }}>
                      <Wifi size={12} /> {t('wirelessSolutions')}
                      <span className="text-[9px] font-bold rounded-full" style={{ background: 'rgba(22,163,74,.1)', color: '#16a34a', border: '1px solid rgba(22,163,74,.25)', padding: '1px 6px' }}>NEW</span>
                    </div>
                    <ul className="flex flex-col gap-px list-none">{MEGA_COL_4.map(item => <MegaLinkItem key={item.key} item={item} t={t} />)}</ul>
                  </div>
                </div>
                {/* Bottom strip */}
                <div className="flex items-center justify-between" style={{ padding: '14px 28px', background: '#f8fafc' }}>
                  <div className="flex gap-1.5">
                    <Link href="/logiciels/mixconnect" className="nav-soft-link inline-flex items-center gap-1.5 rounded-md text-[12.5px] no-underline transition-all" style={{ padding: '6px 12px', background: '#fff', border: '1px solid #e2e8f0', color: '#64748b' }}>
                      <Cloud size={13} /> {t('mixconnect')}
                    </Link>
                    <Link href="/logiciels/maxcloud" className="nav-soft-link inline-flex items-center gap-1.5 rounded-md text-[12.5px] no-underline transition-all" style={{ padding: '6px 12px', background: '#fff', border: '1px solid #e2e8f0', color: '#64748b' }}>
                      <Bolt size={13} /> {t('maxcloud')}
                    </Link>
                  </div>
                  <Link href="/produits" className="nav-see-all inline-flex items-center gap-1.5 rounded-md text-[13px] font-semibold no-underline transition-colors" style={{ padding: '7px 14px', color: '#1d4ed8', background: '#eff6ff' }}>
                    Voir tous les produits <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* SOLUTIONS */}
            <div className="nav-item relative flex items-center">
              <button aria-haspopup="true" className="nav-trigger flex items-center gap-[5px] h-[64px] text-[14px] font-medium border-0 bg-transparent cursor-pointer whitespace-nowrap transition-colors" style={{ padding: '0 16px', color: '#cbd5e1' }}>
                {t('solutions')}
                <ChevronDown size={14} className="nav-chevron opacity-50 transition-transform" />
              </button>
              <div className="nav-dropdown absolute top-[calc(100%+1px)] rounded-[14px]" style={{ left: '-20px', width: '260px', background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 20px 60px rgba(15,23,42,.12), 0 4px 16px rgba(15,23,42,.08)', padding: '8px' }}>
                {SOLUTIONS.map(({ key, href, icon: Icon, featured }) => (
                  <Link key={key} href={href} className={`nav-simple-link flex items-center gap-2.5 rounded-lg text-[13.5px] no-underline transition-all ${featured ? 'nav-simple-featured' : ''}`} style={{ padding: '10px 12px', color: featured ? '#1d4ed8' : '#0f172a', background: featured ? '#eff6ff' : 'transparent' }}>
                    <span className={`nav-simple-icon w-[30px] h-[30px] rounded-[7px] flex items-center justify-center shrink-0 text-[14px] transition-colors`} style={{ background: featured ? '#dbeafe' : '#f8fafc', border: featured ? '1px solid #bfdbfe' : '1px solid #e2e8f0' }}>
                      <Icon size={14} />
                    </span>
                    {t(key)}
                  </Link>
                ))}
                <div className="h-px my-1.5 mx-2" style={{ background: '#e2e8f0' }} />
                <Link href="/solutions" className="nav-simple-link flex items-center gap-2.5 rounded-lg text-[13.5px] font-semibold no-underline" style={{ padding: '10px 12px', color: '#1d4ed8' }}>
                  <span className="w-[30px] h-[30px] rounded-[7px] flex items-center justify-center shrink-0" style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                    <ArrowRight size={14} style={{ color: '#1d4ed8' }} />
                  </span>
                  Toutes les industries
                </Link>
              </div>
            </div>

            {/* RESOURCES */}
            <div className="nav-item relative flex items-center">
              <button aria-haspopup="true" className="nav-trigger flex items-center gap-[5px] h-[64px] text-[14px] font-medium border-0 bg-transparent cursor-pointer whitespace-nowrap transition-colors" style={{ padding: '0 16px', color: '#cbd5e1' }}>
                {t('resources')}
                <ChevronDown size={14} className="nav-chevron opacity-50 transition-transform" />
              </button>
              <div className="nav-dropdown absolute top-[calc(100%+1px)] rounded-[14px]" style={{ left: '-20px', width: '260px', background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 20px 60px rgba(15,23,42,.12), 0 4px 16px rgba(15,23,42,.08)', padding: '8px' }}>
                {RESOURCES.map(({ key, href, icon: Icon }) => (
                  <Link key={key} href={href} className="nav-simple-link flex items-center gap-2.5 rounded-lg text-[13.5px] no-underline transition-all" style={{ padding: '10px 12px', color: '#0f172a' }}>
                    <span className="nav-simple-icon w-[30px] h-[30px] rounded-[7px] flex items-center justify-center shrink-0 transition-colors" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                      <Icon size={14} />
                    </span>
                    {t(key)}
                  </Link>
                ))}
                <div className="h-px my-1.5 mx-2" style={{ background: '#e2e8f0' }} />
                <Link href="/ressources/formation" className="nav-simple-link flex items-center gap-2.5 rounded-lg text-[13.5px] no-underline transition-all" style={{ padding: '10px 12px', color: '#0f172a' }}>
                  <span className="nav-simple-icon w-[30px] h-[30px] rounded-[7px] flex items-center justify-center shrink-0 transition-colors" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <GraduationCap size={14} />
                  </span>
                  Centre de Formation
                </Link>
                <Link href="/ressources/telechargements" className="nav-simple-link flex items-center gap-2.5 rounded-lg text-[13.5px] no-underline transition-all" style={{ padding: '10px 12px', color: '#0f172a' }}>
                  <span className="nav-simple-icon w-[30px] h-[30px] rounded-[7px] flex items-center justify-center shrink-0 transition-colors" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <Download size={14} />
                  </span>
                  T&eacute;l&eacute;chargements &amp; Datasheets
                </Link>
              </div>
            </div>

            {/* Simple links */}
            <div className="nav-item relative flex items-center">
              <Link href="/a-propos" className="nav-trigger flex items-center h-[64px] text-[14px] font-medium no-underline transition-colors" style={{ padding: '0 16px', color: '#cbd5e1' }}>
                {t('about')}
              </Link>
            </div>
            <div className="nav-item relative flex items-center">
              <Link href="/contact" className="nav-trigger flex items-center h-[64px] text-[14px] font-medium no-underline transition-colors" style={{ padding: '0 16px', color: '#cbd5e1' }}>
                {t('contact')}
              </Link>
            </div>
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3 ml-auto">
            <Link
              href="/demande-de-devis"
              className="hidden md:inline-flex items-center text-[13.5px] font-bold text-white no-underline rounded-md transition-all duration-200 hover:-translate-y-px shrink-0"
              style={{ background: '#f97316', padding: '10px 22px' }}
            >
              {t('requestQuote')}
            </Link>

            <div className="lg:hidden">
              <LanguageSwitcher />
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg border-0 bg-transparent cursor-pointer"
              style={{ color: '#e2e8f0' }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div role="dialog" aria-label="Menu mobile" className="lg:hidden fixed inset-0 bg-white z-40 overflow-y-auto" style={{ top: '64px' }}>
          <div className="px-5 py-6 space-y-1">
            <MobileSection title={t('products')} defaultOpen>
              {[...MEGA_COL_1, ...MEGA_COL_2, ...MEGA_COL_3, ...MEGA_COL_4].map((item) => (
                <Link key={item.key} href={item.href} className="block py-1.5 text-sm no-underline transition-colors" style={{ color: '#64748b' }}>
                  {t(item.key)}
                </Link>
              ))}
            </MobileSection>
            <MobileSection title={t('solutions')}>
              {SOLUTIONS.map((item) => (
                <Link key={item.key} href={item.href} className="block py-2 text-sm no-underline transition-colors" style={{ color: '#64748b' }}>
                  {t(item.key)}
                </Link>
              ))}
            </MobileSection>
            <MobileSection title={t('resources')}>
              {RESOURCES.map((item) => (
                <Link key={item.key} href={item.href} className="block py-2 text-sm no-underline transition-colors" style={{ color: '#64748b' }}>
                  {t(item.key)}
                </Link>
              ))}
            </MobileSection>
            <Link href="/a-propos" className="block py-3 text-base font-medium no-underline" style={{ color: '#0f172a', borderBottom: '1px solid #f1f5f9' }}>{t('about')}</Link>
            <Link href="/contact" className="block py-3 text-base font-medium no-underline" style={{ color: '#0f172a', borderBottom: '1px solid #f1f5f9' }}>{t('contact')}</Link>
            <Link href="/demande-de-devis" className="block text-center py-3 text-white font-semibold rounded-lg no-underline mt-4" style={{ background: '#f97316' }}>{t('requestQuote')}</Link>
            <div className="pt-4 space-y-3" style={{ borderTop: '1px solid #f1f5f9' }}>
              <a href="mailto:contact@tsf-technology.com" className="flex items-center gap-2 text-sm no-underline" style={{ color: '#64748b' }}><Mail size={16} /> contact@tsf-technology.com</a>
              <a href="https://wa.me/33617030308" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm no-underline" style={{ color: '#64748b' }}><Phone size={16} /> +33 6 17 03 03 08</a>
            </div>
          </div>
        </div>
      )}

      {/* ── SCOPED STYLES ── */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* Dropdown show/hide on hover */
        .nav-dropdown {
          opacity: 0; visibility: hidden;
          transform: translateY(8px);
          transition: opacity .22s, transform .22s, visibility .22s;
          pointer-events: none;
        }
        .nav-item:hover .nav-dropdown {
          opacity: 1; visibility: visible;
          transform: translateY(0);
          pointer-events: all;
        }

        /* Trigger underline */
        .nav-trigger { position: relative; }
        .nav-trigger::after {
          content: '';
          position: absolute; bottom: 0; left: 16px; right: 16px;
          height: 2px; background: #60a5fa;
          transform: scaleX(0); transition: transform .25s;
        }
        .nav-item:hover .nav-trigger { color: #ffffff !important; }
        .nav-item:hover .nav-trigger::after { transform: scaleX(1); }
        .nav-item:hover .nav-chevron { transform: rotate(180deg); opacity: 1; }

        /* Mega link hover */
        .nav-mega-link:hover { background: #eff6ff !important; color: #1d4ed8 !important; }
        .nav-mega-link:hover .nav-link-icon { background: #dbeafe !important; }

        /* Simple dropdown hover */
        .nav-simple-link:hover { background: #eff6ff !important; color: #1d4ed8 !important; }
        .nav-simple-link:hover .nav-simple-icon { background: #dbeafe !important; border-color: #bfdbfe !important; }

        /* Soft links */
        .nav-soft-link:hover { color: #1d4ed8 !important; border-color: #bfdbfe !important; background: #eff6ff !important; }
        .nav-see-all:hover { background: #dbeafe !important; }

        /* Top bar links */
        .nav-topbar-link:hover { color: #fff !important; }
      `}} />
    </header>
  );
}

/* ── Mobile Section ── */
function MobileSection({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ borderBottom: '1px solid #f1f5f9' }}>
      <button onClick={() => setOpen(!open)} className="flex items-center justify-between w-full py-3 text-base font-medium border-0 bg-transparent cursor-pointer" style={{ color: '#0f172a' }}>
        {title}
        <ChevronDown size={20} className={`transition-transform ${open ? 'rotate-180' : ''}`} style={{ color: '#64748b' }} />
      </button>
      {open && <div className="pb-4 pl-2">{children}</div>}
    </div>
  );
}
