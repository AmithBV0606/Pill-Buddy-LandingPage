import Link from "next/link";

export default function Footer() {
  return (
    <footer className="inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 z-0 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-blue-500">
              Pill-Buddy
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-16">
              <li>
                <Link
                  href="https://x.com/AmithBV0606"
                  className="text-gray-400 hover:text-white hover:underline transition-colors"
                  target="_blank"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/AmithBV0606/Pill-Buddy"
                  className="text-gray-400 hover:text-white hover:underline transition-colors"
                  target="_blank"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Pill-Buddy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
