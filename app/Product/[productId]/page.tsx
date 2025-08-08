import { products } from "@/lib/data/products"
import ProductDetailClient from "./ProductDetailClient"

// Generate static params for build (server component)
export function generateStaticParams() {
  return products.map((product) => ({
            productId: product.id,
  }))
}

// Server component that renders client component
export default function ProductPage() {
    return <ProductDetailClient />
}