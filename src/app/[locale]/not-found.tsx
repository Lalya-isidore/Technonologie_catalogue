import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function LocaleNotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-[70vh] flex items-center justify-center" style={{ background: '#f4f7fb' }}>
      <div className="text-center px-6 max-w-lg">
        <div className="font-black text-[120px] leading-none mb-2" style={{ color: '#1d4ed8', opacity: 0.15 }}>404</div>
        <h1 className="text-3xl font-extrabold mb-3" style={{ color: '#0b1630' }}>{t('title')}</h1>
        <p className="text-[15px] leading-[1.65] mb-8" style={{ color: '#64748b' }}>
          {t('description')}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link href="/" className="inline-flex items-center justify-center px-6 py-3 text-[14px] font-bold text-white rounded-lg no-underline transition-all hover:-translate-y-0.5" style={{ background: '#1d4ed8' }}>
            {t('backHome')}
          </Link>
          <Link href="/produits" className="inline-flex items-center justify-center px-6 py-3 text-[14px] font-bold rounded-lg no-underline transition-all" style={{ color: '#1d4ed8', border: '1.5px solid rgba(29,78,216,0.3)' }}>
            {t('viewCatalog')}
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-[14px] font-bold rounded-lg no-underline transition-all" style={{ color: '#64748b', border: '1.5px solid #e2e8f0' }}>
            {t('contactUs')}
          </Link>
        </div>
      </div>
    </div>
  );
}
