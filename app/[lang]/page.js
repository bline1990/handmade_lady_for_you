import DogInfoSection from "../_components/DogInfoSection";
import DogsSlider from "../_components/DogsSlider";
import DualCardsSection from "../_components/DualCardsSection";
import FeaturedProducts from "../_components/FeaturedProducts";
import Hero from "../_components/Hero";
import InstagramFeed from "../_components/InstagramFeed";
import VideoBanner from "../_components/VideoBanner";
import { getTranslations } from "../_lib/translations";

export default async function Page({ params }) {
  const { lang } = await params;
  const t = getTranslations(lang);
  return (
    <div className="min-h-screen md:pt-15 pt-3 px-6 bg-[#F3E9D7]/10 text-[#2A1F14]">
      <Hero t={t.hero} lang={lang} />
      <DogInfoSection t={t.dogInfo} lang={lang} />
      <FeaturedProducts t={t.featuredProducts} lang={lang} />
      <VideoBanner />
      <DualCardsSection t={t.dualCards} lang={lang} />
      <DogsSlider />
      <InstagramFeed t={t.instagram} />
    </div>
  );
}
