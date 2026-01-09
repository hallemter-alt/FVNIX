# Cloudflare Pages カスタムドメイン設定手順

## 📋 設定情報

- **メインドメイン（Wix）:** fvnix.com
- **カスタムドメイン（Cloudflare Pages）:** app.fvnix.com
- **プロジェクト名:** fvnix
- **ターゲット:** fvnix.pages.dev

---

## 🔧 ステップ1: Cloudflare Pagesでカスタムドメインを追加

### 1-1. Cloudflare Dashboardにアクセス
```
https://dash.cloudflare.com/
```

### 1-2. プロジェクトを開く
1. 左サイドバー: **Workers & Pages**
2. プロジェクト一覧から: **fvnix** をクリック
3. 上部タブから: **Custom domains** をクリック

### 1-3. カスタムドメインを追加
1. **Set up a custom domain** ボタンをクリック
2. ドメイン入力欄に入力:
   ```
   app.fvnix.com
   ```
3. **Continue** ボタンをクリック

### 1-4. DNS設定情報を確認
Cloudflareが以下の情報を表示します：

```
┌─────────────────────────────────────────────┐
│ DNS Record Configuration                    │
├─────────────────────────────────────────────┤
│ Type:   CNAME                               │
│ Name:   app                                 │
│ Target: fvnix.pages.dev                     │
│ TTL:    Auto (または 3600)                  │
└─────────────────────────────────────────────┘
```

**重要:** この画面は開いたままにして、次のステップへ進んでください。

---

## 🌐 ステップ2: Wix DNSでCNAMEレコードを追加

### 2-1. Wixダッシュボードにログイン
```
https://manage.wix.com/
```

### 2-2. ドメイン管理画面を開く
1. 左サイドバー: **設定** → **ドメイン**
2. ドメイン一覧から: **fvnix.com** を選択
3. **DNS設定を編集** または **詳細設定** をクリック

### 2-3. CNAMEレコードを追加

以下の設定でCNAMEレコードを追加します：

```
┌─────────────────────────────────────────────┐
│ DNS Record - CNAME                          │
├─────────────────────────────────────────────┤
│ レコードタイプ: CNAME                        │
│ ホスト名:       app                          │
│ 値:            fvnix.pages.dev              │
│ TTL:           3600 (または Auto)            │
└─────────────────────────────────────────────┘
```

#### 画面入力例：
```
レコードタイプ: [CNAME        ▼]
ホスト名:      [app___________]
値:           [fvnix.pages.dev]
TTL:          [3600__________]

            [キャンセル] [保存]
```

### 2-4. 保存
- **保存** または **追加** ボタンをクリック
- 確認メッセージが表示されたら **OK**

---

## ⏱️ ステップ3: DNS伝播を待つ（10分～24時間）

### DNS伝播の確認方法

#### 方法1: nslookupコマンド（推奨）
```bash
nslookup app.fvnix.com
```

**期待される結果:**
```
Server:  dns.google
Address: 8.8.8.8

Non-authoritative answer:
app.fvnix.com   canonical name = fvnix.pages.dev
```

#### 方法2: オンラインツール
以下のサイトで確認：
- https://dnschecker.org/
- 検索ボックスに `app.fvnix.com` を入力
- Record Type: **CNAME** を選択
- 世界各地のDNSサーバーで `fvnix.pages.dev` が返されることを確認

### DNS伝播の目安
- **最短:** 10分
- **通常:** 30分～2時間
- **最長:** 24時間

---

## 🔒 ステップ4: SSL証明書の自動発行を確認

### 4-1. Cloudflare Dashboardで確認
1. Workers & Pages → **fvnix**
2. **Custom domains** タブ
3. `app.fvnix.com` のステータスを確認

**ステータスの変化:**
```
⏳ Pending     → DNS設定待ち
⏳ Validating  → DNS伝播確認中
⏳ Provisioning → SSL証明書発行中
✅ Active      → 設定完了！
```

### 4-2. SSL証明書発行完了まで
- 通常 **5～15分**
- DNS伝播完了後に自動で開始
- Let's Encrypt証明書が自動発行されます

---

## ✅ ステップ5: 動作確認

### 5-1. HTTPSアクセステスト
ブラウザで以下のURLを開く：
```
https://app.fvnix.com/
```

**期待される結果:**
- ✅ サイトが正常に表示される
- ✅ HTTPSで接続（鍵マーク表示）
- ✅ SSL証明書エラーなし

### 5-2. 多言語ページテスト
```
日本語: https://app.fvnix.com/
英語:   https://app.fvnix.com/en
中国語: https://app.fvnix.com/zh-tw
```

