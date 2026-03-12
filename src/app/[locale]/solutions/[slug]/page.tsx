import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MessageCircle } from 'lucide-react';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { getRelatedCategoryLinks, getRelatedSolutionLinks, getResourceLinks } from '@/lib/internal-links';
import { generateFaqJsonLd } from '@/lib/seo';
import { getFaqsByPage } from '@/data/faq';
import { FAQSection } from '@/components/sections/FAQSection';
import type { Locale } from '@/lib/types';

type SolutionData = {
  title: string;
  description: string;
  heroSubtitle: string;
  challenges: string[];
  benefits: string[];
  products: { name: string; href: string }[];
};

const SOLUTIONS: Record<string, SolutionData> = {
  'smart-city': {
    title: 'Smart City — Réseaux Urbains Intelligents',
    description: 'Solutions de communication réseau pour les infrastructures urbaines connectées : éclairage intelligent, gestion du trafic, vidéosurveillance.',
    heroSubtitle: 'Connectez vos infrastructures urbaines avec des switches Ethernet industriels certifiés IP40, résistants aux conditions extérieures.',
    challenges: [
      'Environnements extérieurs extrêmes (-40°C à +75°C)',
      'Alimentation électrique variable sur le terrain',
      'Besoin de redondance réseau pour services critiques',
      'Déploiement à grande échelle (milliers de nœuds)',
    ],
    benefits: [
      'Switches IP40 résistants aux intempéries',
      'Alimentation DC 9~60V adaptée au terrain',
      'Protocoles de redondance (RSTP, ring) pour haute disponibilité',
      'Gamme compact et DIN-Rail pour armoires de rue',
    ],
    products: [
      { name: 'Switches Compacts Industriels', href: '/produits/switches-ethernet/compact' },
      { name: 'Switches PoE pour caméras', href: '/produits/switches-ethernet/poe' },
      { name: 'Switches Managed DIN-Rail', href: '/produits/switches-ethernet/layer-2-managed-din-rail' },
    ],
  },
  'energies-renouvelables': {
    title: 'Énergies Renouvelables — Communication Réseau',
    description: 'Switches Ethernet industriels pour parcs éoliens, fermes solaires et infrastructures de production d\'énergie renouvelable.',
    heroSubtitle: 'Connectez vos parcs éoliens et fermes solaires avec des équipements réseau conçus pour les conditions les plus extrêmes.',
    challenges: [
      'Sites isolés avec conditions climatiques extrêmes',
      'Synchronisation précise requise (PTP IEEE 1588)',
      'Distances de communication longues (fibre optique)',
      'Conformité aux normes IEC 61850 pour le smart grid',
    ],
    benefits: [
      'Switches PTP IEEE 1588 pour synchronisation < 100ns',
      'Ports SFP fibre optique pour longues distances',
      'Plage de température -40°C à +75°C',
      'Boîtier aluminium haute résistance contre la corrosion',
    ],
    products: [
      { name: 'Switches TSN & PTP', href: '/produits/switches-ethernet/tsn-ptp' },
      { name: 'Switches Layer-3 Rack', href: '/produits/switches-ethernet/layer-3-rack' },
      { name: 'Switches Managed DIN-Rail', href: '/produits/switches-ethernet/layer-2-managed-din-rail' },
    ],
  },
  'industrie-4-0': {
    title: 'Industrie 4.0 & Smart Factory',
    description: 'Solutions réseau TSN temps-réel pour l\'automatisation industrielle, la robotique et les lignes de production connectées.',
    heroSubtitle: 'Réseau déterministe pour vos automates, robots et systèmes SCADA. Latence < 1µs avec nos switches TSN.',
    challenges: [
      'Latence déterministe requise pour le contrôle temps-réel',
      'Convergence IT/OT sur un seul réseau',
      'Protocoles industriels (PROFINET, EtherCAT, Modbus TCP)',
      'Haute disponibilité 24/7 en environnement usine',
    ],
    benefits: [
      'Switches TSN IEEE 802.1 avec latence < 1µs',
      'Support PROFINET et EtherCAT natif (gamme compact)',
      'Redondance réseau avec temps de recovery < 20ms',
      'Management centralisé via MixConnect / MaxCloud',
    ],
    products: [
      { name: 'Switches TSN & PTP', href: '/produits/switches-ethernet/tsn-ptp' },
      { name: 'Switches Compacts (PROFINET/EtherCAT)', href: '/produits/switches-ethernet/compact' },
      { name: 'Switches Layer-3 DIN-Rail', href: '/produits/switches-ethernet/layer-3-din-rail' },
    ],
  },
  'transports-intelligents': {
    title: 'Transports Intelligents',
    description: 'Switches Ethernet industriels pour les réseaux de transport : autoroutes, tunnels, gares, métros et systèmes de signalisation.',
    heroSubtitle: 'Réseaux fiables pour les infrastructures de transport critiques. Conformité EN 50155 pour le ferroviaire.',
    challenges: [
      'Vibrations et chocs dans les véhicules et tunnels',
      'Plage de température extrême en extérieur',
      'Redondance critique pour la signalisation',
      'Vidéosurveillance HD avec alimentation PoE',
    ],
    benefits: [
      'Boîtier aluminium résistant aux vibrations',
      'Switches PoE pour caméras de surveillance',
      'Ring réseau avec recovery < 20ms',
      'Switches rack haute densité pour centres de contrôle',
    ],
    products: [
      { name: 'Switches PoE Industriels', href: '/produits/switches-ethernet/poe' },
      { name: 'Switches Layer-3 Rack', href: '/produits/switches-ethernet/layer-3-rack' },
      { name: 'Switches Managed Rack', href: '/produits/switches-ethernet/layer-2-managed-rack' },
    ],
  },
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const slugs = Object.keys(SOLUTIONS);
  const locales = ['fr', 'en', 'es', 'it', 'ar', 'ru'];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = SOLUTIONS[slug];
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.description,
  };
}

