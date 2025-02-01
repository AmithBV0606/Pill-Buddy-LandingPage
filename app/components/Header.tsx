"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-3xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500">
          Pill-Buddy
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {["Features", "Download"].map((item) => (
              <li key={item}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-blue-500 hover:underline transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-0 h-screen flex items-center justify-center">
          <ul className="flex flex-col items-center gap-6 py-4">
            <li className="py-2">
              <Link
                href={"#features"}
                className="hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
            </li>

            <li className="py-2">
              <Link
                href={"#download"}
                className="hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Download
              </Link>
            </li>

            <li className="py-2">
              <Link
                href={"https://github.com/AmithBV0606"}
                className="hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
