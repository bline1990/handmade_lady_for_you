import Link from "next/link";

export default function DualCardsSection({ t, lang }) {
  return (
    <section className="py-20 px-6 max-w-8xl mx-auto bg-[#E0DCD1]">
      <div className="grid md:grid-cols-2 gap-8 text-center">
        {/* CARD 1 */}
        <div className="border border-gray-300 rounded-xl p-8 bg-white shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t.models.title}</h2>
            <p className="text-gray-600 mb-6">{t.models.text}</p>
          </div>

          <Link
            href={`/${lang}/dog-models`}
            className="inline-block bg-[#9b7e3c] text-white text-center py-2 px-4 rounded-lg hover:bg-[#7d4b2e] active:bg-[#6e5424] active:scale-95 transition"
          >
            {t.models.button}
          </Link>
        </div>

        {/* CARD 2 */}
        <div className="border border-gray-300 rounded-xl p-8 bg-white shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t.donations.title}</h2>
            <p className="text-gray-600 mb-6">{t.donations.text}</p>
          </div>

          <Link
            href={`/${lang}/donations`}
            className="inline-block bg-[#9b7e3c] text-white text-center py-2 px-4 rounded-lg hover:bg-[#7d4b2e] active:bg-[#6e5424] active:scale-95 transition"
          >
            {t.donations.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
