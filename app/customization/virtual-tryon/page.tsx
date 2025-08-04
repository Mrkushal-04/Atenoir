"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
    ChevronLeft,
    Camera,
    Smartphone,
    Monitor,
    Zap,
    Download,
    Share2,
    Settings
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function VirtualTryOnPage() {
    const [isARActive, setIsARActive] = useState(false)
    const [selectedDevice, setSelectedDevice] = useState("mobile")
    const [isScanning, setIsScanning] = useState(false)
    const router = useRouter()

    const tryOnItems = [
        {
            id: "shirt",
            name: "Classic Shirt",
            category: "Tops",
            colors: ["White", "Blue", "Black"],
            sizes: ["S", "M", "L", "XL"]
        },
        {
            id: "pants",
            name: "Slim Pants",
            category: "Bottoms",
            colors: ["Black", "Navy", "Gray"],
            sizes: ["30", "32", "34", "36"]
        },
        {
            id: "dress",
            name: "Summer Dress",
            category: "Dresses",
            colors: ["Floral", "Blue", "Pink"],
            sizes: ["XS", "S", "M", "L"]
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
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Virtual Try-On
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Try on clothes virtually using augmented reality. See how garments look on you
                            in real-time before making a purchase.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* AR Viewer */}
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
                                        AR Try-On Viewer
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
                                {/* AR Camera View */}
                                <div className="relative w-full h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center">
                                            <Smartphone className="w-16 h-16 text-lime-yellow-500 mx-auto mb-4" />
                                            <p className="text-white font-medium mb-2">AR Camera Access Required</p>
                                            <p className="text-gray-400 text-sm mb-4">
                                                Allow camera access to start virtual try-on
                                            </p>
                                            <Button
                                                onClick={() => setIsARActive(true)}
                                                className="bg-lime-yellow-600 text-black hover:bg-lime-yellow-700"
                                            >
                                                Start AR Try-On
                                            </Button>
                                        </div>
                                    </div>

                                    {/* AR Overlay Elements */}
                                    {isARActive && (
                                        <div className="absolute inset-0 pointer-events-none">
                                            <div className="absolute top-4 left-4 bg-black/50 rounded-lg p-2">
                                                <Badge className="bg-green-600 text-white">AR Active</Badge>
                                            </div>
                                            <div className="absolute bottom-4 left-4 bg-black/50 rounded-lg p-2">
                                                <p className="text-white text-sm">Point camera at yourself</p>
                                            </div>
                                        </div>
                                    )}
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
                                    Try-On Controls
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Item Selection */}
                                <div>
                                    <h4 className="text-white font-medium mb-3">Select Item</h4>
                                    <div className="space-y-2">
                                        {tryOnItems.map((item) => (
                                            <div
                                                key={item.id}
                                                className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${selectedDevice === item.id
                                                    ? 'border-lime-yellow-500 bg-gray-800'
                                                    : 'border-gray-700 hover:border-gray-600'
                                                    }`}
                                                onClick={() => setSelectedDevice(item.id)}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <h5 className="text-white font-medium">{item.name}</h5>
                                                        <p className="text-gray-400 text-sm">{item.category}</p>
                                                    </div>
                                                    <Badge className="bg-lime-yellow-600 text-black">
                                                        {item.colors.length} Colors
                                                    </Badge>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Color Selection */}
                                <div>
                                    <h4 className="text-white font-medium mb-3">Colors</h4>
                                    <div className="flex space-x-2">
                                        {tryOnItems.find(item => item.id === selectedDevice)?.colors.map((color) => (
                                            <div
                                                key={color}
                                                className="w-8 h-8 rounded-full border-2 border-white cursor-pointer hover:scale-110 transition-transform"
                                                style={{ backgroundColor: color.toLowerCase().replace(' ', '') }}
                                                title={color}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Size Selection */}
                                <div>
                                    <h4 className="text-white font-medium mb-3">Size</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {tryOnItems.find(item => item.id === selectedDevice)?.sizes.map((size) => (
                                            <Button
                                                key={size}
                                                size="sm"
                                                variant="outline"
                                                className="border-gray-600 text-gray-300 hover:border-lime-yellow-500 hover:text-lime-yellow-500"
                                            >
                                                {size}
                                            </Button>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-gray-800 pt-6">
                                    <h4 className="text-white font-medium mb-4">Quick Actions</h4>
                                    <div className="space-y-3">
                                        <Button className="w-full bg-lime-yellow-600 text-black hover:bg-lime-yellow-700">
                                            <Zap className="w-4 h-4 mr-2" />
                                            Try On Now
                                        </Button>
                                        <Button variant="outline" className="w-full border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500 hover:text-black">
                                            Save Look
                                        </Button>
                                        <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:border-lime-yellow-500 hover:text-lime-yellow-500">
                                            Share Look
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Instructions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12"
                >
                    <Card className="bg-gray-900 border-gray-800">
                        <CardHeader>
                            <CardTitle className="text-white">How to Use Virtual Try-On</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center p-4">
                                    <div className="w-12 h-12 bg-lime-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-black font-bold">1</span>
                                    </div>
                                    <h4 className="text-white font-medium mb-2">Allow Camera Access</h4>
                                    <p className="text-gray-400 text-sm">Grant permission to use your camera for AR functionality</p>
                                </div>
                                <div className="text-center p-4">
                                    <div className="w-12 h-12 bg-lime-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-black font-bold">2</span>
                                    </div>
                                    <h4 className="text-white font-medium mb-2">Select Item</h4>
                                    <p className="text-gray-400 text-sm">Choose the clothing item you want to try on</p>
                                </div>
                                <div className="text-center p-4">
                                    <div className="w-12 h-12 bg-lime-yellow-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <span className="text-black font-bold">3</span>
                                    </div>
                                    <h4 className="text-white font-medium mb-2">Try On</h4>
                                    <p className="text-gray-400 text-sm">Point camera at yourself and see the item on you</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button className="bg-lime-yellow-600 text-black hover:bg-lime-yellow-700 px-8 py-3">
                        Start Try-On
                    </Button>
                    <Button variant="outline" className="border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500 hover:text-black px-8 py-3">
                        Browse More Items
                    </Button>
                </motion.div>
            </div>
        </div>
    )
} 