import Link from 'next/link';
import type { InternalLink } from '@/lib/internal-links';
import { ArrowRight, Shuffle } from 'lucide-react';

type Props = {
  links: InternalLink[];
  title?: string;
};

export function CrossCategoryRecommendation({ links, title }: Props) {
  if (links.length === 0) return null;

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 mb-6">
          <Shuffle size={20} style={{ color: '#1d4ed8' }} />
          <h3 className="text-xl font-bold" style={{ color: '#0f2257' }}>
            {title || 'Vous pourriez aussi avoir besoin de'}
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {links.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative flex flex-col p-6 bg-white rounded-xl overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg"
              style={{ border: '1.5px solid #e2e8f0' }}
            >
              {/* Top accent line */}
              <span
                className="absolute top-0 left-0 right-0 h-[3px] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: 'linear-gradient(90deg, #1d4ed8, #3b82f6)' }}
              />

              <span
                className="text-base font-semibold mb-2 group-hover:text-blue-600 transition-colors"
                style={{ color: '#0f2257' }}
              >
                {link.label}
              </span>
              {link.description && (
                <span className="text-sm leading-relaxed mb-4" style={{ color: '#64748b' }}>
                  {link.description}
                </span>
              )}
              <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: '#1d4ed8' }}>
                Découvrir la gamme
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
