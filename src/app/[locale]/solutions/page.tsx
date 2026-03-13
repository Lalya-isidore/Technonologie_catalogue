import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';
import { SolutionsContent } from '@/components/sections/SolutionsContent';

const pathForAllLocales = (p: string) => ({ fr: p, en: p, es: p, it: p, ar: p, ru: p });

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateSeoMetadata({
    title: 'Solutions par Industrie — Réseau Industriel Adapté | TSF Technology',
    description: 'Découvrez nos solutions réseau industriel pour Smart City, Énergie, Industrie 4.0, Transport, Pétrole & Gaz. IP40, -40°C à +75°C, certifiés CE/FCC/UL.',
    path: pathForAllLocales('/solutions'),
    locale: locale as Locale,
  });
}

export default async function SolutionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <SolutionsContent />
    </main>
  );
}
