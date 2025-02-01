"use client"

import { motion } from "framer-motion"
import { Clock, Bell, BarChart3 } from "lucide-react"

const features = [
  {
    icon: Clock,
    title: "Smart Reminders",
    description: "Get timely notifications for your medication schedule.",
  },
  {
    icon: Bell,
    title: "Customizable Alerts",
    description: "Set up personalized alerts that fit your lifestyle.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking",
    description: "Monitor your medication adherence with detailed insights.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-md bg-white/10 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <feature.icon className="w-12 h-12 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

