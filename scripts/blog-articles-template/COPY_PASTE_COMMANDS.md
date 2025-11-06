# コピー&ペーストで実行できるセットアップコマンド集

このファイルのコマンドを順番にコピー&ペーストして実行してください。

---

## 📝 事前準備

まず、以下の情報を確認してください：
- **GitHubユーザー名**: あなたのGitHubユーザー名
- **blog-articlesリポジトリのURL**: `https://github.com/YOUR_USERNAME/blog-articles`

---

## 🚀 セットアップコマンド

### 1️⃣ blog-articlesをクローン

```bash
# 作業ディレクトリに移動
cd ~/Programing

# リポジトリをクローン（YOUR_USERNAMEを実際のユーザー名に変更）
git clone git@github.com:YOUR_USERNAME/blog-articles.git

# クローンしたディレクトリに移動
cd blog-articles
```

---

### 2️⃣ テンプレートファイルをコピー

```bash
# meta.jsonをコピー
cp ~/Programing/main/scripts/blog-articles-template/meta.json .

# .gitignoreをコピー
cp ~/Programing/main/scripts/blog-articles-template/.gitignore .

# articlesディレクトリをコピー
cp -r ~/Programing/main/scripts/blog-articles-template/articles .

# READMEをコピー
cp ~/Programing/main/scripts/blog-articles-template/README.md .
```

---

### 3️⃣ ファイル構造を確認

```bash
# ルートディレクトリの内容を確認
ls -la

# articlesディレクトリの内容を確認
ls -la articles/
```

**期待される出力:**
```
total 24
drwxr-xr-x   7 user  staff   224 Nov  5 12:00 .
drwxr-xr-x   4 user  staff   128 Nov  5 12:00 ..
drwxr-xr-x  13 user  staff   416 Nov  5 12:00 .git
-rw-r--r--   1 user  staff    85 Nov  5 12:00 .gitignore
-rw-r--r--   1 user  staff  2134 Nov  5 12:00 README.md
drwxr-xr-x   5 user  staff   160 Nov  5 12:00 articles
-rw-r--r--   1 user  staff  3421 Nov  5 12:00 meta.json
```

---

### 4️⃣ Gitにコミット＆プッシュ

```bash
# すべてのファイルをステージング
git add .

# コミット
git commit -m "Initial setup: Add articles, meta.json and documentation"

# プッシュ（ブランチ名がmasterの場合は main を master に変更）
git push origin main
```

---

### 5️⃣ メインプロジェクトで.envファイルを作成

```bash
# メインプロジェクトに移動
cd ~/Programing/main

# .env.exampleから.envを作成
cp .env.example .env

# エディタで.envを開く（お好きなエディタを使用）
vim .env
# または
code .env
# または
nano .env
```

**`.env` に以下を記入**（実際の値に置き換えてください）:

```env
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ARTICLES_REPO_OWNER=YOUR_USERNAME
ARTICLES_REPO_NAME=blog-articles
ARTICLES_REPO_BRANCH=main
```

---

### 6️⃣ 記事取得をテスト

```bash
# メインプロジェクトのルートで実行
cd ~/Programing/main

# 記事を取得
npm run fetch-articles
```

**成功すると以下のような出力:**
```
🚀 記事の取得を開始します...

📚 リポジトリ: YOUR_USERNAME/blog-articles (main)

📥 meta.json を取得中...
✅ meta.json を取得しました（記事数: 9）

📄 ecommerce-platform-architecture を処理中...
   ✅ 取得成功
...

✅ 記事データを保存しました: /Users/ask-t/Programing/main/src/data/articles.json
   - 全記事: 9件
   - 最新記事: 3件

🎉 完了しました！
```

---

### 7️⃣ ビルドして確認

```bash
# メインプロジェクトで実行
npm run build
```

ビルドが成功すれば完了です！🎉

---

## 🔑 GitHub Personal Access Tokenの取得

### ブラウザでトークンを作成

1. 以下のURLをブラウザで開く:
```
https://github.com/settings/tokens/new
```

