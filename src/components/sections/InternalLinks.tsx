import Link from 'next/link';
import type { InternalLink } from '@/lib/internal-links';
import { ArrowRight, Layers, Lightbulb, BookOpen } from 'lucide-react';

type Props = {
  categoryLinks?: InternalLink[];
  solutionLinks?: InternalLink[];
  resourceLinks?: InternalLink[];
};

export function InternalLinks({ categoryLinks, solutionLinks, resourceLinks }: Props) {
  const hasContent = (categoryLinks && categoryLinks.length > 0)
    || (solutionLinks && solutionLinks.length > 0)
    || (resourceLinks && resourceLinks.length > 0);

  if (!hasContent) return null;

  return (
    <section className="py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Category links: Voir aussi */}
        {categoryLinks && categoryLinks.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Layers size={20} style={{ color: '#1d4ed8' }} />
              <h3 className="text-xl font-bold" style={{ color: '#0f2257' }}>
                Voir aussi
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {categoryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col p-5 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all"
                >
                  <span
                    className="text-sm font-semibold mb-1 group-hover:text-blue-600 transition-colors"
                    style={{ color: '#0f2257' }}
                  >
                    {link.label}
                  </span>
                  {link.description && (
                    <span className="text-xs leading-relaxed mb-3" style={{ color: '#64748b' }}>
                      {link.description}
                    </span>
                  )}
                  <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium" style={{ color: '#1d4ed8' }}>
                    Voir les produits
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Solution links: Solutions associées */}
        {solutionLinks && solutionLinks.length > 0 && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb size={20} style={{ color: '#1d4ed8' }} />
              <h3 className="text-xl font-bold" style={{ color: '#0f2257' }}>
                Solutions associées
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {solutionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex flex-col p-5 rounded-xl transition-all"
                  style={{
                    background: 'linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%)',
                    border: '1px solid #e0e7ff',
                  }}
                >
                  <span
                    className="text-sm font-semibold mb-1 group-hover:text-blue-600 transition-colors"
                    style={{ color: '#0f2257' }}
                  >
                    {link.label}
                  </span>
                  {link.description && (
                    <span className="text-xs leading-relaxed mb-3" style={{ color: '#64748b' }}>
                      {link.description}
                    </span>
                  )}
                  <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium" style={{ color: '#1d4ed8' }}>
                    Découvrir
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Resource links: Ressources */}
        {resourceLinks && resourceLinks.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen size={20} style={{ color: '#1d4ed8' }} />
              <h3 className="text-xl font-bold" style={{ color: '#0f2257' }}>
                Ressources
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {resourceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1">
                    <span
                      className="text-sm font-medium group-hover:text-blue-600 transition-colors block"
                      style={{ color: '#0f2257' }}
                    >
                      {link.label}
                    </span>
                    {link.description && (
                      <span className="text-xs" style={{ color: '#64748b' }}>
                        {link.description}
                      </span>
                    )}
                  </div>
                  <ArrowRight size={14} style={{ color: '#94a3b8' }} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
