'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

type Props = {
  isQuote?: boolean;
};

export function ContactForm({ isQuote = false }: Props) {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-dark mb-4">
          {isQuote ? 'Demander un Devis Gratuit' : t('title')}
        </h1>
        <p className="text-medium max-w-2xl mx-auto">
          {isQuote
            ? 'Décrivez votre projet et recevez une offre personnalisée sous 24h.'
            : 'Nous sommes disponibles par email, WhatsApp ou formulaire. Réponse garantie sous 24h.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact info */}
        <div className="space-y-6">
          <ContactCard
            icon={<Mail size={22} />}
            label={t('emailLabel')}
            value="contact@tsf-technology.com"
            href="mailto:contact@tsf-technology.com"
            color="bg-primary-50 text-primary-500"
          />
          <ContactCard
            icon={<MessageCircle size={22} />}
            label={t('whatsappLabel')}
            value="+33 6 17 03 03 08"
            href="https://wa.me/33617030308"
            color="bg-accent-50 text-accent-500"
            external
          />
          <ContactCard
            icon={<Phone size={22} />}
            label="Par Téléphone"
            value="+33 6 17 03 03 08"
            href="tel:+33617030308"
            color="bg-secondary-50 text-secondary-500"
          />

          <div className="p-5 bg-gray-50 rounded-xl">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="text-medium shrink-0 mt-1" />
              <div>
                <p className="text-sm font-medium text-dark">LANNKIN</p>
                <p className="text-sm text-medium mt-1">
                  401 Chemin du Montbert<br />
                  14100 Hermival-les-Vaux<br />
                  France
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={32} className="text-accent-500" />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-3">Message envoyé !</h2>
              <p className="text-medium max-w-md">{t('successMessage')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                <FormField label={t('name')} name="name" required />
                <FormField label={t('email')} name="email" type="email" required />
                <FormField label={t('company')} name="company" />
                <FormField label={t('phone')} name="phone" type="tel" />
                <FormField label={t('country')} name="country" />
                <FormField label={t('sector')} name="sector" />
              </div>

              {isQuote && (
                <div className="mb-5">
                  <label className="block text-sm font-medium text-dark mb-1.5">
                    Produits concernés
                  </label>
                  <input
                    type="text"
                    name="products"
                    placeholder="Ex: TSF-8216TSN, TSF-M7210GP..."
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
                  />
                </div>
              )}

              <div className="mb-5">
                <label className="block text-sm font-medium text-dark mb-1.5">
                  {t('message')}
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 resize-none"
                />
              </div>

              <label className="flex items-start gap-2 mb-6 cursor-pointer">
                <input type="checkbox" required className="mt-1 accent-primary-500" />
                <span className="text-xs text-medium">{t('gdprConsent')}</span>
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors w-full sm:w-auto"
              >
                <Send size={18} />
                {t('send')}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function FormField({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-dark mb-1.5">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500"
      />
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  color,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  color: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
    >
      <div className={`${color} w-12 h-12 rounded-lg flex items-center justify-center shrink-0`}>
        {icon}
      </div>
      <div>
        <p className="text-xs text-medium">{label}</p>
        <p className="text-sm font-semibold text-dark">{value}</p>
      </div>
    </a>
  );
}
