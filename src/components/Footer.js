import React from 'react';
import './Footer.css';

const Footer = ({ setActivePage }) => {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Top wave */}
      <div className="footer-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#fff0f8" />
        </svg>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand">
              <div className="footer-logo">
                <img src="/logocnails.jpeg" alt="C Nails Beauty" />
                <div>
                  <h3>C Nails Beauty</h3>
                  <p className="footer-tagline">Kecantikan di Ujung Jarimu ✨</p>
                </div>
              </div>
              <p className="footer-desc">
                Produk nail art berkualitas tinggi dengan desain eksklusif. 
                Tampil cantik, elegan, dan percaya diri setiap hari bersama C Nails Beauty.
              </p>
              <div className="footer-social">
                <a
                  href="https://shopee.co.id/cnails.beauty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn shopee"
                  aria-label="Shopee"
                >
                  <i className="fas fa-shopping-bag"></i>
                </a>
                <a
                  href="https://www.instagram.com/natasyaaha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn instagram"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.tiktok.com/@cnailsbty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn tiktok"
                  aria-label="TikTok"
                >
                  <i className="fab fa-tiktok"></i>
                </a>
                <a
                  href="https://wa.me/6288289235617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn whatsapp"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links-col">
              <h4>Menu Utama</h4>
              <ul>
                <li><button onClick={() => handleNav('beranda')}><i className="fas fa-chevron-right"></i> Beranda</button></li>
                <li><button onClick={() => handleNav('produk')}><i className="fas fa-chevron-right"></i> Produk</button></li>
                <li><button onClick={() => handleNav('toko')}><i className="fas fa-chevron-right"></i> Toko</button></li>
                <li><button onClick={() => handleNav('tentang')}><i className="fas fa-chevron-right"></i> Tentang Kami</button></li>
              </ul>
            </div>

            {/* Marketplace */}
            <div className="footer-links-col">
              <h4>Marketplace</h4>
              <ul>
                <li>
                  <a href="https://shopee.co.id/cnails.beauty" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-chevron-right"></i> Shopee
                  </a>
                </li>
                <li>
                  <a href="https://www.tokopedia.com/cnailsbeauty" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-chevron-right"></i> Tokopedia
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@cnailsbty" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-chevron-right"></i> TikTok Shop
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-contact">
              <h4>Hubungi Kami</h4>
              <div className="contact-item">
                <i className="fab fa-whatsapp"></i>
                <span>+62 882-8923-5617</span>
              </div>
              <div className="contact-item">
                <i className="fab fa-instagram"></i>
                <span>@natasyaaha</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>cnailsbeauty@gmail.com</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 C Nails Beauty. All Rights Reserved. Made with <i className="fas fa-heart" style={{color:'#f8a4c8'}}></i> for Beauty Lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
