"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DogsSlider() {
  return (
    <section className="py-12 md:py-16 px-0 md:px-6 max-w-5xl mx-auto">
      <h2 className="text-center text-2xl md:text-3xl italic mb-8 md:mb-10">
        My dogs, my inspiration
      </h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 2500 }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={16}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {[
          "/insta5.jpeg",
          "/insta6.jpeg",
          "/insta4.jpeg",
          "/insta7.jpeg",
          "/slide5.jpg",
          "/slide9.jpg",
          "/slide7.jpg",
          "/insta8.jpeg",
        ].map((img, index) => (
          <SwiperSlide key={index}>
            <Image
              src={img}
              alt={`Dog ${index + 1}`}
              width={1200}
              height={800}
              className="
                w-full 
                h-80 
                md:h-[400px] 
                object-contain
              "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
