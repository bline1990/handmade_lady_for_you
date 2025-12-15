import Link from "next/link";
import Image from "next/image";
import en from "@/locales/en.json";
import hr from "@/locales/hr.json";

const translations = { en, hr };

export const runtime = "nodejs";

export default async function ThankYouPage({ params }) {
  // ✅ Await params
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";

  const tRaw = translations[lang] || translations.en;
  const t = tRaw?.thankYou || {
    title: "Thank you!",
    text: "Your message has been sent.",
    home: "Home",
    products: "Products",
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#E0DCD1] px-6 text-center space-y-6">
      <Image
        src="/logo.png"
        alt="Logo"
        width={120}
        height={120}
        className="animate-bounce"
      />
      <h1 className="text-3xl md:text-4xl mb-2">{t.title}</h1>
      <p className="text-gray-700 max-w-md">{t.text}</p>
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <Link
          href={`/${lang}/`}
          className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 active:scale-95 transition transform"
        >
          {t.home}
        </Link>
        <Link
          href={`/${lang}/products`}
          className="bg-[#826829cb] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#6e5424] active:scale-95 transition transform"
        >
          {t.products}
        </Link>
      </div>
    </div>
  );
}
