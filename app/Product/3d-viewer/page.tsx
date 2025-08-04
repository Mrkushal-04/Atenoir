/// <reference types="@react-three/fiber" />
"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import {
    RotateCcw,
    ZoomIn,
    ZoomOut,
    Eye,
    EyeOff,
    Lightbulb,
    Camera,
    Download,
    Share2,
    ArrowLeft,
    Play,
    Pause,
    Star
} from "lucide-react"
import { products, Product } from "@/lib/data/products";
import Link from "next/link";
import dynamic from "next/dynamic";

export default function ThreeDViewerPage() {
    const [selectedProduct, setSelectedProduct] = useState(products[0])
    const [cameraDistance, setCameraDistance] = useState(5)
    const [showGrid, setShowGrid] = useState(true)
    const [showLights, setShowLights] = useState(true)
    const [autoRotate, setAutoRotate] = useState(true)
    const [viewMode, setViewMode] = useState("perspective")

    const handleResetView = () => {
        // Reset camera and rotation
    }

    const handleScreenshot = () => {
        // Take screenshot functionality
        console.log("Screenshot taken")
    }

    const handleShare = () => {
        // Share functionality
        console.log("Sharing 3D view")
    }

    const ThreeDCanvas = dynamic<any>(() => import("./ThreeDCanvas"), { ssr: false });

    return (
        <div className="min-h-screen bg-black/[0.96] text-white">
            <div className="container mx-auto px-6 py-16">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <Link href="/Product">
                                <Button variant="ghost" className="text-gray-400 hover:text-white">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Products
                                </Button>
                            </Link>
                            <h1 className="text-4xl font-bold mt-4">3D Product Viewer</h1>
                            <p className="text-gray-400 mt-2">
                                Explore products in immersive 3D with interactive controls
                            </p>
                        </div>
                        <div className="flex space-x-2">
                            <Button
                                onClick={handleScreenshot}
                                variant="outline"
                                className="border-gray-600 text-white hover:bg-gray-800"
                            >
                                <Camera className="w-4 h-4 mr-2" />
                                Screenshot
                            </Button>
                            <Button
                                onClick={handleShare}
                                variant="outline"
                                className="border-gray-600 text-white hover:bg-gray-800"
                            >
                                <Share2 className="w-4 h-4 mr-2" />
                                Share
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Controls Panel */}
                    <div className="space-y-6">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle>Product Selection</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Select value={selectedProduct.id} onValueChange={(value) => {
                                    const product = products.find(p => p.id === value)
                                    if (product) setSelectedProduct(product)
                                }}>
                                    <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent className="bg-gray-900 border-gray-700">
                                        {products.map((product: Product) => (
                                            <SelectItem key={product.id} value={product.id}>
                                                {product.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle>Camera Controls</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="text-sm text-gray-400 mb-2 block">Distance</label>
                                    <Slider
                                        value={[cameraDistance]}
                                        onValueChange={(value) => setCameraDistance(value[0])}
                                        max={10}
                                        min={2}
                                        step={0.1}
                                        className="mb-2"
                                    />
                                    <div className="flex justify-between text-xs text-gray-400">
                                        <span>Close</span>
                                        <span>Far</span>
                                    </div>
                                </div>

                                <div className="flex space-x-2">
                                    <Button
                                        onClick={handleResetView}
                                        variant="outline"
                                        size="sm"
                                        className="flex-1 border-gray-600 text-white hover:bg-gray-800"
                                    >
                                        <RotateCcw className="w-4 h-4 mr-1" />
                                        Reset
                                    </Button>
                                    <Button
                                        onClick={() => setAutoRotate(!autoRotate)}
                                        variant={autoRotate ? "default" : "outline"}
                                        size="sm"
                                        className="flex-1 border-gray-600 text-white hover:bg-gray-800"
                                    >
                                        {autoRotate ? (
                                            <>
                                                <Pause className="w-4 h-4 mr-1" />
                                                Pause
                                            </>
                                        ) : (
                                            <>
                                                <Play className="w-4 h-4 mr-1" />
                                                Play
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle>View Options</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">Show Grid</span>
                                    <Button
                                        variant={showGrid ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setShowGrid(!showGrid)}
                                        className={showGrid ? "bg-lime-yellow-600 text-black" : "border-gray-600 text-white"}
                                    >
                                        {showGrid ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                    </Button>
                                </div>

                                <div className="flex items-center justify-between">
                                    <span className="text-sm">Show Lights</span>
                                    <Button
                                        variant={showLights ? "default" : "outline"}
                                        size="sm"
                                        onClick={() => setShowLights(!showLights)}
                                        className={showLights ? "bg-lime-yellow-600 text-black" : "border-gray-600 text-white"}
                                    >
                                        <Lightbulb className="w-4 h-4" />
                                    </Button>
                                </div>

                                <div>
                                    <label className="text-sm text-gray-400 mb-2 block">View Mode</label>
                                    <Select value={viewMode} onValueChange={setViewMode}>
                                        <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent className="bg-gray-900 border-gray-700">
                                            <SelectItem value="perspective">Perspective</SelectItem>
                                            <SelectItem value="orthographic">Orthographic</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle>Product Info</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div>
                                        <h3 className="font-semibold">{selectedProduct.name}</h3>
                                        <p className="text-gray-400 text-sm">{selectedProduct.category}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lime-yellow-400 font-bold">₹{selectedProduct.price}</span>
                                        <div className="flex items-center space-x-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-sm text-gray-400">{selectedProduct.rating}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-1">
                                        {selectedProduct.colors.slice(0, 3).map((color: { name: string; hex: string }) => (
                                            <div
                                                key={color.name}
                                                className="w-4 h-4 rounded-full border border-gray-600"
                                                style={{ backgroundColor: color.hex }}
                                                title={color.name}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* 3D Viewer */}
                    <div className="lg:col-span-3">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-0">
                                <div className="aspect-square relative">
                                    <ThreeDCanvas cameraDistance={cameraDistance} autoRotate={autoRotate} showGrid={showGrid} showLights={showLights} />

                                    {/* Overlay Controls */}
                                    <div className="absolute top-4 right-4 flex space-x-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="bg-black/50 border-gray-600 text-white hover:bg-black/70"
                                        >
                                            <ZoomIn className="w-4 h-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="bg-black/50 border-gray-600 text-white hover:bg-black/70"
                                        >
                                            <ZoomOut className="w-4 h-4" />
                                        </Button>
                                    </div>

                                    {/* Instructions */}
                                    <div className="absolute bottom-4 left-4 bg-black/50 p-3 rounded-lg">
                                        <p className="text-sm text-gray-300">
                                            Drag to rotate • Scroll to zoom • Right-click to pan
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-8">3D Viewer Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6 text-center">
                                <Eye className="w-12 h-12 mx-auto mb-4 text-lime-yellow-400" />
                                <h3 className="font-semibold mb-2">360° View</h3>
                                <p className="text-gray-400 text-sm">
                                    Rotate and examine products from every angle
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6 text-center">
                                <ZoomIn className="w-12 h-12 mx-auto mb-4 text-lime-yellow-400" />
                                <h3 className="font-semibold mb-2">Zoom & Pan</h3>
                                <p className="text-gray-400 text-sm">
                                    Get up close to see fine details and textures
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6 text-center">
                                <Camera className="w-12 h-12 mx-auto mb-4 text-lime-yellow-400" />
                                <h3 className="font-semibold mb-2">Screenshot</h3>
                                <p className="text-gray-400 text-sm">
                                    Capture and share your favorite views
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
} 