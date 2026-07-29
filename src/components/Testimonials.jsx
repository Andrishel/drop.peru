import React from 'react';

const REVIEWS = [
  {
    id: 1,
    name: "Carlos M.",
    city: "Piura Centro",
    comment: "La calidad del algodón del polo Prada es brutal. La entrega fue rapidísima en el Parque Infantil. Recomendados 100%.",
    rating: "⭐⭐⭐⭐⭐",
    item: "Polo Prada Milano"
  },
  {
    id: 2,
    name: "Mateo R.",
    city: "Castilla",
    comment: "Aproveché la promo de 3 polos x S/ 100 y la verdad superó mis expectativas. Calce oversized perfecto.",
    rating: "⭐⭐⭐⭐⭐",
    item: "Pack 3 Polos Streetwear"
  },
  {
    id: 3,
    name: "Arian G.",
    city: "Veintiséis de Octubre",
    comment: "El delivery llegó directo a mi casa el mismo día. Súper confiables y atentos por WhatsApp.",
    rating: "⭐⭐⭐⭐⭐",
    item: "Pack Shorts Sports"
  }
];

export default function Testimonials({ darkMode }) {
  return (
    <section className={`py-12 border-t ${darkMode ? 'border-zinc-900 bg-black/40' : 'border-zinc-200 bg-zinc-100/50'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Comunidad Drop.peru
          </span>
          <h3 className={`text-2xl sm:text-3xl font-black uppercase tracking-tight mt-3 ${darkMode ? 'text-white' : 'text-black'}`}>
            Lo que dicen nuestros clientes 📌
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev) => (
            <div key={rev.id} className={`p-5 rounded-2xl border flex flex-col justify-between ${
              darkMode ? 'bg-zinc-950 border-zinc-800' : 'bg-white border-zinc-200 shadow-sm'
            }`}>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs">{rev.rating}</span>
                  <span className="text-[10px] font-bold text-zinc-500 uppercase">{rev.city}</span>
                </div>
                <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                  "{rev.comment}"
                </p>
              </div>
              <div className="border-t pt-3 border-zinc-500/10 flex justify-between items-center">
                <span className={`text-xs font-black ${darkMode ? 'text-white' : 'text-black'}`}>{rev.name}</span>
                <span className="text-[10px] font-extrabold text-emerald-500 uppercase">{rev.item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}