"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sun, Thermometer, Wind } from "lucide-react"
import { ProductSection } from "@/components/product-section"

const summerProducts = [
  { id: "1", name: "Linen Resort Shirt", price: 285, image: "/images/linen-shirt.jpeg", description: "Linen shirt for summer getaways.", category: "Shirts" },
  { id: "2", name: "Sunset Maxi Dress", price: 420, image: "/images/maxi-dress.jpeg", description: "Maxi dress for sunset evenings.", category: "Women" },
  { id: "3", name: "Coastal Shorts", price: 210, image: "/images/shorts.jpeg", description: "Shorts for coastal adventures.", category: "Trousers" },
  { id: "4", name: "Breeze Tank Top", price: 200, image: "/images/tanktop.jpeg", description: "Tank top for breezy days.", category: "Shirts" },
  { id: "5", name: "Beach Sandals", price: 220, image: "/images/sandals.jpeg", description: "Sandals for the beach.", category: "Accessories" },
  { id: "6", name: "Lightweight Cardigan", price: 340, image: "/images/cardigan.jpeg", description: "Cardigan for cool summer nights.", category: "Shirts" },
  { id: "7", name: "Summer Hat", price: 230, image: "/images/hat.jpeg", description: "Hat for sun protection.", category: "Accessories" },
  { id: "8", name: "Flowy Skirt", price: 250, image: "/images/skirt.jpeg", description: "Flowy skirt for summer style.", category: "Women" },
  { id: "9", name: "Cotton Polo", price: 215, image: "/images/polo.jpeg", description: "Cotton polo for casual wear.", category: "Shirts" },
  { id: "10", name: "Vacation Tote", price: 300, image: "/images/tote.jpeg", description: "Tote bag for vacations.", category: "Accessories" },
  { id: "11", name: "Sun Dress", price: 390, image: "/images/sun-dress.jpeg", description: "Dress for sunny days.", category: "Women" },
  { id: "12", name: "Poolside Kimono", price: 370, image: "/images/kimono.jpeg", description: "Kimono for poolside lounging.", category: "Women" },
]

export default function SummerCollectionPage() {
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
          <Image src="/images/collection-rack-1.jpeg" alt="Summer Collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
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
            <Sun className="h-8 w-8 text-amber-400 mr-3" />
            <span className="text-amber-400 font-medium">Summer 2024</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Ethereal
            <span className="block text-lime-yellow">Lightness</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Embrace the season with our carefully curated summer collection. Breathable fabrics, flowing silhouettes,
            and sun-kissed hues create the perfect harmony between comfort and sophistication.
          </motion.p>

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
              View Lookbook
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Collection Features */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Collection Highlights</h2>
            <p className="text-xl text-gray-400">Designed for the modern summer lifestyle</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Thermometer className="h-8 w-8" />,
                title: "Temperature Regulation",
                description: "Advanced fabric technology keeps you cool in the heat",
              },
              {
                icon: <Wind className="h-8 w-8" />,
                title: "Breathable Design",
                description: "Lightweight materials that move with your body",
              },
              {
                icon: <Sun className="h-8 w-8" />,
                title: "UV Protection",
                description: "Built-in sun protection without compromising style",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm"
              >
                <div className="text-amber-400 mb-4 flex justify-center">{feature.icon}</div>
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
        products={summerProducts.map((product) => ({
          ...product,
          // Map the string category to a valid Product["category"] value
          // For demo, assign "Shirts" for all, or use a mapping if needed
          category: "Shirts",
        }))}
      />
    </div>
  )
}
