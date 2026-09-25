import React, { useState } from 'react';
import './Produk.css';

const allProducts = [
  {
    id: 1, name: 'Nail Art Floral Elegan', category: 'nail-art',
    img: 'WhatsApp Image 2026-09-25 at 7.17.25 PM.jpeg',
    price: 'Rp 35.000', badge: 'Terlaris', desc: 'Desain bunga cantik cocok untuk segala acara',
  },
  {
    id: 2, name: 'Press-On Nails Pink Glitter', category: 'press-on',
    img: 'WhatsApp Image 2026-09-25 at 7.17.26 PM.jpeg',
    price: 'Rp 45.000', badge: 'Baru', desc: 'Mudah dipasang, tahan hingga 2 minggu',
  },
  {
    id: 3, name: 'Nail Art Ombre Pastel', category: 'nail-art',
    img: 'WhatsApp Image 2026-09-25 at 7.17.26 PM (1).jpeg',
    price: 'Rp 38.000', badge: '', desc: 'Gradasi warna pastel yang memesona',
  },
  {
    id: 4, name: 'Nail Sticker Butterfly', category: 'sticker',
    img: 'WhatsApp Image 2026-09-25 at 7.17.27 PM.jpeg',
    price: 'Rp 22.000', badge: 'Hot', desc: 'Stiker kupu-kupu 3D yang memukau',
  },
  {
    id: 5, name: 'Press-On Nails French Classic', category: 'press-on',
    img: 'WhatsApp Image 2026-09-25 at 7.17.27 PM (1).jpeg',
    price: 'Rp 48.000', badge: '', desc: 'Gaya French klasik yang timeless',
  },
  {
    id: 6, name: 'Nail Art Geometric Gold', category: 'nail-art',
    img: 'WhatsApp Image 2026-09-25 at 7.17.28 PM.jpeg',
    price: 'Rp 42.000', badge: 'Premium', desc: 'Motif geometri emas yang mewah',
  },
  {
    id: 7, name: 'Nail Sticker Sakura', category: 'sticker',
    img: 'WhatsApp Image 2026-09-25 at 7.17.28 PM (1).jpeg',
    price: 'Rp 18.000', badge: '', desc: 'Motif sakura Jepang yang anggun',
  },
  {
    id: 8, name: 'Press-On Nails Marble Luxury', category: 'press-on',
    img: 'WhatsApp Image 2026-09-25 at 7.17.28 PM (2).jpeg',
    price: 'Rp 55.000', badge: 'Premium', desc: 'Efek marmer mewah berkelas tinggi',
  },
  {
    id: 9, name: 'Nail Art Glitter Rainbow', category: 'nail-art',
    img: 'WhatsApp Image 2026-09-25 at 7.17.29 PM.jpeg',
    price: 'Rp 40.000', badge: 'Terlaris', desc: 'Kilau pelangi yang memikat di setiap momen',
  },
  {
    id: 10, name: 'Nail Sticker Holographic', category: 'sticker',
    img: 'WhatsApp Image 2026-09-25 at 7.17.30 PM.jpeg',
    price: 'Rp 25.000', badge: 'Baru', desc: 'Efek holographic trendy masa kini',
  },
  {
    id: 11, name: 'Press-On Nails Bridal White', category: 'press-on',
    img: 'WhatsApp Image 2026-09-25 at 7.17.30 PM (1).jpeg',
    price: 'Rp 60.000', badge: 'Spesial', desc: 'Sempurna untuk hari pernikahan',
  },
  {
    id: 12, name: 'Nail Art Abstract Modern', category: 'nail-art',
    img: 'WhatsApp Image 2026-09-25 at 7.17.31 PM.jpeg',
    price: 'Rp 37.000', badge: '', desc: 'Desain abstrak modern dan edgy',
  },
  {
    id: 13, name: 'Nail Sticker Stars & Moon', category: 'sticker',
    img: 'WhatsApp Image 2026-09-25 at 7.17.31 PM (1).jpeg',
    price: 'Rp 20.000', badge: '', desc: 'Motif bintang dan bulan yang dreamy',
  },
  {
    id: 14, name: 'Press-On Nails Gradient Blue', category: 'press-on',
    img: 'WhatsApp Image 2026-09-25 at 7.17.31 PM (2).jpeg',
    price: 'Rp 50.000', badge: 'Baru', desc: 'Gradasi biru elegan dan memesona',
  },
  {
    id: 15, name: 'Nail Art Vintage Rose', category: 'nail-art',
    img: 'WhatsApp Image 2026-09-25 at 7.17.32 PM.jpeg',
    price: 'Rp 43.000', badge: 'Hot', desc: 'Mawar vintage yang timeless dan cantik',
  },
  {
    id: 16, name: 'Nail Sticker Lace Luxury', category: 'sticker',
    img: 'WhatsApp Image 2026-09-25 at 7.17.32 PM (1).jpeg',
    price: 'Rp 28.000', badge: 'Premium', desc: 'Motif renda mewah berkelas tinggi',
  },
  {
    id: 17, name: 'Press-On Nails Animal Print', category: 'press-on',
    img: 'WhatsApp Image 2026-09-25 at 7.17.33 PM.jpeg',
    price: 'Rp 46.000', badge: '', desc: 'Motif animal print yang trendy dan berani',
  },
  {
    id: 18, name: 'Nail Art Pearl Luxe', category: 'nail-art',
    img: 'WhatsApp Image 2026-09-25 at 7.17.33 PM (1).jpeg',
    price: 'Rp 52.000', badge: 'Premium', desc: 'Hiasan mutiara mewah nan elegan',
  },
  {
    id: 19, name: 'Nail Sticker Candy Pop', category: 'sticker',
    img: 'WhatsApp Image 2026-09-25 at 7.17.34 PM.jpeg',
    price: 'Rp 19.000', badge: '', desc: 'Warna-warni candy yang ceria dan fun',
  },
  {
    id: 20, name: 'Press-On Nails Nude Minimal', category: 'press-on',
    img: 'WhatsApp Image 2026-09-25 at 7.17.34 PM (1).jpeg',
    price: 'Rp 42.000', badge: 'Terlaris', desc: 'Minimalis elegan untuk tampilan sehari-hari',
  },
  {
    id: 21, name: 'Nail Art Blooming Garden', category: 'nail-art',
    img: 'WhatsApp Image 2026-09-25 at 7.17.35 PM.jpeg',
    price: 'Rp 44.000', badge: 'Baru', desc: 'Taman bunga yang bermekaran di kuku Anda',
  },
  {
    id: 22, name: 'Nail Sticker Gold Foil', category: 'sticker',
    img: 'WhatsApp Image 2026-09-25 at 7.17.35 PM (1).jpeg',
    price: 'Rp 30.000', badge: 'Hot', desc: 'Foil emas mewah untuk tampilan premium',
  },
];

