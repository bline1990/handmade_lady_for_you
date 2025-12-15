import Image from "next/image";
import { sendMessage } from "@/app/actions/sendMessage";
import { getProduct } from "@/app/_lib/data-service";
import en from "@/locales/en.json";
import hr from "@/locales/hr.json";

const translations = { en, hr };

export const runtime = "nodejs";

export default async function ProductPage({ params }) {
  // ✅ OBAVEZNO
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "en";
  const productId = resolvedParams?.productId;

  if (!productId) {
    return <p className="text-center py-20">Invalid product</p>;
  }

  const tRaw = translations[lang] || translations.en;
  const t = tRaw?.product || {};

  let product;
  try {
    product = await getProduct(productId);
  } catch (err) {
    console.error("Supabase getProduct error:", err);
  }

  if (!product) {
    return <p className="text-center py-20">Product not found</p>;
  }

  // ✅ prijevod proizvoda po ID-u
  const translatedProduct = tRaw?.products?.items?.[productId] ?? product;

  return (
    <main className="min-h-screen bg-[#E0DCD1] px-6 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {product.image && (
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
            <Image
              src={product.image}
              alt={translatedProduct.name}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl mb-4">
            {translatedProduct.name}
          </h1>

          <p className="text-gray-700 mb-8">{translatedProduct.description}</p>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{t.contactTitle}</h2>

            <form action={sendMessage} className="flex flex-col gap-4">
              <input name="name" placeholder={t.name} required />
              <input name="email" type="email" placeholder={t.email} required />
              <textarea name="message" placeholder={t.message} required />
              <button type="submit">{t.send}</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
