# Self Bio

Astro + Tailwind CSS v4で構築した個人プロフィールページ

## 技術スタック

- **[Astro](https://astro.build/)** - 静的サイトジェネレーター
- **[Astro Content Collections](https://docs.astro.build/ja/guides/content-collections/)** - 型安全なコンテンツ管理
- **[Tailwind CSS v4](https://tailwindcss.com/)** - ユーティリティファーストCSSフレームワーク
- **[Zod](https://zod.dev/)** - スキーマ検証
- **TypeScript** - 型安全なコード
- **Cloudflare Pages** - ホスティング・デプロイ

## 特徴

- 🎨 純粋なTailwind CSSユーティリティ（CSS90%削減）
- 📱 完全レスポンシブデザイン
- 🧩 コンポーネントベースアーキテクチャ
- 📊 Content Collections + Zodスキーマで型安全なデータ管理
- 🔒 セキュリティヘッダー（CSP、HSTS等）完備
- 🖼️ OGP画像の動的生成（astro-og-canvas）
- 🏷️ 構造化データ（JSON-LD）でSEO最適化
- 🚀 パフォーマンス最適化（キャッシュ制御、画像最適化）
- 🔄 ブログフィード動的統合
- 📦 CDNベースの技術スタックアイコン
- ✅ GitHub Actions CI/CD

## ディレクトリ構成

```text
/
├── .github/
│   └── workflows/       # GitHub Actions CI/CD
├── public/
│   ├── _headers         # セキュリティヘッダー・キャッシュ制御
│   └── images/          # 静的画像（アバター、ファビコン）
├── src/
│   ├── components/      # Astroコンポーネント
│   │   ├── ui/         # 再利用可能UIコンポーネント
│   │   └── *.astro     # ページセクション
│   ├── content/         # Content Collections（型安全なデータ）
│   │   ├── config.ts   # Zodスキーマ定義
│   │   ├── profile/    # プロフィール情報
│   │   ├── links/      # ソーシャルリンク
│   │   ├── services/   # 提供サービス
│   │   └── tech-stack/ # 技術スタック
│   ├── layouts/         # ページレイアウト
│   ├── pages/           # ルート
│   │   ├── index.astro
│   │   └── [...route].png.ts  # OGP画像生成
│   └── styles/          # グローバルCSS
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

### プロフィール情報の更新

`src/content/profile/main.json` を編集:

```json
{
  "name": "あなたの名前",
  "title": "あなたの肩書き",
  "subtitle": "職業・役職",
  "description": "自己紹介文",
  ...
}
```

### ソーシャルリンクの追加・変更

`src/content/links/` ディレクトリに新しいJSONファイルを追加:

```json
{
  "name": "サービス名",
  "url": "https://example.com/your-profile",
  "displayUrl": "example.com/your-profile",
  "icon": "SVG path data",
  "rel": "me"
}
```

スキーマ定義は `src/content/config.ts` で確認できます。

### サービス一覧の更新

`src/content/services/` ディレクトリ内のJSONファイルを編集。

### 技術スタックの更新

`src/content/tech-stack/` ディレクトリ内のJSONファイルを編集。

アイコンは以下のCDNから自動取得:
- [Simple Icons](https://simpleicons.org/)
- [Skill Icons](https://skillicons.dev/)

## データ検証

Content Collectionsを使用しているため、データの整合性はビルド時に自動検証されます。

- URLフォーマットの検証
- 必須フィールドのチェック
- 型の整合性確認

スキーマに違反するデータがあるとビルドが失敗するため、データの破綻を防げます。

## セキュリティ

以下のセキュリティヘッダーを実装（`public/_headers`）:

- Content-Security-Policy（CSP）
- Strict-Transport-Security（HSTS）
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## ライセンス

© 2026 Minoru Kitayama
