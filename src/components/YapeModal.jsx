import React from 'react';

export default function YapeModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-zinc-950 border border-zinc-800 w-full max-w-sm rounded-3xl p-6 relative shadow-2xl animate-in fade-in zoom-in duration-200 text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 text-xl font-bold"
        >
          ✕
        </button>

        <div className="inline-block bg-purple-600/20 border border-purple-500/30 text-purple-400 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-4">
          Pago Rápido con Yape / Plin
        </div>

        <h3 className="text-xl font-black uppercase tracking-tight text-white">
          DROP.PERU YAPE
        </h3>
        <p className="text-xs text-zinc-400 mt-1">
          Escanea el código QR o yapea directamente al número oficial:
        </p>

        <div className="my-5 bg-white p-3 rounded-2xl max-w-[220px] mx-auto shadow-xl">
          <img
            src="/img/yape-shel.jpeg"
            alt="QR Yape Drop.peru"
            className="w-full aspect-square object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/200?text=Sube+yape-qr.png';
            }}
          />
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-3.5 rounded-xl space-y-1 text-left text-xs">
          <p className="text-zinc-400">Número Yape/Plin: <span className="font-bold text-white">955 908 046</span></p>
          <p className="text-zinc-400">Titular: <span className="font-bold text-white">Drop.peru Official</span></p>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-5 bg-white text-black font-bold text-xs uppercase tracking-wider py-3 rounded-xl hover:bg-zinc-200 transition-all"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}