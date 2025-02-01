"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  return (
    <header className="fixed w-full z-50 bg-black/80 backdrop-blur-3xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-500">
          Pill-Buddy
        </Link>

        <div className="flex justify-end items-center gap-6">
          <Link href={"https://github.com/AmithBV0606/Pill-Buddy"} target="_blank">
            <button className="bg-gray-800/40 px-6 py-3 rounded-xl flex items-center gap-3 border-2 border-blue-500/80 hover:bg-gray-800/90">
              <Github />

              <span>GitHub</span>
            </button>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-6">
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
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu size={40}/>}
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
                href={"https://x.com/AmithBV0606"}
                className="hover:text-blue-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
                target="_blank"
              >
                Twitter
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
