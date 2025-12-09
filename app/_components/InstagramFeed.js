import Image from "next/image";
import Link from "next/link";

export default function InstagramFeed() {
  const images = ["/lady1.jpg", "/slide11.jpg", "/story1.JPEG", "/slide12.jpg"];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-[#E0DCD1]">
      <h2 className="text-2xl font-playfair text-center mb-12 text-[#2A1F14]">
        Naša Instagram zajednica – <strong> 10.000+</strong> ljubitelja
        cavaliera
      </h2>
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
      <p className="mt-13 text-center">Zapratite nas na društvenim mrežama</p>
      <div className="text-center mt-8">
        <Link
          href="https://www.instagram.com/handmadeby_ladyforyou?igsh=eHU3YzhrMjJqNmUz&utm_source=qr"
          target="_blank"
          className="text-[#D6A354] font-semibold hover:underline"
        >
          handmadeby_ladyforyou
        </Link>
        <div className="text-center mt-8">
          <Link
            href="https://www.instagram.com/lady_the_cav_dog?igsh=MWpucnNsdDRxOGc5cQ%3D%3D&utm_source=qr"
            target="_blank"
            className="text-[#D6A354] font-semibold hover:underline"
          >
            lady_the_cav_dog
          </Link>
        </div>
        <div className="text-center mt-8">
          <Link
            href="https://www.tiktok.com/@lady_the_cav_dog?_r=1&_t=ZN-91tTUWuSpuQ"
            target="_blank"
            className="text-[#D6A354] font-semibold hover:underline"
          >
            lady_the_cav_dog
          </Link>
        </div>
      </div>
    </section>
  );
}
