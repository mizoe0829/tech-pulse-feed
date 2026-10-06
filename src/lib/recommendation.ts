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
  // Backend / Server-Side Languages & Frameworks (大充実化)
  { name: 'Go', category: 'Backend / DB', priority: 'HIGH', active: true },
  { name: 'Gin', category: 'Backend / DB', priority: 'MEDIUM', active: true },
  { name: 'Echo', category: 'Backend / DB', priority: 'MEDIUM', active: false },
  { name: 'Fiber', category: 'Backend / DB', priority: 'LOW', active: false },

  { name: 'Python', category: 'Backend / DB', priority: 'HIGH', active: true },
  { name: 'FastAPI', category: 'Backend / DB', priority: 'HIGH', active: true },
  { name: 'Django', category: 'Backend / DB', priority: 'MEDIUM', active: false },

  { name: 'Rust', category: 'Backend / DB', priority: 'HIGH', active: true },
  { name: 'Axum', category: 'Backend / DB', priority: 'HIGH', active: true },
  { name: 'Actix-web', category: 'Backend / DB', priority: 'MEDIUM', active: false },

  { name: 'Ruby', category: 'Backend / DB', priority: 'MEDIUM', active: false },
  { name: 'Ruby on Rails', category: 'Backend / DB', priority: 'HIGH', active: false },

  { name: 'PHP', category: 'Backend / DB', priority: 'MEDIUM', active: false },
  { name: 'Laravel', category: 'Backend / DB', priority: 'HIGH', active: false },

  { name: 'Java', category: 'Backend / DB', priority: 'MEDIUM', active: false },
  { name: 'Spring Boot', category: 'Backend / DB', priority: 'HIGH', active: false },
  { name: 'Kotlin', category: 'Backend / DB', priority: 'MEDIUM', active: false },
  { name: 'Ktor', category: 'Backend / DB', priority: 'LOW', active: false },

  { name: 'C#', category: 'Backend / DB', priority: 'MEDIUM', active: false },
  { name: 'ASP.NET Core', category: 'Backend / DB', priority: 'MEDIUM', active: false },

  { name: 'Node.js', category: 'Backend / DB', priority: 'HIGH', active: true },
  { name: 'NestJS', category: 'Backend / DB', priority: 'HIGH', active: true },
  { name: 'Hono', category: 'Backend / DB', priority: 'HIGH', active: true },
  { name: 'Fastify', category: 'Backend / DB', priority: 'MEDIUM', active: false },
  { name: 'Express', category: 'Backend / DB', priority: 'LOW', active: false },

  // Databases & Storage
  { name: 'PostgreSQL', category: 'Backend / DB', priority: 'HIGH', active: true },
  { name: 'MySQL', category: 'Backend / DB', priority: 'MEDIUM', active: false },
  { name: 'Redis', category: 'Backend / DB', priority: 'MEDIUM', active: true },
  { name: 'GraphQL', category: 'Backend / DB', priority: 'MEDIUM', active: false },
  { name: 'gRPC', category: 'Backend / DB', priority: 'HIGH', active: true },
  { name: 'SQL', category: 'Backend / DB', priority: 'MEDIUM', active: false },

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

  // DevOps / Cloud
  { name: 'Cloudflare', category: 'DevOps / Cloud', priority: 'MEDIUM', active: true },
  { name: 'Edge', category: 'DevOps / Cloud', priority: 'MEDIUM', active: true },
  { name: 'Docker', category: 'DevOps / Cloud', priority: 'HIGH', active: true },
  { name: 'Kamal', category: 'DevOps / Cloud', priority: 'MEDIUM', active: false },
  { name: 'CI/CD', category: 'DevOps / Cloud', priority: 'HIGH', active: true },
  { name: 'Kubernetes', category: 'DevOps / Cloud', priority: 'MEDIUM', active: false },

  // Architecture & Culture
  { name: 'Architecture', category: 'Architecture', priority: 'HIGH', active: true },
  { name: 'Modular Monolith', category: 'Architecture', priority: 'HIGH', active: false },
  { name: 'DDD', category: 'Architecture', priority: 'MEDIUM', active: false },
  { name: 'Microservices', category: 'Architecture', priority: 'HIGH', active: true },
  { name: 'Productivity', category: 'Architecture', priority: 'HIGH', active: true },
  { name: 'Remote Work', category: 'Architecture', priority: 'MEDIUM', active: true }
];

export const PROFILE_PRESETS: { name: string; description: string; topicNames: string[] }[] = [
  {
    name: 'TS / Next.js フルスタック',
    description: 'TypeScript, Next.js, React, SSR, Hono, PostgreSQL を軸にした現代的Web開発者',
    topicNames: ['TypeScript', 'Next.js', 'React', 'SSR', 'Hono', 'PostgreSQL', 'Web Performance', 'CI/CD']
  },
  {
    name: 'Go / マイクロサービス基盤',
    description: 'Go (Golang), Gin/Echo, gRPC, Docker, PostgreSQL による高スループットAPI設計',
    topicNames: ['Go', 'Gin', 'Echo', 'gRPC', 'PostgreSQL', 'Docker', 'Microservices', 'Architecture']
  },
  {
    name: 'Python / FastAPI ＆ AIバックエンド',
    description: 'Python, FastAPI, AI Agent, LLM, RAG, PostgreSQL による生成AI・API基盤開発',
    topicNames: ['Python', 'FastAPI', 'AI Agent', 'LLM', 'RAG', 'PostgreSQL', 'Observability']
  },
  {
    name: 'Rust / 高速バックエンド (Axum)',
    description: 'Rust, Axum, Actix-web, Web Performance, Edge による超低遅延サーバー設計',
    topicNames: ['Rust', 'Axum', 'Web Performance', 'Edge', 'Cloudflare', 'PostgreSQL', 'Architecture']
  },
  {
    name: 'Rails / Laravel Webアプリケーション',
    description: 'Ruby on Rails, Laravel, PHP, MySQL, Docker を活用した堅牢なプロダクト開発',
    topicNames: ['Ruby', 'Ruby on Rails', 'PHP', 'Laravel', 'Docker', 'PostgreSQL', 'Productivity']
  },
  {
    name: 'Java (Spring Boot) / 大規模分散基盤',
    description: 'Java, Spring Boot, Kotlin, DDD, マイクロサービスによるエンタープライズ開発',
    topicNames: ['Java', 'Spring Boot', 'Kotlin', 'DDD', 'Microservices', 'Architecture', 'PostgreSQL']
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

  // Upvote popularity bonus
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
