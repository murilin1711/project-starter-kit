import Image from "next/image";

const products = [
  {
    name: "Uniforme Tradicional – Colégio Militar",
    description: "Tecido resistente com cortes alinhados e brasão bordado.",
    price: "R$ 249,00"
  },
  {
    name: "Camisa de Educação Física – Colégio Militar",
    description: "Dry-fit respirável com gola reforçada e manga raglan.",
    price: "R$ 119,00"
  },
  {
    name: "Agasalho Oficial – Colégio Militar",
    description: "Conjunto impermeável com zíper selado e forro macio.",
    price: "R$ 329,00"
  },
  {
    name: "Calça Militar Masculina/Feminina",
    description: "Modelagem anatômica com ajuste na cintura e bolsos utilitários.",
    price: "R$ 189,00"
  },
  {
    name: "Moletom Personalizado – Colégio Militar",
    description: "Fleece premium com capuz estruturado e punhos firmes.",
    price: "R$ 219,00"
  }
];

const crest = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/cepmg_page-0001-removebg-preview-1765503167632.png?width=8000&height=8000&resize=contain";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#05070f] via-[#0a0f22] to-[#05070f] text-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-10 py-14 md:py-18">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <div className="relative w-28 h-28 rounded-full bg-white/5 border border-white/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)] flex items-center justify-center">
            <Image src={crest} alt="Brasão Colégio Militar" fill className="object-contain" />
          </div>
          <div className="space-y-2">
            <p className="text-xs tracking-[0.35em] uppercase text-slate-300">Colégio Militar</p>
            <h1 className="text-3xl md:text-4xl font-semibold">Produtos</h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
              Uniformes oficiais e peças personalizadas com acabamento premium, prontos para seu pedido.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col gap-4 shadow-[0_30px_80px_-50px_rgba(0,0,0,0.8)] backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="relative w-14 h-14 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
                  <Image src={crest} alt="Colégio Militar" fill className="object-contain" />
                </div>
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-white leading-tight group-hover:text-[#9cc0ff] transition-colors duration-200">
                    {product.name}
                  </h2>
                  <p className="text-slate-300 text-sm leading-relaxed">{product.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#b5d2ff]">{product.price}</span>
                <button className="rounded-full bg-gradient-to-r from-[#2733ff] to-[#3d6aff] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-900/40 transition-all duration-200 group-hover:translate-y-[-1px] group-hover:shadow-blue-700/50">
                  Comprar agora
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
