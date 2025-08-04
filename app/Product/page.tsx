"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Users,
    Shirt,
    ShoppingBag,
    Star,
    TrendingUp,
    Clock,
    AlertCircle,
    Package,
    Zap,
    Heart,
    Eye,
    Bell,
    Calendar,
    XCircle,
    Users2,
    Crown
} from "lucide-react"
import { products, getProductsByCategory } from "@/lib/data/products"

export default function ProductIndexPage() {
    const [activeTab, setActiveTab] = useState("overview")

    const menProducts = getProductsByCategory("men")
    const womenProducts = getProductsByCategory("women")
    const kidsProducts = getProductsByCategory("kids")
    const limitedProducts = products.filter(p => p.isLimited)
    const newProducts = products.filter(p => p.isNew)

    const categories = [
        { name: "Shirts", icon: Shirt, count: products.filter(p => p.subcategory === "shirts").length },
        { name: "Trousers", icon: Package, count: products.filter(p => p.subcategory === "trousers").length },
        { name: "Suits", icon: Crown, count: products.filter(p => p.subcategory === "suits").length },
        { name: "Accessories", icon: ShoppingBag, count: products.filter(p => p.subcategory === "accessories").length },
    ]

    const features = [
        { name: "3D Product Viewer", icon: Eye, description: "Interactive 3D visualization", href: "/Product/3d-viewer" },
        { name: "Size Selector", icon: Users, description: "Find your perfect fit", href: "/Product/size-guide" },
        { name: "Fabric Selector", icon: Shirt, description: "Choose your preferred material", href: "/Product/fabric-guide" },
        { name: "Color Selector", icon: Zap, description: "Explore color options", href: "/Product/color-guide" },
        { name: "Price Calculator", icon: TrendingUp, description: "Calculate total cost", href: "/Product/price-calculator" },
        { name: "Related Products", icon: Heart, description: "Discover similar items", href: "/Product/related" },
        { name: "Recently Viewed", icon: Clock, description: "Your browsing history", href: "/Product/recently-viewed" },
        { name: "Back-in-Stock", icon: Bell, description: "Get notified when available", href: "/Product/back-in-stock" },
        { name: "Pre-order", icon: Calendar, description: "Reserve upcoming items", href: "/Product/pre-order" },
        { name: "Out of Stock", icon: XCircle, description: "Currently unavailable items", href: "/Product/out-of-stock" },
        { name: "Bulk Order", icon: Users2, description: "Wholesale and bulk purchases", href: "/Product/bulk-order" },
        { name: "Limited Edition", icon: Crown, description: "Exclusive collections", href: "/Product/limited-edition" },
    ]

    return (
        <div className="min-h-screen bg-black/[0.96] text-white">
            <div className="container mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-4"
                    >
                        Product Hub
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto"
                    >
                        Explore our complete collection of premium clothing and accessories.
                        Discover features designed to enhance your shopping experience.
                    </motion.p>
                </div>

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex space-x-2 bg-gray-900 p-2 rounded-lg">
                        {["overview", "categories", "features"].map((tab) => (
                            <Button
                                key={tab}
                                variant={activeTab === tab ? "default" : "ghost"}
                                onClick={() => setActiveTab(tab)}
                                className={activeTab === tab ? "bg-lime-yellow-600 text-black" : "text-gray-400 hover:text-white"}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </Button>
                        ))}
                    </div>
                </div>

                {/* Overview Tab */}
                {activeTab === "overview" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-12"
                    >
                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <Card className="bg-gray-900 border-gray-800">
                                <CardContent className="p-6 text-center">
                                    <Users className="w-8 h-8 mx-auto mb-2 text-lime-yellow-400" />
                                    <div className="text-2xl font-bold">{products.length}</div>
                                    <div className="text-gray-400">Total Products</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-900 border-gray-800">
                                <CardContent className="p-6 text-center">
                                    <Star className="w-8 h-8 mx-auto mb-2 text-lime-yellow-400" />
                                    <div className="text-2xl font-bold">{newProducts.length}</div>
                                    <div className="text-gray-400">New Arrivals</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-900 border-gray-800">
                                <CardContent className="p-6 text-center">
                                    <Crown className="w-8 h-8 mx-auto mb-2 text-lime-yellow-400" />
                                    <div className="text-2xl font-bold">{limitedProducts.length}</div>
                                    <div className="text-gray-400">Limited Edition</div>
                                </CardContent>
                            </Card>
                            <Card className="bg-gray-900 border-gray-800">
                                <CardContent className="p-6 text-center">
                                    <Shirt className="w-8 h-8 mx-auto mb-2 text-lime-yellow-400" />
                                    <div className="text-2xl font-bold">{categories.length}</div>
                                    <div className="text-gray-400">Categories</div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Category Quick Access */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <Link href="/Product/men">
                                    <Card className="bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-colors cursor-pointer">
                                        <CardContent className="p-6 text-center">
                                            <Users className="w-12 h-12 mx-auto mb-4 text-lime-yellow-400" />
                                            <h3 className="text-xl font-semibold mb-2">Men</h3>
                                            <p className="text-gray-400 mb-4">{menProducts.length} products</p>
                                            <Badge variant="secondary">View Collection</Badge>
                                        </CardContent>
                                    </Card>
                                </Link>
                                <Link href="/Product/women">
                                    <Card className="bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-colors cursor-pointer">
                                        <CardContent className="p-6 text-center">
                                            <Users className="w-12 h-12 mx-auto mb-4 text-lime-yellow-400" />
                                            <h3 className="text-xl font-semibold mb-2">Women</h3>
                                            <p className="text-gray-400 mb-4">{womenProducts.length} products</p>
                                            <Badge variant="secondary">View Collection</Badge>
                                        </CardContent>
                                    </Card>
                                </Link>
                                <Link href="/Product/kids">
                                    <Card className="bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-colors cursor-pointer">
                                        <CardContent className="p-6 text-center">
                                            <Users className="w-12 h-12 mx-auto mb-4 text-lime-yellow-400" />
                                            <h3 className="text-xl font-semibold mb-2">Kids</h3>
                                            <p className="text-gray-400 mb-4">{kidsProducts.length} products</p>
                                            <Badge variant="secondary">View Collection</Badge>
                                        </CardContent>
                                    </Card>
                                </Link>
                                <Link href="/Product/all">
                                    <Card className="bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-colors cursor-pointer">
                                        <CardContent className="p-6 text-center">
                                            <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-lime-yellow-400" />
                                            <h3 className="text-xl font-semibold mb-2">All Products</h3>
                                            <p className="text-gray-400 mb-4">{products.length} products</p>
                                            <Badge variant="secondary">View All</Badge>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </div>
                        </div>

                        {/* Featured Products */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.slice(0, 6).map((product) => (
                                    <Link key={product.id} href={`/Product/${product.id}`}>
                                        <Card className="bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-colors cursor-pointer">
                                            <CardContent className="p-4">
                                                <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                                                    <Shirt className="w-12 h-12 text-gray-600" />
                                                </div>
                                                <h3 className="font-semibold mb-2">{product.name}</h3>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-lime-yellow-400 font-bold">₹{product.price}</span>
                                                    <div className="flex items-center space-x-1">
                                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                                        <span className="text-sm text-gray-400">{product.rating}</span>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Categories Tab */}
                {activeTab === "categories" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-bold mb-8">Product Categories</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {categories.map((category) => (
                                <Link key={category.name} href={`/Product/${category.name.toLowerCase()}`}>
                                    <Card className="bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-colors cursor-pointer">
                                        <CardContent className="p-6 text-center">
                                            <category.icon className="w-12 h-12 mx-auto mb-4 text-lime-yellow-400" />
                                            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                                            <p className="text-gray-400 mb-4">{category.count} products</p>
                                            <Badge variant="secondary">Browse {category.name}</Badge>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Features Tab */}
                {activeTab === "features" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-8"
                    >
                        <h2 className="text-3xl font-bold mb-8">Product Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature) => (
                                <Link key={feature.name} href={feature.href}>
                                    <Card className="bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-colors cursor-pointer">
                                        <CardContent className="p-6">
                                            <feature.icon className="w-8 h-8 mb-4 text-lime-yellow-400" />
                                            <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
                                            <p className="text-gray-400 text-sm">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    )
} 