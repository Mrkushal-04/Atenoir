"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
    ChevronLeft,
    Heart,
    Share2,
    Edit,
    Trash2,
    Download,
    Calendar,
    Tag
} from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function SaveDesignPage() {
    const [designName, setDesignName] = useState("")
    const [designDescription, setDesignDescription] = useState("")
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [savedDesigns, setSavedDesigns] = useState<any[]>([])
    const [isCreating, setIsCreating] = useState(false)
    const router = useRouter()

    const availableTags = [
        "Summer", "Winter", "Casual", "Formal", "Office", "Party",
        "Minimalist", "Bold", "Urban", "Classic", "Trendy", "Vintage"
    ]

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        )
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
                            Save Custom Design
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Save and manage your custom designs for future orders. Create a library of your
                            favorite styles and share them with others.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Save New Design */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Save New Design</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <label className="text-white text-sm font-medium mb-2 block">
                                        Design Name
                                    </label>
                                    <Input
                                        placeholder="Enter design name..."
                                        value={designName}
                                        onChange={(e) => setDesignName(e.target.value)}
                                        className="bg-gray-800 border-gray-700 text-white"
                                    />
                                </div>

                                <div>
                                    <label className="text-white text-sm font-medium mb-2 block">
                                        Description
                                    </label>
                                    <Textarea
                                        placeholder="Describe your design..."
                                        value={designDescription}
                                        onChange={(e) => setDesignDescription(e.target.value)}
                                        className="bg-gray-800 border-gray-700 text-white"
                                        rows={4}
                                    />
                                </div>

                                <div>
                                    <label className="text-white text-sm font-medium mb-2 block">
                                        Tags
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {availableTags.map((tag) => (
                                            <Badge
                                                key={tag}
                                                variant={selectedTags.includes(tag) ? "default" : "outline"}
                                                className={`cursor-pointer ${selectedTags.includes(tag)
                                                        ? "bg-lime-yellow-600 text-black"
                                                        : "border-gray-600 text-gray-300 hover:border-lime-yellow-500"
                                                    }`}
                                                onClick={() => toggleTag(tag)}
                                            >
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <Button className="w-full bg-lime-yellow-600 text-black hover:bg-lime-yellow-700">
                                    Save Design
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Saved Designs */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Your Saved Designs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {savedDesigns.map((design) => (
                                        <div
                                            key={design.id}
                                            className="p-4 bg-gray-800 rounded-lg border border-gray-700"
                                        >
                                            <div className="flex items-start space-x-4">
                                                <div className="w-20 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded flex items-center justify-center">
                                                    <Heart className="w-6 h-6 text-lime-yellow-500" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-start justify-between">
                                                        <div>
                                                            <h4 className="text-white font-medium">{design.name}</h4>
                                                            <p className="text-gray-400 text-sm">{design.description}</p>
                                                            <div className="flex items-center space-x-4 mt-2 text-sm text-gray-300">
                                                                <span>{design.fabric}</span>
                                                                <span>{design.color}</span>
                                                                <span>{design.fit}</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <p className="text-lime-yellow-500 font-bold">{design.price}</p>
                                                            <p className="text-gray-400 text-xs">{design.createdAt}</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-between mt-3">
                                                        <div className="flex space-x-1">
                                                            {design.tags.map((tag) => (
                                                                <Badge key={tag} variant="outline" className="text-xs border-gray-600 text-gray-300">
                                                                    {tag}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                        <div className="flex space-x-2">
                                                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                                                                <Edit className="w-4 h-4" />
                                                            </Button>
                                                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                                                                <Share2 className="w-4 h-4" />
                                                            </Button>
                                                            <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                                                                <Download className="w-4 h-4" />
                                                            </Button>
                                                            <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                                                                <Trash2 className="w-4 h-4" />
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button className="bg-lime-yellow-600 text-black hover:bg-lime-yellow-700 px-8 py-3">
                        Create New Design
                    </Button>
                    <Button variant="outline" className="border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500 hover:text-black px-8 py-3">
                        Share All Designs
                    </Button>
                </motion.div>
            </div>
        </div>
    )
} 