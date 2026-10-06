import React, { useState } from 'react';
import type { UserInterestProfile, StackCategory, StackPriority, InterestTopic } from '../types/feed';
import { PROFILE_PRESETS } from '../lib/recommendation';
import { X, Sparkles, Plus, Check, RotateCcw, Star, Tag } from 'lucide-react';

interface PersonalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserInterestProfile;
  onUpdateProfile: (newProfile: UserInterestProfile) => void;
}

export const PersonalizeModal: React.FC<PersonalizeModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateProfile
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [customInput, setCustomInput] = useState<string>('');

  if (!isOpen) return null;

  const categories: { id: string; label: string }[] = [
    { id: 'all', label: 'すべて' },
    { id: 'Frontend', label: 'Frontend' },
    { id: 'AI / LLM', label: 'AI / LLM' },
    { id: 'Backend / DB', label: 'Backend / DB' },
    { id: 'DevOps / Cloud', label: 'Cloud / DevOps' },
    { id: 'Architecture', label: 'Architecture' }
  ];

  // Toggle active/inactive
  const toggleTopic = (name: string) => {
    const nextTopics = profile.topics.map((t) =>
      t.name === name ? { ...t, active: !t.active } : t
    );
    onUpdateProfile({ ...profile, topics: nextTopics, presetName: undefined });
  };

  // Cycle priority: HIGH -> MEDIUM -> LOW -> HIGH
  const cyclePriority = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const nextTopics = profile.topics.map((t) => {
      if (t.name === name) {
        const nextPriority: StackPriority =
          t.priority === 'HIGH' ? 'MEDIUM' : t.priority === 'MEDIUM' ? 'LOW' : 'HIGH';
        return { ...t, priority: nextPriority };
      }
      return t;
    });
    onUpdateProfile({ ...profile, topics: nextTopics });
  };

  // Add custom user tag
  const handleAddCustomTopic = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const trimmed = customInput.trim();
    if (!trimmed) return;

    if (profile.topics.some((t) => t.name.toLowerCase() === trimmed.toLowerCase())) {
      setCustomInput('');
      return;
    }

    const newTopic: InterestTopic = {
      name: trimmed,
      category: 'Frontend',
      priority: 'HIGH',
      active: true,
      isCustom: true
    };

    onUpdateProfile({
      ...profile,
      topics: [newTopic, ...profile.topics],
      presetName: undefined
    });
    setCustomInput('');
  };

  // Apply quick preset
  const handleApplyPreset = (presetName: string) => {
    const preset = PROFILE_PRESETS.find((p) => p.name === presetName);
    if (!preset) return;

    const nextTopics = profile.topics.map((t) => ({
      ...t,
      active: preset.topicNames.includes(t.name)
    }));

    onUpdateProfile({
      ...profile,
      presetName: preset.name,
      topics: nextTopics
    });
  };

  const filteredTopics = profile.topics.filter(
    (t) => selectedCategory === 'all' || t.category === selectedCategory
  );

  const activeCount = profile.topics.filter((t) => t.active).length;

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
        maxWidth: '720px',
        padding: '24px 28px',
        background: 'var(--bg-secondary)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 24px 48px rgba(0,0,0,0.8)',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={20} color="#c084fc" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff' }}>
              関心スタック ＆ パーソナライズ設定
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer', padding: '4px' }}
          >
            <X size={20} />
          </button>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
          選択した技術スタックと重要度（★★★/★★/★）に基づき、
          記事のタイトル・要約・技術タグを分析して<strong>「あなたへのおすすめ」</strong>スコアをリアルタイム計算します。
        </p>

        {/* Quick Profile Presets */}
        <div style={{ marginBottom: '18px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-dim)', marginBottom: '6px' }}>
            クイック・プロファイル・プリセット:
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {PROFILE_PRESETS.map((p) => {
              const isSelected = profile.presetName === p.name;
              return (
                <button
                  key={p.name}
                  onClick={() => handleApplyPreset(p.name)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    background: isSelected ? 'var(--accent-indigo)' : 'rgba(255, 255, 255, 0.04)',
                    color: isSelected ? '#fff' : 'var(--text-main)',
                    border: `1px solid ${isSelected ? 'var(--accent-indigo)' : 'var(--border-light)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                  title={p.description}
                >
                  {p.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom Tag Input Form */}
        <form onSubmit={handleAddCustomTopic} style={{ display: 'flex', gap: '8px', marginBottom: '18px' }}>
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="任意の技術スタックを追加（例: Bun, Hono, FastAPI, GraphQL...）"
            style={{
              flex: 1,
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-md)',
              padding: '8px 14px',
              color: '#fff',
              fontSize: '0.825rem',
              outline: 'none'
            }}
          />
          <button type="submit" className="btn btn-sm" style={{ background: 'rgba(99, 102, 241, 0.2)', borderColor: 'var(--accent-indigo)' }}>
            <Plus size={14} color="var(--accent-indigo)" />
            <span>タグ追加</span>
          </button>
        </form>

        {/* Category Filter Tabs for Topic Selection */}
        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px', overflowX: 'auto', paddingBottom: '2px' }}>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              style={{
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem',
                fontWeight: 600,
                background: selectedCategory === c.id ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                color: selectedCategory === c.id ? '#fff' : 'var(--text-dim)',
                border: '1px solid transparent',
                cursor: 'pointer'
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Topics Chips Grid */}
        <div style={{
          maxHeight: '260px',
          overflowY: 'auto',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-md)',
          padding: '14px',
          background: 'rgba(0, 0, 0, 0.2)',
          marginBottom: '20px'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '8px' }}>
            {filteredTopics.map((topic) => {
              const isActive = topic.active;
              const priorityColor =
                topic.priority === 'HIGH' ? '#f59e0b' : topic.priority === 'MEDIUM' ? '#3b82f6' : '#9ca3af';
              const priorityStars =
                topic.priority === 'HIGH' ? '★★★' : topic.priority === 'MEDIUM' ? '★★' : '★';

              return (
                <div
                  key={topic.name}
                  onClick={() => toggleTopic(topic.name)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                    borderRadius: 'var(--radius-sm)',
                    background: isActive ? 'rgba(99, 102, 241, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${isActive ? 'var(--accent-indigo)' : 'rgba(255, 255, 255, 0.06)'}`,
                    color: isActive ? '#fff' : 'var(--text-dim)',
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflow: 'hidden' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      borderRadius: '4px',
                      border: `1px solid ${isActive ? 'var(--accent-indigo)' : 'var(--border-light)'}`,
                      background: isActive ? 'var(--accent-indigo)' : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {isActive && <Check size={11} color="#fff" />}
                    </div>
                    <span style={{ fontSize: '0.8rem', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {topic.name}
                    </span>
                  </div>

                  {isActive && (
                    <button
                      onClick={(e) => cyclePriority(topic.name, e)}
                      title="重要度を変更 (高/中/低)"
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: priorityColor,
                        fontSize: '0.68rem',
                        cursor: 'pointer',
                        fontWeight: 700,
                        padding: '1px 3px'
                      }}
                    >
                      {priorityStars}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
            現在 <strong>{activeCount}</strong> 個のスタックを追跡中
          </span>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button className="btn btn-primary" onClick={onClose}>
              <span>設定を反映して閉じる</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
