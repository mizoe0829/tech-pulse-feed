import React from 'react';
import type { UserInterestProfile } from '../types/feed';
import { X, Sparkles, Check, Sliders } from 'lucide-react';

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
  if (!isOpen) return null;

  const toggleTopic = (index: number) => {
    const nextTopics = [...profile.topics];
    nextTopics[index] = {
      ...nextTopics[index],
      active: !nextTopics[index].active
    };
    onUpdateProfile({
      ...profile,
      topics: nextTopics
    });
  };

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
        maxWidth: '560px',
        padding: '24px 28px',
        background: 'var(--bg-secondary)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 24px 48px rgba(0,0,0,0.8)'
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={18} color="#c084fc" />
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#fff' }}>
              好み・関心トピックのパーソナライズ設定
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'transparent', border: 'none', color: 'var(--text-dim)', cursor: 'pointer' }}
          >
            <X size={18} />
          </button>
        </div>

        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
          関心のある技術スタックを選択すると、推薦アルゴリズムが記事内容（タイトル・要約・技術タグ）を分析し、
          <strong>「あなたへのおすすめ」</strong> フィードの並び順とマッチ度（%）を動的に再計算します。
        </p>

        {/* Topic Toggle Grid */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-dim)', marginBottom: '8px' }}>
            関心のある技術トピック（現在 {activeCount} 個 選択中）:
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '8px' }}>
            {profile.topics.map((topic, idx) => {
              const isActive = topic.active;
              return (
                <button
                  key={topic.name}
                  onClick={() => toggleTopic(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-md)',
                    background: isActive ? 'rgba(99, 102, 241, 0.18)' : 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${isActive ? 'var(--accent-indigo)' : 'var(--border-light)'}`,
                    color: isActive ? '#fff' : 'var(--text-dim)',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    fontSize: '0.825rem',
                    fontWeight: 600
                  }}
                >
                  <span>{topic.name}</span>
                  {isActive && <Check size={14} color="var(--accent-indigo)" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Engineering Level */}
        <div style={{ marginBottom: '24px' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-dim)', marginBottom: '8px' }}>
            現在のエンジニアリング志向・レイヤー:
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {(['Beginner', 'Intermediate', 'Senior / Lead'] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => onUpdateProfile({ ...profile, level: lvl })}
                style={{
                  flex: 1,
                  padding: '6px 10px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  background: profile.level === lvl ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.03)',
                  color: profile.level === lvl ? '#fff' : 'var(--text-dim)',
                  border: `1px solid ${profile.level === lvl ? 'var(--accent-purple)' : 'var(--border-light)'}`,
                  cursor: 'pointer'
                }}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button className="btn btn-primary" onClick={onClose}>
            <span>設定を反映して閉じる</span>
          </button>
        </div>
      </div>
    </div>
  );
};
