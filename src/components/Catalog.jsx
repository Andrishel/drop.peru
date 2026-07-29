import React, { useState } from 'react';
import PRODUCTS from '../products.json';

const PHONE_NUMBER = '51955908046';

function ProductCard({ product, darkMode, addToCart }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : 'Único');

  const getWhatsAppLink = (productName, price, size, color) => {
    const text = encodeURIComponent(
      `¡Hola Drop.peru! 🛹 Quisiera pedir el *${productName}* en Color *${color}* y Talla *${size}* (${price}). ¿Aún tienen disponibilidad?`
    );
    return `https://wa.me/${PHONE_NUMBER}?text=${text}`;
  };

  return (
    <div className={`border rounded-2xl overflow-hidden transition-all group flex flex-col justify-between ${
      darkMode ? 'bg-zinc-950 border-zinc-800 hover:border-zinc-700' : 'bg-white border-zinc-200 shadow-md hover:shadow-xl'
    }`}>
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

        <div className="p-4 sm:p-5 space-y-3">
          <div>
            <span className={`text-[10px] sm:text-xs uppercase font-bold tracking-widest ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
              {product.brand}
            </span>
            <h3 className={`text-sm sm:text-base font-bold mt-0.5 leading-snug ${darkMode ? 'text-white' : 'text-zinc-900'}`}>
              {product.name}
            </h3>
            <p className={`text-xs mt-1.5 leading-relaxed line-clamp-2 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              {product.description}
            </p>
            <p className={`text-base sm:text-lg font-black mt-2 ${darkMode ? 'text-white' : 'text-black'}`}>
              {product.price}
            </p>
          </div>

          {/* Selector de Colores */}
          {product.colors && product.colors.length > 0 && (
            <div>
              <span className={`text-[10px] uppercase font-bold block mb-1 ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Color: <strong className="text-emerald-500">{selectedColor}</strong>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-md border transition-all active:scale-95 ${
                      selectedColor === color
                        ? 'bg-emerald-500 border-emerald-500 text-black shadow-sm'
                        : darkMode
                          ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                          : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-black'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Selector de Tallas */}
          <div>
            <span className={`text-[10px] uppercase font-bold block mb-1 ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Talla: <strong className="text-emerald-500">{selectedSize}</strong>
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`text-xs font-black px-3 py-1 rounded-md border transition-all active:scale-95 ${
                    selectedSize === size
                      ? 'bg-emerald-500 border-emerald-500 text-black shadow-sm'
                      : darkMode
                        ? 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white'
                        : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-black'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5 pt-0 space-y-2">
        <button
          onClick={() => addToCart({ ...product, selectedSize, selectedColor, quantity: 1 })}
          className={`w-full font-black text-xs uppercase tracking-wider py-3 rounded-xl text-center block transition-all shadow-md active:scale-[0.98] ${
            darkMode
              ? 'bg-white text-black hover:bg-zinc-200'
              : 'bg-black text-white hover:bg-zinc-800'
          }`}
        >
          Añadir al Drop 🛍️
        </button>

        <a
          href={getWhatsAppLink(product.name, product.price, selectedSize, selectedColor)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-500 font-bold text-[11px] uppercase tracking-wider py-2 rounded-xl text-center block transition-all active:scale-[0.98]"
        >
          Pedir esta prenda sola 💬
        </a>
      </div>
    </div>
  );
}

export default function Catalog({ darkMode, addToCart }) {
  const [filter, setFilter] = useState('todos');

  const filteredProducts =
    filter === 'todos'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filter);

  return (
    <main id="catalogo" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 scroll-mt-20">
      <div className="flex justify-center space-x-2 sm:space-x-3 mb-8 sm:mb-10">
        {['todos', 'polos', 'shorts'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 sm:px-6 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
              filter === cat
                ? darkMode
                  ? 'bg-white text-black shadow-md'
                  : 'bg-black text-white shadow-md'
                : darkMode
                  ? 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
                  : 'bg-zinc-200 text-zinc-600 hover:text-black border border-zinc-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            darkMode={darkMode}
            addToCart={addToCart}
          />
        ))}
      </div>
    </main>
  );
}