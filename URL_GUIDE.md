# 📌 Fvnix ウェブサイト URL ガイド

## ✅ 本番環境URL（これを使用してください）

### メインサイト（Wix）
```
https://www.fvnix.com/
```
**または**
```
https://fvnix.com/
```
※ fvnix.com は自動的に www.fvnix.com へリダイレクトされます

**内容:**
- コーポレート情報
- 会社概要
- ニュース・ブログ
- お問い合わせ

---

### 製品カタログ（Cloudflare Pages）
```
https://app.fvnix.com/
```

**内容:**
- 製品詳細ページ（日英中 3言語）
- 精油データベース（98製品）
- ナッツ、コーヒー、花卉の製品情報
- PDFダウンロード（30ファイル）

**主要ページ:**
- トップ（日本語）: https://app.fvnix.com/
- トップ（英語）: https://app.fvnix.com/en
- トップ（中国語）: https://app.fvnix.com/zh-tw
- 精油（日本語）: https://app.fvnix.com/products/essential-oils
- 精油（英語）: https://app.fvnix.com/en/products/essential-oils

---

## ❌ 使用しないURL

以下のURLは**開発・テスト環境**のため、使用しないでください：

### 開発環境（サンドボックス）
```
https://3000-ik4gfl7vjdlq1fh6esuvd-*.sandbox.novita.ai  ❌
https://3001-ipuujtfiel4a5ynf4sr9v-*.sandbox.novita.ai  ❌
```

**理由:**
- ❌ サンドボックスが停止すると使えなくなる
- ❌ 一時的なテスト環境
- ❌ 本番データではない

---

## 🔧 トラブルシューティング

### Q: 「Closed Port Error」が表示される
**A:** 開発環境URLをクリックしています。本番URL（www.fvnix.com または app.fvnix.com）を使用してください。

### Q: ブックマークが使えない
**A:** 古い開発環境URLがブックマークされている可能性があります。以下の本番URLで再度ブックマークしてください：
- https://www.fvnix.com/
- https://app.fvnix.com/

### Q: サイトにアクセスできない
**A:** 以下を確認してください：
1. URLが正しいか（www.fvnix.com または app.fvnix.com）
2. インターネット接続が正常か
3. HTTPSでアクセスしているか

---

## 📊 ドメイン構成図

```
fvnix.com (Wix DNS管理)
│
├─ https://fvnix.com
│  └─→ 301リダイレクト → https://www.fvnix.com/
│      └─→ Wixメインサイト ✅
│
└─ https://app.fvnix.com
   └─→ Cloudflare Pages製品カタログ ✅
```

---

## ✅ 動作確認済み

| URL | ステータス | 確認日 |
|-----|----------|--------|
| https://www.fvnix.com/ | ✅ 稼働中 | 2026年1月9日 |
| https://app.fvnix.com/ | ✅ 稼働中 | 2026年1月9日 |

---

## 📞 サポート

### 管理画面
- **Wix Dashboard**: https://manage.wix.com/
- **Cloudflare Dashboard**: https://dash.cloudflare.com/

### GitHub Repository
- https://github.com/hallemter-alt/FVNIX

---

**作成日**: 2026年1月9日  
**最終更新**: 2026年1月9日  
**ステータス**: ✅ 本番稼働中
