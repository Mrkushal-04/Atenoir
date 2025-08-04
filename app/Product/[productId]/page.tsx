"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import {
    Star,
    ShoppingCart,
    Heart,
    Eye,
    Crown,
    Zap,
    Truck,
    Shield,
    RotateCcw,
    Share2,
    ChevronLeft,
    ChevronRight,
    Plus,
    Minus,
    Users,
    Package,
    ShoppingBag
} from "lucide-react"
import { getProductById, getRelatedProducts, type Product } from "@/lib/data/products"
import { useCart } from "@/lib/hooks/useCart"
import Link from "next/link"

function ProductDetailPage() {
    const params = useParams()
    const productId = params.productId as string
    const { addToCart } = useCart()

    const [product, setProduct] = useState<Product | null>(null)
    const [selectedImage, setSelectedImage] = useState(0)
    const [selectedSize, setSelectedSize] = useState("")
    const [selectedColor, setSelectedColor] = useState("")
    const [selectedFabric, setSelectedFabric] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([])

    useEffect(() => {
        const foundProduct = getProductById(productId)
        setProduct(foundProduct || null)

        if (foundProduct) {
            setSelectedSize(foundProduct.sizes[0] || "")
            setSelectedColor(foundProduct.colors[0]?.name || "")
            setSelectedFabric(foundProduct.fabrics[0]?.name || "")
            setRelatedProducts(getRelatedProducts(productId))
        }
    }, [productId])

    if (!product) {
        return (
            <div className="min-h-screen bg-black/[0.96] text-white flex items-center justify-center">
                <div className="text-center">
                    <Package className="w-16 h-16 mx-auto text-gray-600 mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
                    <p className="text-gray-400 mb-4">The product you're looking for doesn't exist.</p>
                    <Link href="/Product">
                        <Button className="bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black">
                            Browse Products
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    const handleAddToCart = () => {
        if (!selectedSize || !selectedColor) {
            alert("Please select size and color")
            return
        }

        addToCart({
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images[selectedImage],
            quantity,
            size: selectedSize,
            color: selectedColor
        })
    }

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "men":
                return Users
            case "women":
                return Heart
            case "kids":
                return Package
            default:
                return ShoppingBag
        }
    }

    const CategoryIcon = getCategoryIcon(product.category) as React.ElementType;
   
    return (
        <div className="min-h-screen bg-black/[0.96] text-white">
            <div className="container mx-auto px-6 py-16">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <nav className="flex items-center space-x-2 text-sm text-gray-400">
                        <Link href="/Product" className="hover:text-white">Products</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href={`/Product/${product.category}`} className="hover:text-white capitalize">
                            {product.category}
                        </Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-white">{product.name}</span>
                    </nav>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                <CategoryIcon className="w-32 h-32 text-gray-600" />
                            </div>
                        </div>
                        {product.images.length > 1 && (
                            <div className="flex space-x-2">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`w-20 h-20 bg-gray-800 rounded-lg border-2 transition-colors ${selectedImage === index ? 'border-lime-yellow-500' : 'border-gray-700'
                                            }`}
                                        title={`View image ${index + 1}`}
                                        aria-label={`View image ${index + 1}`}
                                    >
                                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                            <CategoryIcon className="w-8 h-8 text-gray-600" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <div className="flex items-center space-x-2 mb-2">
                                <Badge variant="secondary" className="capitalize">
                                    {product.category}
                                </Badge>
                                {product.isNew && (
                                    <Badge className="bg-lime-yellow-600 text-black">
                                        <Zap className="w-3 h-3 mr-1" />
                                        New
                                    </Badge>
                                )}
                                {product.isLimited && (
                                    <Badge className="bg-red-600">
                                        <Crown className="w-3 h-3 mr-1" />
                                        Limited Edition
                                    </Badge>
                                )}
                            </div>
                            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="flex items-center space-x-1">
                                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                    <span className="font-semibold">{product.rating}</span>
                                    <span className="text-gray-400">({product.reviews} reviews)</span>
                                </div>
                                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                                    <Share2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                                <span className="text-3xl font-bold text-lime-yellow-400">₹{product.price}</span>
                                {product.originalPrice && (
                                    <span className="text-xl text-gray-400 line-through">₹{product.originalPrice}</span>
                                )}
                            </div>
                            {product.originalPrice && (
                                <p className="text-green-400 text-sm">
                                    Save ₹{(product.originalPrice - product.price).toFixed(2)}
                                </p>
                            )}
                        </div>

                        {/* Size Selector */}
                        <div>
                            <h3 className="font-semibold mb-3">Size</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.sizes.map((size) => (
                                    <Button
                                        key={size}
                                        variant={selectedSize === size ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setSelectedSize(size)}
                                        className={selectedSize === size ? "bg-lime-yellow-600 text-black" : "border-gray-600 text-white hover:bg-gray-800"}
                                    >
                                        {size}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        {/* Color Selector */}
                        <div>
                            <h3 className="font-semibold mb-3">Color</h3>
                            <div className="flex flex-wrap gap-2">
                                {product.colors.map((color) => (
                                    <button
                                        key={color.name}
                                        onClick={() => setSelectedColor(color.name)}
                                        className={`w-10 h-10 rounded-full border-2 transition-all ${selectedColor === color.name ? 'border-lime-yellow-500 scale-110' : 'border-gray-600'
                                            }`}
                                        style={{ backgroundColor: color.hex }}
                                        title={color.name}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Fabric Selector */}
                        {product.fabrics && product.fabrics.length > 0 && (
                            <div>
                                <h3 className="font-semibold mb-3">Fabric</h3>
                                <div className="space-y-2">
                                    {product.fabrics.map((fabric) => (
                                        <div
                                            key={fabric.name}
                                            className={`p-3 border rounded-lg cursor-pointer transition-colors ${selectedFabric === fabric.name
                                                    ? 'border-lime-yellow-500 bg-lime-yellow-500/10'
                                                    : 'border-gray-600 hover:border-gray-500'
                                                }`}
                                            onClick={() => setSelectedFabric(fabric.name)}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span>{fabric.name}</span>
                                                {fabric.price > 0 && (
                                                    <span className="text-lime-yellow-400">+₹{fabric.price}</span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity */}
                        <div>
                            <h3 className="font-semibold mb-3">Quantity</h3>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center border border-gray-600 rounded-lg">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="text-white hover:bg-gray-800"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </Button>
                                    <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="text-white hover:bg-gray-800"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </Button>
                                </div>
                                <span className="text-gray-400">
                                    {product.inStock ? (
                                        <span className="text-green-400">In Stock</span>
                                    ) : (
                                        <span className="text-red-400">Out of Stock</span>
                                    )}
                                </span>
                            </div>
                        </div>

                        {/* Price Calculator */}
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-lg">Price Breakdown</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Base Price</span>
                                    <span>₹{product.price}</span>
                                </div>
                                {selectedFabric && product.fabrics?.find(f => f.name === selectedFabric)?.price && (
                                    <div className="flex justify-between">
                                        <span>Fabric Upgrade</span>
                                        <span>+₹{product.fabrics.find(f => f.name === selectedFabric)?.price}</span>
                                    </div>
                                )}
                                <Separator />
                                <div className="flex justify-between font-semibold">
                                    <span>Total</span>
                                    <span className="text-lime-yellow-400">
                                        ₹{(
                                            product.price +
                                            (product.fabrics?.find(f => f.name === selectedFabric)?.price || 0)
                                        ) * quantity}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Action Buttons */}
                        <div className="flex space-x-4">
                            <Button
                                onClick={handleAddToCart}
                                disabled={!product.inStock}
                                className="flex-1 bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black"
                            >
                                <ShoppingCart className="w-4 h-4 mr-2" />
                                Add to Cart
                            </Button>
                            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                                <Heart className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-800">
                            <div className="flex items-center space-x-2 text-sm">
                                <Truck className="w-4 h-4 text-lime-yellow-400" />
                                <span>Free Shipping</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <Shield className="w-4 h-4 text-lime-yellow-400" />
                                <span>Secure Payment</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                                <RotateCcw className="w-4 h-4 text-lime-yellow-400" />
                                <span>Easy Returns</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Details Tabs */}
                <Tabs defaultValue="description" className="mb-16">
                    <TabsList className="bg-gray-900 border-gray-800">
                        <TabsTrigger value="description" className="text-white">Description</TabsTrigger>
                        <TabsTrigger value="features" className="text-white">Features</TabsTrigger>
                        <TabsTrigger value="specifications" className="text-white">Specifications</TabsTrigger>
                        <TabsTrigger value="reviews" className="text-white">Reviews</TabsTrigger>
                    </TabsList>

                    <TabsContent value="description" className="mt-6">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6">
                                <p className="text-gray-300 leading-relaxed">
                                    {product?.description ?? "No description available."}
                                </p>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="features" className="mt-6">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6">
                                <ul className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-lime-yellow-400 rounded-full" />
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="specifications" className="mt-6">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <div key={key} className="flex justify-between py-2 border-b border-gray-800">
                                            <span className="text-gray-400">{key}</span>
                                            <span className="text-white">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    <TabsContent value="reviews" className="mt-6">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6">
                                <div className="text-center py-8">
                                    <Star className="w-12 h-12 mx-auto text-gray-600 mb-4" />
                                    <p className="text-gray-400">Reviews coming soon</p>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {relatedProducts.map((relatedProduct) => (
                                <Link key={relatedProduct.id} href={`/Product/${relatedProduct.id}`}>
                                    <Card className="bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-colors cursor-pointer">
                                        <CardContent className="p-4">
                                            <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                                                <CategoryIcon className="w-12 h-12 text-gray-600" />
                                            </div>
                                            <h3 className="font-semibold mb-2">{relatedProduct.name}</h3>
                                            <div className="flex items-center justify-between">
                                                <span className="text-lime-yellow-400 font-bold">₹{relatedProduct.price}</span>
                                                <div className="flex items-center space-x-1">
                                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                    <span className="text-sm text-gray-400">{relatedProduct.rating}</span>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Page() {
    return <ProductDetailPage />;
}
