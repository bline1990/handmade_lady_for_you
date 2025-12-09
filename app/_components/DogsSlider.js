"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function DogsSlider() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <h2 className="text-center text-2xl md:text-3xl italic mb-10">
        My dogs, my inspiration
      </h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 2500 }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={3}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Image
            src="/insta5.jpeg"
            alt="Dog 1"
            width={1200}
            height={800}
            className="w-full h-[400px] object-contain"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Image
            src="/insta6.jpeg"
            alt="Dog 2"
            width={1200}
            height={800}
            className="w-full h-[400px] object-contain"
          />
        </SwiperSlide>
        {/* slide 3*/}
        <SwiperSlide>
          <Image
            src="/insta4.jpeg"
            alt="Dog 2"
            width={1200}
            height={800}
            className="w-full h-[400px] object-contain"
          />
        </SwiperSlide>
        {/* slide 4*/}
        <SwiperSlide>
          <Image
            src="/insta7.jpeg"
            alt="Dog 2"
            width={1200}
            height={800}
            className="w-full h-[400px] object-contain"
          />
        </SwiperSlide>
        {/* slide 5*/}
        <SwiperSlide>
          <Image
            src="/slide5.jpg"
            alt="Dog 2"
            width={1200}
            height={800}
            className="w-full h-[400px] object-contain"
          />
        </SwiperSlide>
        {/* slide 6*/}
        <SwiperSlide>
          <Image
            src="/slide9.jpg"
            alt="Dog 2"
            width={1200}
            height={800}
            className="w-full h-[400px] object-contain"
          />
        </SwiperSlide>

        {/* Slide 7 */}
        <SwiperSlide>
          <Image
            src="/slide7.jpg"
            alt="Dog 3"
            width={1200}
            height={800}
            className="w-full h-[400px] object-contain"
          />
        </SwiperSlide>

        {/* slide 8*/}
        <SwiperSlide>
          <Image
            src="/insta8.jpeg"
            alt="Dog 2"
            width={1200}
            height={800}
            className="w-full h-[400px] object-contain"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
