"use client";

import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

export default function ProdutosOsklen() {
  const [filtrosAbertos, setFiltrosAbertos] = useState(false);

  const produtos = [
    {
      id: 1,
      nome: "Camiseta Essential Preta",
      preco: "R$ 199,00",
      imagem:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    },
    {
      id: 2,
      nome: "Moletom Minimal Cinza",
      preco: "R$ 329,00",
      imagem:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=800",
    },
    {
      id: 3,
      nome: "Calça Comfort Fit",
      preco: "R$ 279,00",
      imagem:
        "https://images.unsplash.com/photo-1528701800489-20be3c1a3c48?w=800",
    },
    {
      id: 4,
      nome: "Jaqueta Urban Nylon",
      preco: "R$ 499,00",
      imagem:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800",
    },
    {
      id: 5,
      nome: "Camisa Linho Premium",
      preco: "R$ 229,00",
      imagem:
        "https://images.unsplash.com/photo-1520975918318-3f425a01b89a?w=800",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white text-black">
      {/* ===== HEADER ===== */}
      <header className="w-full border-b border-neutral-200 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold tracking-tight">colégio militar</h1>
        <button
          className="flex items-center gap-2 text-sm"
          onClick={() => setFiltrosAbertos(true)}
        >
          <SlidersHorizontal size={18} />
          Filtrar
        </button>
      </header>

      {/* ===== BARRA DE ORDENAR ===== */}
      <div className="w-full px-6 py-3 border-b border-neutral-200 flex justify-end">
        <select className="text-sm border border-neutral-300 px-2 py-1 rounded focus:outline-none">
          <option>Ordenar</option>
          <option>Menor preço</option>
          <option>Maior preço</option>
          <option>Mais vendidos</option>
        </select>
      </div>

      {/* ===== GRID DE PRODUTOS ===== */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6 py-6">
        {produtos.map((p) => (
          <div key={p.id} className="flex flex-col gap-2">
            <div className="w-full aspect-[4/5] bg-neutral-100 overflow-hidden">
              <img
                src={p.imagem}
                alt={p.nome}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-sm">{p.nome}</p>
            <span className="text-sm font-semibold">{p.preco}</span>
          </div>
        ))}
      </div>

      {/* ===== MODAL DE FILTROS ===== */}
      {filtrosAbertos && (
        <div className="fixed inset-0 bg-black/40 flex justify-end z-50">
          <div className="w-72 h-full bg-white p-6 flex flex-col gap-6 shadow-xl animate-slide-left">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">Filtros</h2>
              <button
                className="text-sm underline"
                onClick={() => setFiltrosAbertos(false)}
              >
                fechar
              </button>
            </div>

            <div className="flex flex-col gap-4 text-sm">
              <div className="flex flex-col gap-1">
                <span className="font-medium">Tamanho</span>
                <div className="flex gap-2 flex-wrap">
                  {["PP", "P", "M", "G", "GG"].map((t) => (
                    <button
                      key={t}
                      className="border border-neutral-300 px-3 py-1 rounded hover:bg-neutral-100"
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-medium">Cores</span>
                <div className="flex gap-2 flex-wrap">
                  {["Preto", "Branco", "Cinza", "Azul"].map((c) => (
                    <button
                      key={c}
                      className="border border-neutral-300 px-3 py-1 rounded hover:bg-neutral-100"
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-medium">Preço</span>
                <input type="range" className="w-full" />
              </div>
            </div>

            <button className="mt-auto bg-black text-white py-3 rounded text-sm">
              Aplicar filtros
            </button>
          </div>
        </div>
      )}

      {/* ===== ANIMAÇÃO ===== */}
      <style>{`
        @keyframes slide-left {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slide-left 0.3s ease forwards;
        }
      `}</style>
    </div>
  );
}
