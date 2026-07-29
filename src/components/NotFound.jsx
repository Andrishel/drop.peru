import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound({ darkMode }) {
  return (
    <main className={`min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 ${
      darkMode ? 'bg-black text-white' : 'bg-zinc-50 text-zinc-900'
    }`}>
      {/* Contenedor principal con efecto de tarjeta negra */}
      <div className={`max-w-md w-full p-8 sm:p-10 rounded-3xl border shadow-2xl flex flex-col items-center animate-fade-in ${
        darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200'
      }`}>
        
        {/* Logo */}
        <div className="relative mb-6">
          <img 
            src="/img/logo.png" 
            alt="Drop.peru Logo" 
            className="w-20 h-20 rounded-full object-cover shadow-xl border-2 border-emerald-500"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <span className="absolute -bottom-2 -right-2 text-2xl">🛹</span>
        </div>

        {/* Código de Error */}
        <span className="text-emerald-500 font-black text-xs uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 mb-3">
          Error 404
        </span>

        <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">
          DROP NO ENCONTRADO 🛹
        </h1>

        <p className={`text-xs leading-relaxed mb-8 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
          La prenda o página que buscas ya hizo drop out o no existe. Vuelve al catálogo antes de que se agoten las promos.
        </p>

        {/* Botón para regresar */}
        <Link
          to="/"
          className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs uppercase tracking-wider py-3.5 rounded-xl text-center transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
        >
          Volver al Catálogo 🛍️
        </Link>
      </div>
    </main>
  );
}