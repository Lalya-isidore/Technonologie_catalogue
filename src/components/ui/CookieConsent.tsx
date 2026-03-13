'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { X } from 'lucide-react';

const COOKIE_KEY = 'tsf-cookie-consent';

export function CookieConsent() {
  const t = useTranslations('cookie');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleChoice(accepted: boolean) {
    localStorage.setItem(COOKIE_KEY, accepted ? 'accepted' : 'declined');
    setVisible(false);

    if (accepted && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-[420px] z-[9999] rounded-xl"
      style={{
        background: '#0b1630',
        border: '1px solid rgba(255,255,255,0.1)',
        padding: '20px 24px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
      }}
    >
      <button
        onClick={() => handleChoice(false)}
        className="absolute top-3 right-3 p-1 border-0 bg-transparent cursor-pointer"
        style={{ color: '#64748b' }}
        aria-label="Close"
      >
        <X size={16} />
      </button>

      <p className="text-[13px] leading-[1.65] mb-4 pr-6" style={{ color: '#cbd5e1' }}>
        {t('message')}{' '}
        <Link href="/confidentialite" className="underline" style={{ color: '#38bdf8' }}>
          {t('learnMore')}
        </Link>
      </p>

      <div className="flex gap-2.5">
        <button
          onClick={() => handleChoice(true)}
          className="flex-1 rounded-lg text-[13px] font-bold text-white border-0 cursor-pointer transition-all hover:-translate-y-px"
          style={{ background: '#1d4ed8', padding: '10px 16px' }}
        >
          {t('accept')}
        </button>
        <button
          onClick={() => handleChoice(false)}
          className="flex-1 rounded-lg text-[13px] font-semibold border-0 cursor-pointer transition-all hover:-translate-y-px"
          style={{ background: 'rgba(255,255,255,0.08)', color: '#94a3b8', padding: '10px 16px' }}
        >
          {t('decline')}
        </button>
      </div>
    </div>
  );
}
