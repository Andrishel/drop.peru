import React from 'react';

const PHONE_NUMBER = '51955908046';

export default function About() {
  return (
    <section className="bg-zinc-950/60 py-16 sm:py-20 px-4 sm:px-6 min-h-[80vh] flex items-center">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Contenedor del Video */}
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 aspect-video lg:aspect-square bg-zinc-900 shadow-2xl group">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-700"
          >
            {/* REVISA ESTA LÍNEA: Cambia 'hero-bg-about.mp4' por el nombre exacto que está en public/img/ */}
            <source src="/img/hero-bg-about.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest font-black text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-zinc-700">
            Streetwear Exclusivo 📌
          </span>
        </div>

        {/* Textos Actualizados: Tienda Virtual */}
        <div className="space-y-5 text-left">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>TIENDA VIRTUAL EN PIURA</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none text-white">
            SOMOS DROP.PERU
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Nacimos con una misión clara: redefinir la cultura del vestir urbano en el norte. DROP.PERU es tu conexión directa con exclusividad, prendas high-end seleccionadas y drops limitados que no encuentras en el mercado convencional.
          </p>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Somos una tienda 100% virtual. Coordinamos **entregas a domicilio, en el Parque Infantil** o en puntos céntricos a acordar. Tú eliges la prenda, nosotros te la llevamos.
          </p>

          <div className="pt-2">
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('¡Hola Drop.peru! Quisiera coordinar una entrega.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-black font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl hover:bg-zinc-200 transition-all shadow-lg shadow-white/5 active:scale-[0.98]"
            >
              <span>Coordinar Entrega 📦</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}