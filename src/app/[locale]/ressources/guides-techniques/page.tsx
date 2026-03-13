import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { FileText, ArrowRight } from 'lucide-react';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

const pathForAllLocales = (p: string) => ({ fr: p, en: p, es: p, it: p, ar: p, ru: p });

const GUIDES = [
  { title: 'Comment choisir son switch Ethernet industriel', href: '/blog/comment-choisir-switch-ethernet-industriel', description: 'Layer 2 vs 3, managed vs unmanaged, DIN-Rail vs Rack, PoE, TSN — le guide complet.' },
  { title: 'Dimensionner un réseau PoE industriel', href: '/ressources/guides-techniques/dimensionner-reseau-poe-industriel', description: 'Calcul du budget PoE, choix des switches, câblage et alimentation redondante.' },
  { title: 'Configurer la redondance réseau (RSTP/Ring)', href: '/ressources/guides-techniques/configurer-redondance-rstp-ring', description: 'Mise en place de la redondance réseau pour garantir la haute disponibilité.' },
  { title: 'Migration vers TSN : guide pratique', href: '/ressources/guides-techniques/migration-tsn-guide-pratique', description: 'Étapes clés pour migrer vos réseaux industriels vers le Time-Sensitive Networking.' },
  { title: 'Sécuriser un réseau Ethernet industriel', href: '/ressources/guides-techniques/securiser-reseau-ethernet-industriel', description: 'VLAN, ACL, 802.1X et bonnes pratiques de cybersécurité industrielle.' },
  { title: 'Fibre optique en milieu industriel', href: '/ressources/guides-techniques/fibre-optique-milieu-industriel', description: 'Choix des modules SFP, types de fibres et distances maximales.' },
];

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateSeoMetadata({
    title: 'Guides Techniques Réseau Industriel | TSF Technology',
    description: 'Guides techniques pour concevoir et déployer vos réseaux industriels : choix de switch, PoE, redondance RSTP, TSN, fibre optique, cybersécurité.',
    path: pathForAllLocales('/ressources/guides-techniques'),
    locale: locale as Locale,
  });
}

export default async function GuidesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center gap-3 mb-3">
        <FileText size={28} className="text-primary-500" />
        <h1 className="text-3xl font-bold text-dark">Guides Techniques</h1>
      </div>
      <p className="text-medium mb-12 max-w-2xl">
        Ressources techniques pour concevoir, déployer et maintenir vos réseaux industriels.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {GUIDES.map((guide) => (
          <Link
            key={guide.title}
            href={guide.href}
            className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all"
          >
            <h2 className="text-base font-semibold text-dark group-hover:text-primary-500 transition-colors mb-2">
              {guide.title}
            </h2>
            <p className="text-sm text-medium mb-4">{guide.description}</p>
            <span className="text-sm font-medium text-primary-500 flex items-center gap-1">
              Lire le guide <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
