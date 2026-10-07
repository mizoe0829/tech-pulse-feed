import { describe, it, expect } from 'vitest';
import {
  scoreArticle,
  filterAndScoreArticles,
  DEFAULT_USER_PROFILE,
  PROFILE_PRESETS
} from '../src/lib/recommendation';
import type { TechArticle, UserInterestProfile } from '../src/types/feed';

const mockArticleGo: TechArticle = {
  id: 'test-go-01',
  title: 'GoとEchoで構築するマイクロサービス',
  summary: '高パフォーマンスなGo言語バックエンドのベストプラクティス',
  keyTakeaways: ['Goの並行処理', 'Echoの軽量ルーティング'],
  url: 'https://example.com/go',
  sourceName: 'Go Dev',
  sourceDomain: 'example.com',
  publishedAt: '2026-10-07 09:00',
  timeAgo: '1時間前',
  upvotes: 200,
  commentsCount: 15,
  readTimeMin: 5,
  category: 'backend',
  tags: ['Go', 'Echo', 'Backend', 'Microservices'],
  author: 'Gopher'
};

const mockArticlePython: TechArticle = {
  id: 'test-py-01',
  title: 'FastAPIによる非同期AIエージェントサーバー',
  summary: 'PythonとFastAPIによるLLMストリーミングAPIの構築',
  keyTakeaways: ['Pydantic v2', 'AsyncIO'],
  url: 'https://example.com/py',
  sourceName: 'Py Daily',
  sourceDomain: 'example.com',
  publishedAt: '2026-10-06 12:00',
  timeAgo: '1日前',
  upvotes: 120,
  commentsCount: 8,
  readTimeMin: 6,
  category: 'ai',
  tags: ['Python', 'FastAPI', 'AI Agent', 'LLM'],
  author: 'Pythonista'
};

describe('TechPulse Recommendation Engine', () => {
  describe('scoreArticle', () => {
    it('Go関心プロファイルに対してGo記事が高いスコアを獲得すること', () => {
      const goProfile: UserInterestProfile = {
        level: 'Senior / Lead',
        topics: [
          { name: 'Go', category: 'Backend / DB', priority: 'HIGH', active: true },
          { name: 'Echo', category: 'Backend / DB', priority: 'HIGH', active: true },
          { name: 'TypeScript', category: 'Frontend', priority: 'LOW', active: false }
        ]
      };

      const result = scoreArticle(mockArticleGo, goProfile);
      expect(result.matchScore).toBeGreaterThanOrEqual(75);
      expect(result.matchedKeywords).toContain('Go');
      expect(result.matchedKeywords).toContain('Echo');
      expect(result.matchReason).toContain('Go');
    });

    it('関心トピックの優先度（HIGH vs LOW）でスコアに傾斜がつくこと', () => {
      const highProfile: UserInterestProfile = {
        level: 'Senior / Lead',
        topics: [{ name: 'Go', category: 'Backend / DB', priority: 'HIGH', active: true }]
      };
      const lowProfile: UserInterestProfile = {
        level: 'Senior / Lead',
        topics: [{ name: 'Go', category: 'Backend / DB', priority: 'LOW', active: true }]
      };

      const scoreHigh = scoreArticle(mockArticleGo, highProfile);
      const scoreLow = scoreArticle(mockArticleGo, lowProfile);

      expect(scoreHigh.matchScore).toBeGreaterThan(scoreLow.matchScore);
    });

    it('非アクティブなトピックはスコア加算されないこと', () => {
      const inactiveProfile: UserInterestProfile = {
        level: 'Mid',
        topics: [{ name: 'Python', category: 'Backend / DB', priority: 'HIGH', active: false }]
      };

      const result = scoreArticle(mockArticlePython, inactiveProfile);
      expect(result.matchedKeywords.length).toBe(0);
    });
  });

  describe('filterAndScoreArticles', () => {
    const testArticles = [mockArticleGo, mockArticlePython];

    it('カテゴリ指定で正しくフィルタリングされること', () => {
      const backendResults = filterAndScoreArticles(testArticles, { category: 'backend' });
      expect(backendResults).toHaveLength(1);
      expect(backendResults[0].id).toBe('test-go-01');

      const aiResults = filterAndScoreArticles(testArticles, { category: 'ai' });
      expect(aiResults).toHaveLength(1);
      expect(aiResults[0].id).toBe('test-py-01');
    });

    it('検索クエリでタイトルまたはタグの部分一致検索ができること', () => {
      const searchResults = filterAndScoreArticles(testArticles, { query: 'FastAPI' });
      expect(searchResults).toHaveLength(1);
      expect(searchResults[0].id).toBe('test-py-01');
    });

    it('for_youソート時にマッチ度の高い順に並び替えられること', () => {
      const pyProfile: UserInterestProfile = {
        level: 'Senior / Lead',
        topics: [
          { name: 'Python', category: 'Backend / DB', priority: 'HIGH', active: true },
          { name: 'FastAPI', category: 'Backend / DB', priority: 'HIGH', active: true },
          { name: 'Go', category: 'Backend / DB', priority: 'LOW', active: false }
        ]
      };

      const sorted = filterAndScoreArticles(testArticles, {
        sort: 'for_you',
        profile: pyProfile
      });

      expect(sorted[0].id).toBe('test-py-01');
      expect(sorted[0].matchScore).toBeGreaterThan(sorted[1].matchScore);
    });

    it('topソート時にUpvotesの降順で並ぶこと', () => {
      const sortedByTop = filterAndScoreArticles(testArticles, { sort: 'top' });
      expect(sortedByTop[0].upvotes).toBe(200);
      expect(sortedByTop[1].upvotes).toBe(120);
    });
  });

  describe('Profile Presets', () => {
    it('GoプリセットとPythonプリセットが正しく定義されていること', () => {
      const goPreset = PROFILE_PRESETS.find((p) => p.name.includes('Go'));
      expect(goPreset).toBeDefined();
      expect(goPreset?.topicNames).toContain('Go');

      const pyPreset = PROFILE_PRESETS.find((p) => p.name.includes('Python'));
      expect(pyPreset).toBeDefined();
      expect(pyPreset?.topicNames).toContain('FastAPI');
    });
  });
});
