import type { FAQ } from '@/lib/types';
import { homeFaqs } from './home';
import { catalogueFaqs } from './catalogue';
import { solutionsFaqs } from './solutions';
import { blogFaqs } from './blog';
import { pagesFaqs } from './pages';

export type PageFaqMap = Record<string, FAQ[]>;

/** Merged FAQ map for all non-product pages */
export const pageFaqs: PageFaqMap = {
  ...homeFaqs,
  ...catalogueFaqs,
  ...solutionsFaqs,
  ...blogFaqs,
  ...pagesFaqs,
};

/**
 * Get FAQ entries for a specific page by its slug/id.
 * Returns an empty array if no FAQ exists for that page.
 */
export function getFaqsByPage(pageId: string): FAQ[] {
  return pageFaqs[pageId] ?? [];
}
