# Self Bio

Astro + Tailwind CSS v4で構築した個人プロフィールページ

## 技術スタック

- **[Astro](https://astro.build/)** - 静的サイトジェネレーター
- **[Tailwind CSS v4](https://tailwindcss.com/)** - ユーティリティファーストCSSフレームワーク
- **TypeScript** - 型安全なデータ管理
- **Cloudflare Pages** - ホスティング・デプロイ

## 特徴

- 🎨 純粋なTailwind CSSユーティリティ（CSS90%削減）
- 📱 完全レスポンシブデザイン
- 🧩 コンポーネントベースアーキテクチャ
- 📊 TypeScriptデータファイルで簡単コンテンツ管理
- 🚀 パフォーマンス最適化
- 🔄 ブログフィード動的統合
- 📦 CDNベースの技術スタックアイコン

## ディレクトリ構成

```text
/
├── public/              # 静的アセット（画像、ファビコン）
├── src/
│   ├── components/      # Astroコンポーネント
│   │   ├── ui/         # 再利用可能UIコンポーネント
│   │   └── *.astro     # ページセクション
│   ├── data/           # TypeScriptデータファイル
│   │   ├── siteConfig.ts
│   │   ├── services.ts
│   │   ├── techStack.ts
│   │   └── links.ts
│   ├── layouts/        # ページレイアウト
│   ├── pages/          # ルート
│   └── styles/         # グローバルCSS
└── package.json
```

## 開発

依存関係のインストール:

```bash
npm install
```

ローカル開発サーバー起動:

```bash
npm run dev
```

本番ビルド:

```bash
npm run build
```

本番ビルドプレビュー:

```bash
npm run preview
```

## デプロイ

Cloudflare Pagesで以下の設定でデプロイ:

- **ビルドコマンド**: `npm run build`
- **ビルド出力ディレクトリ**: `/dist`
- **Node.jsバージョン**: 20

## カスタマイズ

### サイト情報の更新

`src/data/siteConfig.ts` を編集:

```typescript
export const siteConfig = {
  name: 'あなたの名前',
  title: 'あなたの肩書き',
  // ... その他の設定
}
```

### サービス一覧の更新

`src/data/services.ts` を編集してサービス一覧を変更。

### 技術スタックの更新

`src/data/techStack.ts` を編集して技術スタックアイコンを変更。

### リンクの更新

`src/data/links.ts` を編集してソーシャルリンクを変更。

## ライセンス

© 2026 Minoru Kitayama
