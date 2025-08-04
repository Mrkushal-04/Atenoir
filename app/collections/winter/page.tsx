"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Snowflake, Shield, Layers } from "lucide-react"
import { ProductSection } from "@/components/product-section"

const winterProducts = [
  { id: "1", name: "Cashmere Overcoat", price: 990, image: "/images/cashmere-overcoat.jpeg", description: "Cashmere overcoat for winter warmth.", category: "Suits" },
  { id: "2", name: "Merino Wool Sweater", price: 485, image: "/images/merino-sweater.jpeg", description: "Merino wool sweater for cold days.", category: "Shirts" },
  { id: "3", name: "Thermal Base Layer", price: 195, image: "/images/thermal-base.jpeg", description: "Thermal base layer for extra warmth.", category: "Shirts" },
  { id: "4", name: "Insulated Parka", price: 800, image: "/images/parka.jpeg", description: "Insulated parka for harsh winters.", category: "Suits" },
  { id: "5", name: "Winter Boots", price: 400, image: "/images/winter-boots.jpeg", description: "Boots for snowy days.", category: "Accessories" },
  { id: "6", name: "Wool Scarf", price: 210, image: "/images/scarf.jpeg", description: "Wool scarf for neck warmth.", category: "Accessories" },
  { id: "7", name: "Fleece Gloves", price: 220, image: "/images/gloves.jpeg", description: "Fleece gloves for cold hands.", category: "Accessories" },
  { id: "8", name: "Down Vest", price: 350, image: "/images/vest.jpeg", description: "Down vest for layering.", category: "Suits" },
  { id: "9", name: "Layered Hoodie", price: 390, image: "/images/hoodie.jpeg", description: "Layered hoodie for extra warmth.", category: "Shirts" },
  { id: "10", name: "Thermal Socks", price: 200, image: "/images/socks.jpeg", description: "Thermal socks for winter.", category: "Accessories" },
  { id: "11", name: "Snow Pants", price: 600, image: "/images/snow-pants.jpeg", description: "Snow pants for winter sports.", category: "Trousers" },
  { id: "12", name: "Winter Hat", price: 230, image: "/images/winter-hat.jpeg", description: "Winter hat for head warmth.", category: "Accessories" },
]

export default function WinterCollectionPage() {
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
          <Image src="/images/collection-rack-2.jpeg" alt="Winter Collection" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/60 to-transparent" />
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
            <Snowflake className="h-8 w-8 text-blue-300 mr-3" />
            <span className="text-blue-300 font-medium">Winter 2024</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Sophisticated
            <span className="block text-lime-yellow">Warmth</span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Embrace the cold with our luxurious winter collection. Premium materials, expert tailoring, and timeless
            designs ensure you stay warm while looking effortlessly elegant.
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
      <section className="py-20 px-6 bg-gradient-to-b from-black to-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Winter Essentials</h2>
            <p className="text-xl text-gray-400">Engineered for comfort and style</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Weather Protection",
                description: "Advanced materials shield you from harsh elements",
              },
              {
                icon: <Layers className="h-8 w-8" />,
                title: "Layering System",
                description: "Versatile pieces designed to work together seamlessly",
              },
              {
                icon: <Snowflake className="h-8 w-8" />,
                title: "Thermal Insulation",
                description: "Superior warmth retention without bulk",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm"
              >
                <div className="text-blue-300 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <ProductSection title="Products" products={winterProducts} />
    </div>
  )
}
