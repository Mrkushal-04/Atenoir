"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import {
    ChevronLeft,
    Shirt,
    Ruler,
    CheckCircle,
    Info,
    Zap
} from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

export default function FitCustomizationPage() {
    const [selectedFit, setSelectedFit] = useState("regular")
    const [measurements, setMeasurements] = useState({
        chest: [40],
        waist: [32],
        hips: [42],
        shoulders: [18],
        sleeveLength: [25],
        inseam: [32]
    })
    const router = useRouter()

    const fitOptions = [
        {
            id: "slim",
            name: "Slim Fit",
            description: "Close-fitting silhouette with a modern, tailored look",
            characteristics: ["Fitted through chest and waist", "Modern silhouette", "Slightly tapered legs"],
            bestFor: "Athletic builds, modern styling",
            icon: "⚡"
        },
        {
            id: "regular",
            name: "Regular Fit",
            description: "Classic fit with comfortable room to move",
            characteristics: ["Comfortable through chest", "Straight leg", "Traditional styling"],
            bestFor: "Most body types, everyday wear",
            icon: "👔"
        },
        {
            id: "relaxed",
            name: "Relaxed Fit",
            description: "Loose, comfortable fit with extra room",
            characteristics: ["Extra room throughout", "Comfortable movement", "Casual styling"],
            bestFor: "Comfort seekers, casual occasions",
            icon: "😌"
        },
        {
            id: "custom",
            name: "Custom Fit",
            description: "Tailored to your exact measurements",
            characteristics: ["Perfect fit", "Personalized measurements", "Premium service"],
            bestFor: "Perfect fit requirements, special occasions",
            icon: "🎯"
        }
    ]

    const measurementLabels = {
        chest: "Chest (inches)",
        waist: "Waist (inches)",
        hips: "Hips (inches)",
        shoulders: "Shoulders (inches)",
        sleeveLength: "Sleeve Length (inches)",
        inseam: "Inseam (inches)"
    }

    const handleMeasurementChange = (key: string, value: number[]) => {
        setMeasurements(prev => ({
            ...prev,
            [key]: value
        }))
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
                            Choose Your Perfect Fit
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Select from our range of fits or create a custom fit tailored to your exact measurements.
                            Every body is unique, and your clothes should reflect that.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Fit Selection */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center">
                                    <Shirt className="w-6 h-6 mr-3 text-lime-yellow-500" />
                                    Fit Options
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <RadioGroup value={selectedFit} onValueChange={setSelectedFit} className="space-y-6">
                                    {fitOptions.map((fit) => (
                                        <div key={fit.id} className="flex items-start space-x-4">
                                            <RadioGroupItem value={fit.id} id={fit.id} className="mt-1" />
                                            <div className="flex-1">
                                                <Label htmlFor={fit.id} className="text-white text-lg font-semibold cursor-pointer">
                                                    <span className="text-2xl mr-2">{fit.icon}</span>
                                                    {fit.name}
                                                </Label>
                                                <p className="text-gray-400 mt-1">{fit.description}</p>
                                                <div className="mt-3 space-y-1">
                                                    {fit.characteristics.map((char, index) => (
                                                        <div key={index} className="flex items-center space-x-2">
                                                            <CheckCircle className="w-4 h-4 text-lime-yellow-500" />
                                                            <span className="text-sm text-gray-300">{char}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="mt-3">
                                                    <Badge className="bg-lime-yellow-600 text-black text-xs">
                                                        {fit.bestFor}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </RadioGroup>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Measurements */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center">
                                    <Ruler className="w-6 h-6 mr-3 text-lime-yellow-500" />
                                    Custom Measurements
                                </CardTitle>
                                <p className="text-gray-400 text-sm">
                                    Adjust your measurements for a perfect fit. All measurements are in inches.
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {Object.entries(measurements).map(([key, value]) => (
                                    <div key={key} className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <Label className="text-white text-sm font-medium">
                                                {measurementLabels[key as keyof typeof measurementLabels]}
                                            </Label>
                                            <span className="text-lime-yellow-500 font-semibold">
                                                {value[0]}"
                                            </span>
                                        </div>
                                        <Slider
                                            value={value}
                                            onValueChange={(newValue) => handleMeasurementChange(key, newValue)}
                                            max={60}
                                            min={20}
                                            step={0.5}
                                            className="w-full"
                                        />
                                        <div className="flex justify-between text-xs text-gray-500">
                                            <span>20"</span>
                                            <span>40"</span>
                                            <span>60"</span>
                                        </div>
                                    </div>
                                ))}

                                <div className="pt-6 border-t border-gray-800">
                                    <div className="flex items-center space-x-2 mb-4">
                                        <Info className="w-5 h-5 text-lime-yellow-500" />
                                        <span className="text-white font-medium">Need help measuring?</span>
                                    </div>
                                    <Button variant="outline" className="w-full border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500 hover:text-black">
                                        View Measurement Guide
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* Preview Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-12"
                >
                    <Card className="bg-gray-900 border-gray-800">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <Zap className="w-6 h-6 mr-3 text-lime-yellow-500" />
                                Fit Preview
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-32 h-48 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                        <Shirt className="w-12 h-12 text-lime-yellow-500" />
                                    </div>
                                    <h4 className="text-white font-medium">Front View</h4>
                                </div>
                                <div className="text-center">
                                    <div className="w-32 h-48 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                        <Shirt className="w-12 h-12 text-lime-yellow-500" />
                                    </div>
                                    <h4 className="text-white font-medium">Side View</h4>
                                </div>
                                <div className="text-center">
                                    <div className="w-32 h-48 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg mx-auto mb-4 flex items-center justify-center">
                                        <Shirt className="w-12 h-12 text-lime-yellow-500" />
                                    </div>
                                    <h4 className="text-white font-medium">Back View</h4>
                                </div>
                            </div>

                            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                                <h4 className="text-white font-medium mb-2">Selected Fit: {fitOptions.find(f => f.id === selectedFit)?.name}</h4>
                                <p className="text-gray-400 text-sm">
                                    {selectedFit === 'custom'
                                        ? 'Your custom measurements will be used to create a perfectly tailored fit.'
                                        : fitOptions.find(f => f.id === selectedFit)?.description
                                    }
                                </p>
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
                        Save Fit Preferences
                    </Button>
                    <Button variant="outline" className="border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500 hover:text-black px-8 py-3">
                        Continue to Fabric Selection
                    </Button>
                </motion.div>
            </div>
        </div>
    )
} 