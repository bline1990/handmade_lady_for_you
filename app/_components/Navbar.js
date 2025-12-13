"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Dog models", href: "/dog-models" },
  { name: "Products", href: "/products" },
  { name: "Donations", href: "/donations" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ lang }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const localizedHref = (href) =>
    href === "/" ? `/${lang}` : `/${lang}${href}`;

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href={`/${lang}`}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={90}
            height={90}
            className="cursor-pointer"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === localizedHref(link.href);
            return (
              <li key={link.name} className="relative group">
                <Link
                  href={localizedHref(link.href)}
                  className={`text-[17px] font-playfair transition-all duration-300 ${
                    isActive ? "text-[#2A1F14]" : "text-[#2A1F14]/80"
                  } hover:text-[#2A1F14]`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li>
            <LanguageSwitcher currentLang={lang} />
          </li>
        </ul>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="flex flex-col gap-4 bg-white shadow-md p-4 mt-2 md:hidden max-w-[90%] mx-auto rounded">
          {navLinks.map((link) => {
            const isActive = pathname === localizedHref(link.href);
            return (
              <li key={link.name}>
                <Link
                  href={localizedHref(link.href)}
                  className={`block text-[17px] font-playfair transition-all duration-300 ${
                    isActive ? "text-[#2A1F14]" : "text-[#2A1F14]/80"
                  } hover:text-[#2A1F14]`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <li>
            <LanguageSwitcher currentLang={lang} />
          </li>
        </ul>
      )}
    </nav>
  );
}
