import React from 'react';
import './TentangKami.css';

const team = [
  { name: 'Natasya Handoko', role: 'Founder & CEO', emoji: '👩‍💼', desc: 'Passionate nail artist dengan pengalaman 8+ tahun' },
  { name: 'Adi Rahmat', role: 'Web Developer', emoji: '👨‍💻', desc: 'Developer di balik website C Nails Beauty' },
  { name: 'uphoqrstu', role: 'Customer Care', emoji: '👨‍💻', desc: 'Selalu siap membantu dan melayani dengan hati' },
];

const values = [
  { icon: 'fa-gem', title: 'Kualitas Premium', desc: 'Kami menggunakan material terbaik yang aman dan tahan lama untuk setiap produk.' },
  { icon: 'fa-heart', title: 'Passion & Love', desc: 'Setiap produk dibuat dengan cinta dan dedikasi penuh untuk kepuasan pelanggan.' },
  { icon: 'fa-leaf', title: 'Aman & Ramah', desc: 'Produk kami telah teruji aman, bebas bahan berbahaya, dan ramah untuk kuku.' },
  { icon: 'fa-trophy', title: 'Terpercaya', desc: 'Ribuan pelanggan setia menjadi bukti kualitas dan kepercayaan brand kami.' },
  { icon: 'fa-palette', title: 'Inovatif', desc: 'Kami selalu mengikuti tren terkini dan berinovasi untuk desain-desain eksklusif.' },
  { icon: 'fa-users', title: 'Komunitas', desc: 'Bergabunglah dengan ribuan beauty lover yang mencintai C Nails Beauty.' },
];

const milestones = [
  { year: '2020', title: 'Brand Lahir', desc: 'C Nails Beauty didirikan dengan passion untuk nail art' },
  { year: '2021', title: 'Shopee Launch', desc: 'Membuka toko resmi di Shopee dan mendapat ribuan pembeli' },
  { year: '2022', title: 'Viral TikTok', desc: 'Konten nail art kami viral dan followers melonjak' },
  { year: '2023', title: '1000+ Pelanggan', desc: 'Merayakan 1000+ pelanggan setia C Nails Beauty' },
  { year: '2024', title: 'Ekspansi Platform', desc: 'Hadir di semua platform marketplace utama Indonesia' },
  { year: '2026', title: 'Terus Berkembang', desc: '2000+ pelanggan, 100+ desain, dan terus tumbuh!' },
];

const faqs = [
  {
    q: 'Apa itu press-on nails?',
    a: 'Press-on nails adalah kuku palsu premium yang mudah dipasang tanpa harus ke salon. Tahan 1–2 minggu dengan pemasangan yang benar.',
  },
  {
    q: 'Berapa lama press-on nails bertahan?',
    a: 'Dengan penggunaan lem yang tepat dan perawatan yang baik, press-on nails bisa bertahan 1–2 minggu bahkan lebih.',
  },
  {
    q: 'Bagaimana cara melepas press-on nails?',
    a: 'Rendam kuku dalam air hangat atau minyak kutikel selama 10–15 menit, lalu lepaskan perlahan. Jangan dicabut paksa ya!',
  },
  {
    q: 'Apakah produk aman untuk semua jenis kuku?',
    a: 'Ya! Semua produk kami telah diuji dan aman digunakan. Kami menggunakan bahan non-toxic dan dermatologically tested.',
  },
  {
    q: 'Bagaimana cara order?',
    a: 'Bisa langsung order di Shopee, TikTok Shop, atau chat kami via WhatsApp untuk pemesanan personal.',
  },
];

