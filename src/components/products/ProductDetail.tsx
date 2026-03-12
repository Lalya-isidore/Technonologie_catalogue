'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import type { Product, Locale } from '@/lib/types';

import {
  Network, Shield, Thermometer, Zap, LayoutGrid, Gauge,
  Server, FileText, MessageCircle, ChevronDown,
} from 'lucide-react';
import { useState } from 'react';

type Props = {
  product: Product;
};

export function ProductDetail({ product }: Props) {
  const locale = useLocale() as Locale;
  const t = useTranslations('common');

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-medium mb-8">
        <Link href="/" className="hover:text-primary-500 transition-colors">Accueil</Link>
        <span>/</span>
        <Link href="/produits" className="hover:text-primary-500 transition-colors">Produits</Link>
        <span>/</span>
        <span className="text-dark font-medium truncate">{product.name[locale]}</span>
      </nav>

      {/* Product header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Image */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center aspect-square">
          <Network size={120} strokeWidth={0.8} className="text-gray-300" />
        </div>

        {/* Info */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            {product.isNew && (
              <span className="px-2.5 py-1 bg-accent-500 text-white text-xs font-bold rounded-md">{t('new')}</span>
            )}
            {product.isBestseller && (
              <span className="px-2.5 py-1 bg-secondary-500 text-white text-xs font-bold rounded-md">{t('bestseller')}</span>
            )}
          </div>

          <p className="text-sm font-mono text-medium mb-2">{t('sku')}: {product.sku}</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-dark mb-4">
            {product.name[locale]}
          </h1>
          <p className="text-base text-medium leading-relaxed mb-8">
            {product.description[locale]}
          </p>

          {/* CTA */}
          <div className="bg-primary-50 rounded-xl p-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/demande-de-devis"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors"
              >
                {t('requestQuote')}
              </Link>
              <a
                href="https://wa.me/33617030308"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-lg transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick specs */}
          <div className="grid grid-cols-2 gap-4">
            <SpecItem icon={<LayoutGrid size={18} />} label={t('ports')} value={`${product.totalPorts} ports — ${product.portConfig}`} />
            <SpecItem icon={<Gauge size={18} />} label={t('speed')} value={product.speed} />
            <SpecItem icon={<Shield size={18} />} label={t('protection')} value={product.ipRating} />
            <SpecItem icon={<Thermometer size={18} />} label={t('temperature')} value={product.temperatureRange} />
            <SpecItem icon={<Zap size={18} />} label={t('power')} value={product.powerInput} />
            <SpecItem icon={<Server size={18} />} label={t('mounting')} value={product.mounting === 'din-rail' ? 'DIN Rail' : product.mounting === 'rack-19' ? 'Rack 19"' : 'Compact'} />
          </div>
        </div>
      </div>

      {/* Specs table */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-dark mb-6">{t('specifications')}</h2>
        <div className="bg-gray-50 rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <tbody>
              <SpecRow label={t('sku')} value={product.sku} />
              <SpecRow label={t('ports')} value={`${product.totalPorts} — ${product.portConfig}`} />
              <SpecRow label={t('speed')} value={product.speed} />
              <SpecRow label={t('mounting')} value={product.mounting} />
              <SpecRow label={t('protection')} value={product.ipRating} />
              <SpecRow label={t('temperature')} value={product.temperatureRange} />
              <SpecRow label={t('power')} value={product.powerInput} />
              <SpecRow label="Boîtier" value={product.casingMaterial[locale]} />
              <SpecRow label="Certifications" value={product.certifications.join(', ')} />
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ */}
      {product.faq.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-dark mb-6">{t('faq')}</h2>
          <div className="space-y-3">
            {product.faq.map((faq, i) => (
              <FaqItem key={i} question={faq.question[locale]} answer={faq.answer[locale]} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function SpecItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
      <div className="text-primary-500 mt-0.5">{icon}</div>
      <div>
        <p className="text-xs text-medium">{label}</p>
        <p className="text-sm font-medium text-dark">{value}</p>
      </div>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <tr className="border-b border-gray-200 last:border-0">
      <td className="px-6 py-3 font-medium text-dark bg-gray-100 w-1/3">{label}</td>
      <td className="px-6 py-3 text-medium">{value}</td>
    </tr>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-5 py-4 text-left text-sm font-medium text-dark hover:bg-gray-50 transition-colors"
      >
        {question}
        <ChevronDown size={18} className={`shrink-0 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-4 text-sm text-medium leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
