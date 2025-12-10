import { Suspense } from "react";
import ProductList from "../_components/ProductList";
import PawLoader from "../_components/PawLoader";
import { getProducts } from "../_lib/data-service";
import SpecialCollection from "../_components/SpecialCollection";

export const metadata = {
  title: "Products",
};

export default async function MasnePage() {
  const products = await getProducts();

  return (
    <main className="max-w-6xl mx-auto mt-10 px-6 py-10 space-y-15">
      {/* Uvod */}
      <section className=" bg-[#E0DCD1] max-w-6xl p-10 text-left space-y-4 mx-auto">
        <p className="text-gray-700 text-lg leading-relaxed">
          Sve mašne izrađene su od pažljivo odabranih materijala, naručenih u
          Pamigo Fabrics Croatia. Ispod svakog uzorka prikazan je njegov naziv i
          sastav, kako biste lako mogli odabrati ono što vam najviše odgovara.
          Mašne dolaze u tri veličine: mala: 5 × 9 inča, srednja: 7 × 11 inča,
          velika: 9 × 13 inča. Trenutno su dostupne samo obične, “regular”
          mašne, savršene za svaki elegantan outfit. Proizvodi su dostupni na
          upit — nakon što pošaljete zahtjev, povratno ćemo vam se javiti s
          informacijama o izradi i dostupnosti. ✨
        </p>
      </section>
      <Suspense fallback={<PawLoader />}>
        <ProductList products={products} />
        <SpecialCollection />
      </Suspense>
    </main>
  );
}
