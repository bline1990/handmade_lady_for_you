import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Donations",
};

export default function Page() {
  return (
    <main className="bg-[#E0DCD1] pb-20">
      {/* HERO */}
      <section className="relative h-[55vh] flex items-center justify-center bg-[#E0DCD1]">
        <div className="relative text-center px-6">
          <h1 className="text-2xl font-playfair italic text-[#2A1F14] drop-shadow mb-4">
            Mašne koje mijenjaju živote
          </h1>
          <p className="p-2 mx-auto text-[#3A2C20]/80 text-m">
            Tijekom godina sam podržala nekoliko hrvatskih skloništa malim
            gestama – darovala sam mašne i marame koje sam izradila s ljubavlju,
            a želja mi je nastaviti pomagati. Svaka mašna ili marama nije samo
            modni detalj, već mali doprinos velikoj promjeni u životima
            životinja koje čekaju svoju priliku za sreću i zauvijek dom. Naša
            misija je jednostavna:
            <span className="font-semibold text-[#2A1F14]">
              {" "}
              svaki pas zaslužuje ljubav, pažnju i priliku za dom.
            </span>{" "}
            Mašne pomažu pri fotografiranju, privlače pozornost i daju psima
            dodatnu dozu šarma — i vjerujte, to čini razliku. Mašne nisu samo
            simbol stila, već simbol nade. Kada pas zablista na fotografiji,
            lakše pronađe put do nečijeg srca i doma.
          </p>
        </div>
      </section>

      {/* GRID OF SHELTER STORIES */}
      <section className="max-w-6xl mx-auto px-6 mt-3 grid md:grid-cols-3 gap-12">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-100">
          <div className="relative w-full aspect-square">
            <Image
              src="/azil_udruga_sapa.jpg"
              alt="Šapa Spasa"
              fill
              className="object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#2A1F14] mb-2">
              Udruga “Šapa u srcu”
            </h3>
            <p className="text-[#2A1F14]/80 leading-relaxed">
              <br />
              Veseli me što sam za predivne njuškice u Ogulinu izradila mašne,
              uljepšala im dan i možda povećala mogućnost da ih potencijalni
              udomitelj uoči - i ne uspije im odoljeti u tako šarmantnom
              outfitu!
              <br />
              <br />
            </p>
            <div className="text-center mt-5 bg-[#9b7e3c] hover:bg-[#7d4b2e] text-white px-4 py-3 transition rounded-lg">
              <Link
                className="active:bg-[#6e5424] active:scale-95"
                href="https://www.instagram.com/udrugasapausrcu?igsh=NXNlZnI3c3hlZW94"
              >
                Šapa u srcu
              </Link>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-100">
          <div className="relative w-full aspect-square">
            <Image
              src="/donacije2.jpg"
              alt="Šapa u srcu"
              fill
              className="object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#2A1F14] mb-2">
              “Sigurna kućica”
            </h3>
            <p className="text-[#2A1F14]/80 leading-relaxed">
              <br />
              Pratim rad ovih divnih volontera pored Velike Gorice koji pomažu
              udomljavati nezbrinute životinje pa sam ih odlučila razveseliti
              donacijom mašni. Te predivne njuškice zaslužuju zablistati pred
              objektivom i ukrasti nečije srce.
            </p>
            <div className="active:bg-[#6e5424] active:scale-95 text-center mt-5 bg-[#9b7e3c] hover:bg-[#7d4b2e] text-white px-4 py-3 transition rounded-lg">
              <Link
                className="active:bg-[#6e5424] active:scale-95"
                href="https://www.instagram.com/udrugasapausrcu?igsh=NXNlZnI3c3hlZW94"
              >
                Sigurna kućica
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-amber-100">
          <div className="relative w-full aspect-square">
            <Image
              src="/azil2_osijek.jpg"
              alt="Azil Osijek - Udruga Pobjede"
              fill
              className="object-contain"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-[#2A1F14] mb-2">
              “Azil Osijek - Udruga Pobjede”
            </h3>
            <p className="text-[#2A1F14]/80 leading-relaxed">
              Uoči jednog Božića, dio mašni donirala sam preslatkim njuškicama u
              Osijeku kako bi u tom vremenu nade, bile i one dotjerane i možda
              zapele za oko nekom udomitelju - jer svaki pas zaslužuje topli
              zauvijek dom.
            </p>
            <div className="text-center mt-5 bg-[#9b7e3c] hover:bg-[#7d4b2e] text-white px-4 py-3 transition rounded-lg">
              <Link
                className="active:bg-[#6e5424] active:scale-95"
                href="https://www.instagram.com/azil.osijek.udruga.pobjede?igsh=NnBreHJhNGZ4Mmdk"
              >
                Azil Osijek - Udruga Pobjede
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL EMOTIONAL CLOSING */}
      <section className="max-w-4xl mx-auto px-6 text-center mt-24">
        <p className="p-2 mx-auto text-[#3A2C20]/80 text-m">
          Kada poklonimo mašnu psu koji čeka dom — ona postaje više od ukrasa.
          Ona postaje simbol ljubavi, brige i nove prilike za topliji dom.
        </p>
      </section>
    </main>
  );
}
