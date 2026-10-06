export type Category = 'all' | 'ai' | 'frontend' | 'backend' | 'devops' | 'architecture';

export type SortOrder = 'for_you' | 'top' | 'latest';

export type StackCategory = 'Frontend' | 'AI / LLM' | 'Backend / DB' | 'DevOps / Cloud' | 'Architecture';

export type StackPriority = 'HIGH' | 'MEDIUM' | 'LOW';

export interface InterestTopic {
  name: string;
  category: StackCategory;
  priority: StackPriority;
  active: boolean;
  isCustom?: boolean;
}

export interface TechArticle {
  id: string;
  title: string;
  summary: string;
  keyTakeaways: string[];
  url: string;
  sourceName: string;
  sourceDomain: string;
  publishedAt: string;
  timeAgo: string;
  upvotes: number;
  commentsCount: number;
  readTimeMin: number;
  category: Category;
  tags: string[];
  author: string;
}

export interface UserInterestProfile {
  topics: InterestTopic[];
  level: 'Junior' | 'Mid' | 'Senior / Lead' | 'Architect / Tech Lead';
  presetName?: string;
}

export interface ScoredArticle extends TechArticle {
  matchScore: number; // 0 to 100
  matchedKeywords: string[];
  matchReason: string;
}
