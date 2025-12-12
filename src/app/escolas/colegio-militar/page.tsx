"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import { ShoppingCart, Shield, Truck, RotateCcw, Star } from "lucide-react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  inStock: boolean;
  features: string[];
};

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Camisa Polo Oficial",
    description:
      "Camisa polo em algodão penteado com detalhes bordados do colégio. Tecido respirável e duradouro.",
    price: 89.9,
    originalPrice: 109.9,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200",
    category: "Camisas",
    sizes: ["PP", "P", "M", "G", "GG"],
    colors: ["Branco", "Azul", "Cinza"],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    features: ["100% algodão", "Bordado personalizado", "Lavagem fácil", "Resistente"],
  },
  {
    id: 2,
    name: "Calça Social",
    description:
      "Calça social em tecido tecnológico com excelente caimento e conforto para o dia a dia escolar.",
    price: 129.9,
    originalPrice: 149.9,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=1200",
    category: "Calças",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Azul Marinho", "Preto", "Cinza Escuro"],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    features: ["Tecido tecnológico", "Elasticidade", "Não amassa", "Bolsos seguros"],
  },
  {
    id: 3,
    name: "Jaqueta Colegial",
    description: "Jaqueta impermeável com forro térmico e capuz. Ideal para dias frios e chuvosos.",
    price: 159.9,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=1200",
    category: "Jaquetas",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Azul Escuro", "Vermelho", "Verde Militar"],
    rating: 4.9,
    reviews: 156,
    inStock: true,
    features: ["Impermeável", "Forro térmico", "Capuz removível", "Bolsos internos"],
  },
  {
    id: 4,
    name: "Bermuda Tactel",
    description: "Bermuda em tactel com secagem rápida e costuras reforçadas para atividades físicas.",
    price: 79.9,
    originalPrice: 99.9,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=1200",
    category: "Bermudas",
    sizes: ["P", "M", "G", "GG"],
    colors: ["Azul Marinho", "Preto", "Verde"],
    rating: 4.5,
    reviews: 67,
    inStock: true,
    features: ["Tactel leve", "Secagem rápida", "Costuras reforçadas", "Elástico ajustável"],
  },
  {
    id: 5,
    name: "Kit Completo",
    description:
      "Kit com 2 camisetas, 1 calça e 1 jaqueta. Economize comprando o conjunto completo.",
    price: 349.9,
    originalPrice: 429.9,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200",
    category: "Kits",
    sizes: ["PP", "P", "M", "G", "GG"],
    colors: ["Branco/Azul", "Cinza/Azul", "Completo"],
    rating: 4.9,
    reviews: 203,
    inStock: true,
    features: ["Kit completo", "Economia de 20%", "Tamanhos combinados", "Entrega especial"],
  },
];

type SortOption = "default" | "price-low" | "price-high";

const colorStyles: Record<string, CSSProperties> = {
  Branco: { backgroundColor: "#ffffff" },
  Azul: { backgroundColor: "#2e3091" },
  Cinza: { backgroundColor: "#6b7280" },
  "Azul Marinho": { backgroundColor: "#1e3a8a" },
  Preto: { backgroundColor: "#0b0b0b" },
  "Cinza Escuro": { backgroundColor: "#4b5563" },
  Vermelho: { backgroundColor: "#dc2626" },
  "Verde Militar": { backgroundColor: "#166534" },
  Verde: { backgroundColor: "#16a34a" },
  "Branco/Azul": { backgroundImage: "linear-gradient(135deg, #ffffff 50%, #2e3091 50%)" },
  "Cinza/Azul": { backgroundImage: "linear-gradient(135deg, #6b7280 50%, #2e3091 50%)" },
  Completo: {
    backgroundImage:
      "linear-gradient(135deg, #ffffff 0%, #ffffff 33%, #2e3091 33%, #2e3091 66%, #1e3a8a 66%, #1e3a8a 100%)",
  },
};

