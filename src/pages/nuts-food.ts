export const nutsFoodPageJA = () => `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>健康・美容食品 | 合同会社フェニックス</title>
    <meta name="description" content="雲南高原産クルミオイル・マカダミアナッツ。標高1,500〜2,500m栽培、オメガ3脂肪酸豊富、完全品質管理体制。">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --primary-color: #c17233;
            --secondary-color: #d4884f;
            --light-color: #fef4ed;
            --accent-gold: #b8934f;
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
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
        }
        header {
            background: var(--primary-color);
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
            color: var(--primary-color);
            border-color: white;
        }
        .hero {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            color: white;
            padding: 5rem 2rem;
            text-align: center;
        }
        .hero h1 { font-size: 2.4rem; margin-bottom: 1rem; font-weight: 500; font-family: 'Noto Serif JP', serif; }
        .hero p { font-size: 1.2rem; max-width: 800px; margin: 0 auto; opacity: 0.95; }
        .container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
        .section-title {
            font-size: 1.8rem;
            color: var(--primary-color);
            margin-bottom: 2rem;
            text-align: center;
            font-weight: 500;
            font-family: 'Noto Serif JP', serif;
        }
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
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
            color: var(--primary-color);
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
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        .stat-label { color: var(--text-gray); font-size: 0.95rem; }
        .highlight-box {
            background: var(--light-color);
            border-left: 4px solid var(--primary-color);
            padding: 2rem;
            margin: 2rem 0;
            border-radius: 8px;
        }
        footer {
            background: var(--primary-color);
            color: white;
            padding: 2rem;
            text-align: center;
            margin-top: 4rem;
        }
        footer a { color: rgba(255,255,255,0.8); text-decoration: none; margin: 0 1rem; }
        footer a:hover { color: white; }
        @media (max-width: 768px) {
            .hero h1 { font-size: 1.8rem; }
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
                <a href="/products/nuts-food" class="active">日本語</a>
                <a href="/en/products/nuts-food">English</a>
                <a href="/zh-tw/products/nuts-food">繁體中文</a>
            </div>
        </div>
    </header>

    <section class="hero">
        <h1>健康・美容食品</h1>
        <p>雲南高原の清澄な自然が育む、プレミアムナッツ＆オイル。<br>オメガ3脂肪酸豊富、完全品質管理体制。</p>
    </section>

    <div class="container">
        <div class="stats">
            <div class="stats-grid">
                <div>
                    <div class="stat-number">1,500-2,500m</div>
                    <div class="stat-label">栽培標高<br>雲南高原産</div>
                </div>
                <div>
                    <div class="stat-number">253,000 ha</div>
                    <div class="stat-label">マカダミア栽培面積<br>世界最大規模（臨滄）</div>
                </div>
                <div>
                    <div class="stat-number">6.7+ ha</div>
                    <div class="stat-label">加工工場敷地<br>一貫生産体制</div>
                </div>
                <div>
                    <div class="stat-number">Omega-3</div>
                    <div class="stat-label">脂肪酸豊富<br>高い油脂含量</div>
                </div>
            </div>
        </div>

        <div style="background: linear-gradient(135deg, rgba(45, 95, 63, 0.05) 0%, rgba(74, 124, 89, 0.05) 100%); padding: 3rem 2rem; border-radius: 16px; margin-bottom: 3rem;">
            <h2 class="section-title">「脳森林」ブランド - プレミアムクルミ製品シリーズ</h2>
            <p style="text-align: center; max-width: 800px; margin: 0 auto; color: var(--text-gray); line-height: 2;">
                雲南森美達生物科技が展開する「脳森林」ブランド。<br>
                2001年設立、登録資本金28億円（約USD 185M）の技術革新型バイオテクノロジー企業グループです。<br>
                天然植物の抽出・応用開発・栽培の普及を一貫して行い、独自の完全なバリューチェーンを構築しています。
            </p>
        </div>

        <h2 class="section-title">製品ラインナップ</h2>

        <div class="products-grid">
            <div class="product-card">
                <div class="product-icon">🌰</div>
                <h3 class="product-name">雲南高原産クルミオイル（脳森林）</h3>
                <div class="product-desc">
                    <p><strong>産地特性：</strong></p>
                    <ul>
                        <li>標高1,500〜2,500m栽培</li>
                        <li>強い日照、昼夜の大きな寒暖差</li>
                        <li>高い油脂含量と優れた風味</li>
                        <li>中国主要クルミ産地（雲南省）</li>
                        <li>漾濞、永仁、大姚、鳳慶などの主要産地</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>栄養成分：</strong></p>
                    <ul>
                        <li>オメガ3脂肪酸（α-リノレン酸）豊富</li>
                        <li>ビタミンE・抗酸化物質</li>
                        <li>不飽和脂肪酸</li>
                        <li>脳の健康をサポートする栄養素</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>製造技術：</strong></p>
                    <ul>
                        <li>冷搾製法で栄養価保持</li>
                        <li>独自の高度加工技術</li>
                        <li>無添加にこだわり</li>
                    </ul>
                </div>
            </div>

            <div class="product-card">
                <div class="product-icon">🥜</div>
                <h3 class="product-name">クルミ仁（加工品）</h3>
                <div class="product-desc">
                    <p><strong>加工工程：</strong></p>
                    <ul>
                        <li>殻割り・殻仁分離</li>
                        <li>手選別・光選別</li>
                        <li>焙煎加工</li>
                        <li>品質管理・分級</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>用途：</strong></p>
                    <ul>
                        <li>健康食品・スナック原料</li>
                        <li>製菓・製パン材料</li>
                        <li>食品加工原料</li>
                    </ul>
                </div>
            </div>

            <div class="product-card">
                <div class="product-icon">🌾</div>
                <h3 class="product-name">クルミたんぱく粉</h3>
                <div class="product-desc">
                    <p><strong>製品特性：</strong></p>
                    <ul>
                        <li>高品質植物性たんぱく質</li>
                        <li>低温抽出製法</li>
                        <li>栄養価保持</li>
                        <li>食品添加物不使用</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>用途：</strong></p>
                    <ul>
                        <li>プロテインサプリメント</li>
                        <li>機能性食品原料</li>
                        <li>ベジタリアン食品</li>
                    </ul>
                </div>
            </div>

            <div class="product-card">
                <div class="product-icon">🌰</div>
                <h3 class="product-name">マカダミアナッツ製品</h3>
                <div class="product-desc">
                    <p><strong>産地優位性：</strong></p>
                    <ul>
                        <li>臨滄市産（世界最大規模）</li>
                        <li>2023年栽培面積：253,000 ha</li>
                        <li>世界栽培面積の49.22%</li>
                        <li>2024年世界トップ生産量見込み</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>認証：</strong></p>
                    <ul>
                        <li>「臨滄マカダミア」地理的表示（GI）取得</li>
                        <li>国際的高評価（脂質構成・風味）</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="highlight-box" style="margin-top: 4rem;">
            <h2 class="section-title" style="text-align: left;">産地と自然優位性</h2>
            <p style="color: var(--text-gray); line-height: 2; margin-bottom: 1rem;">
                雲南省は中国における主要なクルミ産地であり、漾濞、永仁、大姚、鳳慶などの高原地域に広く分布しています。
                標高1,500〜2,500m、強い日照、昼夜の大きな寒暖差という気候特性により、油脂含量が高く、風味に優れたクルミが育ちます。
            </p>
            <p style="color: var(--text-gray); line-height: 2; margin-bottom: 1rem;">
                最新の業界データでは、中国の殻付きクルミ生産量（2024/25）は約150万トンと推計され、
                雲南はその主要生産地の一つです。森美達永仁ナッツ工場は、6.7+ haの敷地を有し、
                クルミ仁、クルミ油、クルミたんぱく粉、マカダミアナッツ製品など、
                初期加工から精密加工まで一貫した生産体系を構築しています。
            </p>
            <p style="color: var(--text-gray); line-height: 2;">
                <strong>森美達生物科技グループの強み：</strong><br>
                2001年設立以来、技術革新を通じて天然植物の抽出・応用開発・栽培の普及を一貫して行い、
                独自の完全なバリューチェーンを構築。クルミ製品シリーズ（脳森林ブランド）では、
                独自の高度加工技術により、高い栄養価を持つ製品を一般家庭へと広く普及させています。
            </p>
        </div>

        <div style="margin-top: 4rem; background: var(--bg-light); padding: 3rem 2rem; border-radius: 16px;">
            <h2 class="section-title">加工工程と品質保証</h2>
            <div class="products-grid" style="margin-top: 2rem;">
                <div class="product-card">
                    <div class="product-icon">🏭</div>
                    <h3 class="product-name">一貫生産体制</h3>
                    <div class="product-desc">
                        <ul>
                            <li>分級：原料の厳格な選別</li>
                            <li>殻割り・殻仁分離：専用設備</li>
                            <li>手選別・光選別：品質管理</li>
                            <li>焙煎：風味の最適化</li>
                            <li>冷搾：栄養価保持</li>
                            <li>たんぱく分離：高純度抽出</li>
                        </ul>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-icon">🔬</div>
                    <h3 class="product-name">技術革新</h3>
                    <div class="product-desc">
                        <ul>
                            <li>独自の高度加工技術</li>
                            <li>低温抽出製法（栄養価保持）</li>
                            <li>無添加にこだわり</li>
                            <li>完全なバリューチェーン</li>
                            <li>天然植物の抽出技術</li>
                            <li>応用開発・栽培の普及</li>
                        </ul>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-icon">✅</div>
                    <h3 class="product-name">品質管理</h3>
                    <div class="product-desc">
                        <ul>
                            <li>国内外市場基準準拠</li>
                            <li>完全トレーサビリティ</li>
                            <li>「会社＋基地＋農家」モデル</li>
                            <li>栽培から出荷まで一貫管理</li>
                            <li>主要設備完備</li>
                            <li>安定的な供給体制</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
            <h2 class="section-title">品質管理・サプライチェーン</h2>
            <p style="max-width: 800px; margin: 2rem auto; color: var(--text-gray); line-height: 2;">
                「会社＋基地＋農家」モデルにより、栽培から加工、出荷まで完全なトレーサビリティを実現。
                分級・殻割り・殻仁分離・手選別・光選・焙煎・冷搾・たんぱく分離などの主要設備を完備し、
                国内外市場へ安定的に供給できる体制を整えています。
            </p>
            <a href="/#contact" style="
                display: inline-block;
                background: var(--primary-color);
                color: white;
                padding: 1rem 3rem;
                border-radius: 50px;
                text-decoration: none;
                font-weight: 500;
                margin-top: 2rem;
            ">サンプル依頼・お問い合わせ</a>
        </div>
    </div>

    <!-- Product Brochure Download Section -->
    <div style="background: var(--bg-light); padding: 4rem 2rem;">
        <div class="container">
            <h2 class="section-title">製品カタログ・資料ダウンロード</h2>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 3rem; color: var(--text-gray);">
                雲南高原ナッツ工場の詳細資料とクルミオイル製品紹介をダウンロードいただけます。
            </p>
            
            <div style="display: grid; gap: 2rem; max-width: 800px; margin: 0 auto;">
                <!-- Walnut Oil Introduction -->
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem; font-size: 1.3rem; font-weight: 500;">
                        🌰 雲南ハイランド産 クルミオイル 製品紹介
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.8;">
                        標高2,500mの恵み。低温冷圧搾クルミオイルの特長、栄養成分、品質保証の詳細
                    </p>
                    <a href="/static/documents/product-brochures/Yunnan-Walnut-Oil-Introduction.pdf" 
                       target="_blank"
                       download
                       style="display: inline-block; background: white; color: var(--primary-color); padding: 0.8rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 500; transition: all 0.3s; border: 2px solid rgba(139, 189, 75, 0.3); box-shadow: 0 2px 8px rgba(139, 189, 75, 0.15);">
                        📥 ダウンロード（PDF・3.9MB）
                    </a>
                </div>
                
                <!-- Nuts Factory Brochure -->
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem; font-size: 1.3rem; font-weight: 500;">
                        📋 森美達永仁ナッツ工場 総合カタログ
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.8;">
                        雲南高原産クルミ・マカダミアナッツの生産拠点、加工工程、品質管理体制の詳細
                    </p>
                    <a href="/static/documents/product-brochures/Yunnan-Nuts-Factory-Brochure.pdf" 
                       target="_blank"
                       download
                       style="display: inline-block; background: white; color: var(--primary-color); padding: 0.8rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 500; transition: all 0.3s; border: 2px solid rgba(139, 189, 75, 0.3); box-shadow: 0 2px 8px rgba(139, 189, 75, 0.15);">
                        📥 ダウンロード（PDF・2.4MB）
                    </a>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <p>
            <a href="/">ホーム</a>
            <a href="/products/essential-oils">アロマ・天然香料</a>
            <a href="/products/coffee">スペシャルティコーヒー</a>
            <a href="/products/flowers">プレミアム花卉</a>
        </p>
        <p style="margin-top: 1rem; opacity: 0.8;">© 2024 Fvnix LLC. All rights reserved.</p>
    </footer>
</body>
</html>
`

