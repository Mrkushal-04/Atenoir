"use client"

import Image from "next/image"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { useCart } from "@/lib/hooks/useCart"
import { useState } from "react"
import { CheckCircle } from "lucide-react"

export function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart()
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation to product detail
    e.stopPropagation()

    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: product.sizes?.[0],
      color: product.colors?.[0]?.name
    })

    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <Link href={`/shop/${product.id}`} passHref>
      <motion.div
        className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden group cursor-pointer"
        whileHover={{ scale: 1.03, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)" }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            unoptimized={true}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
          <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-lime-yellow-400">₹{product.price.toFixed(2)}</span>
            <Button
              variant="outline"
              className="text-white border-lime-yellow-500 hover:bg-lime-yellow-500/20 bg-transparent"
              onClick={handleAddToCart}
              disabled={addedToCart}
            >
              {addedToCart ? (
                <>
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Added!
                </>
              ) : (
                "Add to Cart"
              )}
            </Button>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
