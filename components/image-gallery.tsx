"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface ImageGalleryProps {
  images: string[]
  alt: string
}

export function ImageGallery({ images, alt }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Main Image */}
      <div className="relative w-full lg:w-3/4 h-[500px] rounded-lg overflow-hidden border border-white/10 shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt={alt}
              layout="fill"
              objectFit="cover"
              unoptimized={true}
              className="rounded-lg"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Thumbnails */}
      <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-y-auto lg:w-1/4">
        {images.map((image, index) => (
          <motion.button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
              selectedImage === image ? "border-lime-yellow-500" : "border-white/10 hover:border-white/30"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${alt} thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
              unoptimized={true}
              className="rounded-md"
            />
          </motion.button>
        ))}
      </div>
    </div>
  )
}
