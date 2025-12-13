import Image from "next/image";
import { getTranslations } from "@/app/_lib/translations";
import { sendMessage } from "@/app/actions/sendMessage";
import { getProduct } from "@/app/_lib/data-service";

export default async function ProductPage({ params }) {
  const { lang, productId } = await params;
  const t = (await getTranslations(lang)).product;
  const product = await getProduct(productId);

  return (
    <main className="min-h-screen bg-[#E0DCD1] px-6 py-20">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* IMAGE */}
        <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        {/* INFO */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-playfair mb-4">
            {product.name}
          </h1>
          <p className="text-gray-700 mb-8">{product.description}</p>

          {/* CONTACT FORM */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{t.contactTitle}</h2>
            <p className="text-gray-600 mb-4">{t.contactText}</p>

            <form action={sendMessage} className="flex flex-col gap-4">
              <input
                name="name"
                placeholder={t.name}
                required
                className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#826829cb]"
              />

              <input
                name="email"
                type="email"
                placeholder={t.email}
                required
                className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#826829cb]"
              />

              <textarea
                name="message"
                placeholder={t.message}
                rows={4}
                required
                className="border p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#826829cb]"
              />

              <button
                type="submit"
                className="bg-[#826829cb] text-white py-3 rounded-md font-semibold hover:bg-[#6e5424] active:scale-95 transition"
              >
                {t.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
