import React from 'react';

const PHONE_NUMBER = '51955908046';

export default function CartModal({ cart, updateQuantity, removeFromCart, onClose, darkMode }) {
  // Categorize items accurately
  const polos = cart.filter((item) => item.category === 'polos' || item.name.toLowerCase().includes('polo'));
  const shorts = cart.filter((item) => item.category === 'shorts' || item.name.toLowerCase().includes('short'));

  // Calculate quantities
  const totalPolosQty = polos.reduce((sum, item) => sum + item.quantity, 0);
  const totalShortsQty = shorts.reduce((sum, item) => sum + item.quantity, 0);

  // Promo Math: Polos (3 x 100, single x 40) | Shorts (3 x 75, single x 30)
  const polosTotal = Math.floor(totalPolosQty / 3) * 100 + (totalPolosQty % 3) * 40;
  const shortsTotal = Math.floor(totalShortsQty / 3) * 75 + (totalShortsQty % 3) * 30;
  const grandTotal = polosTotal + shortsTotal;

  // Regular price calculation without promos
  const regularTotal = (totalPolosQty * 40) + (totalShortsQty * 30);
  const savings = regularTotal - grandTotal;

  const handleCheckout = () => {
    let msg = `¡Hola Drop.peru! 🛹 Vengo de la web y quiero solicitar este pedido:\n\n`;
    cart.forEach((item) => {
      msg += `▪️ *${item.name}* (Cant: ${item.quantity} | Talla: ${item.selectedSize} | Color: ${item.selectedColor})\n`;
    });
    msg += `\n*Total a pagar: S/ ${grandTotal}.00*`;
    if (savings > 0) {
      msg += ` (Ahorro de S/ ${savings}.00 por combos 🔥)`;
    }
    msg += `\n\n¿Tienen disponibilidad para coordinar la entrega en Piura?`;

    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[60] flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className={`relative w-full max-w-md h-full shadow-2xl flex flex-col z-10 transition-all ${
        darkMode ? 'bg-zinc-950 text-white border-l border-zinc-800' : 'bg-white text-zinc-900 border-l border-zinc-200'
      }`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-5 border-b ${darkMode ? 'border-zinc-800' : 'border-zinc-200'}`}>
          <h2 className="text-lg font-black uppercase tracking-wider">Tu Drop Bag <span className="text-emerald-500">({cart.reduce((s, i) => s + i.quantity, 0)})</span></h2>
          <button onClick={onClose} className="p-2 hover:bg-zinc-500/20 rounded-full transition-all">
            ✖️
          </button>
        </div>

        {/* Product List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center text-zinc-500 mt-12 text-sm font-bold uppercase tracking-wider">
              Tu bolsa está vacía 🛒
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={index} className={`flex items-center space-x-4 p-3 rounded-xl border ${
                darkMode ? 'bg-zinc-900 border-zinc-800' : 'bg-zinc-50 border-zinc-200'
              }`}>
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                <div className="flex-1">
                  <h4 className="text-xs font-bold leading-tight">{item.name}</h4>
                  <p className="text-[10px] text-zinc-500 font-bold uppercase mt-1">
                    Talla: <span className="text-emerald-500">{item.selectedSize}</span> • Color: <span className="text-emerald-500">{item.selectedColor}</span>
                  </p>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-2 mt-2">
                    <button
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      className={`w-6 h-6 rounded-md flex items-center justify-center font-black text-xs border ${
                        darkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-zinc-200 border-zinc-300 text-black'
                      }`}
                    >
                      -
                    </button>
                    <span className="text-xs font-black px-1">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      className={`w-6 h-6 rounded-md flex items-center justify-center font-black text-xs border ${
                        darkMode ? 'bg-zinc-800 border-zinc-700 text-white' : 'bg-zinc-200 border-zinc-300 text-black'
                      }`}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button onClick={() => removeFromCart(index)} className="text-red-500 text-xs font-bold p-2 hover:bg-red-500/10 rounded-lg">
                  ✖️
                </button>
              </div>
            ))
          )}
        </div>

        {/* Summary Footer */}
        {cart.length > 0 && (
          <div className={`p-5 border-t ${darkMode ? 'border-zinc-800 bg-zinc-950' : 'border-zinc-200 bg-white'}`}>
            <div className="space-y-1 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold uppercase">Total Estimado:</span>
                <span className="text-2xl font-black text-emerald-500">S/ {grandTotal}.00</span>
              </div>
              
              {savings > 0 && (
                <div className="flex justify-between items-center text-xs font-extrabold text-emerald-500 uppercase tracking-wider">
                  <span>¡Ahorras con Promos! 🔥</span>
                  <span>- S/ {savings}.00</span>
                </div>
              )}
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-emerald-500/20 active:scale-[0.98] transition-all flex justify-center items-center space-x-2"
            >
              <span>Enviar Pedido a WhatsApp</span>
              <span>💬</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}