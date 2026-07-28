import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import About from './components/About';
import Contact from './components/Contact';
import YapeModal from './components/YapeModal';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [showYapeModal, setShowYapeModal] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      darkMode ? 'bg-black text-white selection:bg-zinc-800 selection:text-white' : 'bg-zinc-50 text-zinc-900 selection:bg-zinc-200 selection:text-black'
    }`}>
      <ScrollToTop />
      
      <Navbar 
        onOpenYape={() => setShowYapeModal(true)} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<><Hero darkMode={darkMode} /><Catalog darkMode={darkMode} /></>} />
          <Route path="/nosotros" element={<About darkMode={darkMode} />} />
          <Route path="/contacto" element={<Contact darkMode={darkMode} />} />
        </Routes>
      </div>

      <Footer darkMode={darkMode} />

      {showYapeModal && (
        <YapeModal onClose={() => setShowYapeModal(false)} darkMode={darkMode} />
      )}
    </div>
  );
}