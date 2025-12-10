import Link from "next/link";
import Image from "next/image";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#E0DCD1] px-6 text-center space-y-6">
      <Image
        src="/logo.png"
        alt="Logo"
        width={120}
        height={120}
        className="animate-bounce"
      />
      <h1 className="text-3xl md:text-4xl font-playfair mb-2">
        Hvala! Poruka je poslana.
      </h1>
      <p className="text-gray-700 max-w-md">
        Drago nam je što ste nas kontaktirali. Pogledajte naše proizvode ili se
        vratite na početnu stranicu.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link
          href="/"
          className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 active:scale-95 transition transform"
        >
          Početna
        </Link>
        <Link
          href="/products"
          className="bg-[#826829cb] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#6e5424] active:scale-95 transition transform"
        >
          Proizvodi
        </Link>
      </div>
    </div>
  );
}
