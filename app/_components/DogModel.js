"use client";
import Image from "next/image";
import { useState } from "react";

export default function DogModel({ galleryImages }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };
  return (
    <>
      <section className="space-y-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-sm"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={img}
                alt={`Dog model ${index + 1}`}
                width={800}
                height={800}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </section>
      ;
    </>
  );
}
