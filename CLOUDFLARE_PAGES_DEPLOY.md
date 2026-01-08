# 🚀 Cloudflare Pages デプロイ完全ガイド

## ✅ 準備完了

### ビルド確認済み
```bash
✓ npm run build
✓ dist/_worker.js 304.94 kB
✓ dist/_routes.json
✓ dist/static/ (PDFカタログ等)
```

---

## 📋 Cloudflare Pages デプロイ手順

### Step 1: Cloudflare Dashboard を開く

👉 **https://dash.cloudflare.com/**

---

### Step 2: Workers & Pages に移動

左サイドバーの **"Workers & Pages"** をクリック

---

### Step 3: 新しいプロジェクトを作成

1. **"Create application"** ボタンをクリック
2. **"Pages"** タブを選択
3. **"Connect to Git"** をクリック

---

### Step 4: GitHub連携

1. **GitHub** を選択
2. リポジトリ **"hallemter-alt/FVNIX"** を選択
3. **"Begin setup"** をクリック

---

### Step 5: ビルド設定（最重要）

以下の設定を**正確に**入力してください：

```
┌──────────────────────────────────────┐
│ Project name:      fvnix              │
│ Production branch: main               │
│ Build command:     npm run build      │
│ Build directory:   dist               │
└──────────────────────────────────────┘
```

#### ⚠️ 重要ポイント

| 項目 | 設定値 |
|------|--------|
| **Project name** | fvnix |
| **Production branch** | main |
| **Build command** | npm run build |
| **Build output directory** | dist |
| **Root directory** | (空白) |

#### ❌ Deploy command について

- **表示されない場合**: そのまま進む（正常）
- **表示される場合**: **必ず空白にする**
- **絶対NG**: `npx wrangler deploy` などのコマンド

---

### Step 6: 環境変数（通常は不要）

Environment variables セクション:
- 通常は何も設定しない
- もし必要な場合のみ: `NODE_VERSION = 18`

---

### Step 7: デプロイ開始

1. **"Save and Deploy"** をクリック
2. デプロイが自動的に開始されます
3. 約3-5分待機

---

## 🔍 デプロイ進行状況

### 正常なビルドログ

```
✓ Cloning repository...
  Repository: hallemter-alt/FVNIX
  Branch: main

✓ Installing dependencies...
  npm install
  added 71 packages

✓ Building application...
  npm run build
  
  vite v6.4.1 building SSR bundle for production...
  ✓ 30 modules transformed.
  ✓ built in 1.54s
  dist/_worker.js  304.94 kB

✓ Deploying to Cloudflare Pages...
  Uploading _worker.js
  Uploading static files...

✅ Deployment complete!
   URL: https://fvnix.pages.dev
```

---

## 🎉 デプロイ成功の確認

### 1. Cloudflare Dashboard で確認

```
✅ Status: Success (緑色)
✅ URL: https://fvnix.pages.dev
✅ Build time: ~3-5 minutes
```

### 2. ブラウザで動作確認

#### トップページ
```
https://fvnix.pages.dev/
```

#### 日本語製品ページ
```
https://fvnix.pages.dev/products/essential-oils
```
→ FNX001-FNX095の製品一覧（日本語）

#### 英語製品ページ
```
https://fvnix.pages.dev/en/products/essential-oils
```
→ FNX001-FNX095の製品一覧（英語）

#### 繁体字製品ページ
```
https://fvnix.pages.dev/zh-tw/products/essential-oils
```
→ FNX001-FNX095の製品一覧（繁体字）

---

## 🚀 今後の自動デプロイ

プロジェクトが正常にデプロイされると、以降は**完全自動**です：

```
GenSparkで編集
  ↓
git add .
  ↓
git commit -m "変更内容"
  ↓
git push origin main
  ↓
GitHub
  ↓
Cloudflare Pages（自動検出）
  ↓
自動ビルド & デプロイ
  ↓
https://fvnix.pages.dev に反映
```

**所要時間**: プッシュから約3-5分で自動デプロイ完了

---

## 🔧 トラブルシューティング

### もしデプロイが失敗したら

#### 1. ビルドログを確認

Cloudflare Dashboard → Deployments → 最新のデプロイ → **"View build log"**

#### 2. よくあるエラーと対処法

##### ❌ Deploy commandエラー
```
Error: npx wrangler deploy
It looks like you've run a Workers-specific command in a Pages project.
```

**原因**: Deploy command が設定されている  
**解決**: Settings → Builds & deployments → Deploy command を**空白**にする

##### ❌ Build directory not found
```
Error: Build directory 'build' not found
```

**原因**: Build output directory が間違っている  
**解決**: `dist` に変更

##### ❌ Build failed
```
Error: Command failed: npm run build
```

**原因**: 依存関係が不足  
**解決**: package.jsonを確認、ローカルで `npm run build` をテスト

---

## 📋 設定チェックリスト

デプロイ前に以下を確認：

- [ ] Project name: fvnix
- [ ] Production branch: main
- [ ] Build command: npm run build
- [ ] Build output directory: dist
- [ ] Root directory: 空白
- [ ] Deploy command: 空白（または表示されない）
- [ ] 環境変数: 設定なし

---

## 💡 ローカル開発環境

### 開発サーバー起動
```bash
npm run dev
```

サーバー起動後:
```
http://localhost:3000
```

### ビルドテスト
```bash
npm run build
```

ビルド成功確認:
```bash
ls -lh dist/
```

---

## 📞 サポート

デプロイ中に問題が発生したら：

1. **ビルドログ**の最後の10-20行をコピー
2. **エラーメッセージ**を確認
3. GenSparkに共有

---

## 🎯 期待される結果

デプロイが成功すると：

✅ **製品カタログサイト**が公開される  
✅ **3言語対応**（日本語/英語/繁体字）  
✅ **95製品**が表示される（FNX001-FNX095）  
✅ **PDFカタログ**がダウンロード可能  
✅ **高速配信**（Cloudflare CDN）  
✅ **自動デプロイ**（mainブランチへのpush時）

---

## 🔗 参考リンク

- Cloudflare Dashboard: https://dash.cloudflare.com/
- GitHub Repository: https://github.com/hallemter-alt/FVNIX
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages/

---

準備は完璧です！デプロイを開始してください！ 🚀

