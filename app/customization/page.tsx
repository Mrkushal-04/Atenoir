"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Palette,
    Scissors,
    Eye,
    Sparkles,
    Camera,
    Heart,
    ArrowRight,
    Shirt,
    Zap,
    Star,
    ChevronLeft
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function CustomizationPage() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const router = useRouter()

    const customizationOptions = [
        {
            id: "look-ideas",
            title: "Look Customization Ideas",
            description: "Get inspired with trending styles and outfit combinations",
            icon: Sparkles,
            color: "from-purple-500 to-pink-500",
            features: ["Trending Styles", "Outfit Combinations", "Seasonal Looks"],
            href: "/customization/look-ideas"
        },
        {
            id: "fit-customization",
            title: "Choose Fit",
            description: "Customize the fit and silhouette of your garments",
            icon: Shirt,
            color: "from-blue-500 to-cyan-500",
            features: ["Slim Fit", "Regular Fit", "Relaxed Fit", "Custom Measurements"],
            href: "/customization/fit"
        },
        {
            id: "fabric-selection",
            title: "Fabric Selection",
            description: "Choose from premium fabrics and materials",
            icon: Scissors,
            color: "from-green-500 to-emerald-500",
            features: ["Cotton", "Linen", "Silk", "Wool", "Premium Blends"],
            href: "/customization/fabric"
        },
        {
            id: "color-selection",
            title: "Color Selection",
            description: "Explore our extensive color palette and create unique combinations",
            icon: Palette,
            color: "from-orange-500 to-red-500",
            features: ["200+ Colors", "Custom Dyeing", "Color Matching"],
            href: "/customization/color"
        },
        {
            id: "design-inspiration",
            title: "Design Inspiration Gallery",
            description: "Browse curated designs and get inspired by fashion trends",
            icon: Eye,
            color: "from-indigo-500 to-purple-500",
            features: ["Curated Collections", "Trending Designs", "User Creations"],
            href: "/customization/inspiration"
        },
        {
            id: "3d-preview",
            title: "Preview in 3D",
            description: "See your custom design in realistic 3D before ordering",
            icon: Camera,
            color: "from-teal-500 to-blue-500",
            features: ["360° View", "Realistic Rendering", "Multiple Angles"],
            href: "/customization/3d-preview"
        },
        {
            id: "save-design",
            title: "Save Custom Design",
            description: "Save and manage your custom designs for future orders",
            icon: Heart,
            color: "from-pink-500 to-rose-500",
            features: ["Design Library", "Share Designs", "Quick Reorder"],
            href: "/customization/save-design"
        },
        {
            id: "ai-stylist",
            title: "AI Stylist Suggestion",
            description: "Get personalized style recommendations from our AI stylist",
            icon: Zap,
            color: "from-yellow-500 to-orange-500",
            features: ["Personalized Recommendations", "Style Analysis", "Trend Predictions"],
            href: "/customization/ai-stylist"
        },
        {
            id: "virtual-tryon",
            title: "Virtual Try-On with AR",
            description: "Try on clothes virtually using augmented reality",
            icon: Camera,
            color: "from-violet-500 to-purple-500",
            features: ["AR Try-On", "Body Scanning", "Real-time Fitting"],
            href: "/customization/virtual-tryon"
        },
        {
            id: "style-quiz",
            title: "Style Quiz",
            description: "Take our style quiz to discover your perfect look",
            icon: Star,
            color: "from-cyan-500 to-blue-500",
            features: ["Style Assessment", "Personalized Results", "Recommendations"],
            href: "/customization/style-quiz"
        }
    ]

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
                    <div className="text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-bold text-white mb-6"
                        >
                            Customize Your Style
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
                        >
                            Create your perfect look with our advanced customization tools. From fit to fabric,
                            color to style - every detail is in your hands.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <Badge className="bg-lime-yellow-600 text-black px-4 py-2">200+ Colors</Badge>
                            <Badge className="bg-lime-yellow-600 text-black px-4 py-2">Premium Fabrics</Badge>
                            <Badge className="bg-lime-yellow-600 text-black px-4 py-2">3D Preview</Badge>
                            <Badge className="bg-lime-yellow-600 text-black px-4 py-2">AR Try-On</Badge>
                        </motion.div>
                    </div>
                </div>

                {/* Customization Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {customizationOptions.map((option, index) => {
                        const IconComponent = option.icon
                        return (
                            <motion.div
                                key={option.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <Link href={option.href}>
                                    <Card className="bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-all duration-300 cursor-pointer group h-full">
                                        <CardHeader>
                                            <div className="flex items-center space-x-3 mb-4">
                                                <div className={`p-3 rounded-lg bg-gradient-to-r ${option.color}`}>
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>
                                                <CardTitle className="text-white group-hover:text-lime-yellow-400 transition-colors">
                                                    {option.title}
                                                </CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-gray-400 mb-4">{option.description}</p>
                                            <div className="space-y-2 mb-6">
                                                {option.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-center space-x-2">
                                                        <div className="w-1.5 h-1.5 bg-lime-yellow-500 rounded-full"></div>
                                                        <span className="text-sm text-gray-300">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <Button
                                                    variant="outline"
                                                    className="border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500 hover:text-black transition-all"
                                                >
                                                    Explore
                                                    <ArrowRight className="w-4 h-4 ml-2" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Quick Start Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-20"
                >
                    <Card className="bg-gradient-to-r from-lime-yellow-600 to-lime-yellow-700 border-0">
                        <CardContent className="p-8 text-center">
                            <h2 className="text-3xl font-bold text-black mb-4">Ready to Start Customizing?</h2>
                            <p className="text-black/80 mb-6 text-lg">
                                Take our style quiz to get personalized recommendations or jump straight into customization.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/customization/style-quiz">
                                    <Button className="bg-black text-lime-yellow-500 hover:bg-gray-800">
                                        Take Style Quiz
                                    </Button>
                                </Link>
                                <Link href="/customization/3d-preview">
                                    <Button variant="outline" className="border-black text-black hover:bg-black hover:text-lime-yellow-500">
                                        Start Customizing
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
} 