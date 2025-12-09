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
  description:
    "Modni dodaci za pse,sve mašne su ručno izrađene od pažljivo odabranih materijala, savršene za svaki elegantan outfit.",
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
