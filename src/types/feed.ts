export type Category = 'all' | 'ai' | 'frontend' | 'backend' | 'devops' | 'architecture';

export type SortOrder = 'for_you' | 'top' | 'latest';

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
  topics: {
    name: string;
    weight: number; // 0.1 to 1.0
    active: boolean;
  }[];
  level: 'Beginner' | 'Intermediate' | 'Senior / Lead';
}

export interface ScoredArticle extends TechArticle {
  matchScore: number; // 0 to 100
  matchedKeywords: string[];
  matchReason: string;
}
