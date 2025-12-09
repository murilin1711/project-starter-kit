'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Gabryella Telles",
    rating: 5,
    date: "um ano atrás",
    review: "Ótimo atendimento! Os preços super acessíveis!! Já fui em várias lojas de uniforme e nunca fui tão bem atendida quanto fui nessa loja! peguei fila mas super valeu a pena! as vendedoras são super atenciosas! e mesmo não tendo algumas peças disponíveis foi a única loja que teve como fazer encomenda porque as outras se não tem a peça não tem nem outra alternativa! gastei meu cartão bolsa uniforme e estou super satisfeita!! super indico!",
    avatarColor: "bg-blue-500"
  },
  {
    id: 2,
    name: "Simone Fernandes",
    rating: 5,
    date: "um ano atrás",
    review: "Uniforme de alta qualidade e padrão adequado, por isso a loja está sempre cheia, espero quanto tempo for preciso pra ser atendida!!! Eu recomendo!",
    avatarColor: "bg-purple-500"
  },
  {
    id: 3,
    name: "Marta Amaral",
    rating: 5,
    date: "8 meses atrás",
    review: "Atendimento de excelência, meninas super atenciosas, atendente Lorranny, gente super indico maravilhosa, uniformes de qualidade nota mil 😊 😊 😊 😊",
    avatarColor: "bg-pink-500"
  },
  {
    id: 4,
    name: "Andréi",
    rating: 5,
    date: "uma semana atrás",
    review: "Atendimento excelente, Produtos de qualidade excelente e serviço perfeito",
    avatarColor: "bg-green-500"
  },
  {
    id: 5,
    name: "Guilherme Nolasco",
    rating: 5,
    date: "3 meses atrás",
    review: "Excelente experiência de compra. A loja é organizada, os produtos têm ótima qualidade e o atendimento foi cordial e eficiente. Recomendo a todos que buscam confiança e bom serviço.",
    avatarColor: "bg-indigo-500"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative w-full py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#2e3091]/10 rounded-full mb-3">
            <Quote className="w-6 h-6 text-[#2e3091]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-medium text-[#2e3091] mb-3">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Confira a experiência de quem já comprou conosco
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div 
          className="relative bg-white rounded-2xl shadow-lg overflow-hidden max-w-3xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="p-6 md:p-8">
            {/* Decorative elements - smaller */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full -translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tr from-purple-50 to-pink-50 rounded-full translate-x-14 translate-y-14"></div>

            <div className="relative z-10">
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="ml-2 text-xs text-gray-500">{currentTestimonial.rating}.0</span>
              </div>

              {/* Review Text */}
              <div className="mb-6">
                <p className="text-sm md:text-base text-gray-700 leading-relaxed italic line-clamp-6">
                  "{currentTestimonial.review}"
                </p>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <div className={`${currentTestimonial.avatarColor} w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-base`}>
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900">{currentTestimonial.name}</h4>
                  <p className="text-gray-500 text-xs">{currentTestimonial.date}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows - smaller */}
          <button
            onClick={prevTestimonial}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors z-20"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors z-20"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
        </div>

        {/* Testimonial Indicators - smaller */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#2e3091] w-6' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Ir para depoimento de ${testimonial.name}`}
            />
          ))}
        </div>

        {/* Stats - smaller */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-xl md:text-2xl font-bold text-[#2e3091]">100%</div>
              <p className="text-gray-600 text-sm mt-1">Clientes Satisfeitos</p>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-[#2e3091]">5.0</div>
              <p className="text-gray-600 text-sm mt-1">Avaliação Média</p>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-bold text-[#2e3091]">40+</div>
              <p className="text-gray-600 text-sm mt-1">Anos de Confiança</p>
            </div>
          </div>
        </div>

        {/* CTA - smaller */}
        <div className="text-center mt-8">
          <button className="bg-[#2e3091] text-white px-6 py-2.5 rounded-lg font-medium hover:bg-[#252a7a] transition-colors duration-300 shadow-md hover:shadow-lg text-sm">
            Deixe seu Feedback
          </button>
          <p className="text-gray-500 text-xs mt-2">Ajude outros clientes com sua experiência</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;