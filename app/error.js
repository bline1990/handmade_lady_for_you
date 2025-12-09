"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F8F8] text-gray-800 p-6">
      <h1 className="text-5xl font-bold mb-4">Oops!</h1>
      <p className="text-lg mb-6">
        Došlo je do pogreške. Pokušaj ponovno ili se vrati na početnu stranicu.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Pokušaj ponovno
        </button>
        <Link
          href="/"
          className="px-6 py-2 border border-black rounded-lg hover:bg-black hover:text-white transition"
        >
          Početna
        </Link>
      </div>
      <p className="mt-8 text-sm text-gray-500">
        Web dizajn by <strong>MLOKI</strong>
      </p>
    </div>
  );
}
