import downloadsData from '../data/downloads.json'

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

export const downloadsPageJA = (params?: { category?: string; type?: string; language?: string; search?: string }) => {
  const downloads = downloadsData as Download[]
  
  // フィルタリング処理
  let filteredDownloads = downloads
  
  if (params?.category) {
    filteredDownloads = filteredDownloads.filter(d => d.category === params.category)
  }
  
  if (params?.type) {
    filteredDownloads = filteredDownloads.filter(d => d.type === params.type)
  }
  
  if (params?.language) {
    filteredDownloads = filteredDownloads.filter(d => d.language === params.language || d.language === 'multilingual')
  }
  
  if (params?.search) {
    const searchLower = params.search.toLowerCase()
    filteredDownloads = filteredDownloads.filter(d =>
      d.title.ja.toLowerCase().includes(searchLower) ||
      d.title.en.toLowerCase().includes(searchLower) ||
      d.tags.some(tag => tag.toLowerCase().includes(searchLower))
    )
  }
  
  // ダウンロード統計
  const totalSize = filteredDownloads.reduce((sum, d) => {
    const size = parseFloat(d.size.replace('MB', '').replace('KB', ''))
    return sum + (d.size.includes('KB') ? size / 1024 : size)
  }, 0)
  
  return `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ダウンロードセンター | 合同会社フェニックス</title>
    <meta name="description" content="製品カタログ、MSDS、認証書類、技術資料のダウンロード。雲南高原プレミアム製品の詳細情報。">
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
        
        .hero-section {
            background: linear-gradient(135deg, var(--primary-green) 0%, var(--secondary-green) 100%);
            color: white;
            padding: 4rem 2rem;
            text-align: center;
        }
        
        .hero-title {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        
        .hero-subtitle {
            font-size: 1.3rem;
            opacity: 0.95;
            max-width: 800px;
            margin: 0 auto 2rem;
        }
        
        .hero-stats {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-top: 2rem;
        }
        
        .hero-stat {
            text-align: center;
        }
        
        .hero-stat-number {
            font-size: 2.5rem;
            font-weight: 700;
        }
        
        .hero-stat-label {
            font-size: 0.95rem;
            opacity: 0.9;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        /* フィルタセクション */
        .filter-section {
            background: white;
            border-radius: 16px;
            padding: 2rem;
            margin: -3rem auto 2rem;
            position: relative;
            z-index: 10;
            box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }
        
        .search-bar {
            display: flex;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .search-input {
            flex: 1;
            padding: 1rem 1.5rem;
            border: 2px solid var(--border-color);
            border-radius: 12px;
            font-size: 1rem;
            transition: border-color 0.3s;
        }
        
        .search-input:focus {
            outline: none;
            border-color: var(--primary-green);
        }
        
        .search-btn {
            padding: 1rem 2.5rem;
            background: var(--primary-green);
            color: white;
            border: none;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .search-btn:hover {
            background: var(--secondary-green);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        
        .filter-groups {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        
        .filter-group {
        }
        
        .filter-group-title {
            font-size: 0.95rem;
            font-weight: 600;
            color: var(--text-gray);
            margin-bottom: 0.8rem;
        }
        
        .filter-options {
            display: flex;
            flex-wrap: wrap;
            gap: 0.6rem;
        }
        
        .filter-option {
            padding: 0.5rem 1rem;
            background: var(--bg-light);
            border: 2px solid var(--border-color);
            border-radius: 20px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .filter-option:hover {
            border-color: var(--primary-green);
            background: var(--light-green);
        }
        
        .filter-option.active {
            background: var(--primary-green);
            color: white;
            border-color: var(--primary-green);
        }
        
        /* ダウンロードリスト */
        .downloads-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 3rem 0 2rem;
        }
        
        .downloads-count {
            font-size: 1.2rem;
            color: var(--text-gray);
        }
        
        .downloads-count strong {
            color: var(--primary-green);
            font-weight: 700;
        }
        
        .downloads-list {
            display: grid;
            gap: 1.5rem;
        }
        
        .download-item {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 2rem;
            align-items: center;
            transition: all 0.3s;
        }
        
        .download-item:hover {
            box-shadow: 0 6px 20px rgba(0,0,0,0.12);
            transform: translateY(-3px);
        }
        
        .download-icon {
            font-size: 3rem;
            width: 80px;
            height: 80px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--light-green);
            border-radius: 12px;
        }
        
        .download-info {
        }
        
        .download-title {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--text-dark);
            margin-bottom: 0.5rem;
        }
        
        .download-desc {
            font-size: 0.95rem;
            color: var(--text-gray);
            margin-bottom: 0.8rem;
            line-height: 1.6;
        }
        
        .download-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
            font-size: 0.85rem;
            color: var(--text-gray);
        }
        
        .download-meta-item {
            display: flex;
            align-items: center;
            gap: 0.4rem;
        }
        
        .download-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
            margin-top: 0.8rem;
        }
        
        .download-tag {
            padding: 0.3rem 0.8rem;
            background: var(--bg-light);
            border-radius: 12px;
            font-size: 0.8rem;
            color: var(--text-gray);
        }
        
        .download-actions {
            display: flex;
            flex-direction: column;
            gap: 0.8rem;
            align-items: flex-end;
        }
        
        .download-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.8rem 2rem;
            background: white;
            border: 2px solid rgba(139, 189, 75, 0.3);
            border-radius: 50px;
            color: var(--primary-green);
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
            box-shadow: 0 2px 8px rgba(139, 189, 75, 0.15);
        }
        
        .download-btn:hover {
            background: var(--light-green);
            border-color: var(--primary-green);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(139, 189, 75, 0.25);
        }
        
        .download-size {
            font-size: 0.85rem;
            color: var(--text-gray);
            font-weight: 500;
        }
        
        .no-results {
            text-align: center;
            padding: 6rem 2rem;
            color: var(--text-gray);
        }
        
        .no-results-icon {
            font-size: 5rem;
            margin-bottom: 1rem;
        }
        
        .no-results h3 {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
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
            .download-item {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            
            .download-actions {
                align-items: stretch;
            }
            
            .download-btn {
                width: 100%;
                justify-content: center;
            }
        }
        
        @media (max-width: 768px) {
            .hero-title {
                font-size: 2rem;
            }
            
            .hero-stats {
                flex-direction: column;
                gap: 1.5rem;
            }
            
            .filter-groups {
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
                <a href="/downloads" class="active">日本語</a>
                <a href="/en/downloads">English</a>
                <a href="/zh-tw/downloads">繁體中文</a>
            </div>
        </div>
    </header>

    <section class="hero-section">
        <h1 class="hero-title">📥 ダウンロードセンター</h1>
        <p class="hero-subtitle">
            製品カタログ、MSDS、認証書類、技術資料など、<br>
            雲南高原プレミアム製品の詳細情報をダウンロードいただけます。
        </p>
        <div class="hero-stats">
            <div class="hero-stat">
                <div class="hero-stat-number">${filteredDownloads.length}</div>
                <div class="hero-stat-label">ファイル数</div>
            </div>
            <div class="hero-stat">
                <div class="hero-stat-number">${totalSize.toFixed(1)}MB</div>
                <div class="hero-stat-label">合計サイズ</div>
            </div>
            <div class="hero-stat">
                <div class="hero-stat-number">${new Set(filteredDownloads.map(d => d.type)).size}</div>
                <div class="hero-stat-label">資料種類</div>
            </div>
        </div>
    </section>

    <div class="container">
        <!-- フィルタセクション -->
        <div class="filter-section">
            <div class="search-bar">
                <input 
                    type="text" 
                    class="search-input" 
                    placeholder="タイトル・タグで検索..." 
                    id="searchInput"
                    value="${params?.search || ''}"
                >
                <button class="search-btn" onclick="performSearch()">🔍 検索</button>
            </div>
            
            <div class="filter-groups">
                <div class="filter-group">
                    <div class="filter-group-title">📁 カテゴリー</div>
                    <div class="filter-options">
                        <span class="filter-option ${!params?.category ? 'active' : ''}" onclick="filterBy('category', '')">すべて</span>
                        <span class="filter-option ${params?.category === 'essential-oils' ? 'active' : ''}" onclick="filterBy('category', 'essential-oils')">精油</span>
                        <span class="filter-option ${params?.category === 'nuts-food' ? 'active' : ''}" onclick="filterBy('category', 'nuts-food')">食品</span>
                        <span class="filter-option ${params?.category === 'coffee' ? 'active' : ''}" onclick="filterBy('category', 'coffee')">コーヒー</span>
                        <span class="filter-option ${params?.category === 'flowers' ? 'active' : ''}" onclick="filterBy('category', 'flowers')">花卉</span>
                        <span class="filter-option ${params?.category === 'certifications' ? 'active' : ''}" onclick="filterBy('category', 'certifications')">認証</span>
                    </div>
                </div>
                
                <div class="filter-group">
                    <div class="filter-group-title">📄 資料タイプ</div>
                    <div class="filter-options">
                        <span class="filter-option ${!params?.type ? 'active' : ''}" onclick="filterBy('type', '')">すべて</span>
                        <span class="filter-option ${params?.type === 'brochure' ? 'active' : ''}" onclick="filterBy('type', 'brochure')">カタログ</span>
                        <span class="filter-option ${params?.type === 'msds' ? 'active' : ''}" onclick="filterBy('type', 'msds')">MSDS</span>
                        <span class="filter-option ${params?.type === 'certification' ? 'active' : ''}" onclick="filterBy('type', 'certification')">認証書</span>
                        <span class="filter-option ${params?.type === 'technical' ? 'active' : ''}" onclick="filterBy('type', 'technical')">技術資料</span>
                    </div>
                </div>
                
                <div class="filter-group">
                    <div class="filter-group-title">🌐 言語</div>
                    <div class="filter-options">
                        <span class="filter-option ${!params?.language ? 'active' : ''}" onclick="filterBy('language', '')">すべて</span>
                        <span class="filter-option ${params?.language === 'ja' ? 'active' : ''}" onclick="filterBy('language', 'ja')">日本語</span>
                        <span class="filter-option ${params?.language === 'en' ? 'active' : ''}" onclick="filterBy('language', 'en')">英語</span>
                        <span class="filter-option ${params?.language === 'multilingual' ? 'active' : ''}" onclick="filterBy('language', 'multilingual')">多言語</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- ダウンロードリスト -->
        <div class="downloads-header">
            <div class="downloads-count">
                <strong>${filteredDownloads.length}</strong> 件の資料
            </div>
        </div>

        ${filteredDownloads.length > 0 ? `
            <div class="downloads-list">
                ${filteredDownloads.map(download => `
                    <div class="download-item">
                        <div class="download-icon">
                            ${getDownloadIcon(download.type)}
                        </div>
                        
                        <div class="download-info">
                            <h3 class="download-title">${download.title.ja}</h3>
                            <p class="download-desc">${download.description.ja}</p>
                            
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
                                <span class="download-meta-item">
                                    📅 ${formatDate(download.updatedAt)}
                                </span>
                            </div>
                            
                            <div class="download-tags">
                                ${download.tags.slice(0, 5).map(tag => `
                                    <span class="download-tag">#${tag}</span>
                                `).join('')}
                            </div>
                        </div>
                        
                        <div class="download-actions">
                            <a href="${download.url}" class="download-btn" target="_blank" download>
                                📥 ダウンロード
                            </a>
                            <span class="download-size">${download.size}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        ` : `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>該当する資料が見つかりませんでした</h3>
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
        
        function filterBy(filterType, value) {
            const url = new URL(window.location.href);
            if (value) {
                url.searchParams.set(filterType, value);
            } else {
                url.searchParams.delete(filterType);
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

  function getDownloadIcon(type: string): string {
    const icons: Record<string, string> = {
      'brochure': '📑',
      'msds': '⚠️',
      'certification': '✓',
      'technical': '🔬'
    }
    return icons[type] || '📄'
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

  function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  }
}

// 英語版と中国語版も同様に実装...
export const downloadsPageEN = (params?: { category?: string; type?: string; language?: string; search?: string }) => {
  // 英語版実装（省略）
  return downloadsPageJA(params) // 仮実装
}

export const downloadsPageZH = (params?: { category?: string; type?: string; language?: string; search?: string }) => {
  // 中国語版実装（省略）
  return downloadsPageJA(params) // 仮実装
}
