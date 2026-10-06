import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TechPulse Feed | HackerNews風 テックフィード & パーソナライズ推薦リーダー',
  description: 'Next.js App Router (SSR) によるテックニュース＆トレンドリーダー。ユーザーの関心技術スタックを分析し、最適な記事をリアルタイムに推薦。',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">⚡</text></svg>'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
