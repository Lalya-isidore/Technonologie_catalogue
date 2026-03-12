import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Clock, FileText } from 'lucide-react';
import { getGuideBySlug, getAllGuides } from '@/data/guides';
import { generateMetadata as generateSeoMetadata } from '@/lib/seo';
import type { Locale } from '@/lib/types';

const pathForAllLocales = (p: string) => ({ fr: p, en: p, es: p, it: p, ar: p, ru: p });

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const slugs = getAllGuides().map((g) => g.slug);
  const locales = ['fr', 'en', 'es', 'it', 'ar', 'ru'];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return generateSeoMetadata({
    title: `${guide.title} | Guide Technique TSF Technology`,
    description: guide.description,
    path: pathForAllLocales(`/ressources/guides-techniques/${slug}`),
    locale: locale as Locale,
  });
}

export default async function GuidePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      {/* Breadcrumb */}
      <Link
        href="/ressources/guides-techniques"
        className="inline-flex items-center gap-1.5 text-sm text-primary-500 hover:text-primary-600 mb-8 no-underline"
      >
        <ArrowLeft size={14} /> Tous les guides
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 text-xs text-medium mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-primary-50 text-primary-600 rounded font-medium">
            <FileText size={12} /> Guide technique
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {guide.readTime} min de lecture
          </span>
        </div>
        <h1 className="text-3xl font-bold text-dark mb-3">{guide.title}</h1>
        <p className="text-medium text-base">{guide.description}</p>
      </div>

      {/* Sections */}
      <div className="space-y-10">
        {guide.sections.map((section, i) => (
          <section key={i}>
            <h2 className="text-xl font-bold text-dark mb-3">{section.heading}</h2>
            <p className="text-sm text-medium leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>

      {/* Related links */}
      {guide.relatedLinks.length > 0 && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-bold text-dark mb-4">Ressources associées</h3>
          <div className="flex flex-col gap-3">
            {guide.relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all no-underline"
              >
                <span className="text-sm font-medium text-dark group-hover:text-primary-500 transition-colors">
                  {link.label}
                </span>
                <ArrowRight size={16} className="text-primary-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="mt-12 p-8 bg-primary-50 rounded-2xl text-center">
        <h3 className="text-lg font-bold text-dark mb-2">Besoin d&apos;aide pour votre projet ?</h3>
        <p className="text-sm text-medium mb-5">
          Nos experts vous accompagnent dans le choix et la configuration de vos équipements réseau.
        </p>
        <Link
          href="/demande-de-devis"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-colors no-underline text-sm"
        >
          Demander un devis gratuit <ArrowRight size={16} />
        </Link>
      </div>
    </main>
  );
}
