import React from 'react';
import type { ScoredArticle } from '../types/feed';
import { X, ExternalLink, CheckCircle2, BookOpen, Clock, Tag } from 'lucide-react';

interface ArticleModalProps {
  article: ScoredArticle | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 200,
      padding: '16px'
    }}>
      <div className="glass-panel" style={{
        width: '100%',
        maxWidth: '680px',
        padding: '24px 28px',
        background: 'var(--bg-secondary)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 24px 48px rgba(0,0,0,0.8)',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '14px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="tag-pill match-badge-high" style={{ fontWeight: 700 }}>
                {article.matchScore}% マッチ
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
                {article.sourceName} • 読了時間 約{article.readTimeMin}分
              </span>
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', lineHeight: 1.4 }}>
              {article.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', padding: '4px' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* 推薦理由コールアウト */}
        <div style={{
          background: 'rgba(99, 102, 241, 0.08)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          borderRadius: 'var(--radius-md)',
          padding: '10px 14px',
          fontSize: '0.8rem',
          color: '#c7d2fe',
          marginBottom: '18px'
        }}>
          💡 <strong>パーソナライズ分析理由</strong>: {article.matchReason}
        </div>

        {/* 要点3点まとめ (Key Takeaways) */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 700, color: 'var(--accent-emerald)', marginBottom: '10px' }}>
            <CheckCircle2 size={16} />
            <span>記事の重要ポイント（要約3点）</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {article.keyTakeaways.map((takeaway, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-md)',
                  padding: '10px 14px',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  color: '#e2e8f0'
                }}
              >
                <span style={{ color: 'var(--accent-emerald)', fontWeight: 700 }}>0{idx + 1}.</span>
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 本文サマリー */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px' }}>
            詳細サマリー
          </div>
          <p style={{ fontSize: '0.875rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
            {article.summary}
          </p>
        </div>

        {/* フッターリンク */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {article.tags.map((t) => (
              <span key={t} className="tag-pill">
                #{t}
              </span>
            ))}
          </div>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <span>元記事を読む ({article.sourceDomain})</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
};
