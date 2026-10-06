import type { TechArticle } from '../types/feed';

export const TECH_ARTICLES: TechArticle[] = [
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
    id: 'art-004',
    title: 'Rust製ツールが変えたフロントエンドエコシステム: OxlintとRspackのベンチマーク',
    summary: 'JavaScriptからネイティブ言語（Rust）への移行が進むビルドツール群。OxlintやRspackがWebpack/ESLintと比べてなぜ10倍〜50倍高速なのかを検証。',
    keyTakeaways: [
      'マルチスレッドAST走査による超高速静的解析',
      'CI/CDパイプライン実行時間を10分から45秒へ短縮した実例',
      'Node.jsアドオンとWasmのハイブリッド運用のコツ'
    ],
    url: 'https://oxc-project.github.io/',
    sourceName: 'Hacker News Top',
    sourceDomain: 'news.ycombinator.com',
    publishedAt: '2026-10-05 22:00',
    timeAgo: '11時間前',
    upvotes: 628,
    commentsCount: 115,
    readTimeMin: 8,
    category: 'frontend',
    tags: ['Rust', 'Tooling', 'Performance', 'TypeScript'],
    author: 'Boshen Chen'
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
    id: 'art-007',
    title: '小規模開発チームのための「非同期コミュニケーション × AI要約」ワークフロー',
    summary: '毎日30分の同期ミーティングを廃止し、非同期スタンドアップハブとLLMによるブロッカー自動トリアージで開発生産性を1.8倍にした実例。',
    keyTakeaways: [
      'テキストベースの進捗共有によるフォーカス時間の確保',
      'AIがタスク間の依存関係とブロッカーを自動抽出してアラート',
      '心理的安全性を損なわないアバター＆非同期フィード設計'
    ],
    url: 'https://dev.to/engineering-velocity',
    sourceName: 'Dev.to Staff Pick',
    sourceDomain: 'dev.to',
    publishedAt: '2026-10-05 11:20',
    timeAgo: '22時間前',
    upvotes: 421,
    commentsCount: 78,
    readTimeMin: 5,
    category: 'architecture',
    tags: ['Productivity', 'Remote Work', 'AI Agent', 'Team Culture'],
    author: 'Sarah Drasner'
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
    id: 'art-009',
    title: 'Tailwind CSS v4のCSSファースト設計とZero-Configバンドル',
    summary: 'JavaScriptベースの設定ファイル（tailwind.config.js）を廃止し、CSS標準の`@theme`ディレクティブで完結する新しいTailwindの設計思想。',
    keyTakeaways: [
      'Lightning CSSエンジン統合によるビルド速度の飛躍的向上',
      'CSSカスタムプロパティ（CSS変数）との完全同期',
      'コンポーネントライブラリでのクラス衝突解消テクニック'
    ],
    url: 'https://tailwindcss.com/blog/tailwindcss-v4-alpha',
    sourceName: 'Tailwind Labs',
    sourceDomain: 'tailwindcss.com',
    publishedAt: '2026-10-04 15:30',
    timeAgo: '1日前',
    upvotes: 445,
    commentsCount: 56,
    readTimeMin: 6,
    category: 'frontend',
    tags: ['CSS', 'Tailwind', 'Frontend', 'Web Design'],
    author: 'Adam Wathan'
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
  },
  {
    id: 'art-012',
    title: 'ブラウザだけで動くローカルLLM: WebGPUとWebLLMの最前線',
    summary: 'サーバーAPI通信ゼロ・完全プライベートでユーザーのGPUを利用してLlama 3やQwenをブラウザ内実行する最新Webプラットフォーム。',
    keyTakeaways: [
      'WebGPUによるネイティブシェーダー実行とメモリクオータ管理',
      'トークン生成速度 30〜60 tok/s をブラウザ単体で達成',
      'オフラインファースト・機密データ処理アプリへの応用可能性'
    ],
    url: 'https://webllm.mlc.ai/',
    sourceName: 'MLC AI Research',
    sourceDomain: 'mlc.ai',
    publishedAt: '2026-10-03 12:00',
    timeAgo: '2日前',
    upvotes: 412,
    commentsCount: 63,
    readTimeMin: 7,
    category: 'ai',
    tags: ['WebGPU', 'Local LLM', 'AI', 'TypeScript', 'Browser'],
    author: 'Tianqi Chen'
  }
];
