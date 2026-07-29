import React from 'react';
import { Link } from 'react-router-dom';

const PHONE_NUMBER = '51955908046';
const INSTAGRAM_USER = 'drop.peru__';
const TIKTOK_USER = 'drop.peru__';

export default function Footer({ darkMode, onOpenYape }) {
  return (
    <footer className={`border-t transition-colors duration-300 pt-12 pb-8 px-4 sm:px-6 ${
      darkMode ? 'border-zinc-900 bg-black text-zinc-400' : 'border-zinc-200 bg-zinc-100 text-zinc-600'
    }`}>
      {/* 
        Cambio móvil: 
        1. text-center md:text-left (Centrado en celular, a la izquierda en PC)
        2. gap-10 sm:gap-8 (Más aire entre secciones en celular)
        3. divide-y md:divide-y-0 (Línea separadora tenue solo en celular)
      */}
      <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-10 text-center md:text-left md:divide-y-0 ${
        darkMode ? 'divide-zinc-900' : 'divide-zinc-200'
      } divide-y`}>
        
        {/* Columna 1: Brand & Bio */}
        <div className="space-y-4 md:space-y-3 pt-6 md:pt-0 first:pt-0">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <img 
              src="/img/logo.png" 
              alt="Drop.peru Logo" 
              className="w-8 h-8 rounded-full object-cover"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span className={`text-xl md:text-lg font-black uppercase tracking-wider ${darkMode ? 'text-white' : 'text-black'}`}>
              DROP<span className="text-zinc-500">.PERU</span>
            </span>
          </div>
          <p className="text-sm md:text-xs leading-relaxed px-4 md:px-0">
            Streetwear & Exclusive Drops. Importación directa de prendas seleccionadas y ropa urbana de alto nivel en Piura.
          </p>
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 px-3 py-1.5 md:px-2.5 md:py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Atención Online Activa</span>
          </div>
        </div>

        {/* Columna 2: Navegación Rápida */}
        <div className="pt-8 md:pt-0">
          <h4 className={`text-xs font-black uppercase tracking-widest mb-4 md:mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
            Navegación
          </h4>
          <ul className="space-y-3 md:space-y-2 text-sm md:text-xs font-semibold">
            <li>
              <Link to="/" className="hover:text-emerald-500 transition-colors">Catálogo Completo</Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:text-emerald-500 transition-colors">Sobre Nosotros</Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-emerald-500 transition-colors">Contacto y Pedidos</Link>
            </li>
            <li>
              <button onClick={onOpenYape} className="hover:text-purple-500 transition-colors">
                Pagar con Yape 💜
              </button>
            </li>
          </ul>
        </div>

        {/* Columna 3: Entregas & Promos */}
        <div className="pt-8 md:pt-0">
          <h4 className={`text-xs font-black uppercase tracking-widest mb-4 md:mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
            Entregas en Piura 📌
          </h4>
          <ul className="space-y-2 text-sm md:text-xs leading-relaxed">
            <li>• Parque Infantil (Punto céntrico)</li>
            <li>• Delivery directo a domicilio</li>
            <li>• Envíos a provincias de Piura</li>
          </ul>
          <div className="mt-4 md:mt-3 inline-block px-3 py-1 bg-emerald-500/10 rounded-md text-[11px] font-extrabold text-emerald-500 uppercase tracking-wider">
            Promo: 3 Polos x S/ 100
          </div>
        </div>

        {/* Columna 4: Redes & Soporte */}
        <div className="pt-8 md:pt-0">
          <h4 className={`text-xs font-black uppercase tracking-widest mb-4 md:mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
            Comunidad
          </h4>
          <p className="text-sm md:text-xs mb-4 md:mb-3 px-6 md:px-0">
            Síguenos para enterarte de los nuevos drops antes que nadie:
          </p>
          
          <div className="flex items-center justify-center md:justify-start space-x-4 md:space-x-3 mb-4">
            <a
              href={`https://instagram.com/${INSTAGRAM_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 md:p-2 rounded-full border transition-all ${
                darkMode ? 'bg-zinc-900 border-zinc-800 text-white hover:border-zinc-600' : 'bg-white border-zinc-300 text-black hover:border-zinc-400'
              }`}
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>

            <a
              href={`https://tiktok.com/@${TIKTOK_USER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 md:p-2 rounded-full border transition-all ${
                darkMode ? 'bg-zinc-900 border-zinc-800 text-white hover:border-zinc-600' : 'bg-white border-zinc-300 text-black hover:border-zinc-400'
              }`}
              aria-label="TikTok"
            >
              <svg className="w-5 h-5 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.29-2.67.72-5.38 2.62-7.23 1.53-1.49 3.63-2.3 5.75-2.26.04 1.43.01 2.86.01 4.29-.98-.01-1.98.28-2.78.85-.92.64-1.52 1.67-1.61 2.79-.18 1.46.46 2.94 1.62 3.82 1.05.8 2.45.99 3.66.52 1.12-.42 1.97-1.38 2.27-2.53.21-.77.22-1.58.21-2.38.01-6.83.01-13.67 0-20.5z"/></svg>
            </a>
          </div>
        </div>

      </div>

      {/* Barra Inferior de Copyright */}
      <div className={`pt-6 border-t text-center text-xs flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto ${
        darkMode ? 'border-zinc-900 text-zinc-600' : 'border-zinc-200 text-zinc-400'
      }`}>
        <p>© 2026 DROP.PERU - Todos los derechos reservados.</p>
        <p className="mt-3 sm:mt-0 font-bold uppercase tracking-wider text-[10px]">Piura - Perú 📌</p>
      </div>
    </footer>
  );
}