# blog-articles リポジトリ クイックセットアップ

新しく作成した `blog-articles` リポジトリをセットアップするための手順です。
各セクションのコマンドをコピー&ペーストして実行してください。

---

## 📋 前提条件

- [ ] GitHubで `blog-articles` というプライベートリポジトリを作成済み
- [ ] メインプロジェクト（ask-t-main）のセットアップが完了している

---

## 🚀 セットアップ手順

### ステップ1: blog-articlesリポジトリをクローン

```bash
# ホームディレクトリまたは適切な場所で実行
cd ~/Programing  # お好みの場所に変更してください
git clone git@github.com:YOUR_USERNAME/blog-articles.git
cd blog-articles
```

> **注意**: `YOUR_USERNAME` を実際のGitHubユーザー名に置き換えてください

---

### ステップ2: テンプレートファイルをコピー

メインプロジェクトからテンプレートファイルをコピーします：

```bash
# blog-articlesリポジトリのルートで実行

# メインプロジェクトのパスを設定（必要に応じて変更）
MAIN_PROJECT_PATH=~/Programing/main

# テンプレートファイルをコピー
cp $MAIN_PROJECT_PATH/scripts/blog-articles-template/meta.json .
cp $MAIN_PROJECT_PATH/scripts/blog-articles-template/.gitignore .
cp -r $MAIN_PROJECT_PATH/scripts/blog-articles-template/articles .

# READMEを上書き（既存のREADMEがある場合）
cp $MAIN_PROJECT_PATH/scripts/blog-articles-template/README.md .
```

---

### ステップ3: ファイル構造を確認

```bash
# 正しくコピーされたか確認
ls -la
```

以下のような構造になっているはずです：
```
blog-articles/
├── .git/
├── .gitignore
├── README.md
├── meta.json
└── articles/
    ├── 2024-01-building-scalable-react-applications.md
    ├── 2024-01-design-systems-in-practice.md
    └── 2024-01-performance-optimization-techniques.md
```

---

### ステップ4: Gitにコミット＆プッシュ

```bash
# すべてのファイルをステージング
git add .

# コミット
git commit -m "Initial setup: Add articles, meta.json and documentation"

# プッシュ
git push origin main
```

> **注意**: ブランチ名が `master` の場合は `git push origin master` を使用してください

---

### ステップ5: GitHub Personal Access Token を作成

1. https://github.com/settings/tokens にアクセス
2. **"Generate new token (classic)"** をクリック
3. 以下のように設定：
   - **Note**: `blog-articles-access`
   - **Expiration**: `No expiration` (または適切な期限)
   - **Scopes**: ✅ **repo** (Full control of private repositories) にチェック
4. **"Generate token"** をクリック
5. 表示されたトークンをコピー（⚠️ 一度しか表示されません！）

トークンの形式: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

---

### ステップ6: メインプロジェクトに環境変数を設定

メインプロジェクトのディレクトリに戻って `.env` ファイルを作成：

```bash
# メインプロジェクトのルートに移動
cd ~/Programing/main

# .env.example から .env を作成
cp .env.example .env

# .envファイルを編集
vim .env
# または
nano .env
# または
code .env
```

`.env` ファイルに以下を設定（実際の値に置き換えてください）：

```env
# コピー用テンプレート
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ARTICLES_REPO_OWNER=YOUR_GITHUB_USERNAME
ARTICLES_REPO_NAME=blog-articles
ARTICLES_REPO_BRANCH=main
```

**例**:
```env
GITHUB_TOKEN=ghp_abc123def456ghi789jkl012mno345pqr678
ARTICLES_REPO_OWNER=ask-t
ARTICLES_REPO_NAME=blog-articles
ARTICLES_REPO_BRANCH=main
```

---

### ステップ7: 記事取得をテスト

```bash
# メインプロジェクトで実行
npm run fetch-articles
```

**成功すると以下のような出力が表示されます**:
```
🚀 記事の取得を開始します...

📚 リポジトリ: YOUR_USERNAME/blog-articles (main)

📥 meta.json を取得中...
✅ meta.json を取得しました（記事数: 9）

📄 ecommerce-platform-architecture を処理中...
   ✅ 取得成功
📄 enterprise-design-systems-lessons を処理中...
   ✅ 取得成功
...

✅ 記事データを保存しました: /Users/ask-t/Programing/main/src/data/articles.json
   - 全記事: 9件
   - 最新記事: 3件

🎉 完了しました！
```

---

### ステップ8: ビルドして確認

```bash
# メインプロジェクトで実行
npm run build
```

ビルドが成功すれば、セットアップ完了です！🎉

---

## 🔍 トラブルシューティング

### エラー: "GITHUB_TOKEN 環境変数が設定されていません"

**原因**: `.env` ファイルが存在しないか、環境変数が正しく設定されていない

**解決方法**:
```bash
# .envファイルが存在するか確認
ls -la .env

# 内容を確認
cat .env

# 再度設定
cp .env.example .env
vim .env
```

---

### エラー: "GitHub API Error: 404"

**原因**: リポジトリ名、オーナー名が間違っている、またはトークンの権限が不足

**解決方法**:
1. `.env` の設定を再確認
   ```bash
   cat .env
   ```
2. リポジトリが本当に存在するか確認
   ```bash
   # ブラウザで確認
   open https://github.com/YOUR_USERNAME/blog-articles
   ```
3. GitHub Tokenの権限を確認（`repo` スコープが必要）

---

### エラー: "GitHub API Error: 401"

**原因**: GitHub Tokenが無効または期限切れ

**解決方法**:
1. 新しいトークンを作成（ステップ5を参照）
2. `.env` のトークンを更新

---

### 記事ファイルが見つからない

**原因**: `meta.json` の `file` フィールドと実際のファイル名が一致していない

**解決方法**:
```bash
# blog-articlesリポジトリで確認
cd ~/Programing/blog-articles
ls -la articles/

# meta.jsonの内容と比較
cat meta.json
```

---

## ✅ セットアップ完了チェックリスト

- [ ] blog-articlesリポジトリにテンプレートファイルをコピー＆プッシュ
- [ ] GitHub Personal Access Tokenを作成
- [ ] メインプロジェクトの `.env` ファイルを設定
- [ ] `npm run fetch-articles` が成功
- [ ] `npm run build` が成功
- [ ] `src/data/articles.json` が更新されている

---

## 🎯 次のステップ

セットアップが完了したら、以下の方法で記事を管理できます：

### 新しい記事を追加

1. `blog-articles` リポジトリで作業
   ```bash
   cd ~/Programing/blog-articles
   
   # 新しいMarkdownファイルを作成
   vim articles/2024-11-my-new-article.md
   ```

2. `meta.json` に記事情報を追加
   ```bash
   vim meta.json
   ```

3. コミット＆プッシュ
   ```bash
   git add .
   git commit -m "Add: My new article"
   git push
   ```

4. メインサイトをビルド
   ```bash
   cd ~/Programing/main
   npm run build
   ```

### 既存の記事を更新

1. `blog-articles` でMarkdownファイルを編集
2. コミット＆プッシュ
3. メインサイトをビルド（自動的に最新版が取得されます）

---

## 📚 参考リンク

- 記事の書き方: `blog-articles/README.md`
- 詳細なセットアップ: `scripts/blog-articles-template/SETUP.md`
- GitHub Token作成: https://github.com/settings/tokens

---

**おめでとうございます！🎉 これで記事を別リポジトリで管理できるようになりました！**

