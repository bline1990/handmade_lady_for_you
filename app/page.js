import Hero from "./_components/Hero";
import VideoBanner from "./_components/VideoBanner";
import DogInfoSection from "./_components/DogInfoSection";
import FeaturedProducts from "./_components/FeaturedProducts";
import InstagramFeed from "./_components/InstagramFeed";
import DualCardsSection from "./_components/DualCardsSection";
import DogsSlider from "./_components/DogsSlider";

export default function Page() {
  return (
    <div className="min-h-screen md:pt-15 pt-3 px-6 bg-[#F3E9D7]/10 text-[#2A1F14]">
      <Hero />
      <DogInfoSection />
      <FeaturedProducts />
      <VideoBanner />
      <DualCardsSection />
      <DogsSlider />
      <InstagramFeed />
    </div>
  );
}
