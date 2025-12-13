import Image from "next/image";
import Link from "next/link";

export default function Hero({ t, lang }) {
  return (
    <section className="my-6 relative bg-white">
      <div className="max-w-6xl mx-auto relative">
        {/* VISINA SEKCIJE */}
        <div className="relative flex items-center justify-between min-h-[480px]">
          {/* LEFT IMAGE */}
          <div className="relative flex-1 flex justify-start">
            <div className="absolute -bottom-8 -left-4 w-60 h-24 bg-[#E0DCD1] rounded-md z-0"></div>
            <div className="relative z-10 mt-12">
              <Image
                src="/Mašna_home1.jpg"
                alt={t.images.leftAlt}
                width={300}
                height={380}
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex-1 flex justify-end">
            <div className="absolute -top-8 -right-4 w-60 h-24 bg-[#E0DCD1] rounded-md z-0"></div>
            <div className="relative z-10 mb-12">
              <Image
                src="/Mašna_home2.jpg"
                alt={t.images.rightAlt}
                width={300}
                height={380}
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* CENTER TEXT */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                       z-20 w-full px-6 text-center"
          >
            <div className="max-w-5xl mx-auto bg-white/30 p-4 rounded-xl">
              <p className="font-playfair text-[10px] sm:text-xs md:text-sm text-[#9b7e3c] mb-4 whitespace-nowrap overflow-x-auto">
                {t.subtitle}
              </p>

              <h1 className="pt-4 text-[16px] sm:text-xl md:text-4xl font-playfair font-bold text-[#2A1F14] mb-1 whitespace-nowrap overflow-x-auto">
                {t.title}
              </h1>

              <h2 className="text-[18px] sm:text-2xl md:text-5xl italic font-playfair text-[#2A1F14] mb-4 whitespace-nowrap">
                {t.brand}
              </h2>

              {/* BUTTONS */}
              <div className="flex justify-center gap-4 pt-6 md:pt-10">
                <Link
                  href={`/${lang}/products`}
                  className="bg-[#9b7e3c] text-sm sm:text-base text-white px-4 py-3 rounded-lg hover:bg-[#7d4b2e] transition active:scale-95"
                >
                  {t.buttons.products}
                </Link>

                <Link
                  href="https://www.instagram.com/handmadeby_ladyforyou"
                  target="_blank"
                  className="border-2 border-[#9b7e3c] text-sm sm:text-base text-[#2A1F14] px-6 py-3 rounded-lg hover:bg-[#D6A354]/20 transition active:scale-95"
                >
                  {t.buttons.instagram}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
