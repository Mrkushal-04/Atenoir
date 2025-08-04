"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, Shield, Crown } from "lucide-react"
import { ProductSection } from "@/components/product-section"

const heritageProducts = [
  { id: "1", name: "Classic Tweed Jacket", price: 800, image: "/images/tweed-jacket.jpeg", description: "Classic tweed jacket for timeless style.", category: "Suits" },
  { id: "2", name: "Heritage Blazer", price: 985, image: "/images/black-tshirt.jpeg", description: "Heritage blazer with vintage appeal.", category: "Suits" },
  { id: "3", name: "Timeless Sweater", price: 425, image: "/images/champagne-shirt.jpeg", description: "Sweater with a timeless design.", category: "Shirts" },
  { id: "4", name: "Wool Scarf", price: 210, image: "/images/scarf.jpeg", description: "Warm wool scarf for winter.", category: "Accessories" },
  { id: "5", name: "Vintage Waistcoat", price: 350, image: "/images/waistcoat.jpeg", description: "Vintage waistcoat for layering.", category: "Suits" },
  { id: "6", name: "Corduroy Trousers", price: 320, image: "/images/corduroy.jpeg", description: "Corduroy trousers for a heritage look.", category: "Trousers" },
  { id: "7", name: "Heritage Cap", price: 200, image: "/images/cap.jpeg", description: "Classic heritage cap.", category: "Accessories" },
  { id: "8", name: "Classic Brogues", price: 400, image: "/images/brogues.jpeg", description: "Classic brogues for formal wear.", category: "Accessories" },
  { id: "9", name: "Wool Overcoat", price: 990, image: "/images/overcoat.jpeg", description: "Wool overcoat for cold days.", category: "Suits" },
  { id: "10", name: "Plaid Shirt", price: 230, image: "/images/plaid-shirt.jpeg", description: "Plaid shirt for a heritage vibe.", category: "Shirts" },
  { id: "11", name: "Heritage Gloves", price: 220, image: "/images/gloves.jpeg", description: "Warm gloves for winter.", category: "Accessories" },
  { id: "12", name: "Vintage Satchel", price: 600, image: "/images/satchel.jpeg", description: "Vintage satchel for daily use.", category: "Accessories" },
]

export default function HeritageCollectionPage() {
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
          <Image src="/images/atenoir-store-display.jpeg" alt="Heritage Collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-yellow-900/60 to-transparent" />
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
            <Crown className="h-8 w-8 text-amber-300 mr-3" />
            <span className="text-amber-300 font-medium">Heritage Collection</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Timeless
            <span className="block text-lime-yellow">Legacy</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-96"
          >
           
          </motion.div>

          <motion.p
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Celebrating decades of craftsmanship and design excellence. Our heritage collection honors classic
            silhouettes while embracing contemporary innovation.
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
              Our Story
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Collection Features */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-amber-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Heritage Values</h2>
            <p className="text-xl text-gray-400">Built to last generations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Timeless Design",
                description: "Classic styles that never go out of fashion",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Quality Craftsmanship",
                description: "Traditional techniques passed down through generations",
              },
              {
                icon: <Crown className="h-8 w-8" />,
                title: "Legacy Materials",
                description: "Premium fabrics sourced from historic mills",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-amber-800/20 backdrop-blur-sm border border-amber-300/20"
              >
                <div className="text-amber-300 mb-4 flex justify-center">{feature.icon}</div>
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
        products={heritageProducts.map((product) => ({
          ...product,
          category: product.category as
            | "Suits"
            | "Women"
            | "Shirts"
            | "Trousers"
            | "Accessories"
            | "Men"
            | "Kids",
        }))}
      />
    </div>
  )
}
