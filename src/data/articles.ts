import type { TechArticle } from '../types/feed';

export const TECH_ARTICLES: TechArticle[] = [
  // --- Backend / Server-side Special Highlights ---
  {
    id: 'art-101',
    title: 'Go 1.24の新機能とEcho/Ginによる高スループットマイクロサービス設計',
    summary: 'Go 1.24で強化されたSwiss Tableベースのマップ最適化や型エイリアスをフル活用。EchoやGin、gRPCを用いた毎秒10万リクエストを捌く分散APIの設計プラクティス。',
    keyTakeaways: [
      'sync.Poolとバッファ再利用によるゼロアロケーションHTTPハンドラ設計',
      'コンテキスト（context.Context）伝播とタイムアウト・サーキットブレーカーの堅牢化',
      'OpenTelemetryを用いたGo分散トレーシングとメトリクス監視'
    ],
    url: 'https://go.dev/blog/go1.24',
    sourceName: 'The Go Blog',
    sourceDomain: 'go.dev',
    publishedAt: '2026-10-06 09:00',
    timeAgo: '30分前',
    upvotes: 540,
    commentsCount: 76,
    readTimeMin: 8,
    category: 'backend',
    tags: ['Go', 'Gin', 'Echo', 'gRPC', 'Microservices', 'Backend'],
    author: 'Austin Clements'
  },
  {
    id: 'art-102',
    title: 'FastAPIとPydantic v2で作る型安全なAIバックエンド基盤: 非同期ストリーミングと並行処理',
    summary: '生成AIプロダクト（LLM連携）のバックエンド標準となったFastAPI。Pydantic v2のRustコアによる高速バリデーション、AsyncIO、SSEストリーミングの実装ノウハウ。',
    keyTakeaways: [
      'Pydantic v2への移行によるJSONシリアライズ速度の5〜10倍高速化',
      'SSE (Server-Sent Events) を用いたLLMトークンストリーミングの並行コネクション管理',
      'Celery/Redisと組み合わせた重いAIジョブの非同期キュー設計'
    ],
    url: 'https://fastapi.tiangolo.com/newsletter/',
    sourceName: 'FastAPI Official',
    sourceDomain: 'tiangolo.com',
    publishedAt: '2026-10-06 07:45',
    timeAgo: '2時間前',
    upvotes: 495,
    commentsCount: 68,
    readTimeMin: 7,
    category: 'backend',
    tags: ['Python', 'FastAPI', 'AI Agent', 'LLM', 'PostgreSQL', 'Backend'],
    author: 'Sebastián Ramírez'
  },
  {
    id: 'art-103',
    title: 'Rust (Axum) による超低遅延APIゲートウェイ構築: TokioとTowerミドルウェアの実践',
    summary: 'ガベージコレクションのないRustで組むWebバックエンド。Axumのエクストラクター（Extractor）機構と型安全なルーティングで、P99レイテンシ1ms未満を達成する。',
    keyTakeaways: [
      'Towerサービス抽象による認証・レートリミット・リトライミドルウェアの合成',
      'Tokio非同期ランタイムにおけるブロッキング処理の適切なアイソレーション',
      'SQLxを用いたコンパイル時SQL検証とコネクションプーリング'
    ],
    url: 'https://tokio.rs/blog/axum-architecture',
    sourceName: 'Tokio.rs / Rust News',
    sourceDomain: 'tokio.rs',
    publishedAt: '2026-10-06 05:30',
    timeAgo: '4時間前',
    upvotes: 612,
    commentsCount: 94,
    readTimeMin: 10,
    category: 'backend',
    tags: ['Rust', 'Axum', 'Backend', 'Performance', 'Architecture'],
    author: 'David Pedersen'
  },
  {
    id: 'art-104',
    title: 'Ruby on Rails 8 正式リリース: Solid Queue & Solid CacheによるRedis脱却と新開発体験',
    summary: 'DHH率いるRailsチームが提唱する「外部ミドルウェアの最小化」。Redisを使わずSQLite/MySQL/PostgreSQLだけで完結するSolidエコシステムと、Kamalデプロイの統合。',
    keyTakeaways: [
      'Solid QueueとSolid Cacheによるインフラ運用の劇的シンプル化',
      'PropshaftアセットパイプラインとImportmapの洗練',
      '小〜中規模SaaSにおける「1台のVPSで月商数千万円」を支える運用論'
    ],
    url: 'https://rubyonrails.org/2026/rails-8-release',
    sourceName: 'Ruby on Rails Official',
    sourceDomain: 'rubyonrails.org',
    publishedAt: '2026-10-05 21:00',
    timeAgo: '12時間前',
    upvotes: 480,
    commentsCount: 89,
    readTimeMin: 9,
    category: 'backend',
    tags: ['Ruby on Rails', 'Ruby', 'Backend', 'Kamal', 'PostgreSQL'],
    author: 'David Heinemeier Hansson'
  },
  {
    id: 'art-105',
    title: 'Laravel 11のスリム化アーキテクチャとLaravel Octaneによる10倍高速化',
    summary: 'PHPのモダンWebを牽引するLaravel 11。設定ファイルの統合・軽量化と、Swoole/RoadRunner上でアプリケーションをメモリ常駐させるLaravel Octaneの実践ガイド。',
    keyTakeaways: [
      'Laravel 11の最小限化されたディレクトリ構造とミドルウェア定義の簡素化',
      'Octane導入によるフレームワーク起動オーバーヘッドのゼロ化（リクエスト応答時間5ms台）',
      'Eloquent ORMのN+1問題検出とPrismによるAI連携'
    ],
    url: 'https://laravel-news.com/laravel-11-octane-guide',
    sourceName: 'Laravel News',
    sourceDomain: 'laravel-news.com',
    publishedAt: '2026-10-05 19:30',
    timeAgo: '14時間前',
    upvotes: 388,
    commentsCount: 51,
    readTimeMin: 8,
    category: 'backend',
    tags: ['Laravel', 'PHP', 'Backend', 'MySQL', 'Performance'],
    author: 'Taylor Otwell'
  },
  {
    id: 'art-106',
    title: 'Spring Boot 3.4とJava仮想スレッド (Virtual Threads) がもたらすI/O多重化革命',
    summary: 'Java 21以降のProject Loom（仮想スレッド）がSpring Boot 3.4で完全標準化。Reactiveプログラミング（WebFlux）の難解さを必要とせず、命令型コードのまま10万並行I/Oを実現。',
    keyTakeaways: [
      'Tomcatサーブレットコンテナの仮想スレッドエグゼキューター化（設定1行で有効化）',
      'JDBCドライバーやサードパーティ通信におけるスレッドピニング（Pinning）問題の回避',
      'Spring Securityおよびドメイン駆動設計（DDD）レイヤードアーキテクチャの型安全性'
    ],
    url: 'https://spring.io/blog/spring-boot-virtual-threads',
    sourceName: 'Spring.io Official',
    sourceDomain: 'spring.io',
    publishedAt: '2026-10-05 16:00',
    timeAgo: '17時間前',
    upvotes: 430,
    commentsCount: 65,
    readTimeMin: 11,
    category: 'backend',
    tags: ['Java', 'Spring Boot', 'Kotlin', 'Backend', 'Architecture'],
    author: 'Juergen Hoeller'
  },
  {
    id: 'art-107',
    title: 'TypeScriptバックエンドの選定: NestJS、Hono、Fastifyの使い分け基準とBFF設計',
    summary: 'Node.js/TypeScriptエコシステムにおけるサーバーサイドフレームワークの比較。エンタープライズDIを備えたNestJSと、エッジ・超軽量Web標準のHonoの適材適所。',
    keyTakeaways: [
      'NestJSのモジュール設計とOpenAPI/Swagger自動生成による大規模開発の統制',
      'HonoのRPC機能によるクライアント・サーバー間のエンドツーエンド完全型推論',
      'Next.js BFFレイヤーとの責務分離とマイクロサービス間通信'
    ],
    url: 'https://hono.dev/blog/fullstack-typescript',
    sourceName: 'TypeScript Backend Hub',
    sourceDomain: 'hono.dev',
    publishedAt: '2026-10-05 13:00',
    timeAgo: '20時間前',
    upvotes: 565,
    commentsCount: 82,
    readTimeMin: 7,
    category: 'backend',
    tags: ['TypeScript', 'NestJS', 'Hono', 'Node.js', 'SSR', 'Backend'],
    author: 'Yusuke Wada'
  },

  // --- Classic Core Articles (Next.js, AI, DB, Cloud) ---
  {
    id: 'art-001',
    title: 'Next.js 15 App Router 完全攻略: Partial PrerenderingとServer Actionsの設計プラクティス',
    summary: 'Next.js 15で導入されたPPR (Partial Prerendering) とReact 19 Server Componentsを組み合わせ、初回レスポンス速度を極限まで高めるアーキテクチャパターンを徹底解説。',
    keyTakeaways: [
      '静的シェルと動的ストリーミングの境界線をSuspenseで正しく設計する手法',
      'Server Actionsによる安全なデータミューテーションとキャッシュ再検証 (revalidatePath)',
      'クライアントウォーターフォールを完全に防ぐデータフェッチ戦略'
    ],
    url: 'https://nextjs.org/blog/next-15',
    sourceName: 'Vercel Engineering',
    sourceDomain: 'nextjs.org',
    publishedAt: '2026-10-06 08:30',
    timeAgo: '1時間前',
    upvotes: 342,
    commentsCount: 48,
    readTimeMin: 7,
    category: 'frontend',
    tags: ['Next.js', 'TypeScript', 'React', 'SSR', 'Performance'],
    author: 'Lee Robinson'
  },
  {
    id: 'art-002',
    title: 'TypeScript 6.0の新機能とverbatimModuleSyntaxの徹底理解',
    summary: '型システムの最新アップデート、型安全性の更なる強化、インポート時の構文最適化とトランスパイル高速化に関する詳細ガイド。',
    keyTakeaways: [
      'verbatimModuleSyntax導入によるバンドラーと型チェッカーの責務分離',
      '型レベル関数と型推論の高速化（コンパイル速度30%向上）',
      'モダンエコシステムにおけるtsconfigのベストプラクティス'
    ],
    url: 'https://devblogs.microsoft.com/typescript/',
    sourceName: 'TypeScript Official',
    sourceDomain: 'microsoft.com',
    publishedAt: '2026-10-06 06:15',
    timeAgo: '3時間前',
    upvotes: 489,
    commentsCount: 62,
    readTimeMin: 6,
    category: 'frontend',
    tags: ['TypeScript', 'JavaScript', 'Language', 'Architecture'],
    author: 'Daniel Rosenwasser'
  },
  {
    id: 'art-003',
    title: '自律型AIエージェントのプロダクション運用: ReActループのレイテンシとフォールバック設計',
    summary: 'LLMのツール呼び出し（Tool Calling）が失敗した際に、自己修復（Self-healing）させて確実にユーザーへ安心を届けるための分散トレースとオブザーバビリティ。',
    keyTakeaways: [
      'JSON Schemaバリデーションエラー時のリトライおよびプロンプト自己修正ループ',
      'OpenTelemetryとLangfuseによるエージェント実行ステップの可視化',
      '長時間のツール実行に対するストリーミング通知とUXデザイン'
    ],
    url: 'https://arxiv.org/abs/react-agent-patterns',
    sourceName: 'AI Systems Journal',
    sourceDomain: 'arxiv.org',
    publishedAt: '2026-10-06 04:00',
    timeAgo: '5時間前',
    upvotes: 512,
    commentsCount: 91,
    readTimeMin: 10,
    category: 'ai',
    tags: ['AI Agent', 'LLM', 'Observability', 'Python', 'Architecture'],
    author: 'Harrison Chase'
  },
  {
    id: 'art-005',
    title: 'PostgreSQL 17の新機能: インメモリスピル低減と論理レプリケーションの進化',
    summary: '大規模SaaSバックエンドを支えるRDBMSの最新改善。クエリ実行プランの効率化とコネクション枯渇を防ぐ最適化手法。',
    keyTakeaways: [
      'B-Treeインデックスの並行スキャン性能向上',
      'JSONBクエリのJITコンパイル改善によるレイテンシ半減',
      'コネクションプーラー（PgBouncer）との適切なサイジング'
    ],
    url: 'https://www.postgresql.org/about/news/',
    sourceName: 'PostgreSQL Global',
    sourceDomain: 'postgresql.org',
    publishedAt: '2026-10-05 18:30',
    timeAgo: '15時間前',
    upvotes: 275,
    commentsCount: 34,
    readTimeMin: 9,
    category: 'backend',
    tags: ['PostgreSQL', 'Database', 'Backend', 'Performance', 'SQL'],
    author: 'Robert Haas'
  },
  {
    id: 'art-006',
    title: 'Cloudflare Workers & D1で構築するグローバルエッジSSRアーキテクチャ',
    summary: 'オリジンサーバーを持たずに世界数百拠点のエッジでReactコンポーネントをSSRレンダリングし、TTFB 50ms以下を達成する設計手法。',
    keyTakeaways: [
      'エッジ分散SQLite（D1）とHTTPキャッシュのシームレス連携',
      'コールドスタート実質0msを維持するV8アイソレート実行モデル',
      'グローバルステート管理とレプリケーション競合の回避'
    ],
    url: 'https://blog.cloudflare.com/',
    sourceName: 'Cloudflare Blog',
    sourceDomain: 'cloudflare.com',
    publishedAt: '2026-10-05 14:00',
    timeAgo: '19時間前',
    upvotes: 394,
    commentsCount: 52,
    readTimeMin: 7,
    category: 'devops',
    tags: ['Cloudflare', 'Edge', 'SSR', 'TypeScript', 'DevOps'],
    author: 'Kenton Varda'
  },
  {
    id: 'art-008',
    title: 'ベクトル検索 (Vector RAG) の精度改善: ハイブリッド検索とリランキング (Reranking) の実践',
    summary: '単純なCosine類似度検索から脱却し、BM25キーワード検索＋密ベクトル埋め込み＋Cohereリランカーを組み合わせた高精度社内検索エンジンの作り方。',
    keyTakeaways: [
      'ドメイン固有用語（社内規定・法務用語）の取りこぼしを防ぐハイブリッド検索',
      'Reciprocal Rank Fusion (RRF) によるスコア統合アルゴリズム',
      'チャンキングサイズとオーバーラップ率の最適化'
    ],
    url: 'https://qdrant.tech/articles/hybrid-search-rerank/',
    sourceName: 'Qdrant Vector DB',
    sourceDomain: 'qdrant.tech',
    publishedAt: '2026-10-04 20:00',
    timeAgo: '1日前',
    upvotes: 310,
    commentsCount: 29,
    readTimeMin: 11,
    category: 'ai',
    tags: ['RAG', 'Vector Search', 'AI', 'Python', 'LLM'],
    author: 'Andre Zayarni'
  },
  {
    id: 'art-010',
    title: 'KubernetesからKamal 2への移行: 個人開発・小規模SaaSのシンプルなコンテナデプロイ',
    summary: '過剰なインフラ運用の疲弊から脱却。DHH提唱のKamal 2を用いて、VPS 1台からゼロダウンタイムデプロイを実現するシンプルなDevOps。',
    keyTakeaways: [
      'DockerとSSHだけで完結する軽量オーケストレーション',
      'Let’s Encrypt SSL証明書の自動更新とTraefikリバースプロキシ',
      'クラウド利用料を月5万円から月2,000円に圧縮した運用ノウハウ'
    ],
    url: 'https://kamal-deploy.org/',
    sourceName: 'Basecamp / 37signals',
    sourceDomain: '37signals.com',
    publishedAt: '2026-10-04 10:00',
    timeAgo: '1日前',
    upvotes: 560,
    commentsCount: 88,
    readTimeMin: 8,
    category: 'devops',
    tags: ['DevOps', 'Docker', 'Kamal', 'Infrastructure', 'VPS'],
    author: 'David Heinemeier Hansson'
  },
  {
    id: 'art-011',
    title: 'マイクロフロントエンドの終焉とモジュラーモノリスの復権',
    summary: '過剰に分割されたリポジトリと依存関係地獄が生んだ反省。単一リポジトリ内で厳格な境界を持つモジュラーモノリスで開発速度を取り戻す。',
    keyTakeaways: [
      'ネットワーク境界による分散トランザクション・レイテンシの代償',
      'TypeScriptプロジェクト参照 (Project References) による型チェック境界の分離',
      'チームスケールとドメイン駆動設計 (DDD) のバランス'
    ],
    url: 'https://martinfowler.com/articles/modular-monolith.html',
    sourceName: 'Martin Fowler ThoughtWorks',
    sourceDomain: 'martinfowler.com',
    publishedAt: '2026-10-03 16:00',
    timeAgo: '2日前',
    upvotes: 680,
    commentsCount: 142,
    readTimeMin: 12,
    category: 'architecture',
    tags: ['Architecture', 'DDD', 'Monolith', 'TypeScript', 'Clean Code'],
    author: 'Martin Fowler'
  }
];
