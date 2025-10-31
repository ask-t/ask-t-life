# Vercel デプロイメント ガイド

このドキュメントでは、ask-tのポートフォリオサイトをVercelにデプロイする手順について説明します。

## 前提条件

- Vercelアカウント（[vercel.com](https://vercel.com)で無料登録）
- GitHubアカウント
- プロジェクトがGitHubリポジトリにプッシュ済み

## デプロイメント手順

### 1. Vercelにプロジェクトをインポート

1. [Vercel Dashboard](https://vercel.com/dashboard)にログイン
2. 「New Project」をクリック
3. GitHubリポジトリを選択
4. プロジェクト名を設定（例：`ask-t-portfolio`）

### 2. ビルド設定の確認

Vercelは自動的に以下の設定を検出します：

- **Framework Preset**: Docusaurus
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

### 3. 環境変数の設定（オプション）

必要に応じて、Vercelダッシュボードで環境変数を設定：

```
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
```

### 4. デプロイの実行

1. 「Deploy」ボタンをクリック
2. ビルドプロセスを待機（通常2-3分）
3. デプロイ完了後、提供されるURLでサイトを確認

## 自動デプロイの設定

### GitHub連携

1. Vercelダッシュボードでプロジェクト設定を開く
2. 「Git」タブで以下を設定：
   - **Production Branch**: `main` または `master`
   - **Preview Branches**: `dev-*` ブランチ
   - **Auto Deploy**: 有効

### カスタムドメインの設定

1. Vercelダッシュボードでプロジェクトを選択
2. 「Settings」→「Domains」をクリック
3. カスタムドメインを追加
4. DNS設定を更新

## トラブルシューティング

### よくある問題

#### 1. ビルドエラー

**問題**: ビルドが失敗する
**解決策**:
- `npm run build` をローカルで実行してエラーを確認
- Node.jsバージョンが18.0以上であることを確認
- 依存関係が正しくインストールされていることを確認

#### 2. 静的ファイルが表示されない

**問題**: 画像やCSSが読み込まれない
**解決策**:
- `static/` ディレクトリのファイルが正しく配置されていることを確認
- `vercel.json` のルーティング設定を確認

#### 3. ルーティングエラー

**問題**: ページが404エラーになる
**解決策**:
- `vercel.json` の `routes` 設定を確認
- SPAルーティングが正しく設定されていることを確認

### ログの確認

1. Vercelダッシュボードでプロジェクトを選択
2. 「Functions」タブでビルドログを確認
3. エラーの詳細を確認して対応

## パフォーマンス最適化

### 1. 画像最適化

- 画像をWebP形式に変換
- 適切なサイズにリサイズ
- 遅延読み込みを実装

### 2. バンドルサイズの最適化

- 不要な依存関係を削除
- コード分割を実装
- Tree shakingを有効化

### 3. キャッシュ設定

Vercelは自動的に以下をキャッシュします：
- 静的アセット
- APIレスポンス
- CDNエッジキャッシュ

## 監視とアナリティクス

### Vercel Analytics

1. Vercelダッシュボードで「Analytics」を有効化
2. パフォーマンスメトリクスを確認
3. ユーザー行動を分析

### カスタムアナリティクス

必要に応じて以下を追加：
- Google Analytics
- Plausible Analytics
- Fathom Analytics

## セキュリティ設定

### 1. HTTPSの強制

Vercelは自動的にHTTPSを有効化

### 2. セキュリティヘッダー

`vercel.json` にセキュリティヘッダーを追加：

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## バックアップと復旧

### 1. コードのバックアップ

- GitHubリポジトリを定期的にバックアップ
- 重要な変更はタグを作成

### 2. データのバックアップ

- 静的ファイルを別途バックアップ
- 設定ファイルをバージョン管理

## サポート

問題が解決しない場合は、以下のリソースを参照：

- [Vercel公式ドキュメント](https://vercel.com/docs)
- [Docusaurus公式ドキュメント](https://docusaurus.io/docs)
- [Vercelコミュニティ](https://github.com/vercel/vercel/discussions)

---

このガイドに従って、効率的にVercelにデプロイしてください。質問や問題がある場合は、プロジェクトのメンテナーに連絡してください。
