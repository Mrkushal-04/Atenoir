"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
    ChevronLeft,
    Eye,
    Heart,
    Share2,
    Search,
    Filter,
    Sparkles
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function DesignInspirationPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [likedDesigns, setLikedDesigns] = useState<string[]>([])
    const router = useRouter()

    const categories = [
        { id: "all", name: "All Designs" },
        { id: "trending", name: "Trending" },
        { id: "minimalist", name: "Minimalist" },
        { id: "bohemian", name: "Bohemian" },
        { id: "corporate", name: "Corporate" },
        { id: "streetwear", name: "Streetwear" }
    ]

    const designs = [
        {
            id: "design-1",
            title: "Urban Minimalist",
            designer: "Sarah Chen",
            category: "minimalist",
            likes: 1247,
            views: 8900,
            image: "/api/placeholder/400/500",
            tags: ["Clean Lines", "Neutral", "Modern"],
            description: "Clean, structured design with focus on simplicity"
        },
        {
            id: "design-2",
            title: "Bohemian Dreams",
            designer: "Alex Rivera",
            category: "bohemian",
            likes: 892,
            views: 5600,
            image: "/api/placeholder/400/500",
            tags: ["Artistic", "Free-spirited", "Colorful"],
            description: "Free-flowing design with artistic elements"
        },
        {
            id: "design-3",
            title: "Corporate Power",
            designer: "Michael Kim",
            category: "corporate",
            likes: 1103,
            views: 7200,
            image: "/api/placeholder/400/500",
            tags: ["Professional", "Bold", "Structured"],
            description: "Professional design with contemporary edge"
        },
        {
            id: "design-4",
            title: "Street Style",
            designer: "Emma Wilson",
            category: "streetwear",
            likes: 1567,
            views: 9800,
            image: "/api/placeholder/400/500",
            tags: ["Edgy", "Urban", "Trendy"],
            description: "Modern streetwear with urban appeal"
        },
        {
            id: "design-5",
            title: "Elegant Simplicity",
            designer: "David Park",
            category: "minimalist",
            likes: 734,
            views: 4200,
            image: "/api/placeholder/400/500",
            tags: ["Elegant", "Simple", "Timeless"],
            description: "Timeless elegance through simplicity"
        },
        {
            id: "design-6",
            title: "Artistic Expression",
            designer: "Lisa Thompson",
            category: "bohemian",
            likes: 1342,
            views: 8100,
            image: "/api/placeholder/400/500",
            tags: ["Artistic", "Expressive", "Unique"],
            description: "Unique artistic expression in fashion"
        }
    ]

    const toggleLike = (designId: string) => {
        setLikedDesigns(prev =>
            prev.includes(designId)
                ? prev.filter(id => id !== designId)
                : [...prev, designId]
        )
    }

    const filteredDesigns = designs.filter(design => {
        const matchesSearch = design.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            design.designer.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesCategory = selectedCategory === "all" || design.category === selectedCategory
        return matchesSearch && matchesCategory
    })

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black rounded-full px-4 py-2 transition-colors mb-6"
                        aria-label="Go back"
                    >
                        <ChevronLeft className="w-5 h-5 mr-2" /> Back
                    </button>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Design Inspiration Gallery
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Browse curated designs and get inspired by fashion trends. Discover unique styles
                            and create your own masterpiece.
                        </p>
                    </motion.div>
                </div>

                {/* Search and Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                placeholder="Search designs or designers..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="pl-10 bg-gray-900 border-gray-700 text-white"
                            />
                        </div>
                        <div className="flex gap-2">
                            {categories.map((category) => (
                                <Button
                                    key={category.id}
                                    variant={selectedCategory === category.id ? "default" : "outline"}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={selectedCategory === category.id
                                        ? "bg-lime-yellow-600 text-black hover:bg-lime-yellow-700"
                                        : "border-gray-600 text-gray-300 hover:border-lime-yellow-500 hover:text-lime-yellow-500"
                                    }
                                >
                                    {category.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Designs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredDesigns.map((design, index) => (
                        <motion.div
                            key={design.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Card className="bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-all duration-300 overflow-hidden">
                                <div className="relative">
                                    <div className="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                        <Sparkles className="w-12 h-12 text-lime-yellow-500" />
                                    </div>
                                    <div className="absolute top-4 right-4 flex space-x-2">
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="bg-black/50 hover:bg-black/70 text-white"
                                            onClick={() => toggleLike(design.id)}
                                        >
                                            <Heart className={`w-4 h-4 ${likedDesigns.includes(design.id) ? 'fill-red-500 text-red-500' : ''}`} />
                                        </Button>
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            className="bg-black/50 hover:bg-black/70 text-white"
                                        >
                                            <Share2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <Badge className="bg-lime-yellow-600 text-black capitalize">
                                            {design.category}
                                        </Badge>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-white text-lg">{design.title}</CardTitle>
                                    <p className="text-gray-400 text-sm">by {design.designer}</p>
                                    <p className="text-gray-300 text-sm">{design.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {design.tags.map((tag, tagIndex) => (
                                            <Badge key={tagIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                                        <div className="flex items-center space-x-4">
                                            <span className="flex items-center space-x-1">
                                                <Heart className="w-4 h-4" />
                                                <span>{design.likes}</span>
                                            </span>
                                            <span className="flex items-center space-x-1">
                                                <Eye className="w-4 h-4" />
                                                <span>{design.views}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <Button className="w-full bg-lime-yellow-600 text-black hover:bg-lime-yellow-700">
                                        Use This Design
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredDesigns.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <Sparkles className="w-16 h-16 text-lime-yellow-500 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-white mb-4">No designs found</h3>
                        <p className="text-gray-400 mb-8">
                            Try adjusting your search terms or filter criteria.
                        </p>
                        <Button
                            onClick={() => {
                                setSearchQuery("")
                                setSelectedCategory("all")
                            }}
                            className="bg-lime-yellow-600 text-black hover:bg-lime-yellow-700"
                        >
                            Clear Filters
                        </Button>
                    </motion.div>
                )}

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button className="bg-lime-yellow-600 text-black hover:bg-lime-yellow-700 px-8 py-3">
                        Submit Your Design
                    </Button>
                    <Button variant="outline" className="border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500 hover:text-black px-8 py-3">
                        Browse More Inspiration
                    </Button>
                </motion.div>
            </div>
        </div>
    )
} 