import React from 'react';

export default function Hero({ darkMode }) {
  return (
    <section className={`relative w-full min-h-[calc(100vh-65px)] flex items-center justify-center overflow-hidden border-b ${
      darkMode ? 'border-zinc-900' : 'border-zinc-200'
    }`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 filter transition-all duration-300 ${
          darkMode ? 'brightness-45 contrast-110' : 'brightness-75 contrast-105'
        }`}
      >
        <source src="/img/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className={`absolute inset-0 z-10 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gradient-to-t from-black via-black/40 to-black/70' 
          : 'bg-gradient-to-t from-black/70 via-black/30 to-black/50'
      }`}></div>

      <div className="relative z-20 px-4 sm:px-6 py-12 text-center max-w-4xl mx-auto">
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-200 bg-black/60 backdrop-blur-md border border-zinc-700/80 px-3.5 py-1 rounded-full inline-block mb-3 sm:mb-4 shadow-lg">
          Piura, Perú 📌
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none text-white drop-shadow-md">
          STREETWEAR & EXCLUSIVE DROPS
        </h1>
        <p className="text-zinc-200 text-xs sm:text-base mt-3 sm:mt-5 max-w-xl mx-auto leading-relaxed drop-shadow">
          Catálogo exclusivo de polos y prendas seleccionadas. Pide directamente por WhatsApp con envíos rápidos.
        </p>
      </div>
    </section>
  );
}