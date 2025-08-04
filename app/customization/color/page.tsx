"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
    ChevronLeft,
    Palette,
    Droplets,
    Heart,
    Copy
} from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function ColorSelectionPage() {
    const [selectedColors, setSelectedColors] = useState<string[]>([])
    const [customColor, setCustomColor] = useState("#000000")
    const router = useRouter()

    const colorPalettes = [
        {
            name: "Neutral Classics",
            colors: [
                { name: "Pure White", hex: "#FFFFFF", rgb: "255, 255, 255" },
                { name: "Off White", hex: "#F5F5DC", rgb: "245, 245, 220" },
                { name: "Charcoal", hex: "#36454F", rgb: "54, 69, 79" },
                { name: "Navy Blue", hex: "#000080", rgb: "0, 0, 128" },
                { name: "Black", hex: "#000000", rgb: "0, 0, 0" }
            ]
        },
        {
            name: "Earth Tones",
            colors: [
                { name: "Sage Green", hex: "#9CAF88", rgb: "156, 175, 136" },
                { name: "Terracotta", hex: "#E2725B", rgb: "226, 114, 91" },
                { name: "Warm Beige", hex: "#F5F5DC", rgb: "245, 245, 220" },
                { name: "Moss Green", hex: "#8A9A5B", rgb: "138, 154, 91" },
                { name: "Rust", hex: "#B7410E", rgb: "183, 65, 14" }
            ]
        },
        {
            name: "Bold & Vibrant",
            colors: [
                { name: "Electric Blue", hex: "#00BFFF", rgb: "0, 191, 255" },
                { name: "Hot Pink", hex: "#FF69B4", rgb: "255, 105, 180" },
                { name: "Lime Green", hex: "#32CD32", rgb: "50, 205, 50" },
                { name: "Orange", hex: "#FFA500", rgb: "255, 165, 0" },
                { name: "Purple", hex: "#800080", rgb: "128, 0, 128" }
            ]
        },
        {
            name: "Pastels",
            colors: [
                { name: "Lavender", hex: "#E6E6FA", rgb: "230, 230, 250" },
                { name: "Mint", hex: "#F5FFFA", rgb: "245, 255, 250" },
                { name: "Peach", hex: "#FFE5B4", rgb: "255, 229, 180" },
                { name: "Sky Blue", hex: "#87CEEB", rgb: "135, 206, 235" },
                { name: "Rose Gold", hex: "#E8B4B8", rgb: "232, 180, 184" }
            ]
        }
    ]

    const toggleColorSelection = (colorHex: string) => {
        setSelectedColors(prev =>
            prev.includes(colorHex)
                ? prev.filter(color => color !== colorHex)
                : [...prev, colorHex]
        )
    }

    const copyColorCode = (colorCode: string) => {
        navigator.clipboard.writeText(colorCode)
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
                            Color Selection
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Explore our extensive color palette with 200+ colors. Create unique combinations
                            or choose from our curated color palettes.
                        </p>
                    </motion.div>
                </div>

                {/* Custom Color Picker */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <Card className="bg-gray-900 border-gray-800">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <Palette className="w-6 h-6 mr-3 text-lime-yellow-500" />
                                Custom Color
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center space-x-2">
                                    <div
                                        className="w-12 h-12 rounded-lg border-2 border-white"
                                        style={{ backgroundColor: customColor }}
                                    />
                                    <Input
                                        type="color"
                                        value={customColor}
                                        onChange={(e) => setCustomColor(e.target.value)}
                                        className="w-20 h-12 border-gray-600 bg-gray-800"
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="text-white font-mono text-sm">{customColor}</p>
                                    <p className="text-gray-400 text-sm">Click to select custom color</p>
                                </div>
                                <Button
                                    onClick={() => toggleColorSelection(customColor)}
                                    className="bg-lime-yellow-600 text-black hover:bg-lime-yellow-700"
                                >
                                    Add Color
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* Color Palettes */}
                <div className="space-y-12">
                    {colorPalettes.map((palette, paletteIndex) => (
                        <motion.div
                            key={palette.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + paletteIndex * 0.1 }}
                        >
                            <Card className="bg-gray-900 border-gray-800">
                                <CardHeader>
                                    <CardTitle className="text-white">{palette.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {palette.colors.map((color, colorIndex) => (
                                            <div
                                                key={color.hex}
                                                className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer ${selectedColors.includes(color.hex)
                                                    ? 'border-lime-yellow-500 bg-gray-800'
                                                    : 'border-gray-700 hover:border-gray-600'
                                                    }`}
                                                onClick={() => toggleColorSelection(color.hex)}
                                            >
                                                <div className="flex items-center space-x-3 mb-3">
                                                    <div
                                                        className="w-8 h-8 rounded-full border-2 border-white"
                                                        style={{ backgroundColor: color.hex }}
                                                    />
                                                    <div className="flex-1">
                                                        <h4 className="text-white font-medium">{color.name}</h4>
                                                        <p className="text-gray-400 text-sm font-mono">{color.hex}</p>
                                                    </div>
                                                    <Button
                                                        size="sm"
                                                        variant="ghost"
                                                        onClick={(e) => {
                                                            e.stopPropagation()
                                                            copyColorCode(color.hex)
                                                        }}
                                                        className="text-gray-400 hover:text-white"
                                                    >
                                                        <Copy className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-gray-300 text-sm font-mono">{color.rgb}</span>
                                                    {selectedColors.includes(color.hex) && (
                                                        <Badge className="bg-lime-yellow-600 text-black">Selected</Badge>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Selected Colors */}
                {selectedColors.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12"
                    >
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center">
                                    <Heart className="w-6 h-6 mr-3 text-lime-yellow-500" />
                                    Selected Colors ({selectedColors.length})
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-4">
                                    {selectedColors.map((color) => (
                                        <div
                                            key={color}
                                            className="flex items-center space-x-2 p-3 bg-gray-800 rounded-lg"
                                        >
                                            <div
                                                className="w-6 h-6 rounded-full border border-white"
                                                style={{ backgroundColor: color }}
                                            />
                                            <span className="text-white font-mono text-sm">{color}</span>
                                            <Button
                                                size="sm"
                                                variant="ghost"
                                                onClick={() => toggleColorSelection(color)}
                                                className="text-red-400 hover:text-red-300"
                                            >
                                                ×
                                            </Button>
                                        </div>
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
                    className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button className="bg-lime-yellow-600 text-black hover:bg-lime-yellow-700 px-8 py-3">
                        Save Color Selection
                    </Button>
                    <Button variant="outline" className="border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500 hover:text-black px-8 py-3">
                        Continue to 3D Preview
                    </Button>
                </motion.div>
            </div>
        </div>
    )
} 