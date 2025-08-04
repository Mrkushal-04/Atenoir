"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Zap, Clock, Flame } from "lucide-react"
import { ProductSection } from "@/components/product-section"

const limitedProducts = [
  { id: "1", name: "Flash Drop Hoodie", price: 350, image: "/images/flash-hoodie.jpeg", description: "Limited edition flash drop hoodie.", category: "Shirts" },
  { id: "2", name: "Rare Denim Jacket", price: 600, image: "/images/denim-jacket.jpeg", description: "Rare denim jacket for collectors.", category: "Suits" },
  { id: "3", name: "Storm Dress", price: 800, image: "/images/storm-dress.jpeg", description: "Storm dress for special occasions.", category: "Women" },
  { id: "4", name: "Limited Edition Tee", price: 220, image: "/images/limited-tee.jpeg", description: "Tee from the latest drop.", category: "Shirts" },
  { id: "5", name: "Exclusive Joggers", price: 400, image: "/images/joggers.jpeg", description: "Exclusive joggers for comfort.", category: "Trousers" },
  { id: "6", name: "Drop Sneakers", price: 300, image: "/images/drop-sneakers.jpeg", description: "Sneakers from the drop.", category: "Accessories" },
  { id: "7", name: "Specialty Cap", price: 200, image: "/images/specialty-cap.jpeg", description: "Specialty cap for a unique look.", category: "Accessories" },
  { id: "8", name: "Unique Bomber", price: 700, image: "/images/unique-bomber.jpeg", description: "Unique bomber jacket.", category: "Suits" },
  { id: "9", name: "Limited Scarf", price: 250, image: "/images/limited-scarf.jpeg", description: "Limited edition scarf.", category: "Accessories" },
  { id: "10", name: "Rare Pullover", price: 390, image: "/images/rare-pullover.jpeg", description: "Rare pullover for collectors.", category: "Shirts" },
  { id: "11", name: "Drop Backpack", price: 800, image: "/images/drop-backpack.jpeg", description: "Backpack from the drop.", category: "Accessories" },
  { id: "12", name: "Special Edition Belt", price: 230, image: "/images/special-belt.jpeg", description: "Special edition belt.", category: "Accessories" },
]

export default function LimitedCollectionPage() {
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
          <Image src="/images/collection-rack-1.jpeg" alt="Limited Collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-pink-900/60 to-transparent" />
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
            <Zap className="h-8 w-8 text-red-300 mr-3" />
            <span className="text-red-300 font-medium">Limited Time Drops</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Exclusive
            <span className="block text-lime-yellow">Moments</span>
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
            Rare pieces available for a fleeting moment in time. These exclusive drops feature limited quantities and
            unique designs that won't be repeated.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-lime-yellow text-black hover:bg-lime-yellow/90 font-semibold">
              Shop Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Join Waitlist
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Collection Features */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-red-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Drop Exclusives</h2>
            <p className="text-xl text-gray-400">Limited availability, unlimited style</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Time Sensitive",
                description: "Available only for a limited time period",
              },
              {
                icon: <Flame className="h-8 w-8" />,
                title: "High Demand",
                description: "Exclusive pieces that sell out quickly",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Instant Impact",
                description: "Bold designs that make an immediate statement",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-red-800/20 backdrop-blur-sm border border-red-300/20"
              >
                <div className="text-red-300 mb-4 flex justify-center">{feature.icon}</div>
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
        products={limitedProducts.map((product) => ({
          ...product,
          // Map the string category to a valid Product["category"] value
          // For demo, assign "Shirts" for all, or use a mapping if needed
          category: "Shirts",
        }))}
      />
    </div>
  )
}
