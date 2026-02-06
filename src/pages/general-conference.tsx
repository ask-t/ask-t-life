import React, { JSX } from 'react';
import Layout from '@theme/Layout';

// Conference years
const conferenceYears = [
  {
    year: '2025',
    sessions: [
      {
        month: 'October',
        talks: [
          {
            speaker: 'Gary E. Stevenson',
            title: 'Blessed Are the Peacemakers',
            link: '/general-conference/2025/october/blessed-are-the-peacemakers/understanding',
            steps: [
              { name: 'Understanding', link: '/general-conference/2025/october/blessed-are-the-peacemakers/understanding' },
              { name: 'Vocabulary', link: '/general-conference/2025/october/blessed-are-the-peacemakers/vocabulary' },
              { name: 'Scriptures', link: '/general-conference/2025/october/blessed-are-the-peacemakers/scriptures' },
              { name: 'Speaking', link: '/general-conference/2025/october/blessed-are-the-peacemakers/speaking' },
            ],
          },
        ],
      },
    ],
  },
];

// Learning steps
const learningSteps = [
  {
    step: 1,
    name: 'Understanding',
    description: '話の全体像を把握する',
    icon: '📖',
    goals: ['話の構造を理解', '主要メッセージを把握', 'リスニング練習'],
  },
  {
    step: 2,
    name: 'Vocabulary',
    description: '教会用語と重要表現を学ぶ',
    icon: '📝',
    goals: ['教会用語の意味と発音', '重要フレーズの暗記', '語彙クイズ'],
  },
  {
    step: 3,
    name: 'Scriptures',
    description: '聖典の背景を深く理解する',
    icon: '📜',
    goals: ['引用聖句の文脈理解', '関連聖句の学習', '教義的つながり'],
  },
  {
    step: 4,
    name: 'Speaking',
    description: '自分の言葉で話せるようになる',
    icon: '🎤',
    goals: ['説明練習', '証の練習', '実践計画'],
  },
];

export default function GeneralConference(): JSX.Element {
  return (
    <Layout
      title="General Conference | ask-t"
      description="General Conference 英語学習ノート - 年と話者で整理"
    >
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 50%, #4a7c9b 100%)',
              opacity: 0.15,
            }}
          />
          <div className="container mx-auto px-4 py-24 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">⛪</div>
              <h1 className="text-4xl md:text-6xl font-bold text-[var(--fg)] mb-6">
                General Conference
              </h1>
              <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
                LDS General Conference の英語学習ノート。
                <br />
                段落ごとに語彙・例文・解説を整理して読解力を高める。
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/general-conference/overview" className="btn-primary">
                  学習ノートを見る
                </a>
                <a href="#years" className="btn-secondary">
                  年別一覧へ
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Study Method */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-8 text-center">
              学習の進め方
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-6 text-center">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-lg font-semibold text-[var(--fg)] mb-2">
                  1. 段落ごとに読む
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  一度に全部読まず、段落単位で理解を深める
                </p>
              </div>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-6 text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-lg font-semibold text-[var(--fg)] mb-2">
                  2. 語彙を抽出
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  知らない単語・重要フレーズをピックアップ
                </p>
              </div>
              <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-6 text-center">
                <div className="text-4xl mb-4">✏️</div>
                <h3 className="text-lg font-semibold text-[var(--fg)] mb-2">
                  3. 解説を書く
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  自分の言葉で要点をまとめて定着
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Conference Years */}
        <section id="years" className="bg-[var(--card-bg)] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-8 text-center">
                年別一覧
              </h2>
              {conferenceYears.map((yearData, yearIndex) => (
                <div key={yearIndex} className="mb-8">
                  <h3 className="text-xl font-bold text-[var(--fg)] mb-4 pb-2 border-b border-[var(--border)]">
                    {yearData.year}
                  </h3>
                  {yearData.sessions.map((session, sessionIndex) => (
                    <div key={sessionIndex} className="mb-6">
                      <h4 className="text-lg font-semibold text-[var(--muted)] mb-3">
                        {session.month}
                      </h4>
                      <div className="space-y-4">
                        {session.talks.map((talk: any, talkIndex: number) => (
                          <div
                            key={talkIndex}
                            className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4"
                          >
                            <a
                              href={talk.link}
                              className="block hover:text-[var(--accent)] transition-all"
                            >
                              <p className="font-semibold text-[var(--fg)] text-lg">
                                {talk.title}
                              </p>
                              <p className="text-sm text-[var(--muted)]">
                                {talk.speaker}
                              </p>
                            </a>
                            {talk.steps && (
                              <div className="mt-3 pt-3 border-t border-[var(--border)]">
                                <p className="text-xs text-[var(--muted)] mb-2">学習ステップ:</p>
                                <div className="flex flex-wrap gap-2">
                                  {talk.steps.map((step: any, stepIndex: number) => (
                                    <a
                                      key={stepIndex}
                                      href={step.link}
                                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs bg-[var(--card-bg)] border border-[var(--border)] hover:bg-[var(--hover-bg)] hover:border-[var(--accent)] transition-all"
                                    >
                                      <span className="text-[var(--muted)]">{stepIndex + 1}.</span>
                                      <span>{step.name}</span>
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Steps Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-8 text-center">
              4ステップ学習法
            </h2>
            <p className="text-center text-[var(--muted)] mb-8">
              各トークを4つのステップで段階的に学びます
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {learningSteps.map((step, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{step.icon}</span>
                    <div>
                      <p className="text-xs text-[var(--muted)]">Step {step.step}</p>
                      <p className="font-semibold text-[var(--fg)]">{step.name}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--muted)] mb-3">{step.description}</p>
                  <ul className="space-y-1">
                    {step.goals.map((goal, goalIndex) => (
                      <li key={goalIndex} className="text-xs text-[var(--muted)] flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Tips */}
        <section className="bg-[var(--card-bg)] py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--fg)] mb-8 text-center">
                学習のコツ
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎧</span>
                    <div>
                      <h4 className="font-semibold text-[var(--fg)] mb-1">
                        音声と一緒に
                      </h4>
                      <p className="text-sm text-[var(--muted)]">
                        公式サイトで音声を聞きながら読むとリスニング力も向上
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📚</span>
                    <div>
                      <h4 className="font-semibold text-[var(--fg)] mb-1">
                        繰り返し読む
                      </h4>
                      <p className="text-sm text-[var(--muted)]">
                        同じ話を複数回読むことで語彙と理解が定着
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✍️</span>
                    <div>
                      <h4 className="font-semibold text-[var(--fg)] mb-1">
                        要約を書く
                      </h4>
                      <p className="text-sm text-[var(--muted)]">
                        各セクションを自分の言葉で3行にまとめる練習
                      </p>
                    </div>
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
              学習を始めよう
            </h2>
            <p className="text-xl text-[var(--muted)] mb-8">
              霊的なメッセージを英語で学び、語学力と信仰を同時に深める。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/general-conference/overview" className="btn-primary">
                学習ノートへ →
              </a>
              <a
                href="https://www.churchofjesuschrist.org/study/general-conference"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                公式サイト（英語）
              </a>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
