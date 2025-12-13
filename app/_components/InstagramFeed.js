import Image from "next/image";
import Link from "next/link";

export default function InstagramFeed({ t }) {
  const images = ["/lady1.jpg", "/slide11.jpg", "/story1.JPEG", "/slide12.jpg"];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-[#E0DCD1]">
      {/* TITLE */}
      <h2 className="text-2xl font-playfair text-center mb-12 text-[#2A1F14]">
        {t.title} <strong>{t.followers}</strong> {t.subtitle}
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="w-full h-48 relative rounded-lg overflow-hidden"
          >
            <Image
              src={img}
              alt={`Instagram ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* FOLLOW TEXT */}
      <p className="mt-10 text-center text-[#2A1F14]">{t.follow}</p>

      {/* LINKS – SVI DOLJE, LIJEPO PORAVNANI */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mt-6 text-center">
        <Link
          href="https://www.instagram.com/handmadeby_ladyforyou"
          target="_blank"
          className="text-[#D6A354] font-semibold hover:underline"
        >
          📸 handmadeby_ladyforyou
        </Link>

        <Link
          href="https://www.instagram.com/lady_the_cav_dog"
          target="_blank"
          className="text-[#D6A354] font-semibold hover:underline"
        >
          🐶 lady_the_cav_dog
        </Link>

        <Link
          href="https://www.tiktok.com/@lady_the_cav_dog"
          target="_blank"
          className="text-[#D6A354] font-semibold hover:underline active:scale-95"
        >
          🎵 TikTok
        </Link>
      </div>
    </section>
  );
}