export default async function SolutionPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const loc = locale as Locale;
  const solution = SOLUTIONS[slug];
  if (!solution) notFound();

  const faqs = getFaqsByPage(slug);

  // Build internal links - exclude current solution from solution links
  const otherSolutionLinks = getRelatedSolutionLinks().filter(
    (link) => !link.href.includes(slug)
  );
  const categoryLinksData = getRelatedCategoryLinks('layer-2-managed-din-rail');
  const resourceLinksData = getResourceLinks();

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-dark via-primary-900 to-primary-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            {solution.title}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {solution.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Challenges & Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Défis du secteur</h2>
              <div className="space-y-4">
                {solution.challenges.map((challenge, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                    <span className="text-danger-500 font-bold shrink-0">!</span>
                    <p className="text-sm text-dark">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Nos solutions</h2>
              <div className="space-y-4">
                {solution.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-accent-50 rounded-lg">
                    <CheckCircle size={20} className="text-accent-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-dark">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-dark mb-8">Produits recommandés</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {solution.products.map((prod) => (
              <Link
                key={prod.href}
                href={prod.href}
                className="group flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
              >
                <span className="text-sm font-semibold text-dark group-hover:text-primary-500 transition-colors">
                  {prod.name}
                </span>
                <ArrowRight size={18} className="text-primary-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Besoin d&apos;accompagnement pour votre projet ?
          </h2>
          <p className="text-gray-300 mb-8">
            Nos ingénieurs vous aident à concevoir l&apos;architecture réseau adaptée à votre secteur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demande-de-devis"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-xl transition-all"
            >
              Demander un devis
              <ArrowRight size={18} />
            </Link>
            <a
              href="https://wa.me/33617030308"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white font-semibold rounded-xl transition-all"
            >
              <MessageCircle size={18} />
              WhatsApp 24/7
            </a>
          </div>
        </div>
      </section>

      {faqs.length > 0 && (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(faqs, loc)) }} />
          <FAQSection faqs={faqs} locale={loc} title="Questions fréquentes" />
        </>
      )}

      <InternalLinks
        categoryLinks={categoryLinksData}
        solutionLinks={otherSolutionLinks}
        resourceLinks={resourceLinksData}
      />
    </main>
  );
}
