import Link from "next/link"

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
            <ul className="flex space-x-6">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pill-Buddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

