import React from 'react';
import Image from 'next/image';

type Product = {
  id: number;
  name: string;
  price: string;
  image1: string;
  image2: string;
};

const products: Product[] = [
  // ... (mantenha o array de produtos igual)
];

const ProductCard = ({ product }: {product: Product;}) =>
  <div className="flex-shrink-0 snap-start w-[280px] lg:w-[320px]">
    <a href="#" className="block group">
      <div className="relative overflow-hidden rounded-2xl aspect-[3/4] bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center border border-gray-200 hover:border-[#2e3091] transition-colors duration-300">
        <Image
          src={product.image1}
          alt={product.name}
          width={320}
          height={427}
          className="w-full h-full object-contain p-4 opacity-30 transition-all duration-300 group-hover:opacity-70 group-hover:scale-105"
          unoptimized // Remova se as imagens forem otimizadas
        />
        
        {/* Botão Em Breve */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button className="bg-[#2e3091] text-white px-8 py-3 rounded-lg text-sm font-medium transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg hover:bg-[#252a7a]">
            Em breve
          </button>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-base lg:text-lg font-medium text-gray-900 leading-tight text-center">{product.name}</h3>
      </div>
    </a>
  </div>;

const ProductCarousel = () => {
  return (
    <section className="w-full py-10 md:py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Header com título */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#2e3091] mb-3 md:mb-4">
            Nossos Parceiros Escolares
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Confiança e qualidade que conquistaram diversas instituições de ensino
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 p-1 rounded-xl">
            <button className="py-2 px-6 rounded-lg text-sm font-medium transition-colors bg-[#2e3091] text-white">
              Ver Tudo
            </button>
            <button className="py-2 px-6 rounded-lg text-sm font-medium transition-colors text-gray-700 hover:bg-gray-200">
              Escolas
            </button>
          </div>
        </div>

        {/* Carrossel de produtos */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 md:gap-8 px-4 pb-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          
          {/* Indicadores de scroll (opcional) */}
          <div className="flex justify-center mt-8 space-x-2">
            <div className="w-2 h-2 rounded-full bg-[#2e3091]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>

        {/* Texto abaixo do carrossel */}
        <div className="text-center mt-12 md:mt-16 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
              Seja nosso próximo parceiro
            </h3>
            <p className="text-gray-700 text-base md:text-lg mb-4">
              Oferecemos uniformes escolares de alta qualidade, conforto e durabilidade para sua instituição.
            </p>
            <button className="bg-[#2e3091] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#252a7a] transition-colors duration-300 shadow-md text-sm md:text-base">
              Solicitar orçamento escolar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;