"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import { getTranslations } from "../_lib/translations";

export default function SpecialCollection({ lang }) {
  const t = getTranslations(lang).specialCollection;
  const images = [
    "/hoodica1.jpeg",
    "/hoodica2.jpeg",
    "/hoodica3.jpeg",
    "/torba1.jpg",
    "/torba2.jpg",
    "/torba3.jpg",
    "/torba4.jpg",
  ];

  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      {/* Naslov */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-wide">
        {t.title}
      </h2>

      {/* Carousel */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative h-72 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setActiveImage(src)}
            >
              <Image
                src={src}
                alt={t.altText}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover sloj */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* FULLSCREEN LIGHTBOX */}
      {activeImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative w-[90%] max-w-4xl h-[80vh]">
            <Image
              src={activeImage}
              alt={t.lightboxAlt}
              fill
              className="object-contain"
              priority
            />
            {/* X gumb */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={() => setActiveImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
