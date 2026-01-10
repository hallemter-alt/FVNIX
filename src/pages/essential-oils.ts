export const essentialOilsPageJA = () => `
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>アロマ・天然香料 | 合同会社フェニックス</title>
    <meta name="description" content="世界シェア40%+のユーカリ油をはじめ、95製品以上の高品質天然精油を供給。ISO 9001、REACH、KOSHER認証取得済み。">
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
            color: var(--primary-green);
            border-color: white;
        }
        .hero {
            background: linear-gradient(135deg, var(--primary-green) 0%, var(--secondary-green) 100%);
            color: white;
            padding: 5rem 2rem;
            text-align: center;
        }
        .hero h1 { font-size: 2.4rem; margin-bottom: 1rem; font-weight: 500; font-family: 'Noto Serif JP', serif; }
        .hero p { font-size: 1.2rem; max-width: 800px; margin: 0 auto; opacity: 0.95; }
        .container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
        .section-title {
            font-size: 1.8rem;
            color: var(--primary-green);
            margin-bottom: 2rem;
            text-align: center;
            font-weight: 500;
            font-family: 'Noto Serif JP', serif;
        }
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
        .product-code {
            background: var(--light-green);
            color: var(--primary-green);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            display: inline-block;
            margin-bottom: 1rem;
        }
        .product-name {
            font-size: 1.3rem;
            color: var(--primary-green);
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        .product-latin {
            font-size: 0.9rem;
            color: var(--text-gray);
            font-style: italic;
            margin-bottom: 1rem;
        }
        .product-desc {
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
            color: var(--primary-green);
            margin-bottom: 0.5rem;
        }
        .stat-label { color: var(--text-gray); font-size: 0.95rem; }
        footer {
            background: var(--primary-green);
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
                <a href="/products/essential-oils" class="active">日本語</a>
                <a href="/en/products/essential-oils">English</a>
                <a href="/zh-tw/products/essential-oils">繁體中文</a>
            </div>
        </div>
    </header>

    <section class="hero">
        <h1>アロマ・天然香料</h1>
        <p>世界が認める品質。雲南高原から世界へ、純度100%の天然精油をお届けします。</p>
    </section>

    <div class="container">
        <div class="stats">
            <div class="stats-grid">
                <div>
                    <div class="stat-number">40%+</div>
                    <div class="stat-label">ユーカリ油<br>世界シェア（Global No.1）</div>
                </div>
                <div>
                    <div class="stat-number">30%</div>
                    <div class="stat-label">桂油<br>世界シェア（Global Top 3）</div>
                </div>
                <div>
                    <div class="stat-number">30%</div>
                    <div class="stat-label">ティーツリー油<br>世界シェア（Global Top 2）</div>
                </div>
                <div>
                    <div class="stat-number">63+</div>
                    <div class="stat-label">製品ラインナップ<br>FNX001-FNX095</div>
                </div>
            </div>
        </div>

        <h2 class="section-title">主要製品ラインナップ</h2>

        <div class="products-grid">
            <div class="product-card">
                <span class="product-code">FNX001</span>
                <h3 class="product-name">ホワイトオーキッド油</h3>
                <p class="product-latin">Michelia Alba / 白蘭花油</p>
                <p class="product-desc">
                    エキゾチックな甘さを持つ豊かなフローラルノート。主成分：リナロール、酢酸ベンジル。
                    陶酔的な花の特性を持つ中国伝統的な香料定香剤。
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX002</span>
                <h3 class="product-name">ネロリ油（玳玳花油）</h3>
                <p class="product-latin">Citrus Aurantium Amara / 玳玳花油</p>
                <p class="product-desc">
                    繊細なフローラル・シトラス調のミドルノート。主成分：リナロール、酢酸リナリル、リモネン。
                    蜂蜜様のフローラル・グリーンのニュアンスと微かな苦みを持つ古典的な調香素材。
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX003</span>
                <h3 class="product-name">ジャスミンABS</h3>
                <p class="product-latin">Jasmin Absolute / 茉莉花浄油</p>
                <p class="product-desc">
                    溶剤萃取法による高濃度芳香物質。浓郁甜美的花香，被誉为「香氛之王」。
                    高級香水の核となる重要な原料。
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX004</span>
                <h3 class="product-name">キンモクセイABS</h3>
                <p class="product-latin">Osmanthus Absolute / 桂花浄油</p>
                <p class="product-desc">
                    溶剤萃取法による高濃度芳香物質。果香と甜味が交織し、
                    秋を告げる桂花特有の醇厚な香気。
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX007</span>
                <h3 class="product-name">蓝桉叶油（ユーカリ）</h3>
                <p class="product-latin">Eucalyptus Globulus / 世界シェア40%+</p>
                <p class="product-desc">
                    極めて強い穿透力、清涼感、樟脳気息。富含1,8-桉叶素，
                    呼吸系統護理製品の経典成分。世界シェアNo.1製品。
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX009</span>
                <h3 class="product-name">ティーツリー油</h3>
                <p class="product-latin">Melaleuca Alternifolia / 世界トップ2</p>
                <p class="product-desc">
                    清新、辛辣、薬草般的潔浄香気。広譜的抗菌・抗ウイルス特性で知られ、
                    ニキビケアと皮膚護理のスター成分。世界シェアトップ2。
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX024</span>
                <h3 class="product-name">桂皮油（肉桂）</h3>
                <p class="product-latin">Cinnamomum Cassia / 世界トップ3</p>
                <p class="product-desc">
                    樟科肉桂の樹皮・枝葉精油。香気辛辣甜暖、極佳的留香性と温暖感を持つ。
                    世界シェアトップ3製品。
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX005-FNX063</span>
                <h3 class="product-name">その他40製品以上</h3>
                <p class="product-latin">Complete Product Database</p>
                <p class="product-desc">
                    ラベンダー、広藿香、迷迭香、生姜油、山鶏椒油など、
                    多様な天然精油製品をラインナップ。詳細は製品カタログをご覧ください。
                </p>
            </div>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
            <h2 class="section-title">国際認証・品質保証</h2>
            <p style="max-width: 800px; margin: 2rem auto; color: var(--text-gray); line-height: 2;">
                すべての製品はISO 9001、REACH、KOSHER、HACCP、cGMPなどの国際認証を取得済み。
                完全なトレーサビリティ管理により、種子選定から製品出荷まで一貫した品質保証を実現しています。
            </p>
            <a href="/#contact" style="
                display: inline-block;
                background: var(--primary-green);
                color: white;
                padding: 1rem 3rem;
                border-radius: 50px;
                text-decoration: none;
                font-weight: 500;
                margin-top: 2rem;
            ">サンプル依頼・お問い合わせ</a>
        </div>
    </div>

    <!-- Product Catalog Downloads Section -->
    <div style="background: var(--bg-light); padding: 4rem 2rem;">
        <div class="container">
            <h2 class="section-title">製品カタログ・資料ダウンロード</h2>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 3rem; color: var(--text-gray);">
                製品データベース、安全データシート（MSDS）、各種認証書類をダウンロードいただけます。
            </p>
            
            <div style="display: grid; gap: 2rem; max-width: 1000px; margin: 0 auto;">
                <!-- Main BtoB Master Catalog -->
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <h3 style="color: var(--primary-green); margin-bottom: 1rem; font-size: 1.3rem; font-weight: 500;">
                        📋 精油総合カタログ - BtoB Master Edition（最新版）
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.8;">
                        雲南ハイランド産プレミアム精油95種類を網羅。大手商社・OEM向け総合資料。詳細仕様、CAS番号、技術データを完全収録。
                    </p>
                    <a href="/static/documents/Fvnix-Essential-Oils-BtoB-Master-Catalog-2026.pdf" 
                       target="_blank"
                       download
                       style="display: inline-block; background: white; color: var(--primary-green); padding: 0.8rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 500; transition: all 0.3s; border: 2px solid rgba(139, 189, 75, 0.3); box-shadow: 0 2px 8px rgba(139, 189, 75, 0.15);">
                        📥 ダウンロード（PDF・23MB）
                    </a>
                </div>

                <!-- MSDS Documents -->
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <h3 style="color: var(--primary-green); margin-bottom: 1rem; font-size: 1.3rem; font-weight: 500;">
                        📄 安全データシート（MSDS） - 全23製品
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.8;">
                        各製品の安全性情報、取扱注意事項、化学成分データ
                    </p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
                        <a href="/static/documents/msds/MSDS-Lavender Oil「ラベンダーオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> ラベンダーオイル
                        </a>
                        <a href="/static/documents/msds/MSDS-Jasmine Absolute「ジャスミン絶対油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> ジャスミン絶対油
                        </a>
                        <a href="/static/documents/msds/MSDS-Osmanthus Absolute「キンモクセイ純油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> キンモクセイ純油
                        </a>
                        <a href="/static/documents/msds/MSDS-Geranium Oil「ゼラニウムオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> ゼラニウムオイル
                        </a>
                        <a href="/static/documents/msds/MSDS-Damask Rose Oil「ダマスクローズオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> ダマスクローズオイル
                        </a>
                        <a href="/static/documents/msds/MSDS-Eucalyptus Citriodora Oil「レモンユーカリ油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> レモンユーカリ油
                        </a>
                        <a href="/static/documents/msds/MSDS-Cassia Oil「シナモンオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> シナモンオイル
                        </a>
                        <a href="/static/documents/msds/MSDS-Magnolia flower oil「ホワイトオーキッド油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> ホワイトオーキッド油
                        </a>
                        <a href="/static/documents/msds/MSDS-Daidai Flower Oil「ネロリ油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> ネロリ油
                        </a>
                        <a href="/static/documents/msds/MSDS-Patchouli Oil「パチョリオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> パチョリオイル
                        </a>
                        <a href="/static/documents/msds/MSDS-Ginger Oil「ジンジャーオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> ジンジャーオイル
                        </a>
                        <a href="/static/documents/msds/MSDS-Litsea Cubeba Oil「リツェァクベバオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> リツェァクベバオイル
                        </a>
                        <a href="/static/documents/msds/MSDS-Agarwood Oil沉香油.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 沈香油
                        </a>
                        <a href="/static/documents/msds/MSDS-Cedarwood Oil「シーダーウッド」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> シーダーウッド
                        </a>
                        <a href="/static/documents/msds/MSDS-Chamomile Roman Oil「ローマカモミールオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> ローマカモミールオイル
                        </a>
                        <a href="/static/documents/msds/MSDS-Citronella Oil「シトロネラオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> シトロネラオイル
                        </a>
                        <a href="/static/documents/msds/MSDS-Clary Sage Oil「クラリセージオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> クラリセージオイル
                        </a>
                        <a href="/static/documents/msds/MSDS-Garlic oil-UN1993「ガーリック油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> ガーリック油
                        </a>
                        <a href="/static/documents/msds/MSDS-Ho Leaf Oil「ホーリーフ油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> ホーリーフ油
                        </a>
                        <a href="/static/documents/msds/MSDS-Star Anise Oil「スターアニスオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> スターアニスオイル
                        </a>
                        <a href="/static/documents/msds/MSDS-Valerian Oil「バレリアン油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> バレリアン油
                        </a>
                        <a href="/static/documents/msds/MSDS-Vetiver Oil「ベチバーオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> ベチバーオイル
                        </a>
                        <a href="/static/documents/msds/MSDS-Wintergreen Oil「ウィンターグリーン油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> ウィンターグリーン油
                        </a>
                    </div>
                </div>

                <!-- Certifications -->
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <h3 style="color: var(--primary-green); margin-bottom: 1rem; font-size: 1.3rem; font-weight: 500;">
                        ✓ 認証書類
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.8;">
                        国際品質認証、安全管理認証の証明書類
                    </p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1rem;">
                        <a href="/static/documents/certifications/ISO9001認証.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 8px; text-align: center; transition: all 0.3s;">
                            ✓ ISO 9001
                        </a>
                        <a href="/static/documents/certifications/HACCP認証（英文版）.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 8px; text-align: center; transition: all 0.3s;">
                            ✓ HACCP
                        </a>
                        <a href="/static/documents/certifications/Kosher認証.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 8px; text-align: center; transition: all 0.3s;">
                            ✓ Kosher
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <p>
            <a href="/">ホーム</a>
            <a href="/products/nuts-food">健康・美容食品</a>
            <a href="/products/coffee">スペシャルティコーヒー</a>
            <a href="/products/flowers">プレミアム花卉</a>
        </p>
        <p style="margin-top: 1rem; opacity: 0.8;">© 2024 Fvnix LLC. All rights reserved.</p>
    </footer>
</body>
</html>
`

