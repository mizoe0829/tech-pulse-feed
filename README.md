# ⚡ TechPulse Feed (テックパルス・フィード)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15%20%2F%2016%20(SSR)-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Server Side Rendering](https://img.shields.io/badge/Rendering-Dynamic%20SSR-emerald)](https://github.com/mizoe0829/tech-pulse-feed)
[![License](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)

> **ド直球なServer-Side Rendering (SSR) で動く、HackerNews風テックフィード & パーソナライズ推薦リーダー**

---

## 💡 プロジェクト概要

「いまエンジニア界隈で話題の技術トレンド」を高速にキャッチアップできるモダンなテックニュースリーダーです。

単なるRSS一覧ではなく、**「読者の技術スタックや関心トピック（TypeScript, Next.js, AI Agent, Rust, DevOps等）を分析し、最適な記事をリアルタイムに優先表示する推薦エンジン」** を搭載しています。

---

## ✨ 主な機能

### 1. 🚀 ド直球な Server-Side Rendering (SSR)
- **オンデマンドSSR (`ƒ Dynamic`)**:
  - `/?topic=ai&sort=for_you&q=typescript` 等のクエリパラメータをサーバー側で即座に解析し、フィルタリングとスコアリングを施した完全なHTMLを返却。
  - クライアント側でのローディング待ち（ウォーターフォール）がなく、初期表示が爆速。
  - 検索エンジンにもインデックスされやすいSEOフレンドリーな構造。

### 2. 🎯 技術好みのパーソナライズ分析・推薦エンジン
- **関心プロファイル分析**:
  - ユーザーが関心を持つ技術スタック（TypeScript, Next.js, AI Agent, LLM, Rust等）とスキルレベルを選択。
- **マッチ度スコアリング (0〜99%)**:
  - 記事のタイトル・要約・技術タグ・反響数（Upvotes）・鮮度を分析し、**「98% マッチ」「85% マッチ」** といった推薦度と理由をリアルタイム算出。
- **「あなたへのおすすめ (For You)」並び替え**:
  - 自分の好みに最も適合する記事が上位に並ぶスマートフィード。

### 3. 📖 要約3点まとめ (Key Takeaways) リーダー
- 長文記事を開く前に、要点を箇条書き3点で把握できるインラインモーダル。
- 原文リンクへのシームレスなジャンプ。

### 4. ⚡ インタラクティブ機能
- Upvote（応援投票）およびブックマーク保存
- キーワード・技術タグのインクリメンタル検索
- カテゴリ別タブ（AI / LLM, フロントエンド, バックエンド, DevOps, アーキテクチャ）

---

## 🛠 技術スタック

| 分類 | 技術 |
| :--- | :--- |
| **言語** | **TypeScript 100%** (厳格な型安全) |
| **フレームワーク** | **Next.js 16 (App Router)** |
| **レンダリング** | **Dynamic Server-Side Rendering (SSR)** |
| **UIライブラリ** | React 19 |
| **スタイリング** | Vanilla CSS (CSS変数によるダークテーマ、Glassmorphism) |
| **アイコン** | Lucide React |

---

## 🚀 ローカル起動方法

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動 (Next.js SSR)
npm run dev
# -> http://localhost:3000 で起動

# プロダクションビルド & SSRルート検証
npm run build

# 本番サーバー起動
npm run start
```

---

## 📄 ライセンス

MIT License
