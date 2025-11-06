# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm install
```

## Local Development

### クイックスタート（記事取得 + 開発サーバー起動）

```bash
npm run dev
```

このコマンドは以下を自動実行します：
1. blog-articlesリポジトリから最新の記事を取得
2. 開発サーバーを起動してブラウザを開く

変更はライブでリロードされます。

### 開発サーバーのみ起動

```bash
npm start
```

記事を取得せずに開発サーバーのみ起動します。

## Blog Articles Management

ブログ記事は別のプライベートリポジトリで管理されています。

### 初回セットアップ

1. **blog-articlesリポジトリを作成**
   - 詳細な手順は `scripts/blog-articles-template/SETUP.md` を参照

2. **環境変数を設定**
   ```bash
   cp .env.example .env
   ```
   
   `.env` ファイルを編集して以下を設定：
   ```env
   GITHUB_TOKEN=your_github_token
   ARTICLES_REPO_OWNER=your_username
   ARTICLES_REPO_NAME=blog-articles
   ARTICLES_REPO_BRANCH=main
   ```

3. **記事を取得**
   ```bash
   npm run fetch-articles
   ```

### 記事の追加・更新

記事を更新するには、`blog-articles` リポジトリで以下を実行：

1. `articles/` ディレクトリに新しいMarkdownファイルを追加
2. `meta.json` に記事のメタデータを追加
3. コミット＆プッシュ

メインサイトをビルドすると、自動的に最新の記事が取得されます。

## Build

### ビルドのみ

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

**Note:** ビルド前に自動的に `npm run fetch-articles` が実行され、最新の記事が取得されます。

### ビルド + プレビュー（記事取得 + ビルド + 起動）

```bash
npm run build-and-serve
```

このコマンドは以下を自動実行します：
1. blog-articlesリポジトリから最新の記事を取得
2. 本番用にビルド
3. ビルドしたサイトをローカルでプレビュー

ビルド結果を確認するのに便利です。

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
