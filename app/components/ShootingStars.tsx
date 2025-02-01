"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Star {
  id: number
  x: number
  y: number
  size: number
  duration: number
}

export default function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const createStar = () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 1 + 0.5,
    })

    const initialStars = Array.from({ length: 20 }, createStar)
    setStars(initialStars)

    const interval = setInterval(() => {
      setStars((prevStars) => [...prevStars.slice(1), createStar()])
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          initial={{ opacity: 1, scale: 0 }}
          animate={{
            opacity: [1, 0],
            scale: [0, 1],
            x: [0, -100],
            y: [0, 100],
          }}
          transition={{
            duration: star.duration,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

