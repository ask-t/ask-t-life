import React, { JSX } from 'react';
import Layout from '@theme/Layout';

// Learning categories with icons and descriptions
const learningCategories = [
  {
    title: 'Daily Log',
    description: '毎日の学習記録。語彙・文法・リスニング・ライティングを記録',
    icon: '📝',
    link: '/english-learning/2026-02-05',
  },
  {
    title: 'General Conference',
    description: 'LDS General Conference の英語学習ノート',
    icon: '⛪',
    link: '/general-conference',
  },
  {
    title: 'Vocabulary',
    description: '新出語彙とフレーズの蓄積。例文付きで定着を図る',
    icon: '📚',
    link: '/english-learning/overview',
  },
  {
    title: 'Grammar',
    description: '文法ポイントの整理。使い分けチェックで実践力を養う',
    icon: '✏️',
    link: '/english-learning/overview',
  },
];

// Study methods
const studyMethods = [
  {
    name: 'インプット',
    items: ['リスニング（10分/日）', 'リーディング（段落解析）', '語彙暗記（12語/日）'],
  },
  {
    name: 'アウトプット',
    items: ['英語日記（80-120 words）', '3行要約', '例文作成'],
  },
  {
    name: '復習',
    items: ['前日の語彙チェック', '文法ポイント確認', '週末まとめ'],
  },
];

// Quick templates
const templates = [
  {
    title: 'Daily Log テンプレ',
    content: `## 今日のゴール
- 新出語彙 12 個
- 文法ポイント 1 つ
- リスニング 10 分
- 英語日記 80-120 words

## 語彙・フレーズ
1. **word** — 意味
   - Example sentence.

## 文法メモ
- ポイント

## 振り返り
- できたこと：
- つまずいたこと：
- 明日やること：`,
  },
  {
    title: 'English Runner テンプレ',
    content: `## セクション名

**重要語彙**
- **word** — 意味

**原文に近い例文**
1. Example sentence.

**解説**
このセクションの要点を説明。`,
  },
];

export default function EnglishLearning(): JSX.Element {
  return (
    <Layout
      title="English Learning | ask-t"
      description="英語学習専用ページ - Daily Log, English Runner, Vocabulary"
    >
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
              opacity: 0.1,
            }}
          />
          <div className="container mx-auto px-4 py-24 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">🌍</div>
              <h1 className="text-4xl md:text-6xl font-bold text-[var(--fg)] mb-6">
                English Learning
              </h1>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                継続的な英語学習の記録。
                <br />
                語彙・文法・リスニング・ライティングを毎日少しずつ積み上げる。
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/english-learning/overview" className="btn-primary">
                  学習記録を見る
                </a>
                <a href="#templates" className="btn-secondary">
                  テンプレートを確認
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Categories */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-8 text-center">
              学習カテゴリ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningCategories.map((category, index) => (
                <a
                  key={index}
                  href={category.link}
                  className="group rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-6 hover:bg-[var(--hover-bg)] hover:border-[var(--accent)] transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{category.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--fg)] mb-2 group-hover:text-[var(--accent)]">
                        {category.title}
                      </h3>
                      <p className="text-[var(--muted)] text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Study Methods */}
        <section className="bg-[var(--card-bg)] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-8 text-center">
                学習メソッド
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {studyMethods.map((method, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-6"
                  >
                    <h3 className="text-lg font-semibold text-[var(--fg)] mb-4 pb-2 border-b border-[var(--border)]">
                      {method.name}
                    </h3>
                    <ul className="space-y-2">
                      {method.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-[var(--muted)] text-sm flex items-center gap-2"
                        >
                          <span className="text-[var(--accent)]">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Daily Goals */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-8 text-center">
              Daily Goals
            </h2>
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 rounded-lg bg-[var(--bg)]">
                  <div className="text-3xl mb-2">12</div>
                  <div className="text-sm text-[var(--muted)]">新出語彙</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-[var(--bg)]">
                  <div className="text-3xl mb-2">10</div>
                  <div className="text-sm text-[var(--muted)]">分リスニング</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-[var(--bg)]">
                  <div className="text-3xl mb-2">100</div>
                  <div className="text-sm text-[var(--muted)]">words 日記</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-[var(--bg)]">
                  <div className="text-3xl mb-2">1</div>
                  <div className="text-sm text-[var(--muted)]">文法ポイント</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Templates */}
        <section id="templates" className="bg-[var(--card-bg)] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-8 text-center">
                テンプレート
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {templates.map((template, index) => (
                  <div
                    key={index}
                    className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-6"
                  >
                    <h3 className="text-lg font-semibold text-[var(--fg)] mb-4">
                      {template.title}
                    </h3>
                    <pre className="bg-[var(--card-bg)] p-4 rounded text-xs overflow-x-auto whitespace-pre-wrap text-[var(--muted)]">
                      {template.content}
                    </pre>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-8 text-center">
              学習のコツ
            </h2>
            <div className="space-y-4">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">💡</span>
                  <div>
                    <h4 className="font-semibold text-[var(--fg)] mb-1">
                      量より継続
                    </h4>
                    <p className="text-sm text-[var(--muted)]">
                      毎日少しずつでも続けることが大切。完璧を目指さず、まず記録を残す。
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <h4 className="font-semibold text-[var(--fg)] mb-1">
                      インプット→アウトプット
                    </h4>
                    <p className="text-sm text-[var(--muted)]">
                      覚えた語彙は必ず例文を作る。聞いた内容は3行で要約する。
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="font-semibold text-[var(--fg)] mb-1">
                      振り返りを忘れずに
                    </h4>
                    <p className="text-sm text-[var(--muted)]">
                      「できたこと」「つまずいたこと」「明日やること」を毎日記録。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-6">
              今日も英語学習を始めよう
            </h2>
            <p className="text-xl text-[var(--muted)] mb-8">
              小さな一歩の積み重ねが、大きな成長につながる。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/english-learning/overview" className="btn-primary">
                学習記録へ →
              </a>
              <a
                href="/english-learning/2026-02-05"
                className="btn-secondary"
              >
                今日のログを見る
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
