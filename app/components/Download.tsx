"use client"

import { motion } from "framer-motion"
import { DownloadIcon } from "lucide-react"

export default function Download() {
  return (
    <section id="download" className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control?</h2>
        <p className="text-xl mb-8 text-gray-300">
          Download Pill-Buddy now and start managing your medications with ease.
        </p>
        <motion.a
          href="/pill-buddy.apk"
          download
          className="inline-flex items-center bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <DownloadIcon className="mr-2" />
          Download APK
        </motion.a>
      </div>
    </section>
  )
}

