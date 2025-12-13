import { getTranslations } from "@/app/_lib/translations";
import Image from "next/image";

export default async function Page({ params }) {
  const { lang } = await params; // hr/en
  const t = getTranslations(lang);

  return (
    <div className="pt-20 relative overflow-hidden">
      <section className="gap-4 max-w-6xl mx-auto pb-5 px-6 md:px-0 text-center bg-[#E0DCD1]">
        <h1 className="pt-6 text-2xl md:text-2xl italic font-playfair text-[#2A1F14] mb-4">
          {t.about.heroTitle}
        </h1>
        <p className="p-2 mx-auto text-[#3A2C20]/80 text-m">
          {t.about.heroText}
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-0 my-10 space-y-0">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#826829cb] p-8">
            <h2 className="pl-2 md:pl-6 text-3xl font-playfair text-white mb-4">
              {t.about.story1Title}
            </h2>
            <p className="pl-2 md:pl-6 text-white/80 leading-relaxed">
              {t.about.story1Text}
            </p>
          </div>
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

        <div className="flex flex-col md:flex-row-reverse">
          <div className="w-full md:w-1/2 flex flex-col justify-center bg-[#826829cb] p-8">
            <h2 className="pl-2 md:pl-6 text-3xl font-playfair text-white mb-4">
              {t.about.story2Title}
            </h2>
            <p className="pl-2 md:pl-6 text-white/80 leading-relaxed">
              {t.about.story2Text}
            </p>
          </div>
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
