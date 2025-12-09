"use client";

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
  const pathname = usePathname();

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/logo.png" // stavi tvoj logo ovdje
            alt="Charles Cavaliers"
            width={90}
            height={90}
            className="cursor-pointer"
          />
        </Link>

        {/* MENI */}
        <ul className="flex items-center gap-8">
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

                {/* MAŠNA EFEKT */}
                <span
                  className={`
    absolute left-1/2 -translate-x-1/2 top-full mt-1
    opacity-0 group-hover:opacity-100 transition-opacity duration-300
    ${isActive ? "opacity-100" : ""}
  `}
                >
                  <Image src="/bow.svg" alt="bow" width={18} height={10} />
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
