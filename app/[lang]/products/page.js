import { Suspense } from "react";
import ProductList from "@/app/_components/ProductList";
import SpecialCollection from "@/app/_components/SpecialCollection";
import PawLoader from "@/app/_components/PawLoader";
import { getProducts } from "@/app/_lib/data-service";
import en from "@/locales/en.json";
import hr from "@/locales/hr.json";
import ProductClient from "@/app/_components/ProductClient";
export const dynamic = "force-dynamic";
export const revalidate = 60;

const translations = { en, hr };

export const runtime = "nodejs";

export const metadata = {
  title: "Products",
  description:
    "Ručne mašne izrađene od pažljivo odabranih Pamigo Fabrics materijala.",
};

export default async function ProductsPage({ params }) {
  // ✅ Always await params in App Router
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";

  // Dohvat prijevoda
  const tRaw = translations[lang] || translations.en;
  const t = {
    products: {
      introText: tRaw?.products?.introText || "",
      buttonText: tRaw?.products?.buttonText || "",
      items: tRaw?.products?.items || {}, // ⬅ fallback je prazan objekt
    },
    product: tRaw?.product || {},
  };
  // Dohvat proizvoda
  let products = [];
  try {
    const productsData = await getProducts();
    products = productsData || [];
  } catch (err) {
    console.log("Error loading products:", err);
    products = [];
  }
  return (
    <main className="max-w-6xl mx-auto mt-10 px-6 py-10 space-y-15">
      <section className="bg-[#E0DCD1] max-w-6xl p-10 text-left space-y-4 mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed">
          {t.products.introText}
        </p>
      </section>
      <ProductClient products={products} t={t} lang={lang} />
      <SpecialCollection lang={lang} />
    </main>
  );
}
