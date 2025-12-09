import Image from "next/image";
import Link from "next/link";

export default function DogInfoSection() {
  return (
    <section className="flex flex-col  md:flex-row mx-auto my-20 px-6 md:px-0 text-center">
      {/* TEXT LEFT / TOP ON MOBILE */}
      <div className="w-full md:w-1/2 bg-[#826829cb] place-items-center p-8 flex flex-col justify-center">
        <h2 className="text-3xl text-center font-playfair mb-4 text-[#ffff]">
          WHO WE ARE
        </h2>
        <p className="text-[#ffff]">
          Sve je započelo iz velike ljubavi prema mojoj kavalirki Lady. Toliko
          sam uživala fotografirati je, snimati i dijeliti njezine svakodnevne
          dogodovštine da sam 2022. godine otvorila njezin vlastiti Instagram
          profil. Kroz tu avanturu upoznala sam divnu zajednicu vlasnika
          Cavalier King Charles Spaniela diljem Europe i Svijeta, a iz brojnih
          online poznanstava nastala su i prava prijateljstva.
        </p>

        {/* BUTTON */}
        <Link
          href="/about"
          className="mt-8 inline-block border-2 text-white py-3 px-6 rounded-md hover:bg-[#826829cb] transition w-fit"
        >
          SAZNAJTE VIŠE O NAMA
        </Link>
      </div>

      {/* IMAGE RIGHT / BOTTOM ON MOBILE */}
      <div className="w-full md:w-1/2">
        <Image
          src="/home1.jpg"
          alt="Cavalier King Charles"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
