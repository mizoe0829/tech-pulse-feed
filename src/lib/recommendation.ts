import type { TechArticle, UserInterestProfile, ScoredArticle, Category, SortOrder } from '../types/feed';

export const DEFAULT_USER_PROFILE: UserInterestProfile = {
  level: 'Senior / Lead',
  topics: [
    { name: 'TypeScript', weight: 1.0, active: true },
    { name: 'Next.js', weight: 0.95, active: true },
    { name: 'SSR', weight: 0.9, active: true },
    { name: 'AI Agent', weight: 0.9, active: true },
    { name: 'LLM', weight: 0.85, active: true },
    { name: 'Performance', weight: 0.8, active: true },
    { name: 'Architecture', weight: 0.75, active: true },
    { name: 'Rust', weight: 0.7, active: true },
    { name: 'PostgreSQL', weight: 0.6, active: false },
    { name: 'DevOps', weight: 0.5, active: false }
  ]
};

export function scoreArticle(article: TechArticle, profile: UserInterestProfile): ScoredArticle {
  const activeTopics = profile.topics.filter((t) => t.active);
  const textCorpus = `${article.title} ${article.summary} ${article.tags.join(' ')}`.toLowerCase();

  let matchedScoreTotal = 0;
  const matchedKeywords: string[] = [];

  activeTopics.forEach((topic) => {
    const topicLower = topic.name.toLowerCase();
    if (textCorpus.includes(topicLower)) {
      matchedKeywords.push(topic.name);
      // Higher weight if matched in tags or title
      const isTitleMatch = article.title.toLowerCase().includes(topicLower);
      const isTagMatch = article.tags.some((t) => t.toLowerCase().includes(topicLower));
      const multiplier = isTitleMatch ? 1.5 : isTagMatch ? 1.2 : 1.0;

      matchedScoreTotal += topic.weight * 28 * multiplier;
    }
  });

  // Upvote popularity bonus (capped at 15 points)
  const popularityBonus = Math.min(15, Math.round(article.upvotes / 45));

  // Freshness bonus (within 6 hours)
  const isFresh = article.timeAgo.includes('時間前') && parseInt(article.timeAgo) <= 6;
  const freshnessBonus = isFresh ? 6 : 0;

  const rawScore = Math.min(99, Math.round(matchedScoreTotal + popularityBonus + freshnessBonus));
  const finalScore = Math.max(30, rawScore); // minimum baseline 30%

  let matchReason = 'トレンド・総合スコアに基づく推薦';
  if (matchedKeywords.length >= 2) {
    matchReason = `高関心トピック「${matchedKeywords.slice(0, 2).join('」「')}」にマッチ`;
  } else if (matchedKeywords.length === 1) {
    matchReason = `関心トピック「${matchedKeywords[0]}」にマッチ`;
  }

  return {
    ...article,
    matchScore: finalScore,
    matchedKeywords,
    matchReason
  };
}

export function filterAndScoreArticles(
  articles: TechArticle[],
  options: {
    category?: Category;
    sort?: SortOrder;
    query?: string;
    profile?: UserInterestProfile;
  }
): ScoredArticle[] {
  const { category = 'all', sort = 'for_you', query = '', profile = DEFAULT_USER_PROFILE } = options;

  let list = articles.map((a) => scoreArticle(a, profile));

  // Category filter
  if (category !== 'all') {
    list = list.filter((a) => a.category === category);
  }

  // Search query filter
  if (query.trim()) {
    const qLower = query.toLowerCase();
    list = list.filter(
      (a) =>
        a.title.toLowerCase().includes(qLower) ||
        a.summary.toLowerCase().includes(qLower) ||
        a.tags.some((t) => t.toLowerCase().includes(qLower))
    );
  }

  // Sort
  if (sort === 'for_you') {
    list.sort((a, b) => b.matchScore - a.matchScore);
  } else if (sort === 'top') {
    list.sort((a, b) => b.upvotes - a.upvotes);
  } else if (sort === 'latest') {
    list.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  return list;
}
