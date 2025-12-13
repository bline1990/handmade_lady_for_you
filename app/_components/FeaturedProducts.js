import Image from "next/image";
import Link from "next/link";

export default function FeaturedProducts({ t, lang }) {
  return (
    <section className="py-28 bg-[#E0DCD1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* NASLOV */}
        <h2 className="text-1xl md:text-5xl font-playfair text-center text-[#2A1F14] mb-8">
          {t.title}
        </h2>

        <p className="text-center text-[#3F3226]/80 max-w-2xl mx-auto mb-16">
          {t.subtitle}
        </p>

        {/* GRID PRODUCTS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {t.items.map((p) => (
            <div
              key={p.id}
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

              <p className="text-[#3F3226]/80">{p.description}</p>

              <Link
                href={`/${lang}/products`}
                className="inline-block mt-5 px-4 py-2 bg-[#9b7e3c] text-white rounded-lg hover:bg-[#6c4730] transition-all active:scale-95"
              >
                {t.button}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
