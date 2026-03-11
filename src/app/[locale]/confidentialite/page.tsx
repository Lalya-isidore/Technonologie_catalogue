import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

const pathForAllLocales = (p: string) => ({ fr: p, en: p, es: p, it: p, ar: p, ru: p });

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateSeoMetadata({
    title: 'Politique de Confidentialité | TSF Technology',
    description: 'Politique de confidentialité et protection des données personnelles de TSF Technology. Conforme RGPD. Responsable : LANNKIN, France.',
    path: pathForAllLocales('/confidentialite'),
    locale: locale as Locale,
  });
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-dark mb-8">Politique de Confidentialité</h1>
      <div className="prose prose-sm max-w-none space-y-8">
        <Section title="Responsable du traitement">
          <p>LANNKIN (marque TSF Technology), 401 Chemin du Montbert, 14100 Hermival-les-Vaux, France.</p>
          <p>Contact : contact@tsf-technology.com</p>
        </Section>

        <Section title="Données collectées">
          <p>Nous collectons les données que vous nous fournissez volontairement via nos formulaires :</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Nom, prénom</li>
            <li>Adresse email professionnelle</li>
            <li>Entreprise</li>
            <li>Numéro de téléphone</li>
            <li>Pays et secteur d&apos;activité</li>
            <li>Contenu du message</li>
          </ul>
        </Section>

        <Section title="Finalité du traitement">
          <p>Vos données sont utilisées pour :</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Répondre à vos demandes de devis et de contact</li>
            <li>Vous fournir un support technique</li>
            <li>Vous envoyer des informations commerciales (avec votre consentement)</li>
          </ul>
        </Section>

        <Section title="Base légale">
          <p>Le traitement est fondé sur votre consentement (article 6.1.a du RGPD) et sur notre intérêt légitime à répondre à vos demandes (article 6.1.f).</p>
        </Section>

        <Section title="Durée de conservation">
          <p>Vos données sont conservées pendant 3 ans à compter de votre dernier contact, puis supprimées.</p>
        </Section>

        <Section title="Vos droits">
          <p>Conformément au RGPD, vous disposez des droits suivants :</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Droit d&apos;accès à vos données</li>
            <li>Droit de rectification</li>
            <li>Droit à l&apos;effacement</li>
            <li>Droit à la portabilité</li>
            <li>Droit d&apos;opposition</li>
          </ul>
          <p className="mt-2">Pour exercer ces droits : contact@tsf-technology.com</p>
        </Section>

        <Section title="Cookies">
          <p>Ce site utilise uniquement des cookies techniques nécessaires au fonctionnement. Aucun cookie de tracking ou publicitaire n&apos;est utilisé.</p>
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
