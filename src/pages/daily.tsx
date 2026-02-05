import React, { JSX } from 'react';
import Layout from '@theme/Layout';

export default function Daily(): JSX.Element {
  return (
    <Layout
      title="Daily TODO | ask-t"
      description="Daily TODO management via GitHub Issues"
    >
      <main>
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-[var(--fg)] mb-6">
              Daily TODO
            </h1>
            <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
              GitHub Issues で日々のタスクを管理。
              Cursor で <code className="bg-[var(--card-bg)] px-2 py-1 rounded">gh</code> コマンドを使って操作します。
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 pb-24">
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Quick Commands */}
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-6">
              <h2 className="text-lg font-semibold text-[var(--fg)] mb-4">
                よく使うコマンド
              </h2>
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <p className="text-[var(--muted)] mb-1"># TODO 一覧を表示</p>
                  <code className="block bg-[var(--bg)] p-2 rounded">
                    gh issue list --label daily-todo
                  </code>
                </div>
                <div>
                  <p className="text-[var(--muted)] mb-1"># 今日の TODO を作成</p>
                  <code className="block bg-[var(--bg)] p-2 rounded">
                    gh issue create --title "2026-01-30 Daily TODO" --label daily-todo
                  </code>
                </div>
                <div>
                  <p className="text-[var(--muted)] mb-1"># Issue の内容を確認</p>
                  <code className="block bg-[var(--bg)] p-2 rounded">
                    gh issue view &lt;number&gt;
                  </code>
                </div>
                <div>
                  <p className="text-[var(--muted)] mb-1"># Issue を更新</p>
                  <code className="block bg-[var(--bg)] p-2 rounded">
                    gh issue edit &lt;number&gt; --body "..."
                  </code>
                </div>
              </div>
            </div>

            {/* Issue Format */}
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-6">
              <h2 className="text-lg font-semibold text-[var(--fg)] mb-4">
                Issue フォーマット
              </h2>
              <pre className="bg-[var(--bg)] p-4 rounded text-sm overflow-x-auto">
{`## Tasks
- [ ] タスク1
- [ ] タスク2
- [x] 完了したタスク

## Notes
今日の気づきやメモ`}
              </pre>
            </div>

            {/* AI Instructions */}
            <div className="rounded-lg border border-[var(--border)] bg-[var(--card-bg)] p-6">
              <h2 className="text-lg font-semibold text-[var(--fg)] mb-4">
                Cursor での操作例
              </h2>
              <ul className="space-y-2 text-[var(--muted)]">
                <li>「今日の TODO を確認して」</li>
                <li>「新しいタスクを追加して」</li>
                <li>「タスク〇〇を完了にして」</li>
                <li>「明日の TODO を作成して」</li>
                <li>「先週の TODO を一覧表示して」</li>
              </ul>
            </div>

            {/* Link to GitHub */}
            <div className="text-center">
              <a
                href="https://github.com/ask-t"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-block"
              >
                GitHub で Issues を確認 →
              </a>
            </div>

          </div>
        </section>
      </main>
    </Layout>
  );
}
