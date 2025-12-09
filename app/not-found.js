import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F8F8] text-gray-800 p-6">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Stranica nije pronađena.</p>
      <Link
        href="/"
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Početna
      </Link>
      <p className="mt-8 text-sm text-gray-500">
        Web dizajn by <strong>MLOKI</strong>
      </p>
    </div>
  );
}
