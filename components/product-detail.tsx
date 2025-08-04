"use client"

import { useState } from "react"
import type { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { ImageGallery } from "./image-gallery"
import { motion } from "framer-motion"
import { ShoppingBag, CheckCircle } from "lucide-react"
import { ThreeDViewer } from "./three-d-viewer"
import { useCart } from "@/lib/hooks/useCart"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState<string | null>(product.sizes?.[0] || null)
  const [selectedColor, setSelectedColor] = useState<string | null>(product.colors?.[0]?.name || null)
  const [selectedFabric, setSelectedFabric] = useState<string | null>(product.fabric?.[0] || null)
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  const calculateTotalPrice = () => {
    return (product.price * quantity).toFixed(2)
  }

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: selectedSize || undefined,
      color: selectedColor || undefined
    })

    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
    >
      {/* Product Image Gallery or 3D Viewer */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {product.model3D ? (
          <div className="w-full h-[500px]">
            <ThreeDViewer modelPath={product.model3D} />
          </div>
        ) : product.images && product.images.length > 0 ? (
          <ImageGallery images={product.images} alt={product.name} />
        ) : (
          <div className="relative w-full h-[500px] bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}
      </motion.div>

      {/* Product Details */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-yellow-400 to-light-gold-600 mb-4">
          {product.name}
        </h1>
        <p className="text-3xl font-bold text-white mb-6">₹{calculateTotalPrice()}</p>
        <p className="text-lg text-gray-300 leading-relaxed mb-8">{product.description}</p>

        {/* Size Selection */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Size:</h3>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-[60px] ${selectedSize === size
                    ? "bg-lime-yellow-600 text-black hover:bg-lime-yellow-700"
                    : "border-white/20 text-white hover:bg-white/10"
                    }`}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Color Selection */}
        {product.colors && product.colors.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Color:</h3>
            <div className="flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 flex items-center justify-center ${selectedColor === color.name ? "border-lime-yellow-500" : "border-white/20 hover:border-white/50"
                    }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select color ${color.name}`}
                >
                  {selectedColor === color.name && <CheckCircle className="w-4 h-4 text-black" />}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Fabric Selection */}
        {product.fabric && product.fabric.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-3">Fabric:</h3>
            <div className="flex flex-wrap gap-3">
              {product.fabric.map((fabric) => (
                <Button
                  key={fabric}
                  variant={selectedFabric === fabric ? "default" : "outline"}
                  onClick={() => setSelectedFabric(fabric)}
                  className={`min-w-[80px] ${selectedFabric === fabric
                    ? "bg-lime-yellow-600 text-black hover:bg-lime-yellow-700"
                    : "border-white/20 text-white hover:bg-white/10"
                    }`}
                >
                  {fabric}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity Selector */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white mb-3">Quantity:</h3>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="border-white/20 text-white hover:bg-white/10"
              size="icon"
            >
              -
            </Button>
            <span className="text-2xl font-bold text-white w-8 text-center">{quantity}</span>
            <Button
              variant="outline"
              onClick={() => setQuantity((prev) => prev + 1)}
              className="border-white/20 text-white hover:bg-white/10"
              size="icon"
            >
              +
            </Button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="w-full bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black flex items-center justify-center gap-2"
            onClick={handleAddToCart}
            disabled={addedToCart}
          >
            {addedToCart ? (
              <>
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center"
                >
                  <CheckCircle className="mr-2 h-5 w-5" /> Added to Cart!
                </motion.span>
              </>
            ) : (
              <>
                <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
              </>
            )}
          </Button>
        </motion.div>

        {/* Additional Product Info */}
        <div className="mt-8 pt-8 border-t border-white/10 text-gray-300 space-y-4">
          {product.material && (
            <p>
              <span className="font-semibold text-white">Material:</span> {product.material}
            </p>
          )}
          {product.careInstructions && (
            <p>
              <span className="font-semibold text-white">Care Instructions:</span> {product.careInstructions}
            </p>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
