export const flowersPageJA = () => `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>プレミアム花卉 | 合同会社フェニックス</title>
    <meta name="description" content="雲南高原プレミアム花卉。標高1,500〜3,000m高原産、豊富な日照、完全品質管理。高級切り花・観賞花卉をお届けします。">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --primary-green: #2d5f3f;
            --secondary-green: #4a7c59;
            --light-green: #e8f4ea;
            --accent-gold: #b8934f;
            --flower-pink: #e91e63;
            --text-dark: #1a1a1a;
            --text-gray: #666666;
            --bg-white: #ffffff;
            --bg-light: #f8f9fa;
            --border-color: #e0e0e0;
        }
        body {
            font-family: 'Noto Serif JP', 'Yu Mincho', 'YuMincho', 'Hiragino Mincho ProN', 'Hiragino Mincho Pro', serif;
            font-weight: 400;
            line-height: 1.9;
            color: var(--text-dark);
            background: var(--bg-white);
            letter-spacing: 0.02em;
            font-feature-settings: 'palt' 1;
        }
        header {
            background: linear-gradient(135deg, var(--flower-pink) 0%, #c2185b 100%);
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
            font-weight: 500; 
            color: white; 
            text-decoration: none;
            white-space: nowrap;
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
            white-space: nowrap;
        }
        nav a:hover { color: white; }
        .lang-switcher {
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }
        .lang-switcher a {
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.5);
            color: rgba(255,255,255,0.9);
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 500;
            transition: all 0.3s;
            white-space: nowrap;
        }
        .lang-switcher a:hover {
            background: rgba(255,255,255,0.2);
            border-color: white;
            color: white;
        }
        .lang-switcher a.active {
            background: white;
            color: var(--flower-pink);
            border-color: white;
        }
        .hero {
            background: linear-gradient(135deg, var(--flower-pink) 0%, #c2185b 100%);
            color: white;
            padding: 5rem 2rem;
            text-align: center;
        }
        .hero h1 { font-size: 2.4rem; margin-bottom: 1rem; font-weight: 500; font-family: 'Noto Serif JP', serif; }
        .hero p { font-size: 1.2rem; max-width: 800px; margin: 0 auto; opacity: 0.95; }
        .container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
        .section-title {
            font-size: 1.8rem;
            color: var(--flower-pink);
            margin-bottom: 2rem;
            text-align: center;
            font-weight: 500;
            font-family: 'Noto Serif JP', serif;
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        .feature-card {
            background: white;
            border-radius: 12px;
            padding: 2.5rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            border: 1px solid var(--border-color);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        .feature-icon {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
        }
        .feature-title {
            font-size: 1.3rem;
            color: var(--flower-pink);
            margin-bottom: 1rem;
            font-weight: 500;
        }
        .feature-desc {
            color: var(--text-gray);
            line-height: 1.9;
            font-size: 0.95rem;
        }
        .stats {
            background: var(--bg-light);
            padding: 3rem 2rem;
            margin: 3rem 0;
            border-radius: 16px;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            text-align: center;
        }
        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--flower-pink);
            margin-bottom: 0.5rem;
        }
        .stat-label { color: var(--text-gray); font-size: 0.95rem; }
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        .product-card {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            border: 1px solid var(--border-color);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        .product-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        .product-name {
            font-size: 1.4rem;
            color: var(--flower-pink);
            margin-bottom: 1rem;
            font-weight: 500;
        }
        .product-desc {
            color: var(--text-gray);
            line-height: 1.9;
            font-size: 0.95rem;
        }
        .product-desc ul {
            margin-top: 1rem;
            padding-left: 1.5rem;
        }
        .product-desc li {
            margin-bottom: 0.5rem;
        }
        .highlight-box {
            background: var(--light-green);
            border-left: 4px solid var(--flower-pink);
            padding: 2rem;
            margin: 2rem 0;
            border-radius: 8px;
        }
        footer {
            background: linear-gradient(135deg, var(--flower-pink) 0%, #c2185b 100%);
            color: white;
            padding: 2rem;
            text-align: center;
            margin-top: 4rem;
        }
        footer a { color: rgba(255,255,255,0.8); text-decoration: none; margin: 0 1rem; }
        footer a:hover { color: white; }
        @media (max-width: 768px) {
            .hero h1 { font-size: 1.8rem; }
            .features-grid { grid-template-columns: 1fr; }
            .products-grid { grid-template-columns: 1fr; }
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
                <a href="/products/essential-oils">アロマ・天然香料</a>
                <a href="/products/nuts-food">健康・美容食品</a>
                <a href="/products/coffee">スペシャルティコーヒー</a>
                <a href="/products/flowers">プレミアム花卉</a>
            </nav>
            <div class="lang-switcher">
                <a href="/products/flowers" class="active">日本語</a>
                <a href="/en/products/flowers">English</a>
                <a href="/zh-tw/products/flowers">繁體中文</a>
            </div>
        </div>
    </header>

    <section class="hero">
        <h1>プレミアム花卉</h1>
        <p>雲南高原が育む、豊潤な彩りと香り。<br>四季折々の美しさを、日本の皆様へ。</p>
    </section>

    <div class="container">
        <div class="stats">
            <div class="stats-grid">
                <div>
                    <div class="stat-number">1,500-3,000m</div>
                    <div class="stat-label">栽培標高<br>高原産プレミアム品質</div>
                </div>
                <div>
                    <div class="stat-number">365日</div>
                    <div class="stat-label">年間栽培可能<br>安定供給体制</div>
                </div>
                <div>
                    <div class="stat-number">豊富な日照</div>
                    <div class="stat-label">強い紫外線<br>鮮やかな発色</div>
                </div>
                <div>
                    <div class="stat-number">Certified</div>
                    <div class="stat-label">品質認証取得<br>完全トレーサビリティ</div>
                </div>
            </div>
        </div>

        <h2 class="section-title">雲南高原の花卉産業</h2>
        <p style="text-align: center; max-width: 800px; margin: 0 auto 3rem; color: var(--text-gray); line-height: 2;">
            雲南省は「植物王国」「花の海」として知られ、中国最大の花卉生産地です。
            独特な高原気候により、一年を通じて多様な花卉栽培が可能で、
            発色の美しさ、茎の強さ、日持ちの良さで国際的に高く評価されています。
        </p>

        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">🏔️</div>
                <h3 class="feature-title">地理的優位性</h3>
                <div class="feature-desc">
                    <p>
                        標高1,500〜3,000mの高原地帯に位置し、
                        強い紫外線と豊富な日照により、
                        花色が鮮やかで濃厚な発色を実現。
                        昼夜の寒暖差が大きく、茎が丈夫で日持ちが良いのが特徴です。
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌤️</div>
                <h3 class="feature-title">理想的な気候条件</h3>
                <div class="feature-desc">
                    <p>
                        年間平均気温15〜20℃、四季如春の気候により、
                        一年を通じて花卉栽培が可能。
                        冬でも霜害が少なく、安定した生産・供給体制を構築。
                        年間日照時間2,200時間以上の恵まれた環境です。
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌸</div>
                <h3 class="feature-title">豊富な品種</h3>
                <div class="feature-desc">
                    <p>
                        薔薇、カーネーション、菊、百合、ガーベラ、
                        トルコキキョウなど、多様な切り花品種を栽培。
                        独自の地域品種と国際標準品種を組み合わせ、
                        多彩なラインナップを提供しています。
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🔬</div>
                <h3 class="feature-title">品質管理・認証</h3>
                <div class="feature-desc">
                    <p>
                        収穫から出荷まで完全なコールドチェーン管理。
                        鮮度保持技術により、長距離輸送でも高品質を維持。
                        GAP（適正農業規範）、有機認証取得済み。
                        国際市場基準に準拠した品質保証体制。
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌍</div>
                <h3 class="feature-title">国際市場実績</h3>
                <div class="feature-desc">
                    <p>
                        日本、韓国、シンガポール、タイ、
                        中東諸国など、50カ国以上への輸出実績。
                        中国国内市場では北京、上海、広州など
                        主要都市の高級ホテル・レストランへ安定供給。
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌱</div>
                <h3 class="feature-title">持続可能な生産</h3>
                <div class="feature-desc">
                    <p>
                        「会社＋基地＋農家」モデルにより、
                        地域農家の安定収入を実現。
                        環境に配慮した栽培方法、
                        節水灌漑システム、有機肥料使用など、
                        サステナブルな花卉生産を推進しています。
                    </p>
                </div>
            </div>
        </div>

        <h2 class="section-title" style="margin-top: 4rem;">主要製品カテゴリー</h2>

        <div class="products-grid">
            <div class="product-card">
                <div class="product-icon">🌹</div>
                <h3 class="product-name">高級切り花（薔薇）</h3>
                <div class="product-desc">
                    <p><strong>品種特性：</strong></p>
                    <ul>
                        <li>多様な色彩：赤、ピンク、白、黄、複色</li>
                        <li>大輪品種・スプレー品種</li>
                        <li>高原栽培による鮮やかな発色</li>
                        <li>茎が丈夫で日持ち10日以上</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>用途：</strong></p>
                    <ul>
                        <li>ホテル・レストラン装飾</li>
                        <li>ウェディング・イベント</li>
                        <li>高級フラワーアレンジメント</li>
                    </ul>
                </div>
            </div>

            <div class="product-card">
                <div class="product-icon">🌸</div>
                <h3 class="product-name">プレミアムカーネーション</h3>
                <div class="product-desc">
                    <p><strong>品種特性：</strong></p>
                    <ul>
                        <li>豊富なカラーバリエーション</li>
                        <li>花弁がしっかり、形状安定</li>
                        <li>香りの良い品種も選択可能</li>
                        <li>長期間の鮮度保持</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>用途：</strong></p>
                    <ul>
                        <li>母の日・記念日ギフト</li>
                        <li>店舗ディスプレイ</li>
                        <li>テーブルフラワー</li>
                    </ul>
                </div>
            </div>

            <div class="product-card">
                <div class="product-icon">🌺</div>
                <h3 class="product-name">百合・観賞花卉</h3>
                <div class="product-desc">
                    <p><strong>品種特性：</strong></p>
                    <ul>
                        <li>オリエンタル百合、アジアティック百合</li>
                        <li>大輪で芳香性の高い品種</li>
                        <li>発色が良く、開花状態が美しい</li>
                        <li>つぼみから満開まで長く楽しめる</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>用途：</strong></p>
                    <ul>
                        <li>高級ホテルロビー装飾</li>
                        <li>冠婚葬祭用途</li>
                        <li>プレミアムギフト</li>
                    </ul>
                </div>
            </div>

            <div class="product-card">
                <div class="product-icon">🌼</div>
                <h3 class="product-name">その他切り花品種</h3>
                <div class="product-desc">
                    <p><strong>取扱品種：</strong></p>
                    <ul>
                        <li>菊（スプレーマム、大輪菊）</li>
                        <li>ガーベラ（多色展開）</li>
                        <li>トルコキキョウ（高級品種）</li>
                        <li>季節の花材（チューリップ、ヒマワリなど）</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>カスタム対応：</strong></p>
                    <ul>
                        <li>ご要望に応じた品種選定</li>
                        <li>季節・イベントに合わせた提案</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="highlight-box" style="margin-top: 4rem;">
            <h2 class="section-title" style="text-align: left;">「雲南鮮品」ブランド</h2>
            <p style="color: var(--text-gray); line-height: 2; margin-bottom: 1rem;">
                当社の花卉製品は「雲南鮮品（Elevated Goodness）」ブランドの一環として、
                雲南高原の恵みを最高品質でお届けすることを使命としています。
                高原の清澄な環境で育まれた花々は、その美しさと品質で
                日本市場の皆様にご満足いただけるものと確信しています。
            </p>
            <p style="color: var(--text-gray); line-height: 2;">
                完全トレーサビリティにより、栽培から出荷まで一貫した品質管理を実現。
                安心・安全なプレミアム花卉を安定的に供給いたします。
            </p>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
            <h2 class="section-title">サプライチェーン・物流体制</h2>
            <p style="max-width: 800px; margin: 2rem auto; color: var(--text-gray); line-height: 2;">
                昆明国際花卉取引市場との直接連携により、
                最新の市場情報と多様な品種へのアクセスを確保。
                専用コールドチェーン物流により、
                収穫後24時間以内の低温保管・輸送体制を構築し、
                鮮度と品質を徹底的に管理しています。
            </p>
            <a href="/#contact" style="
                display: inline-block;
                background: var(--flower-pink);
                color: white;
                padding: 1rem 3rem;
                border-radius: 50px;
                text-decoration: none;
                font-weight: 500;
                margin-top: 2rem;
            ">サンプル依頼・お問い合わせ</a>
        </div>
    </div>

    <footer>
        <p>
            <a href="/">ホーム</a>
            <a href="/products/essential-oils">アロマ・天然香料</a>
            <a href="/products/nuts-food">健康・美容食品</a>
            <a href="/products/coffee">スペシャルティコーヒー</a>
        </p>
        <p style="margin-top: 1rem; opacity: 0.8;">© 2024 Fvnix LLC. All rights reserved.</p>
    </footer>
</body>
</html>
`