export const essentialOilsPageEN = () => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Essential Oils | Fvnix LLC.</title>
    <meta name="description" content="World's leading supplier of natural essential oils with 40%+ global market share in Eucalyptus oil. ISO 9001, REACH, KOSHER certified.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&family=Noto+Serif:wght@400;500;600;700&display=swap" rel="stylesheet">
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
            color: var(--primary-green);
            border-color: white;
        }
        .hero {
            background: linear-gradient(135deg, var(--primary-green) 0%, var(--secondary-green) 100%);
            color: white;
            padding: 5rem 2rem;
            text-align: center;
        }
        .hero h1 { font-size: 2.4rem; margin-bottom: 1rem; font-weight: 500; font-family: 'Noto Serif', serif; }
        .hero p { font-size: 1.2rem; max-width: 800px; margin: 0 auto; opacity: 0.95; }
        .container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
        .section-title {
            font-size: 1.8rem;
            color: var(--primary-green);
            margin-bottom: 2rem;
            text-align: center;
            font-weight: 500;
            font-family: 'Noto Serif', serif;
        }
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
        .product-code {
            background: var(--light-green);
            color: var(--primary-green);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            display: inline-block;
            margin-bottom: 1rem;
        }
        .product-name {
            font-size: 1.3rem;
            color: var(--primary-green);
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        .product-latin {
            font-size: 0.9rem;
            color: var(--text-gray);
            font-style: italic;
            margin-bottom: 1rem;
        }
        .product-desc {
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
            color: var(--primary-green);
            margin-bottom: 0.5rem;
        }
        .stat-label { color: var(--text-gray); font-size: 0.95rem; }
        footer {
            background: var(--primary-green);
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
                <a href="/products/essential-oils">日本語</a>
                <a href="/en/products/essential-oils" class="active">English</a>
                <a href="/zh-tw/products/essential-oils">繁體中文</a>
            </div>
        </div>
    </header>

    <section class="hero">
        <h1>Essential Oils & Natural Aromatics</h1>
        <p>World-class quality from Yunnan Highland. 100% pure natural essential oils trusted globally.</p>
    </section>

    <div class="container">
        <div class="stats">
            <div class="stats-grid">
                <div>
                    <div class="stat-number">40%+</div>
                    <div class="stat-label">Eucalyptus Oil<br>Global Market Share (No.1)</div>
                </div>
                <div>
                    <div class="stat-number">30%</div>
                    <div class="stat-label">Cassia Oil<br>Global Market Share (Top 3)</div>
                </div>
                <div>
                    <div class="stat-number">30%</div>
                    <div class="stat-label">Tea Tree Oil<br>Global Market Share (Top 2)</div>
                </div>
                <div>
                    <div class="stat-number">63+</div>
                    <div class="stat-label">Product Portfolio<br>FNX001-FNX095</div>
                </div>
            </div>
        </div>

        <h2 class="section-title">Featured Products</h2>

        <div class="products-grid">
            <div class="product-card">
                <span class="product-code">FNX001</span>
                <h3 class="product-name">White Orchid Oil</h3>
                <p class="product-latin">Michelia Alba / INCI: MICHELIA ALBA FLOWER OIL</p>
                <p class="product-desc">
                    Rich floral note with exotic sweetness. Main components: Linalool, Benzyl Acetate.
                    A traditional Chinese fixative with intoxicating floral characteristics.
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX002</span>
                <h3 class="product-name">Neroli Oil</h3>
                <p class="product-latin">Citrus Aurantium Amara / Bitter Orange Flower</p>
                <p class="product-desc">
                    Delicate floral-citrus middle note. Main components: Linalool, Linalyl Acetate, Limonene.
                    Classic perfumery material with honey-like floral-green nuances and subtle bitterness.
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX003</span>
                <h3 class="product-name">Jasmine Absolute</h3>
                <p class="product-latin">Jasminum Grandiflorum / Solvent Extraction</p>
                <p class="product-desc">
                    High-concentration aromatic obtained by solvent extraction. Rich and sweet floral scent,
                    known as the "King of Fragrance". Core ingredient in luxury perfumes.
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX004</span>
                <h3 class="product-name">Osmanthus Absolute</h3>
                <p class="product-latin">Osmanthus Fragrans / Solvent Extraction</p>
                <p class="product-desc">
                    High-concentration aromatic by solvent extraction. Fruity and sweet intertwined,
                    characteristic rich aroma of osmanthus announcing autumn.
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX007</span>
                <h3 class="product-name">Eucalyptus Globulus Oil</h3>
                <p class="product-latin">Blue Gum / Global Market Share 40%+</p>
                <p class="product-desc">
                    Extremely strong penetrating power, cooling sensation, camphoraceous scent.
                    Rich in 1,8-cineole, classic ingredient for respiratory care products. World's No.1 market share.
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX009</span>
                <h3 class="product-name">Tea Tree Oil</h3>
                <p class="product-latin">Melaleuca Alternifolia / Global Top 2</p>
                <p class="product-desc">
                    Fresh, spicy, medicinal clean scent. Known for broad-spectrum antibacterial and antiviral properties.
                    Star ingredient for acne treatment and skin care. Global market share Top 2.
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX024</span>
                <h3 class="product-name">Cassia Oil (Chinese Cinnamon)</h3>
                <p class="product-latin">Cinnamomum Cassia / Global Top 3</p>
                <p class="product-desc">
                    Bark and leaf oil from Lauraceae cinnamon. Spicy, sweet, warm scent with excellent fixative properties
                    and warming sensation. Global market share Top 3 product.
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX005-FNX063</span>
                <h3 class="product-name">40+ Additional Products</h3>
                <p class="product-latin">Complete Product Database</p>
                <p class="product-desc">
                    Lavender, Patchouli, Rosemary, Ginger Oil, Litsea Cubeba Oil and more.
                    Diverse natural essential oil product lineup. See product catalog for details.
                </p>
            </div>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
            <h2 class="section-title">International Certifications & Quality Assurance</h2>
            <p style="max-width: 800px; margin: 2rem auto; color: var(--text-gray); line-height: 2;">
                All products are certified with ISO 9001, REACH, KOSHER, HACCP, cGMP and other international standards.
                Complete traceability management ensures consistent quality assurance from seed selection to product shipment.
            </p>
            <a href="/en#contact" style="
                display: inline-block;
                background: var(--primary-green);
                color: white;
                padding: 1rem 3rem;
                border-radius: 50px;
                text-decoration: none;
                font-weight: 500;
                margin-top: 2rem;
            ">Request Sample / Contact Us</a>
        </div>
    </div>

    <!-- Product Catalog Downloads Section -->
    <div style="background: var(--bg-light); padding: 4rem 2rem;">
        <div class="container">
            <h2 class="section-title">Product Catalog & Documentation Downloads</h2>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 3rem; color: var(--text-gray);">
                Download our product database, Material Safety Data Sheets (MSDS), and certification documents.
            </p>
            
            <div style="display: grid; gap: 2rem; max-width: 1000px; margin: 0 auto;">
                <!-- Main BtoB Master Catalog -->
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <h3 style="color: var(--primary-green); margin-bottom: 1rem; font-size: 1.3rem; font-weight: 500;">
                        📋 Essential Oils Master Catalog - BtoB Edition (Latest)
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.8;">
                        Comprehensive catalog of 95 premium essential oils from Yunnan Highland. For major trading companies and OEM partners. Complete specifications, CAS numbers, and technical data.
                    </p>
                    <a href="/static/documents/Fvnix-Essential-Oils-BtoB-Master-Catalog-2026.pdf" 
                       target="_blank"
                       download
                       style="display: inline-block; background: white; color: var(--primary-green); padding: 0.8rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 500; transition: all 0.3s; border: 2px solid rgba(139, 189, 75, 0.3); box-shadow: 0 2px 8px rgba(139, 189, 75, 0.15);">
                        📥 Download (PDF・23MB)
                    </a>
                </div>

                <!-- MSDS Documents -->
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <h3 style="color: var(--primary-green); margin-bottom: 1rem; font-size: 1.3rem; font-weight: 500;">
                        📄 Material Safety Data Sheets (MSDS) - 23 Products
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.8;">
                        Safety information, handling precautions, and chemical composition data for each product
                    </p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
                        <a href="/static/documents/msds/MSDS-Lavender Oil「ラベンダーオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Lavender Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Jasmine Absolute「ジャスミン絶対油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Jasmine Absolute
                        </a>
                        <a href="/static/documents/msds/MSDS-Osmanthus Absolute「キンモクセイ純油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Osmanthus Absolute
                        </a>
                        <a href="/static/documents/msds/MSDS-Geranium Oil「ゼラニウムオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Geranium Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Damask Rose Oil「ダマスクローズオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Damask Rose Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Eucalyptus Citriodora Oil「レモンユーカリ油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Eucalyptus Citriodora
                        </a>
                        <a href="/static/documents/msds/MSDS-Cassia Oil「シナモンオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Cassia Oil (Cinnamon)
                        </a>
                        <a href="/static/documents/msds/MSDS-Magnolia flower oil「ホワイトオーキッド油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Magnolia Flower Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Daidai Flower Oil「ネロリ油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Neroli Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Patchouli Oil「パチョリオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Patchouli Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Ginger Oil「ジンジャーオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Ginger Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Litsea Cubeba Oil「リツェァクベバオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Litsea Cubeba Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Agarwood Oil沉香油.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Agarwood Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Cedarwood Oil「シーダーウッド」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Cedarwood Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Chamomile Roman Oil「ローマカモミールオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Chamomile Roman Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Citronella Oil「シトロネラオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Citronella Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Clary Sage Oil「クラリセージオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Clary Sage Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Garlic oil-UN1993「ガーリック油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Garlic Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Ho Leaf Oil「ホーリーフ油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Ho Leaf Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Star Anise Oil「スターアニスオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Star Anise Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Valerian Oil「バレリアン油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Valerian Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Vetiver Oil「ベチバーオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Vetiver Oil
                        </a>
                        <a href="/static/documents/msds/MSDS-Wintergreen Oil「ウィンターグリーン油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> Wintergreen Oil
                        </a>
                    </div>
                </div>

                <!-- Certifications -->
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <h3 style="color: var(--primary-green); margin-bottom: 1rem; font-size: 1.3rem; font-weight: 500;">
                        ✓ Certifications
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.8;">
                        International quality and safety management certification documents
                    </p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1rem;">
                        <a href="/static/documents/certifications/ISO9001認証.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 8px; text-align: center; transition: all 0.3s;">
                            ✓ ISO 9001
                        </a>
                        <a href="/static/documents/certifications/HACCP認証（英文版）.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 8px; text-align: center; transition: all 0.3s;">
                            ✓ HACCP
                        </a>
                        <a href="/static/documents/certifications/Kosher認証.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 8px; text-align: center; transition: all 0.3s;">
                            ✓ Kosher
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <p>
            <a href="/en">Home</a>
            <a href="/en/products/nuts-food">Nuts & Food</a>
            <a href="/en/products/coffee">Specialty Coffee</a>
            <a href="/en/products/flowers">Premium Flowers</a>
        </p>
        <p style="margin-top: 1rem; opacity: 0.8;">© 2024 Fvnix LLC. All rights reserved.</p>
    </footer>
</body>
</html>
`

export const essentialOilsPageZH = () => `
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>精油・天然香料 | Fvnix 合同會社</title>
    <meta name="description" content="全球市佔率40%+的尤加利精油領導供應商。提供95種以上高品質天然精油產品。獲ISO 9001、REACH、KOSHER認證。">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;600;700&family=Noto+Serif+TC:wght@400;500;600;700&display=swap" rel="stylesheet">
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
            font-family: 'Noto Serif TC', '微軟正黑體', 'Microsoft JhengHei', serif;
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
            color: var(--primary-green);
            border-color: white;
        }
        .hero {
            background: linear-gradient(135deg, var(--primary-green) 0%, var(--secondary-green) 100%);
            color: white;
            padding: 5rem 2rem;
            text-align: center;
        }
        .hero h1 { font-size: 2.4rem; margin-bottom: 1rem; font-weight: 500; font-family: 'Noto Serif TC', serif; }
        .hero p { font-size: 1.2rem; max-width: 800px; margin: 0 auto; opacity: 0.95; }
        .container { max-width: 1200px; margin: 0 auto; padding: 4rem 2rem; }
        .section-title {
            font-size: 1.8rem;
            color: var(--primary-green);
            margin-bottom: 2rem;
            text-align: center;
            font-weight: 500;
            font-family: 'Noto Serif TC', serif;
        }
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
        .product-code {
            background: var(--light-green);
            color: var(--primary-green);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            display: inline-block;
            margin-bottom: 1rem;
        }
        .product-name {
            font-size: 1.3rem;
            color: var(--primary-green);
            margin-bottom: 0.5rem;
            font-weight: 500;
        }
        .product-latin {
            font-size: 0.9rem;
            color: var(--text-gray);
            font-style: italic;
            margin-bottom: 1rem;
        }
        .product-desc {
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
            color: var(--primary-green);
            margin-bottom: 0.5rem;
        }
        .stat-label { color: var(--text-gray); font-size: 0.95rem; }
        footer {
            background: var(--primary-green);
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
            <a href="/zh-tw" class="logo">Fvnix 合同會社</a>
            <nav>
                <a href="/zh-tw">首頁</a>
                <a href="/zh-tw/products/essential-oils">精油・天然香料</a>
                <a href="/zh-tw/products/nuts-food">堅果・健康食品</a>
                <a href="/zh-tw/products/coffee">特色咖啡</a>
                <a href="/zh-tw/products/flowers">頂級花卉</a>
            </nav>
            <div class="lang-switcher">
                <a href="/products/essential-oils">日本語</a>
                <a href="/en/products/essential-oils">English</a>
                <a href="/zh-tw/products/essential-oils" class="active">繁體中文</a>
            </div>
        </div>
    </header>

    <section class="hero">
        <h1>精油・天然香料</h1>
        <p>來自雲南高原的世界級品質。全球信賴的100%純天然精油。</p>
    </section>

    <div class="container">
        <div class="stats">
            <div class="stats-grid">
                <div>
                    <div class="stat-number">40%+</div>
                    <div class="stat-label">尤加利精油<br>全球市佔率（世界第一）</div>
                </div>
                <div>
                    <div class="stat-number">30%</div>
                    <div class="stat-label">桂油<br>全球市佔率（世界前三）</div>
                </div>
                <div>
                    <div class="stat-number">30%</div>
                    <div class="stat-label">茶樹精油<br>全球市佔率（世界前二）</div>
                </div>
                <div>
                    <div class="stat-number">63+</div>
                    <div class="stat-label">產品系列<br>FNX001-FNX095</div>
                </div>
            </div>
        </div>

        <h2 class="section-title">主要產品系列</h2>

        <div class="products-grid">
            <div class="product-card">
                <span class="product-code">FNX001</span>
                <h3 class="product-name">白蘭花油</h3>
                <p class="product-latin">Michelia Alba / 白蘭花油</p>
                <p class="product-desc">
                    富含異國甜味的豐富花香調。主要成分：芳樟醇、乙酸苄酯。
                    中國傳統定香劑，具有令人陶醉的花香特性。
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX002</span>
                <h3 class="product-name">橙花精油（玳玳花油）</h3>
                <p class="product-latin">Citrus Aurantium Amara / 玳玳花油</p>
                <p class="product-desc">
                    精緻的花香柑橘中調。主要成分：芳樟醇、乙酸芳樟酯、檸檬烯。
                    經典調香材料，帶有蜂蜜般的花香綠色氣息與微妙苦味。
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX003</span>
                <h3 class="product-name">茉莉原精</h3>
                <p class="product-latin">Jasmin Absolute / 茉莉花淨油</p>
                <p class="product-desc">
                    溶劑萃取法獲得的高濃度芳香物質。濃郁甜美的花香，被譽為「香氛之王」。
                    高級香水的核心重要原料。
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX004</span>
                <h3 class="product-name">桂花原精</h3>
                <p class="product-latin">Osmanthus Absolute / 桂花淨油</p>
                <p class="product-desc">
                    溶劑萃取法獲得的高濃度芳香物質。果香與甜味交織，
                    秋天報信的桂花特有醇厚香氣。
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX007</span>
                <h3 class="product-name">藍桉葉油（尤加利）</h3>
                <p class="product-latin">Eucalyptus Globulus / 全球市佔率40%+</p>
                <p class="product-desc">
                    極強穿透力、清涼感、樟腦氣息。富含1,8-桉葉素，
                    呼吸系統護理產品的經典成分。全球市佔率第一產品。
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX009</span>
                <h3 class="product-name">茶樹精油</h3>
                <p class="product-latin">Melaleuca Alternifolia / 全球前二</p>
                <p class="product-desc">
                    清新、辛辣、藥草般的潔淨香氣。以廣譜抗菌、抗病毒特性聞名，
                    痘痘護理與皮膚護理的明星成分。全球市佔率前二。
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX024</span>
                <h3 class="product-name">桂皮油（肉桂）</h3>
                <p class="product-latin">Cinnamomum Cassia / 全球前三</p>
                <p class="product-desc">
                    樟科肉桂的樹皮・枝葉精油。香氣辛辣甜暖、極佳的留香性與溫暖感。
                    全球市佔率前三產品。
                </p>
            </div>

            <div class="product-card">
                <span class="product-code">FNX005-FNX063</span>
                <h3 class="product-name">其他40種以上產品</h3>
                <p class="product-latin">Complete Product Database</p>
                <p class="product-desc">
                    薰衣草、廣藿香、迷迭香、生薑油、山雞椒油等，
                    多樣天然精油產品系列。詳情請參閱產品目錄。
                </p>
            </div>
        </div>

        <div style="margin-top: 4rem; text-align: center;">
            <h2 class="section-title">國際認證・品質保證</h2>
            <p style="max-width: 800px; margin: 2rem auto; color: var(--text-gray); line-height: 2;">
                所有產品皆已取得ISO 9001、REACH、KOSHER、HACCP、cGMP等國際認證。
                透過完整的可追溯性管理，從種子選定到產品出貨實現一貫的品質保證。
            </p>
            <a href="/zh-tw#contact" style="
                display: inline-block;
                background: var(--primary-green);
                color: white;
                padding: 1rem 3rem;
                border-radius: 50px;
                text-decoration: none;
                font-weight: 500;
                margin-top: 2rem;
            ">樣品申請・聯絡我們</a>
        </div>
    </div>

    <!-- Product Catalog Downloads Section -->
    <div style="background: var(--bg-light); padding: 4rem 2rem;">
        <div class="container">
            <h2 class="section-title">產品目錄・資料下載</h2>
            <p style="text-align: center; max-width: 800px; margin: 0 auto 3rem; color: var(--text-gray);">
                下載產品資料庫、安全資料表（MSDS）、各項認證文件。
            </p>
            
            <div style="display: grid; gap: 2rem; max-width: 1000px; margin: 0 auto;">
                <!-- Main BtoB Master Catalog -->
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <h3 style="color: var(--primary-green); margin-bottom: 1rem; font-size: 1.3rem; font-weight: 500;">
                        📋 精油總合目錄 - BtoB Master Edition（最新版）
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.8;">
                        雲南高原頂級精油95種完整收錄。面向大型貿易商‧OEM合作夥伴的綜合資料。完整規格、CAS編號、技術資料。
                    </p>
                    <a href="/static/documents/Fvnix-Essential-Oils-BtoB-Master-Catalog-2026.pdf" 
                       target="_blank"
                       download
                       style="display: inline-block; background: white; color: var(--primary-green); padding: 0.8rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 500; transition: all 0.3s; border: 2px solid rgba(139, 189, 75, 0.3); box-shadow: 0 2px 8px rgba(139, 189, 75, 0.15);">
                        📥 下載（PDF・23MB）
                    </a>
                </div>

                <!-- MSDS Documents -->
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <h3 style="color: var(--primary-green); margin-bottom: 1rem; font-size: 1.3rem; font-weight: 500;">
                        📄 安全資料表（MSDS） - 全23種產品
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.8;">
                        各產品安全性資訊、處理注意事項、化學成分資料
                    </p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
                        <a href="/static/documents/msds/MSDS-Lavender Oil「ラベンダーオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 薰衣草精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Jasmine Absolute「ジャスミン絶対油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 茉莉原精
                        </a>
                        <a href="/static/documents/msds/MSDS-Osmanthus Absolute「キンモクセイ純油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 桂花原精
                        </a>
                        <a href="/static/documents/msds/MSDS-Geranium Oil「ゼラニウムオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 天竺葵精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Damask Rose Oil「ダマスクローズオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 大馬士革玫瑰精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Eucalyptus Citriodora Oil「レモンユーカリ油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 檸檬尤加利精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Cassia Oil「シナモンオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 桂皮精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Magnolia flower oil「ホワイトオーキッド油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 白蘭花精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Daidai Flower Oil「ネロリ油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 橙花精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Patchouli Oil「パチョリオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 廣藿香精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Ginger Oil「ジンジャーオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 生薑精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Litsea Cubeba Oil「リツェァクベバオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 山雞椒精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Agarwood Oil沉香油.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 沉香精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Cedarwood Oil「シーダーウッド」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 雪松精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Chamomile Roman Oil「ローマカモミールオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 羅馬洋甘菊精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Citronella Oil「シトロネラオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 香茅精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Clary Sage Oil「クラリセージオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 快樂鼠尾草精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Garlic oil-UN1993「ガーリック油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 大蒜精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Ho Leaf Oil「ホーリーフ油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 芳樟精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Star Anise Oil「スターアニスオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 八角精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Valerian Oil「バレリアン油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 纈草精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Vetiver Oil「ベチバーオイル」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 岩蘭草精油
                        </a>
                        <a href="/static/documents/msds/MSDS-Wintergreen Oil「ウィンターグリーン油」.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: 8px; transition: all 0.3s; display: flex; align-items: center; gap: 0.5rem;">
                            <span>📄</span> 冬青精油
                        </a>
                    </div>
                </div>

                <!-- Certifications -->
                <div style="background: white; padding: 2rem; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                    <h3 style="color: var(--primary-green); margin-bottom: 1rem; font-size: 1.3rem; font-weight: 500;">
                        ✓ 認證文件
                    </h3>
                    <p style="color: var(--text-gray); margin-bottom: 1.5rem; line-height: 1.8;">
                        國際品質認證、安全管理認證的證明文件
                    </p>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1rem;">
                        <a href="/static/documents/certifications/ISO9001認証.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 8px; text-align: center; transition: all 0.3s;">
                            ✓ ISO 9001
                        </a>
                        <a href="/static/documents/certifications/HACCP認証（英文版）.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 8px; text-align: center; transition: all 0.3s;">
                            ✓ HACCP
                        </a>
                        <a href="/static/documents/certifications/Kosher認証.pdf" target="_blank" style="color: var(--primary-green); text-decoration: none; padding: 0.8rem; border: 1px solid var(--border-color); border-radius: 8px; text-align: center; transition: all 0.3s;">
                            ✓ Kosher
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <p>
            <a href="/zh-tw">首頁</a>
            <a href="/zh-tw/products/nuts-food">堅果・健康食品</a>
            <a href="/zh-tw/products/coffee">特色咖啡</a>
            <a href="/zh-tw/products/flowers">頂級花卉</a>
        </p>
        <p style="margin-top: 1rem; opacity: 0.8;">© 2024 Fvnix LLC. 版權所有。</p>
    </footer>
</body>
</html>
`
