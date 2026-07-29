import React from 'react';

const PHONE_NUMBER = '51955908046';

export default function Contact({ darkMode }) {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      
      {/* Cabecera de Contacto */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Soporte 24/7</span>
        </div>

        <h2 className={`text-3xl sm:text-5xl font-black uppercase tracking-tight leading-none mb-6 ${
          darkMode ? 'text-white' : 'text-black'
        }`}>
          HABLA CON NOSOTROS
        </h2>

        <p className={`text-sm sm:text-base leading-relaxed max-w-2xl mx-auto ${
          darkMode ? 'text-zinc-400' : 'text-zinc-600'
        }`}>
          ¿Buscas una talla en específico o quieres armar tu propio drop? Escríbenos. Realizamos entregas a domicilio, en el Parque Infantil o en puntos céntricos a coordinar de forma rápida y segura.
        </p>
      </div>

      {/* Cajas de Información */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left">
        <div className={`p-6 rounded-2xl border ${
          darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
        }`}>
          <h3 className={`font-black text-lg mb-2 uppercase ${darkMode ? 'text-white' : 'text-black'}`}>🛍️ Ventas y Stock</h3>
          <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Consulta por disponibilidad, guía exacta de tallas o separa tu prenda antes de que se agote.
          </p>
        </div>
        <div className={`p-6 rounded-2xl border ${
          darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
        }`}>
          <h3 className={`font-black text-lg mb-2 uppercase ${darkMode ? 'text-white' : 'text-black'}`}>📦 Al por Mayor</h3>
          <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
            ¿Quieres iniciar tu negocio en Piura? Pregunta por nuestros precios exclusivos al por mayor.
          </p>
        </div>
      </div>

      {/* Botón Principal */}
      <div className="text-center mb-20">
        <a
          href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('¡Hola Drop.peru! Vengo de la web y quisiera hacerles una consulta sobre envíos y stock.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-emerald-500 hover:bg-emerald-600 text-black font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
        >
          <span>Ir al Chat de WhatsApp 💬</span>
        </a>
      </div>

      {/* Sección: Preguntas Frecuentes (FAQ) */}
      <div className={`border-t pt-12 ${darkMode ? 'border-zinc-900' : 'border-zinc-200'}`}>
        <h3 className={`text-xl font-black uppercase tracking-widest text-center mb-8 ${darkMode ? 'text-white' : 'text-black'}`}>
          Preguntas Frecuentes
        </h3>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          
          {/* FAQ 1: Costos de Envío (NUEVO) */}
          <div className={`p-5 rounded-xl border ${darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
            <h4 className={`font-bold text-sm uppercase mb-3 ${darkMode ? 'text-white' : 'text-black'}`}>
              ¿Cuál es el costo del Delivery en Piura?
            </h4>
            <ul className={`text-sm space-y-2 ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              <li>📍 <strong>Puntos de Encuentro:</strong> Entregas en el Parque Infantil o Plaza de Armas son <span className="text-emerald-500 font-bold">GRATIS</span>.</li>
              <li>🛵 <strong>Zonas Urbanas:</strong> Piura centro, zonas accesibles de Castilla y 26 de Octubre (S/ 5.00 - S/ 8.00 aprox).</li>
              <li>🛣️ <strong>Zonas Alejadas:</strong> Catacaos, La Legua, Medio Piura, etc. (S/ 10.00 - S/ 15.00 aprox, previa coordinación).</li>
            </ul>
          </div>

          {/* FAQ 2: Tienda Física */}
          <div className={`p-5 rounded-xl border ${darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
            <h4 className={`font-bold text-sm uppercase mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
              ¿Tienen tienda física?
            </h4>
            <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Somos una tienda 100% online basada en Piura. Esto nos permite mantener precios más competitivos. Entregamos presencialmente para que puedas revisar tu prenda antes de llevarla.
            </p>
          </div>

          {/* FAQ 3: Promociones */}
          <div className={`p-5 rounded-xl border ${darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
            <h4 className={`font-bold text-sm uppercase mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
              ¿Cómo funcionan las promociones (ej. 3 x S/ 100)?
            </h4>
            <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Puedes combinar cualquier modelo, color y talla de los polos del catálogo para aplicar al descuento de la promoción. ¡Arma tu pack como prefieras!
            </p>
          </div>

          {/* FAQ 4: Pagos */}
          <div className={`p-5 rounded-xl border ${darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-zinc-50 border-zinc-200'}`}>
            <h4 className={`font-bold text-sm uppercase mb-2 ${darkMode ? 'text-white' : 'text-black'}`}>
              ¿Cuáles son los métodos de pago?
            </h4>
            <p className={`text-sm ${darkMode ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Aceptamos pagos rápidos mediante Yape y Plin, además de transferencias bancarias directas para tu mayor comodidad al momento de la entrega o previa coordinación.
            </p>
          </div>

        </div>
      </div>

    </main>
  );
}