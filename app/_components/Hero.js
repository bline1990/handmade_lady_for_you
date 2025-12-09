import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="my-6 relative bg-white">
      <div className="max-w-6xl mx-auto relative">
        {/* Ovo drži VISINU SEKCIJE tako da absolute tekst zna gdje je */}
        <div className="relative flex items-center justify-between min-h-[480px]">
          {/* LEFT IMAGE */}
          <div className="relative flex-1 flex justify-start">
            <div className="absolute -bottom-8 -left-4 w-60 h-24 bg-[#E0DCD1] rounded-md z-0"></div>
            <div className="relative z-10 mt-12">
              <Image
                src="/Mašna_home1.jpg"
                alt="Lijeva slika"
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
                alt="Desna slika"
                width={300}
                height={380}
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* ABSOLUTE TEXT – sada radi kako treba */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      z-20 w-full max-w-full px-6 text-center"
          >
            <div className="max-w-5xl mx-auto bg-white/30 p-6 rounded-xl">
              <p className="font-playfair text-xs text-[#9b7e3c] mb-2">
                LjUBAV PREMA PSIMA PRETVORENA U UMJETNOST
              </p>
              <h1 className="pt-4 text-4xl md:text-6xl font-playfair font-bold text-[#2A1F14] mb-4">
                MODNI DODACI ZA PSE
              </h1>
              <h1 className="text-4xl italic md:text-6xl font-playfair text-[#2A1F14] mb-4">
                HANDMADE BY LADYFORYOU
              </h1>

              <div className="flex justify-center gap-4 pt-9">
                <Link
                  href="/products"
                  className="bg-[#9b7e3c] text-sm text-white px-4 py-3 rounded-lg hover:bg-[#7d4b2e] transition"
                >
                  POGLEDAJTE MAŠNE
                </Link>
                <Link
                  href="https://www.instagram.com/handmadeby_ladyforyou?igsh=eHU3YzhrMjJqNmUz&utm_source=qr"
                  target="_blank"
                  className="border-2 border-[#9b7e3c] text-sm text-[#2A1F14] px-6 py-3 rounded-lg hover:bg-[#D6A354]/20 transition"
                >
                  INSTAGRAM
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
