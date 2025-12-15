import { getTranslations } from "@/app/_lib/translations";
import Image from "next/image";
import Link from "next/link";

export default async function DonationsPage({ params }) {
  // ✅ params je Promise, mora se await
  const { lang } = await params; // ovako se dobiva stvarni objekt
  const t = getTranslations(lang).donations;

  return (
    <main className="bg-[#E0DCD1] pb-20">
      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center items-center bg-[#E0DCD1] px-6 py-20 md:py-20">
        <h1 className="w-full text-center text-xl sm:text-xl md:text-3xl font-playfair italic text-[#2A1F14] drop-shadow leading-snug mb-6 wrap-break-word">
          {t.hero.title}
        </h1>
        <p className="w-full text-center text-sm sm:text-base md:text-lg text-[#3A2C20]/80 leading-relaxed">
          {t.hero.text1}
        </p>
      </section>

      {/* GRID OF SHELTER STORIES */}
      <section className="max-w-6xl mx-auto px-6 mt-1 grid md:grid-cols-3 gap-12">
        {t.cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-100 flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full aspect-square">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="flex flex-col flex-1 p-6 justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-[#2A1F14] mb-2">
                  {card.title}
                </h3>
                <p className="text-[#2A1F14]/80 leading-relaxed">{card.text}</p>
              </div>

              {/* Link na dnu kartice */}
              <div className="mt-6 text-center">
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
        <p className="text-[#3A2C20]/80 text-sm sm:text-base leading-relaxed">
          {t.closing}
        </p>
      </section>
    </main>
  );
}
