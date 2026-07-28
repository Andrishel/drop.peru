import React, { useState } from 'react';
import PRODUCTS from './products.json';

const PHONE_NUMBER = '51955908046';
const INSTAGRAM_USER = 'drop.peru__';

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
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-zinc-800 px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white text-black font-extrabold italic text-lg sm:text-xl flex items-center justify-center rounded-sm transform -skew-x-12 shadow-lg shadow-white/10">
            D
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-wider uppercase">
            DROP<span className="text-zinc-500">.PERU</span>
          </span>
        </div>

        {/* Header Actions & Socials */}
        <div className="flex items-center space-x-3">
          {/* Instagram Icon */}
          <a
            href={`https://instagram.com/${INSTAGRAM_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 text-zinc-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Hola Drop.peru, tengo una consulta sobre sus productos.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xs sm:text-sm px-3.5 py-2 rounded-full transition-all flex items-center space-x-1.5 shadow-md shadow-emerald-500/10"
          >
            <span>WhatsApp</span>
          </a>
        </div>
      </header>

      {/* Hero Section with Video/Banner Background */}
      <section className="relative w-full min-h-[50vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden border-b border-zinc-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 filter brightness-45 contrast-110"
        >
          <source src="/img/hero-bg.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/70 z-10"></div>

        <div className="relative z-20 px-4 sm:px-6 py-12 sm:py-16 text-center max-w-4xl mx-auto">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-zinc-300 bg-black/60 backdrop-blur-md border border-zinc-700/80 px-3.5 py-1 rounded-full inline-block mb-3 sm:mb-4 shadow-lg">
            Piura, Perú 📌
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight leading-none text-white drop-shadow-md">
            STREETWEAR & EXCLUSIVE DROPS
          </h1>
          <p className="text-zinc-300 text-xs sm:text-base mt-3 sm:mt-5 max-w-xl mx-auto leading-relaxed drop-shadow">
            Catálogo exclusivo de polos y prendas seleccionadas. Pide directamente por WhatsApp con envíos rápidos.
          </p>
        </div>
      </section>

      {/* Catalog Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Category Filters */}
        <div className="flex justify-center space-x-2 sm:space-x-3 mb-8 sm:mb-10">
          {['todos', 'polos', 'shorts'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 sm:px-6 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                filter === cat
                  ? 'bg-white text-black shadow-md shadow-white/10'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-700 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Image Wrapper */}
                <div className="relative aspect-square overflow-hidden bg-zinc-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-white text-black font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow-md">
                      {product.tag}
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="p-4 sm:p-5">
                  <span className="text-[10px] sm:text-xs uppercase text-zinc-500 font-bold tracking-widest">
                    {product.brand}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold mt-1 text-white leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-base sm:text-lg font-black mt-3 text-white">{product.price}</p>

                  {/* Sizes */}
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

              {/* Order Button */}
              <div className="p-4 sm:p-5 pt-0">
                <a
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-wider py-3 rounded-xl text-center block transition-all shadow-md hover:shadow-emerald-500/20 active:scale-[0.98]"
                >
                  Pedir por WhatsApp 💬
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer with Social Networks */}
      <footer className="border-t border-zinc-900 py-10 text-center text-xs text-zinc-500 px-4">
        {/* Social Icons Bar */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          {/* Instagram */}
          <a
            href={`https://instagram.com/${INSTAGRAM_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-full hover:border-zinc-600 hover:text-white transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-full hover:border-zinc-600 hover:text-white transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.29-2.67.72-5.38 2.62-7.23 1.53-1.49 3.63-2.3 5.75-2.26.04 1.43.01 2.86.01 4.29-.98-.01-1.98.28-2.78.85-.92.64-1.52 1.67-1.61 2.79-.18 1.46.46 2.94 1.62 3.82 1.05.8 2.45.99 3.66.52 1.12-.42 1.97-1.38 2.27-2.53.21-.77.22-1.58.21-2.38.01-6.83.01-13.67 0-20.5z"/>
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Hola Drop.peru, tengo una consulta sobre sus productos.')}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2.5 bg-zinc-900 border border-zinc-800 rounded-full hover:border-zinc-600 hover:text-emerald-400 transition-all"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
        </div>

        <p>© 2026 DROP.PERU - Todos los derechos reservados.</p>
        <p className="mt-1.5 text-zinc-600">Piura - Perú 📌</p>
      </footer>
    </div>
  );
}