export const flowersPageEN = () => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Premium Flowers | Fvnix LLC.</title>
    <meta name="description" content="Yunnan Highland Premium Flowers. Altitude 1,500-3,000m cultivation, abundant sunshine, complete quality control. High-quality cut flowers and ornamental flowers.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Noto+Serif:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --primary-green: #2d5f3f;
            --secondary-green: #4a7c59;
            --light-green: #e8f4ea;
            --accent-gold: #b8934f;
            --flower-pink: #e91e63;
            --text-dark: #1a1a1a;
            font-weight: 400;
            --text-gray: #666666;
            --bg-white: #ffffff;
            letter-spacing: 0.02em;
            --bg-light: #f8f9fa;
            --border-color: #e0e0e0;
        }
        body {
            font-family: 'Noto Serif', Georgia, 'Times New Roman', serif;
            line-height: 1.9;
            color: var(--text-dark);
            background: var(--bg-white);
        }
        header {
            background: linear-gradient(135deg, var(--flower-pink) 0%, #c2185b 100%);
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
            font-weight: 500; 
            color: white; 
            text-decoration: none;
            white-space: nowrap;
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
            white-space: nowrap;
        }
        nav a:hover { color: white; }
        .lang-switcher {
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }
        .lang-switcher a {
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            border: 1px solid rgba(255,255,255,0.5);
            color: rgba(255,255,255,0.9);
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 500;
            transition: all 0.3s;
            white-space: nowrap;
        }
        .lang-switcher a:hover {
            background: rgba(255,255,255,0.2);
            border-color: white;
            color: white;
        }
        .lang-switcher a.active {
            background: white;
            color: var(--flower-pink);
            border-color: white;
        }
        .hero {
            background: linear-gradient(135deg, var(--flower-pink) 0%, #c2185b 100%);
            color: white;
            padding: 5rem 2rem;
            text-align: center;
        }
        .hero h1 { font-size: 2.4rem; margin-bottom: 1rem; font-weight: 500; font-family: 'Noto Serif', serif; }
        .hero p { font-size: 1.2rem; max-width: 800px; margin: 0 auto; opacity: 0.95; }
        .container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
        .section-title {
            font-size: 1.8rem;
            color: var(--flower-pink);
            margin-bottom: 2rem;
            text-align: center;
            font-weight: 500;
            font-family: 'Noto Serif', serif;
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        .feature-card {
            background: white;
            border-radius: 12px;
            padding: 2.5rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            border: 1px solid var(--border-color);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .feature-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        .feature-icon {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
        }
        .feature-title {
            font-size: 1.3rem;
            color: var(--flower-pink);
            margin-bottom: 1rem;
            font-weight: 500;
        }
        .feature-desc {
            color: var(--text-gray);
            line-height: 1.9;
            font-size: 0.95rem;
        }
        .stats {
            background: var(--bg-light);
            padding: 3rem 2rem;
            margin: 3rem 0;
            border-radius: 16px;
        }
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            text-align: center;
        }
        .stat-number {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--flower-pink);
            margin-bottom: 0.5rem;
        }
        .stat-label { color: var(--text-gray); font-size: 0.95rem; }
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }
        .product-card {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            border: 1px solid var(--border-color);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.15);
        }
        .product-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        .product-name {
            font-size: 1.4rem;
            color: var(--flower-pink);
            margin-bottom: 1rem;
            font-weight: 500;
        }
        .product-desc {
            color: var(--text-gray);
            line-height: 1.9;
            font-size: 0.95rem;
        }
        .product-desc ul {
            margin-top: 1rem;
            padding-left: 1.5rem;
        }
        .product-desc li {
            margin-bottom: 0.5rem;
        }
        .highlight-box {
            background: var(--light-green);
            border-left: 4px solid var(--flower-pink);
            padding: 2rem;
            margin: 2rem 0;
            border-radius: 8px;
        }
        footer {
            background: linear-gradient(135deg, var(--flower-pink) 0%, #c2185b 100%);
            color: white;
            padding: 2rem;
            text-align: center;
            margin-top: 4rem;
        }
        footer a { color: rgba(255,255,255,0.8); text-decoration: none; margin: 0 1rem; }
        footer a:hover { color: white; }
        @media (max-width: 768px) {
            .hero h1 { font-size: 1.8rem; }
            .features-grid { grid-template-columns: 1fr; }
            .products-grid { grid-template-columns: 1fr; }
            nav { display: none; }
        }
    </style>
</head>
<body>
    <header>
        <div class="header-container">
            <a href="/en" class="logo">Fvnix LLC.</a>
            <nav>
                <a href="/en">Home</a>
                <a href="/en/products/essential-oils">Essential Oils</a>
                <a href="/en/products/nuts-food">Nuts & Food</a>
                <a href="/en/products/coffee">Specialty Coffee</a>
                <a href="/en/products/flowers">Premium Flowers</a>
            </nav>
            <div class="lang-switcher">
                <a href="/products/flowers">日本語</a>
                <a href="/en/products/flowers" class="active">English</a>
                <a href="/zh-tw/products/flowers">繁體中文</a>
            </div>
        </div>
    </header>

    <section class="hero">
        <h1>Premium Flowers</h1>
        <p>Rich colors and fragrances nurtured by Yunnan Highland.<br>Bringing the beauty of every season to Japan.</p>
    </section>

    <div class="container">
        <div class="stats">
            <div class="stats-grid">
                <div>
                    <div class="stat-number">1,500-3,000m</div>
                    <div class="stat-label">Cultivation Altitude<br>Highland Premium Quality</div>
                </div>
                <div>
                    <div class="stat-number">365 Days</div>
                    <div class="stat-label">Year-Round Cultivation<br>Stable Supply System</div>
                </div>
                <div>
                    <div class="stat-number">Abundant Sun</div>
                    <div class="stat-label">Strong UV Radiation<br>Vibrant Colors</div>
                </div>
                <div>
                    <div class="stat-number">Certified</div>
                    <div class="stat-label">Quality Certified<br>Full Traceability</div>
                </div>
            </div>
        </div>

        <h2 class="section-title">Yunnan Highland Floriculture Industry</h2>
        <p style="text-align: center; max-width: 800px; margin: 0 auto 3rem; color: var(--text-gray); line-height: 2;">
            Yunnan Province, known as the "Kingdom of Plants" and "Sea of Flowers", is China's largest flower production area.
            Its unique highland climate enables diverse year-round floriculture,
            earning international acclaim for vibrant colors, strong stems, and excellent longevity.
        </p>

        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">🏔️</div>
                <h3 class="feature-title">Geographic Advantage</h3>
                <div class="feature-desc">
                    <p>
                        Located at altitudes of 1,500-3,000m on highland plateaus,
                        strong UV radiation and abundant sunshine create
                        vibrant and rich color development.
                        Large diurnal temperature variations produce sturdy stems with excellent longevity.
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌤️</div>
                <h3 class="feature-title">Ideal Climate Conditions</h3>
                <div class="feature-desc">
                    <p>
                        Annual average temperature 15-20°C, spring-like climate year-round,
                        enabling flower cultivation throughout the year.
                        Minimal frost damage even in winter, ensuring stable production and supply.
                        Over 2,200 annual sunshine hours in blessed environment.
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌸</div>
                <h3 class="feature-title">Diverse Varieties</h3>
                <div class="feature-desc">
                    <p>
                        Growing roses, carnations, chrysanthemums, lilies, gerberas,
                        lisianthus, and various cut flower varieties.
                        Combining unique regional varieties with international standards,
                        offering a diverse product lineup.
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🔬</div>
                <h3 class="feature-title">Quality Control & Certification</h3>
                <div class="feature-desc">
                    <p>
                        Complete cold chain management from harvest to shipment.
                        Freshness preservation technology maintains high quality during long-distance transport.
                        GAP (Good Agricultural Practices) and organic certification acquired.
                        Quality assurance system compliant with international market standards.
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌍</div>
                <h3 class="feature-title">International Market Track Record</h3>
                <div class="feature-desc">
                    <p>
                        Export track record to over 50 countries including Japan, Korea,
                        Singapore, Thailand, and Middle Eastern nations.
                        In China's domestic market, stable supply to luxury hotels and restaurants
                        in major cities like Beijing, Shanghai, and Guangzhou.
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌱</div>
                <h3 class="feature-title">Sustainable Production</h3>
                <div class="feature-desc">
                    <p>
                        "Company + Base + Farmers" model ensures stable income for local farmers.
                        Environmentally conscious cultivation methods,
                        water-saving irrigation systems, organic fertilizer use, etc.,
                        promoting sustainable floriculture production.
                    </p>
                </div>
            </div>
        </div>

        <h2 class="section-title" style="margin-top: 4rem;">Major Product Categories</h2>

        <div class="products-grid">
            <div class="product-card">
                <div class="product-icon">🌹</div>
                <h3 class="product-name">Luxury Cut Roses</h3>
                <div class="product-desc">
                    <p><strong>Variety Characteristics:</strong></p>
                    <ul>
                        <li>Diverse colors: red, pink, white, yellow, multicolor</li>
                        <li>Large bloom varieties & spray varieties</li>
                        <li>Vibrant colors from highland cultivation</li>
                        <li>Strong stems with 10+ days longevity</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>Applications:</strong></p>
                    <ul>
                        <li>Hotel & restaurant decoration</li>
                        <li>Weddings & events</li>
                        <li>Luxury flower arrangements</li>
                    </ul>
                </div>
            </div>

            <div class="product-card">
                <div class="product-icon">🌸</div>
                <h3 class="product-name">Premium Carnations</h3>
                <div class="product-desc">
                    <p><strong>Variety Characteristics:</strong></p>
                    <ul>
                        <li>Rich color variations</li>
                        <li>Firm petals, stable shape</li>
                        <li>Fragrant varieties available</li>
                        <li>Long-lasting freshness</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>Applications:</strong></p>
                    <ul>
                        <li>Mother's Day & anniversary gifts</li>
                        <li>Store displays</li>
                        <li>Table flowers</li>
                    </ul>
                </div>
            </div>

            <div class="product-card">
                <div class="product-icon">🌺</div>
                <h3 class="product-name">Lilies & Ornamental Flowers</h3>
                <div class="product-desc">
                    <p><strong>Variety Characteristics:</strong></p>
                    <ul>
                        <li>Oriental lilies, Asiatic lilies</li>
                        <li>Large blooms with high fragrance</li>
                        <li>Excellent color development, beautiful blooming</li>
                        <li>Long-lasting enjoyment from bud to full bloom</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>Applications:</strong></p>
                    <ul>
                        <li>Luxury hotel lobby decoration</li>
                        <li>Ceremonial occasions</li>
                        <li>Premium gifts</li>
                    </ul>
                </div>
            </div>

            <div class="product-card">
                <div class="product-icon">🌼</div>
                <h3 class="product-name">Other Cut Flower Varieties</h3>
                <div class="product-desc">
                    <p><strong>Available Varieties:</strong></p>
                    <ul>
                        <li>Chrysanthemums (spray mums, large blooms)</li>
                        <li>Gerberas (multicolor range)</li>
                        <li>Lisianthus (luxury varieties)</li>
                        <li>Seasonal flowers (tulips, sunflowers, etc.)</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>Custom Solutions:</strong></p>
                    <ul>
                        <li>Variety selection per requirements</li>
                        <li>Seasonal & event-specific proposals</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="highlight-box" style="margin-top: 4rem;">
            <h2 class="section-title" style="text-align: left;">"Elevated Goodness" Brand</h2>
            <p style="color: var(--text-gray); line-height: 2; margin-bottom: 1rem;">
                Our floriculture products are part of the "Elevated Goodness" brand,
                with a mission to deliver Yunnan Highland's bounty at the highest quality.
                Flowers nurtured in the pristine highland environment are sure to satisfy
                the Japanese market with their beauty and quality.
            </p>
            <p style="color: var(--text-gray); line-height: 2;">
                Complete traceability ensures consistent quality control from cultivation to shipment.
                We provide safe and reliable premium flowers with stable supply.
            </p>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
            <h2 class="section-title">Supply Chain & Logistics</h2>
            <p style="max-width: 800px; margin: 2rem auto; color: var(--text-gray); line-height: 2;">
                Direct collaboration with Kunming International Flora Auction Market
                ensures access to latest market information and diverse varieties.
                Dedicated cold chain logistics system maintains
                storage and transport below controlled temperature within 24 hours of harvest,
                thoroughly managing freshness and quality.
            </p>
            <a href="/en#contact" style="
                display: inline-block;
                background: var(--flower-pink);
                color: white;
                padding: 1rem 3rem;
                border-radius: 50px;
                text-decoration: none;
                font-weight: 500;
                margin-top: 2rem;
            ">Request Sample / Contact Us</a>
        </div>
    </div>

    <footer>
        <p>
            <a href="/en">Home</a>
            <a href="/en/products/essential-oils">Essential Oils</a>
            <a href="/en/products/nuts-food">Nuts & Food</a>
            <a href="/en/products/coffee">Specialty Coffee</a>
        </p>
        <p style="margin-top: 1rem; opacity: 0.8;">© 2024 Fvnix LLC. All rights reserved.</p>
    </footer>
</body>
</html>
`
