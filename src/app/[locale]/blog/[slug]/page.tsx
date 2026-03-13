import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getAllBlogPosts, getBlogPostBySlug } from '@/data/blog';
import type { Locale } from '@/lib/types';
import { Clock, ArrowLeft } from 'lucide-react';
import { InternalLinks } from '@/components/sections/InternalLinks';
import { getRelatedSolutionLinks, getResourceLinks } from '@/lib/internal-links';
import { generateMetadata as generateSeoMetadata, generateArticleJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  const posts = getAllBlogPosts();
  const locales = ['fr', 'en', 'es', 'it', 'ar', 'ru'];
  return locales.flatMap((locale) =>
    posts.map((post) => ({ locale, slug: post.slug[locale as Locale] }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPostBySlug(slug, locale);
  if (!post) return {};
  const loc = locale as Locale;
  const pathForAllLocales: Record<Locale, string> = {} as Record<Locale, string>;
  for (const l of ['fr', 'en', 'es', 'it', 'ar', 'ru'] as Locale[]) {
    pathForAllLocales[l] = `/blog/${post.slug[l]}`;
  }
  return generateSeoMetadata({
    title: `${post.title[loc]} | Blog TSF Technology`,
    description: post.excerpt[loc],
    path: pathForAllLocales,
    locale: loc,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const loc = locale as Locale;
  const post = getBlogPostBySlug(slug, locale);
  if (!post) notFound();

  const solutionLinksData = getRelatedSolutionLinks();
  const resourceLinksData = getResourceLinks();

  const articleJsonLd = generateArticleJsonLd({
    title: post.title[loc],
    description: post.excerpt[loc],
    slug: post.slug[loc],
    locale: loc,
    publishedAt: post.date,
    image: post.image,
  });

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    { name: 'Accueil', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title[loc], url: `/blog/${post.slug[loc]}` },
  ]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-primary-500 hover:text-primary-600 mb-8">
          <ArrowLeft size={16} /> Retour au blog
        </Link>

        <div className="flex items-center gap-3 text-sm text-medium mb-4">
          <span className="px-2.5 py-0.5 bg-primary-50 text-primary-600 rounded font-medium">
            {post.category}
          </span>
          <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime} min</span>
          <span>{post.date}</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-dark mb-6 leading-tight">
          {post.title[loc]}
        </h1>
        <p className="text-lg text-medium mb-10 leading-relaxed">
          {post.excerpt[loc]}
        </p>

        <article className="prose prose-lg max-w-none">
          {post.content[loc].split('\n').map((line, i) => {
            if (line.startsWith('## ')) {
              return <h2 key={i} className="text-xl font-bold text-dark mt-8 mb-4">{line.replace('## ', '')}</h2>;
            }
            if (line.startsWith('- **')) {
              const match = line.match(/- \*\*(.+?)\*\*\s*:\s*(.*)/);
              if (match) {
                return (
                  <div key={i} className="flex items-start gap-2 mb-2 ml-4">
                    <span className="text-primary-500 mt-1">•</span>
                    <p className="text-medium"><strong className="text-dark">{match[1]}</strong> : {match[2]}</p>
                  </div>
                );
              }
            }
            if (line.trim() === '') return <br key={i} />;
            return <p key={i} className="text-medium leading-relaxed mb-4">{line}</p>;
          })}
        </article>

        <div className="mt-16 p-8 bg-primary-50 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-dark mb-3">Besoin de conseil ?</h3>
          <p className="text-medium mb-6">Nos experts vous accompagnent dans le choix de vos équipements réseau.</p>
          <Link href="/demande-de-devis" className="inline-flex px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-lg transition-colors">
            Demander un devis gratuit
          </Link>
        </div>
      </div>

      <InternalLinks
        solutionLinks={solutionLinksData}
        resourceLinks={resourceLinksData}
      />
    </main>
  );
}
