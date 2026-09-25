import React, { useState, useEffect } from 'react';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="floating-buttons">
      {/* WhatsApp */}
      <a
        href="https://wa.me/6288289235617?text=Halo%20C%20Nails%20Beauty!%20Saya%20ingin%20tanya%20tentang%20produk."
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn whatsapp-btn"
        aria-label="Chat WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
        <span className="float-tooltip">Chat Kami</span>
      </a>

      {/* Shopee */}
      <a
        href="https://shopee.co.id/cnails.beauty"
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn shopee-btn"
        aria-label="Beli di Shopee"
      >
        <i className="fas fa-shopping-bag"></i>
        <span className="float-tooltip">Shopee</span>
      </a>

      {/* Scroll to top */}
      {showScroll && (
        <button className="float-btn scroll-top-btn" onClick={scrollTop} aria-label="Scroll to top">
          <i className="fas fa-chevron-up"></i>
        </button>
      )}
    </div>
  );
};

export default FloatingButtons;
