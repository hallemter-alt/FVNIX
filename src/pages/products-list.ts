import productsData from '../data/products.json'

interface Product {
  id: string
  model: string
  name: { ja: string; en: string; zh: string }
  category: string
  series: string
  tags: string[]
  shortDesc: { ja: string; en: string; zh: string }
  featured: boolean
}

export const productsListPageJA = (params?: { category?: string; series?: string; tags?: string; search?: string }) => {
  const products = productsData as Product[]
  
  // フィルタリング処理
  let filteredProducts = products
  
  if (params?.category) {
    filteredProducts = filteredProducts.filter(p => p.category === params.category)
  }
  
  if (params?.series) {
    filteredProducts = filteredProducts.filter(p => p.series === params.series)
  }
  
  if (params?.tags) {
    const tagList = params.tags.split(',')
    filteredProducts = filteredProducts.filter(p => 
      tagList.some(tag => p.tags.includes(tag.trim()))
    )
  }
  
  if (params?.search) {
    const searchLower = params.search.toLowerCase()
    filteredProducts = filteredProducts.filter(p =>
      p.model.toLowerCase().includes(searchLower) ||
      p.name.ja.toLowerCase().includes(searchLower) ||
      p.name.en.toLowerCase().includes(searchLower)
    )
  }
  
  // カテゴリー情報
  const categories = [
    { id: 'all', name: 'すべての製品', icon: '📦' },
    { id: 'essential-oils', name: 'アロマ・天然香料', icon: '🌿' },
    { id: 'nuts-food', name: '健康・美容食品', icon: '🥜' },
    { id: 'coffee', name: 'スペシャルティコーヒー', icon: '☕' },
    { id: 'flowers', name: 'プレミアム花卉', icon: '🌸' }
  ]

  return `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>製品一覧 | 合同会社フェニックス</title>
    <meta name="description" content="雲南高原プレミアム製品の一覧。アロマ・天然香料、健康・美容食品、スペシャルティコーヒー、プレミアム花卉。">
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
            background: var(--bg-light);
        }
        
        header {
            background: var(--primary-green);
            color: white;
            padding: 1.5rem 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 100;
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
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .page-title {
            font-size: 2.5rem;
            color: var(--primary-green);
            margin-bottom: 1rem;
            font-weight: 700;
        }
        
        .page-subtitle {
            font-size: 1.1rem;
            color: var(--text-gray);
            margin-bottom: 3rem;
        }
        
        /* フィルタセクション */
        .filter-section {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            margin-bottom: 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .search-bar {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .search-input {
            flex: 1;
            padding: 0.8rem 1.2rem;
            border: 2px solid var(--border-color);
            border-radius: 8px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }
        
        .search-input:focus {
            outline: none;
            border-color: var(--primary-green);
        }
        
        .search-btn {
            padding: 0.8rem 2rem;
            background: var(--primary-green);
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: 500;
            cursor: pointer;
            transition: background 0.3s;
        }
        
        .search-btn:hover {
            background: var(--secondary-green);
        }
        
        .filter-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.8rem;
        }
        
        .filter-tag {
            padding: 0.5rem 1.2rem;
            background: var(--bg-light);
            border: 2px solid var(--border-color);
            border-radius: 20px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .filter-tag:hover {
            border-color: var(--primary-green);
            background: var(--light-green);
        }
        
        .filter-tag.active {
            background: var(--primary-green);
            color: white;
            border-color: var(--primary-green);
        }
        
        /* カテゴリータブ */
        .category-tabs {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }
        
        .category-tab {
            padding: 0.8rem 1.5rem;
            background: white;
            border: 2px solid var(--border-color);
            border-radius: 10px;
            font-size: 1rem;
            cursor: pointer;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        .category-tab:hover {
            border-color: var(--primary-green);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .category-tab.active {
            background: var(--primary-green);
            color: white;
            border-color: var(--primary-green);
        }
        
        /* 製品グリッド */
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .product-card {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.08);
            transition: all 0.3s;
            cursor: pointer;
        }
        
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .product-image {
            width: 100%;
            height: 220px;
            background: var(--bg-light);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
        }
        
        .product-content {
            padding: 1.5rem;
        }
        
        .product-model {
            font-size: 0.85rem;
            color: var(--accent-gold);
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        
        .product-name {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--text-dark);
            margin-bottom: 0.8rem;
        }
        
        .product-desc {
            font-size: 0.95rem;
            color: var(--text-gray);
            line-height: 1.6;
            margin-bottom: 1rem;
        }
        
        .product-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 1rem;
        }
        
        .product-tag {
            padding: 0.3rem 0.8rem;
            background: var(--light-green);
            color: var(--primary-green);
            border-radius: 12px;
            font-size: 0.8rem;
        }
        
        .featured-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: var(--accent-gold);
            color: white;
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
        }
        
        .no-results {
            text-align: center;
            padding: 4rem 2rem;
            color: var(--text-gray);
        }
        
        .no-results-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
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
        
        @media (max-width: 768px) {
            .products-grid {
                grid-template-columns: 1fr;
            }
            
            .category-tabs {
                flex-direction: column;
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
                <a href="/products" class="active">日本語</a>
                <a href="/en/products">English</a>
                <a href="/zh-tw/products">繁體中文</a>
            </div>
        </div>
    </header>

    <div class="container">
        <h1 class="page-title">製品一覧</h1>
        <p class="page-subtitle">雲南高原の恵みを、日本の皆様へ。プレミアム製品をご覧ください。</p>

        <!-- フィルタセクション -->
        <div class="filter-section">
            <div class="search-bar">
                <input 
                    type="text" 
                    class="search-input" 
                    placeholder="製品名・品番で検索..." 
                    id="searchInput"
                    value="${params?.search || ''}"
                >
                <button class="search-btn" onclick="performSearch()">🔍 検索</button>
            </div>
            
            <div class="filter-tags">
                <span class="filter-tag ${!params?.tags ? 'active' : ''}" onclick="filterByTag('')">すべて</span>
                <span class="filter-tag ${params?.tags?.includes('organic') ? 'active' : ''}" onclick="filterByTag('organic')">🌱 オーガニック</span>
                <span class="filter-tag ${params?.tags?.includes('certification') ? 'active' : ''}" onclick="filterByTag('certification')">✓ 認証取得</span>
                <span class="filter-tag ${params?.tags?.includes('premium') ? 'active' : ''}" onclick="filterByTag('premium')">⭐ プレミアム</span>
                <span class="filter-tag ${params?.tags?.includes('highland') ? 'active' : ''}" onclick="filterByTag('highland')">🏔️ 高原産</span>
            </div>
        </div>

        <!-- カテゴリータブ -->
        <div class="category-tabs">
            ${categories.map(cat => `
                <div class="category-tab ${(!params?.category && cat.id === 'all') || params?.category === cat.id ? 'active' : ''}" 
                     onclick="filterByCategory('${cat.id === 'all' ? '' : cat.id}')">
                    <span>${cat.icon}</span>
                    <span>${cat.name}</span>
                </div>
            `).join('')}
        </div>

        <!-- 製品グリッド -->
        ${filteredProducts.length > 0 ? `
            <div class="products-grid">
                ${filteredProducts.map(product => `
                    <div class="product-card" onclick="location.href='/products/${product.id}'">
                        ${product.featured ? '<span class="featured-badge">⭐ おすすめ</span>' : ''}
                        <div class="product-image">
                            ${getCategoryIcon(product.category)}
                        </div>
                        <div class="product-content">
                            <div class="product-model">${product.model}</div>
                            <h3 class="product-name">${product.name.ja}</h3>
                            <p class="product-desc">${product.shortDesc.ja}</p>
                            <div class="product-tags">
                                ${product.tags.slice(0, 3).map(tag => `
                                    <span class="product-tag">#${tag}</span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        ` : `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>該当する製品が見つかりませんでした</h3>
                <p>検索条件を変更してお試しください</p>
            </div>
        `}
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

    <script>
        function performSearch() {
            const searchInput = document.getElementById('searchInput').value;
            const url = new URL(window.location.href);
            if (searchInput) {
                url.searchParams.set('search', searchInput);
            } else {
                url.searchParams.delete('search');
            }
            window.location.href = url.toString();
        }
        
        function filterByCategory(category) {
            const url = new URL(window.location.href);
            if (category) {
                url.searchParams.set('category', category);
            } else {
                url.searchParams.delete('category');
            }
            window.location.href = url.toString();
        }
        
        function filterByTag(tag) {
            const url = new URL(window.location.href);
            if (tag) {
                url.searchParams.set('tags', tag);
            } else {
                url.searchParams.delete('tags');
            }
            window.location.href = url.toString();
        }
        
        // Enter キーで検索
        document.getElementById('searchInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    </script>
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
}

// 英語版と中国語版も同様に実装...
export const productsListPageEN = (params?: { category?: string; series?: string; tags?: string; search?: string }) => {
  // 英語版実装（省略）
  return productsListPageJA(params) // 仮実装
}

export const productsListPageZH = (params?: { category?: string; series?: string; tags?: string; search?: string }) => {
  // 中国語版実装（省略）
  return productsListPageJA(params) // 仮実装
}
