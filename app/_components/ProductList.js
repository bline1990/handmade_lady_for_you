"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductList({ products = [], t = {}, lang = "en" }) {
  // Siguran array proizvoda
  const safeProducts = Array.isArray(products) ? products : [];
  // Sigurni prijevodi proizvoda
  const productTranslations =
    t?.products?.items && typeof t.products.items === "object"
      ? t.products.items
      : {};
  // Siguran tekst gumba
  const buttonText = t?.products?.buttonText ?? "Buy";

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const openLightbox = (img) => {
    if (img) {
      setLightboxImage(img);
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
  };

  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {safeProducts.length > 0 ? (
          safeProducts.map((product) => {
            const translation = productTranslations[product.id] ?? product;

            // Fallback polja
            const name = translation.name ?? "Unnamed product";
            const description =
              translation.description ?? "No description available";
            const image = product.image ?? "/gif3.gif";
            const id = product.id ?? Math.random();

            return (
              <div
                key={id}
                className="border rounded-xl shadow-sm p-4 space-y-4 bg-white cursor-pointer"
                onClick={() => openLightbox(image)}
              >
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src={image}
                    alt={name}
                    width={600}
                    height={600}
                    className="w-full h-64 object-cover transition duration-300 hover:scale-105"
                  />
                </div>

                <h3 className="text-xl font-semibold">{name}</h3>
                <p className="text-gray-600">{description}</p>

                <div className="text-center w-full">
                  <Link
                    href={`/${lang}/products/${id}`}
                    className="block w-full bg-[#9b7e3c] text-white py-2 rounded-lg hover:bg-[#7d4b2e] transition active:bg-[#6e5424] active:scale-95"
                  >
                    {buttonText}
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center text-gray-500">No products available</p>
        )}
      </section>

      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white text-3xl"
          >
            ×
          </button>

          <Image
            src={lightboxImage ?? "/placeholder.png"}
            alt="Preview"
            width={1400}
            height={1400}
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </div>
      )}
    </div>
  );
}
