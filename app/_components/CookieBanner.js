"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [accepted, setAccepted] = useState(true); // true = ne prikazuj dok ne provjerimo

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setAccepted(false); // tek tada prikaži banner
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-white border border-gray-300 shadow-lg p-5 rounded-xl max-w-lg w-full">
        <p className="text-gray-700 text-sm leading-relaxed">
          Koristimo kolačiće kako bismo poboljšali vaše korisničko iskustvo.
          Nastavkom korištenja stranice pristajete na upotrebu kolačića.
        </p>

        <button
          onClick={acceptCookies}
          className="mt-4 w-full bg-[#9b7e3c] text-white py-2 rounded-lg hover:bg-[#7d4b2e] transition"
        >
          Prihvaćam
        </button>
      </div>
    </div>
  );
}
