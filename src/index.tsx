import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files - Cloudflare Pages automatically serves files from public/ directory

// Japanese Home Page
app.get('/', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>合同会社フェニックス（Fvnix LLC.）｜雲南の恵みを、日本の暮らしへ</title>
    <meta name="description" content="雲南高原の自然×国際品質で、日本市場にプレミアムな天然原料を届ける。天然香料・植物精油・ナッツオイル・スペシャルティコーヒーなど、BtoB向け高品質原料の専門商社。">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
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

        /* Header */
        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            z-index: 1000;
            transition: all 0.3s ease;
        }

        .header-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--primary-green);
            text-decoration: none;
        }

        .logo-subtitle {
            font-size: 0.7rem;
            color: var(--text-gray);
            font-weight: 400;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 1.2rem;
        }

        nav a {
            color: var(--text-dark);
            text-decoration: none;
            font-size: 0.95rem;
            transition: color 0.3s;
            font-weight: 500;
            white-space: nowrap;
        }

        nav a:hover {
            color: var(--primary-green);
        }

        .cta-button {
            background: var(--primary-green);
            color: white;
            padding: 0.6rem 1.2rem;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            transition: all 0.3s;
            white-space: nowrap;
            margin-left: 0.8rem;
        }

        .lang-switcher {
            position: relative;
            margin-left: 1rem;
        }

        .lang-switcher-button {
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            border: 1px solid var(--primary-green);
            color: var(--primary-green);
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 500;
            cursor: pointer;
            background: white;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            transition: all 0.3s;
        }

        .lang-switcher-button:hover {
            background: var(--primary-green);
            color: white;
        }

        .lang-switcher-button::after {
            content: '▼';
            font-size: 0.6rem;
            transition: transform 0.3s;
        }

        .lang-switcher:hover .lang-switcher-button::after {
            transform: rotate(180deg);
        }

        .lang-dropdown {
            position: absolute;
            top: calc(100% + 0.5rem);
            right: 0;
            background: white;
            border: 1px solid var(--primary-green);
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            overflow: hidden;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            min-width: 140px;
            z-index: 100;
        }

        .lang-switcher:hover .lang-dropdown {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .lang-dropdown a {
            display: block;
            padding: 0.7rem 1rem;
            color: var(--text-dark);
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 500;
            transition: all 0.2s;
            border-bottom: 1px solid rgba(45, 80, 22, 0.1);
        }

        .lang-dropdown a:last-child {
            border-bottom: none;
        }

        .lang-dropdown a:hover {
            background: var(--bg-light);
            color: var(--primary-green);
            padding-left: 1.3rem;
        }

        .lang-dropdown a.active {
            background: var(--primary-green);
            color: white;
        }

        .cta-button:hover {
            background: var(--secondary-green);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(45, 95, 63, 0.3);
        }

        /* Mobile Menu */
        .mobile-menu-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--primary-green);
            cursor: pointer;
        }

        /* Hero Section */
        .hero {
            margin-top: 80px;
            background: linear-gradient(135deg, rgba(232, 244, 234, 0.95) 0%, rgba(255, 255, 255, 0.95) 100%);
            padding: 8rem 2rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .hero-video-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: 0;
            opacity: 0.3;
        }
        
        .hero-video-placeholder {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80') center/cover no-repeat;
            z-index: 0;
            opacity: 0.25;
        }
        
        .hero-content {
            position: relative;
            z-index: 2;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(45, 95, 63, 0.05) 0%, transparent 70%);
            border-radius: 50%;
        }

        .hero-content {
            max-width: 900px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .hero-subtitle {
            font-size: 0.95rem;
            color: var(--accent-gold);
            letter-spacing: 3px;
            margin-bottom: 1.5rem;
            font-weight: 600;
            text-transform: uppercase;
        }

        .hero h1 {
            font-size: 2.6rem;
            line-height: 1.4;
            margin-bottom: 1.5rem;
            color: var(--primary-green);
            font-weight: 500;
            font-family: 'Noto Serif JP', serif;
        }

        .hero-description {
            font-size: 1.1rem;
            color: var(--text-gray);
            margin-bottom: 3rem;
            line-height: 1.8;
        }

        .hero-buttons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .btn-primary {
            background: var(--primary-green);
            color: white;
            padding: 1rem 2.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s;
            display: inline-block;
            border: 2px solid var(--primary-green);
        }

        .btn-primary:hover {
            background: var(--secondary-green);
            border-color: var(--secondary-green);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(45, 95, 63, 0.3);
        }

        .btn-secondary {
            background: transparent;
            color: var(--primary-green);
            padding: 1rem 2.5rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s;
            display: inline-block;
            border: 2px solid var(--primary-green);
        }

        .btn-secondary:hover {
            background: var(--primary-green);
            color: white;
            transform: translateY(-2px);
        }

        .section-image {
            width: 100%;
            max-width: 800px;
            height: auto;
            border-radius: 16px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.12);
            margin: 2rem auto;
            display: block;
        }

        /* Section Styles */
        section {
            padding: 6rem 2rem;
        }

        .section-light {
            background: var(--bg-white);
        }

        .section-dark {
            background: var(--bg-light);
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .section-title {
            text-align: center;
            margin-bottom: 1rem;
            font-size: 2rem;
            color: var(--primary-green);
            font-weight: 500;
            font-family: 'Noto Serif JP', serif;
        }

        .section-subtitle {
            text-align: center;
            color: var(--accent-gold);
            font-size: 0.85rem;
            letter-spacing: 0.15em;
            margin-bottom: 3rem;
            text-transform: uppercase;
            font-weight: 400;
        }

        .section-description {
            max-width: 800px;
            margin: 0 auto 3rem;
            text-align: center;
            color: var(--text-gray);
            line-height: 2;
        }

        /* Two Column Layout */
        .two-column {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        /* Cards Grid */
        .cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .card {
            background: white;
            border-radius: 16px;
            padding: 2.5rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
            transition: all 0.3s;
            border: 1px solid var(--border-color);
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }

        .card-icon {
            width: 60px;
            height: 60px;
            background: var(--light-green);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1.5rem;
            font-size: 1.8rem;
        }

        .card h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: var(--primary-green);
            font-weight: 500;
        }

        .card p {
            color: var(--text-gray);
            line-height: 1.8;
            font-size: 0.95rem;
        }

        .card ul {
            margin-top: 0.5rem;
            padding-left: 1.5rem;
            color: var(--text-gray);
            line-height: 2;
        }

        .card ul li {
            margin-bottom: 0.5rem;
            font-size: 0.9rem;
        }

        /* Company Info Table */
        .info-table {
            background: white;
            border-radius: 12px;
            padding: 2rem;
            border: 1px solid var(--border-color);
        }

        .info-table tr {
            border-bottom: 1px solid var(--border-color);
        }

        .info-table tr:last-child {
            border-bottom: none;
        }

        .info-table th {
            text-align: left;
            padding: 1rem;
            font-weight: 600;
            color: var(--primary-green);
            width: 30%;
        }

        .info-table td {
            padding: 1rem;
            color: var(--text-gray);
        }

        /* Stats */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }

        .stat-item {
            text-align: center;
            padding: 2rem;
        }

        .stat-number {
            font-size: 3rem;
            font-weight: 700;
            color: var(--primary-green);
            margin-bottom: 0.5rem;
        }

        .stat-label {
            color: var(--text-gray);
            font-size: 0.95rem;
        }

        /* Certifications */
        .certifications {
            display: flex;
            gap: 2rem;
            justify-content: center;
            flex-wrap: wrap;
            margin: 3rem 0;
        }

        .cert-badge {
            background: white;
            border: 2px solid var(--primary-green);
            border-radius: 50px;
            padding: 0.7rem 1.5rem;
            font-weight: 600;
            color: var(--primary-green);
            font-size: 0.9rem;
        }

        /* Contact Form */
        .contact-form {
            background: white;
            border-radius: 16px;
            padding: 3rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.06);
            max-width: 800px;
            margin: 0 auto;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 600;
            color: var(--text-dark);
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 0.9rem;
            border: 2px solid var(--border-color);
            border-radius: 8px;
            font-size: 1rem;
            font-family: inherit;
            transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--primary-green);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        .contact-info {
            background: var(--light-green);
            border-radius: 12px;
            padding: 2rem;
            margin-top: 2rem;
        }

        .contact-info h3 {
            color: var(--primary-green);
            margin-bottom: 1rem;
        }

        .contact-info p {
            color: var(--text-gray);
            margin-bottom: 0.5rem;
        }

        /* Footer */
        footer {
            background: var(--primary-green);
            color: white;
            padding: 3rem 2rem 1.5rem;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .footer-section h4 {
            margin-bottom: 1rem;
            font-size: 1.1rem;
        }

        .footer-section ul {
            list-style: none;
        }

        .footer-section a {
            color: rgba(255,255,255,0.8);
            text-decoration: none;
            display: block;
            margin-bottom: 0.5rem;
            transition: color 0.3s;
        }

        .footer-section a:hover {
            color: white;
        }

        .footer-bottom {
            text-align: center;
            padding-top: 2rem;
            border-top: 1px solid rgba(255,255,255,0.2);
            color: rgba(255,255,255,0.7);
            font-size: 0.9rem;
        }

        /* Responsive Design */
        
        /* Large Desktop (1400px+) - Default styles apply */
        
        /* Desktop (1024px - 1399px) */
        @media (max-width: 1399px) {
            .container {
                max-width: 1200px;
            }
            
            .header-container {
                max-width: 1200px;
                padding: 1rem 2rem;
            }
        }
        
        /* Tablet Landscape (768px - 1023px) */
        @media (max-width: 1023px) {
            .container {
                max-width: 900px;
                padding: 3rem 2rem;
            }
            
            .header-container {
                max-width: 900px;
                padding: 1rem 1.5rem;
            }
            
            nav ul {
                gap: 1rem;
            }
            
            nav a {
                font-size: 0.85rem;
            }
            
            .hero {
                padding: 6rem 2rem;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .hero-description {
                font-size: 1.1rem;
            }
            
            .section-title {
                font-size: 2rem;
            }
            
            .cards-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem;
            }
            
            .stats-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem;
            }
        }
        
        /* Tablet Portrait & Mobile Landscape (481px - 767px) */
        @media (max-width: 767px) {
            .header-container {
                padding: 1rem;
                flex-wrap: wrap;
            }

            .logo {
                font-size: 1rem;
            }
            
            .logo-subtitle {
                font-size: 0.65rem;
            }

            nav {
                display: none;
            }

            .mobile-menu-toggle {
                display: block;
            }

            .hero {
                padding: 5rem 1.5rem 4rem;
                margin-top: 70px;
            }

            .hero h1 {
                font-size: 2rem;
                line-height: 1.3;
            }

            .hero-description {
                font-size: 1rem;
                line-height: 1.7;
            }

            .hero-buttons {
                flex-direction: column;
                gap: 1rem;
                width: 100%;
            }
            
            .btn-primary,
            .btn-secondary {
                width: 100%;
                padding: 1rem 2rem;
                text-align: center;
            }

            section {
                padding: 3rem 1.5rem;
            }

            .section-title {
                font-size: 1.8rem;
            }
            
            .section-subtitle {
                font-size: 0.85rem;
            }
            
            .section-description {
                font-size: 0.95rem;
            }

            .two-column {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .cards-grid {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .stats-grid {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            
            .stat-number {
                font-size: 2rem;
            }
            
            .stat-label {
                font-size: 0.9rem;
            }

            .contact-form {
                padding: 2rem 1.5rem;
            }
            
            .form-group input,
            .form-group textarea {
                font-size: 1rem;
            }

            .footer-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .image-placeholder {
                min-height: 200px;
                font-size: 0.9rem;
            }
        }
        
        /* Mobile Portrait (320px - 480px) */
        @media (max-width: 480px) {
            .header-container {
                padding: 0.8rem;
            }
            
            .logo {
                font-size: 0.9rem;
            }
            
            .logo-subtitle {
                font-size: 0.6rem;
            }

            .hero {
                padding: 4rem 1rem 3rem;
                margin-top: 65px;
            }

            .hero h1 {
                font-size: 1.6rem;
                line-height: 1.3;
            }

            .hero-description {
                font-size: 0.9rem;
                line-height: 1.6;
            }
            
            .hero-buttons {
                gap: 0.8rem;
            }
            
            .btn-primary,
            .btn-secondary {
                padding: 0.9rem 1.5rem;
                font-size: 0.9rem;
            }

            section {
                padding: 2.5rem 1rem;
            }

            .section-title {
                font-size: 1.5rem;
                line-height: 1.4;
            }
            
            .section-subtitle {
                font-size: 0.8rem;
                margin-bottom: 0.5rem;
            }
            
            .section-description {
                font-size: 0.9rem;
                line-height: 1.7;
            }
            
            .section-description p {
                margin-bottom: 1rem;
            }

            .cards-grid {
                gap: 1.5rem;
            }
            
            .card {
                padding: 1.5rem;
            }
            
            .card-title {
                font-size: 1.1rem;
            }
            
            .card-description {
                font-size: 0.9rem;
            }

            .stats-grid {
                gap: 1rem;
            }
            
            .stat-number {
                font-size: 1.8rem;
            }
            
            .stat-label {
                font-size: 0.85rem;
                line-height: 1.4;
            }

            .contact-form {
                padding: 1.5rem 1rem;
            }
            
            .form-group {
                margin-bottom: 1rem;
            }
            
            .form-group label {
                font-size: 0.9rem;
                margin-bottom: 0.4rem;
            }
            
            .form-group input,
            .form-group textarea {
                padding: 0.8rem;
                font-size: 0.95rem;
            }
            
            .btn-submit {
                padding: 0.9rem 2rem;
                font-size: 0.95rem;
            }

            .footer-content {
                gap: 1.5rem;
                text-align: center;
            }
            
            .footer-section h3 {
                font-size: 1rem;
            }
            
            .footer-section p,
            .footer-section a {
                font-size: 0.85rem;
            }
            
            .image-placeholder {
                min-height: 150px;
                font-size: 0.85rem;
                padding: 1rem;
            }
        }

        /* Smooth Scroll */
        html {
            scroll-behavior: smooth;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="header-container">
            <a href="#" class="logo">
                Fvnix LLC.<br>
                <span class="logo-subtitle">Premium Natural Ingredients</span>
            </a>
            <nav>
                <ul>
                    <li><a href="/products/essential-oils">アロマ・天然香料</a></li>
                    <li><a href="/products/nuts-food">健康・美容食品</a></li>
                    <li><a href="/products/coffee">スペシャルティコーヒー</a></li>
                    <li><a href="/products/flowers">プレミアム花卉</a></li>
                    <li><a href="#contact">お問い合わせ</a></li>
                </ul>
            </nav>
            <div class="lang-switcher">
                <div class="lang-switcher-button">
                    日本語
                </div>
                <div class="lang-dropdown">
                    <a href="/" class="active">🇯🇵 日本語</a>
                    <a href="/en">🇬🇧 English</a>
                    <a href="/zh-tw">🇹🇼 繁體中文</a>
                </div>
            </div>
            <a href="#contact" class="cta-button">お問い合わせ・サンプル依頼</a>
            <button class="mobile-menu-toggle">☰</button>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <!-- 雲南ハイランド風景背景（動画プレースホルダー） -->
        <div class="hero-video-placeholder">
            <!-- 将来的に動画を配置: <video class="hero-video-background" autoplay muted loop playsinline>
                <source src="/videos/yunnan-highland.mp4" type="video/mp4">
            </video> -->
        </div>
        
        <div class="hero-content">
            <div class="hero-subtitle">Premium Natural Ingredients from Yunnan Highland</div>
            <h1>雲南の恵みを、<br>日本の暮らしへ、そのままに。</h1>
            <p class="hero-description">
                雲南高原の豊かな自然×国際品質×日本法人<br>
                天然香料・植物精油からスペシャルティコーヒーまで、<br>
                標高1,500〜2,500mの清澄な環境で育まれたプレミアムな天然原料を、<br>
                日本市場へ安定供給します。
            </p>
            <div class="hero-buttons">
                <a href="#contact" class="btn-primary">お問い合わせ・サンプル依頼</a>
                <a href="#products" class="btn-secondary">製品ラインナップを見る</a>
            </div>
        </div>
    </section>

    <!-- Our Message -->
    <section id="about" class="section-light">
        <div class="container">
            <div class="section-subtitle">OUR MESSAGE</div>
            <h2 class="section-title">雲南の恵みを、日本の暮らしへ。</h2>
            <div class="section-description">
                <p>
                    中国南西部、ヒマラヤの麓に広がる雲南高原。<br>
                    かつて「シャングリラ」と呼ばれたこの地は、「地球の屋根」「植物の王国」として知られ、
                    世界でも類を見ない生物多様性と清浄な自然環境を誇ります。
                </p>
                <p style="margin-top: 1.5rem;">
                    合同会社フェニックス（Fvnix LLC.）は、この雲南の豊かな自然資源を、
                    現代の技術と国際品質基準で精製・加工し、日本市場へお届けする専門商社です。<br>
                    天然香料、植物精油、ナッツオイル、スペシャルティコーヒー、プレミアム花卉まで、
                    多様な天然原料をBtoB向けに安定供給いたします。
                </p>
                <p style="margin-top: 1.5rem;">
                    私たちは、雲南の自然と共生する生産者のストーリーを大切にし、
                    完全なトレーサビリティと持続可能なサプライチェーンを通じて、
                    地球の恵みを次世代へとつなぎます。
                </p>
            </div>
        </div>
    </section>

    <!-- Company Profile & Mission -->
    <section class="section-dark">
        <div class="container">
            <div class="section-subtitle">COMPANY PROFILE & MISSION</div>
            <h2 class="section-title">会社概要・ミッション</h2>
            <div class="two-column">
                <div>
                    <h3 style="color: var(--primary-green); font-size: 1.5rem; margin-bottom: 1.5rem;">
                        豊かな自然資源 × 現代的な加工技術
                    </h3>
                    <p style="color: var(--text-gray); line-height: 2; margin-bottom: 1.5rem;">
                        私たちのミッションは、雲南高原の清澄な自然が育む天然原料を、
                        世界最高水準の品質管理と加工技術で精製し、
                        日本のメーカー様のものづくりを支えることです。
                    </p>
                    <p style="color: var(--text-gray); line-height: 2;">
                        グループ会社「Yunnan Summit Biotech Co., Ltd.」の
                        自社栽培基地・抽出工場と直結することで、
                        種子の選定から製品出荷まで一貫した品質管理を実現。<br>
                        BtoB向けに、原料供給からOEM/ODM、企画開発まで、
                        お客様のニーズに柔軟に対応いたします。
                    </p>
                </div>
                <div class="info-table">
                    <table style="width: 100%;">
                        <tr>
                            <th>社名</th>
                            <td>合同会社フェニックス<br>Fvnix LLC.</td>
                        </tr>
                        <tr>
                            <th>所在地</th>
                            <td>〒171-0033<br>東京都豊島区高田3-16-4<br>Golje Bld. 6F</td>
                        </tr>
                        <tr>
                            <th>事業内容</th>
                            <td>天然香料・植物精油・ナッツオイル・<br>スペシャルティコーヒー・花卉の<br>輸入・卸売・OEM/ODM</td>
                        </tr>
                        <tr>
                            <th>グループ会社</th>
                            <td>Yunnan Summit Biotech Co., Ltd.<br>（雲南森美達生物科技股份有限公司）</td>
                        </tr>
                        <tr>
                            <th>取引実績</th>
                            <td>年間100社以上の海外取引<br>20年以上の業界経験</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </section>

    <!-- Strengths -->
    <section id="strengths" class="section-light">
        <div class="container">
            <div class="section-subtitle">OUR STRENGTHS</div>
            <h2 class="section-title">Fvnixの4つの強み</h2>
            <div class="cards-grid">
                <div class="card">
                    <div class="card-icon">🌱</div>
                    <h3>生産基盤直結の<br>サプライチェーン</h3>
                    <p>
                        グループ会社の自社栽培基地・抽出工場と直結。
                        中間業者を介さず、種子選定から製品化まで一貫管理することで、
                        高品質と安定供給を両立します。
                    </p>
                </div>
                <div class="card">
                    <div class="card-icon">✓</div>
                    <h3>高いトレーサビリティと<br>品質管理</h3>
                    <p>
                        「会社＋基地＋農家」モデルにより、生産者の顔が見える完全トレーサビリティを実現。
                        KOSHER、REACH、HACCP、cGMP、ISO 9001など国際認証を取得し、
                        信頼性の高い品質保証体制を構築しています。
                    </p>
                </div>
                <div class="card">
                    <div class="card-icon">🌍</div>
                    <h3>グローバルで実証された<br>供給実績</h3>
                    <p>
                        ユーカリ油：世界シェア40％以上（Global No.1）、桂油：世界トップ3、
                        ティーツリー油：世界トップ2。Givaudan、dsm-firmenich、IFF、Mane、Robertetなど、
                        世界のトップ香料メーカーへの長年の供給実績があります。
                    </p>
                </div>
                <div class="card">
                    <div class="card-icon">🤝</div>
                    <h3>日本市場に最適化された<br>OEM/ODM対応</h3>
                    <p>
                        日本法人として、日本のメーカー様の細やかなニーズに柔軟に対応。
                        原料供給だけでなく、製品企画・開発・パッケージングまで、
                        ワンストップでサポートいたします。
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Brand Introduction -->
    <section class="section-dark">
        <div class="container">
            <div class="section-subtitle">OUR BRAND</div>
            <h2 class="section-title">雲南鮮品（Elevated Goodness）</h2>
            <div class="section-description">
                <p>
                    「雲南鮮品（Elevated Goodness）」は、雲南高原の清澄さ・神秘性・自然の力を体現する
                    私たちのプレミアムブランドです。
                </p>
                <p style="margin-top: 1.5rem;">
                    完全なトレーサビリティと生産者の顔が見えるストーリー性、
                    そして地域に根ざした高付加価値商品をお届けします。<br>
                    雲南の大地が育む「鮮やかな品質」を、あなたのビジネスへ。
                </p>
            </div>
            <div class="image-placeholder">
                ここに「雲南鮮品」ブランドロゴ・製品イメージ写真を配置<br>
                推奨：エレガントなパッケージデザイン、原産地の風景、生産者の写真など
            </div>
        </div>
    </section>

    <!-- Product Categories -->
    <section id="products" class="section-light">
        <div class="container">
            <div class="section-subtitle">PRODUCT CATEGORIES</div>
            <h2 class="section-title">製品カテゴリー</h2>
            <div class="cards-grid">
                <div class="card" onclick="location.href='/products/essential-oils'" style="cursor: pointer;">
                    <div class="card-icon">🌿</div>
                    <h3>アロマ・天然香料<br><small style="color: var(--accent-gold);">Essential Oil</small></h3>
                    <p>
                        <strong>主要製品：</strong>
                    </p>
                    <ul>
                        <li>ユーカリ油（世界シェア40%+ Global No.1）</li>
                        <li>桂皮油・桂油（世界トップ3）</li>
                        <li>ティーツリー油（世界トップ2）</li>
                        <li>ジャスミンABS、キンモクセイABS</li>
                        <li>ネロリ油、ラベンダー油、広藿香油など95製品以上</li>
                    </ul>
                    <p style="margin-top: 1rem;">
                        <strong>用途：</strong>香料メーカー向け原料、化粧品・パーソナルケア製品、
                        アロマテラピー製品、フレグランス開発。ISO 9001、REACH、KOSHER認証取得済み。
                    </p>
                </div>
                <div class="card">
                    <div class="card-icon">🥜</div>
                    <h3>健康・美容食品<br><small style="color: var(--accent-gold);">Nuts Oil & Food</small></h3>
                    <p>
                        <strong>主要製品：</strong>
                    </p>
                    <ul>
                        <li>雲南高原産クルミオイル（標高1,500〜2,500m栽培）</li>
                        <li>オメガ3脂肪酸豊富、高い油脂含量</li>
                        <li>クルミ仁（殻割り・光選別・焙煎加工）</li>
                        <li>クルミたんぱく粉</li>
                        <li>マカダミアナッツ製品（臨滄産・世界最大規模）</li>
                    </ul>
                    <p style="margin-top: 1rem;">
                        <strong>用途：</strong>健康食品メーカー向け原料、サプリメント、
                        美容オイル、食品加工原料。雲南省は中国主要ナッツ産地、完全品質管理体制。
                    </p>
                </div>
                <div class="card">
                    <div class="card-icon">☕</div>
                    <h3>スペシャルティコーヒー<br><small style="color: var(--accent-gold);">Specialty Coffee</small></h3>
                    <p>
                        <strong>主要製品：</strong>
                    </p>
                    <ul>
                        <li>雲南高原産アラビカ種100%</li>
                        <li>ハワイ・コナ、ジャマイカ・ブルーマウンテンと並ぶ世界最高級産地</li>
                        <li>高地栽培（標高1,200〜2,000m）</li>
                        <li>フルーティで芳醇な香り、醇厚な風味</li>
                        <li>完全トレーサビリティ、国際認証取得</li>
                    </ul>
                    <p style="margin-top: 1rem;">
                        <strong>用途：</strong>カフェ・レストラン、コーヒー専門店、
                        飲料メーカー、ギフト商品開発。東方高原の風土とぬくもりを日本へ。
                    </p>
                </div>
                <div class="card">
                    <div class="card-icon">🌸</div>
                    <h3>プレミアム花卉<br><small style="color: var(--accent-gold);">Flowers</small></h3>
                    <p>
                        <strong>主要製品：</strong>高原気候で育つ高付加価値の生花（冷蔵空輸で供給）
                    </p>
                    <p style="margin-top: 1rem;">
                        <strong>用途：</strong>フラワーショップ、ホテル・式場、
                        イベント装飾、ギフト商品
                    </p>
                </div>
            </div>
            <div style="text-align: center; margin-top: 3rem;">
                <a href="#contact" class="btn-primary">製品カタログPDFダウンロード（準備中）</a>
            </div>
        </div>
    </section>

    <!-- Group Company -->
    <section id="group" class="section-dark">
        <div class="container">
            <div class="section-subtitle">GROUP COMPANY</div>
            <h2 class="section-title">Yunnan Summit Biotech Co., Ltd.</h2>
            <div class="section-description">
                <p style="font-size: 1.1rem; color: var(--primary-green); font-weight: 600;">
                    世界に、雲南の香りを届ける<br>
                    Green・Natural・Sustainable
                </p>
            </div>
            <div class="stats-grid">
                <div class="stat-item">
                    <div class="stat-number">40%+</div>
                    <div class="stat-label">ユーカリ油<br>世界シェア（Global No.1）</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">30%</div>
                    <div class="stat-label">桂油<br>世界シェア（Global Top 3）</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">30%</div>
                    <div class="stat-label">ティーツリー油<br>世界シェア（Global Top 2）</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">25年+</div>
                    <div class="stat-label">業界経験・<br>100社以上の年間海外取引実績</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">670+ ha</div>
                    <div class="stat-label">自社栽培基地面積<br>(約170万m²)</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">103億円</div>
                    <div class="stat-label">2024年<br>グループ合併営収</div>
                </div>
            </div>
            <div class="section-description">
                <p style="margin-top: 2rem;">
                    <strong>主要顧客：</strong><br>
                    Givaudan（ジボダン）、dsm-firmenich（ディーエスエム・フィルメニッヒ）、
                    IFF（インターナショナル・フレーバー＆フレグランス）、<br>
                    Mane（マーヌ）、Robertet（ロベルテ）など、
                    世界トップクラスの香料メーカーへの長年の供給実績。
                </p>
            </div>
            <div class="image-placeholder" style="margin-top: 2rem;">
                ここにYunnan Summit Biotechの工場・基地写真を配置<br>
                推奨：最新鋭の抽出工場、広大な栽培基地、品質管理ラボの様子など
            </div>
        </div>
    </section>

    <!-- Quality & Sustainability -->
    <section id="quality" class="section-light">
        <div class="container">
            <div class="section-subtitle">QUALITY & SUSTAINABILITY</div>
            <h2 class="section-title">品質・サステナビリティ</h2>
            <div class="section-description">
                <p>
                    私たちは、国際水準の品質管理体制と持続可能なサプライチェーンを通じて、
                    お客様に安心と信頼をお届けします。
                </p>
            </div>
            <div class="certifications">
                <span class="cert-badge">KOSHER</span>
                <span class="cert-badge">REACH</span>
                <span class="cert-badge">HACCP</span>
                <span class="cert-badge">cGMP</span>
                <span class="cert-badge">ISO 9001</span>
            </div>
            <div class="cards-grid" style="margin-top: 3rem;">
                <div class="card">
                    <h3>完全トレーサビリティ</h3>
                    <p>
                        種子の選定から栽培、抽出、精製、出荷まで、
                        全工程で詳細な記録を保持。
                        生産者の顔が見える、安心の品質管理体制です。
                    </p>
                </div>
                <div class="card">
                    <h3>会社＋基地＋農家モデル</h3>
                    <p>
                        地域の農家と直接契約し、技術指導と公正な対価を提供。
                        地域経済の活性化と持続可能な農業を支援しています。
                    </p>
                </div>
                <div class="card">
                    <h3>ESG／サステナブル調達</h3>
                    <p>
                        環境保全・社会貢献・適正なガバナンスを重視。
                        次世代に豊かな自然を残すため、
                        持続可能な調達活動を推進しています。
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Fvnix -->
    <section class="section-dark">
        <div class="container">
            <div class="section-subtitle">WHY CHOOSE FVNIX</div>
            <h2 class="section-title">雲南の自然と確かな技術の融合</h2>
            <div class="section-description">
                <p style="font-size: 1.1rem; line-height: 2.2;">
                    <strong style="color: var(--primary-green);">✓ クリーンな原料と国際品質</strong><br>
                    雲南高原の清澄な自然環境で育まれた天然原料を、
                    国際認証取得済みの工場で精製・品質管理。
                </p>
                <p style="font-size: 1.1rem; line-height: 2.2; margin-top: 1.5rem;">
                    <strong style="color: var(--primary-green);">✓ 世界が認める供給力</strong><br>
                    ユーカリ油・桂油・ティーツリー油など主要製品で世界トップクラスのシェア。
                    Givaudan、IFFなど世界的香料メーカーへの長年の供給実績。
                </p>
                <p style="font-size: 1.1rem; line-height: 2.2; margin-top: 1.5rem;">
                    <strong style="color: var(--primary-green);">✓ 日本市場への最適化</strong><br>
                    日本法人として、日本のメーカー様の細やかなニーズに柔軟に対応。
                    原料供給・OEM/ODM・企画開発まで一気通貫でサポート。
                </p>
                <p style="font-size: 1.1rem; line-height: 2.2; margin-top: 1.5rem;">
                    <strong style="color: var(--primary-green);">✓ サステナブルなサプライチェーン</strong><br>
                    「会社＋基地＋農家」モデルで地域経済を支援。
                    完全トレーサビリティと持続可能な調達活動を推進。
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-light">
        <div class="container">
            <div class="section-subtitle">CONTACT US</div>
            <h2 class="section-title">雲南の恵みを、あなたのビジネスへ。</h2>
            <div class="section-description">
                <p>
                    サンプル依頼・OEM/ODM相談・製品仕様確認など、<br>
                    どんなことでもお気軽にお問い合わせください。<br>
                    原料調達担当・開発担当・購買担当の皆様からのご連絡をお待ちしております。
                </p>
            </div>
            <div class="contact-form">
                <form>
                    <div class="form-group">
                        <label for="company">会社名 *</label>
                        <input type="text" id="company" name="company" required>
                    </div>
                    <div class="form-group">
                        <label for="name">ご担当者名 *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">メールアドレス *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">電話番号</label>
                        <input type="tel" id="phone" name="phone">
                    </div>
                    <div class="form-group">
                        <label for="message">お問い合わせ内容 *</label>
                        <textarea id="message" name="message" required placeholder="製品に関するご質問、サンプル依頼、OEM/ODMのご相談など、お気軽にご記入ください。"></textarea>
                    </div>
                    <button type="submit" class="btn-primary" style="width: 100%; border: none; cursor: pointer;">
                        送信する
                    </button>
                </form>
                <div class="contact-info">
                    <h3>合同会社フェニックス（Fvnix LLC.）</h3>
                    <p><strong>執行役員：</strong>叶 維舟（かのう いしゅう）</p>
                    <p><strong>住所：</strong>〒171-0033 東京都豊島区高田3-16-4 Golje Bld. 6F</p>
                    <p><i class="fas fa-phone" style="color: var(--primary-green); margin-right: 0.5rem;"></i>03-6914-3633</p>
                    <p><i class="fas fa-mobile-alt" style="color: var(--primary-green); margin-right: 0.5rem;"></i>080-4363-2780</p>
                    <p><i class="fas fa-envelope" style="color: var(--primary-green); margin-right: 0.5rem;"></i><a href="mailto:info@fvnix.com" style="color: var(--text-dark); text-decoration: none;">info@fvnix.com</a></p>
                    <p><i class="fas fa-globe" style="color: var(--primary-green); margin-right: 0.5rem;"></i><a href="https://www.fvnix.com" style="color: var(--text-dark); text-decoration: none;">https://www.fvnix.com</a></p>
                    <p style="margin-top: 1rem;"><em>※ サンプル依頼・OEM/ODM相談・製品仕様確認など、お気軽にお問い合わせください。</em></p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <div class="footer-section">
                <h4>Fvnix LLC.</h4>
                <p style="color: rgba(255,255,255,0.8); font-size: 0.9rem; line-height: 1.8;">
                    雲南高原の自然×国際品質で、<br>
                    日本市場にプレミアムな<br>
                    天然原料を届ける。
                </p>
            </div>
            <div class="footer-section">
                <h4>メニュー</h4>
                <ul>
                    <li><a href="#about">私たちについて</a></li>
                    <li><a href="#products">製品カテゴリー</a></li>
                    <li><a href="#strengths">強み</a></li>
                    <li><a href="#group">グループ会社</a></li>
                    <li><a href="#quality">品質・サステナビリティ</a></li>
                    <li><a href="#contact">お問い合わせ</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>製品カテゴリー</h4>
                <ul>
                    <li><a href="#products">アロマ・天然香料</a></li>
                    <li><a href="#products">健康・美容食品</a></li>
                    <li><a href="#products">スペシャルティコーヒー</a></li>
                    <li><a href="#products">プレミアム花卉</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>SNS</h4>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">LinkedIn</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            © 2024 Fvnix LLC. All rights reserved. | Premium Natural Ingredients from Yunnan
        </div>
    </footer>

    <script>
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header shadow on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            }
        });

        // Form submission handler (demo)
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('お問い合わせありがとうございます。\\n担当者より折り返しご連絡させていただきます。');
        });
    </script>
