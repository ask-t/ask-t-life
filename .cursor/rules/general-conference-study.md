# General Conference 学習コンテンツ作成ガイド

このルールは、General Conference の話を4ステップの英語学習コンテンツに変換する際に使用します。

## 使用方法

新しい話の学習コンテンツを作成する際は、以下の情報を提供してください：

1. **話のURL**: churchofjesuschrist.org の公式リンク
2. **話者名**: Elder/Sister の敬称を含む
3. **開催**: 年月（例: October 2025）
4. **セッション**: Saturday Morning Session など

## ディレクトリ構造

```
general-conference/{year}/{month}/{talk-slug}/
├── _category_.json
├── 01-understanding.md  # Step 1: 話の理解
├── 02-vocabulary.md     # Step 2: 語彙・教会用語
├── 03-scriptures.md     # Step 3: 聖典の背景
└── 04-speaking.md       # Step 4: 自分の言葉で話す
```

### talk-slug の命名規則
- 話のタイトルをkebab-caseに変換
- 例: "Blessed Are the Peacemakers" → `blessed-are-the-peacemakers`

## 各ファイルの構成

### _category_.json

```json
{
  "label": "{Talk Title}",
  "position": {number},
  "collapsible": true,
  "collapsed": false,
  "link": {
    "type": "doc",
    "id": "{year}/{month}/{talk-slug}/understanding"
  }
}
```

### 01-understanding.md（話の理解）

必須セクション：
1. **Talk Information** - 話者、役職、開催情報のテーブル
2. **Core Message** - 中心メッセージ（1-2文）と音声読み上げ
3. **Talk Structure** - 話の構成を箇条書きで（Part 1, Part 2...）
4. **Key Quotes to Remember** - 3つの重要な引用（音声読み上げ付き）
5. **Listening Practice** - 公式サイトで聞く際の質問
6. **Comprehension Check** - True/False 問題（5問）
7. **Summary in Your Own Words** - Problem/Solution/Action テンプレート

### 02-vocabulary.md（語彙・教会用語）

必須セクション：
1. **Church Terminology** - カテゴリ別の教会用語表
   - General Conference Terms
   - Scriptural Terms（聖典用語）
   - Restoration Terms（回復の用語）
   - Doctrinal Terms（教義用語）
2. **Key Phrases** - 重要フレーズの詳細解説（3つ以上）
3. **Vocabulary by Section** - セクション別の単語リスト
4. **Pronunciation Practice** - 発音が難しい単語（5つ以上）
5. **Vocabulary Quiz** - Fill in the Blanks / Match the Terms

### 03-scriptures.md（聖典の背景）

必須セクション：
1. **Primary Scripture** - メインの聖句（詳細解説）
   - Context（文脈）
   - Greek/Hebrew Word Study（可能なら）
2. **Supporting Scriptures** - 関連聖句（3つ以上）
   - 各聖句の Context と Key Insight
3. **Scripture Cross-Reference Chart** - テーマ別聖句一覧表
4. **Study Questions** - 理解を深める質問（5つ）

### 04-speaking.md（自分の言葉で話す）

必須セクション：
1. **Part 1: Explaining the Talk**
   - Exercise 1: One-Minute Summary
   - Exercise 2: Key Point Explanation（3つのポイント）
2. **Part 2: Sharing Personal Experiences**
   - 3つの質問とテンプレート
3. **Part 3: Bearing Testimony**
   - Testimony Phrases（開始・終了フレーズ）
   - Write Your Own Testimony テンプレート
4. **Part 4: Application & Action Plan**
   - 話から得た具体的な行動計画
5. **Part 5: Discussion Questions**
   - Personal Study / Group Discussion / Teaching Others
6. **Part 6: Final Practice**
   - 3-5分のプレゼンテーション構成
   - Recording Challenge チェックリスト

## 共通要素

### TextToSpeech コンポーネント
各ファイルの冒頭に追加：
```md
import TextToSpeech from '@site/src/components/TextToSpeech';
```

重要な文には音声読み上げを追加：
```md
<TextToSpeech text="The exact English text to be read aloud." />
```

### Frontmatter

```yaml
---
title: "{Step X}: {Section Name}"
sidebar_position: {1-4}
tags: [{relevant-tags}]
---
```

### 学習目標
各ファイルの冒頭に：
```md
> **学習目標**: {このステップで達成すること}
```

### Next Step リンク
各ファイルの末尾に次のステップへのリンク：
```md
➡️ [Step X: {Next Section Name}](./{next-file})
```

## 教会用語の抽出ポイント

以下のカテゴリに注目して用語を抽出：

1. **組織・役職**: Quorum, Elder, Sister, Bishop, Stake President
2. **聖典用語**: KJV英語（multitudes, verily, unto）
3. **回復の用語**: Restoration, living prophets, seminary
4. **教義用語**: atonement, covenant, ordinance, priesthood
5. **プログラム名**: Come Follow Me, For the Strength of Youth

## 聖典参照の探し方

1. 話の中で直接引用されている聖句
2. Notes/References セクションの聖句
3. 関連するモルモン書の並行聖句（3 Nephi など）
4. 教義と聖約の関連聖句
5. テーマに関連する他の聖句

## 品質チェックリスト

- [ ] 4つのファイルがすべて作成されている
- [ ] 各ファイルに TextToSpeech import がある
- [ ] 教会用語が適切にカテゴライズされている
- [ ] 最低3つの聖句が詳細に解説されている
- [ ] Speaking セクションにテンプレートがある
- [ ] Next Step リンクが正しく設定されている
- [ ] _category_.json の ID が正しい（01- プレフィックスなし）

## 使用例プロンプト

```
以下の General Conference の話を4ステップ学習コンテンツに変換してください：

URL: https://www.churchofjesuschrist.org/study/general-conference/2025/10/...
話者: Elder/Sister [Name]
タイトル: [Talk Title]

@general-conference-study.md のルールに従って作成してください。
```
