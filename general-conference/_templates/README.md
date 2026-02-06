# General Conference 学習コンテンツ テンプレート

このフォルダには、新しい General Conference の話を学習コンテンツに変換するためのテンプレートが含まれています。

## 使用方法

### 方法1: AIに依頼する（推奨）

Cursorで以下のプロンプトを使用してください：

```
以下の General Conference の話を4ステップ学習コンテンツに変換してください：

URL: [公式サイトのURL]
話者: Elder/Sister [Name]
タイトル: [Talk Title]

@general-conference-study.md のルールに従って作成してください。
```

### 方法2: 手動でテンプレートを使用する

1. `_templates/` 内のファイルをコピー
2. `{{PLACEHOLDER}}` を実際の内容に置換
3. ファイル名を変更（01-understanding.md など）

## ファイル一覧

| ファイル | 説明 |
|---|---|
| `_category_.json.template` | フォルダのカテゴリ設定 |
| `01-understanding.md.template` | Step 1: 話の理解 |
| `02-vocabulary.md.template` | Step 2: 語彙・教会用語 |
| `03-scriptures.md.template` | Step 3: 聖典の背景 |
| `04-speaking.md.template` | Step 4: 自分の言葉で話す |

## ディレクトリ構造

新しい話を追加する際は、以下の構造で作成してください：

```
general-conference/
└── {year}/
    └── {month}/
        └── {talk-slug}/
            ├── _category_.json
            ├── 01-understanding.md
            ├── 02-vocabulary.md
            ├── 03-scriptures.md
            └── 04-speaking.md
```

## 命名規則

- **talk-slug**: 話のタイトルをkebab-caseに変換
  - 例: "Blessed Are the Peacemakers" → `blessed-are-the-peacemakers`
- **ファイル名**: Docusaurusが数字プレフィックスを除去するため、リンクは `understanding`, `vocabulary` などを使用

## 注意事項

- `{{PLACEHOLDER}}` は必ず実際の内容に置換してください
- TextToSpeech コンポーネントのインポートを忘れずに
- リンクのIDには数字プレフィックスを含めないでください