</body>
</html>
  `)
})

// Import product pages
import { essentialOilsPageJA, essentialOilsPageEN, essentialOilsPageZH } from './pages/essential-oils'
import { nutsFoodPageJA, nutsFoodPageEN, nutsFoodPageZH } from './pages/nuts-food'
import { coffeePageJA, coffeePageEN, coffeePageZH } from './pages/coffee'
import { flowersPageJA, flowersPageEN, flowersPageZH } from './pages/flowers'

// Japanese product pages
app.get('/products/essential-oils', (c) => c.html(essentialOilsPageJA()))
app.get('/products/nuts-food', (c) => c.html(nutsFoodPageJA()))
app.get('/products/coffee', (c) => c.html(coffeePageJA()))
app.get('/products/flowers', (c) => c.html(flowersPageJA()))

// English product pages
app.get('/en/products/essential-oils', (c) => c.html(essentialOilsPageEN()))
app.get('/en/products/nuts-food', (c) => c.html(nutsFoodPageEN()))
app.get('/en/products/coffee', (c) => c.html(coffeePageEN()))
app.get('/en/products/flowers', (c) => c.html(flowersPageEN()))

// Traditional Chinese product pages
app.get('/zh-tw/products/essential-oils', (c) => c.html(essentialOilsPageZH()))
app.get('/zh-tw/products/nuts-food', (c) => c.html(nutsFoodPageZH()))
app.get('/zh-tw/products/coffee', (c) => c.html(coffeePageZH()))
app.get('/zh-tw/products/flowers', (c) => c.html(flowersPageZH()))

// Traditional Chinese (Taiwan) home page
app.get('/zh-tw', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="zh-TW">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fvnix LLC. | 來自雲南高原的頂級天然原料</title>
    <meta name="description" content="日本法人連結雲南高原天然資源。精油（40%+全球尤加利油市場份額）、特色咖啡、頂級堅果食品。ISO 9001、REACH、KOSHER認證。">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-green: #2d5016;
            --accent-gold: #d4af37;
            --text-dark: #2c3e50;
            --text-gray: #666;
            --bg-light: #f8f9fa;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Noto Sans JP', sans-serif;
            line-height: 1.7;
            color: var(--text-dark);
        }

        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            z-index: 1000;
        }

        .header-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--primary-green);
            text-decoration: none;
        }

        .logo-subtitle {
            font-size: 0.7rem;
            color: var(--text-gray);
            font-weight: 400;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 1.2rem;
        }

        nav a {
            color: var(--text-dark);
            text-decoration: none;
            font-size: 0.95rem;
            transition: color 0.3s;
            font-weight: 500;
            white-space: nowrap;
        }

        nav a:hover {
            color: var(--primary-green);
        }

        .cta-button {
            background: var(--primary-green);
            color: white;
            padding: 0.6rem 1.2rem;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            transition: all 0.3s;
            white-space: nowrap;
            margin-left: 0.8rem;
        }

        .lang-switcher {
            position: relative;
            margin-left: 1rem;
        }

        .lang-switcher-button {
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            border: 1px solid var(--primary-green);
            color: var(--primary-green);
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 500;
            cursor: pointer;
            background: white;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            transition: all 0.3s;
        }

        .lang-switcher-button:hover {
            background: var(--primary-green);
            color: white;
        }

        .lang-switcher-button::after {
            content: '▼';
            font-size: 0.6rem;
            transition: transform 0.3s;
        }

        .lang-switcher:hover .lang-switcher-button::after {
            transform: rotate(180deg);
        }

        .lang-dropdown {
            position: absolute;
            top: calc(100% + 0.5rem);
            right: 0;
            background: white;
            border: 1px solid var(--primary-green);
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            overflow: hidden;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            min-width: 140px;
            z-index: 100;
        }

        .lang-switcher:hover .lang-dropdown {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .lang-dropdown a {
            display: block;
            padding: 0.7rem 1rem;
            color: var(--text-dark);
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 500;
            transition: all 0.2s;
            border-bottom: 1px solid rgba(45, 80, 22, 0.1);
        }

        .lang-dropdown a:last-child {
            border-bottom: none;
        }

        .lang-dropdown a:hover {
            background: var(--bg-light);
            color: var(--primary-green);
            padding-left: 1.3rem;
        }

        .lang-dropdown a.active {
            background: var(--primary-green);
            color: white;
        }

        .hero {
            margin-top: 80px;
            background: linear-gradient(135deg, var(--primary-green) 0%, #1a3d0a 100%);
            padding: 6rem 2rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80') center/cover;
            opacity: 0.25;
            z-index: 0;
        }

        .hero-content {
            position: relative;
            z-index: 1;
            max-width: 900px;
            margin: 0 auto;
        }

        .hero-subtitle {
            color: var(--accent-gold);
            font-size: 0.9rem;
            font-weight: 600;
            letter-spacing: 2px;
            margin-bottom: 1rem;
        }

        .hero h1 {
            font-family: 'Noto Serif JP', serif;
            font-size: 3rem;
            color: white;
            margin-bottom: 1.5rem;
            font-weight: 700;
        }

        .hero-description {
            color: rgba(255,255,255,0.95);
            font-size: 1.1rem;
            margin-bottom: 2.5rem;
            line-height: 1.9;
        }

        .hero-buttons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
        }

        .btn-primary, .btn-secondary {
            padding: 1rem 2.5rem;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
        }

        .btn-primary {
            background: white;
            color: var(--primary-green);
        }

        .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
        }

        .section-title {
            font-family: 'Noto Serif JP', serif;
            font-size: 2.2rem;
            color: var(--primary-green);
            margin-bottom: 3rem;
            text-align: center;
        }

        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            overflow: hidden;
            transition: transform 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card-content {
            padding: 2rem;
        }

        .card h3 {
            color: var(--primary-green);
            margin-bottom: 1rem;
        }

        .contact-info {
            background: var(--bg-light);
            padding: 2rem;
            border-radius: 12px;
            margin-top: 3rem;
        }

        .contact-info h3 {
            color: var(--primary-green);
            margin-bottom: 1rem;
        }

        footer {
            background: var(--primary-green);
            color: white;
            padding: 3rem 2rem;
            text-align: center;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            .card-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="header-container">
            <a href="/zh-tw" class="logo">
                Fvnix LLC.<br>
                <span class="logo-subtitle">頂級天然原料</span>
            </a>
            <nav>
                <ul>
                    <li><a href="/zh-tw/products/essential-oils">精油・天然香料</a></li>
                    <li><a href="/zh-tw/products/nuts-food">堅果・健康食品</a></li>
                    <li><a href="/zh-tw/products/coffee">特色咖啡</a></li>
                    <li><a href="/zh-tw/products/flowers">頂級花卉</a></li>
                    <li><a href="#contact">聯絡我們</a></li>
                </ul>
            </nav>
            <div class="lang-switcher">
                <div class="lang-switcher-button">
                    繁體中文
                </div>
                <div class="lang-dropdown">
                    <a href="/">🇯🇵 日本語</a>
                    <a href="/en">🇬🇧 English</a>
                    <a href="/zh-tw" class="active">🇹🇼 繁體中文</a>
                </div>
            </div>
            <a href="#contact" class="cta-button">聯絡我們</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <div class="hero-subtitle">來自雲南高原的頂級天然原料</div>
            <h1>將雲南的恩惠<br>原汁原味帶給日本生活</h1>
            <p class="hero-description">
                雲南高原的自然豐富 × 國際品質 × 日本法人<br>
                從天然香料、植物精油到特色咖啡，<br>
                在海拔1,500～2,500公尺的清澄環境中培育的頂級天然原料，<br>
                穩定供應日本市場。
            </p>
            <div class="hero-buttons">
                <a href="#contact" class="btn-primary">聯絡我們 / 樣品申請</a>
                <a href="#products" class="btn-secondary">查看產品</a>
            </div>
        </div>
    </section>

    <!-- Product Categories -->
    <div id="products" class="container">
        <h2 class="section-title">產品分類</h2>
        <div class="card-grid">
            <div class="card">
                <div class="card-content">
                    <h3>🌿 精油・天然香料</h3>
                    <p>全球尤加利油市場份額40%+。95種以上純天然精油產品。ISO 9001、REACH、KOSHER認證。</p>
                    <a href="/zh-tw/products/essential-oils" style="color: var(--primary-green); font-weight: 600; margin-top: 1rem; display: inline-block;">了解更多 →</a>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h3>🥜 頂級堅果・健康食品</h3>
                    <p>253,000公頃夏威夷豆栽培（全球最大）、高海拔核桃產品。來自雲南森美達生物科技的「腦森林」品牌。</p>
                    <a href="/zh-tw/products/nuts-food" style="color: var(--primary-green); font-weight: 600; margin-top: 1rem; display: inline-block;">了解更多 →</a>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h3>☕ 特色咖啡</h3>
                    <p>高海拔雲南咖啡豆，具有果香和順滑口感。可持續栽培，完整可追溯性。</p>
                    <a href="/zh-tw/products/coffee" style="color: var(--primary-green); font-weight: 600; margin-top: 1rem; display: inline-block;">了解更多 →</a>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h3>🌸 頂級花卉</h3>
                    <p>海拔1,500～3,000公尺栽培，陽光充足，完整品質管理。高品質切花和觀賞花卉。</p>
                    <a href="/zh-tw/products/flowers" style="color: var(--primary-green); font-weight: 600; margin-top: 1rem; display: inline-block;">了解更多 →</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact -->
    <div id="contact" class="container">
        <h2 class="section-title">聯絡我們</h2>
        <div class="contact-info">
            <h3>Fvnix LLC.</h3>
            <p><strong>執行役員：</strong>叶 維舟（かのう いしゅう）</p>
            <p><strong>地址：</strong>Golje Bld. 6F, 3-16-4 Takada, Toshima-ku, Tokyo 171-0033, Japan</p>
            <p><i class="fas fa-phone" style="color: var(--primary-green); margin-right: 0.5rem;"></i>03-6914-3633</p>
            <p><i class="fas fa-mobile-alt" style="color: var(--primary-green); margin-right: 0.5rem;"></i>080-4363-2780</p>
            <p><i class="fas fa-envelope" style="color: var(--primary-green); margin-right: 0.5rem;"></i><a href="mailto:info@fvnix.com" style="color: var(--text-dark); text-decoration: none;">info@fvnix.com</a></p>
            <p><i class="fas fa-globe" style="color: var(--primary-green); margin-right: 0.5rem;"></i><a href="https://www.fvnix.com" style="color: var(--text-dark); text-decoration: none;">https://www.fvnix.com</a></p>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Fvnix LLC. All Rights Reserved.</p>
        <p style="margin-top: 1rem; opacity: 0.8;">從雲南高原到日本的頂級天然原料</p>
    </footer>
</body>
</html>
  `)
})

