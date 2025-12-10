"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductList({ products }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const openLightbox = (img) => {
    setLightboxImage(img);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
  };

  return (
    <div>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl shadow-sm p-4 space-y-4 bg-white"
            onClick={() => openLightbox(product.image)}
          >
            <div className="cursor-pointer overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-64 object-cover transition duration-300 hover:scale-105"
              />
            </div>

            <h3 className="text-xl font-semibold">{product.name}</h3>

            <p className="text-gray-600">{product.description}</p>
            <div className="text-center w-full">
              <Link
                href={`/products/${product.id}`}
                className="block w-full bg-[#9b7e3c] text-white py-2 rounded-lg hover:bg-[#7d4b2e] transition active:bg-[#6e5424] active:scale-95"
              >
                Pošaljite upit
              </Link>
            </div>
          </div>
        ))}
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
            src={lightboxImage}
            alt="Pregled slike"
            width={1400}
            height={1400}
            className="max-w-[90%] max-h-[90%] object-contain"
          />
        </div>
      )}
    </div>
  );
}
