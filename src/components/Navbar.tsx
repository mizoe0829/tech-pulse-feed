import React from 'react';
import { Newspaper, Sparkles, SlidersHorizontal, Search } from 'lucide-react';

interface NavbarProps {
  query: string;
  onOpenPersonalizeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ query, onOpenPersonalizeModal }) => {
  return (
    <header style={{
      borderBottom: '1px solid var(--border-light)',
      background: 'rgba(9, 12, 16, 0.85)',
      backdropFilter: 'blur(20px)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '12px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      flexWrap: 'wrap'
    }}>
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #ff6600, #ff8533)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontWeight: 800,
          fontSize: '1.1rem',
          boxShadow: '0 0 16px rgba(255, 102, 0, 0.35)'
        }}>
          P
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <h1 style={{ fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.02em', color: '#fff' }}>
              TechPulse Feed
            </h1>
            <span style={{
              fontSize: '0.65rem',
              fontWeight: 700,
              padding: '2px 6px',
              borderRadius: '4px',
              background: 'rgba(99, 102, 241, 0.15)',
              color: '#818cf8',
              border: '1px solid rgba(99, 102, 241, 0.3)'
            }}>
              Next.js 15 SSR
            </span>
          </div>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-dim)' }}>
            HackerNews風 テックフィード & パーソナライズ推薦リーダー
          </p>
        </div>
      </div>

      {/* Search Input (SSR friendly form) */}
      <form
        method="GET"
        style={{
          display: 'flex',
          alignItems: 'center',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-light)',
          borderRadius: 'var(--radius-md)',
          padding: '4px 12px',
          maxWidth: '340px',
          width: '100%',
          gap: '8px'
        }}
      >
        <Search size={15} color="var(--text-dim)" />
        <input
          type="text"
          name="q"
          defaultValue={query}
          placeholder="キーワード・技術タグ検索..."
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-main)',
            fontSize: '0.8rem',
            width: '100%',
            outline: 'none'
          }}
        />
      </form>

      {/* Profile & Customization Button */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button
          className="btn btn-sm"
          onClick={onOpenPersonalizeModal}
          style={{
            background: 'rgba(168, 85, 247, 0.12)',
            borderColor: 'rgba(168, 85, 247, 0.35)',
            color: '#c084fc'
          }}
        >
          <Sparkles size={14} color="#c084fc" />
          <span>好み・関心トピック設定</span>
        </button>
      </div>
    </header>
  );
};
