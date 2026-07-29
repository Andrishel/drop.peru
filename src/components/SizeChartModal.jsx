import React from 'react';

export default function SizeChartModal({ onClose, darkMode }) {
  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      <div className={`relative w-full max-w-md rounded-3xl p-6 shadow-2xl animate-fade-in ${
        darkMode ? 'bg-zinc-950 text-white border border-zinc-800' : 'bg-white text-zinc-900 border border-zinc-200'
      }`}>
        <div className="flex justify-between items-center mb-4 border-b pb-3 border-zinc-500/20">
          <h3 className="text-sm font-black uppercase tracking-wider">Guía de Tallas Streetwear 📏</h3>
          <button onClick={onClose} className="p-1.5 hover:bg-zinc-500/20 rounded-full transition-all">✖️</button>
        </div>

        <p className="text-xs text-zinc-400 mb-4">
          Nuestra ropa cuenta con un <strong>corte urbano / semi-oversized</strong> de caída impecable.
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-center text-xs border-collapse">
            <thead>
              <tr className={`border-b ${darkMode ? 'border-zinc-800 text-emerald-500' : 'border-zinc-200 text-emerald-600'}`}>
                <th className="py-2 font-black">Talla</th>
                <th className="py-2 font-black">Ancho (Pecho)</th>
                <th className="py-2 font-black">Largo</th>
                <th className="py-2 font-black">Estatura Rec.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-500/10">
              <tr>
                <td className="py-2.5 font-bold">S</td>
                <td>52 cm</td>
                <td>70 cm</td>
                <td className="text-[11px] text-zinc-400">1.60m - 1.70m</td>
              </tr>
              <tr>
                <td className="py-2.5 font-bold">M</td>
                <td>55 cm</td>
                <td>73 cm</td>
                <td className="text-[11px] text-zinc-400">1.71m - 1.80m</td>
              </tr>
              <tr>
                <td className="py-2.5 font-bold">L</td>
                <td>58 cm</td>
                <td>76 cm</td>
                <td className="text-[11px] text-zinc-400">1.81m +</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl text-[11px] text-emerald-500 font-semibold text-center">
          💡 Si te gusta el estilo <strong>Oversized relajado</strong>, te sugerimos pedir una talla más.
        </div>
      </div>
    </div>
  );
}