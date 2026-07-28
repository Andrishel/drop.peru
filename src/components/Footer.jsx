import React from 'react';

const INSTAGRAM_USER = 'drop.peru__';
const TIKTOK_USER = 'drop.peru__'; 

export default function Footer({ darkMode }) {
  return (
    <footer id="contacto" className={`border-t py-10 px-4 text-center transition-colors duration-300 ${
      darkMode ? 'border-zinc-900 bg-black text-zinc-500' : 'border-zinc-200 bg-white text-zinc-500'
    }`}>
      
      {/* Redes Sociales */}
      <div className="flex items-center justify-center space-x-6 mb-6">
        <a
          href={`https://instagram.com/${INSTAGRAM_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className={`p-2.5 rounded-full border transition-all ${
            darkMode 
              ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-600 hover:text-white text-zinc-400' 
              : 'bg-zinc-100 border-zinc-200 hover:border-zinc-400 hover:text-black text-zinc-700 shadow-sm'
          }`}
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>

        <a
          href={`https://tiktok.com/@${TIKTOK_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className={`p-2.5 rounded-full border transition-all ${
            darkMode 
              ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-600 hover:text-white text-zinc-400' 
              : 'bg-zinc-100 border-zinc-200 hover:border-zinc-400 hover:text-black text-zinc-700 shadow-sm'
          }`}
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.29-2.67.72-5.38 2.62-7.23 1.53-1.49 3.63-2.3 5.75-2.26.04 1.43.01 2.86.01 4.29-.98-.01-1.98.28-2.78.85-.92.64-1.52 1.67-1.61 2.79-.18 1.46.46 2.94 1.62 3.82 1.05.8 2.45.99 3.66.52 1.12-.42 1.97-1.38 2.27-2.53.21-.77.22-1.58.21-2.38.01-6.83.01-13.67 0-20.5z"/>
          </svg>
        </a>
      </div>

      <p className="text-xs">© 2026 DROP.PERU - Todos los derechos reservados.</p>
      <p className="mt-1 text-[10px] uppercase font-bold tracking-wider">Piura - Perú 📌</p>
    </footer>
  );
}