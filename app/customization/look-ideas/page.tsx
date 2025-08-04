"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    ArrowLeft,
    Heart,
    Share2,
    Sparkles,
    TrendingUp,
    Calendar,
    Palette,
    Star
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function LookIdeasPage() {
    const [likedLooks, setLikedLooks] = useState<string[]>([])

    const trendingLooks = [
        {
            id: "summer-elegance",
            title: "Summer Elegance",
            description: "Light, breathable fabrics with sophisticated cuts",
            image: "/api/placeholder/400/500",
            category: "Summer",
            tags: ["Casual", "Elegant", "Breathable"],
            rating: 4.8,
            likes: 1247,
            price: "$89-149"
        },
        {
            id: "urban-minimalist",
            title: "Urban Minimalist",
            description: "Clean lines and neutral tones for city life",
            image: "/api/placeholder/400/500",
            category: "Urban",
            tags: ["Minimalist", "Neutral", "Versatile"],
            rating: 4.6,
            likes: 892,
            price: "$79-129"
        },
        {
            id: "bohemian-chic",
            title: "Bohemian Chic",
            description: "Free-spirited designs with artistic flair",
            image: "/api/placeholder/400/500",
            category: "Bohemian",
            tags: ["Artistic", "Free-spirited", "Colorful"],
            rating: 4.7,
            likes: 1103,
            price: "$99-169"
        },
        {
            id: "corporate-bold",
            title: "Corporate Bold",
            description: "Power dressing with contemporary edge",
            image: "/api/placeholder/400/500",
            category: "Corporate",
            tags: ["Professional", "Bold", "Structured"],
            rating: 4.9,
            likes: 1567,
            price: "$129-199"
        },
        {
            id: "weekend-casual",
            title: "Weekend Casual",
            description: "Comfortable yet stylish for relaxed days",
            image: "/api/placeholder/400/500",
            category: "Casual",
            tags: ["Comfortable", "Relaxed", "Stylish"],
            rating: 4.5,
            likes: 734,
            price: "$69-119"
        },
        {
            id: "evening-glamour",
            title: "Evening Glamour",
            description: "Sophisticated looks for special occasions",
            image: "/api/placeholder/400/500",
            category: "Evening",
            tags: ["Glamorous", "Sophisticated", "Formal"],
            rating: 4.8,
            likes: 1342,
            price: "$149-249"
        }
    ]

    const seasonalCollections = [
        {
            season: "Spring 2024",
            looks: trendingLooks.slice(0, 3),
            colorPalette: ["Soft Pink", "Mint Green", "Lavender", "Cream"]
        },
        {
            season: "Summer 2024",
            looks: trendingLooks.slice(3, 6),
            colorPalette: ["Ocean Blue", "Coral", "Sunset Orange", "White"]
        }
    ]

    const toggleLike = (lookId: string) => {
        setLikedLooks(prev =>
            prev.includes(lookId)
                ? prev.filter(id => id !== lookId)
                : [...prev, lookId]
        )
    }

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <Link href="/customization">
                        <Button variant="ghost" className="text-lime-yellow-500 hover:text-lime-yellow-400 mb-6">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Customization
                        </Button>
                    </Link>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Look Customization Ideas
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Discover trending styles and get inspired to create your perfect look.
                            From seasonal collections to timeless classics, find your style inspiration here.
                        </p>
                    </motion.div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="trending" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-gray-900 border-gray-800">
                        <TabsTrigger value="trending" className="text-lime-yellow-500 data-[state=active]:bg-lime-yellow-500 data-[state=active]:text-black">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            Trending Now
                        </TabsTrigger>
                        <TabsTrigger value="seasonal" className="text-lime-yellow-500 data-[state=active]:bg-lime-yellow-500 data-[state=active]:text-black">
                            <Calendar className="w-4 h-4 mr-2" />
                            Seasonal Collections
                        </TabsTrigger>
                        <TabsTrigger value="inspiration" className="text-lime-yellow-500 data-[state=active]:bg-lime-yellow-500 data-[state=active]:text-black">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Style Inspiration
                        </TabsTrigger>
                    </TabsList>

                    {/* Trending Now */}
                    <TabsContent value="trending" className="mt-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {trendingLooks.map((look, index) => (
                                <motion.div
                                    key={look.id}
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
                                                    onClick={() => toggleLike(look.id)}
                                                >
                                                    <Heart className={`w-4 h-4 ${likedLooks.includes(look.id) ? 'fill-red-500 text-red-500' : ''}`} />
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
                                                <Badge className="bg-lime-yellow-600 text-black">{look.category}</Badge>
                                            </div>
                                        </div>
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <CardTitle className="text-white text-lg">{look.title}</CardTitle>
                                                <div className="flex items-center space-x-1">
                                                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                                    <span className="text-sm text-gray-300">{look.rating}</span>
                                                </div>
                                            </div>
                                            <p className="text-gray-400 text-sm">{look.description}</p>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {look.tags.map((tag, tagIndex) => (
                                                    <Badge key={tagIndex} variant="outline" className="text-xs border-gray-600 text-gray-300">
                                                        {tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-lime-yellow-500 font-semibold">{look.price}</span>
                                                <span className="text-sm text-gray-400">{look.likes} likes</span>
                                            </div>
                                            <Button className="w-full mt-4 bg-lime-yellow-600 text-black hover:bg-lime-yellow-700">
                                                Customize This Look
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Seasonal Collections */}
                    <TabsContent value="seasonal" className="mt-8">
                        <div className="space-y-12">
                            {seasonalCollections.map((collection, collectionIndex) => (
                                <motion.div
                                    key={collection.season}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: collectionIndex * 0.2 }}
                                >
                                    <div className="mb-8">
                                        <h2 className="text-3xl font-bold text-white mb-4">{collection.season}</h2>
                                        <div className="flex items-center space-x-4 mb-6">
                                            <span className="text-gray-400">Color Palette:</span>
                                            <div className="flex space-x-2">
                                                {collection.colorPalette.map((color, colorIndex) => (
                                                    <div
                                                        key={colorIndex}
                                                        className="w-6 h-6 rounded-full border-2 border-white"
                                                        style={{ backgroundColor: color.toLowerCase().replace(' ', '') }}
                                                        title={color}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {collection.looks.map((look, lookIndex) => (
                                            <motion.div
                                                key={look.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: (collectionIndex * 0.2) + (lookIndex * 0.1) }}
                                                whileHover={{ scale: 1.02 }}
                                            >
                                                <Card className="bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-all duration-300 overflow-hidden">
                                                    <div className="relative">
                                                        <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                                            <Palette className="w-10 h-10 text-lime-yellow-500" />
                                                        </div>
                                                        <div className="absolute bottom-4 left-4">
                                                            <Badge className="bg-lime-yellow-600 text-black">{look.category}</Badge>
                                                        </div>
                                                    </div>
                                                    <CardHeader>
                                                        <CardTitle className="text-white">{look.title}</CardTitle>
                                                        <p className="text-gray-400 text-sm">{look.description}</p>
                                                    </CardHeader>
                                                    <CardContent>
                                                        <Button className="w-full bg-lime-yellow-600 text-black hover:bg-lime-yellow-700">
                                                            Explore Collection
                                                        </Button>
                                                    </CardContent>
                                                </Card>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </TabsContent>

                    {/* Style Inspiration */}
                    <TabsContent value="inspiration" className="mt-8">
                        <div className="text-center py-16">
                            <Sparkles className="w-16 h-16 text-lime-yellow-500 mx-auto mb-6" />
                            <h3 className="text-2xl font-bold text-white mb-4">Style Inspiration Gallery</h3>
                            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                                Browse through curated collections of user-created looks and professional styling inspiration.
                                Find your perfect style match and get inspired to create something unique.
                            </p>
                            <Button className="bg-lime-yellow-600 text-black hover:bg-lime-yellow-700">
                                Browse Inspiration Gallery
                            </Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
} 