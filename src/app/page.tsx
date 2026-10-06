import { TECH_ARTICLES } from '../data/articles';
import { filterAndScoreArticles, DEFAULT_USER_PROFILE } from '../lib/recommendation';
import { ClientFeedContainer } from '../components/ClientFeedContainer';
import type { Category, SortOrder } from '../types/feed';

interface PageProps {
  searchParams: Promise<{
    topic?: string;
    sort?: string;
    q?: string;
  }>;
}

export default async function HomePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const category = (params.topic as Category) || 'all';
  const sort = (params.sort as SortOrder) || 'for_you';
  const query = params.q || '';

  // Server-side data processing: filtering, preference scoring, and sorting on the server
  const initialArticles = filterAndScoreArticles(TECH_ARTICLES, {
    category,
    sort,
    query,
    profile: DEFAULT_USER_PROFILE
  });

  return (
    <ClientFeedContainer
      initialArticles={initialArticles}
      category={category}
      sort={sort}
      query={query}
    />
  );
}
