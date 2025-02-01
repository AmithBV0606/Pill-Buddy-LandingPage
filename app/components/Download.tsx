"use client";

import { motion } from "framer-motion";
import { DownloadIcon } from "lucide-react";

export default function Download() {
  return (
    <section id="download" className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Take Control?
        </h2>

        <p className="text-base md:text-xl mb-8 text-gray-300 text-left md:text-justify leading-6 md:leading-loose">
          Download Pill-Buddy now and start managing your medications with ease.
          Download Pill-Buddy today and take control of your medication schedule
          effortlessly. This app helps you track your doses and set reminders,
          ensuring you never miss a pill. Stay organized with a simple and
          user-friendly interface. Experience stress-free medication management
          with just a few taps. Start using Pill-Buddy now for a healthier
          routine!
        </p>

        <motion.a
          href="/application-78d9b275-1be2-4063-aefc-8b973003998e.apk"
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
  );
}
