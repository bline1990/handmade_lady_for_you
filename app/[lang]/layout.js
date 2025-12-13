import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";
import CookieBanner from "../_components/CookieBanner";
import PawLoader from "../_components/PawLoader";
import { Suspense } from "react";

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