const ColegioMilitarProducts = () => {
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const categories = ["all", ...new Set(initialProducts.map((p) => p.category))];
  const allSizes = Array.from(new Set(initialProducts.flatMap((p) => p.sizes)));
  const allColors = Array.from(new Set(initialProducts.flatMap((p) => p.colors)));

  const products = useMemo(() => {
    let data = [...initialProducts];

    if (selectedCategory !== "all") {
      data = data.filter((p) => p.category === selectedCategory);
    }

    if (selectedSizes.length > 0) {
      data = data.filter((p) => p.sizes.some((size) => selectedSizes.includes(size)));
    }

    if (selectedColors.length > 0) {
      data = data.filter((p) => p.colors.some((color) => selectedColors.includes(color)));
    }

    if (sortBy === "price-low") {
      data.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [selectedCategory, selectedSizes, selectedColors, sortBy]);

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) => (prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]));
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) => (prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]));
  };

  const clearFilters = () => {
    setSortBy("default");
    setSelectedCategory("all");
    setSelectedSizes([]);
    setSelectedColors([]);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        <section className="pt-10 pb-12">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2e3091] via-[#24266f] to-[#0f122f] text-white px-6 md:px-10 py-12">
            <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,#ffffff1a,transparent_45%)]" />
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em]">Produtos Colégio Militar</div>
                <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Linha oficial com o conforto da nossa tecnologia</h1>
                <p className="text-white/80 text-lg">
                  Seleção curada de uniformes com ajuste preciso, tecidos tecnológicos e acabamento premium nas cores do colégio.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">Entrega rápida</span>
                  <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">Garantia de qualidade</span>
                  <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">Troca fácil</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 border border-white/20 p-4 backdrop-blur">
                  <p className="text-sm text-white/80">Itens disponíveis</p>
                  <p className="text-3xl font-semibold">{initialProducts.length}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <Shield className="w-4 h-4" />
                    Coleção oficial
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 border border-white/20 p-4 backdrop-blur">
                  <p className="text-sm text-white/80">Média de avaliações</p>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-semibold">4.7</span>
                    <Star className="w-5 h-5 fill-yellow-300 text-yellow-300" />
                  </div>
                  <p className="mt-2 text-sm text-white/80">Conforto e durabilidade</p>
                </div>
                <div className="col-span-2 rounded-2xl bg-white text-gray-900 p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500">Frete para Goiânia</p>
                      <p className="text-xl font-semibold text-[#2e3091]">2-3 dias úteis</p>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <Truck className="w-4 h-4 text-[#2e3091]" />
                      <RotateCcw className="w-4 h-4 text-[#2e3091]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-24 z-20 bg-white pb-6">
          <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 py-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-[#2e3091] text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category === "all" ? "Todos" : category}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 py-4">
            <div className="flex flex-wrap items-center gap-2">
              {allSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => toggleSize(size)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    selectedSizes.includes(size)
                      ? "bg-[#2e3091] text-white shadow-sm"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                {allColors.map((color) => {
                  const style = colorStyles[color] || { backgroundColor: "#e5e7eb" };
                  return (
                    <button
                      key={color}
                      onClick={() => toggleColor(color)}
                      className={`flex items-center gap-2 rounded-full border px-3 py-1 text-sm transition-all duration-200 ${
                        selectedColors.includes(color)
                          ? "border-[#2e3091] text-[#2e3091] shadow-sm"
                          : "border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      <span
                        className="h-4 w-4 rounded-full border border-gray-200"
                        style={{ ...style }}
                      />
                      {color}
                    </button>
                  );
                })}
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-sm focus:border-[#2e3091] focus:outline-none"
              >
                <option value="default">Ordenar: Recomendado</option>
                <option value="price-low">Menor preço</option>
                <option value="price-high">Maior preço</option>
              </select>
              <button
                onClick={clearFilters}
                className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-[#2e3091] hover:text-[#2e3091] transition-colors"
              >
                Limpar filtros
              </button>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-[0.2em] text-gray-500">Produtos</span>
              <h2 className="text-2xl font-semibold">{products.length} itens</h2>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#2e3091]" />
                2-3 dias úteis
              </div>
              <div className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4 text-[#2e3091]" />
                Troca em 30 dias
              </div>
            </div>
          </div>

          {products.length === 0 ? (
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-10 text-center">
              <p className="text-gray-600 mb-4">Nenhum item encontrado com os filtros atuais.</p>
              <button
                onClick={clearFilters}
                className="rounded-full bg-[#2e3091] px-6 py-3 text-white font-medium hover:bg-[#252a7a] transition-colors"
              >
                Ver todos os produtos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-t-2xl bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.originalPrice && (
                      <span className="absolute left-4 top-4 rounded-full bg-[#2e3091] px-3 py-1 text-xs font-semibold text-white">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </span>
                    )}
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.2em] text-gray-500">{product.category}</p>
                        <h3 className="text-lg font-semibold leading-tight">{product.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating)
                                    ? "fill-[#fbbf24] text-[#fbbf24]"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span>({product.reviews})</span>
                        </div>
                      </div>
                      <div className="text-right">
                        {product.originalPrice && (
                          <p className="text-sm text-gray-400 line-through">R$ {product.originalPrice.toFixed(2)}</p>
                        )}
                        <p className="text-2xl font-semibold text-[#2e3091]">R$ {product.price.toFixed(2)}</p>
                        <p className="text-xs text-gray-500">ou 3x de R$ {(product.price / 3).toFixed(2)}</p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>

                    <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-700">
                      {product.features.slice(0, 3).map((feature) => (
                        <span key={feature} className="rounded-full bg-gray-100 px-3 py-1">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="space-y-1 text-sm text-gray-700">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">Cores</span>
                          <div className="flex items-center gap-1">
                            {product.colors.map((color) => {
                              const style = colorStyles[color] || { backgroundColor: "#e5e7eb" };
                              return <span key={color} className="h-4 w-4 rounded-full border border-gray-200" style={{ ...style }} />;
                            })}
                          </div>
                        </div>
                        <p>Tamanhos: {product.sizes.join(", ")}</p>
                      </div>
                      <button
                        className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                          product.inStock
                            ? "bg-[#2e3091] text-white hover:bg-[#252a7a]"
                            : "bg-gray-200 text-gray-500 cursor-not-allowed"
                        }`}
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4" />
                        {product.inStock ? "Adicionar" : "Esgotado"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ColegioMilitarProducts;
