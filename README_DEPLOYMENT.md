# 🚀 FVNIXウェブサイト デプロイメントガイド

## 重要：デプロイ先について

このプロジェクトは **Cloudflare Pages** 専用に設計されています。

### ❌ Netlifyでは動作しません

理由：
- このプロジェクトは Cloudflare Workers と Hono フレームワークを使用
- `_worker.js` を生成するビルドシステム
- Netlify は静的サイト・サーバーレス関数用（Workers非対応）

---

## ✅ Cloudflare Pages デプロイ手順

### 1. Cloudflare Dashboard にアクセス
https://dash.cloudflare.com/

### 2. Workers & Pages を選択
左メニューから「Workers & Pages」をクリック

### 3. 新規プロジェクト作成
- 「Create application」をクリック
- 「Pages」タブを選択
- 「Connect to Git」をクリック

### 4. GitHub連携
- GitHubアカウントを接続
- リポジトリ「hallemter-alt/FVNIX」を選択

### 5. ビルド設定

```
Project name:           fvnix (任意)
Production branch:      main
Build command:          npm run build
Build output directory: dist
Root directory:         (空白)
```

### 6. デプロイ実行
「Save and Deploy」をクリック

### 7. 完了
約3-5分でデプロイ完了
デプロイURL: `https://fvnix.pages.dev` （自動生成）

---

## 🔄 自動デプロイ

GitHub の `main` ブランチに push すると自動的にデプロイされます。

```bash
git add .
git commit -m "Update content"
git push origin main
```

→ Cloudflare Pages が自動的にビルド＆デプロイ

---

## 🌐 カスタムドメイン設定

Cloudflare Pages ダッシュボード → Custom domains → Add a domain

---

## 📊 製品情報

- **総製品数**: 95製品（FNX001-FNX095）
- **対応言語**: 日本語、英語、繁体中文
- **フレームワーク**: Hono on Cloudflare Workers
- **ビルドツール**: Vite

---

## 🛠️ ローカル開発

```bash
# インストール
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# Cloudflare Pagesプレビュー（ローカル）
npx wrangler pages dev dist
```

---

## 📝 注意事項

1. **Netlifyは使用しないでください** - プロジェクト構造が対応していません
2. **Cloudflare Pages専用です** - Workers環境が必須
3. **カスタムドメイン** - Cloudflare で設定可能
4. **無料枠** - 帯域幅無制限、月500回ビルド

---

デプロイに関する質問があれば、Cloudflare Pagesドキュメントを参照：
https://developers.cloudflare.com/pages/
