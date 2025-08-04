"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import {
    Filter,
    Grid,
    List,
    Star,
    ShoppingCart,
    Heart,
    Eye,
    Crown,
    Zap,
    Baby
} from "lucide-react"
import { getProductsByCategory, type Product } from "@/lib/data/products"
import { useCart } from "@/lib/hooks/useCart"

export default function KidsProductsPage() {
    const { addToCart } = useCart()
    const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
    const [searchQuery, setSearchQuery] = useState("")
    const [sortBy, setSortBy] = useState("featured")
    const [priceRange, setPriceRange] = useState([0, 200])
    const [selectedColors, setSelectedColors] = useState<string[]>([])
    const [selectedSizes, setSelectedSizes] = useState<string[]>([])
    const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([])
    const [showFilters, setShowFilters] = useState(false)

    const kidsProducts = getProductsByCategory("kids")

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let filtered = kidsProducts.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
            const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
            const matchesColor = selectedColors.length === 0 ||
                selectedColors.some(color => product.colors.some(c => c.name === color))
            const matchesSize = selectedSizes.length === 0 ||
                selectedSizes.some(size => product.sizes.includes(size))
            const matchesSubcategory = selectedSubcategories.length === 0 ||
                selectedSubcategories.includes(product.subcategory)

            return matchesSearch && matchesPrice && matchesColor && matchesSize && matchesSubcategory
        })

        // Sort products
        switch (sortBy) {
            case "price-low":
                filtered.sort((a, b) => a.price - b.price)
                break
            case "price-high":
                filtered.sort((a, b) => b.price - a.price)
                break
            case "rating":
                filtered.sort((a, b) => b.rating - a.rating)
                break
            case "newest":
                filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
                break
            default:
                break
        }

        return filtered
    }, [kidsProducts, searchQuery, sortBy, priceRange, selectedColors, selectedSizes, selectedSubcategories])

    // Get unique values for filters
    const allColors = Array.from(new Set(kidsProducts.flatMap(p => p.colors.map(c => c.name))))
    const allSizes = Array.from(new Set(kidsProducts.flatMap(p => p.sizes)))
    const allSubcategories = Array.from(new Set(kidsProducts.map(p => p.subcategory)))

    const handleAddToCart = (product: Product) => {
        addToCart({
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: 1,
            size: product.sizes[0],
            color: product.colors[0]?.name
        })
    }

    return (
        <div className="min-h-screen bg-black/[0.96] text-white">
            <div className="container mx-auto px-6 py-16">
                {/* Header */}
                <div className="mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-4"
                    >
                        Kids Collection
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400"
                    >
                        Adorable and comfortable clothing for the little ones
                    </motion.p>
                </div>

                {/* Search and Controls */}
                <div className="flex flex-col lg:flex-row gap-6 mb-8">
                    <div className="flex-1">
                        <Input
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-gray-900 border-gray-700 text-white"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <Button
                            variant="outline"
                            onClick={() => setShowFilters(!showFilters)}
                            className="border-gray-600 text-white hover:bg-gray-800"
                        >
                            <Filter className="w-4 h-4 mr-2" />
                            Filters
                        </Button>
                        <Select value={sortBy} onValueChange={setSortBy}>
                            <SelectTrigger className="w-48 bg-gray-900 border-gray-700 text-white">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-gray-900 border-gray-700">
                                <SelectItem value="featured">Featured</SelectItem>
                                <SelectItem value="price-low">Price: Low to High</SelectItem>
                                <SelectItem value="price-high">Price: High to Low</SelectItem>
                                <SelectItem value="rating">Highest Rated</SelectItem>
                                <SelectItem value="newest">Newest First</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex border border-gray-700 rounded-lg">
                            <Button
                                variant={viewMode === "grid" ? "default" : "ghost"}
                                size="sm"
                                onClick={() => setViewMode("grid")}
                                className={viewMode === "grid" ? "bg-lime-yellow-600 text-black" : "text-gray-400 hover:text-white"}
                            >
                                <Grid className="w-4 h-4" />
                            </Button>
                            <Button
                                variant={viewMode === "list" ? "default" : "ghost"}
                                size="sm"
                                onClick={() => setViewMode("list")}
                                className={viewMode === "list" ? "bg-lime-yellow-600 text-black" : "text-gray-400 hover:text-white"}
                            >
                                <List className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex gap-8">
                    {/* Filters Sidebar */}
                    {showFilters && (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="w-64 space-y-6"
                        >
                            <Card className="bg-gray-900 border-gray-800">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-4">Price Range</h3>
                                    <Slider
                                        value={priceRange}
                                        onValueChange={setPriceRange}
                                        max={200}
                                        min={0}
                                        step={5}
                                        className="mb-4"
                                    />
                                    <div className="flex justify-between text-sm text-gray-400">
                                        <span>₹{priceRange[0]}</span>
                                        <span>₹{priceRange[1]}</span>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-gray-900 border-gray-800">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-4">Category</h3>
                                    <div className="space-y-2">
                                        {allSubcategories.map((subcategory) => (
                                            <div key={subcategory} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={subcategory}
                                                    checked={selectedSubcategories.includes(subcategory)}
                                                    onCheckedChange={(checked) => {
                                                        if (checked) {
                                                            setSelectedSubcategories([...selectedSubcategories, subcategory])
                                                        } else {
                                                            setSelectedSubcategories(selectedSubcategories.filter(s => s !== subcategory))
                                                        }
                                                    }}
                                                />
                                                <label htmlFor={subcategory} className="text-sm capitalize">
                                                    {subcategory}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-gray-900 border-gray-800">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-4">Color</h3>
                                    <div className="space-y-2">
                                        {allColors.map((color) => (
                                            <div key={color} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={color}
                                                    checked={selectedColors.includes(color)}
                                                    onCheckedChange={(checked) => {
                                                        if (checked) {
                                                            setSelectedColors([...selectedColors, color])
                                                        } else {
                                                            setSelectedColors(selectedColors.filter(c => c !== color))
                                                        }
                                                    }}
                                                />
                                                <label htmlFor={color} className="text-sm">
                                                    {color}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-gray-900 border-gray-800">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold mb-4">Size</h3>
                                    <div className="space-y-2">
                                        {allSizes.map((size) => (
                                            <div key={size} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={size}
                                                    checked={selectedSizes.includes(size)}
                                                    onCheckedChange={(checked) => {
                                                        if (checked) {
                                                            setSelectedSizes([...selectedSizes, size])
                                                        } else {
                                                            setSelectedSizes(selectedSizes.filter(s => s !== size))
                                                        }
                                                    }}
                                                />
                                                <label htmlFor={size} className="text-sm">
                                                    {size}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    )}

                    {/* Products Grid */}
                    <div className="flex-1">
                        <div className="mb-6">
                            <p className="text-gray-400">
                                Showing {filteredProducts.length} of {kidsProducts.length} products
                            </p>
                        </div>

                        {viewMode === "grid" ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredProducts.map((product) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        whileHover={{ y: -5 }}
                                        className="group"
                                    >
                                        <Card className="bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-colors cursor-pointer">
                                            <CardContent className="p-4">
                                                <div className="relative aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                                                    <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                                        <Baby className="w-16 h-16 text-gray-600" />
                                                    </div>
                                                    {product.isNew && (
                                                        <Badge className="absolute top-2 left-2 bg-lime-yellow-600 text-black">
                                                            <Zap className="w-3 h-3 mr-1" />
                                                            New
                                                        </Badge>
                                                    )}
                                                    {product.isLimited && (
                                                        <Badge className="absolute top-2 right-2 bg-red-600">
                                                            <Crown className="w-3 h-3 mr-1" />
                                                            Limited
                                                        </Badge>
                                                    )}
                                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                                                        <Button
                                                            size="sm"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                handleAddToCart(product)
                                                            }}
                                                            className="bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black"
                                                        >
                                                            <ShoppingCart className="w-4 h-4" />
                                                        </Button>
                                                        <Button size="sm" variant="outline" className="border-white text-white">
                                                            <Heart className="w-4 h-4" />
                                                        </Button>
                                                        <Button size="sm" variant="outline" className="border-white text-white">
                                                            <Eye className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                                <h3 className="font-semibold mb-2">{product.name}</h3>
                                                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{product.description}</p>
                                                <div className="flex items-center justify-between mb-3">
                                                    <span className="text-lime-yellow-400 font-bold">₹{product.price}</span>
                                                    <div className="flex items-center space-x-1">
                                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                        <span className="text-sm text-gray-400">{product.rating}</span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-1">
                                                    {product.colors.slice(0, 3).map((color) => (
                                                        <div
                                                            key={color.name}
                                                            className="w-4 h-4 rounded-full border border-gray-600"
                                                            style={{ backgroundColor: color.hex }}
                                                            title={color.name}
                                                        />
                                                    ))}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {filteredProducts.map((product) => (
                                    <motion.div
                                        key={product.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <Card className="bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-colors">
                                            <CardContent className="p-6">
                                                <div className="flex items-center space-x-6">
                                                    <div className="relative w-24 h-24 bg-gray-800 rounded-lg flex items-center justify-center">
                                                        <Baby className="w-8 h-8 text-gray-600" />
                                                        {product.isNew && (
                                                            <Badge className="absolute -top-1 -right-1 bg-lime-yellow-600 text-black text-xs">
                                                                New
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold mb-2">{product.name}</h3>
                                                        <p className="text-gray-400 text-sm mb-3">{product.description}</p>
                                                        <div className="flex items-center space-x-4">
                                                            <span className="text-lime-yellow-400 font-bold">₹{product.price}</span>
                                                            <div className="flex items-center space-x-1">
                                                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                                <span className="text-sm text-gray-400">{product.rating}</span>
                                                            </div>
                                                            <div className="flex space-x-1">
                                                                {product.colors.slice(0, 3).map((color) => (
                                                                    <div
                                                                        key={color.name}
                                                                        className="w-4 h-4 rounded-full border border-gray-600"
                                                                        style={{ backgroundColor: color.hex }}
                                                                        title={color.name}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Button
                                                            onClick={() => handleAddToCart(product)}
                                                            className="bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black"
                                                        >
                                                            <ShoppingCart className="w-4 h-4 mr-2" />
                                                            Add to Cart
                                                        </Button>
                                                        <Button variant="outline" className="border-gray-600 text-white">
                                                            <Heart className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {filteredProducts.length === 0 && (
                            <div className="text-center py-16">
                                <Baby className="w-16 h-16 mx-auto text-gray-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">No products found</h3>
                                <p className="text-gray-400">Try adjusting your filters or search terms</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
} 