2. フォームに入力:
   - **Note**: `blog-articles-access`
   - **Expiration**: `No expiration`
   - **Select scopes**: ✅ `repo` にチェック

3. "Generate token" をクリック

4. 表示されたトークンをコピー（形式: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`）

5. メインプロジェクトの `.env` ファイルに貼り付け

---

## 📊 セットアップ確認コマンド

すべてが正しく設定されているか確認：

```bash
# .envファイルの内容を確認
cat ~/Programing/main/.env

# articles.jsonが作成されているか確認
ls -lh ~/Programing/main/src/data/articles.json

# articles.jsonの内容を確認
head -n 20 ~/Programing/main/src/data/articles.json
```

---

## 🐛 トラブルシューティング用コマンド

### エラーが出た場合の確認コマンド

```bash
# 1. .envファイルが存在するか確認
ls -la ~/Programing/main/.env

# 2. blog-articlesリポジトリが正しくクローンされているか確認
ls -la ~/Programing/blog-articles

# 3. GitHubにアクセスできるか確認
ssh -T git@github.com

# 4. リポジトリの内容を確認
cd ~/Programing/blog-articles
git status
git log --oneline -5

# 5. メインプロジェクトのNode.jsバージョン確認
cd ~/Programing/main
node --version
npm --version
```

### 環境変数の再設定

```bash
# .envファイルを削除して再作成
cd ~/Programing/main
rm .env
cp .env.example .env
vim .env
```

### 記事データの再取得

```bash
# articles.jsonを削除
rm ~/Programing/main/src/data/articles.json

# 記事を再取得
cd ~/Programing/main
npm run fetch-articles
```

---

## ✅ セットアップ完了の確認

以下をすべて実行して、問題なければセットアップ完了です：

```bash
# 1. blog-articlesリポジトリの確認
ls -la ~/Programing/blog-articles/articles/

# 2. .envファイルの確認
cat ~/Programing/main/.env

# 3. 記事取得の確認
cd ~/Programing/main
npm run fetch-articles

# 4. ビルドの確認
npm run build
```

---

## 🎯 よく使うコマンド

### 🚀 クイックスタート（最も使うコマンド）

```bash
# 開発環境を起動（記事取得 + 開発サーバー起動）
cd ~/Programing/main
npm run dev
```

このコマンド1つで以下が実行されます：
1. blog-articlesから最新の記事を取得
2. 開発サーバーを起動してブラウザを開く

### 🏗️ ビルドしてプレビュー

```bash
# 本番ビルドをローカルでプレビュー（記事取得 + ビルド + 起動）
cd ~/Programing/main
npm run build-and-serve
```

このコマンド1つで以下が実行されます：
1. blog-articlesから最新の記事を取得
2. 本番用にビルド
3. ビルドしたサイトをプレビュー

### 記事を更新する場合

```bash
# 1. blog-articlesで作業
cd ~/Programing/blog-articles

# 2. 記事を編集
vim articles/2024-11-my-article.md

# 3. meta.jsonを更新
vim meta.json

# 4. コミット＆プッシュ
git add .
git commit -m "Update: article title"
git push

# 5. メインサイトで確認（記事取得 + 開発サーバー起動）
cd ~/Programing/main
npm run dev
```

### 手動で記事を更新

```bash
cd ~/Programing/main
npm run fetch-articles
npm start
```

---

## 📚 その他の便利なコマンド

### 記事の数を確認

```bash
cd ~/Programing/blog-articles
cat meta.json | grep -c '"title"'
ls -1 articles/ | wc -l
```

### 最新の記事を確認

```bash
cd ~/Programing/main
cat src/data/articles.json | head -n 50
```

### リポジトリの状態を確認

```bash
# blog-articlesの状態
cd ~/Programing/blog-articles
git status
git log --oneline -10

# メインプロジェクトの状態
cd ~/Programing/main
git status
```

---

**セットアップが完了したら、この情報は保存しておくことをお勧めします！**

