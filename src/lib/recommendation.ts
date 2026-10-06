import type {
  TechArticle,
  UserInterestProfile,
  InterestTopic,
  ScoredArticle,
  Category,
  SortOrder,
  StackCategory
} from '../types/feed';

export const INITIAL_TOPICS_CATALOG: InterestTopic[] = [
  // Frontend
  { name: 'TypeScript', category: 'Frontend', priority: 'HIGH', active: true },
  { name: 'Next.js', category: 'Frontend', priority: 'HIGH', active: true },
  { name: 'React', category: 'Frontend', priority: 'HIGH', active: true },
  { name: 'SSR', category: 'Frontend', priority: 'HIGH', active: true },
  { name: 'Tailwind CSS', category: 'Frontend', priority: 'MEDIUM', active: true },
  { name: 'Vue', category: 'Frontend', priority: 'MEDIUM', active: false },
  { name: 'Svelte', category: 'Frontend', priority: 'MEDIUM', active: false },
  { name: 'Web Performance', category: 'Frontend', priority: 'HIGH', active: true },

  // AI / LLM
  { name: 'AI Agent', category: 'AI / LLM', priority: 'HIGH', active: true },
  { name: 'LLM', category: 'AI / LLM', priority: 'HIGH', active: true },
  { name: 'RAG', category: 'AI / LLM', priority: 'HIGH', active: true },
  { name: 'Vector Search', category: 'AI / LLM', priority: 'MEDIUM', active: true },
  { name: 'Local LLM', category: 'AI / LLM', priority: 'MEDIUM', active: false },
  { name: 'WebGPU', category: 'AI / LLM', priority: 'MEDIUM', active: false },
  { name: 'Observability', category: 'AI / LLM', priority: 'HIGH', active: true },
  { name: 'Python', category: 'AI / LLM', priority: 'MEDIUM', active: false },

  // Backend / DB
  { name: 'Rust', category: 'Backend / DB', priority: 'HIGH', active: true },
  { name: 'Node.js', category: 'Backend / DB', priority: 'MEDIUM', active: true },
  { name: 'Go', category: 'Backend / DB', priority: 'MEDIUM', active: false },
  { name: 'PostgreSQL', category: 'Backend / DB', priority: 'HIGH', active: true },
  { name: 'Database', category: 'Backend / DB', priority: 'MEDIUM', active: true },
  { name: 'Redis', category: 'Backend / DB', priority: 'LOW', active: false },
  { name: 'GraphQL', category: 'Backend / DB', priority: 'LOW', active: false },
  { name: 'SQL', category: 'Backend / DB', priority: 'MEDIUM', active: false },

  // DevOps / Cloud
  { name: 'Cloudflare', category: 'DevOps / Cloud', priority: 'MEDIUM', active: true },
  { name: 'Edge', category: 'DevOps / Cloud', priority: 'MEDIUM', active: true },
  { name: 'Docker', category: 'DevOps / Cloud', priority: 'MEDIUM', active: false },
  { name: 'Kamal', category: 'DevOps / Cloud', priority: 'MEDIUM', active: false },
  { name: 'CI/CD', category: 'DevOps / Cloud', priority: 'HIGH', active: true },
  { name: 'DevOps', category: 'DevOps / Cloud', priority: 'MEDIUM', active: false },

  // Architecture & Culture
  { name: 'Architecture', category: 'Architecture', priority: 'HIGH', active: true },
  { name: 'Modular Monolith', category: 'Architecture', priority: 'HIGH', active: false },
  { name: 'DDD', category: 'Architecture', priority: 'MEDIUM', active: false },
  { name: 'Productivity', category: 'Architecture', priority: 'HIGH', active: true },
  { name: 'Remote Work', category: 'Architecture', priority: 'MEDIUM', active: true }
];

export const PROFILE_PRESETS: { name: string; description: string; topicNames: string[] }[] = [
  {
    name: 'TS / Next.js フルスタック',
    description: 'TypeScript, Next.js, React, SSR, Tailwind, PostgreSQL を軸にした現代的Web開発者',
    topicNames: ['TypeScript', 'Next.js', 'React', 'SSR', 'Tailwind CSS', 'PostgreSQL', 'Web Performance', 'CI/CD']
  },
  {
    name: 'AIエージェント & LLMスペシャリスト',
    description: '自律AIエージェント、LLM運用、RAG、分散トレース、ローカルLLMに特化',
    topicNames: ['AI Agent', 'LLM', 'RAG', 'Vector Search', 'Observability', 'Local LLM', 'WebGPU', 'Python']
  },
  {
    name: 'ハイパフォーマンス & Rust / Go',
    description: 'Rust, Web Performance, Edge, 高速ビルドツール, 並行処理に関心が高いシステム志向',
    topicNames: ['Rust', 'Web Performance', 'Edge', 'Cloudflare', 'Go', 'Modular Monolith', 'PostgreSQL']
  },
  {
    name: 'モダンDevOps & クラウド設計',
    description: 'Edgeコンピューティング, Docker, CI/CD, クラウドインフラ, コスト効率化',
    topicNames: ['Cloudflare', 'Edge', 'Docker', 'Kamal', 'CI/CD', 'DevOps', 'PostgreSQL', 'Architecture']
  }
];

export const DEFAULT_USER_PROFILE: UserInterestProfile = {
  level: 'Senior / Lead',
  presetName: 'TS / Next.js フルスタック',
  topics: INITIAL_TOPICS_CATALOG
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

      const isTitleMatch = article.title.toLowerCase().includes(topicLower);
      const isTagMatch = article.tags.some((t) => t.toLowerCase().includes(topicLower));
      const posMultiplier = isTitleMatch ? 1.5 : isTagMatch ? 1.25 : 1.0;

      const priorityWeight = topic.priority === 'HIGH' ? 1.4 : topic.priority === 'MEDIUM' ? 1.0 : 0.6;

      matchedScoreTotal += 24 * posMultiplier * priorityWeight;
    }
  });

  // Upvote popularity bonus (capped at 14 points)
  const popularityBonus = Math.min(14, Math.round(article.upvotes / 48));

  // Freshness bonus
  const isFresh = article.timeAgo.includes('時間前') && parseInt(article.timeAgo) <= 6;
  const freshnessBonus = isFresh ? 6 : 0;

  const rawScore = Math.min(99, Math.round(matchedScoreTotal + popularityBonus + freshnessBonus));
  const finalScore = Math.max(30, rawScore);

  let matchReason = 'トレンド・総合スコアに基づく推薦';
  if (matchedKeywords.length >= 2) {
    matchReason = `関心スタック「${matchedKeywords.slice(0, 2).join('」「')}」と高い親和性`;
  } else if (matchedKeywords.length === 1) {
    matchReason = `関心スタック「${matchedKeywords[0]}」にマッチ`;
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

  if (category !== 'all') {
    list = list.filter((a) => a.category === category);
  }

  if (query.trim()) {
    const qLower = query.toLowerCase();
    list = list.filter(
      (a) =>
        a.title.toLowerCase().includes(qLower) ||
        a.summary.toLowerCase().includes(qLower) ||
        a.tags.some((t) => t.toLowerCase().includes(qLower))
    );
  }

  if (sort === 'for_you') {
    list.sort((a, b) => b.matchScore - a.matchScore);
  } else if (sort === 'top') {
    list.sort((a, b) => b.upvotes - a.upvotes);
  } else if (sort === 'latest') {
    list.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }

  return list;
}
