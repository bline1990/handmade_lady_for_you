import { Suspense } from "react";
import SpecialCollection from "@/app/_components/SpecialCollection";
import PawLoader from "@/app/_components/PawLoader";
import ProductList from "@/app/_components/ProductList";
import { getProducts } from "@/app/_lib/data-service";
import { getTranslations } from "@/app/_lib/translations";

export const metadata = {
  title: "Products",
  description:
    "Ručne mašne izrađene od pažljivo odabranih Pamigo Fabrics materijala. Dostupne u tri veličine, s prikazom naziva i sastava svakog uzorka.",
};

export default async function ProductsPage({ params }) {
  // Ako params dolazi kao Promise (Next.js App Router)
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  const t = getTranslations(lang);
  const products = await getProducts();

  return (
    <main className="max-w-6xl mx-auto mt-10 px-6 py-10 space-y-15">
      {/* UVODNI TEKST */}
      <section className="bg-[#E0DCD1] max-w-6xl p-10 text-left space-y-4 mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed">
          {t.products.introText}
        </p>
      </section>

      {/* LISTA PROIZVODA I SPECIAL COLLECTION */}
      <Suspense fallback={<PawLoader />}>
        <ProductList products={products} t={t} />
        <SpecialCollection lang={lang} />
      </Suspense>
    </main>
  );
}
