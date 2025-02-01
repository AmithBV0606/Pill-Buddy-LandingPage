"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Hero() {
  const router = useRouter();
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:gap-40">
        <motion.div
          className="md:w-1/2 mb-8 md:mb-0 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Personal <span className="text-blue-500">Medicine Tracker</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Never miss a dose again. Pill-Buddy helps you manage your medications with ease and precision.
          </p>
          <motion.button
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => router.push("#features")}
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/Pill-Buddy.png"
            alt="Pill-Buddy App"
            width={500}
            height={500}
            className="rounded-full shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  )
}

