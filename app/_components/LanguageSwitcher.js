"use client";

import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();

  const setLang = (lang) => {
    document.cookie = `lang=${lang}; path=/`;
    router.refresh(); // natjera server da ponovo rendera stranicu
  };

  return (
    <div className="flex gap-2 ml-4">
      <button
        onClick={() => setLang("hr")}
        className="text-sm font-medium hover:underline"
      >
        HR
      </button>
      <span>/</span>
      <button
        onClick={() => setLang("en")}
        className="text-sm font-medium hover:underline"
      >
        EN
      </button>
    </div>
  );
}
