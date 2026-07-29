import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import About from './components/About';
import Contact from './components/Contact';
import YapeModal from './components/YapeModal';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CartModal from './components/CartModal';
import Testimonials from './components/Testimonials';
import NotFound from './components/NotFound';

export default function App() {
  const [showYapeModal, setShowYapeModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Estados del Carrito de Compras
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Agregar al carrito agrupando si coincide el mismo ID, Talla y Color
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.selectedSize === product.selectedSize && item.selectedColor === product.selectedColor
      );

      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += 1;
        return newCart;
      }
      return [...prevCart, product];
    });

    // Notificación Toast flotante silenciosa
    setToastMessage(`¡${product.name} (${product.selectedColor} - ${product.selectedSize}) añadido! 🛍️`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Modificar cantidad desde el carrito (+ / -)
  const updateQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(index);
    } else {
      setCart((prevCart) => {
        const newCart = [...prevCart];
        newCart[index].quantity = newQuantity;
        return newCart;
      });
    }
  };

  // Eliminar producto del carrito
  const removeFromCart = (indexToRemove) => {
    setCart((prevCart) => prevCart.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className={`min-h-screen flex flex-col justify-between font-sans transition-colors duration-300 relative ${
      darkMode ? 'bg-black text-white selection:bg-zinc-800 selection:text-white' : 'bg-zinc-50 text-zinc-900 selection:bg-zinc-200 selection:text-black'
    }`}>
      <ScrollToTop />
      
      {/* Notificación Flotante de Producto Añadido */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-[70] bg-emerald-500 text-black font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-2xl shadow-xl shadow-emerald-500/20 border border-emerald-400 flex items-center space-x-2 animate-bounce">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navegación Superior */}
      <Navbar 
        onOpenYape={() => setShowYapeModal(true)} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        openCart={() => setIsCartOpen(true)}
      />

      {/* Rutas Principales */}
      <div className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Hero darkMode={darkMode} />
                <Catalog darkMode={darkMode} addToCart={addToCart} />
                <Testimonials darkMode={darkMode} />
              </>
            } 
          />
          <Route path="/nosotros" element={<About darkMode={darkMode} />} />
          <Route path="/contacto" element={<Contact darkMode={darkMode} />} />

          {/* Ruta para capturar cualquier URL inexistente (Página 404) */}
          <Route path="*" element={<NotFound darkMode={darkMode} />} />
        </Routes>
      </div>

      {/* Pie de Página */}
      <Footer darkMode={darkMode} onOpenYape={() => setShowYapeModal(true)} />

      {/* Modales Flotantes Globales */}
      {showYapeModal && <YapeModal onClose={() => setShowYapeModal(false)} darkMode={darkMode} />}
      {isCartOpen && <CartModal cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} onClose={() => setIsCartOpen(false)} darkMode={darkMode} />}
    </div>
  );
}