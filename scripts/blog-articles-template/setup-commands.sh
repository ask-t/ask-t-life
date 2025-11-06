#!/bin/bash

# ============================================
# blog-articles リポジトリ セットアップスクリプト
# ============================================
# 
# 使い方:
#   1. このファイルを編集して、変数を実際の値に置き換える
#   2. コマンドを1つずつコピー&ペーストして実行
#   または
#   chmod +x setup-commands.sh && ./setup-commands.sh
#
# ============================================

# ============================================
# ⚙️  設定変数（ここを編集してください）
# ============================================

# GitHubユーザー名
GITHUB_USERNAME="YOUR_GITHUB_USERNAME"

# メインプロジェクトのパス
MAIN_PROJECT_PATH="$HOME/Programing/main"

# blog-articlesをクローンする場所
BLOG_ARTICLES_PARENT_DIR="$HOME/Programing"

# ============================================
# ステップ1: blog-articlesをクローン
# ============================================

echo "📥 ステップ1: blog-articlesリポジトリをクローン..."
cd "$BLOG_ARTICLES_PARENT_DIR"
git clone "git@github.com:${GITHUB_USERNAME}/blog-articles.git"
cd blog-articles

# ============================================
# ステップ2: テンプレートファイルをコピー
# ============================================

echo "📋 ステップ2: テンプレートファイルをコピー..."

# meta.jsonをコピー
cp "${MAIN_PROJECT_PATH}/scripts/blog-articles-template/meta.json" .

# .gitignoreをコピー
cp "${MAIN_PROJECT_PATH}/scripts/blog-articles-template/.gitignore" .

# articlesディレクトリをコピー
cp -r "${MAIN_PROJECT_PATH}/scripts/blog-articles-template/articles" .

# READMEをコピー（既存のREADMEがあれば上書き）
cp "${MAIN_PROJECT_PATH}/scripts/blog-articles-template/README.md" .

# ============================================
# ステップ3: ファイル構造を確認
# ============================================

echo ""
echo "✅ ファイル構造:"
ls -la
echo ""
echo "📁 articles ディレクトリの内容:"
ls -la articles/

# ============================================
# ステップ4: Gitにコミット＆プッシュ
# ============================================

echo ""
echo "📤 ステップ4: Gitにコミット＆プッシュ..."

git add .
git commit -m "Initial setup: Add articles, meta.json and documentation"
git push origin main

echo ""
echo "✅ blog-articlesリポジトリのセットアップが完了しました！"
echo ""
echo "============================================"
echo "🔑 次のステップ:"
echo "============================================"
echo ""
echo "1. GitHub Personal Access Tokenを作成:"
echo "   https://github.com/settings/tokens"
echo ""
echo "2. メインプロジェクトの .env ファイルを設定:"
echo "   cd ${MAIN_PROJECT_PATH}"
echo "   cp .env.example .env"
echo "   vim .env"
echo ""
echo "3. 記事取得をテスト:"
echo "   cd ${MAIN_PROJECT_PATH}"
echo "   npm run fetch-articles"
echo ""
echo "4. ビルドして確認:"
echo "   npm run build"
echo ""
echo "============================================"

