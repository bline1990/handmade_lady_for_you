"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ currentLang }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (lang) => {
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => switchLanguage("hr")}
        className={`px-2 py-1 rounded ${
          currentLang === "hr"
            ? "bg-[#2A1F14] text-white font-semibold"
            : "text-[#2A1F14]/80 hover:text-[#2A1F14]"
        }`}
      >
        HR
      </button>
      <span className="text-[#2A1F14]/50">/</span>
      <button
        onClick={() => switchLanguage("en")}
        className={`px-2 py-1 rounded ${
          currentLang === "en"
            ? "bg-[#2A1F14] text-white font-semibold"
            : "text-[#2A1F14]/80 hover:text-[#2A1F14]"
        }`}
      >
        EN
      </button>
    </div>
  );
}
