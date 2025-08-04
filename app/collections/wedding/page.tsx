"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Heart, Crown, Sparkles } from "lucide-react"
import { ProductSection } from "@/components/product-section"

const weddingProducts = [
  { id: "1", name: "Eternal Grace Gown", price: 950, image: "/images/eternal-gown.jpeg", description: "Graceful gown for weddings.", category: "Women" },
  { id: "2", name: "Classic Tuxedo", price: 990, image: "/images/classic-tuxedo.jpeg", description: "Classic tuxedo for the groom.", category: "Men" },
  { id: "3", name: "Ceremony Blazer", price: 420, image: "/images/ceremony-blazer.jpeg", description: "Blazer for the ceremony.", category: "Men" },
  { id: "4", name: "Bridal Veil", price: 300, image: "/images/veil.jpeg", description: "Veil for the bride.", category: "Accessories" },
  { id: "5", name: "Wedding Shoes", price: 350, image: "/images/wedding-shoes.jpeg", description: "Shoes for the wedding.", category: "Accessories" },
  { id: "6", name: "Pearl Necklace", price: 250, image: "/images/pearl-necklace.jpeg", description: "Pearl necklace for elegance.", category: "Accessories" },
  { id: "7", name: "Groom's Cufflinks", price: 220, image: "/images/cufflinks.jpeg", description: "Cufflinks for the groom.", category: "Accessories" },
  { id: "8", name: "Reception Dress", price: 700, image: "/images/reception-dress.jpeg", description: "Dress for the reception.", category: "Women" },
  { id: "9", name: "Bridal Clutch", price: 400, image: "/images/bridal-clutch.jpeg", description: "Clutch for the bride.", category: "Accessories" },
  { id: "10", name: "Wedding Band", price: 800, image: "/images/wedding-band.jpeg", description: "Wedding band for the couple.", category: "Accessories" },
  { id: "11", name: "Flower Girl Dress", price: 390, image: "/images/flower-girl-dress.jpeg", description: "Dress for the flower girl.", category: "Kids" },
  { id: "12", name: "Ring Bearer Pillow", price: 200, image: "/images/ring-pillow.jpeg", description: "Pillow for the ring bearer.", category: "Accessories" },
]

export default function WeddingCollectionPage() {
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
          <Image src="/images/collection-organized.jpeg" alt="Wedding Collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/90 via-pink-900/60 to-transparent" />
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
            <Heart className="h-8 w-8 text-rose-300 mr-3" />
            <span className="text-rose-300 font-medium">Wedding Collection</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Eternal
            <span className="block text-lime-yellow">Elegance</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Celebrate your most precious moments with our exquisite wedding collection. From intimate ceremonies to
            grand celebrations, each piece is designed to make your special day truly unforgettable.
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
              Book Consultation
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Collection Features */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-rose-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Wedding Essentials</h2>
            <p className="text-xl text-gray-400">Crafted for your perfect day</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Crown className="h-8 w-8" />,
                title: "Bespoke Tailoring",
                description: "Custom-fitted pieces designed specifically for you",
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "Premium Materials",
                description: "Finest silks, satins, and luxury fabrics",
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Timeless Design",
                description: "Classic styles that will look beautiful for generations",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-rose-800/20 backdrop-blur-sm border border-rose-300/20"
              >
                <div className="text-rose-300 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductSection title="Products" products={weddingProducts} />
    </div>
  )
}
