import React from 'react';
import './Toko.css';

const platforms = [
  {
    id: 'shopee',
    name: 'Shopee',
    username: 'cnails.beauty',
    url: 'https://shopee.co.id/cnails.beauty',
    icon: 'fa-shopping-bag',
    color: '#ee4d2d',
    gradient: 'linear-gradient(135deg, #ee4d2d, #ff6433)',
    desc: 'Toko resmi C Nails Beauty di Shopee. Tersedia voucher gratis ongkir, flash sale, dan penawaran eksklusif!',
    features: ['Gratis Ongkir', 'Flash Sale', 'COD Tersedia', 'Garansi Uang Kembali'],
    rating: '4.9',
    sold: '2.3K+',
    followers: '1.8K',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    username: '@natasyaaha',
    url: 'https://www.instagram.com/natasyaaha',
    icon: 'fa-instagram',
    fab: true,
    color: '#e1306c',
    gradient: 'linear-gradient(135deg, #833ab4, #e1306c, #fd1d1d)',
    desc: 'Ikuti kami di Instagram untuk inspirasi nail art terbaru, behind-the-scenes, dan info promo spesial!',
    features: ['Update Harian', 'Instagram Shop', 'DM Order', 'Konten Eksklusif'],
    rating: '—',
    sold: '500+',
    followers: '3.2K',
  },
  {
    id: 'tiktok',
    name: 'TikTok Shop',
    username: '@cnails.bty',
    url: 'https://www.tiktok.com/@cnailsbty?is_from_webapp=1&sender_device=pc',
    icon: 'fa-tiktok',
    fab: true,
    color: '#000',
    gradient: 'linear-gradient(135deg, #000, #333)',
    desc: 'Tonton tutorial nail art cantik dan belanja langsung dari TikTok Shop kami!',
    features: ['Live Shopping', 'Tutorial Gratis', 'Flash Sale', 'Voucher Eksklusif'],
    rating: '4.8',
    sold: '800+',
    followers: '5.1K',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    username: '+62 882-8923-5617',
    url: 'https://wa.me/6288289235617?text=Halo%20C%20Nails%20Beauty!%20Saya%20ingin%20order',
    icon: 'fa-whatsapp',
    fab: true,
    color: '#25d366',
    gradient: 'linear-gradient(135deg, #25d366, #128c7e)',
    desc: 'Order langsung via WhatsApp untuk pelayanan personal, konsultasi produk, dan harga spesial!',
    features: ['Respon Cepat', 'Custom Order', 'Konsultasi Gratis', 'Harga Spesial'],
    rating: '5.0',
    sold: '1K+',
    followers: '—',
  },
];

const howToBuy = [
  { step: '01', icon: 'fa-eye', title: 'Pilih Produk', desc: 'Browse koleksi kami dan pilih nail art impianmu' },
  { step: '02', icon: 'fa-comments', title: 'Hubungi Kami', desc: 'Chat via WhatsApp atau kunjungi toko marketplace kami' },
  { step: '03', icon: 'fa-credit-card', title: 'Pembayaran', desc: 'Bayar via transfer, COD, atau metode lainnya' },
  { step: '04', icon: 'fa-truck', title: 'Dikirim ke Rumah', desc: 'Produk dikemas cantik & dikirim dalam 1×24 jam' },
];

const Toko = () => {
  return (
    <div className="toko-page">
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-bg">
          <div className="ph-shape ph-shape-1"></div>
          <div className="ph-shape ph-shape-2"></div>
        </div>
        <div className="container">
          <div className="gold-divider"></div>
          <h1 className="page-header-title">Temukan <span>Toko Kami</span></h1>
          <p className="page-header-subtitle">
            Belanja produk C Nails Beauty di berbagai platform favoritmu
          </p>
        </div>
      </div>

      <div className="container">
        {/* Sync Banner */}
        <div className="sync-banner">
          <div className="sync-icon">
            <i className="fas fa-sync-alt"></i>
          </div>
          <div className="sync-text">
            <h3>Sinkronisasi Multi-Platform</h3>
            <p>Produk C Nails Beauty tersedia di berbagai platform belanja online. Harga resmi dan produk asli terjamin di semua platform!</p>
          </div>
          <div className="sync-badges">
            <span>✅ Harga Sama</span>
            <span>✅ Produk Asli</span>
            <span>✅ Real-time Update</span>
          </div>
        </div>

        {/* Platform Cards */}
        <div className="platforms-grid">
          {platforms.map((platform, i) => (
            <div
              key={platform.id}
              className="platform-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div
                className="platform-header"
                style={{ background: platform.gradient }}
              >
                <div className="platform-icon-wrap">
                  {platform.fab ? (
                    <i className={`fab ${platform.icon}`}></i>
                  ) : (
                    <i className={`fas ${platform.icon}`}></i>
                  )}
                </div>
                <div className="platform-header-text">
                  <h3>{platform.name}</h3>
                  <span>{platform.username}</span>
                </div>
              </div>

              <div className="platform-body">
                <p className="platform-desc">{platform.desc}</p>

                <div className="platform-stats">
                  <div className="pstat">
                    <i className="fas fa-star"></i>
                    <span>{platform.rating}</span>
                    <small>Rating</small>
                  </div>
                  <div className="pstat">
                    <i className="fas fa-shopping-bag"></i>
                    <span>{platform.sold}</span>
                    <small>Terjual</small>
                  </div>
                  <div className="pstat">
                    <i className="fas fa-users"></i>
                    <span>{platform.followers}</span>
                    <small>Pengikut</small>
                  </div>
                </div>

                <div className="platform-features">
                  {platform.features.map((f, fi) => (
                    <span key={fi} className="feature-tag">
                      <i className="fas fa-check"></i>
                      {f}
                    </span>
                  ))}
                </div>

                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-cta"
                  style={{ background: platform.gradient }}
                >
                  Kunjungi Toko
                  <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* How To Buy */}
        <div className="how-to-buy">
          <div className="gold-divider"></div>
          <h2 className="section-title">Cara <span>Pesan</span></h2>
          <p className="section-subtitle">4 langkah mudah mendapatkan nail art impianmu</p>
          <div className="steps-grid">
            {howToBuy.map((step, i) => (
              <div key={i} className="step-card">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">
                  <i className={`fas ${step.icon}`}></i>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {i < howToBuy.length - 1 && <div className="step-arrow"><i className="fas fa-chevron-right"></i></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Location & Info */}
        <div className="store-info-section">
          <div className="store-info-grid">
            <div className="store-info-card">
              <div className="si-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Jam Operasional</h3>
              <p>Senin – Jumat: 08.00 – 21.00</p>
              <p>Sabtu – Minggu: 09.00 – 20.00</p>
            </div>
            <div className="store-info-card">
              <div className="si-icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Jangkauan Pengiriman</h3>
              <p>Seluruh Indonesia 🇮🇩</p>
              <p>Ekspres & Reguler tersedia</p>
            </div>
            <div className="store-info-card">
              <div className="si-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Garansi Produk</h3>
              <p>Garansi kerusakan produk</p>
              <p>Return & refund friendly</p>
            </div>
            <div className="store-info-card">
              <div className="si-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>Customer Service</h3>
              <p>Respon dalam 1 jam</p>
              <p>Konsultasi gratis 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toko;
