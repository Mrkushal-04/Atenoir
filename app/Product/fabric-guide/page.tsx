"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Shirt,
    Thermometer,
    Droplets,
    Wind,
    Sun,
    Leaf,
    ArrowLeft,
    Info,
    Star
} from "lucide-react"
import Link from "next/link"

export default function FabricGuidePage() {
    const [selectedFabric, setSelectedFabric] = useState("cotton")

    const fabrics = {
        cotton: {
            name: "Cotton",
            description: "Natural fiber known for its breathability and comfort",
            properties: {
                breathability: 5,
                durability: 4,
                softness: 5,
                wrinkleResistance: 2,
                moistureWicking: 4,
                sustainability: 4
            },
            pros: [
                "Highly breathable",
                "Soft and comfortable",
                "Hypoallergenic",
                "Easy to care for",
                "Natural and sustainable"
            ],
            cons: [
                "Wrinkles easily",
                "Can shrink",
                "Takes longer to dry"
            ],
            care: "Machine wash cold, tumble dry low",
            bestFor: ["Everyday wear", "Summer clothing", "Sensitive skin"]
        },
        linen: {
            name: "Linen",
            description: "Strong, durable natural fiber with excellent breathability",
            properties: {
                breathability: 5,
                durability: 5,
                softness: 3,
                wrinkleResistance: 1,
                moistureWicking: 5,
                sustainability: 5
            },
            pros: [
                "Extremely breathable",
                "Very durable",
                "Natural moisture wicking",
                "Eco-friendly",
                "Gets softer with wear"
            ],
            cons: [
                "Wrinkles very easily",
                "Can be stiff initially",
                "More expensive"
            ],
            care: "Machine wash gentle, air dry preferred",
            bestFor: ["Summer clothing", "Casual wear", "Hot climates"]
        },
        silk: {
            name: "Silk",
            description: "Luxurious natural fiber with a smooth, lustrous appearance",
            properties: {
                breathability: 4,
                durability: 3,
                softness: 5,
                wrinkleResistance: 3,
                moistureWicking: 4,
                sustainability: 3
            },
            pros: [
                "Extremely soft",
                "Natural temperature regulation",
                "Luxurious feel",
                "Hypoallergenic",
                "Strong for its weight"
            ],
            cons: [
                "Expensive",
                "Delicate",
                "Requires special care",
                "Can be damaged by sunlight"
            ],
            care: "Hand wash or dry clean",
            bestFor: ["Formal wear", "Luxury items", "Special occasions"]
        },
        wool: {
            name: "Wool",
            description: "Natural fiber with excellent insulation and moisture management",
            properties: {
                breathability: 4,
                durability: 5,
                softness: 4,
                wrinkleResistance: 4,
                moistureWicking: 5,
                sustainability: 4
            },
            pros: [
                "Excellent insulation",
                "Natural moisture wicking",
                "Wrinkle resistant",
                "Durable",
                "Fire resistant"
            ],
            cons: [
                "Can be itchy",
                "Requires special care",
                "Can shrink",
                "More expensive"
            ],
            care: "Dry clean or hand wash",
            bestFor: ["Winter clothing", "Suits", "Outerwear"]
        },
        polyester: {
            name: "Polyester",
            description: "Synthetic fiber known for durability and easy care",
            properties: {
                breathability: 2,
                durability: 5,
                softness: 3,
                wrinkleResistance: 5,
                moistureWicking: 3,
                sustainability: 2
            },
            pros: [
                "Very durable",
                "Wrinkle resistant",
                "Quick drying",
                "Affordable",
                "Easy to care for"
            ],
            cons: [
                "Less breathable",
                "Can retain odors",
                "Not eco-friendly",
                "Can feel synthetic"
            ],
            care: "Machine wash warm, tumble dry",
            bestFor: ["Activewear", "Budget-friendly options", "Easy-care items"]
        }
    }

    const fabricTypes = Object.keys(fabrics)

    const getPropertyIcon = (property: string) => {
        switch (property) {
            case "breathability":
                return Wind
            case "durability":
                return Shirt
            case "softness":
                return Leaf
            case "wrinkleResistance":
                return Thermometer
            case "moistureWicking":
                return Droplets
            case "sustainability":
                return Sun
            default:
                return Star
        }
    }

    return (
        <div className="min-h-screen bg-black/[0.96] text-white">
            <div className="container mx-auto px-6 py-16">
                {/* Header */}
                <div className="mb-8">
                    <Link href="/Product">
                        <Button variant="ghost" className="text-gray-400 hover:text-white mb-4">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Products
                        </Button>
                    </Link>
                    <h1 className="text-4xl font-bold mb-4">Fabric Guide</h1>
                    <p className="text-gray-400">
                        Learn about different fabric types and choose the perfect material for your needs
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Fabric Selection */}
                    <div className="lg:col-span-1">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle>Fabric Types</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                {fabricTypes.map((fabric) => (
                                    <Button
                                        key={fabric}
                                        variant={selectedFabric === fabric ? "default" : "ghost"}
                                        onClick={() => setSelectedFabric(fabric)}
                                        className={`w-full justify-start ${selectedFabric === fabric
                                                ? "bg-lime-yellow-600 text-black"
                                                : "text-gray-400 hover:text-white hover:bg-gray-800"
                                            }`}
                                    >
                                        <Shirt className="w-4 h-4 mr-2" />
                                        {fabrics[fabric as keyof typeof fabrics].name}
                                    </Button>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Fabric Details */}
                    <div className="lg:col-span-3">
                        <motion.div
                            key={selectedFabric}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Card className="bg-gray-900 border-gray-800">
                                <CardHeader>
                                    <CardTitle className="text-2xl">{fabrics[selectedFabric as keyof typeof fabrics].name}</CardTitle>
                                    <p className="text-gray-400">{fabrics[selectedFabric as keyof typeof fabrics].description}</p>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {/* Properties */}
                                    <div>
                                        <h3 className="font-semibold mb-4">Properties</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                            {Object.entries(fabrics[selectedFabric as keyof typeof fabrics].properties).map(([property, rating]) => {
                                                const PropertyIcon = getPropertyIcon(property)
                                                return (
                                                    <div key={property} className="p-3 border border-gray-700 rounded-lg">
                                                        <div className="flex items-center space-x-2 mb-2">
                                                            <PropertyIcon className="w-4 h-4 text-lime-yellow-400" />
                                                            <span className="text-sm font-medium capitalize">{property}</span>
                                                        </div>
                                                        <div className="flex space-x-1">
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <Star
                                                                    key={star}
                                                                    className={`w-3 h-3 ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-600"
                                                                        }`}
                                                                />
                                                            ))}
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    {/* Pros and Cons */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-semibold mb-3 text-green-400">Pros</h3>
                                            <ul className="space-y-2">
                                                {fabrics[selectedFabric as keyof typeof fabrics].pros.map((pro, index) => (
                                                    <li key={index} className="flex items-start space-x-2">
                                                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                                                        <span className="text-sm text-gray-300">{pro}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-3 text-red-400">Cons</h3>
                                            <ul className="space-y-2">
                                                {fabrics[selectedFabric as keyof typeof fabrics].cons.map((con, index) => (
                                                    <li key={index} className="flex items-start space-x-2">
                                                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                                                        <span className="text-sm text-gray-300">{con}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Care Instructions */}
                                    <div>
                                        <h3 className="font-semibold mb-3">Care Instructions</h3>
                                        <div className="p-4 bg-gray-800 rounded-lg">
                                            <p className="text-gray-300">{fabrics[selectedFabric as keyof typeof fabrics].care}</p>
                                        </div>
                                    </div>

                                    {/* Best For */}
                                    <div>
                                        <h3 className="font-semibold mb-3">Best For</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {fabrics[selectedFabric as keyof typeof fabrics].bestFor.map((use, index) => (
                                                <Badge key={index} variant="secondary">
                                                    {use}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>

                {/* Fabric Comparison */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-8">Fabric Comparison</h2>
                    <Card className="bg-gray-900 border-gray-800">
                        <CardContent className="p-6">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b border-gray-700">
                                            <th className="text-left py-3 px-4">Fabric</th>
                                            <th className="text-left py-3 px-4">Breathability</th>
                                            <th className="text-left py-3 px-4">Durability</th>
                                            <th className="text-left py-3 px-4">Care Level</th>
                                            <th className="text-left py-3 px-4">Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {fabricTypes.map((fabric) => {
                                            const fabricData = fabrics[fabric as keyof typeof fabrics]
                                            return (
                                                <tr key={fabric} className="border-b border-gray-800">
                                                    <td className="py-3 px-4 font-semibold">{fabricData.name}</td>
                                                    <td className="py-3 px-4">
                                                        <div className="flex space-x-1">
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <Star
                                                                    key={star}
                                                                    className={`w-3 h-3 ${star <= fabricData.properties.breathability
                                                                            ? "text-yellow-400 fill-current"
                                                                            : "text-gray-600"
                                                                        }`}
                                                                />
                                                            ))}
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-4">
                                                        <div className="flex space-x-1">
                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <Star
                                                                    key={star}
                                                                    className={`w-3 h-3 ${star <= fabricData.properties.durability
                                                                            ? "text-yellow-400 fill-current"
                                                                            : "text-gray-600"
                                                                        }`}
                                                                />
                                                            ))}
                                                        </div>
                                                    </td>
                                                    <td className="py-3 px-4">
                                                        {fabricData.care.includes("dry clean") ? "High" :
                                                            fabricData.care.includes("hand wash") ? "Medium" : "Low"}
                                                    </td>
                                                    <td className="py-3 px-4">
                                                        {fabric === "silk" || fabric === "wool" ? "High" :
                                                            fabric === "linen" ? "Medium-High" :
                                                                fabric === "cotton" ? "Medium" : "Low"}
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Tips */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-8">Fabric Selection Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6">
                                <h3 className="font-semibold mb-3 flex items-center">
                                    <Info className="w-5 h-5 mr-2 text-lime-yellow-400" />
                                    Consider Your Climate
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>• Hot climates: Choose cotton, linen, or breathable synthetics</li>
                                    <li>• Cold climates: Opt for wool or wool blends</li>
                                    <li>• Humid areas: Look for moisture-wicking fabrics</li>
                                    <li>• Dry areas: Natural fibers work well</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6">
                                <h3 className="font-semibold mb-3 flex items-center">
                                    <Info className="w-5 h-5 mr-2 text-lime-yellow-400" />
                                    Lifestyle Considerations
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li>• Active lifestyle: Choose durable, easy-care fabrics</li>
                                    <li>• Office wear: Consider wrinkle-resistant options</li>
                                    <li>• Formal occasions: Silk or wool are excellent choices</li>
                                    <li>• Casual wear: Cotton and linen are comfortable</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
} 