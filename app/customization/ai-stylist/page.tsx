"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
    ChevronLeft,
    Zap,
    Sparkles,
    Heart,
    Star,
    MessageSquare
} from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function AIStylistPage() {
    const [userInput, setUserInput] = useState("")
    const [suggestions, setSuggestions] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const styleProfiles = [
        {
            id: "minimalist",
            name: "Minimalist",
            description: "Clean lines, neutral colors, timeless pieces",
            icon: "⚪",
            confidence: 85
        },
        {
            id: "bohemian",
            name: "Bohemian",
            description: "Free-spirited, artistic, eclectic mix",
            icon: "🌸",
            confidence: 72
        },
        {
            id: "corporate",
            name: "Corporate",
            description: "Professional, structured, sophisticated",
            icon: "👔",
            confidence: 68
        }
    ]

    const aiRecommendations = [
        {
            id: "rec-1",
            title: "Weekend Casual Look",
            description: "Perfect for relaxed weekends with friends",
            items: ["Cotton T-Shirt", "Relaxed Jeans", "Sneakers"],
            confidence: 92,
            price: "$89-149",
            image: "/api/placeholder/300/400"
        },
        {
            id: "rec-2",
            title: "Office Professional",
            description: "Elevate your work wardrobe",
            items: ["Button-up Shirt", "Tailored Pants", "Loafers"],
            confidence: 88,
            price: "$129-199",
            image: "/api/placeholder/300/400"
        },
        {
            id: "rec-3",
            title: "Evening Out",
            description: "Sophisticated look for special occasions",
            items: ["Silk Blouse", "Dark Jeans", "Heels"],
            confidence: 85,
            price: "$149-249",
            image: "/api/placeholder/300/400"
        }
    ]

    const analyzeStyle = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setSuggestions(aiRecommendations)
        }, 3000)
    }

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-6xl mx-auto">
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
                            AI Stylist
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Get personalized style recommendations from our AI stylist. Describe your preferences,
                            occasion, or style goals and receive curated suggestions.
                        </p>
                    </motion.div>
                </div>

                {/* Style Analysis */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <Card className="bg-gray-900 border-gray-800">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <Zap className="w-6 h-6 mr-3 text-lime-yellow-500" />
                                Style Analysis
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {styleProfiles.map((profile) => (
                                    <div key={profile.id} className="text-center p-6 bg-gray-800 rounded-lg">
                                        <div className="text-4xl mb-3">{profile.icon}</div>
                                        <h3 className="text-white font-medium mb-2">{profile.name}</h3>
                                        <p className="text-gray-400 text-sm mb-4">{profile.description}</p>
                                        <div className="flex items-center justify-center space-x-2">
                                            <div className="w-full bg-gray-700 rounded-full h-2">
                                                <div
                                                    className="bg-lime-yellow-500 h-2 rounded-full"
                                                    style={{ width: `${profile.confidence}%` }}
                                                />
                                            </div>
                                            <span className="text-lime-yellow-500 text-sm font-medium">
                                                {profile.confidence}%
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 text-center">
                                <Button
                                    onClick={analyzeStyle}
                                    disabled={isLoading}
                                    className="bg-lime-yellow-600 text-black hover:bg-lime-yellow-700 px-8 py-3"
                                >
                                    {isLoading ? (
                                        <div className="flex items-center space-x-2">
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                                            <span>Analyzing Style...</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center space-x-2">
                                            <Sparkles className="w-5 h-5" />
                                            <span>Get AI Recommendations</span>
                                        </div>
                                    )}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* AI Recommendations */}
                {suggestions.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-12"
                    >
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center">
                                    <Star className="w-6 h-6 mr-3 text-lime-yellow-500" />
                                    AI Recommendations
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {suggestions.map((rec, index) => (
                                        <motion.div
                                            key={rec.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 + index * 0.1 }}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <Card className="bg-gray-800 border-gray-700 hover:border-lime-yellow-500 transition-all duration-300">
                                                <div className="relative">
                                                    <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                                        <MessageSquare className="w-12 h-12 text-lime-yellow-500" />
                                                    </div>
                                                    <div className="absolute top-4 right-4">
                                                        <Badge className="bg-lime-yellow-600 text-black">
                                                            {rec.confidence}% Match
                                                        </Badge>
                                                    </div>
                                                </div>
                                                <CardHeader>
                                                    <CardTitle className="text-white text-lg">{rec.title}</CardTitle>
                                                    <p className="text-gray-400 text-sm">{rec.description}</p>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="space-y-3">
                                                        <div>
                                                            <h4 className="text-white text-sm font-medium mb-2">Recommended Items:</h4>
                                                            <div className="space-y-1">
                                                                {rec.items.map((item: string, itemIndex: number) => (
                                                                    <div key={itemIndex} className="flex items-center space-x-2">
                                                                        <div className="w-1.5 h-1.5 bg-lime-yellow-500 rounded-full"></div>
                                                                        <span className="text-sm text-gray-300">{item}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="text-lime-yellow-500 font-semibold">{rec.price}</span>
                                                            <Button size="sm" className="bg-lime-yellow-600 text-black hover:bg-lime-yellow-700">
                                                                Customize
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button className="bg-lime-yellow-600 text-black hover:bg-lime-yellow-700 px-8 py-3">
                        Take Style Quiz
                    </Button>
                    <Button variant="outline" className="border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500 hover:text-black px-8 py-3">
                        Browse All Styles
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}
