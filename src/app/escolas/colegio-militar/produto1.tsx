"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart, X, Plus } from "lucide-react";

// -------------------------------
// ProductPage Component
// Drop this file in your project (e.g. /components/ProductPage.tsx)
// Usage example inside Next.js app route: import ProductPage from '@/components/ProductPage';
// <ProductPage product={productFromList} />
// Replace mockProduct.images with your real images (absolute or /public paths)
// Make sure Tailwind and lucide-react are installed and configured in your repo.
// -------------------------------

type Product = {
  id: string | number;
  name: string;
  price: number;
  currency?: string;
  description?: string;
  images: string[];
  materials?: { title: string; options: { id: string; label: string; color?: string }[] }[];
  sizes?: { id: string; label: string; disabled?: boolean }[];
};

const mockProduct: Product = {
  id: "jouse-1",
  name: "Jouse Série 1",
  price: 149,
  currency: "R$",
  description: "Carteira fina em couro legítimo — sob medida para CNH, cédulas e até 4 cartões.",
  images: [
    "/products/jouse-1-1.jpg",
    "/products/jouse-1-2.jpg",
    "/products/jouse-1-3.jpg",
  ],
  materials: [
    {
      title: "Couro",
      options: [
        { id: "preto", label: "Preto", color: "#000000" },
        { id: "branco", label: "Branco", color: "#f4f4f4" },
      ],
    },
    {
      title: "Acabamento",
      options: [
        { id: "grafite", label: "Grafite", color: "#6b6b6b" },
        { id: "vermelho", label: "Vermelho", color: "#e03e3e" },
        { id: "azul", label: "Azul", color: "#2b6be6" },
        { id: "verde", label: "Verde", color: "#7fe0c5" },
      ],
    },
  ],
  sizes: [
    { id: "cnh", label: "CNH" },
    { id: "rg", label: "RG", disabled: true },
  ],
};

