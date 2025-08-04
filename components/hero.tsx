"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ShoppingBag, Sparkles } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center justify-center overflow-hidden">
      {/* Single background image */}
      <Image
        src="/images/atenoir-boutique.jpeg"
        alt="Atenoir Boutique Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-0" /> {/* Overlay for readability */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Discover Timeless Style with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-yellow-400 to-light-gold-600">
              {" "}
              Atenoir
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-200 text-xl mb-8 max-w-2xl mx-auto"
          >
            Explore our exclusive collections of modern and elegant apparel, crafted for the discerning individual.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black px-8">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Shop New Arrivals
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-lime-yellow-500 hover:bg-lime-yellow-500/20"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Explore Collections
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
