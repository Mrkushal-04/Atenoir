"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductSection } from "@/components/product-section"
import type { Product } from "@/lib/types"
import { motion } from "framer-motion"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import type React from "react"

interface ProductListLayoutProps {
  title: string
  description: string
  products: Product[]
  children?: React.ReactNode // For filters or other content
}

export function ProductListLayout({ title, description, products, children }: ProductListLayoutProps) {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="h-full w-full absolute inset-0 z-0"></div>
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-6 pt-8 pb-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black rounded-full px-4 py-2 transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft className="w-5 h-5 mr-2" /> Back
          </button>
        </div>
        <div className="container mx-auto px-6 py-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-yellow-400 to-light-gold-600 mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{description}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
            {/* Filters Column */}
            <div>{children}</div>

            {/* Product List Column */}
            <div>
              {products.length > 0 ? (
                <ProductSection title="" products={products} />
              ) : (
                <div className="text-center text-gray-400 text-lg mt-16">
                  <p>No products found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
