import Image from "next/image";
import DogModel from "../_components/DogModel";
import LightBoxModel from "../_components/LightBoxModel";
import { Suspense } from "react";
import PawLoader from "../_components/PawLoader";
import { getDogModelImages } from "../_lib/data-service";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const metadata = {
  title: "Dog-Model",
};

export default async function Page() {
  const galleryImages = await getDogModelImages();
  console.log(galleryImages);

  return (
    <main className="max-w-6xl mx-auto px-6 py-20 space-y-10">
      {/* Uvodni tekst */}
      <section className="bg-[#E0DCD1] max-w-6xl w-full p-6 md:p-10 mx-auto">
        <p className="text-lg text-gray-700 leading-relaxed">
          Najveća mi je radost što danas imam toliko različitih psećih modela
          diljem svijeta – od Amerike i Australije pa sve do Europe i moje
          Hrvatske – koji s ponosom nose moj rad. Svaki put kad vidim
          fotografiju psa u nekom od mojih proizvoda, sretna sam i to mi je
          motivacija za dalje. Baš zato svaki komad izrađujem potpuno
          individualno, s pažnjom i razumijevanjem da ni jedan pas ni jedan
          vlasnik nisu isti. Svaki ima svoje želje, mjere i male posebnosti, a
          ja sam tu da ih saslušam i ispunim.
        </p>
      </section>

      {/* Galerija */}
      <Suspense fallback={<PawLoader />}>
        <DogModel galleryImages={galleryImages} />
      </Suspense>

      <section className="bg-[#E0DCD1] max-w-6xl p-10 space-y-6">
        <p className="text-lg leading-relaxed text-gray-700">
          Uvijek se trudim dati maksimum kako bi svaki proizvod bio što ljepši,
          udobniji i savršeno uklopljen, a rado pomažem savjetima oko idealne
          veličine ili izbora detalja.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          Iako su moji prvi kupci uglavnom bili stranci koji su me otkrili preko
          bloga
          <strong> @lady_the_cav_dog</strong> koji okuplja preko 11 tisuća
          pratitelja, danas se polako širimo i u Hrvatskoj, gdje s veseljem
          nudim nešto drukčije.Za moje radove otvorila sam poseban profil na
          instagramu <strong>@handmade_by_ladyforyou</strong> koji okuplja preko{" "}
          <strong>1000</strong> ljubitelja modnih dodataka za ljubimce.
        </p>

        <p className="text-lg leading-relaxed text-gray-700">
          A najveća inspiracija u svemu tome su mi moje dvije kavalirke, koje me
          svakodnevno potiču na stvaranje.
        </p>
      </section>

      {/* BLOK 4 – Jedna slika */}
      <section className="rounded-xl overflow-hidden shadow-md">
        <Image
          src="/dog1.jpg"
          alt="Dog inspiration photo"
          width={1600}
          height={1000}
          className="w-full h-[450px] md:h-[450px] object-contain"
        />
      </section>

      {/* Lightbox modal */}
      <Suspense fallback={<PawLoader />}>
        <LightBoxModel galleryImages={galleryImages} />
      </Suspense>
    </main>
  );
}
