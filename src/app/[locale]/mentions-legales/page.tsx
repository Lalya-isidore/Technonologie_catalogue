import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

const pathForAllLocales = (p: string) => ({ fr: p, en: p, es: p, it: p, ar: p, ru: p });

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateSeoMetadata({
    title: 'Mentions Légales | TSF Technology by LANNKIN',
    description: 'Mentions légales du site TSF Technology. Éditeur : LANNKIN, SAS française. SIREN 953 478 971. Siège : Hermival-les-Vaux, Normandie, France.',
    path: pathForAllLocales('/mentions-legales'),
    locale: locale as Locale,
  });
}

export default async function LegalPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-dark mb-8">Mentions Légales</h1>
      <div className="prose prose-sm max-w-none space-y-8">
        <Section title="Éditeur du site">
          <p>Société : <strong>LANNKIN</strong></p>
          <p>Marque commerciale : <strong>TSF Technology</strong></p>
          <p>Forme juridique : SAS</p>
          <p>SIREN : 953 478 971</p>
          <p>SIRET : 953 478 971 00013</p>
          <p>TVA intracommunautaire : FR45953478971</p>
          <p>Siège social : 401 Chemin du Montbert, 14100 Hermival-les-Vaux, France</p>
          <p>Email : contact@tsf-technology.com</p>
          <p>Téléphone : +33 6 17 03 03 08</p>
        </Section>

        <Section title="Directeur de la publication">
          <p>Le gérant de la société LANNKIN.</p>
        </Section>

        <Section title="Hébergement">
          <p>Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.</p>
        </Section>

        <Section title="Propriété intellectuelle">
          <p>L&apos;ensemble du contenu de ce site (textes, images, logos, marques) est la propriété exclusive de LANNKIN / TSF Technology ou de ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.</p>
        </Section>

        <Section title="Limitation de responsabilité">
          <p>Les informations fournies sur ce site le sont à titre indicatif. LANNKIN s&apos;efforce de les maintenir à jour mais ne garantit pas leur exactitude. Les prix affichés sont indicatifs et non contractuels.</p>
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
