"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Coffee, Leaf, Clock } from "lucide-react"
import { ProductSection } from "@/components/product-section"

const casualProducts = [
  { id: "1", name: "Relaxed Polo Shirt", price: 220, image: "/images/white-tshirt.jpeg", description: "A comfortable polo for everyday wear.", category: "Shirts" },
  { id: "2", name: "Everyday Chinos", price: 260, image: "/images/yellow-tshirt.jpeg", description: "Versatile chinos for casual outings.", category: "Trousers" },
  { id: "3", name: "Soft Knit Hoodie", price: 295, image: "/images/black-barco-tshirt.jpeg", description: "Stay cozy in this soft knit hoodie.", category: "Suits" },
  { id: "4", name: "Weekend Shorts", price: 210, image: "/images/shorts.jpeg", description: "Perfect shorts for the weekend.", category: "Trousers" },
  { id: "5", name: "Classic Crewneck", price: 230, image: "/images/crewneck.jpeg", description: "Classic crewneck for all seasons.", category: "Shirts" },
  { id: "6", name: "Lightweight Jacket", price: 340, image: "/images/jacket.jpeg", description: "A light jacket for breezy days.", category: "Suits" },
  { id: "7", name: "Casual Button-Down", price: 250, image: "/images/buttondown.jpeg", description: "Button-down shirt for a smart look.", category: "Shirts" },
  { id: "8", name: "Relaxed Fit Jeans", price: 280, image: "/images/jeans.jpeg", description: "Relaxed fit jeans for comfort.", category: "Trousers" },
  { id: "9", name: "Everyday Sneakers", price: 200, image: "/images/sneakers.jpeg", description: "Sneakers for daily adventures.", category: "Accessories" },
  { id: "10", name: "Cotton Henley", price: 215, image: "/images/henley.jpeg", description: "Soft cotton henley shirt.", category: "Shirts" },
  { id: "11", name: "Lounge Pants", price: 240, image: "/images/loungepants.jpeg", description: "Lounge pants for relaxing at home.", category: "Trousers" },
  { id: "12", name: "Urban Bomber", price: 390, image: "/images/bomber.jpeg", description: "Trendy bomber jacket for city life.", category: "Suits" },
]

export default function CasualCollectionPage() {
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
          <Image src="/images/collection-grid.jpeg" alt="Casual Collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-teal-900/60 to-transparent" />
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
            <Coffee className="h-8 w-8 text-emerald-300 mr-3" />
            <span className="text-emerald-300 font-medium">Casual Collection</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Effortless
            <span className="block text-lime-yellow">Sophistication</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Discover the perfect balance between comfort and style. Our casual collection elevates everyday wear with
            premium materials and thoughtful design details.
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
              Style Guide
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Collection Features */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-emerald-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Casual Essentials</h2>
            <p className="text-xl text-gray-400">Designed for modern living</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Sustainable Materials",
                description: "Eco-friendly fabrics that feel as good as they look",
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "All-Day Comfort",
                description: "Designed to move with you from morning to night",
              },
              {
                icon: <Coffee className="h-8 w-8" />,
                title: "Versatile Style",
                description: "Pieces that transition seamlessly from work to weekend",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-emerald-800/20 backdrop-blur-sm border border-emerald-300/20"
              >
                <div className="text-emerald-300 mb-4 flex justify-center">{feature.icon}</div>
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
        products={casualProducts.map((product) => ({
          ...product,
          // Map the string category to a valid Product["category"] value
          // For demo, assign "Shirts" for all, or use a mapping if needed
          category: "Shirts",
        }))}
      />
    </div>
  )
}
