import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ activePage, setActivePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'beranda', label: 'Beranda', icon: 'fa-home' },
    { id: 'produk', label: 'Produk', icon: 'fa-gem' },
    { id: 'toko', label: 'Toko', icon: 'fa-store' },
    { id: 'tentang', label: 'Tentang Kami', icon: 'fa-heart' },
  ];

  const handleNav = (id) => {
    setActivePage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo" onClick={() => handleNav('beranda')}>
          <img src="/logocnails.jpeg" alt="C Nails Beauty" className="logo-img" />
          <div className="logo-text">
            <span className="logo-main">C Nails</span>
            <span className="logo-sub">Beauty</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`nav-link ${activePage === item.id ? 'active' : ''}`}
                onClick={() => handleNav(item.id)}
              >
                <i className={`fas ${item.icon}`}></i>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="https://shopee.co.id/cnails.beauty"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-cta"
        >
          <i className="fas fa-shopping-bag"></i>
          Beli Sekarang
        </a>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`mobile-nav-link ${activePage === item.id ? 'active' : ''}`}
            onClick={() => handleNav(item.id)}
          >
            <i className={`fas ${item.icon}`}></i>
            {item.label}
          </button>
        ))}
        <a
          href="https://shopee.co.id/cnails.beauty"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          <i className="fas fa-shopping-bag"></i>
          Beli di Shopee
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
