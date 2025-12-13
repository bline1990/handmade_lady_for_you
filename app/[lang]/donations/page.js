import { getTranslations } from "@/app/_lib/translations";
import Image from "next/image";
import Link from "next/link";

export default async function DonationsPage({ params }) {
  // ✅ params je Promise, mora se await
  const { lang } = await params; // ovako se dobiva stvarni objekt
  const t = getTranslations(lang).donations;

  return (
    <main className="bg-[#E0DCD1] pb-20">
      {/* HERO */}
      <section className="relative h-[55vh] flex items-center justify-center bg-[#E0DCD1]">
        <div className="relative text-center px-6">
          <h1 className="text-2xl font-playfair italic text-[#2A1F14] drop-shadow mb-4">
            {t.hero.title}
          </h1>
          <p className="p-2 mx-auto text-[#3A2C20]/80 text-m leading-relaxed">
            {t.hero.text1}
          </p>
        </div>
      </section>

      {/* GRID OF SHELTER STORIES */}
      <section className="max-w-6xl mx-auto px-6 mt-3 grid md:grid-cols-3 gap-12">
        {t.cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-100"
          >
            <div className="relative w-full aspect-square">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-[#2A1F14] mb-2">
                {card.title}
              </h3>
              <p className="text-[#2A1F14]/80 leading-relaxed">{card.text}</p>
              <div className="mt-7 text-center">
                <Link
                  href={card.linkUrl}
                  target="_blank"
                  className="w-full block bg-[#9b7e3c] text-sm sm:text-base text-white px-4 py-3 rounded-lg hover:bg-[#7d4b2e] transition active:bg-[#6e5424] active:scale-95"
                >
                  {card.linkText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FINAL EMOTIONAL CLOSING */}
      <section className="max-w-4xl mx-auto px-6 text-center mt-24">
        <p className="p-2 mx-auto text-[#3A2C20]/80 text-m">{t.closing}</p>
      </section>
    </main>
  );
}