export const nutsFoodPageEN = () => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuts & Healthy Food | Fvnix LLC.</title>
    <meta name="description" content="Premium walnut oil and macadamia nuts from Yunnan Highland. Altitude 1,500-2,500m cultivation, rich in Omega-3, complete quality control.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Noto+Serif:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --primary-color: #c17233;
            --secondary-color: #d4884f;
            --light-color: #fef4ed;
            --accent-gold: #b8934f;
            --text-dark: #1a1a1a;
            --text-gray: #666666;
            --bg-white: #ffffff;
            --bg-light: #f8f9fa;
            --border-color: #e0e0e0;
        }
        body {
            font-family: 'Noto Serif', Georgia, 'Times New Roman', Times, serif;
            font-weight: 400;
            line-height: 1.9;
            color: var(--text-dark);
            background: var(--bg-white);
            letter-spacing: 0.02em;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
        }
        header {
            background: var(--primary-color);
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
            color: var(--primary-color);
            border-color: white;
        }
        .hero {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            color: white;
            padding: 5rem 2rem;
            text-align: center;
        }
        .hero h1 { font-size: 2.4rem; margin-bottom: 1rem; font-weight: 500; font-family: 'Noto Serif', serif; }
        .hero p { font-size: 1.2rem; max-width: 800px; margin: 0 auto; opacity: 0.95; }
        .container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
        .section-title {
            font-size: 1.8rem;
            color: var(--primary-color);
            margin-bottom: 2rem;
            text-align: center;
            font-weight: 500;
            font-family: 'Noto Serif', serif;
        }
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
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
            color: var(--primary-color);
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
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }
        .stat-label { color: var(--text-gray); font-size: 0.95rem; }
        .highlight-box {
            background: var(--light-color);
            border-left: 4px solid var(--primary-color);
            padding: 2rem;
            margin: 2rem 0;
            border-radius: 8px;
        }
        footer {
            background: var(--primary-color);
            color: white;
            padding: 2rem;
            text-align: center;
            margin-top: 4rem;
        }
        footer a { color: rgba(255,255,255,0.8); text-decoration: none; margin: 0 1rem; }
        footer a:hover { color: white; }
        @media (max-width: 768px) {
            .hero h1 { font-size: 1.8rem; }
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
                <a href="/products/nuts-food">日本語</a>
                <a href="/en/products/nuts-food" class="active">English</a>
                <a href="/zh-tw/products/nuts-food">繁體中文</a>
            </div>
        </div>
    </header>

    <section class="hero">
        <h1>Nuts & Healthy Food</h1>
        <p>Premium nuts and oils nurtured by the pristine nature of Yunnan Highland.<br>Rich in Omega-3, complete quality control system.</p>
    </section>

    <div class="container">
        <div class="stats">
            <div class="stats-grid">
                <div>
                    <div class="stat-number">1,500-2,500m</div>
                    <div class="stat-label">Cultivation Altitude<br>Yunnan Highland</div>
                </div>
                <div>
                    <div class="stat-number">253,000 ha</div>
                    <div class="stat-label">Macadamia Cultivation Area<br>World's Largest (Lincang)</div>
                </div>
                <div>
                    <div class="stat-number">6.7+ ha</div>
                    <div class="stat-label">Processing Factory Site<br>Integrated Production</div>
                </div>
                <div>
                    <div class="stat-number">Omega-3</div>
                    <div class="stat-label">Rich in Fatty Acids<br>High Oil Content</div>
                </div>
            </div>
        </div>

        <div style="background: linear-gradient(135deg, rgba(45, 95, 63, 0.05) 0%, rgba(74, 124, 89, 0.05) 100%); padding: 3rem 2rem; border-radius: 16px; margin-bottom: 3rem;">
            <h2 class="section-title">"Brain Forest" Brand - Premium Walnut Product Series</h2>
            <p style="text-align: center; max-width: 800px; margin: 0 auto; color: var(--text-gray); line-height: 2;">
                "Brain Forest" brand by Yunnan Summit Biotech.<br>
                Established in 2001 with registered capital of 2.8 billion JPY (approx. USD 185M).<br>
                Technology-driven biotechnology enterprise group with complete value chain from natural plant extraction to cultivation.
            </p>
        </div>

        <h2 class="section-title">Product Portfolio</h2>

        <div class="products-grid">
            <div class="product-card">
                <div class="product-icon">🌰</div>
                <h3 class="product-name">Yunnan Highland Walnut Oil (Brain Forest)</h3>
                <div class="product-desc">
                    <p><strong>Origin Characteristics:</strong></p>
                    <ul>
                        <li>Altitude 1,500-2,500m cultivation</li>
                        <li>Strong sunlight, large diurnal temperature variation</li>
                        <li>High oil content and superior flavor</li>
                        <li>Major walnut production area in China (Yunnan)</li>
                        <li>Key regions: Yangbi, Yongren, Dayao, Fengqing</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>Nutritional Profile:</strong></p>
                    <ul>
                        <li>Rich in Omega-3 fatty acids (α-linolenic acid)</li>
                        <li>Vitamin E & antioxidants</li>
                        <li>Unsaturated fatty acids</li>
                        <li>Nutrients supporting brain health</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>Manufacturing Technology:</strong></p>
                    <ul>
                        <li>Cold-pressed method preserving nutrients</li>
                        <li>Proprietary advanced processing technology</li>
                        <li>No additives commitment</li>
                    </ul>
                </div>
            </div>

            <div class="product-card">
                <div class="product-icon">🥜</div>
                <h3 class="product-name">Walnut Kernels (Processed)</h3>
                <div class="product-desc">
                    <p><strong>Processing Steps:</strong></p>
                    <ul>
                        <li>Shell cracking & separation</li>
                        <li>Hand sorting & optical sorting</li>
                        <li>Roasting process</li>
                        <li>Quality control & grading</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>Applications:</strong></p>
                    <ul>
                        <li>Health food & snack ingredients</li>
                        <li>Confectionery & bakery materials</li>
                        <li>Food processing ingredients</li>
                    </ul>
                </div>
            </div>

            <div class="product-card">
                <div class="product-icon">🌾</div>
                <h3 class="product-name">Walnut Protein Powder</h3>
                <div class="product-desc">
                    <p><strong>Product Features:</strong></p>
                    <ul>
                        <li>High-quality plant protein</li>
                        <li>Low-temperature extraction method</li>
                        <li>Nutritional value preservation</li>
                        <li>No food additives</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>Applications:</strong></p>
                    <ul>
                        <li>Protein supplements</li>
                        <li>Functional food ingredients</li>
                        <li>Vegetarian food products</li>
                    </ul>
                </div>
            </div>

            <div class="product-card">
                <div class="product-icon">🌰</div>
                <h3 class="product-name">Macadamia Nut Products</h3>
                <div class="product-desc">
                    <p><strong>Origin Advantage:</strong></p>
                    <ul>
                        <li>Lincang City (World's Largest Scale)</li>
                        <li>2023 Cultivation Area: 253,000 ha</li>
                        <li>49.22% of world cultivation area</li>
                        <li>Expected world top production in 2024</li>
                    </ul>
                    <p style="margin-top: 1rem;"><strong>Certification:</strong></p>
                    <ul>
                        <li>"Lincang Macadamia" Geographic Indication (GI)</li>
                        <li>International acclaim (lipid composition & flavor)</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="highlight-box" style="margin-top: 4rem;">
            <h2 class="section-title" style="text-align: left;">Origin & Natural Advantages</h2>
            <p style="color: var(--text-gray); line-height: 2; margin-bottom: 1rem;">
                Yunnan Province is a major walnut production area in China, widely distributed in highland regions such as Yangbi, Yongren, Dayao, and Fengqing.
                The climate characteristics of altitude 1,500-2,500m, strong sunlight, and large diurnal temperature variations produce walnuts with high oil content and excellent flavor.
            </p>
            <p style="color: var(--text-gray); line-height: 2; margin-bottom: 1rem;">
                According to latest industry data, China's shelled walnut production (2024/25) is estimated at approximately 1.5 million tons,
                with Yunnan being one of the major production areas. Summit Biotech Yongren Nut Factory has over 100 mu of land and has established
                an integrated production system from primary to precision processing, including walnut kernels, walnut oil, walnut protein powder,
                and macadamia nut products.
            </p>
            <p style="color: var(--text-gray); line-height: 2;">
                <strong>Summit Biotech Group Strengths:</strong><br>
                Established in 2001, leveraging technological innovation to conduct integrated natural plant extraction, application development, and cultivation promotion,
                building a unique complete value chain. Through proprietary advanced processing technology in the walnut product series (Brain Forest brand),
                we widely distribute high-nutrition products to households.
            </p>
        </div>

        <div style="margin-top: 4rem; background: var(--bg-light); padding: 3rem 2rem; border-radius: 16px;">
            <h2 class="section-title">Processing & Quality Assurance</h2>
            <div class="products-grid" style="margin-top: 2rem;">
                <div class="product-card">
                    <div class="product-icon">🏭</div>
                    <h3 class="product-name">Integrated Production</h3>
                    <div class="product-desc">
                        <ul>
                            <li>Grading: Strict raw material selection</li>
                            <li>Shell cracking & separation: Dedicated equipment</li>
                            <li>Hand & optical sorting: Quality control</li>
                            <li>Roasting: Flavor optimization</li>
                            <li>Cold pressing: Nutrient preservation</li>
                            <li>Protein separation: High-purity extraction</li>
                        </ul>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-icon">🔬</div>
                    <h3 class="product-name">Technological Innovation</h3>
                    <div class="product-desc">
                        <ul>
                            <li>Proprietary advanced processing technology</li>
                            <li>Low-temperature extraction (nutrient preservation)</li>
                            <li>No additives commitment</li>
                            <li>Complete value chain</li>
                            <li>Natural plant extraction technology</li>
                            <li>Application development & cultivation promotion</li>
                        </ul>
                    </div>
                </div>
                <div class="product-card">
                    <div class="product-icon">✅</div>
                    <h3 class="product-name">Quality Control</h3>
                    <div class="product-desc">
                        <ul>
                            <li>Domestic & international standards compliance</li>
                            <li>Complete traceability</li>
                            <li>"Company + Base + Farmers" model</li>
                            <li>Integrated management from cultivation to shipment</li>
                            <li>Fully equipped facilities</li>
                            <li>Stable supply system</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
            <h2 class="section-title">Quality Control & Supply Chain</h2>
            <p style="max-width: 800px; margin: 2rem auto; color: var(--text-gray); line-height: 2;">
                Through the "Company + Base + Farmers" model, we achieve complete traceability from cultivation to processing and shipping.
                Equipped with major facilities including grading, shell cracking, shell-kernel separation, hand sorting, optical sorting, roasting,
                cold pressing, and protein separation, ensuring stable supply to domestic and international markets.
            </p>
            <a href="/en#contact" style="
                display: inline-block;
                background: var(--primary-color);
                color: white;
                padding: 1rem 3rem;
                border-radius: 50px;
                text-decoration: none;
                font-weight: 500;
                margin-top: 2rem;
            ">Request Sample / Contact Us</a>
        </div>
    </div>

    <!-- Product Brochure Download Section -->
    <div style="background: var(--bg-light); padding: 4rem 2rem;">
        <div class="container">
            <h2 class="section-title">Product Catalogs & Documentation Downloads</h2>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 3rem; color: var(--text-gray);">
                Download detailed brochures for Yunnan Highland Nuts Factory and Walnut Oil products.
            </p>
            
            <div style="display: grid; gap: 2rem; max-width: 800px; margin: 0 auto;">
                <!-- Walnut Oil Introduction -->
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem; font-size: 1.3rem; font-weight: 500;">
                        🌰 Yunnan Highland Walnut Oil - Product Introduction
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.8;">
                        Altitude 2,500m premium quality. Cold-pressed walnut oil features, nutritional content, and quality assurance details
                    </p>
                    <a href="/static/documents/product-brochures/Yunnan-Walnut-Oil-Introduction.pdf" 
                       target="_blank"
                       download
                       style="display: inline-block; background: white; color: var(--primary-color); padding: 0.8rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 500; transition: all 0.3s; border: 2px solid rgba(139, 189, 75, 0.3); box-shadow: 0 2px 8px rgba(139, 189, 75, 0.15);">
                        📥 Download (PDF・3.9MB)
                    </a>
                </div>
                
                <!-- Nuts Factory Brochure -->
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem; font-size: 1.3rem; font-weight: 500;">
                        📋 Senmeida Yongren Nuts Factory - Comprehensive Catalog
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.8;">
                        Yunnan Highland walnut & macadamia production facilities, processing procedures, and quality control systems
                    </p>
                    <a href="/static/documents/product-brochures/Yunnan-Nuts-Factory-Brochure.pdf" 
                       target="_blank"
                       download
                       style="display: inline-block; background: white; color: var(--primary-color); padding: 0.8rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 500; transition: all 0.3s; border: 2px solid rgba(139, 189, 75, 0.3); box-shadow: 0 2px 8px rgba(139, 189, 75, 0.15);">
                        📥 Download (PDF・2.4MB)
                    </a>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <p>
            <a href="/en">Home</a>
            <a href="/en/products/essential-oils">Essential Oils</a>
            <a href="/en/products/coffee">Specialty Coffee</a>
            <a href="/en/products/flowers">Premium Flowers</a>
        </p>
        <p style="margin-top: 1rem; opacity: 0.8;">© 2024 Fvnix LLC. All rights reserved.</p>
    </footer>
</body>
</html>
`

export const nutsFoodPageZH = () => `
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>健康美容食品 | 合同會社鳳凰</title>
    <meta name="description" content="雲南高原核桃油及夏威夷果。海拔1,500~2,500m種植，富含Omega-3，完整品質管理。">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;600;700&family=Noto+Serif+TC:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        :root {
            --primary-color: #c17233;
            --secondary-color: #d4884f;
            --light-color: #fef4ed;
            --accent-gold: #b8934f;
            --text-dark: #1a1a1a;
            --text-gray: #666666;
            --bg-white: #ffffff;
            --bg-light: #f8f9fa;
            --border-color: #e0e0e0;
        }
        body {
            font-family: 'Noto Serif TC', 'Microsoft JhengHei', 'PMingLiU', serif;
            font-weight: 400;
            line-height: 1.9;
            color: var(--text-dark);
            background: var(--bg-white);
            letter-spacing: 0.02em;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizeLegibility;
        }
        header {
            background: var(--primary-color);
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
            white-space: nowrap;
            flex-shrink: 0;
        }
        .logo a {
            color: white;
            text-decoration: none;
            transition: opacity 0.3s ease;
        }
        .logo a:hover {
            opacity: 0.9;
        }
        nav {
            display: flex;
            gap: 2rem;
            align-items: center;
            flex: 1;
            justify-content: center;
        }
        nav a {
            color: white;
            text-decoration: none;
            font-size: 0.95rem;
            font-weight: 400;
            transition: opacity 0.3s ease;
            white-space: nowrap;
        }
        nav a:hover { opacity: 0.8; }
        .lang-switcher {
            display: flex;
            gap: 0.5rem;
            align-items: center;
            flex-shrink: 0;
        }
        .lang-switcher a {
            color: white;
            text-decoration: none;
            font-size: 0.9rem;
            padding: 0.3rem 0.6rem;
            border-radius: 4px;
            transition: background-color 0.3s ease;
        }
        .lang-switcher a:hover {
            background-color: rgba(255,255,255,0.15);
        }
        .lang-switcher a.active {
            background-color: rgba(255,255,255,0.25);
            font-weight: 500;
        }
        .hero {
            background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
            color: white;
            padding: 5rem 2rem;
            text-align: center;
        }
        .hero h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            letter-spacing: 0.03em;
        }
        .hero p {
            font-size: 1.2rem;
            max-width: 800px;
            margin: 0 auto;
            opacity: 0.95;
            line-height: 1.8;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
        }
        .section-title {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 3rem;
            font-weight: 600;
            color: var(--primary-color);
        }
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
        }
        .product-card {
            background: white;
            border-radius: 8px;
            padding: 2rem;
            box-shadow: 0 2px 15px rgba(0,0,0,0.08);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .product-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 25px rgba(0,0,0,0.12);
        }
        .product-card h3 {
            font-size: 1.4rem;
            margin-bottom: 1rem;
            color: var(--primary-color);
        }
        .product-card .spec {
            margin: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
        }
        .product-card .spec::before {
            content: "✓";
            position: absolute;
            left: 0;
            color: var(--primary-color);
        }
        footer {
            background: var(--text-dark);
            color: white;
            padding: 3rem 2rem;
            text-align: center;
        }
        footer a {
            color: white;
            text-decoration: none;
            margin: 0 1rem;
            opacity: 0.8;
            transition: opacity 0.3s ease;
        }
        footer a:hover {
            opacity: 1;
        }
        @media (max-width: 768px) {
            .header-container {
                flex-direction: column;
                gap: 1rem;
            }
            nav {
                flex-direction: column;
                gap: 0.5rem;
            }
            .lang-switcher {
                flex-direction: row;
            }
            .hero h1 {
                font-size: 1.8rem;
            }
            .hero p {
                font-size: 1rem;
            }
            .product-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="header-container">
            <div class="logo">
                <a href="/zh-tw">Fvnix LLC.</a>
            </div>
            <nav>
                <a href="/zh-tw">首頁</a>
                <a href="/zh-tw/products/essential-oils">芳香·天然香料</a>
                <a href="/zh-tw/products/nuts-food">健康美容食品</a>
                <a href="/zh-tw/products/coffee">特級咖啡</a>
                <a href="/zh-tw/products/flowers">優質花卉</a>
            </nav>
            <div class="lang-switcher">
                <a href="/products/nuts-food">日本語</a>
                <a href="/en/products/nuts-food">English</a>
                <a href="/zh-tw/products/nuts-food" class="active">繁體中文</a>
            </div>
        </div>
    </header>

    <section class="hero">
        <h1>🥜 健康美容食品</h1>
        <p>雲南高原核桃油及夏威夷果。海拔1,500〜2,500m種植，富含Omega-3脂肪酸，完整品質管理體制。</p>
    </section>

    <div class="container">
        <h2 class="section-title">產品特性</h2>
        <div class="product-grid">
            <div class="product-card">
                <h3>雲南高原核桃油</h3>
                <div class="spec">原產地：雲南省迪慶、麗江地區</div>
                <div class="spec">海拔：1,500〜2,500m</div>
                <div class="spec">富含Omega-3脂肪酸（α-亞麻酸）</div>
                <div class="spec">冷壓榨取法，保留天然營養</div>
                <div class="spec">適合：美容保健、嬰幼兒營養補充</div>
            </div>

            <div class="product-card">
                <h3>雲南夏威夷果</h3>
                <div class="spec">品種：100%優質夏威夷果品種</div>
                <div class="spec">種植面積：10,000畝（約670公頃）</div>
                <div class="spec">富含單元不飽和脂肪酸</div>
                <div class="spec">天然口感，無添加加工</div>
                <div class="spec">適合：零食、烘焙材料、營養補充</div>
            </div>

            <div class="product-card">
                <h3>品質保證</h3>
                <div class="spec">ISO 9001 品質管理系統認證</div>
                <div class="spec">HACCP 食品安全管理認證</div>
                <div class="spec">Kosher 認證（猶太教潔食認證）</div>
                <div class="spec">完整產品追溯系統</div>
                <div class="spec">定期品質檢測報告</div>
            </div>
        </div>

        <h2 class="section-title">雲南高原的恩賜</h2>
        <p style="text-align: center; max-width: 800px; margin: 0 auto 2rem; line-height: 1.8;">
            雲南高原海拔1,500〜2,500m的清淨環境，孕育出世界級的優質核桃與夏威夷果。
            晝夜溫差大、日照充足的自然條件，使果實富含營養成分。
            我們堅持完整的品質管理體制，將雲南高原的恩賜，原汁原味地送達日本市場。
        </p>
    </div>

    <!-- Product Brochure Download Section -->
    <div style="background: var(--bg-light); padding: 4rem 2rem;">
        <div class="container">
            <h2 class="section-title">產品目錄‧資料下載</h2>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 3rem; color: var(--text-gray);">
                可下載雲南高原堅果工廠詳細資料及核桃油產品介紹。
            </p>
            
            <div style="display: grid; gap: 2rem; max-width: 800px; margin: 0 auto;">
                <!-- Walnut Oil Introduction -->
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem; font-size: 1.3rem; font-weight: 500;">
                        🌰 雲南高原核桃油 - 產品介紹
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.8;">
                        海拔2,500m的恩賜。低溫冷壓榨核桃油的特點、營養成分、品質保證詳情
                    </p>
                    <a href="/static/documents/product-brochures/Yunnan-Walnut-Oil-Introduction.pdf" 
                       target="_blank"
                       download
                       style="display: inline-block; background: white; color: var(--primary-color); padding: 0.8rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 500; transition: all 0.3s; border: 2px solid rgba(139, 189, 75, 0.3); box-shadow: 0 2px 8px rgba(139, 189, 75, 0.15);">
                        📥 下載（PDF・3.9MB）
                    </a>
                </div>
                
                <!-- Nuts Factory Brochure -->
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <h3 style="color: var(--primary-color); margin-bottom: 1rem; font-size: 1.3rem; font-weight: 500;">
                        📋 森美達永仁堅果工廠 - 綜合目錄
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.8;">
                        雲南高原核桃‧夏威夷果生產基地、加工流程、品質管理體系詳情
                    </p>
                    <a href="/static/documents/product-brochures/Yunnan-Nuts-Factory-Brochure.pdf" 
                       target="_blank"
                       download
                       style="display: inline-block; background: white; color: var(--primary-color); padding: 0.8rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 500; transition: all 0.3s; border: 2px solid rgba(139, 189, 75, 0.3); box-shadow: 0 2px 8px rgba(139, 189, 75, 0.15);">
                        📥 下載（PDF・2.4MB）
                    </a>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <p>
            <a href="/zh-tw">首頁</a>
            <a href="/zh-tw/products/essential-oils">芳香·天然香料</a>
            <a href="/zh-tw/products/coffee">特級咖啡</a>
            <a href="/zh-tw/products/flowers">優質花卉</a>
        </p>
        <p style="margin-top: 1rem; opacity: 0.8;">© 2024 Fvnix LLC. 版權所有。</p>
    </footer>
</body>
</html>
`
