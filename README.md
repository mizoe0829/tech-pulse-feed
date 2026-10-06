# ⚡ TechPulse Feed (テックパルス・フィード)

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-16%20(SSR)-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=black)](https://react.dev/)
[![Server Side Rendering](https://img.shields.io/badge/Rendering-Dynamic%20SSR-emerald)](https://github.com/mizoe0829/tech-pulse-feed)
[![Backend Languages](https://img.shields.io/badge/Backend-Go%20%7C%20Python%20%7C%20Rust%20%7C%20Rails%20%7C%20Laravel%20%7C%20Spring-orange)](https://github.com/mizoe0829/tech-pulse-feed)
[![License](https://img.shields.io/badge/License-MIT-purple.svg)](LICENSE)

> **ド直球なServer-Side Rendering (SSR) で動く、HackerNews風テックフィード & パーソナライズ推薦リーダー**  
> **Go / Python / Rust / Rails / Laravel / Spring Boot / TypeScript などのサーバーサイド主要言語・フレームワークを網羅**

---

## 💡 プロジェクト概要

「いまエンジニア界隈で話題の技術トレンド」を高速にキャッチアップできるモダンなテックニュースリーダーです。

単なる記事一覧ではなく、**「読者が関心を持つ言語・フレームワーク・技術スタックを分析し、最適な記事をリアルタイムに優先表示する推薦エンジン」** を搭載しています。

---

## ✨ 主な機能

### 1. 🚀 ド直球な Server-Side Rendering (SSR)
- **オンデマンド動的SSR (`ƒ Dynamic`)**:
  - `/?topic=backend&sort=for_you&q=fastapi` 等のURLクエリパラメータをサーバー側で直接受け取り、サーバー上でフィルタリングと推薦スコアリングを実行して完全なHTMLを一瞬で返却。
  - クライアント側でのローディング待ち（ウォーターフォール）がゼロで、初期表示が爆速。
  - 検索エンジンにもインデックスされやすいSEOフレンドリーな構造。

### 2. 🗄 サーバーサイド主要言語 & フレームワークを完全網羅
フロントエンドやAI領域だけでなく、実務のバックエンド開発で主役となる言語・FWをフルサポート：

| 言語 | 代表フレームワーク / 関連技術 |
| :--- | :--- |
| **Go** | `Go (Golang)`, `Gin`, `Echo`, `Fiber`, `gRPC` |
| **Python** | `Python`, `FastAPI`, `Django`, `Flask` |
| **Rust** | `Rust`, `Axum`, `Actix-web`, `Tokio` |
| **Ruby** | `Ruby`, `Ruby on Rails (Rails 8 Solid Queue/Cache)` |
| **PHP** | `PHP`, `Laravel (Laravel 11)`, `Laravel Octane` |
| **Java / Kotlin** | `Java (Java 23)`, `Spring Boot 3.4 (Virtual Threads)`, `Kotlin`, `Ktor` |
| **C#** | `C#`, `ASP.NET Core` |
| **Node.js / TS** | `NestJS`, `Hono`, `Fastify`, `Express` |
| **DB / Infra** | `PostgreSQL`, `MySQL`, `Redis`, `Cloudflare Edge`, `Docker` |

### 3. 🎯 技術好みのパーソナライズ分析・推薦エンジン
- **マッチ度スコアリング (0〜99%)**:
  - 記事のタイトル、要約、技術タグ、Upvote数、鮮度をアルゴリズムが分析し、**「✨ 98% マッチ」「✨ 85% マッチ」** といった推薦度と理由をリアルタイム算出。
- **重要度（プライオリティ）の3段階ウェイト調整**:
  - 各スタックの重要度を **`★★★ HIGH (1.4倍)` / `★★ MEDIUM (1.0倍)` / `★ LOW (0.6倍)`** で個別にカスタマイズ可能。
- **自由入力のカスタムタグ追加**:
  - ユーザーが任意の技術名（`Bun`, `Hono`, `FastAPI` 等）を入力して即座に追跡スタックへ追加可能。
- **トップバーでのクイック除外**:
  - 現在追跡中の関心スタックがチップ表示され、`×` ボタンで手軽に除外・再計算。

### 4. ⚡ ワンクリック「プロファイル・プリセット」
エンジニアのロールや志向に合わせたプリセットを標準搭載：

- **TS / Next.js フルスタック**: TypeScript, Next.js, React, SSR, Hono, PostgreSQL...
- **Go / マイクロサービス基盤**: Go, Gin, Echo, gRPC, Docker, PostgreSQL...
- **Python / FastAPI ＆ AIバックエンド**: Python, FastAPI, AI Agent, LLM, RAG...
- **Rust / 高速バックエンド (Axum)**: Rust, Axum, Web Performance, Edge, PostgreSQL...
- **Rails / Laravel Webアプリケーション**: Ruby on Rails, Laravel, PHP, MySQL, Docker...
- **Java (Spring Boot) / 大規模分散基盤**: Java, Spring Boot, Kotlin, DDD, Microservices...

### 5. 📖 要約3点まとめ (Key Takeaways) リーダー
- 長文記事を開く前に、要点を箇条書き3点で即座に把握できるインラインモーダル。
- Upvote（応援投票）およびブックマーク保存機能完備。

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

## 📁 ディレクトリ構成

```text
tech-pulse-feed/
├── src/
│   ├── app/
│   │   ├── globals.css          # Vanilla CSS デザインシステム (Glassmorphism)
│   │   ├── layout.tsx           # SEO メタデータ & ルートレイアウト
│   │   └── page.tsx             # サーバーコンポーネント (オンデマンド動的SSR)
│   ├── components/
│   │   ├── Navbar.tsx           # ブランドロゴ & SSR検索フォーム
│   │   ├── FeedTabs.tsx         # カテゴリ・ソートのSSRリンクリスト
│   │   ├── ArticleCard.tsx      # マッチ度バッジ・Upvote・要点閲覧
│   │   ├── ArticleModal.tsx     # 要点3点まとめインラインリーダー
│   │   ├── PersonalizeModal.tsx # 関心スタック・重要度・カスタムタグ設定
│   │   └── ClientFeedContainer.tsx # クライアント状態管理 & 動的再スコアリング
│   ├── data/
│   │   └── articles.ts          # 各バックエンド言語・FWの最新実録テック記事データ
│   ├── lib/
│   │   └── recommendation.ts    # 推薦スコアリングアルゴリズム & プリセット定義
│   └── types/
│       └── feed.ts              # TypeScript 型定義 (Article, Profile, Priority)
├── package.json
└── README.md
```

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
