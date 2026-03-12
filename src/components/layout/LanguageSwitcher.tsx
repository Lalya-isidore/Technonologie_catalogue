'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import { ChevronDown, Check } from 'lucide-react';

/** Inline SVG flags – works on all platforms (no emoji rendering issues) */
function Flag({ code, size = 20 }: { code: string; size?: number }) {
  const h = Math.round(size * 0.7);
  const r = 2;

  switch (code) {
    case 'fr':
      return (
        <svg width={size} height={h} viewBox="0 0 30 21" className="shrink-0">
          <rect width="30" height="21" rx={r} fill="#fff" />
          <rect x="0" width="10" height="21" rx={r} fill="#002395" />
          <rect x="10" width="10" height="21" fill="#fff" />
          <rect x="20" width="10" height="21" rx={r} fill="#ED2939" />
        </svg>
      );
    case 'en':
      return (
        <svg width={size} height={h} viewBox="0 0 60 42" className="shrink-0">
          <rect width="60" height="42" rx={r} fill="#012169" />
          <path d="M0,0 L60,42 M60,0 L0,42" stroke="#fff" strokeWidth="7" />
          <path d="M0,0 L60,42 M60,0 L0,42" stroke="#C8102E" strokeWidth="3" />
          <path d="M30,0 V42 M0,21 H60" stroke="#fff" strokeWidth="11" />
          <path d="M30,0 V42 M0,21 H60" stroke="#C8102E" strokeWidth="7" />
        </svg>
      );
    case 'es':
      return (
        <svg width={size} height={h} viewBox="0 0 30 21" className="shrink-0">
          <rect width="30" height="21" rx={r} fill="#AA151B" />
          <rect y="5" width="30" height="11" fill="#F1BF00" />
        </svg>
      );
    case 'it':
      return (
        <svg width={size} height={h} viewBox="0 0 30 21" className="shrink-0">
          <rect width="30" height="21" rx={r} fill="#fff" />
          <rect x="0" width="10" height="21" rx={r} fill="#009246" />
          <rect x="10" width="10" height="21" fill="#fff" />
          <rect x="20" width="10" height="21" rx={r} fill="#CE2B37" />
        </svg>
      );
    case 'ar':
      return (
        <svg width={size} height={h} viewBox="0 0 30 21" className="shrink-0">
          <rect width="30" height="21" rx={r} fill="#006C35" />
          <path d="M7 11.5 Q15 7 23 11.5" stroke="#fff" strokeWidth="1.2" fill="none" />
          <rect x="9" y="12.5" width="12" height="1.2" rx="0.6" fill="#fff" />
        </svg>
      );
    case 'ru':
      return (
        <svg width={size} height={h} viewBox="0 0 30 21" className="shrink-0">
          <rect width="30" height="21" rx={r} fill="#D52B1E" />
          <rect y="0" width="30" height="7" rx={r} fill="#fff" />
          <rect y="7" width="30" height="7" fill="#0039A6" />
        </svg>
      );
    default:
      return null;
  }
}

const LANGUAGES = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'ar', label: 'العربية' },
  { code: 'ru', label: 'Русский' },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const current = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0];

  function switchLocale(newLocale: string) {
    setOpen(false);
    let path = pathname;
    for (const lang of LANGUAGES) {
      if (path.startsWith(`/${lang.code}/`) || path === `/${lang.code}`) {
        path = path.slice(lang.code.length + 1) || '/';
        break;
      }
    }
    const newPath = newLocale === 'fr' ? path : `/${newLocale}${path}`;
    router.push(newPath);
  }

  return (
    <div className="relative" ref={ref}>
      {/* Trigger button with flag + code */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity"
        style={{ color: 'inherit' }}
        aria-label="Switch language"
      >
        <Flag code={current.code} size={22} />
        <span>{current.code.toUpperCase()}</span>
        <ChevronDown size={12} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 top-full mt-2 rounded-xl py-2 min-w-[180px] z-50"
          style={{
            background: '#fff',
            border: '1px solid #e2e8f0',
            boxShadow: '0 8px 24px rgba(15,34,87,0.12), 0 2px 8px rgba(15,34,87,0.06)',
          }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className="flex items-center gap-2.5 w-full px-4 py-2.5 text-[13.5px] transition-colors"
              style={{
                color: lang.code === locale ? '#1d4ed8' : '#0f2257',
                background: lang.code === locale ? '#eff4ff' : 'transparent',
                fontWeight: lang.code === locale ? 600 : 400,
              }}
              onMouseEnter={(e) => {
                if (lang.code !== locale) e.currentTarget.style.background = '#f8fafc';
              }}
              onMouseLeave={(e) => {
                if (lang.code !== locale) e.currentTarget.style.background = 'transparent';
              }}
            >
              <Flag code={lang.code} size={22} />
              <span className="flex-1 text-left">{lang.label}</span>
              {lang.code === locale && <Check size={14} style={{ color: '#1d4ed8' }} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
