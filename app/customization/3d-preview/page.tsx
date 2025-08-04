"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import {
    ChevronLeft,
    Camera,
    RotateCcw,
    ZoomIn,
    ZoomOut,
    Download,
    Share2,
    Settings
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function ThreeDPreviewPage() {
    const [rotation, setRotation] = useState([0])
    const [zoom, setZoom] = useState([1])
    const [viewMode, setViewMode] = useState("front")
    const [lighting, setLighting] = useState("studio")
    const router = useRouter()

    const viewModes = [
        { id: "front", name: "Front View", icon: "👤" },
        { id: "back", name: "Back View", icon: "👤" },
        { id: "side", name: "Side View", icon: "👤" },
        { id: "top", name: "Top View", icon: "👤" }
    ]

    const designSpecs = {
        fabric: "Premium Cotton",
        color: "Navy Blue",
        fit: "Regular Fit",
        size: "M",
        price: "$89.99"
    }

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
                            3D Preview
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            See your custom design in realistic 3D before ordering. Rotate, zoom, and explore
                            every detail of your creation.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* 3D Viewer */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center justify-between">
                                    <span className="flex items-center">
                                        <Camera className="w-6 h-6 mr-3 text-lime-yellow-500" />
                                        3D Model Viewer
                                    </span>
                                    <div className="flex space-x-2">
                                        <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                                            <Download className="w-4 h-4" />
                                        </Button>
                                        <Button size="sm" variant="outline" className="border-gray-600 text-gray-300">
                                            <Share2 className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                {/* 3D Model Placeholder */}
                                <div className="relative w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <div className="w-32 h-48 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                                <Camera className="w-12 h-12 text-lime-yellow-500" />
                                            </div>
                                            <p className="text-white font-medium">3D Model Loading...</p>
                                            <p className="text-gray-400 text-sm">Interactive 3D preview will appear here</p>
                                        </div>
                                    </div>

                                    {/* View Controls */}
                                    <div className="absolute bottom-4 left-4 flex space-x-2">
                                        {viewModes.map((mode) => (
                                            <Button
                                                key={mode.id}
                                                size="sm"
                                                variant={viewMode === mode.id ? "default" : "outline"}
                                                onClick={() => setViewMode(mode.id)}
                                                className={viewMode === mode.id
                                                    ? "bg-lime-yellow-600 text-black"
                                                    : "border-gray-600 text-gray-300"
                                                }
                                            >
                                                <span className="mr-1">{mode.icon}</span>
                                                {mode.name}
                                            </Button>
                                        ))}
                                    </div>

                                    {/* Rotation Controls */}
                                    <div className="absolute top-4 right-4 bg-black/50 rounded-lg p-3">
                                        <div className="text-white text-sm mb-2">Rotation</div>
                                        <Slider
                                            value={rotation}
                                            onValueChange={setRotation}
                                            max={360}
                                            min={0}
                                            step={1}
                                            className="w-24"
                                        />
                                        <Button
                                            size="sm"
                                            variant="ghost"
                                            onClick={() => setRotation([0])}
                                            className="text-white hover:text-lime-yellow-500 mt-2"
                                        >
                                            <RotateCcw className="w-4 h-4" />
                                        </Button>
                                    </div>

                                    {/* Zoom Controls */}
                                    <div className="absolute top-4 left-4 bg-black/50 rounded-lg p-3">
                                        <div className="text-white text-sm mb-2">Zoom</div>
                                        <div className="flex space-x-1">
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                onClick={() => setZoom([Math.max(0.5, zoom[0] - 0.1)])}
                                                className="text-white hover:text-lime-yellow-500"
                                            >
                                                <ZoomOut className="w-4 h-4" />
                                            </Button>
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                onClick={() => setZoom([Math.min(2, zoom[0] + 0.1)])}
                                                className="text-white hover:text-lime-yellow-500"
                                            >
                                                <ZoomIn className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Controls Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center">
                                    <Settings className="w-6 h-6 mr-3 text-lime-yellow-500" />
                                    Design Specifications
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Design Details */}
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Fabric:</span>
                                        <span className="text-white font-medium">{designSpecs.fabric}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Color:</span>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-4 h-4 rounded-full bg-blue-800 border border-white"></div>
                                            <span className="text-white font-medium">{designSpecs.color}</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Fit:</span>
                                        <span className="text-white font-medium">{designSpecs.fit}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Size:</span>
                                        <span className="text-white font-medium">{designSpecs.size}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-400">Price:</span>
                                        <span className="text-lime-yellow-500 font-bold text-lg">{designSpecs.price}</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-800 pt-6">
                                    <h4 className="text-white font-medium mb-4">Quick Actions</h4>
                                    <div className="space-y-3">
                                        <Button className="w-full bg-lime-yellow-600 text-black hover:bg-lime-yellow-700">
                                            Save Design
                                        </Button>
                                        <Button variant="outline" className="w-full border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500 hover:text-black">
                                            Add to Cart
                                        </Button>
                                        <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:border-lime-yellow-500 hover:text-lime-yellow-500">
                                            Share Design
                                        </Button>
                                    </div>
                                </div>

                                <div className="border-t border-gray-800 pt-6">
                                    <h4 className="text-white font-medium mb-4">View Options</h4>
                                    <div className="space-y-2">
                                        <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:border-lime-yellow-500 hover:text-lime-yellow-500">
                                            <span className="mr-2">🎨</span>
                                            Change Color
                                        </Button>
                                        <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:border-lime-yellow-500 hover:text-lime-yellow-500">
                                            <span className="mr-2">👕</span>
                                            Change Fit
                                        </Button>
                                        <Button variant="outline" className="w-full justify-start border-gray-600 text-gray-300 hover:border-lime-yellow-500 hover:text-lime-yellow-500">
                                            <span className="mr-2">🧵</span>
                                            Change Fabric
                                        </Button>
                                    </div>
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
                        Save Design
                    </Button>
                    <Button variant="outline" className="border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500 hover:text-black px-8 py-3">
                        Continue to Checkout
                    </Button>
                </motion.div>
            </div>
        </div>
    )
} 