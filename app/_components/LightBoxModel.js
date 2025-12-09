"use client";
import Image from "next/image";
import { useState } from "react";

export default function LightBoxModel() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (currentIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };
  return (
    <>
      {/* Ovo je fallback/placeholder ili empty div ako želiš */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <button
            className="absolute top-5 right-5 text-white text-3xl font-bold"
            onClick={closeLightbox}
          >
            ×
          </button>

          <button
            className="absolute left-5 text-white text-4xl font-bold"
            onClick={prevImage}
          >
            ‹
          </button>
          <button
            className="absolute right-5 text-white text-4xl font-bold"
            onClick={nextImage}
          >
            ›
          </button>

          <div className="max-w-[90%] max-h-[90%] flex items-center justify-center">
            <Image
              src={galleryImages[currentIndex]}
              alt={`Dog model ${currentIndex + 1}`}
              width={1200}
              height={1200}
              className="object-contain max-h-full max-w-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
