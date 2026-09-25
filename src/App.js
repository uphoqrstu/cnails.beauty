import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Beranda from './pages/Beranda';
import Produk from './pages/Produk';
import Toko from './pages/Toko';
import TentangKami from './pages/TentangKami';

function App() {
  const [activePage, setActivePage] = useState('beranda');

  const renderPage = () => {
    switch (activePage) {
      case 'beranda': return <Beranda setActivePage={setActivePage} />;
      case 'produk': return <Produk />;
      case 'toko': return <Toko />;
      case 'tentang': return <TentangKami />;
      default: return <Beranda setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="App">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="page-wrapper">
        {renderPage()}
      </main>
      <Footer setActivePage={setActivePage} />
      <FloatingButtons />
    </div>
  );
}

export default App;