const categories = [
  { id: 'all', label: 'Semua', icon: 'fa-th' },
  { id: 'nail-art', label: 'Nail Art', icon: 'fa-paint-brush' },
  { id: 'press-on', label: 'Press-On', icon: 'fa-hand-sparkles' },
  { id: 'sticker', label: 'Nail Sticker', icon: 'fa-star' },
];

const badgeColors = {
  'Terlaris': 'badge-hot',
  'Baru': 'badge-new',
  'Hot': 'badge-hot',
  'Premium': 'badge-premium',
  'Spesial': 'badge-special',
};

const Produk = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = allProducts.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="produk-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-bg">
          <div className="ph-shape ph-shape-1"></div>
          <div className="ph-shape ph-shape-2"></div>
        </div>
        <div className="container">
          <div className="gold-divider"></div>
          <h1 className="page-header-title">Koleksi <span>Produk</span></h1>
          <p className="page-header-subtitle">
            Temukan nail art impian Anda dari ratusan koleksi eksklusif kami
          </p>
        </div>
      </div>

      <div className="container">
        {/* Filter & Search */}
        <div className="filter-bar">
          <div className="category-filters">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <i className={`fas ${cat.icon}`}></i>
                {cat.label}
              </button>
            ))}
          </div>
          <div className="search-box">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="Cari produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Result count */}
        <div className="result-info">
          <span>Menampilkan <strong>{filtered.length}</strong> produk</span>
        </div>

        {/* Products Grid */}
        {filtered.length > 0 ? (
          <div className="products-grid">
            {filtered.map((product, i) => (
              <div
                key={product.id}
                className="product-card"
                style={{ animationDelay: `${(i % 6) * 0.08}s` }}
              >
                <div className="product-image-wrap">
                  <img
                    src={`/${product.img}`}
                    alt={product.name}
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className={`product-badge ${badgeColors[product.badge]}`}>
                      {product.badge}
                    </span>
                  )}
                  <div className="product-overlay">
                    <a
                      href="https://shopee.co.id/cnails.beauty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="buy-btn"
                    >
                      <i className="fas fa-shopping-bag"></i>
                      Beli Sekarang
                    </a>
                    <a
                      href={`https://wa.me/6288289235617?text=Halo!%20Saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="wa-btn"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
                <div className="product-info">
                  <span className="product-category-tag">
                    {categories.find(c => c.id === product.category)?.label}
                  </span>
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <div className="product-stars">
                      {[...Array(5)].map((_, s) => (
                        <i key={s} className="fas fa-star"></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <i className="fas fa-search"></i>
            <h3>Produk Tidak Ditemukan</h3>
            <p>Coba ubah kata kunci atau filter kategori</p>
            <button onClick={() => { setSearch(''); setActiveCategory('all'); }} className="btn-primary">
              Reset Filter
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="produk-bottom-cta">
          <div className="bottom-cta-card">
            <h3>Tidak menemukan yang kamu cari?</h3>
            <p>Chat kami di WhatsApp untuk request desain custom!</p>
            <a
              href="https://wa.me/6288289235617?text=Halo%20C%20Nails%20Beauty!%20Saya%20mau%20request%20desain%20custom"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <i className="fab fa-whatsapp"></i>
              Custom Order
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produk;
