"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Star, Camera, Award } from "lucide-react"
import { ProductSection } from "@/components/product-section"

const celebrityProducts = [
  { id: "1", name: "Red Carpet Gown", price: 950, image: "/images/red-gown.jpeg", description: "Stunning gown for red carpet events.", category: "Women" },
  { id: "2", name: "Premier Tuxedo", price: 990, image: "/images/tuxedo.jpeg", description: "Elegant tuxedo for special occasions.", category: "Men" },
  { id: "3", name: "Statement Blouse", price: 420, image: "/images/blouse.jpeg", description: "Blouse that makes a statement.", category: "Women" },
  { id: "4", name: "Gala Dress", price: 870, image: "/images/gala-dress.jpeg", description: "Dress for gala nights.", category: "Women" },
  { id: "5", name: "Celebrity Suit", price: 800, image: "/images/celebrity-suit.jpeg", description: "Suit worn by celebrities.", category: "Men" },
  { id: "6", name: "Premiere Heels", price: 350, image: "/images/heels.jpeg", description: "Heels for the premiere night.", category: "Women" },
  { id: "7", name: "Designer Clutch", price: 300, image: "/images/clutch.jpeg", description: "Designer clutch for essentials.", category: "Accessories" },
  { id: "8", name: "Starlet Earrings", price: 250, image: "/images/earrings.jpeg", description: "Earrings for a starlet look.", category: "Accessories" },
  { id: "9", name: "Showstopper Cape", price: 600, image: "/images/cape.jpeg", description: "Cape that steals the show.", category: "Women" },
  { id: "10", name: "Award Night Dress", price: 980, image: "/images/award-dress.jpeg", description: "Dress for award nights.", category: "Women" },
  { id: "11", name: "Iconic Blazer", price: 700, image: "/images/iconic-blazer.jpeg", description: "Blazer with iconic style.", category: "Men" },
  { id: "12", name: "Spotlight Sandals", price: 220, image: "/images/sandals.jpeg", description: "Sandals for the spotlight.", category: "Accessories" },
]

export default function CelebrityCollectionPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <div className="p-6">
        <Link
          href="/collections"
          className="inline-flex items-center text-lime-yellow hover:text-lime-yellow/80 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Collections
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/atenoir-rack-black.jpeg" alt="Celebrity Collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-pink-900/60 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 max-w-2xl mx-auto px-6 text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center mb-4"
          >
            <Star className="h-8 w-8 text-purple-300 mr-3" />
            <span className="text-purple-300 font-medium">Celebrity Styles</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Red Carpet
            <span className="block text-lime-yellow">Ready</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-96"
          >
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-lime-yellow text-black hover:bg-lime-yellow/90 font-semibold">
              Shop Collection
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Celebrity Gallery
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Collection Features */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Star Quality</h2>
            <p className="text-xl text-gray-400">Designed for the spotlight</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Camera className="h-8 w-8" />,
                title: "Camera Ready",
                description: "Designs that photograph beautifully under any light",
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Award Winning",
                description: "Pieces that have graced the most prestigious events",
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Celebrity Endorsed",
                description: "Chosen by A-list celebrities and style icons",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-purple-800/20 backdrop-blur-sm border border-purple-300/20"
              >
                <div className="text-purple-300 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductSection
        title="Products"
        products={celebrityProducts.map((product) => ({
          ...product,
          // Map the string category to a valid Product["category"] value
          // For demo, assign "Suits" for all, or use a mapping if needed
          category: "Suits",
        }))}
      />
    </div>
  )
}
