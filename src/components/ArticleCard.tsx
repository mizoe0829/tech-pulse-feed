import React from 'react';
import type { ScoredArticle } from '../types/feed';
import { ChevronUp, ExternalLink, Bookmark, Sparkles, BookOpen, MessageSquare, Clock } from 'lucide-react';

interface ArticleCardProps {
  article: ScoredArticle;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  hasUpvoted: boolean;
  onToggleUpvote: (id: string) => void;
  onOpenModal: (article: ScoredArticle) => void;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({
  article,
  isBookmarked,
  onToggleBookmark,
  hasUpvoted,
  onToggleUpvote,
  onOpenModal
}) => {
  const isHighMatch = article.matchScore >= 80;
  const isMidMatch = article.matchScore >= 60 && article.matchScore < 80;

  return (
    <article
      className="glass-panel"
      style={{
        padding: '18px 20px',
        marginBottom: '12px',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
        position: 'relative'
      }}
    >
      {/* Upvote Button Column */}
      <button
        onClick={() => onToggleUpvote(article.id)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px 10px',
          borderRadius: 'var(--radius-md)',
          background: hasUpvoted ? 'rgba(255, 102, 0, 0.15)' : 'rgba(255, 255, 255, 0.03)',
          border: `1px solid ${hasUpvoted ? '#ff6600' : 'var(--border-light)'}`,
          color: hasUpvoted ? '#ff6600' : 'var(--text-muted)',
          cursor: 'pointer',
          minWidth: '46px',
          transition: 'all 0.15s ease'
        }}
        title="Upvoteこの素晴らしい記事を応援"
      >
        <ChevronUp size={18} />
        <span style={{ fontSize: '0.8rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>
          {article.upvotes + (hasUpvoted ? 1 : 0)}
        </span>
      </button>

      {/* Main Content Area */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {/* Top Metadata Row: Match Score + Source */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
          {/* Recommendation Match Badge */}
          <span
            className={`tag-pill ${isHighMatch ? 'match-badge-high' : isMidMatch ? 'match-badge-mid' : 'match-badge-base'}`}
            style={{ fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            title={article.matchReason}
          >
            <Sparkles size={11} />
            <span>{article.matchScore}% マッチ</span>
          </span>

          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
            via <strong>{article.sourceName}</strong> ({article.sourceDomain})
          </span>

          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>•</span>

          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', gap: '3px' }}>
            <Clock size={11} /> {article.timeAgo}
          </span>

          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>•</span>

          <span style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
            by {article.author}
          </span>
        </div>

        {/* Title */}
        <h2 style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.4, marginBottom: '6px' }}>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', display: 'inline-flex', alignItems: 'baseline', gap: '6px' }}
          >
            <span>{article.title}</span>
            <ExternalLink size={13} color="var(--text-dim)" style={{ flexShrink: 0 }} />
          </a>
        </h2>

        {/* Summary Snippet */}
        <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '10px' }}>
          {article.summary}
        </p>

        {/* Tags & Action Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
            {article.tags.map((tag) => (
              <span key={tag} className="tag-pill">
                #{tag}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              className="btn btn-sm"
              onClick={() => onOpenModal(article)}
              style={{ padding: '3px 8px', fontSize: '0.75rem' }}
            >
              <BookOpen size={12} color="var(--accent-indigo)" />
              <span>要点3点まとめ</span>
            </button>

            <button
              onClick={() => onToggleBookmark(article.id)}
              style={{
                background: 'transparent',
                border: 'none',
                color: isBookmarked ? '#ff6600' : 'var(--text-dim)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '4px'
              }}
              title={isBookmarked ? 'ブックマーク解除' : 'ブックマーク保存'}
            >
              <Bookmark size={16} fill={isBookmarked ? '#ff6600' : 'none'} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
