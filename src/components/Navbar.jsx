import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PHONE_NUMBER = '51955908046';

export default function Navbar({ onOpenYape, darkMode, setDarkMode, cartCount, openCart }) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50">
      {/* Cintillo de Oferta Superior */}
      <div className="bg-gradient-to-r from-purple-700 via-emerald-600 to-purple-700 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest py-1.5 px-4 text-center shadow-md">
        🔥 PROMO DROPS: POLOS 1 x S/ 40 (3 x S/ 100) • SHORTS 1 x S/ 30 (3 x S/ 75) 📦
      </div>

      <div className={`backdrop-blur-md border-b transition-all duration-300 ${
        darkMode ? 'bg-black/90 border-zinc-800 text-white shadow-black/40' : 'bg-white/90 border-zinc-200 text-zinc-900 shadow-sm'
      }`}>
        <div className="px-4 sm:px-6 py-3 flex items-center justify-between max-w-7xl mx-auto">
          
          {/* Logo & Marca */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img 
              src="/img/logo.png" 
              alt="Drop.peru Logo" 
              className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover shadow-md transition-transform group-hover:scale-105"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span className="text-base sm:text-xl font-black tracking-wider uppercase">
              DROP<span className={darkMode ? 'text-zinc-500' : 'text-zinc-400'}>.PERU</span>
            </span>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-black uppercase tracking-wider">
            <Link to="/" className={`relative py-1 transition-colors ${isActive('/') ? 'text-emerald-500 font-extrabold' : darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'}`}>
              Catálogo
              {isActive('/') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-full animate-fade-in" />}
            </Link>
            <Link to="/nosotros" className={`relative py-1 transition-colors ${isActive('/nosotros') ? 'text-emerald-500 font-extrabold' : darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'}`}>
              Nosotros
              {isActive('/nosotros') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-full animate-fade-in" />}
            </Link>
            <Link to="/contacto" className={`relative py-1 transition-colors ${isActive('/contacto') ? 'text-emerald-500 font-extrabold' : darkMode ? 'text-zinc-400 hover:text-white' : 'text-zinc-600 hover:text-black'}`}>
              Contacto
              {isActive('/contacto') && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 rounded-full animate-fade-in" />}
            </Link>
          </nav>

          {/* Botones de Acción (Adaptados para Celular y Desktop) */}
          <div className="flex items-center space-x-1.5 sm:space-x-3">
            
            {/* 1. Switch Píldora de Tema (Modo Claro / Oscuro) */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`relative inline-flex items-center h-7 w-11 sm:w-12 rounded-full p-1 transition-colors duration-300 border ${
                darkMode ? 'bg-zinc-900 border-zinc-700 justify-end' : 'bg-zinc-200 border-zinc-300 justify-start'
              }`}
              aria-label="Cambiar tema"
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${darkMode ? 'bg-zinc-100 text-black' : 'bg-black text-white'}`}>
                {darkMode ? (
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/></svg>
                ) : (
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M12.3 2c.43 0 .77.35.74.78-.29 4.1 2.92 7.55 7.02 7.55.37 0 .72-.03 1.06-.1.41-.08.78.26.78.68 0 5.25-4.25 9.5-9.5 9.5-5.25 0-9.5-4.25-9.5-9.5 0-4.86 3.65-8.87 8.4-9.41.33-.04.66.19.7.5.01 0 .01 0 0 0z"/></svg>
                )}
              </span>
            </button>

            {/* 2. Botón del Carrito (Drop Bag) */}
            <button 
              onClick={openCart} 
              className={`relative flex items-center justify-center transition-all active:scale-95 w-8 h-8 sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 rounded-full border ${
                darkMode 
                  ? 'bg-zinc-900 border-zinc-700 text-white hover:bg-zinc-800' 
                  : 'bg-zinc-100 border-zinc-300 text-black hover:bg-zinc-200'
              }`}
              aria-label="Abrir Carrito"
            >
              <svg className="w-4 h-4 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
              <span className="hidden sm:inline font-black text-xs ml-1.5">Carrito</span>
              
              {/* Contador de Productos */}
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-black text-[9px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow-md animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* 3. Yape (Bolita en móvil / Botón completo en PC) */}
            <button
              onClick={onOpenYape}
              className="flex items-center justify-center bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-md shadow-purple-600/20 border border-purple-400/30 active:scale-95 w-8 h-8 rounded-full sm:w-auto sm:h-auto sm:px-3 sm:py-1.5 sm:rounded-full sm:space-x-1"
              aria-label="Pagar con Yape"
            >
              <span className="text-[12px] sm:text-xs">💜</span>
              <span className="hidden sm:inline font-black text-xs">Yape</span>
            </button>

            {/* 4. WhatsApp (Ícono redondo en móvil / Botón completo en PC) */}
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Hola Drop.peru, quisiera consultar por las promociones.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-black transition-all shadow-md shadow-emerald-500/20 active:scale-95 w-8 h-8 rounded-full sm:w-auto sm:h-auto sm:px-3.5 sm:py-1.5 sm:rounded-full sm:space-x-1.5"
              aria-label="Contactar por WhatsApp"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654z"/>
              </svg>
              <span className="hidden sm:inline font-extrabold text-xs">WhatsApp</span>
            </a>

          </div>
        </div>

        {/* Navegación Secundaria en Celulares */}
        <div className={`md:hidden border-t px-4 py-2 flex justify-around text-[11px] font-black uppercase tracking-widest ${
          darkMode ? 'border-zinc-900 bg-zinc-950/80 text-zinc-400' : 'border-zinc-200 bg-zinc-100/80 text-zinc-600'
        }`}>
          <Link to="/" className={isActive('/') ? 'text-emerald-500 font-black' : ''}>Catálogo</Link>
          <Link to="/nosotros" className={isActive('/nosotros') ? 'text-emerald-500 font-black' : ''}>Nosotros</Link>
          <Link to="/contacto" className={isActive('/contacto') ? 'text-emerald-500 font-black' : ''}>Contacto</Link>
        </div>
      </div>
    </header>
  );
}