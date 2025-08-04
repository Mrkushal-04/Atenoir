"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface FloatingImageProps {
  src: string
  alt: string
}

export function FloatingImages({ images }: { images: FloatingImageProps[] }) {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    // Update dimensions only on client side
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full h-full">
      {images.map((image, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg overflow-hidden shadow-lg"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            opacity: 0.5,
            scale: 0.8,
          }}
          animate={{
            x: [Math.random() * dimensions.width, Math.random() * dimensions.width, Math.random() * dimensions.width],
            y: [
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
              Math.random() * dimensions.height,
            ],
            rotate: [0, Math.random() * 30 - 15, 0], // Slight rotation
            opacity: [0.5, 0.8, 0.5],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 25 + Math.random() * 15, // Longer duration for subtle movement
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            width={Number.parseInt(image.src.split("width=")[1]) || 150} // Extract width from URL or default
            height={Number.parseInt(image.src.split("height=")[1].split("&")[0]) || 150} // Extract height from URL or default
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  )
}
