'use client';

import React, { useState } from 'react';
import type { ScoredArticle, UserInterestProfile, Category, SortOrder } from '../types/feed';
import { scoreArticle, DEFAULT_USER_PROFILE } from '../lib/recommendation';
import { Navbar } from './Navbar';
import { FeedTabs } from './FeedTabs';
import { ArticleCard } from './ArticleCard';
import { ArticleModal } from './ArticleModal';
import { PersonalizeModal } from './PersonalizeModal';
import { Sparkles, SlidersHorizontal, AlertCircle, X } from 'lucide-react';

interface ClientFeedContainerProps {
  initialArticles: ScoredArticle[];
  category: Category;
  sort: SortOrder;
  query: string;
}

export const ClientFeedContainer: React.FC<ClientFeedContainerProps> = ({
  initialArticles,
  category,
  sort,
  query
}) => {
  const [profile, setProfile] = useState<UserInterestProfile>(DEFAULT_USER_PROFILE);
  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);
  const [readingArticle, setReadingArticle] = useState<ScoredArticle | null>(null);
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [upvotedIds, setUpvotedIds] = useState<Set<string>>(new Set());

  // Dynamically re-score articles based on current user interest profile
  const displayedArticles = initialArticles.map((art) => scoreArticle(art, profile));

  if (sort === 'for_you') {
    displayedArticles.sort((a, b) => b.matchScore - a.matchScore);
  }

  const handleToggleBookmark = (id: string) => {
    setBookmarkedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleToggleUpvote = (id: string) => {
    setUpvotedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleRemoveTopic = (name: string) => {
    const nextTopics = profile.topics.map((t) =>
      t.name === name ? { ...t, active: false } : t
    );
    setProfile({ ...profile, topics: nextTopics, presetName: undefined });
  };

  const activeTopics = profile.topics.filter((t) => t.active);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navbar */}
      <Navbar query={query} onOpenPersonalizeModal={() => setIsPersonalizeOpen(true)} />

      {/* Main Content Area */}
      <main style={{ maxWidth: '960px', width: '100%', margin: '0 auto', padding: '24px 20px 60px' }}>
        {/* Preference Profile Banner */}
        <div className="glass-panel" style={{
          padding: '16px 20px',
          marginBottom: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.06) 100%)',
          borderColor: 'rgba(99, 102, 241, 0.25)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={15} color="#c084fc" />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>
                追跡中の関心スタック ({activeTopics.length}項目)
              </span>
              {profile.presetName && (
                <span style={{
                  fontSize: '0.7rem',
                  padding: '2px 8px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(99, 102, 241, 0.2)',
                  color: '#818cf8',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  fontWeight: 600
                }}>
                  {profile.presetName}
                </span>
              )}
            </div>

            <button
              className="btn btn-sm"
              onClick={() => setIsPersonalizeOpen(true)}
              style={{ fontSize: '0.75rem', padding: '4px 10px', borderColor: 'var(--accent-indigo)' }}
            >
              <SlidersHorizontal size={13} color="var(--accent-indigo)" />
              <span>スタック・重要度の編集</span>
            </button>
          </div>

          {/* Active Chips List with remove button */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', alignItems: 'center' }}>
            {activeTopics.map((topic) => {
              const priorityStar =
                topic.priority === 'HIGH' ? ' ★★★' : topic.priority === 'MEDIUM' ? ' ★★' : '';
              return (
                <span
                  key={topic.name}
                  className="tag-pill"
                  style={{
                    background: 'rgba(168, 85, 247, 0.12)',
                    color: '#c084fc',
                    borderColor: 'rgba(168, 85, 247, 0.3)',
                    padding: '3px 8px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <span>{topic.name}</span>
                  {priorityStar && (
                    <span style={{ fontSize: '0.62rem', color: '#f59e0b', fontWeight: 700 }}>
                      {priorityStar}
                    </span>
                  )}
                  <button
                    onClick={() => handleRemoveTopic(topic.name)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-dim)',
                      cursor: 'pointer',
                      padding: '0 1px',
                      display: 'flex',
                      alignItems: 'center'
                    }}
                    title="このスタックを除外"
                  >
                    <X size={11} />
                  </button>
                </span>
              );
            })}
          </div>
        </div>

        {/* Category & Sort Tabs */}
        <FeedTabs currentCategory={category} currentSort={sort} query={query} />

        {/* Articles List */}
        {displayedArticles.length === 0 ? (
          <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-dim)' }}>
            <AlertCircle size={32} style={{ margin: '0 auto 10px', opacity: 0.5 }} />
            <p style={{ fontSize: '0.9rem' }}>該当する記事が見つかりませんでした。</p>
          </div>
        ) : (
          <div>
            {displayedArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                isBookmarked={bookmarkedIds.has(article.id)}
                onToggleBookmark={handleToggleBookmark}
                hasUpvoted={upvotedIds.has(article.id)}
                onToggleUpvote={handleToggleUpvote}
                onOpenModal={(art) => setReadingArticle(art)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Article Key Takeaways Reader Modal */}
      <ArticleModal article={readingArticle} onClose={() => setReadingArticle(null)} />

      {/* Personalize Profile Modal */}
      <PersonalizeModal
        isOpen={isPersonalizeOpen}
        onClose={() => setIsPersonalizeOpen(false)}
        profile={profile}
        onUpdateProfile={setProfile}
      />
    </div>
  );
};
