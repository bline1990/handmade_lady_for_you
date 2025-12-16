import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import CookieBanner from "../_components/CookieBanner";
import PawLoader from "../_components/PawLoader";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { lang } = await params; // ⬅️ OVO JE KLJUČ

  const isHr = lang === "hr";

  return {
    title: "Handmade Lady For You",
    description: isHr
      ? "Ručni rad i unikatne mašne te modni dodaci, izrađeni s ljubavlju od pažljivo odabranih materijala."
      : "Handmade bows and fashion accessories made with love from carefully selected materials.",
    openGraph: {
      title: "Handmade Lady For You",
      description: isHr
        ? "Ručni rad i unikatne mašne te modni dodaci, izrađeni s ljubavlju od pažljivo odabranih materijala."
        : "Handmade bows and fashion accessories made with love from carefully selected materials.",
      images: [
        {
          url: "https://handmadeladyforyou.com/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Handmade Lady For You",
        },
      ],
    },
  };
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params; // ✅ KLJUČNA PROMJENA

  return (
    <>
      <Navbar lang={lang} />

      <main className="min-h-screen pt-24">{children}</main>

      <Suspense fallback={<PawLoader />}>
        <Footer lang={lang} />
      </Suspense>

      <CookieBanner />
    </>
  );
}