export default function ProductPage({ product }: { product?: Product }) {
  const p = product ?? mockProduct;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    p.materials?.forEach((m) => (initial[m.title] = m.options[0].id));
    return initial;
  });
  const [selectedSize, setSelectedSize] = useState<string | null>(p.sizes?.[0]?.id ?? null);
  const [qty] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Carousel touch/swipe
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.changedTouches[0].clientX;
  }
  function onTouchMove(e: React.TouchEvent) {
    touchEndX.current = e.changedTouches[0].clientX;
  }
  function onTouchEnd() {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const dx = touchStartX.current - touchEndX.current;
    const threshold = 40; // minimal distance for swipe
    if (dx > threshold) nextImage();
    else if (dx < -threshold) prevImage();
    touchStartX.current = null;
    touchEndX.current = null;
  }

  function prevImage() {
    setSelectedImageIndex((i) => (i - 1 + p.images.length) % p.images.length);
  }
  function nextImage() {
    setSelectedImageIndex((i) => (i + 1) % p.images.length);
  }

  function openAddToCartModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  function handleAddToCart() {
    // TODO: connect to your cart/context/api
    // Example payload:
    const payload = {
      productId: p.id,
      qty,
      options: { material: selectedMaterial, size: selectedSize },
    };
    console.log("Adicionar ao carrinho:", payload);
    setIsModalOpen(false);
    // Add visual confirmation or redirect to cart here
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Large image area */}
        <div className="relative">
          <div
            className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative w-[520px] h-[420px] sm:w-[420px] sm:h-[340px] md:w-[560px] md:h-[440px]">
              {/* Use next/image for optimized images; replace src with your images */}
              <Image
                src={p.images[selectedImageIndex]}
                alt={`${p.name} ${selectedImageIndex + 1}`}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-md"
              />

              {/* overlay add-to-cart button similar to reference */}
              <button
                onClick={openAddToCartModal}
                className="absolute right-6 bottom-6 bg-black text-white rounded-full px-4 py-3 flex items-center gap-3 shadow-lg hover:opacity-95"
                aria-label="Adicionar ao carrinho"
              >
                <ShoppingCart size={18} />
                <span className="hidden sm:inline">Adicionar</span>
              </button>
            </div>
          </div>

          {/* Thumbnails / small swipe hint */}
          <div className="flex gap-3 mt-6 justify-center lg:justify-start">
            {p.images.map((src, i) => (
              <button
                key={src + i}
                onClick={() => setSelectedImageIndex(i)}
                className={`w-20 h-16 rounded overflow-hidden border ${
                  i === selectedImageIndex ? "ring-2 ring-offset-2 ring-gray-800" : "border-gray-200"
                }`}
              >
                <Image src={src} alt={`thumb-${i}`} width={80} height={64} style={{ objectFit: "cover" }} />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Product options */}
        <div className="pt-4">
          <h1 className="text-3xl font-extrabold tracking-tight mb-4">Personalize sua {p.name}</h1>

          {p.materials?.map((m) => (
            <div key={m.title} className="mb-6">
              <h3 className="font-semibold text-lg">{m.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{m.options.find((o) => o.id === selectedMaterial[m.title])?.label}</p>

              <div className="flex gap-3">
                {m.options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedMaterial((s) => ({ ...s, [m.title]: opt.id }))}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                      selectedMaterial[m.title] === opt.id ? "ring-2 ring-offset-1 ring-gray-900" : ""
                    }`}
                    title={opt.label}
                  >
                    {/* If color provided use a colored circle, otherwise show label */}
                    {opt.color ? (
                      <span
                        aria-hidden
                        style={{ background: opt.color }}
                        className="block w-7 h-7 rounded-full"
                      />
                    ) : (
                      <span className="text-xs">{opt.label}</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ))}

          {/* Size */}
          <div className="mb-6">
            <h3 className="font-semibold text-lg">Tamanho</h3>
            <p className="text-sm text-gray-400 mb-3">Sob medida para CNH, cédulas e até 4 cartões</p>
            <div className="flex gap-3">
              {p.sizes?.map((s) => (
                <button
                  key={s.id}
                  disabled={s.disabled}
                  onClick={() => !s.disabled && setSelectedSize(s.id)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedSize === s.id ? "bg-black text-white" : "bg-white text-gray-700"
                  } ${s.disabled ? "opacity-40 cursor-not-allowed" : "hover:shadow"}`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price and shipping info */}
          <div className="mb-6">
            <div className="text-2xl font-bold">{p.currency ?? "R$"} {p.price}</div>
            <div className="mt-3 text-sm text-green-600 font-medium">Frete grátis</div>
            <div className="text-sm text-gray-400">Entrega a partir de 2 dias úteis</div>
            <div className="mt-3 text-green-600 text-sm font-medium">Troca ou devolução grátis</div>
          </div>

          {/* Select / Add to cart */}
          <div className="mt-6">
            <button
              onClick={() => {
                // if you want direct selection behavior
                // open modal to choose options
                openAddToCartModal();
              }}
              className="inline-flex items-center gap-3 bg-black text-white rounded-full px-8 py-3 shadow-md"
            >
              Selecionar
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-6">{p.description}</p>
        </div>
      </div>

      {/* Modal for selecting size/options and adding */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={closeModal} />
          <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full p-6 z-10">
            <button className="absolute right-4 top-4" onClick={closeModal} aria-label="Fechar">
              <X />
            </button>
            <h2 className="text-xl font-bold mb-4">Escolha sua opção</h2>
            <div className="space-y-4">
              {p.materials?.map((m) => (
                <div key={m.title}>
                  <div className="text-sm font-medium">{m.title}</div>
                  <div className="flex gap-3 mt-2">
                    {m.options.map((opt) => (
                      <button
                        key={opt.id}
                        onClick={() => setSelectedMaterial((s) => ({ ...s, [m.title]: opt.id }))}
                        className={`w-10 h-10 rounded-full border ${
                          selectedMaterial[m.title] === opt.id ? "ring-2 ring-offset-1 ring-gray-900" : ""
                        }`}
                      >
                        {opt.color ? <span className="block w-7 h-7 rounded-full" style={{ background: opt.color }} /> : opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <div className="text-sm font-medium">Tamanho</div>
                <div className="flex gap-3 mt-2">
                  {p.sizes?.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSelectedSize(s.id)}
                      disabled={s.disabled}
                      className={`px-4 py-2 rounded-full border ${selectedSize === s.id ? "bg-black text-white" : ""} ${
                        s.disabled ? "opacity-40 cursor-not-allowed" : ""
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between mt-4">
                <div>
                  <div className="text-sm text-gray-500">Quantidade</div>
                  <div className="mt-1 font-medium">{qty}</div>
                </div>
                <div className="flex gap-2 items-center">
                  <button className="p-2 rounded-full border" aria-label="Diminuir" disabled>
                    <Plus style={{ transform: "rotate(45deg)" }} />
                  </button>
                </div>
              </div>

              <div className="mt-6 flex gap-3">
                <button onClick={handleAddToCart} className="flex-1 bg-black text-white rounded-full py-3 font-medium">
                  Adicionar ao carrinho
                </button>
                <button onClick={closeModal} className="flex-1 border rounded-full py-3">
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