// English home page
app.get('/en', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fvnix LLC. | Premium Natural Ingredients from Yunnan Highland</title>
    <meta name="description" content="Japanese corporation connecting Yunnan Highland's natural resources to Japan. Essential oils (40%+ global Eucalyptus market share), specialty coffee, premium nuts & foods. ISO 9001, REACH, KOSHER certified.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;600;700&family=Noto+Serif+JP:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary-green: #2d5016;
            --accent-gold: #d4af37;
            --text-dark: #2c3e50;
            --text-gray: #666;
            --bg-light: #f8f9fa;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Noto Sans JP', sans-serif;
            line-height: 1.7;
            color: var(--text-dark);
        }

        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            z-index: 1000;
        }

        .header-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.2rem;
            font-weight: 700;
            color: var(--primary-green);
            text-decoration: none;
        }

        .logo-subtitle {
            font-size: 0.7rem;
            color: var(--text-gray);
            font-weight: 400;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 1.2rem;
        }

        nav a {
            color: var(--text-dark);
            text-decoration: none;
            font-size: 0.95rem;
            transition: color 0.3s;
            font-weight: 500;
            white-space: nowrap;
        }

        nav a:hover {
            color: var(--primary-green);
        }

        .cta-button {
            background: var(--primary-green);
            color: white;
            padding: 0.6rem 1.2rem;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.9rem;
            transition: all 0.3s;
            white-space: nowrap;
            margin-left: 0.8rem;
        }

        .lang-switcher {
            position: relative;
            margin-left: 1rem;
        }

        .lang-switcher-button {
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            border: 1px solid var(--primary-green);
            color: var(--primary-green);
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 500;
            cursor: pointer;
            background: white;
            display: flex;
            align-items: center;
            gap: 0.3rem;
            transition: all 0.3s;
        }

        .lang-switcher-button:hover {
            background: var(--primary-green);
            color: white;
        }

        .lang-switcher-button::after {
            content: '▼';
            font-size: 0.6rem;
            transition: transform 0.3s;
        }

        .lang-switcher:hover .lang-switcher-button::after {
            transform: rotate(180deg);
        }

        .lang-dropdown {
            position: absolute;
            top: calc(100% + 0.5rem);
            right: 0;
            background: white;
            border: 1px solid var(--primary-green);
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            overflow: hidden;
            opacity: 0;
            visibility: hidden;
            transform: translateY(-10px);
            transition: all 0.3s ease;
            min-width: 120px;
            z-index: 100;
        }

        .lang-switcher:hover .lang-dropdown {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .lang-dropdown a {
            display: block;
            padding: 0.7rem 1rem;
            color: var(--text-dark);
            text-decoration: none;
            font-size: 0.85rem;
            font-weight: 500;
            transition: all 0.2s;
            border-bottom: 1px solid rgba(45, 80, 22, 0.1);
        }

        .lang-dropdown a:last-child {
            border-bottom: none;
        }

        .lang-dropdown a:hover {
            background: var(--bg-light);
            color: var(--primary-green);
            padding-left: 1.3rem;
        }

        .lang-dropdown a.active {
            background: var(--primary-green);
            color: white;
        }

        .hero {
            margin-top: 80px;
            background: linear-gradient(135deg, var(--primary-green) 0%, #1a3d0a 100%);
            padding: 6rem 2rem;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80') center/cover;
            opacity: 0.25;
            z-index: 0;
        }

        .hero-content {
            position: relative;
            z-index: 1;
            max-width: 900px;
            margin: 0 auto;
        }

        .hero-subtitle {
            color: var(--accent-gold);
            font-size: 0.9rem;
            font-weight: 600;
            letter-spacing: 2px;
            margin-bottom: 1rem;
        }

        .hero h1 {
            font-family: 'Noto Serif JP', serif;
            font-size: 3rem;
            color: white;
            margin-bottom: 1.5rem;
            font-weight: 700;
        }

        .hero-description {
            color: rgba(255,255,255,0.95);
            font-size: 1.1rem;
            margin-bottom: 2.5rem;
            line-height: 1.9;
        }

        .hero-buttons {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
        }

        .btn-primary, .btn-secondary {
            padding: 1rem 2.5rem;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
        }

        .btn-primary {
            background: white;
            color: var(--primary-green);
        }

        .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid white;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem;
        }

        .section-title {
            font-family: 'Noto Serif JP', serif;
            font-size: 2.2rem;
            color: var(--primary-green);
            margin-bottom: 3rem;
            text-align: center;
        }

        .card-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
            overflow: hidden;
            transition: transform 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card-content {
            padding: 2rem;
        }

        .card h3 {
            color: var(--primary-green);
            margin-bottom: 1rem;
        }

        .contact-info {
            background: var(--bg-light);
            padding: 2rem;
            border-radius: 12px;
            margin-top: 3rem;
        }

        .contact-info h3 {
            color: var(--primary-green);
            margin-bottom: 1rem;
        }

        footer {
            background: var(--primary-green);
            color: white;
            padding: 3rem 2rem;
            text-align: center;
        }

        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            .card-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header>
        <div class="header-container">
            <a href="/en" class="logo">
                Fvnix LLC.<br>
                <span class="logo-subtitle">Premium Natural Ingredients</span>
            </a>
            <nav>
                <ul>
                    <li><a href="/en/products/essential-oils">Essential Oils</a></li>
                    <li><a href="/en/products/nuts-food">Nuts & Food</a></li>
                    <li><a href="/en/products/coffee">Specialty Coffee</a></li>
                    <li><a href="/en/products/flowers">Premium Flowers</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div class="lang-switcher">
                <div class="lang-switcher-button">
                    English
                </div>
                <div class="lang-dropdown">
                    <a href="/">🇯🇵 日本語</a>
                    <a href="/en" class="active">🇬🇧 English</a>
                    <a href="/zh-tw">🇹🇼 繁體中文</a>
                </div>
            </div>
            <a href="#contact" class="cta-button">Contact Us</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <div class="hero-subtitle">Premium Natural Ingredients from Yunnan Highland</div>
            <h1>From Yunnan's Bounty<br>to Japanese Living, Authentically.</h1>
            <p class="hero-description">
                Yunnan Highland's Natural Richness × International Quality × Japanese Corporation<br>
                From natural aromatics & essential oils to specialty coffee,<br>
                we deliver premium natural ingredients cultivated in the pristine environment<br>
                at altitudes of 1,500~2,500m, with stable supply to the Japanese market.
            </p>
            <div class="hero-buttons">
                <a href="#contact" class="btn-primary">Contact / Sample Request</a>
                <a href="#products" class="btn-secondary">View Products</a>
            </div>
        </div>
    </section>

    <!-- Product Categories -->
    <div id="products" class="container">
        <h2 class="section-title">Product Categories</h2>
        <div class="card-grid">
            <div class="card">
                <div class="card-content">
                    <h3>🌿 Essential Oils & Natural Aromatics</h3>
                    <p>40%+ global Eucalyptus oil market share. 95+ pure natural essential oil products. ISO 9001, REACH, KOSHER certified.</p>
                    <a href="/en/products/essential-oils" style="color: var(--primary-green); font-weight: 600; margin-top: 1rem; display: inline-block;">Learn More →</a>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h3>🥜 Premium Nuts & Healthy Foods</h3>
                    <p>253,000 ha macadamia cultivation (world's largest), high-altitude walnut products. Brain Forest brand from Yunnan Senmeida Biotech.</p>
                    <a href="/en/products/nuts-food" style="color: var(--primary-green); font-weight: 600; margin-top: 1rem; display: inline-block;">Learn More →</a>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h3>☕ Specialty Coffee</h3>
                    <p>High-altitude Yunnan coffee beans with fruity aroma and smooth taste. Sustainable cultivation with complete traceability.</p>
                    <a href="/en/products/coffee" style="color: var(--primary-green); font-weight: 600; margin-top: 1rem; display: inline-block;">Learn More →</a>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <h3>🌸 Premium Flowers</h3>
                    <p>1,500~3,000m altitude cultivation, abundant sunshine, complete quality control. High-quality cut flowers and ornamental flowers.</p>
                    <a href="/en/products/flowers" style="color: var(--primary-green); font-weight: 600; margin-top: 1rem; display: inline-block;">Learn More →</a>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact -->
    <div id="contact" class="container">
        <h2 class="section-title">Contact Us</h2>
        <div class="contact-info">
            <h3>Fvnix LLC.</h3>
            <p><strong>Executive Officer:</strong> 叶 維舟（かのう いしゅう）</p>
            <p><strong>Address:</strong> Golje Bld. 6F, 3-16-4 Takada, Toshima-ku, Tokyo 171-0033, Japan</p>
            <p><i class="fas fa-phone" style="color: var(--primary-green); margin-right: 0.5rem;"></i>03-6914-3633</p>
            <p><i class="fas fa-mobile-alt" style="color: var(--primary-green); margin-right: 0.5rem;"></i>080-4363-2780</p>
            <p><i class="fas fa-envelope" style="color: var(--primary-green); margin-right: 0.5rem;"></i><a href="mailto:info@fvnix.com" style="color: var(--text-dark); text-decoration: none;">info@fvnix.com</a></p>
            <p><i class="fas fa-globe" style="color: var(--primary-green); margin-right: 0.5rem;"></i><a href="https://www.fvnix.com" style="color: var(--text-dark); text-decoration: none;">https://www.fvnix.com</a></p>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <p>&copy; 2024 Fvnix LLC. All Rights Reserved.</p>
        <p style="margin-top: 1rem; opacity: 0.8;">Premium Natural Ingredients from Yunnan Highland to Japan</p>
    </footer>
</body>
</html>
  `)
})

export default app
