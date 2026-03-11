import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

const pathForAllLocales = (p: string) => ({ fr: p, en: p, es: p, it: p, ar: p, ru: p });

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateSeoMetadata({
    title: 'Conditions Générales de Vente | TSF Technology',
    description: 'Conditions générales de vente de TSF Technology by LANNKIN. Prix, commandes, livraison Europe, garantie 3 ans, retours et droit applicable.',
    path: pathForAllLocales('/cgv'),
    locale: locale as Locale,
  });
}

export default async function CGVPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-dark mb-8">Conditions Générales de Vente</h1>
      <div className="prose prose-sm max-w-none space-y-8">
        <Section title="Article 1 — Objet">
          <p>Les présentes Conditions Générales de Vente (CGV) régissent les relations commerciales entre LANNKIN (marque TSF Technology) et ses clients professionnels.</p>
        </Section>

        <Section title="Article 2 — Prix">
          <p>Les prix sont indiqués en USD hors taxes. Ils sont susceptibles de modification sans préavis. Les prix applicables sont ceux en vigueur au jour de la commande.</p>
        </Section>

        <Section title="Article 3 — Commandes">
          <p>Toute commande est soumise à acceptation par LANNKIN. Un devis personnalisé sera établi pour chaque demande, incluant les délais de livraison et conditions spécifiques.</p>
        </Section>

        <Section title="Article 4 — Livraison">
          <p>Les délais de livraison sont donnés à titre indicatif. Les produits sont livrés dans toute l&apos;Europe. Les frais de transport sont à la charge du client sauf accord contraire.</p>
        </Section>

        <Section title="Article 5 — Garantie">
          <p>Tous les produits TSF Technology bénéficient d&apos;une garantie constructeur de 3 ans couvrant les défauts de fabrication. La garantie ne couvre pas les dommages résultant d&apos;une utilisation non conforme.</p>
        </Section>

        <Section title="Article 6 — Retours">
          <p>Les retours de produits défectueux sont acceptés dans les 30 jours suivant la livraison, après accord préalable de notre service technique.</p>
        </Section>

        <Section title="Article 7 — Responsabilité">
          <p>La responsabilité de LANNKIN est limitée au montant de la commande. LANNKIN ne saurait être tenue responsable des dommages indirects.</p>
        </Section>

        <Section title="Article 8 — Droit applicable">
          <p>Les présentes CGV sont soumises au droit français. Tout litige sera de la compétence exclusive des tribunaux de Caen.</p>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-bold text-dark mb-3">{title}</h2>
      <div className="text-sm text-medium leading-relaxed space-y-2">{children}</div>
    </section>
  );
}
