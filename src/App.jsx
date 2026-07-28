import React, { useState } from 'react';
import PRODUCTS from './products.json';

const PHONE_NUMBER = '51955908046';

export default function App() {
  const [filter, setFilter] = useState('todos');

  const filteredProducts = filter === 'todos'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === filter);

  const getWhatsAppLink = (productName) => {
    const text = encodeURIComponent(`¡Hola Drop.peru! 🛹 Quisiera consultar la disponibilidad del *${productName}*.`);
    return `https://wa.me/${PHONE_NUMBER}?text=${text}`;
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-zinc-800 selection:text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 bg-white text-black font-extrabold italic text-xl flex items-center justify-center rounded-sm transform -skew-x-12 shadow-lg shadow-white/10">
            D
          </div>
          <span className="text-xl font-bold tracking-wider uppercase">DROP<span className="text-zinc-500">.PERU</span></span>
        </div>

        <a
          href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Hola Drop.peru, tengo una consulta sobre sus productos.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold text-sm px-4 py-2 rounded-full transition-all flex items-center space-x-2"
        >
          <span>WhatsApp</span>
        </a>
      </header>

      {/* Hero Section con Video de Fondo */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden border-b border-zinc-900">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-50 contrast-110"
        >
          <source src="/img/hero-bg.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>

        {/* Overlay gradiente oscuro para asegurar que el texto sea 100% legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 z-10"></div>

        {/* Contenido (Texto) encima del video */}
        <div className="relative z-20 px-6 py-16 text-center max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-zinc-300 bg-black/60 backdrop-blur-md border border-zinc-700/80 px-4 py-1.5 rounded-full inline-block mb-4 shadow-lg">
            Piura, Perú 📌
          </span>
          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight leading-none text-white drop-shadow-md">
            STREETWEAR & EXCLUSIVE DROPS
          </h1>
          <p className="text-zinc-300 text-sm md:text-lg mt-5 max-w-xl mx-auto leading-relaxed drop-shadow">
            Catálogo exclusivo de polos y prendas seleccionadas. Pide directamente por WhatsApp con envíos rápidos.
          </p>
        </div>
      </section>

      {/* Catálogo */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Filtros */}
        <div className="flex justify-center space-x-3 mb-10">
          {['todos', 'polos', 'shorts'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${filter === cat
                  ? 'bg-white text-black'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-square overflow-hidden bg-zinc-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-white text-black font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                      {product.tag}
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <span className="text-xs uppercase text-zinc-500 font-bold tracking-widest">
                    {product.brand}
                  </span>
                  <h3 className="text-base font-bold mt-1 text-white leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-lg font-black mt-3 text-white">{product.price}</p>

                  <div className="flex items-center space-x-2 mt-3">
                    <span className="text-[10px] uppercase text-zinc-500 font-bold">Tallas:</span>
                    <div className="flex space-x-1.5">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="text-[10px] font-bold text-zinc-300 border border-zinc-700 px-2 py-0.5 rounded bg-zinc-900"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider py-3 rounded-lg text-center block transition-all shadow-md hover:shadow-emerald-500/20"
                >
                  Pedir por WhatsApp 💬
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-900 py-8 text-center text-xs text-zinc-600">
        <p>© 2026 DROP.PERU - Todos los derechos reservados.</p>
        <p className="mt-1">Piura - Perú 📌</p>
      </footer>
    </div>
  );
}