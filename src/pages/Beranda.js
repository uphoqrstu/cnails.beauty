import React, { useEffect, useRef } from 'react';
import './Beranda.css';

const Beranda = ({ setActivePage }) => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      requestAnimationFrame(() => {
        el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    }
  }, []);

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const features = [
    { icon: 'fa-gem', title: 'Premium Quality', desc: 'Material nail art terbaik, tahan lama & aman untuk kuku' },
    { icon: 'fa-palette', title: 'Desain Eksklusif', desc: '100+ desain unik mengikuti tren kecantikan terkini' },
    { icon: 'fa-shipping-fast', title: 'Pengiriman Cepat', desc: 'Dikirim dalam 1×24 jam ke seluruh Indonesia' },
    { icon: 'fa-star', title: '5-Star Reviews', desc: 'Ribuan pelanggan puas dengan produk kami' },
  ];

  const productImages = [
    'WhatsApp Image 2026-09-25 at 7.17.25 PM.jpeg',
    'WhatsApp Image 2026-09-25 at 7.17.26 PM.jpeg',
    'WhatsApp Image 2026-09-25 at 7.17.27 PM.jpeg',
    'WhatsApp Image 2026-09-25 at 7.17.28 PM.jpeg',
    'WhatsApp Image 2026-09-25 at 7.17.29 PM.jpeg',
    'WhatsApp Image 2026-09-25 at 7.17.30 PM.jpeg',
  ];

  const testimonials = [
    {
      name: 'Ayu Kartika',
      city: 'Jakarta',
      rating: 5,
      text: 'Produknya bagus banget! Kualitasnya mewah, desainnya cantik-cantik. Sudah beli berkali-kali dan selalu puas! 💕',
      avatar: '👩‍🦰',
    },
    {
      name: 'Sari Dewi',
      city: 'Surabaya',
      rating: 5,
      text: 'C Nails Beauty is the best! Nail artnya tahan lama, warnanya vivid, dan pengirimannya super cepat! Recommended banget 🌸',
      avatar: '👩',
    },
    {
      name: 'Putri Maharani',
      city: 'Bandung',
      rating: 5,
      text: 'Akhirnya nemu nail art yang sesuai ekspektasi. Harga terjangkau tapi kualitasnya premium. Love it! ✨',
      avatar: '👩‍🦱',
    },
  ];

  return (
    <div className="beranda">
      {/* ===== HERO SECTION ===== */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="hero-content" ref={heroRef}>
            <div className="hero-left">
              <div className="hero-badge">
                <i className="fas fa-crown"></i>
                Premium Nail Art
              </div>
              <h1 className="hero-title">
                Tampil <em>Cantik</em> &<br />
                <em>Elegan</em> Setiap Hari
              </h1>
              <p className="hero-subtitle">
                Koleksi nail art premium dengan desain eksklusif. 
                Percantik kuku Anda dengan produk terbaik dari C Nails Beauty.
              </p>
              <div className="hero-stats">
                <div className="stat">
                  <strong>2K+</strong>
                  <span>Pelanggan</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <strong>100+</strong>
                  <span>Desain</span>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <strong>5★</strong>
                  <span>Rating</span>
                </div>
              </div>
              <div className="hero-actions">
                <a
                  href="https://shopee.co.id/cnails.beauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <i className="fas fa-shopping-bag"></i>
                  Beli di Shopee
                </a>
                <button className="btn-secondary" onClick={() => handleNav('produk')}>
                  <i className="fas fa-eye"></i>
                  Lihat Koleksi
                </button>
              </div>
              <div className="hero-marketplace">
                <span>Tersedia di</span>
                <div className="mp-badges">
                  <a href="https://shopee.co.id/cnails.beauty" target="_blank" rel="noopener noreferrer" className="mp-badge shopee">
                    <i className="fas fa-shopping-bag"></i> Shopee
                  </a>
                  <a href="https://www.instagram.com/natasyaaha" target="_blank" rel="noopener noreferrer" className="mp-badge instagram">
                    <i className="fab fa-instagram"></i> Instagram
                  </a>
                  <a href="https://www.tiktok.com/@cnailsbty" target="_blank" rel="noopener noreferrer" className="mp-badge tiktok">
                    <i className="fab fa-tiktok"></i> TikTok
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-image-showcase">
                <div className="showcase-main">
                  <img
                    src="/cnailsbeautuy.jpeg"
                    alt="C Nails Beauty Showcase"
                    className="main-img"
                  />
                  <div className="floating-card card-1">
                    <i className="fas fa-star"></i>
                    <div>
                      <strong>4.9/5</strong>
                      <span>Rating Terbaik</span>
                    </div>
                  </div>
                  <div className="floating-card card-2">
                    <i className="fas fa-fire"></i>
                    <div>
                      <strong>Terlaris</strong>
                      <span>Di Shopee</span>
                    </div>
                  </div>
                </div>
                <div className="showcase-thumbnails">
                  {productImages.slice(0, 3).map((img, i) => (
                    <div key={i} className="thumb-item">
                      <img src={`/${img}`} alt={`Nail ${i + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE STRIP ===== */}
      <div className="marquee-strip">
        <div className="marquee-track">
          {Array(3).fill(['✨ Premium Quality', '💅 Nail Art Eksklusif', '🌸 Free Ongkir', '⭐ 5-Star Reviews', '🎀 Desain Mewah', '💕 Tren Terkini']).flat().map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      {/* ===== FEATURES ===== */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="feature-icon">
                  <i className={`fas ${f.icon}`}></i>
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="gallery-preview">
        <div className="container">
          <div className="gold-divider"></div>
          <h2 className="section-title">Koleksi <span>Terbaru</span></h2>
          <p className="section-subtitle">Temukan inspirasi nail art cantik untuk setiap momen spesial Anda</p>

          <div className="gallery-masonry">
            {productImages.map((img, i) => (
              <div key={i} className={`gallery-item gallery-item-${i + 1}`}>
                <img src={`/${img}`} alt={`Nail art koleksi ${i + 1}`} loading="lazy" />
                <div className="gallery-overlay">
                  <button onClick={() => handleNav('produk')} className="gallery-view-btn">
                    <i className="fas fa-eye"></i> Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="gallery-cta">
            <button className="btn-primary" onClick={() => handleNav('produk')}>
              <i className="fas fa-th"></i>
              Lihat Semua Koleksi
            </button>
          </div>
        </div>
      </section>

      {/* ===== MARKETPLACE SYNC BANNER ===== */}
      <section className="marketplace-section">
        <div className="container">
          <div className="marketplace-banner">
            <div className="mp-banner-content">
              <div className="gold-divider" style={{ margin: '0 0 16px' }}></div>
              <h2>Sinkronisasi dengan <span>Marketplace</span></h2>
              <p>Temukan produk C Nails Beauty di berbagai platform belanja online favoritmu. Harga terbaik, produk asli terjamin!</p>
              <div className="mp-cards">
                <a href="https://shopee.co.id/cnails.beauty" target="_blank" rel="noopener noreferrer" className="mp-card">
                  <div className="mp-card-icon shopee-icon">
                    <i className="fas fa-shopping-bag"></i>
                  </div>
                  <div className="mp-card-info">
                    <strong>Shopee</strong>
                    <span>cnails.beauty</span>
                  </div>
                  <i className="fas fa-arrow-right mp-arrow"></i>
                </a>
                <a href="https://www.instagram.com/natasyaaha" target="_blank" rel="noopener noreferrer" className="mp-card">
                  <div className="mp-card-icon ig-icon">
                    <i className="fab fa-instagram"></i>
                  </div>
                  <div className="mp-card-info">
                    <strong>Instagram</strong>
                    <span>@natasyaaha</span>
                  </div>
                  <i className="fas fa-arrow-right mp-arrow"></i>
                </a>
                <a href="https://www.tiktok.com/@cnailsbty" target="_blank" rel="noopener noreferrer" className="mp-card">
                  <div className="mp-card-icon tiktok-icon">
                    <i className="fab fa-tiktok"></i>
                  </div>
                  <div className="mp-card-info">
                    <strong>TikTok Shop</strong>
                    <span>@cnailsbty</span>
                  </div>
                  <i className="fas fa-arrow-right mp-arrow"></i>
                </a>
                <a href="https://wa.me/6288289235617" target="_blank" rel="noopener noreferrer" className="mp-card">
                  <div className="mp-card-icon wa-icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                  <div className="mp-card-info">
                    <strong>WhatsApp</strong>
                    <span>Order & Tanya</span>
                  </div>
                  <i className="fas fa-arrow-right mp-arrow"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="testimonials-section">
        <div className="container">
          <div className="gold-divider"></div>
          <h2 className="section-title">Yang Mereka <span>Katakan</span></h2>
          <p className="section-subtitle">Ribuan pelanggan cantik sudah merasakan manfaatnya</p>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="testimonial-quote">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-stars">
                  {Array(t.rating).fill(0).map((_, s) => (
                    <i key={s} className="fas fa-star"></i>
                  ))}
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.avatar}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-banner">
            <div className="cta-deco cta-deco-1">💅</div>
            <div className="cta-deco cta-deco-2">✨</div>
            <div className="cta-deco cta-deco-3">🌸</div>
            <h2>Siap Tampil <em>Memukau?</em></h2>
            <p>Dapatkan nail art impianmu sekarang dan jadilah versi terbaik dari dirimu!</p>
            <div className="cta-actions">
              <a
                href="https://shopee.co.id/cnails.beauty"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-main"
              >
                <i className="fas fa-shopping-bag"></i>
                Order Sekarang
              </a>
              <a
                href="https://wa.me/6288289235617?text=Halo%20C%20Nails!%20Saya%20mau%20konsultasi"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn-wa"
              >
                <i className="fab fa-whatsapp"></i>
                Konsultasi Gratis
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Beranda;
