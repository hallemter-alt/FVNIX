import productsData from '../data/products.json'
import downloadsData from '../data/downloads.json'

interface Product {
  id: string
  model: string
  name: { ja: string; en: string; zh: string }
  category: string
  series: string
  tags: string[]
  shortDesc: { ja: string; en: string; zh: string }
  fullDesc: { ja: string; en: string; zh: string }
  images: string[]
  specs: Record<string, any>
  downloads: string[]
  featured: boolean
  createdAt: string
  updatedAt: string
}

interface Download {
  id: string
  title: { ja: string; en: string; zh: string }
  category: string
  type: string
  language: string
  size: string
  format: string
  url: string
  description: { ja: string; en: string; zh: string }
  tags: string[]
  updatedAt: string
}

export const productDetailPageJA = (productId: string) => {
  const products = productsData as Product[]
  const downloads = downloadsData as Download[]
  
  const product = products.find(p => p.id === productId)
  
  if (!product) {
    return `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>製品が見つかりません | 合同会社フェニックス</title>
</head>
<body>
    <h1>製品が見つかりません</h1>
    <p><a href="/products">製品一覧に戻る</a></p>
</body>
</html>
    `
  }
  
  // この製品に関連するダウンロードを取得
  const relatedDownloads = downloads.filter(d => product.downloads.includes(d.id))
  
  return `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${product.name.ja} | 合同会社フェニックス</title>
    <meta name="description" content="${product.shortDesc.ja}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        html, body {
            overflow-x: hidden;
            width: 100%;
        }
        
        :root {
            --primary-green: #2d5f3f;
            --secondary-green: #4a7c59;
            --light-green: #e8f4ea;
            --accent-gold: #b8934f;
            --text-dark: #1a1a1a;
            --text-gray: #666666;
            --bg-white: #ffffff;
            --bg-light: #f8f9fa;
            --border-color: #e0e0e0;
        }
        
        body {
            font-family: 'Noto Sans JP', sans-serif;
            line-height: 1.7;
            color: var(--text-dark);
            background: var(--bg-white);
        }
        
        header {
            background: var(--primary-green);
            color: white;
            padding: 1.5rem 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .header-container {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 2rem;
        }
        
        .logo { 
            font-size: 1.2rem; 
            font-weight: 600; 
            color: white; 
            text-decoration: none;
        }
        
        nav {
            flex: 1;
            display: flex;
            justify-content: center;
            gap: 2rem;
        }
        
        nav a {
            color: rgba(255,255,255,0.9);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
        }
        
        nav a:hover { color: white; }
        
        .lang-switcher {
            display: flex;
            gap: 0.5rem;
        }
        
        .lang-switcher a {
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.5);
            color: rgba(255,255,255,0.9);
            text-decoration: none;
            font-size: 0.85rem;
            transition: all 0.3s;
        }
        
        .lang-switcher a.active {
            background: white;
            color: var(--primary-green);
        }
        
        .breadcrumb {
            max-width: 1400px;
            margin: 2rem auto;
            padding: 0 2rem;
            font-size: 0.9rem;
            color: var(--text-gray);
        }
        
        .breadcrumb a {
            color: var(--primary-green);
            text-decoration: none;
        }
        
        .breadcrumb a:hover {
            text-decoration: underline;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .product-detail {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            margin-bottom: 4rem;
        }
        
        .product-image-section {
            position: sticky;
            top: 2rem;
            height: fit-content;
        }
        
        .product-image {
            width: 100%;
            height: 500px;
            background: var(--bg-light);
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 8rem;
            margin-bottom: 1rem;
        }
        
        .product-info-section {
        }
        
        .product-model {
            font-size: 0.95rem;
            color: var(--accent-gold);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        
        .product-title {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--text-dark);
            margin-bottom: 1rem;
            line-height: 1.3;
        }
        
        .product-subtitle {
            font-size: 1.2rem;
            color: var(--text-gray);
            margin-bottom: 2rem;
            line-height: 1.6;
        }
        
        .product-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
            margin-bottom: 2rem;
        }
        
        .product-tag {
            padding: 0.5rem 1rem;
            background: var(--light-green);
            color: var(--primary-green);
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
        }
        
        .product-description {
            background: var(--bg-light);
            padding: 2rem;
            border-radius: 12px;
            margin-bottom: 2rem;
            line-height: 1.9;
            font-size: 1.05rem;
        }
        
        .specs-section {
            background: white;
            border: 2px solid var(--border-color);
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 2rem;
        }
        
        .specs-title {
            font-size: 1.5rem;
            font-weight: 600;
            color: var(--primary-green);
            margin-bottom: 1.5rem;
        }
        
        .spec-item {
            display: flex;
            padding: 1rem 0;
            border-bottom: 1px solid var(--border-color);
        }
        
        .spec-item:last-child {
            border-bottom: none;
        }
        
        .spec-label {
            font-weight: 600;
            color: var(--text-dark);
            min-width: 150px;
        }
        
        .spec-value {
            color: var(--text-gray);
        }
        
        /* ダウンロードセクション */
        .downloads-section {
            background: linear-gradient(135deg, var(--light-green) 0%, #f0f8f4 100%);
            padding: 3rem 2rem;
            border-radius: 16px;
            margin-top: 4rem;
        }
        
        .downloads-title {
            font-size: 2rem;
            font-weight: 700;
            color: var(--primary-green);
            margin-bottom: 1rem;
            text-align: center;
        }
        
        .downloads-subtitle {
            text-align: center;
            color: var(--text-gray);
            margin-bottom: 3rem;
            font-size: 1.05rem;
        }
        
        .downloads-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 1.5rem;
        }
        
        .download-card {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            transition: all 0.3s;
        }
        
        .download-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.12);
        }
        
        .download-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .download-title {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--text-dark);
            margin-bottom: 0.8rem;
        }
        
        .download-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 1rem;
            font-size: 0.85rem;
            color: var(--text-gray);
        }
        
        .download-meta-item {
            display: flex;
            align-items: center;
            gap: 0.3rem;
        }
        
        .download-desc {
            font-size: 0.95rem;
            color: var(--text-gray);
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }
        
        .download-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.8rem 1.5rem;
            background: white;
            border: 2px solid rgba(139, 189, 75, 0.3);
            border-radius: 50px;
            color: var(--primary-green);
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s;
            box-shadow: 0 2px 8px rgba(139, 189, 75, 0.15);
        }
        
        .download-btn:hover {
            background: var(--light-green);
            border-color: var(--primary-green);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(139, 189, 75, 0.25);
        }
        
        .cta-section {
            background: var(--primary-green);
            color: white;
            text-align: center;
            padding: 4rem 2rem;
            border-radius: 16px;
            margin-top: 4rem;
        }
        
        .cta-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        
        .cta-text {
            font-size: 1.1rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .cta-btn {
            display: inline-block;
            padding: 1rem 3rem;
            background: white;
            color: var(--primary-green);
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s;
        }
        
        .cta-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }
        
        footer {
            background: var(--text-dark);
            color: white;
            padding: 3rem 2rem;
            text-align: center;
            margin-top: 4rem;
        }
        
        footer a {
            color: rgba(255,255,255,0.8);
            text-decoration: none;
            margin: 0 1rem;
        }
        
        footer a:hover { color: white; }
        
        @media (max-width: 1024px) {
            .product-detail {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .product-image-section {
                position: relative;
                top: 0;
            }
        }
        
        @media (max-width: 768px) {
            .product-title {
                font-size: 2rem;
            }
            
            .downloads-grid {
                grid-template-columns: 1fr;
            }
            
            nav { display: none; }
        }
    </style>
</head>
<body>
    <header>
        <div class="header-container">
            <a href="/" class="logo">Fvnix LLC.</a>
            <nav>
                <a href="/">ホーム</a>
                <a href="/products">製品一覧</a>
                <a href="/downloads">ダウンロード</a>
                <a href="/#contact">お問い合わせ</a>
            </nav>
            <div class="lang-switcher">
                <a href="/products/${product.id}" class="active">日本語</a>
                <a href="/en/products/${product.id}">English</a>
                <a href="/zh-tw/products/${product.id}">繁體中文</a>
            </div>
        </div>
    </header>

    <div class="breadcrumb">
        <a href="/">ホーム</a> / 
        <a href="/products">製品一覧</a> / 
        <a href="/products?category=${product.category}">${getCategoryName(product.category)}</a> / 
        ${product.name.ja}
    </div>

    <div class="container">
        <div class="product-detail">
            <div class="product-image-section">
                <div class="product-image">
                    ${getCategoryIcon(product.category)}
                </div>
                ${product.featured ? '<p style="text-align: center; color: var(--accent-gold); font-weight: 600;">⭐ おすすめ製品</p>' : ''}
            </div>

            <div class="product-info-section">
                <div class="product-model">品番: ${product.model}</div>
                <h1 class="product-title">${product.name.ja}</h1>
                <p class="product-subtitle">${product.shortDesc.ja}</p>
                
                <div class="product-tags">
                    ${product.tags.map(tag => `
                        <span class="product-tag">#${tag}</span>
                    `).join('')}
                </div>
                
                <div class="product-description">
                    <p>${product.fullDesc.ja}</p>
                </div>
                
                <div class="specs-section">
                    <h2 class="specs-title">📋 製品仕様</h2>
                    ${Object.entries(product.specs).map(([key, value]) => `
                        <div class="spec-item">
                            <div class="spec-label">${translateSpecKey(key)}</div>
                            <div class="spec-value">${formatSpecValue(value)}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>

        ${relatedDownloads.length > 0 ? `
            <div class="downloads-section">
                <h2 class="downloads-title">📥 関連ダウンロード資料</h2>
                <p class="downloads-subtitle">
                    この製品に関する技術資料、安全データシート、認証書類などをダウンロードいただけます。
                </p>
                
                <div class="downloads-grid">
                    ${relatedDownloads.map(download => `
                        <div class="download-card">
                            <div class="download-icon">${getDownloadIcon(download.type)}</div>
                            <h3 class="download-title">${download.title.ja}</h3>
                            <div class="download-meta">
                                <span class="download-meta-item">
                                    📄 ${download.format}
                                </span>
                                <span class="download-meta-item">
                                    💾 ${download.size}
                                </span>
                                <span class="download-meta-item">
                                    🌐 ${translateLanguage(download.language)}
                                </span>
                            </div>
                            <p class="download-desc">${download.description.ja}</p>
                            <a href="${download.url}" class="download-btn" target="_blank" download>
                                📥 ダウンロード
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        ` : ''}

        <div class="cta-section">
            <h2 class="cta-title">この製品についてお問い合わせ</h2>
            <p class="cta-text">
                サンプル依頼、価格見積もり、その他ご質問がございましたら<br>
                お気軽にお問い合わせください。
            </p>
            <a href="/#contact" class="cta-btn">💬 お問い合わせ・サンプル依頼</a>
        </div>
    </div>

    <footer>
        <p>
            <a href="/">ホーム</a>
            <a href="/products">製品一覧</a>
            <a href="/downloads">ダウンロード</a>
            <a href="/#contact">お問い合わせ</a>
        </p>
        <p style="margin-top: 1rem; opacity: 0.8;">© 2024 Fvnix LLC. All rights reserved.</p>
    </footer>
</body>
</html>
  `

  function getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
      'essential-oils': '🌿',
      'nuts-food': '🥜',
      'coffee': '☕',
      'flowers': '🌸'
    }
    return icons[category] || '📦'
  }

  function getCategoryName(category: string): string {
    const names: Record<string, string> = {
      'essential-oils': 'アロマ・天然香料',
      'nuts-food': '健康・美容食品',
      'coffee': 'スペシャルティコーヒー',
      'flowers': 'プレミアム花卉'
    }
    return names[category] || '製品'
  }

  function getDownloadIcon(type: string): string {
    const icons: Record<string, string> = {
      'brochure': '📑',
      'msds': '⚠️',
      'certification': '✓',
      'technical': '🔬'
    }
    return icons[type] || '📄'
  }

  function translateSpecKey(key: string): string {
    const translations: Record<string, string> = {
      'altitude': '栽培標高',
      'extraction': '抽出方法',
      'certification': '認証',
      'origin': '原産地',
      'botanicalName': '学名',
      'extractionPart': '抽出部位',
      'extractionMethod': '抽出方式',
      'variety': '品種',
      'processing': '加工方法',
      'gradeSize': 'グレード・サイズ',
      'colors': 'カラー',
      'stemLength': '茎の長さ',
      'longevity': '日持ち'
    }
    return translations[key] || key
  }

  function formatSpecValue(value: any): string {
    if (Array.isArray(value)) {
      return value.join(', ')
    }
    return String(value)
  }

  function translateLanguage(lang: string): string {
    const translations: Record<string, string> = {
      'multilingual': '多言語',
      'ja': '日本語',
      'en': '英語',
      'zh': '中国語'
    }
    return translations[lang] || lang
  }
}

// 英語版と中国語版も同様に実装...
export const productDetailPageEN = (productId: string) => {
  // 英語版実装（省略）
  return productDetailPageJA(productId) // 仮実装
}

export const productDetailPageZH = (productId: string) => {
  // 中国語版実装（省略）
  return productDetailPageJA(productId) // 仮実装
}
