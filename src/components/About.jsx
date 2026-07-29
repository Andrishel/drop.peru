import React from 'react';

const PHONE_NUMBER = '51955908046';

export default function About({ darkMode }) {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">

      {/* Sección Principal: Video y Texto */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">

        {/* Contenedor del Video */}
        <div className={`relative rounded-2xl overflow-hidden border aspect-video lg:aspect-square shadow-2xl group ${darkMode ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-200 bg-zinc-100'
          }`}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={`w-full h-full object-cover filter transition-transform duration-700 group-hover:scale-105 ${darkMode ? 'brightness-75' : 'brightness-90'
              }`}
          >
            <source src="/img/hero-bg-about.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest font-black text-white bg-black/70 backdrop-blur-md px-3 py-1 rounded-md border border-zinc-700">
            Streetwear Exclusivo 📌
          </span>
        </div>

        {/* Textos */}
        <div className="space-y-5 text-left">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Tienda Virtual en Piura</span>
          </div>

          <h2 className={`text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none ${darkMode ? 'text-white' : 'text-black'
            }`}>
            SOMOS DROP.PERU
          </h2>

          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Nacimos con una misión clara: redefinir la cultura del vestir urbano en el norte. DROP.PERU es tu conexión directa con exclusividad, prendas high-end seleccionadas y drops limitados que no encuentras en el mercado convencional.
          </p>

          <p className={`text-sm sm:text-base leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Somos una tienda 100% virtual. Coordinamos <strong>entregas a domicilio, en el Parque Infantil</strong> o en puntos céntricos a acordar. Tú eliges la prenda, nosotros te la llevamos.
          </p>

          <div className="pt-2">
            <a
              href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('¡Hola Drop.peru! Quisiera coordinar una entrega.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center space-x-2 font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl transition-all active:scale-[0.98] ${darkMode
                  ? 'bg-white text-black hover:bg-zinc-200 shadow-white/5'
                  : 'bg-black text-white hover:bg-zinc-800 shadow-black/10'
                }`}
            >
              <span>Coordinar Entrega 📦</span>
            </a>
          </div>
        </div>
      </div>

      {/* Nueva Sección: Beneficios / Garantías para llenar el espacio */}
      <div className="text-center mb-10">
        <h3 className={`text-xl font-black uppercase tracking-widest ${darkMode ? 'text-white' : 'text-black'}`}>
          Nuestra Promesa
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`p-6 rounded-2xl border text-center ${darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'}`}>
          <div className="text-3xl mb-3">💎</div>
          <h4 className={`font-black uppercase tracking-wider text-sm mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Calidad Premium</h4>
          <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Materiales reactivos, tacto cero y relieves de alta durabilidad en cada uno de nuestros drops.
          </p>
        </div>
        <div className={`p-6 rounded-2xl border text-center ${darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'}`}>
          <div className="text-3xl mb-3">🛵</div>
          <h4 className={`font-black uppercase tracking-wider text-sm mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Envíos Seguros</h4>
          <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Entregas gratuitas en el Parque Infantil y tarifas accesibles de delivery a todo Piura, Castilla y 26 de Octubre.
          </p>
        </div>
        <div className={`p-6 rounded-2xl border text-center ${darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'}`}>
          <div className="text-3xl mb-3">🔥</div>
          <h4 className={`font-black uppercase tracking-wider text-sm mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>Stock Limitado</h4>
          <p className={`text-xs leading-relaxed ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Traemos prendas exclusivas. Una vez que un modelo hace "sold out", rara vez vuelve a ingresar.
          </p>
        </div>
      </div>

    </main>
  );
}