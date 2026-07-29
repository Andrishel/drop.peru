import React from 'react';
import { Link } from 'react-router-dom';

const PHONE_NUMBER = '51955908046';

export default function Navbar({ onOpenYape, darkMode, setDarkMode }) {
  return (
    <header className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
      darkMode ? 'bg-black/90 border-zinc-800 text-white' : 'bg-white/90 border-zinc-200 text-zinc-900 shadow-sm'
    }`}>
      {/* Fila Principal: Logo y Botones de Acción */}
      <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo & Nombre */}
        <div className="flex items-center space-x-2">
          <img 
            src="/img/logo.png" 
            alt="Drop.peru Logo" 
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-full object-cover shadow-md shadow-black/10"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
          <span className="text-base sm:text-xl font-bold tracking-wider uppercase">
            DROP<span className={darkMode ? 'text-zinc-500' : 'text-zinc-400'}>.PERU</span>
          </span>
        </div>

        {/* Navegación Desktop */}
        <nav className={`hidden md:flex items-center space-x-6 text-xs font-bold uppercase tracking-wider ${
          darkMode ? 'text-zinc-400' : 'text-zinc-600'
        }`}>
          <Link to="/" className="hover:text-emerald-500 transition-colors">Catálogo</Link>
          <Link to="/nosotros" className="hover:text-emerald-500 transition-colors">Nosotros</Link>
          <Link to="/contacto" className="hover:text-emerald-500 transition-colors">Contacto</Link>
        </nav>

        {/* Acciones: Cambiador de Tema, Yape y WhatsApp */}
        <div className="flex items-center space-x-1.5 sm:space-x-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-1.5 sm:p-2 rounded-full transition-all border text-xs sm:text-sm ${
              darkMode 
                ? 'bg-zinc-900 border-zinc-800 text-amber-400 hover:bg-zinc-800' 
                : 'bg-zinc-100 border-zinc-300 text-zinc-700 hover:bg-zinc-200'
            }`}
            aria-label="Toggle Theme"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button
            onClick={onOpenYape}
            className="bg-purple-600 hover:bg-purple-500 text-white font-extrabold text-[11px] sm:text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-full transition-all flex items-center space-x-1 shadow-md shadow-purple-600/20 active:scale-95"
          >
            <span>💜 Yape</span>
          </button>

          <a
            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Hola Drop.peru, tengo una consulta sobre sus productos.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-[11px] sm:text-sm px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full transition-all flex items-center space-x-1 shadow-md shadow-emerald-500/10 active:scale-95"
          >
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Fila Secundaria Exclusiva para Celulares (Navegación Móvil) */}
      <div className={`md:hidden border-t px-4 py-2 flex justify-around text-[11px] font-extrabold uppercase tracking-widest ${
        darkMode ? 'border-zinc-900 bg-zinc-950/80 text-zinc-400' : 'border-zinc-200 bg-zinc-100/80 text-zinc-600'
      }`}>
        <Link to="/" className="hover:text-emerald-500 transition-colors">Catálogo</Link>
        <Link to="/nosotros" className="hover:text-emerald-500 transition-colors">Nosotros</Link>
        <Link to="/contacto" className="hover:text-emerald-500 transition-colors">Contacto</Link>
      </div>
    </header>
  );
}