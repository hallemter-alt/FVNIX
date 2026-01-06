export const coffeePageJA = () => `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>スペシャルティコーヒー | 合同会社フェニックス</title>
    <meta name="description" content="雲南高原プレミアムコーヒー。ハワイ・コナ、ジャマイカ・ブルーマウンテンと並ぶ世界最高級産地。アラビカ種100%、標高1,200〜2,000m栽培。">
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
            --coffee-brown: #6f4e37;
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
            background: var(--coffee-brown);
            color: white;
            padding: 1.5rem 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo { font-size: 1.2rem; font-weight: 500; color: white; text-decoration: none; }
        nav a {
            color: rgba(255,255,255,0.9);
            text-decoration: none;
            margin-left: 2rem;
            font-weight: 500;
            transition: color 0.3s;
        }
        nav a:hover { color: white; }
        .lang-switcher {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            margin-left: 2rem;
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
            margin-left: 0 !important;
        }
        .lang-switcher a:hover {
            background: rgba(255,255,255,0.2);
            border-color: white;
            color: white;
        }
        .lang-switcher a.active {
            background: white;
            color: var(--primary-green);
            border-color: white;
        }
        .hero {
            background: linear-gradient(135deg, var(--coffee-brown) 0%, #8b6f47 100%);
            color: white;
            padding: 5rem 2rem;
            text-align: center;
        }
        .hero h1 { font-size: 2.4rem; margin-bottom: 1rem; font-weight: 500; font-family: 'Noto Serif JP', serif; }
        .hero p { font-size: 1.2rem; max-width: 800px; margin: 0 auto; opacity: 0.95; }
        .container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
        .section-title {
            font-size: 1.8rem;
            color: var(--coffee-brown);
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
            color: var(--coffee-brown);
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
            color: var(--coffee-brown);
            margin-bottom: 0.5rem;
        }
        .stat-label { color: var(--text-gray); font-size: 0.95rem; }
        .highlight-section {
            background: linear-gradient(135deg, rgba(111, 78, 55, 0.05) 0%, rgba(139, 111, 71, 0.05) 100%);
            padding: 4rem 2rem;
            border-radius: 16px;
            margin: 3rem 0;
        }
        .world-class-box {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        .world-item {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            border: 2px solid var(--accent-gold);
            text-align: center;
        }
        .world-item h3 {
            color: var(--coffee-brown);
            margin-bottom: 0.5rem;
        }
        .world-item p {
            color: var(--text-gray);
            font-size: 0.9rem;
        }
        footer {
            background: var(--coffee-brown);
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
                <div class="lang-switcher">
                    <a href="/products/coffee" class="active">JP</a>
                    <a href="/en/products/coffee">EN</a>
                </div>
            </nav>
        </div>
    </header>

    <section class="hero">
        <h1>雲南高原スペシャルティコーヒー</h1>
        <p>ハワイ・コナ、ジャマイカ・ブルーマウンテンと並ぶ世界最高級産地。<br>東方高原の風土とぬくもりを、一杯のコーヒーに。</p>
    </section>

    <div class="container">
        <div class="highlight-section">
            <h2 class="section-title">世界三大プレミアムコーヒー産地</h2>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 2rem; color: var(--text-gray); line-height: 2;">
                雲南高原は、その独特な地理と気候条件により、ハワイ・コナ、ジャマイカ・ブルーマウンテンと並ぶ
                世界最高級のスペシャルティコーヒー産地として国際的に評価されています。
            </p>
            <div class="world-class-box">
                <div class="world-item">
                    <h3>☕ ハワイ・コナ</h3>
                    <p>Hawaii Kona<br>アメリカ</p>
                </div>
                <div class="world-item">
                    <h3>☕ ジャマイカ・ブルーマウンテン</h3>
                    <p>Jamaica Blue Mountain<br>ジャマイカ</p>
                </div>
                <div class="world-item" style="border-color: var(--coffee-brown); border-width: 3px;">
                    <h3>☕ 雲南高原</h3>
                    <p>Yunnan Highland<br>中国</p>
                </div>
            </div>
        </div>

        <div class="stats">
            <div class="stats-grid">
                <div>
                    <div class="stat-number">1,200-2,000m</div>
                    <div class="stat-label">栽培標高<br>高地栽培アラビカ種</div>
                </div>
                <div>
                    <div class="stat-number">100%</div>
                    <div class="stat-label">アラビカ種<br>Premium Quality</div>
                </div>
                <div>
                    <div class="stat-number">Fruity</div>
                    <div class="stat-label">フルーティで芳醇<br>独特の香り</div>
                </div>
                <div>
                    <div class="stat-number">Certified</div>
                    <div class="stat-label">国際認証取得<br>完全トレーサビリティ</div>
                </div>
            </div>
        </div>

        <h2 class="section-title">雲南コーヒーの特徴</h2>

        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">🏔️</div>
                <h3 class="feature-title">地理的優位性</h3>
                <div class="feature-desc">
                    <p>
                        雲南省は北緯23.5度に位置し、コーヒー栽培に最適な「コーヒーベルト」の中心地。
                        標高1,200〜2,000mの高原地帯で、昼夜の寒暖差が大きく、
                        コーヒー豆に複雑な風味を与えます。
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌤️</div>
                <h3 class="feature-title">理想的な気候条件</h3>
                <div class="feature-desc">
                    <p>
                        年間平均気温15〜24℃、十分な降雨量、適度な日照時間。
                        火山性土壌と豊かな有機質が、アラビカ種の成長に最適な環境を提供。
                        霜害のない温暖な気候が、高品質な豆を育みます。
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌱</div>
                <h3 class="feature-title">栽培方法</h3>
                <div class="feature-desc">
                    <p>
                        有機栽培・シェードグロウン（日陰栽培）を採用。
                        化学肥料・農薬の使用を最小限に抑え、自然な成長を促進。
                        手摘み収穫により、完熟豆のみを厳選します。
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🔬</div>
                <h3 class="feature-title">収穫と品質管理</h3>
                <div class="feature-desc">
                    <p>
                        完熟度の高い赤い実のみを手摘み収穫。
                        収穫後24時間以内に一次加工を実施。
                        ウォッシュド（水洗式）・ナチュラル（自然乾燥式）など、
                        多様な精製方法で個性豊かな味わいを実現。
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">☕</div>
                <h3 class="feature-title">味わいの特徴</h3>
                <div class="feature-desc">
                    <p>
                        <strong>香り：</strong>フルーティ、フローラル、ナッツ様<br>
                        <strong>酸味：</strong>明るく上品な柑橘系<br>
                        <strong>甘み：</strong>キャラメル、ハチミツ様の甘さ<br>
                        <strong>ボディ：</strong>ミディアム〜フル、滑らかな口当たり
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌍</div>
                <h3 class="feature-title">産業連携と国際認証</h3>
                <div class="feature-desc">
                    <p>
                        雲南省政府とコーヒー産業連携プロジェクト推進。
                        有機認証（Organic）、レインフォレスト・アライアンス認証、
                        フェアトレード認証など、国際基準をクリア。
                        持続可能なコーヒー生産を実現しています。
                    </p>
                </div>
            </div>
        </div>

        <div style="margin-top: 4rem; background: var(--light-green); padding: 3rem; border-radius: 16px;">
            <h2 class="section-title" style="color: var(--coffee-brown);">私たちの使命</h2>
            <p style="text-align: center; max-width: 800px; margin: 0 auto; color: var(--text-gray); line-height: 2; font-size: 1.1rem;">
                中国最高品質の高原コーヒーを日本へ届け、<br>
                東方高原の風土とぬくもりをより多くの人々に伝えること。<br>
                それが私たちの使命です。
            </p>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
            <h2 class="section-title">コアバリュー</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <h3 class="feature-title">Pure</h3>
                    <p class="feature-desc">雲南の純粋な自然環境で育まれた、100%アラビカ種</p>
                </div>
                <div class="feature-card">
                    <h3 class="feature-title">Premium</h3>
                    <p class="feature-desc">世界最高級産地として認められた、プレミアム品質</p>
                </div>
                <div class="feature-card">
                    <h3 class="feature-title">Passion</h3>
                    <p class="feature-desc">生産者の情熱とこだわりが詰まった、一杯一杯</p>
                </div>
            </div>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
            <a href="/#contact" style="
                display: inline-block;
                background: var(--coffee-brown);
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
            <a href="/products/flowers">プレミアム花卉</a>
        </p>
        <p style="margin-top: 1rem; opacity: 0.8;">© 2024 Fvnix LLC. All rights reserved.</p>
    </footer>
</body>
</html>
`

