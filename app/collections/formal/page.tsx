"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Briefcase } from "lucide-react"
import { ProductSection } from "@/components/product-section"

const formalProducts = [
  { id: "1", name: "Executive Suit", price: 950, image: "/images/formal-suit.jpeg", description: "Sharp executive suit for formal occasions.", category: "Suits" },
  { id: "2", name: "Classic Trousers", price: 320, image: "/images/trousers.jpeg", description: "Classic trousers for a polished look.", category: "Trousers" },
  { id: "3", name: "Tailored Blazer", price: 700, image: "/images/blazer.jpeg", description: "Tailored blazer for business meetings.", category: "Suits" },
  { id: "4", name: "Formal Shirt", price: 210, image: "/images/formal-shirt.jpeg", description: "Formal shirt for office wear.", category: "Shirts" },
  { id: "5", name: "Silk Tie", price: 220, image: "/images/tie.jpeg", description: "Silk tie for a refined touch.", category: "Accessories" },
  { id: "6", name: "Leather Oxfords", price: 400, image: "/images/oxfords.jpeg", description: "Leather oxfords for formal events.", category: "Accessories" },
  { id: "7", name: "Cufflinks", price: 250, image: "/images/cufflinks.jpeg", description: "Elegant cufflinks for shirts.", category: "Accessories" },
  { id: "8", name: "Dress Vest", price: 350, image: "/images/vest.jpeg", description: "Dress vest for layering.", category: "Suits" },
  { id: "9", name: "Pocket Square", price: 200, image: "/images/pocketsquare.jpeg", description: "Pocket square for a stylish accent.", category: "Accessories" },
  { id: "10", name: "Wool Overcoat", price: 990, image: "/images/overcoat.jpeg", description: "Warm wool overcoat for winter.", category: "Suits" },
  { id: "11", name: "Formal Belt", price: 230, image: "/images/belt.jpeg", description: "Formal belt for trousers.", category: "Accessories" },
  { id: "12", name: "Business Briefcase", price: 800, image: "/images/briefcase.jpeg", description: "Business briefcase for professionals.", category: "Accessories" },
]

export default function FormalCollectionPage() {
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
          <Image src="/images/atenoir-boutique.jpeg" alt="Formal Collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 via-purple-900/60 to-transparent" />
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
            <Briefcase className="h-8 w-8 text-indigo-300 mr-3" />
            <span className="text-indigo-300 font-medium">Formal Collection</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Commanding
            <span className="block text-lime-yellow">Presence</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Make a powerful statement with our formal collection. Precision-tailored pieces that embody confidence,
            sophistication, and executive presence.
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
              Custom Tailoring
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Products Section */}
      <ProductSection
        title="Products"
        products={formalProducts.map((product) => ({
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
