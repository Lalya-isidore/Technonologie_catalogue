import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Link from 'next/link';
import { getAllBlogPosts } from '@/data/blog';
import type { Locale } from '@/lib/types';
import { Clock, ArrowRight } from 'lucide-react';
import { generateMetadata as generateSeoMetadata, generateFaqJsonLd } from '@/lib/seo';
import { getFaqsByPage } from '@/data/faq';
import { FAQSection } from '@/components/sections/FAQSection';

const pathForAllLocales = (p: string) => ({ fr: p, en: p, es: p, it: p, ar: p, ru: p });

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateSeoMetadata({
    title: 'Blog & Actualités Réseau Industriel | TSF Technology',
    description: 'Guides techniques, actualités produits et tendances du réseau industriel. TSN, PoE, Layer 3, cybersécurité industrielle et plus.',
    path: pathForAllLocales('/blog'),
    locale: locale as Locale,
  });
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const posts = getAllBlogPosts();

  return (
    <main className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-dark mb-3">Blog & Actualités</h1>
      <p className="text-medium mb-12 max-w-2xl">
        Guides techniques, actualités produits et tendances du réseau industriel.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug[loc]}`}
            className="group bg-white rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all overflow-hidden"
          >
            <div className="aspect-[16/9] bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
              <span className="text-4xl text-primary-300">📡</span>
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 text-xs text-medium mb-3">
                <span className="px-2 py-0.5 bg-primary-50 text-primary-600 rounded font-medium">
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {post.readTime} min
                </span>
                <span>{post.date}</span>
              </div>
              <h2 className="text-base font-semibold text-dark group-hover:text-primary-500 transition-colors mb-2 line-clamp-2">
                {post.title[loc]}
              </h2>
              <p className="text-sm text-medium line-clamp-3 mb-4">
                {post.excerpt[loc]}
              </p>
              <span className="text-sm font-medium text-primary-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                Lire l&apos;article <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {(() => {
        const faqs = getFaqsByPage('blog');
        if (!faqs.length) return null;
        return (
          <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFaqJsonLd(faqs, loc)) }} />
            <FAQSection faqs={faqs} locale={loc} title="Questions fréquentes — Blog" />
          </>
        );
      })()}
    </main>
  );
}
