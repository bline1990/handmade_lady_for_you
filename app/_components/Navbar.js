"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Dog models", href: "/dog-models" },
  { name: "Products", href: "/products" },
  { name: "Donations", href: "/donations" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Charles Cavaliers"
            width={90}
            height={90}
            className="cursor-pointer"
          />
        </Link>

        {/* DESKTOP MENI */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={`text-[17px] font-playfair transition-all duration-300 ${
                    isActive ? "text-[#2A1F14]" : "text-[#2A1F14]/80"
                  } hover:text-[#2A1F14]`}
                >
                  {link.name}
                </Link>
                <span
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isActive ? "opacity-100" : ""
                  }`}
                >
                  <Image src="/bow.svg" alt="bow" width={18} height={10} />
                </span>
              </li>
            );
          })}
        </ul>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENI */}
      {isOpen && (
        <ul className="flex flex-col md:hidden bg-white shadow-md w-full px-6 py-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block text-[17px] font-playfair transition-all duration-300 ${
                    isActive ? "text-[#2A1F14]" : "text-[#2A1F14]/80"
                  } hover:text-[#2A1F14]`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
