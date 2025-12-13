import Image from "next/image";
import Link from "next/link";

export default function DogInfoSection({ t, lang }) {
  return (
    <section className="flex flex-col md:flex-row w-full md:max-w-5xl mx-auto my-10 md:my-20 px-0 md:px-6 text-center">
      {/* TEXT */}
      <div className="w-full md:w-1/2 bg-[#826829cb] p-6 md:p-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl text-center font-playfair mb-4 text-white">
          {t.title}
        </h2>

        <p className="text-white leading-relaxed">{t.text}</p>

        {/* BUTTON */}
        <Link
          href={`/${lang}/about`}
          className="mt-6 md:mt-8 inline-block border-2 text-white py-3 px-6 rounded-md hover:bg-white/10 active:bg-[#6e5424] active:scale-95 transition w-fit"
        >
          {t.button}
        </Link>
      </div>

      {/* IMAGE */}
      <div className="w-full md:w-1/2">
        <Image
          src="/home1.jpg"
          alt="Cavalier King Charles Spaniel"
          width={800}
          height={600}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </section>
  );
}