const TentangKami = () => {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <div className="tentang-page">
      {/* Header */}
      <div className="page-header">
        <div className="page-header-bg">
          <div className="ph-shape ph-shape-1"></div>
          <div className="ph-shape ph-shape-2"></div>
        </div>
        <div className="container">
          <div className="gold-divider"></div>
          <h1 className="page-header-title">Tentang <span>C Nails Beauty</span></h1>
          <p className="page-header-subtitle">
            Kisah kami — dari passion menjadi brand kecantikan yang dicintai
          </p>
        </div>
      </div>

      <div className="container">
        {/* Story Section */}
        <section className="story-section">
          <div className="story-grid">
            <div className="story-images">
              <div className="story-img-main">
                <img src="/cnailsbeautuy.jpeg" alt="C Nails Beauty Story" />
              </div>
              <div className="story-img-side">
                <img src="/logocnails.jpeg" alt="C Nails Logo" className="story-logo-img" />
                <div className="story-badge-float">
                  <i className="fas fa-crown"></i>
                  <span>Est. 2020</span>
                </div>
              </div>
            </div>
            <div className="story-content">
              <div className="gold-divider" style={{ margin: '0 0 16px' }}></div>
              <h2>Cerita di Balik <em>C Nails Beauty</em></h2>
              <p>
                C Nails Beauty lahir dari kecintaan yang mendalam terhadap seni kecantikan kuku. Kami percaya bahwa setiap wanita berhak tampil cantik dan percaya diri — termasuk dari ujung jarinya!
              </p>
              <p>
                Didirikan pada tahun 2020, kami memulai perjalanan dari garasi kecil dengan koleksi nail art pertama kami. Berkat kepercayaan pelanggan yang terus tumbuh, hari ini C Nails Beauty hadir di berbagai marketplace dengan ribuan pelanggan setia di seluruh Indonesia.
              </p>
              <p>
                Setiap produk kami dibuat dengan cinta, menggunakan material premium yang aman dan telah teruji. Misi kami sederhana: <strong>membuat setiap wanita merasa cantik dan percaya diri</strong>.
              </p>
              <div className="story-stats">
                <div className="s-stat">
                  <strong>6+</strong>
                  <span>Tahun Berpengalaman</span>
                </div>
                <div className="s-stat">
                  <strong>2000+</strong>
                  <span>Pelanggan Setia</span>
                </div>
                <div className="s-stat">
                  <strong>100+</strong>
                  <span>Koleksi Desain</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="values-section">
          <div className="gold-divider"></div>
          <h2 className="section-title">Nilai <span>Kami</span></h2>
          <p className="section-subtitle">Yang membuat C Nails Beauty berbeda dari yang lain</p>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card" style={{ animationDelay: `${i * 0.08}s` }}>
                <div className="value-icon">
                  <i className={`fas ${v.icon}`}></i>
                </div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="timeline-section">
          <div className="gold-divider"></div>
          <h2 className="section-title">Perjalanan <span>Kami</span></h2>
          <p className="section-subtitle">Dari mimpi kecil menuju brand yang dicintai jutaan orang</p>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{m.year}</div>
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
                <div className="timeline-dot">
                  <i className="fas fa-star"></i>
                </div>
              </div>
            ))}
            <div className="timeline-line"></div>
          </div>
        </section>

        {/* Team */}
        <section className="team-section">
          <div className="gold-divider"></div>
          <h2 className="section-title">Tim <span>Kami</span></h2>
          <p className="section-subtitle">Orang-orang berdedikasi di balik C Nails Beauty</p>
          <div className="team-grid">
            {team.map((member, i) => (
              <div key={i} className="team-card" style={{ animationDelay: `${i * 0.12}s` }}>
                <div className="team-avatar">{member.emoji}</div>
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Social Media Section */}
        <section className="social-section">
          <div className="social-banner">
            <div className="gold-divider" style={{ margin: '0 auto 16px' }}></div>
            <h2>Ikuti Kami di <em>Social Media</em></h2>
            <p>Dapatkan inspirasi harian, info promo terbaru, dan konten eksklusif dari C Nails Beauty!</p>
            <div className="social-links-big">
              <a href="https://www.instagram.com/natasyaaha" target="_blank" rel="noopener noreferrer" className="slink instagram">
                <i className="fab fa-instagram"></i>
                <div>
                  <strong>Instagram</strong>
                  <span>@natasyaaha</span>
                </div>
                <i className="fas fa-arrow-right slink-arrow"></i>
              </a>
              <a href="https://www.tiktok.com/@cnailsbty" target="_blank" rel="noopener noreferrer" className="slink tiktok">
                <i className="fab fa-tiktok"></i>
                <div>
                  <strong>TikTok</strong>
                  <span>@cnailsbty</span>
                </div>
                <i className="fas fa-arrow-right slink-arrow"></i>
              </a>
              <a href="https://shopee.co.id/cnails.beauty" target="_blank" rel="noopener noreferrer" className="slink shopee">
                <i className="fas fa-shopping-bag"></i>
                <div>
                  <strong>Shopee</strong>
                  <span>cnails.beauty</span>
                </div>
                <i className="fas fa-arrow-right slink-arrow"></i>
              </a>
              <a href="https://wa.me/6288289235617" target="_blank" rel="noopener noreferrer" className="slink whatsapp">
                <i className="fab fa-whatsapp"></i>
                <div>
                  <strong>WhatsApp</strong>
                  <span>+62 882-8923-5617</span>
                </div>
                <i className="fas fa-arrow-right slink-arrow"></i>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section">
          <div className="gold-divider"></div>
          <h2 className="section-title">Pertanyaan yang <span>Sering Ditanya</span></h2>
          <p className="section-subtitle">Semua yang perlu kamu tahu tentang produk kami</p>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${openFaq === i ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <i className={`fas ${openFaq === i ? 'fa-minus' : 'fa-plus'}`}></i>
                </div>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta">
          <div className="contact-cta-card">
            <h2>Masih Punya Pertanyaan?</h2>
            <p>Tim kami siap membantu kamu 7 hari seminggu. Jangan ragu untuk menghubungi kami!</p>
            <div className="contact-cta-btns">
              <a href="https://wa.me/6288289235617" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <i className="fab fa-whatsapp"></i>
                Chat WhatsApp
              </a>
              <a href="https://www.instagram.com/natasyaaha" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <i className="fab fa-instagram"></i>
                DM Instagram
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TentangKami;
