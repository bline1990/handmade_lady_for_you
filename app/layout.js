import "./globals.css";
//import { Josefin_Sans, Roboto_Serif } from "next/font/google";

import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import PawLoader from "./_components/PawLoader";
import { Suspense } from "react";

export const metadata = {
  title: {
    template: "%s / Handmade by LadyForYou",
    default: "Welcome / Handmade by LadyForYou",
  },
  keywords: [
    "handmade",
    "ručno rađeni dodaci",
    "modni dodaci za pse",
    "unikatni pokloni",
  ],
  description:
    "Handmade Lady For You nudi unikatne ručno izrađene modne dodatke za pse — mašne, marame i gumice, izrađene s pažnjom i ljubavlju. Otkrijte personalizirane proizvode za vašeg ljubimca i podržite kreativni rad inspiriran kavalirkama Lady i Story.",
  type: "website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen pt-24">{children}</main>
        <Suspense falback={<PawLoader />}>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
