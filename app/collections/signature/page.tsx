"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Sparkles, Diamond, Zap } from "lucide-react"
import { ProductSection } from "@/components/product-section"

const signatureProducts = [
  { id: "1", name: "Signature Blazer", price: 950, image: "/images/signature-blazer.jpeg", description: "Signature blazer for a bold look.", category: "Suits" },
  { id: "2", name: "Icon Dress", price: 990, image: "/images/icon-dress.jpeg", description: "Iconic dress for special events.", category: "Women" },
  { id: "3", name: "Statement Sweater", price: 420, image: "/images/statement-sweater.jpeg", description: "Sweater that makes a statement.", category: "Shirts" },
  { id: "4", name: "Gold Button Shirt", price: 870, image: "/images/gold-shirt.jpeg", description: "Shirt with gold button details.", category: "Shirts" },
  { id: "5", name: "Signature Trousers", price: 800, image: "/images/signature-trousers.jpeg", description: "Trousers from the signature line.", category: "Trousers" },
  { id: "6", name: "Luxury Scarf", price: 350, image: "/images/luxury-scarf.jpeg", description: "Luxury scarf for added style.", category: "Accessories" },
  { id: "7", name: "Designer Belt", price: 300, image: "/images/designer-belt.jpeg", description: "Designer belt for a refined look.", category: "Accessories" },
  { id: "8", name: "Iconic Coat", price: 700, image: "/images/iconic-coat.jpeg", description: "Coat with iconic design.", category: "Suits" },
  { id: "9", name: "Signature Shoes", price: 600, image: "/images/signature-shoes.jpeg", description: "Shoes from the signature collection.", category: "Accessories" },
  { id: "10", name: "Statement Earrings", price: 250, image: "/images/statement-earrings.jpeg", description: "Earrings that make a statement.", category: "Accessories" },
  { id: "11", name: "Luxury Handbag", price: 800, image: "/images/luxury-handbag.jpeg", description: "Luxury handbag for any occasion.", category: "Accessories" },
  { id: "12", name: "Gold Cufflinks", price: 220, image: "/images/gold-cufflinks.jpeg", description: "Gold cufflinks for formal wear.", category: "Accessories" },
]

export default function SignatureCollectionPage() {
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
          <Image src="/images/atenoir-rack-gold.jpeg" alt="Signature Collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/90 via-amber-900/60 to-transparent" />
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
            <Sparkles className="h-8 w-8 text-yellow-300 mr-3" />
            <span className="text-yellow-300 font-medium">Signature Line</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Distinctive
            <span className="block text-lime-yellow">Identity</span>
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
            Our most coveted pieces that define the ATENOIR aesthetic. Each item in our signature line represents the
            pinnacle of our design philosophy and craftsmanship.
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
              Design Philosophy
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Collection Features */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-yellow-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Signature Elements</h2>
            <p className="text-xl text-gray-400">What makes us distinctive</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Diamond className="h-8 w-8" />,
                title: "Exclusive Design",
                description: "Unique pieces found nowhere else in the world",
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Innovation",
                description: "Cutting-edge techniques meet traditional craftsmanship",
              },
              {
                icon: <Sparkles className="h-8 w-8" />,
                title: "Luxury Materials",
                description: "The finest fabrics and materials money can buy",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-yellow-800/20 backdrop-blur-sm border border-yellow-300/20"
              >
                <div className="text-yellow-300 mb-4 flex justify-center">{feature.icon}</div>
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
        products={signatureProducts.map((product) => ({
          ...product,
          // Map the string category to a valid Product["category"] value
          // For demo, assign "Shirts" for all, or use a mapping if needed
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
