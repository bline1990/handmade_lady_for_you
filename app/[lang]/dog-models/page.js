import Image from "next/image";
import { Suspense } from "react";
import { getDogModelImages } from "@/app/_lib/data-service";
import PawLoader from "@/app/_components/PawLoader";
import LightBoxModel from "@/app/_components/LightBoxModel";
import DogModel from "@/app/_components/DogModel";
import { getTranslations } from "@/app/_lib/translations"; // tvoj helper za en/hr

export const metadata = {
  title: "Dog-Model",
  description:
    "Pseći modeli iz cijelog svijeta nose moje ručno izrađene dodatke, izrađene po mjeri i željama svakog vlasnika.",
};

export default async function Page({ params }) {
  // Ako Next.js vrati Promise za params (novije verzije)
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  const t = getTranslations(lang); // vraća prijevode
  const galleryImages = await getDogModelImages();

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-10">
      {/* UVODNI TEKST */}
      <section className="bg-[#E0DCD1] max-w-6xl w-full p-6 md:p-10 mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed">
          {t.dogModels.intro1}
        </p>
      </section>

      {/* GALERIJA */}
      <Suspense fallback={<PawLoader />}>
        <DogModel galleryImages={galleryImages} />
      </Suspense>

      <section className="bg-[#E0DCD1] max-w-6xl p-10 space-y-6">
        <p className="text-lg leading-relaxed text-gray-700">
          {t.dogModels.intro2}
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          {t.dogModels.intro3}
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          {t.dogModels.intro4}
        </p>
      </section>

      {/* BLOK SA JEDNOM SLIKOM */}
      <section className="rounded-xl overflow-hidden shadow-md">
        <Image
          src="/dog1.jpg"
          alt="Dog inspiration photo"
          width={1600}
          height={1000}
          className="w-full h-[450px] md:h-[450px] object-contain"
        />
      </section>

      {/* LIGHTBOX MODAL */}
      <Suspense fallback={<PawLoader />}>
        <LightBoxModel galleryImages={galleryImages} />
      </Suspense>
    </main>
  );
}
