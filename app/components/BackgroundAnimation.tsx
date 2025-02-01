"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const PILL_COUNT = 20

interface Pill {
  id: number
  x: number
  y: number
  rotation: number
}

export default function BackgroundAnimation() {
  const [pills, setPills] = useState<Pill[]>([])

  useEffect(() => {
    const newPills = Array.from({ length: PILL_COUNT }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
    }))
    setPills(newPills)
  }, [])

  return (
    <div className="fixed inset-0 z-0 opacity-10">
      {pills.map((pill) => (
        <motion.div
          key={pill.id}
          className="absolute w-8 h-3 bg-blue-400 rounded-full"
          style={{
            left: `${pill.x}%`,
            top: `${pill.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            rotate: [pill.rotation, pill.rotation + 360],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  )
}

