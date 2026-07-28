import React, { useState } from 'react';
import PRODUCTS from '../products.json';

const PHONE_NUMBER = '51955908046';

export default function Catalog({ darkMode }) {
  const [filter, setFilter] = useState('todos');

  const filteredProducts = filter === 'todos' 
    ? PRODUCTS 
    : PRODUCTS.filter((p) => p.category === filter);

  const getWhatsAppLink = (productName) => {
    const text = encodeURIComponent(`¡Hola Drop.peru! 🛹 Quisiera consultar la disponibilidad del *${productName}*.`);
    return `https://wa.me/${PHONE_NUMBER}?text=${text}`;
  };

  return (
    <main id="catalogo" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 scroll-mt-20">
      {/* Filtros de Categorías */}
      <div className="flex justify-center space-x-2 sm:space-x-3 mb-8 sm:mb-10">
        {['todos', 'polos', 'shorts'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 sm:px-6 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
              filter === cat
                ? darkMode
                  ? 'bg-white text-black shadow-md shadow-white/10'
                  : 'bg-black text-white shadow-md shadow-black/10'
                : darkMode
                  ? 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  : 'bg-zinc-200 text-zinc-600 hover:text-black border border-zinc-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`border rounded-2xl overflow-hidden transition-all group flex flex-col justify-between ${
              darkMode
                ? 'bg-zinc-950 border-zinc-800 hover:border-zinc-700'
                : 'bg-white border-zinc-200 shadow-md hover:shadow-xl'
            }`}
          >
            <div>
              <div className={`relative aspect-square overflow-hidden ${darkMode ? 'bg-zinc-900' : 'bg-zinc-100'}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <span className={`absolute top-3 left-3 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow-md ${
                    darkMode ? 'bg-white text-black' : 'bg-black text-white'
                  }`}>
                    {product.tag}
                  </span>
                )}
              </div>

              <div className="p-4 sm:p-5">
                <span className={`text-[10px] sm:text-xs uppercase font-bold tracking-widest ${
                  darkMode ? 'text-zinc-500' : 'text-zinc-400'
                }`}>
                  {product.brand}
                </span>
                <h3 className={`text-sm sm:text-base font-bold mt-1 leading-snug ${
                  darkMode ? 'text-white' : 'text-zinc-900'
                }`}>
                  {product.name}
                </h3>
                <p className={`text-xs mt-2 leading-relaxed ${
                  darkMode ? 'text-zinc-400' : 'text-zinc-600'
                }`}>
                  {product.description}
                </p>
                <p className={`text-base sm:text-lg font-black mt-3 ${
                  darkMode ? 'text-white' : 'text-black'
                }`}>
                  {product.price}
                </p>

                <div className="flex items-center space-x-2 mt-3">
                  <span className={`text-[10px] uppercase font-bold ${
                    darkMode ? 'text-zinc-500' : 'text-zinc-400'
                  }`}>
                    Tallas:
                  </span>
                  <div className="flex space-x-1.5">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className={`text-[10px] font-bold border px-2 py-0.5 rounded ${
                          darkMode 
                            ? 'text-zinc-300 border-zinc-700 bg-zinc-900' 
                            : 'text-zinc-700 border-zinc-300 bg-zinc-100'
                        }`}
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

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
  );
}