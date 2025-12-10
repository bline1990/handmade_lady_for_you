import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts() {
  const products = [
    {
      name: "Bordeaux pliš mašna",
      desc: "Ručna izrada, jedinstveni stil idealan za svečane prigode.",
      image: "/insta3.jpeg",
    },
    {
      name: "Božićna zelena mašna",
      desc: "Ručna izrada idealna za nadolazeće blagdane.",
      image: "/insta9.jpeg",
    },
    {
      name: "Karirana mašna",
      desc: "Ručna izrada, doza elegancije za posebne prigode.",
      image: "/insta10.jpeg",
    },
  ];

  return (
    <section className="py-28 bg-[#E0DCD1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-1xl md:text-5xl font-playfair text-center text-[#2A1F14] mb-8">
          ISTAKNUTI PROIZVODI
        </h2>

        <p className="text-center text-[#3F3226]/80 max-w-2xl mx-auto mb-16">
          Svaka mašna izrađena je ručno s puno ljubavi i posebno dizajnirana za
          svakog ljubimca. U nastavku pogledajte novu blagdansku kolekciju.
        </p>

        {/* GRID PRODUCTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-5"
            >
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <h3 className="text-xl font-semibold text-[#2A1F14] mb-2 font-playfair">
                {p.name}
              </h3>
              <p className="text-[#3F3226]/80">{p.desc}</p>

              <button className="mt-5 px-4 py-2 active:bg-[#6e5424] active:scale-95 bg-[#9b7e3c] text-white rounded-lg hover:bg-[#6c4730] transition-all">
                <Link href="/products">Saznajte više </Link>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