export const coffeePageEN = () => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Specialty Coffee | Fvnix LLC.</title>
    <meta name="description" content="Yunnan Highland Premium Coffee. World-class origin alongside Hawaii Kona and Jamaica Blue Mountain. 100% Arabica, altitude 1,200-2,000m cultivation.">
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
            font-weight: 400;
            --coffee-brown: #6f4e37;
            --text-dark: #1a1a1a;
            letter-spacing: 0.02em;
            --text-gray: #666666;
            --bg-white: #ffffff;
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
            background: var(--coffee-brown);
            color: white;
            padding: 1.5rem 2rem;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .logo { font-size: 1.2rem; font-weight: 500; color: white; text-decoration: none; }
        nav a {
            color: rgba(255,255,255,0.9);
            text-decoration: none;
            margin-left: 2rem;
            font-weight: 500;
            transition: color 0.3s;
        }
        nav a:hover { color: white; }
        .lang-switcher {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            margin-left: 2rem;
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
            margin-left: 0 !important;
        }
        .lang-switcher a:hover {
            background: rgba(255,255,255,0.2);
            border-color: white;
            color: white;
        }
        .lang-switcher a.active {
            background: white;
            color: var(--primary-green);
            border-color: white;
        }
        .hero {
            background: linear-gradient(135deg, var(--coffee-brown) 0%, #8b6f47 100%);
            color: white;
            padding: 5rem 2rem;
            text-align: center;
        }
        .hero h1 { font-size: 2.4rem; margin-bottom: 1rem; font-weight: 500; font-family: 'Noto Serif', serif; }
        .hero p { font-size: 1.2rem; max-width: 800px; margin: 0 auto; opacity: 0.95; }
        .container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
        .section-title {
            font-size: 1.8rem;
            color: var(--coffee-brown);
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
            color: var(--coffee-brown);
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
            color: var(--coffee-brown);
            margin-bottom: 0.5rem;
        }
        .stat-label { color: var(--text-gray); font-size: 0.95rem; }
        .highlight-section {
            background: linear-gradient(135deg, rgba(111, 78, 55, 0.05) 0%, rgba(139, 111, 71, 0.05) 100%);
            padding: 4rem 2rem;
            border-radius: 16px;
            margin: 3rem 0;
        }
        .world-class-box {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        .world-item {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            border: 2px solid var(--accent-gold);
            text-align: center;
        }
        .world-item h3 {
            color: var(--coffee-brown);
            margin-bottom: 0.5rem;
        }
        .world-item p {
            color: var(--text-gray);
            font-size: 0.9rem;
        }
        footer {
            background: var(--coffee-brown);
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
                <div class="lang-switcher">
                    <a href="/products/coffee">JP</a>
                    <a href="/en/products/coffee" class="active">EN</a>
                </div>
            </nav>
        </div>
    </header>

    <section class="hero">
        <h1>Yunnan Highland Specialty Coffee</h1>
        <p>World-class origin alongside Hawaii Kona and Jamaica Blue Mountain.<br>The terroir and warmth of the Eastern Highland in every cup.</p>
    </section>

    <div class="container">
        <div class="highlight-section">
            <h2 class="section-title">World's Three Premium Coffee Origins</h2>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 2rem; color: var(--text-gray); line-height: 2;">
                Yunnan Highland is internationally recognized as one of the world's finest specialty coffee origins,
                alongside Hawaii Kona and Jamaica Blue Mountain, due to its unique geographical and climatic conditions.
            </p>
            <div class="world-class-box">
                <div class="world-item">
                    <h3>☕ Hawaii Kona</h3>
                    <p>United States<br>Pacific Origin</p>
                </div>
                <div class="world-item">
                    <h3>☕ Jamaica Blue Mountain</h3>
                    <p>Jamaica<br>Caribbean Origin</p>
                </div>
                <div class="world-item" style="border-color: var(--coffee-brown); border-width: 3px;">
                    <h3>☕ Yunnan Highland</h3>
                    <p>China<br>Eastern Highland Origin</p>
                </div>
            </div>
        </div>

        <div class="stats">
            <div class="stats-grid">
                <div>
                    <div class="stat-number">1,200-2,000m</div>
                    <div class="stat-label">Cultivation Altitude<br>High-Altitude Arabica</div>
                </div>
                <div>
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Arabica Variety<br>Premium Quality</div>
                </div>
                <div>
                    <div class="stat-number">Fruity</div>
                    <div class="stat-label">Fruity & Aromatic<br>Unique Flavor</div>
                </div>
                <div>
                    <div class="stat-number">Certified</div>
                    <div class="stat-label">International Certified<br>Full Traceability</div>
                </div>
            </div>
        </div>

        <h2 class="section-title">Yunnan Coffee Characteristics</h2>

        <div class="features-grid">
            <div class="feature-card">
                <div class="feature-icon">🏔️</div>
                <h3 class="feature-title">Geographic Advantage</h3>
                <div class="feature-desc">
                    <p>
                        Located at 23.5°N latitude, Yunnan sits at the heart of the "Coffee Belt" ideal for cultivation.
                        Highland areas at 1,200-2,000m altitude with large diurnal temperature variations
                        impart complex flavors to the coffee beans.
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌤️</div>
                <h3 class="feature-title">Ideal Climate Conditions</h3>
                <div class="feature-desc">
                    <p>
                        Annual average temperature 15-24°C, sufficient rainfall, moderate sunlight hours.
                        Volcanic soil rich in organic matter provides optimal environment for Arabica growth.
                        Frost-free temperate climate nurtures high-quality beans.
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌱</div>
                <h3 class="feature-title">Cultivation Methods</h3>
                <div class="feature-desc">
                    <p>
                        Adopting organic cultivation and shade-grown methods.
                        Minimizing use of chemical fertilizers and pesticides, promoting natural growth.
                        Hand-picking ensures selection of only perfectly ripe cherries.
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🔬</div>
                <h3 class="feature-title">Harvest & Quality Control</h3>
                <div class="feature-desc">
                    <p>
                        Hand-picking only fully ripe red cherries.
                        Primary processing within 24 hours of harvest.
                        Diverse processing methods including washed and natural,
                        creating distinctive flavor profiles.
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">☕</div>
                <h3 class="feature-title">Flavor Profile</h3>
                <div class="feature-desc">
                    <p>
                        <strong>Aroma:</strong> Fruity, floral, nutty<br>
                        <strong>Acidity:</strong> Bright and elegant citrus notes<br>
                        <strong>Sweetness:</strong> Caramel, honey-like sweetness<br>
                        <strong>Body:</strong> Medium to full, smooth mouthfeel
                    </p>
                </div>
            </div>

            <div class="feature-card">
                <div class="feature-icon">🌍</div>
                <h3 class="feature-title">Industrial Collaboration & Certifications</h3>
                <div class="feature-desc">
                    <p>
                        Yunnan provincial government coffee industry collaboration project.
                        Certified organic, Rainforest Alliance, Fair Trade,
                        meeting international standards.
                        Achieving sustainable coffee production.
                    </p>
                </div>
            </div>
        </div>

        <div style="margin-top: 4rem; background: var(--light-green); padding: 3rem; border-radius: 16px;">
            <h2 class="section-title" style="color: var(--coffee-brown);">Our Mission</h2>
            <p style="text-align: center; max-width: 800px; margin: 0 auto; color: var(--text-gray); line-height: 2; font-size: 1.1rem;">
                To deliver China's finest highland coffee to Japan<br>
                and share the terroir and warmth of the Eastern Highland with more people.<br>
                This is our mission.
            </p>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
            <h2 class="section-title">Core Values</h2>
            <div class="features-grid">
                <div class="feature-card">
                    <h3 class="feature-title">Pure</h3>
                    <p class="feature-desc">100% Arabica nurtured in Yunnan's pristine natural environment</p>
                </div>
                <div class="feature-card">
                    <h3 class="feature-title">Premium</h3>
                    <p class="feature-desc">Premium quality recognized as world's finest origin</p>
                </div>
                <div class="feature-card">
                    <h3 class="feature-title">Passion</h3>
                    <p class="feature-desc">Every cup filled with producers' passion and dedication</p>
                </div>
            </div>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
            <a href="/en#contact" style="
                display: inline-block;
                background: var(--coffee-brown);
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
            <a href="/en/products/flowers">Premium Flowers</a>
        </p>
        <p style="margin-top: 1rem; opacity: 0.8;">© 2024 Fvnix LLC. All rights reserved.</p>
    </footer>
</body>
</html>
`
