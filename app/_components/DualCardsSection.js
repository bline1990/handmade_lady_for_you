import Link from "next/link";

export default function DualCardsSection() {
  return (
    <section className="py-20 px-6 max-w-8xl mx-auto bg-[#E0DCD1]">
      <div className="grid md:grid-cols-2 gap-8 text-center">
        {/* Card 1 */}
        <div className="border border-gray-300 rounded-xl p-8 bg-white shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">DOG MODELS</h2>
            <p className="text-gray-600 mb-6">
              Najveća mi je radost što danas imam toliko različitih psećih
              modela diljem svijeta – od Amerike i Australije pa sve do Europe i
              moje Hrvatske – koji s ponosom nose moj rad.
            </p>
          </div>

          <Link
            href="/dogs"
            className="inline-block bg-[#9b7e3c] text-white text-center py-2 px-4 rounded-lg hover:bg-[#7d4b2e] active:bg-[#6e5424] active:scale-95 transition"
          >
            Saznajte više
          </Link>
        </div>

        {/* Card 2 */}
        <div className="border border-gray-300 rounded-xl p-8 bg-white shadow-sm flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-4">DONATIONS</h2>
            <p className="text-gray-600 mb-6">
              Tijekom godina sam podržala nekoliko hrvatskih skloništa malim
              gestama – darovala sam mašne i marame koje sam izradila s
              ljubavlju, a želja mi je nastaviti pomagati.
            </p>
          </div>

          <Link
            href="/donations"
            className="inline-block bg-[#9b7e3c] text-center text-white py-2 px-4 rounded-lg hover:bg-[#7d4b2e] active:bg-[#6e5424] active:scale-95 transition"
          >
            Saznajte više
          </Link>
        </div>
      </div>
    </section>
  );
}
