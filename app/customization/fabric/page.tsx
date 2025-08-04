"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    ChevronLeft,
    Scissors,
    Star,
    Heart
} from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function FabricSelectionPage() {
    const [selectedFabrics, setSelectedFabrics] = useState<string[]>([])
    const router = useRouter()

    const fabrics = [
        {
            id: "cotton",
            name: "Premium Cotton",
            description: "Soft, breathable, and comfortable",
            price: "+$15",
            sustainability: "High",
            comfort: 5,
            durability: 4,
            color: "from-green-400 to-green-600"
        },
        {
            id: "linen",
            name: "Linen",
            description: "Lightweight and naturally textured",
            price: "+$25",
            sustainability: "Very High",
            comfort: 4,
            durability: 5,
            color: "from-amber-400 to-amber-600"
        },
        {
            id: "silk",
            name: "Silk",
            description: "Luxurious and smooth to the touch",
            price: "+$45",
            sustainability: "Medium",
            comfort: 5,
            durability: 3,
            color: "from-purple-400 to-purple-600"
        },
        {
            id: "wool",
            name: "Merino Wool",
            description: "Warm, breathable, and odor-resistant",
            price: "+$35",
            sustainability: "High",
            comfort: 4,
            durability: 5,
            color: "from-gray-400 to-gray-600"
        }
    ]

    const toggleFabricSelection = (fabricId: string) => {
        setSelectedFabrics(prev =>
            prev.includes(fabricId)
                ? prev.filter(id => id !== fabricId)
                : [...prev, fabricId]
        )
    }

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-600'}`}
            />
        ))
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
                            Choose Your Fabric
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Select from our premium fabric collection. Each material is carefully chosen for quality,
                            comfort, and sustainability.
                        </p>
                    </motion.div>
                </div>

                {/* Fabric Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {fabrics.map((fabric, index) => (
                        <motion.div
                            key={fabric.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Card className={`bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-all duration-300 cursor-pointer ${selectedFabrics.includes(fabric.id) ? 'border-lime-yellow-500 bg-gray-800' : ''
                                }`}>
                                <div className="relative">
                                    <div className={`w-full h-48 bg-gradient-to-r ${fabric.color} flex items-center justify-center`}>
                                        <Scissors className="w-12 h-12 text-white" />
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <Badge className="bg-lime-yellow-600 text-black">{fabric.price}</Badge>
                                    </div>
                                </div>
                                <CardHeader>
                                    <CardTitle className="text-white">{fabric.name}</CardTitle>
                                    <p className="text-gray-400 text-sm">{fabric.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <div className="flex items-center space-x-1 mb-1">
                                                    <span className="text-white text-sm">Comfort</span>
                                                    <div className="flex">
                                                        {renderStars(fabric.comfort)}
                                                    </div>
                                                </div>
                                                <div className="flex items-center space-x-1">
                                                    <span className="text-white text-sm">Durability</span>
                                                    <div className="flex">
                                                        {renderStars(fabric.durability)}
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <Badge variant="outline" className="border-gray-600 text-gray-300">
                                                    {fabric.sustainability} Sustainability
                                                </Badge>
                                            </div>
                                        </div>

                                        <Button
                                            className={`w-full ${selectedFabrics.includes(fabric.id)
                                                ? 'bg-lime-yellow-600 text-black'
                                                : 'bg-gray-800 text-white hover:bg-lime-yellow-600 hover:text-black'
                                                }`}
                                            onClick={() => toggleFabricSelection(fabric.id)}
                                        >
                                            {selectedFabrics.includes(fabric.id) ? 'Selected' : 'Select Fabric'}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button className="bg-lime-yellow-600 text-black hover:bg-lime-yellow-700 px-8 py-3">
                        Save Fabric Selection
                    </Button>
                    <Button variant="outline" className="border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500 hover:text-black px-8 py-3">
                        Continue to Color Selection
                    </Button>
                </motion.div>
            </div>
        </div>
    )
} 