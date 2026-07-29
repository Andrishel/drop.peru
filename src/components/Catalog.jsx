import React, { useState, useMemo, useRef } from 'react';
import PRODUCTS from '../products.json';
import SizeChartModal from './SizeChartModal';

const PHONE_NUMBER = '51955908046';

// Subcomponente de tarjeta de producto con Guía de Tallas y Stock Limitado
function ProductCard({ product, darkMode, addToCart, onOpenSizeChart }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : 'Único');

  const getWhatsAppLink = (productName, price, size, color) => {
    const text = encodeURIComponent(
      `¡Hola Drop.peru! 🛹 Quisiera pedir el *${productName}* en Color *${color}* y Talla *${size}* (${price}). ¿Aún tienen disponibilidad?`
    );
    return `https://wa.me/${PHONE_NUMBER}?text=${text}`;
  };

  return (
    <div
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
          {/* Tag de Promoción */}
          {product.tag && (
            <span
              className={`absolute top-3 left-3 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow-md ${
                darkMode ? 'bg-white text-black' : 'bg-black text-white'
              }`}
            >
              {product.tag}
            </span>
          )}

          {/* Tag de Stock Limitado */}
          <span className="absolute bottom-3 right-3 bg-red-500/90 backdrop-blur-sm text-white font-extrabold text-[9px] uppercase px-2 py-0.5 rounded shadow">
            🔥 Últimas unidades
          </span>
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

          {/* Selector de Tallas con botón para abrir la Guía de Tallas */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className={`text-[10px] uppercase font-bold ${darkMode ? 'text-zinc-500' : 'text-zinc-400'}`}>
                Talla: <strong className="text-emerald-500">{selectedSize}</strong>
              </span>
              <button
                onClick={onOpenSizeChart}
                className="text-[10px] font-bold text-emerald-500 hover:underline uppercase transition-all"
              >
                Guía de tallas 📏
              </button>
            </div>

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
  // Referencia para scroll automático
  const filtersRef = useRef(null);

  // Estados de Filtro
  const [category, setCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('relevante');
  const [selectedBrand, setSelectedBrand] = useState('todas');
  const [selectedColor, setSelectedColor] = useState('todos');
  const [selectedSize, setSelectedSize] = useState('todas');
  const [maxPrice, setMaxPrice] = useState(150);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [showSizeModal, setShowSizeModal] = useState(false);

  // Función inteligente para abrir filtros y hacer scroll hacia ellos
  const toggleFiltersAndScroll = () => {
    const nextState = !showFiltersMobile;
    setShowFiltersMobile(nextState);

    // Si se está abriendo, desplaza la pantalla suavemente hacia la sección de filtros
    if (nextState) {
      setTimeout(() => {
        filtersRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  // Extraer valores únicos dinámicamente de products.json
  const availableBrands = useMemo(() => {
    const brands = PRODUCTS.map((p) => p.brand);
    return ['todas', ...Array.from(new Set(brands))];
  }, []);

  const availableColors = useMemo(() => {
    const colors = PRODUCTS.flatMap((p) => p.colors || []);
    return ['todos', ...Array.from(new Set(colors))];
  }, []);

  const availableSizes = useMemo(() => {
    const sizes = PRODUCTS.flatMap((p) => p.sizes || []);
    return ['todas', ...Array.from(new Set(sizes))];
  }, []);

  // Lógica principal de filtrado y ordenamiento
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (category !== 'todos' && product.category !== category) return false;
      if (
        searchTerm &&
        !product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        !product.brand.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return false;
      }
      if (selectedBrand !== 'todas' && product.brand !== selectedBrand) return false;
      if (selectedColor !== 'todos' && !(product.colors || []).includes(selectedColor)) return false;
      if (selectedSize !== 'todas' && !(product.sizes || []).includes(selectedSize)) return false;

      const numericPrice = parseFloat(product.price.replace('S/', '').trim());
      if (numericPrice > maxPrice) return false;

      return true;
    }).sort((a, b) => {
      const priceA = parseFloat(a.price.replace('S/', '').trim());
      const priceB = parseFloat(b.price.replace('S/', '').trim());

      if (sortBy === 'precio-menor') return priceA - priceB;
      if (sortBy === 'precio-mayor') return priceB - priceA;
      if (sortBy === 'mas-vendidos') {
        const isBestsellerA = a.tag?.toLowerCase().includes('más vendido') || a.tag?.toLowerCase().includes('popular') ? 1 : 0;
        const isBestsellerB = b.tag?.toLowerCase().includes('más vendido') || b.tag?.toLowerCase().includes('popular') ? 1 : 0;
        return isBestsellerB - isBestsellerA;
      }
      return 0;
    });
  }, [category, searchTerm, selectedBrand, selectedColor, selectedSize, maxPrice, sortBy]);

  const resetFilters = () => {
    setCategory('todos');
    setSearchTerm('');
    setSortBy('relevante');
    setSelectedBrand('todas');
    setSelectedColor('todos');
    setSelectedSize('todas');
    setMaxPrice(150);
  };

  const activeFiltersCount = 
    (category !== 'todos' ? 1 : 0) +
    (selectedBrand !== 'todas' ? 1 : 0) +
    (selectedColor !== 'todos' ? 1 : 0) +
    (selectedSize !== 'todas' ? 1 : 0) +
    (maxPrice < 150 ? 1 : 0) +
    (searchTerm ? 1 : 0);

  return (
    <main id="catalogo" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 scroll-mt-20 relative">
      
      {/* Botón Flotante para Celulares */}
      <button
        onClick={toggleFiltersAndScroll}
        className="sm:hidden fixed bottom-6 left-6 z-40 bg-black dark:bg-white text-white dark:text-black font-black text-xs uppercase px-4 py-3 rounded-full shadow-2xl border border-zinc-700 flex items-center space-x-2 active:scale-95 transition-transform"
        aria-label="Abrir Filtros"
      >
        <span>🔍 Filtrar</span>
        {activeFiltersCount > 0 && (
          <span className="bg-emerald-500 text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
            {activeFiltersCount}
          </span>
        )}
      </button>

      {/* Punto de Referencia para el Scroll */}
      <div ref={filtersRef} className="scroll-mt-24"></div>

      {/* 1. Barra de Control Principal */}
      <div className="space-y-4 mb-8">
        
        {/* Categorías Principales */}
        <div className="flex justify-center space-x-2 sm:space-x-3">
          {['todos', 'polos', 'shorts'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 sm:px-6 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all ${
                category === cat
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

        {/* Buscador + Select Ordenar + Botón Filtros Desktop */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Buscar por marca o modelo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full px-4 py-2.5 pl-9 rounded-xl text-xs font-semibold border transition-all focus:outline-none ${
                darkMode
                  ? 'bg-zinc-950 border-zinc-800 text-white focus:border-zinc-600'
                  : 'bg-white border-zinc-300 text-black focus:border-zinc-400 shadow-sm'
              }`}
            />
            <span className="absolute left-3 top-3 text-xs text-zinc-400">🔍</span>
          </div>

          <div className="flex w-full sm:w-auto items-center space-x-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`flex-1 sm:flex-initial px-3 py-2.5 rounded-xl text-xs font-bold uppercase border transition-all cursor-pointer ${
                darkMode
                  ? 'bg-zinc-950 border-zinc-800 text-zinc-300'
                  : 'bg-white border-zinc-300 text-zinc-700 shadow-sm'
              }`}
            >
              <option value="relevante">Relevancia</option>
              <option value="mas-vendidos">Más Vendidos 🔥</option>
              <option value="precio-menor">Precio: Menor a Mayor</option>
              <option value="precio-mayor">Precio: Mayor a Menor</option>
            </select>

            <button
              onClick={toggleFiltersAndScroll}
              className={`hidden sm:flex px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider border transition-all items-center space-x-1.5 active:scale-95 ${
                activeFiltersCount > 0
                  ? 'bg-emerald-500 border-emerald-500 text-black'
                  : darkMode
                    ? 'bg-zinc-900 border-zinc-800 text-white'
                    : 'bg-zinc-100 border-zinc-300 text-black'
              }`}
            >
              <span>Filtros</span>
              {activeFiltersCount > 0 && (
                <span className="bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Panel Desplegable de Filtros Avanzados */}
      {showFiltersMobile && (
        <div className={`p-6 rounded-2xl border mb-8 animate-fade-in ${
          darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200 shadow-lg'
        }`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className={`text-sm font-black uppercase tracking-wider ${darkMode ? 'text-white' : 'text-black'}`}>
              Filtros Avanzados
            </h3>
            {activeFiltersCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-xs font-extrabold text-red-500 hover:underline uppercase"
              >
                Limpiar Todo
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <label className={`text-[10px] uppercase font-bold block mb-2 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Marca
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg text-xs font-semibold border ${
                  darkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-300 text-black'
                }`}
              >
                {availableBrands.map((b) => (
                  <option key={b} value={b}>{b.toUpperCase()}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={`text-[10px] uppercase font-bold block mb-2 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Color
              </label>
              <select
                value={selectedColor}
                onChange={(e) => setSelectedColor(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg text-xs font-semibold border ${
                  darkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-300 text-black'
                }`}
              >
                {availableColors.map((c) => (
                  <option key={c} value={c}>{c.toUpperCase()}</option>
                ))}
              </select>
            </div>

            <div>
              <label className={`text-[10px] uppercase font-bold block mb-2 ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                Talla
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className={`w-full px-3 py-2 rounded-lg text-xs font-semibold border ${
                  darkMode ? 'bg-zinc-900 border-zinc-800 text-white' : 'bg-zinc-50 border-zinc-300 text-black'
                }`}
              >
                {availableSizes.map((s) => (
                  <option key={s} value={s}>{s.toUpperCase()}</option>
                ))}
              </select>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className={`text-[10px] uppercase font-bold ${darkMode ? 'text-zinc-400' : 'text-zinc-500'}`}>
                  Precio Máximo
                </label>
                <span className="text-xs font-black text-emerald-500">S/ {maxPrice}.00</span>
              </div>
              <input
                type="range"
                min="30"
                max="150"
                step="5"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between items-center mb-6 text-xs font-bold uppercase tracking-wider text-zinc-400">
        <span>Mostrando {filteredProducts.length} productos</span>
      </div>

      {/* 3. Grid de Productos */}
      {filteredProducts.length === 0 ? (
        <div className={`p-12 rounded-2xl border text-center ${
          darkMode ? 'bg-zinc-950 border-zinc-800 text-zinc-400' : 'bg-white border-zinc-200 text-zinc-600'
        }`}>
          <p className="text-sm font-bold uppercase tracking-wider mb-2">No encontramos prendas con esos filtros 🔍</p>
          <button
            onClick={resetFilters}
            className="text-xs font-black text-emerald-500 underline uppercase mt-2"
          >
            Restablecer todos los filtros
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              darkMode={darkMode}
              addToCart={addToCart}
              onOpenSizeChart={() => setShowSizeModal(true)}
            />
          ))}
        </div>
      )}

      {/* Modal de Guía de Tallas */}
      {showSizeModal && (
        <SizeChartModal onClose={() => setShowSizeModal(false)} darkMode={darkMode} />
      )}
    </main>
  );
}