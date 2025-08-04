"use client"

import type { Product } from "@/lib/types"
import { ProductCard } from "./product-card"
import { motion } from "framer-motion"

interface ProductSectionProps {
  title: string
  products: Product[]
}

export function ProductSection({ title, products }: ProductSectionProps) {
  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-serif font-bold text-white text-center mb-10"
      >
        {title}
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
