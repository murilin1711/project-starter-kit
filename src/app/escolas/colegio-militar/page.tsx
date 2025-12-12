"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Grid2X2,
  Grid3X3,
  Square,
} from "lucide-react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Camisa Nature Jacquard Atoalhado",
    price: 697,
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1200&q=80",
    category: "Camisas",
  },
  {
    id: 2,
    name: "Bermuda Jacquard Daisy",
    price: 597,
    image:
      "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&w=1200&q=80",
    category: "Bermudas",
  },
  {
    id: 3,
    name: "T-Shirt Light Linen Alma Brasileira",
    price: 447,
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80",
    category: "Camisetas",
  },
  {
    id: 4,
    name: "Calça Alfaiataria Fluid Linen",
    price: 847,
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
    category: "Calças",
  },
];

export default function LojaEstiloOsklen() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [queryProducts, setQueryProducts] = useState<Product[]>(initialProducts);

  const categories = ["Todos", "Camisas", "Bermudas", "Camisetas", "Calças"];

  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [sortBy, setSortBy] = useState("default");
  const [showFiltersModal, setShowFiltersModal] = useState(false);

  // GRID LAYOUT CONTROL
  // 2 = duas colunas
  // 4 = quatro colunas
  // 1 = uma coluna (modo "lista")
  const [gridMode, setGridMode] = useState<1 | 2 | 4>(2);

  useEffect(() => {
    let filtered = [...products];

    if (selectedCategory !== "Todos") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === "price-low") filtered.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") filtered.sort((a, b) => b.price - a.price);

    setQueryProducts(filtered);
  }, [products, selectedCategory, sortBy]);

  const changeGrid = () => {
    if (gridMode === 2) setGridMode(4);
    else if (gridMode === 4) setGridMode(1);
    else setGridMode(2);
  };

  const gridIcon =
    gridMode === 2 ? <Grid2X2 className="w-4 h-4" /> :
    gridMode === 4 ? <Grid3X3 className="w-4 h-4" /> :
    <Square className="w-4 h-4" />;

  return (
    <div className="min-h-screen bg-white antialiased text-[15px]">

      {/* HEADER */}
      <header className="sticky top-0 z-40 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="md:hidden p-2 rounded hover:bg-neutral-100">
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <span className="uppercase text-xs tracking-widest text-neutral-600">
                loja
              </span>
              <div className="text-2xl font-light">colégio militar</div>
            </div>
          </div>

          {/* GRID SWITCH BUTTON (NOVO) */}
          <button
            onClick={changeGrid}
            className="p-2 rounded border border-neutral-300 hover:bg-neutral-100 transition"
          >
            {gridIcon}
          </button>
        </div>
      </header>

      {/* CONTROLES */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Categorias */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedCategory(c)}
                className={`px-4 py-2 rounded-full text-sm ${
                  selectedCategory === c
                    ? "bg-black text-white"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Ordenação */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none border border-neutral-200 px-4 py-2 rounded text-sm"
              >
                <option value="default">Ordenar</option>
                <option value="price-low">Menor preço</option>
                <option value="price-high">Maior preço</option>
              </select>

              <ChevronDown className="w-4 h-4 text-neutral-500 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>

            <button
              onClick={() => setShowFiltersModal(true)}
              className="hidden md:flex items-center gap-2 text-sm px-3 py-2 rounded-full border border-neutral-200 hover:border-neutral-800"
            >
              <ChevronDown className="w-4 h-4" />
              Filtrar
            </button>
          </div>
        </div>
      </div>

      {/* GRID */}
      <main className="max-w-7xl mx-auto px-6 pb-16">

        <div
          className={`
            grid gap-8
            ${gridMode === 1 ? "grid-cols-1" : ""}
            ${gridMode === 2 ? "grid-cols-2" : ""}
            ${gridMode === 4 ? "grid-cols-2 md:grid-cols-4" : ""}
          `}
        >
          {queryProducts.map((p) => (
            <article key={p.id} className="group relative cursor-pointer">

              <div className="relative w-full overflow-hidden rounded-2xl bg-neutral-100 aspect-[9/12]">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-4">
                <h3 className="text-[13px] font-light text-gray-900 leading-tight line-clamp-1">
                  {p.name}
                </h3>

                <div className="mt-1 text-[15px] font-medium text-gray-900">
                  R$ {p.price.toFixed(2)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* MODAL DE FILTROS */}
      {showFiltersModal && (
        <div className="fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setShowFiltersModal(false)}
          />

          <aside className="relative ml-auto w-full max-w-sm bg-white h-full shadow-xl p-6 overflow-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-medium">Filtros</h2>
              <button onClick={() => setShowFiltersModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6 text-sm text-neutral-700">
              <div>
                <div className="font-medium mb-2">Categoria</div>
                <div className="flex flex-col gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setSelectedCategory(c)}
                      className={`px-3 py-2 rounded text-left ${
                        selectedCategory === c
                          ? "bg-black text-white"
                          : "bg-neutral-50"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  setSelectedCategory("Todos");
                  setSortBy("default");
                  setShowFiltersModal(false);
                }}
                className="flex-1 border border-neutral-200 py-3 rounded text-sm"
              >
                Limpar
              </button>

              <button
                onClick={() => setShowFiltersModal(false)}
                className="flex-1 bg-black text-white py-3 rounded text-sm"
              >
                Aplicar
              </button>
            </div>
          </aside>
        </div>
      )}

      <style>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
