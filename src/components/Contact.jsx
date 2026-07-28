import React from 'react';

const PHONE_NUMBER = '51955908046';

export default function Contact() {
  return (
    <section className="bg-zinc-950/60 py-16 sm:py-20 px-4 sm:px-6 min-h-[80vh] flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>ATENCIÓN ONLINE ACTIVA</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-white mb-6">
          HABLA CON NOSOTROS
        </h2>

        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          ¿Buscas una talla en específico o quieres armar tu propio drop? Escríbenos. Somos una tienda 100% virtual en Piura. Realizamos entregas a domicilio, en el Parque Infantil o en puntos a coordinar de forma rápida y segura.
        </p>

        {/* Cajas de Información */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-black text-lg mb-2 uppercase">🛍️ Ventas y Stock</h3>
            <p className="text-zinc-400 text-sm">Consulta por disponibilidad, guía exacta de tallas o separa tu prenda antes de que se agote.</p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl">
            <h3 className="text-white font-black text-lg mb-2 uppercase">📦 Al por Mayor</h3>
            <p className="text-zinc-400 text-sm">¿Quieres iniciar tu propio negocio? Pregunta por nuestros catálogos y precios exclusivos al por mayor.</p>
          </div>
        </div>

        {/* Botón Principal */}
        <a
          href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('¡Hola Drop.peru! Vengo de la web y quisiera hacerles una consulta.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-black font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
        >
          <span>Ir al Chat de WhatsApp 💬</span>
        </a>

      </div>
    </section>
  );
}