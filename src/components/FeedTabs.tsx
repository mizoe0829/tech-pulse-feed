import React from 'react';
import Link from 'next/link';
import type { Category, SortOrder } from '../types/feed';
import { Flame, Sparkles, Clock, Compass } from 'lucide-react';

interface FeedTabsProps {
  currentCategory: Category;
  currentSort: SortOrder;
  query: string;
}

export const FeedTabs: React.FC<FeedTabsProps> = ({ currentCategory, currentSort, query }) => {
  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: 'すべて' },
    { id: 'ai', label: '🤖 AI / LLM' },
    { id: 'frontend', label: '⚡ フロントエンド' },
    { id: 'backend', label: '🗄 バックエンド' },
    { id: 'devops', label: '☁️ DevOps / クラウド' },
    { id: 'architecture', label: '🏛 アーキテクチャ' }
  ];

  const sorts: { id: SortOrder; label: string; icon: any }[] = [
    { id: 'for_you', label: 'あなたへのおすすめ', icon: Sparkles },
    { id: 'top', label: '人気順 (Upvotes)', icon: Flame },
    { id: 'latest', label: '新着順', icon: Clock }
  ];

  const buildUrl = (newCategory: Category, newSort: SortOrder) => {
    const params = new URLSearchParams();
    if (newCategory !== 'all') params.set('topic', newCategory);
    if (newSort !== 'for_you') params.set('sort', newSort);
    if (query) params.set('q', query);
    const queryString = params.toString();
    return queryString ? `/?${queryString}` : '/';
  };

  return (
    <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {/* Category Tabs */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {categories.map((cat) => {
          const isActive = currentCategory === cat.id;
          return (
            <Link
              key={cat.id}
              href={buildUrl(cat.id, currentSort)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                background: isActive ? 'var(--accent-indigo)' : 'rgba(255, 255, 255, 0.04)',
                color: isActive ? '#fff' : 'var(--text-muted)',
                border: `1px solid ${isActive ? 'var(--accent-indigo)' : 'var(--border-light)'}`,
                transition: 'all 0.15s ease'
              }}
            >
              {cat.label}
            </Link>
          );
        })}
      </div>

      {/* Sort Orders Bar */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Compass size={15} color="var(--text-dim)" />
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: 600 }}>並び替え:</span>
          {sorts.map((s) => {
            const Icon = s.icon;
            const isActive = currentSort === s.id;
            return (
              <Link
                key={s.id}
                href={buildUrl(currentCategory, s.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: isActive ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                  color: isActive ? '#818cf8' : 'var(--text-dim)',
                  border: `1px solid ${isActive ? 'rgba(99, 102, 241, 0.3)' : 'transparent'}`,
                  transition: 'all 0.15s ease'
                }}
              >
                <Icon size={13} />
                <span>{s.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
