import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { Shield, Award, Headphones, Factory, Globe, Users, ArrowRight } from 'lucide-react';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

const pathForAllLocales = (p: string) => ({ fr: p, en: p, es: p, it: p, ar: p, ru: p });

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateSeoMetadata({
    title: 'A propos de TSF Technology by LANNKIN | Expert Réseau Industriel',
    description: 'TSF Technology by LANNKIN, expert français en communication réseau industrielle. 102 produits, 300 000 unités/an, garantie 3 ans. Siège en Normandie, France.',
    path: pathForAllLocales('/a-propos'),
    locale: locale as Locale,
  });
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-primary-900 to-primary-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            TSF Technology by LANNKIN
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Expert en Communication Internet Industrielle Fiable. Fournisseur européen de switches Ethernet industriels, routeurs 4G/5G et solutions IoT.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark mb-6">Notre Mission</h2>
          <p className="text-medium leading-relaxed mb-6">
            TSF Technology est la marque de LANNKIN, société française basée en Normandie. Notre mission : rendre les communications réseau industrielles accessibles, fiables et performantes pour tous les secteurs d&apos;activité.
          </p>
          <p className="text-medium leading-relaxed">
            Avec un catalogue de 102 produits répartis en 9 catégories, nous couvrons l&apos;ensemble des besoins en connectivité industrielle — des switches Ethernet Layer-3 aux solutions TSN temps-réel, en passant par les routeurs 4G/5G et les points d&apos;accès Wi-Fi 6.
          </p>
        </div>
      </section>

      {/* Key figures */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark mb-10 text-center">Chiffres clés</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Factory, value: '300 000+', label: 'unités/an de capacité' },
              { icon: Shield, value: '102', label: 'produits catalogue' },
              { icon: Globe, value: '6', label: 'langues supportées' },
              { icon: Award, value: '3 ans', label: 'garantie constructeur' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-50 rounded-xl mb-4">
                  <Icon size={26} className="text-primary-500" />
                </div>
                <div className="text-2xl font-bold text-dark">{value}</div>
                <div className="text-sm text-medium mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark mb-10 text-center">Nos Engagements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Qualité supérieure', description: 'IP40, -40°C à +75°C, boîtier aluminium — des spécifications au-dessus des standards du marché, sans surcoût.' },
              { icon: Headphones, title: 'Support réactif', description: 'Équipe technique disponible 24/7 par WhatsApp et email. Réponse garantie sous 2 heures.' },
              { icon: Users, title: 'Accompagnement projet', description: 'Nos ingénieurs vous accompagnent de la conception à la mise en service de votre infrastructure réseau.' },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-8 bg-white rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-5">
                  <Icon size={24} className="text-primary-500" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-3">{title}</h3>
                <p className="text-sm text-medium leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark mb-6">Informations légales</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-medium">Raison sociale</p>
                <p className="font-semibold text-dark">LANNKIN</p>
              </div>
              <div>
                <p className="text-medium">Marque commerciale</p>
                <p className="font-semibold text-dark">TSF Technology</p>
              </div>
              <div>
                <p className="text-medium">SIREN</p>
                <p className="font-semibold text-dark">953 478 971</p>
              </div>
              <div>
                <p className="text-medium">SIRET</p>
                <p className="font-semibold text-dark">953 478 971 00013</p>
              </div>
              <div>
                <p className="text-medium">TVA intracommunautaire</p>
                <p className="font-semibold text-dark">FR45953478971</p>
              </div>
              <div>
                <p className="text-medium">Siège social</p>
                <p className="font-semibold text-dark">401 Chemin du Montbert, 14100 Hermival-les-Vaux, France</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-white mb-4">Prêt à collaborer ?</h2>
          <p className="text-gray-300 mb-8">Contactez notre équipe pour discuter de votre projet réseau industriel.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-xl transition-all">
              Nous contacter <ArrowRight size={18} />
            </Link>
            <Link href="/produits" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 hover:bg-white/10 text-white font-semibold rounded-xl transition-all">
              Voir nos produits
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