### 5-3. 製品詳細ページテスト
```
精油（日本語）: https://app.fvnix.com/products/essential-oils
精油（英語）:   https://app.fvnix.com/en/products/essential-oils
ナッツ:         https://app.fvnix.com/products/nuts-food
コーヒー:       https://app.fvnix.com/products/coffee
花卉:           https://app.fvnix.com/products/flowers
```

### 5-4. PDFダウンロードテスト
```
https://app.fvnix.com/static/documents/Phoenix%20Essential%20Oils%20Database_%20PH001-PH098_JP.pdf
```

---

## 🚨 トラブルシューティング

### 問題1: DNS伝播が遅い
**症状:** 30分経ってもアクセスできない

**確認:**
```bash
# DNSキャッシュをクリア（ローカルPC）
# Windows: ipconfig /flushdns
# Mac: sudo dscacheutil -flushcache
# Linux: sudo systemd-resolve --flush-caches

# DNS確認
nslookup app.fvnix.com
```

**解決策:**
1. Wix側のDNS設定を再確認
   - ホスト名: `app` （`app.fvnix.com` ではない）
   - 値: `fvnix.pages.dev` （末尾に `.` なし）
2. 最大24時間待つ

---

### 問題2: SSL証明書エラー
**症状:** 「この接続は安全ではありません」

**確認:**
1. Cloudflare Dashboard → Custom domains
2. `app.fvnix.com` のステータスを確認

**解決策:**
1. ステータスが "Active" になるまで待つ（5～15分）
2. ブラウザのキャッシュをクリア
3. シークレット/プライベートモードで再アクセス

---

### 問題3: 404エラー
**症状:** ドメインは接続できるが404表示

**確認:**
1. `https://fvnix.pages.dev` で動作確認
2. Cloudflare Pages のデプロイ状況確認

**解決策:**
1. Workers & Pages → fvnix → Deployments
2. 最新デプロイが成功しているか確認
3. 失敗している場合は再デプロイ

---

### 問題4: CNAMEレコードが追加できない
**症状:** Wixで「このホスト名は既に使用されています」

**解決策:**
1. 既存のレコードを確認
2. `app` のレコードがあれば削除
3. 再度CNAMEレコードを追加

---

## 📊 設定完了後の構成図

```
┌─────────────────────────────────────────────────────────┐
│                    ドメイン構成                          │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  https://fvnix.com                                      │
│  └─→ Wixサイト（メインサイト）                          │
│      └─ コーポレート情報                                │
│      └─ ニュース・ブログ                                │
│      └─ 会社概要                                        │
│                                                         │
│  https://app.fvnix.com                                  │
│  └─→ Cloudflare Pages（製品カタログ）                   │
│      └─ 製品詳細ページ（日英中 3言語）                  │
│      └─ 精油データベース（98製品）                      │
│      └─ PDFダウンロード                                 │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

## ✅ 完了チェックリスト

### Cloudflare Pages側
- [ ] Workers & Pages → fvnix を開く
- [ ] Custom domains タブをクリック
- [ ] Set up a custom domain をクリック
- [ ] `app.fvnix.com` を入力
- [ ] Continue をクリック

### Wix DNS側
- [ ] Wixダッシュボードにログイン
- [ ] 設定 → ドメイン → fvnix.com
- [ ] DNS設定を編集
- [ ] CNAMEレコードを追加
  - ホスト: `app`
  - 値: `fvnix.pages.dev`
  - TTL: 3600
- [ ] 保存

### 確認
- [ ] DNS伝播確認（nslookup）
- [ ] Cloudflare Dashboardでステータス確認
- [ ] SSL証明書発行確認
- [ ] ブラウザでアクセス確認
- [ ] 全ページ動作確認

---

## 📞 サポート情報

### Cloudflare Dashboard
- URL: https://dash.cloudflare.com/
- プロジェクト: Workers & Pages → fvnix

### Wixサポート
- DNSヘルプ: https://support.wix.com/ja/article/外部サイトをwixドメインに接続する

### 確認スクリプト
設定完了後、以下のコマンドで動作確認：
```bash
DOMAIN=app.fvnix.com bash /tmp/check_custom_domain.sh
```

---

## 🎉 完了後のURL一覧

### メインサイト（Wix）
- https://fvnix.com

### 製品カタログ（Cloudflare Pages）
- トップ: https://app.fvnix.com/
- 英語版: https://app.fvnix.com/en
- 中国語版: https://app.fvnix.com/zh-tw
- 精油: https://app.fvnix.com/products/essential-oils
- ナッツ: https://app.fvnix.com/products/nuts-food
- コーヒー: https://app.fvnix.com/products/coffee
- 花卉: https://app.fvnix.com/products/flowers

---

**作成日:** 2026年1月9日  
**最終更新:** 2026年1月9日  
**プロジェクト:** Fvnix LLC. コーポレートサイト
