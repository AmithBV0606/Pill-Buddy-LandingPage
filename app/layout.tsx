import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Pill-Buddy - Your Personal Medicine Tracker",
  description: "Manage your medications with ease using Pill-Buddy, the smart medicine tracker app.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  )
}

