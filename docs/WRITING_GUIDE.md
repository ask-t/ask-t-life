---
sidebar_position: 2
sidebar_label: Writing Guide
---

# Writing ガイド

このドキュメントでは、ask-t のナレッジハブでコンテンツを作成・管理する方法を説明します。

## 目次

1. [ノートの作成方法](#ノートの作成方法)
2. [プロジェクト情報の更新方法](#プロジェクト情報の更新方法)
3. [Daily TODO の管理](#daily-todo-の管理)
4. [プロファイル情報の更新方法](#プロファイル情報の更新方法)

---

## ノートの作成方法

### ノートの配置場所

ノートは `docs/notes/` ディレクトリに配置します。

```
docs/notes/
├── tech/           # 技術メモ
├── learning/       # 学習記録
└── ideas/          # アイデア
```

### 新しいノートを作成

1. 適切なカテゴリフォルダに `.md` ファイルを作成
2. Frontmatter を追加

```markdown
---
title: ノートのタイトル
tags: [tag1, tag2]
sidebar_position: 1
---

# 内容

ここに本文を書く...
```

### Frontmatter 項目

| 項目 | 必須 | 説明 |
|------|------|------|
| `title` | Yes | ノートのタイトル |
| `tags` | No | タグ（配列形式） |
| `sidebar_position` | No | サイドバーでの順序 |

### カテゴリを追加する

新しいカテゴリを追加する場合は、フォルダと `_category_.json` を作成:

```json
{
  "label": "カテゴリ名",
  "position": 4,
  "description": "カテゴリの説明"
}
```

### AI での操作

Cursor で以下のように指示できます：

- 「〇〇についてのノートを作成して」
- 「learning に新しいノートを追加して」
- 「このノートにタグを追加して」

---

## プロジェクト情報の更新方法

### プロジェクト一覧（JSON）

プロジェクト情報は `src/data/projects.json` で管理:

```json
{
  "featuredProjects": [...],
  "allProjects": [
    {
      "title": "プロジェクト名",
      "slug": "project-slug",
      "description": "説明",
      "tags": ["Tag1", "Tag2"],
      "role": "役割",
      "stack": ["Tech1", "Tech2"],
      "status": "active",
      "image": "/images/gallery/image1.png",
      "link": "https://...",
      "github": "https://github.com/..."
    }
  ]
}
```

### フィールド説明

| フィールド | 必須 | 説明 |
|-----------|------|------|
| `title` | Yes | プロジェクト名 |
| `slug` | No | 詳細ページへのリンク用 |
| `description` | Yes | プロジェクトの説明 |
| `tags` | Yes | タグ（配列） |
| `role` | Yes | 担当役割 |
| `stack` | Yes | 技術スタック（配列） |
| `status` | No | `active` / `completed` / `archived` |
| `image` | No | サムネイル画像 |
| `link` | No | デモサイト URL |
| `github` | No | GitHub リポジトリ URL |

### プロジェクト詳細ページ

詳細ページは `docs/projects/` に Markdown で作成:

```markdown
---
title: プロジェクト名
sidebar_position: 1
---

# プロジェクト名

## 背景

プロジェクトの背景...

## 技術スタック

- Tech1
- Tech2

## 学んだこと

...
```

---

## Daily TODO の管理

Daily TODO は GitHub Issues で管理し、Cursor の `gh` コマンドで操作します。

### Issue フォーマット

```markdown
## Tasks
- [ ] タスク1
- [ ] タスク2
- [x] 完了したタスク

## Notes
今日の気づき...
```

### gh コマンド

```bash
# 一覧表示
gh issue list --label daily-todo

# 詳細表示
gh issue view <number>

# 新規作成
gh issue create --title "2026-01-30 Daily TODO" --label daily-todo

# 更新
gh issue edit <number> --body "..."

# クローズ
gh issue close <number>
```

### AI での操作

Cursor で以下のように指示できます：

- 「今日の TODO を確認して」
- 「新しいタスクを追加して」
- 「タスクを完了にして」
- 「明日の TODO を作成して」

---

## プロファイル情報の更新方法

プロファイル情報は `src/data/profile.json` で管理:

### スキル

```json
"skills": [
  { "name": "JavaScript", "level": "Proficient" },
  { "name": "React", "level": "Proficient" }
]
```

レベル: `Proficient`, `Moderate`, `Beginner`

### 経験

```json
"experience": [
  {
    "company": "会社名",
    "role": "役職",
    "period": "期間",
    "location": "場所",
    "description": "説明"
  }
]
```

---

## 画像の追加

画像は `static/images/gallery/` に配置:

```
static/images/gallery/
├── image1.png
├── image2.png
└── ...
```

参照方法:
```json
"image": "/images/gallery/image1.png"
```

推奨:
- サイズ: 800x600px または 1200x800px
- 形式: PNG または JPG
- ファイルサイズ: 500KB 以下

---

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# ビルドプレビュー
npm run serve

# 型チェック
npm run typecheck
```

---

## トラブルシューティング

### JSON 構文エラー
- カンマの忘れや括弧の不整合をチェック
- [JSONLint](https://jsonlint.com/) で検証

### 画像が表示されない
- パスが `/images/gallery/...` で始まっているか確認
- ファイルが `static/` 以下に存在するか確認

### ビルドエラー
- `npm run clear` でキャッシュをクリア
- `npm run typecheck` で型エラーを確認
