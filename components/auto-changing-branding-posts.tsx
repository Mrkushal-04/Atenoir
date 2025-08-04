"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import type { BrandingPostData } from "@/lib/types"

interface AutoChangingBrandingPostsProps {
  posts: BrandingPostData[]
  interval?: number // Interval in milliseconds, default to 5000 (5 seconds)
}

export function AutoChangingBrandingPosts({ posts, interval = 5000 }: AutoChangingBrandingPostsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((prevIndex) => (prevIndex === posts.length - 1 ? 0 : prevIndex + 1)),
      interval,
    )

    return () => {
      resetTimeout()
    }
  }, [currentIndex, posts.length, interval])

  const currentPost = posts[currentIndex]

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="relative min-h-[400px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPost.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col md:flex-row items-center gap-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8"
          >
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{currentPost.title}</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{currentPost.description}</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src={currentPost.image || "/placeholder.svg"}
                alt={currentPost.title}
                width={500}
                height={500}
                className="rounded-lg shadow-xl border border-white/10 object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center mt-8 gap-2">
        {posts.map((_, idx) => (
          <button
            key={idx}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentIndex === idx ? "bg-lime-yellow-500 w-6" : "bg-gray-600"
            }`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to branding post ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
