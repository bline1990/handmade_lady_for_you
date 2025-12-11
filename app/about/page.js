import Image from "next/image";

export const metadata = {
  title: "About",
  description:
    "Saznajte priču o ručno izrađenim modnim dodacima za pse inspiriranim kavalirkama Lady i Story. Otkrivamo kako je ljubav prema psima pokrenula kreativni proces, darivanje skloništima i stvaranje personaliziranih proizvoda s pažnjom i ljubavlju",
};

export default async function Page() {
  return (
    <div className="pt-20 relative overflow-hidden">
      {/* 🐾 HERO SECTION */}
      <section className="gap-4 max-w-7xl mx-auto px-6 md:px-0 text-center bg-[#E0DCD1]">
        <h1 className="pt-6 text-2xl md:text-2xl italic font-playfair text-[#2A1F14] mb-4">
          Kad ljubav prema psima postane inspiracija za stvaranje
        </h1>
        <p className="p-2 mx-auto text-[#3A2C20]/80 text-m">
          Sve je započelo iz velike ljubavi prema mojoj kavalirki Lady. Toliko
          sam uživala fotografirati je, snimati i dijeliti njezine svakodnevne
          dogodovštine da sam 2022. godine otvorila njezin vlastiti Instagram
          profil. Kroz tu avanturu upoznala sam divnu zajednicu vlasnika
          cavalier king charles spaniela diljem Europe i Svijeta, a iz brojnih
          online poznanstava nastala su i prava prijateljstva. S vremenom je
          Lady postala mala modna influenserica. Inspirirana predivnim modnim
          dodacima za pse koji se izrađuju širom svijeta — posebno mašnama,
          maramama i gumicama, koje se u Hrvatskoj još uvijek rjeđe viđaju —
          poželjela sam upravo takve proizvode donijeti i ovdje. Satima sam
          gledala YouTube tutorijale, učila tehnike šivanja, ali i rad s vrućim
          ljepilom i pištoljem, te sve male trikove koji pomažu da svaki detalj
          bude uredan, čvrst i estetski besprijekoran. Istovremeno sam
          istraživala gdje nabaviti kvalitetne materijale i moderne, trendi
          uzorke. Nakon ulaganja u opremu, potpuno sam se prepustila kreativnom
          procesu — i zaljubila se u njega.
        </p>

        {/* SLIDER / HERO IMAGE */}
        <div className="p-4 mt-10 relative flex justify-center">
          <Image
            src="/Story,Lady,About us,Mašne.JPG"
            alt="Charles Cavalier"
            width={600}
            height={600}
            className="rounded-3xl shadow-xl object-cover"
            priority
          />
        </div>
      </section>

      {/* ⭐ STORY SECTION */}
      {/* ⭐ STORY SECTION */}
      <section className="max-w-6xl mx-auto px-0 my-10 space-y-0">
        {/* BLOK 1 */}
        <div className="flex flex-col md:flex-row">
          {/* TEXT – lijevo na desktop, gore na mobile */}
          <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#826829cb] p-8">
            <h2 className="pl-2 md:pl-6 text-3xl font-playfair text-white mb-4">
              Priča koja je sve pokrenula
            </h2>
            <p className="pl-2 md:pl-6 text-white/80 leading-relaxed">
              Posebno me ispunjavalo vidjeti pse koji nose nešto što sam
              izradila vlastitim rukama, s puno pažnje i ljubavi. Velik dio
              mašni donirala sam i našim skloništima, kako bi i njihovi
              štićenici zasjali u nešto novo i lijepo — o tome možete više
              pročitati u sekciji Donacije. U tom periodu prijateljica mi je
              izradila logo inspiriran upravo Lady, prema nazivu — ladyforyou.
            </p>
          </div>

          {/* IMAGE – desno na desktop, dolje na mobile */}
          <div className="w-full md:w-1/2 h-[350px] md:h-[450px]">
            <Image
              src="/insta12.jpg"
              alt="Dog bows"
              width={600}
              height={450}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>

        {/* BLOK 2 – OBRNUT SAMO NA DESKTOPU */}
        <div className="flex flex-col md:flex-row-reverse">
          {/* TEXT – desno na desktop, gore na mobile */}
          <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#826829cb] p-8">
            <h2 className="pl-2 md:pl-6 text-3xl font-playfair text-white mb-4">
              S vremenom je narasla i naša mala obitelj
            </h2>
            <p className="pl-2 md:pl-6 text-white/80 leading-relaxed">
              Pridružila nam se još jedna kavalirka — Story. Danas smo pravi
              trio koji svakodnevno unosi radost, inspiraciju i nove ideje u sve
              što stvaramo. Svaki proizvod izrađujem s ljubavlju i željom da vaš
              ljubimac izgleda i osjeća se posebno.
            </p>
          </div>

          {/* IMAGE – lijevo na desktop, dolje na mobile */}
          <div className="w-full md:w-1/2 h-[350px] md:h-[450px]">
            <Image
              src="/story1.JPEG"
              alt="Dog story"
              width={600}
              height={450}
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
