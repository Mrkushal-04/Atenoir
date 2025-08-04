"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
    Ruler,
    Users,
    Heart,
    Baby,
    Shirt,
    Package,
    Crown,
    ShoppingBag,
    ArrowLeft,
    Download,
    Info
} from "lucide-react"
import Link from "next/link"

export default function SizeGuidePage() {
    const [selectedCategory, setSelectedCategory] = useState("men")

    const sizeGuides = {
        men: {
            shirts: [
                { size: "S", chest: "36-38", waist: "30-32", length: "28", fit: "Slim" },
                { size: "M", chest: "38-40", waist: "32-34", length: "29", fit: "Regular" },
                { size: "L", chest: "40-42", waist: "34-36", length: "30", fit: "Regular" },
                { size: "XL", chest: "42-44", waist: "36-38", length: "31", fit: "Regular" },
            ],
            trousers: [
                { size: "30", waist: "30", inseam: "32", fit: "Slim" },
                { size: "32", waist: "32", inseam: "32", fit: "Regular" },
                { size: "34", waist: "34", inseam: "32", fit: "Regular" },
                { size: "36", waist: "36", inseam: "32", fit: "Regular" },
            ],
            suits: [
                { size: "S", chest: "36-38", waist: "30-32", jacket: "S", pants: "30-32" },
                { size: "M", chest: "38-40", waist: "32-34", jacket: "M", pants: "32-34" },
                { size: "L", chest: "40-42", waist: "34-36", jacket: "L", pants: "34-36" },
                { size: "XL", chest: "42-44", waist: "36-38", jacket: "XL", pants: "36-38" },
            ]
        },
        women: {
            shirts: [
                { size: "XS", bust: "32-34", waist: "24-26", length: "26", fit: "Slim" },
                { size: "S", bust: "34-36", waist: "26-28", length: "27", fit: "Regular" },
                { size: "M", bust: "36-38", waist: "28-30", length: "28", fit: "Regular" },
                { size: "L", bust: "38-40", waist: "30-32", length: "29", fit: "Regular" },
            ],
            trousers: [
                { size: "XS", waist: "24-26", hip: "34-36", inseam: "30", fit: "Slim" },
                { size: "S", waist: "26-28", hip: "36-38", inseam: "30", fit: "Regular" },
                { size: "M", waist: "28-30", hip: "38-40", inseam: "30", fit: "Regular" },
                { size: "L", waist: "30-32", hip: "40-42", inseam: "30", fit: "Regular" },
            ],
            suits: [
                { size: "XS", bust: "32-34", waist: "24-26", jacket: "XS", pants: "24-26" },
                { size: "S", bust: "34-36", waist: "26-28", jacket: "S", pants: "26-28" },
                { size: "M", bust: "36-38", waist: "28-30", jacket: "M", pants: "28-30" },
                { size: "L", bust: "38-40", waist: "30-32", jacket: "L", pants: "30-32" },
            ]
        },
        kids: {
            shirts: [
                { size: "2T", chest: "20-22", waist: "18-20", length: "18", age: "2-3 years" },
                { size: "3T", chest: "22-24", waist: "20-22", length: "19", age: "3-4 years" },
                { size: "4T", chest: "24-26", waist: "22-24", length: "20", age: "4-5 years" },
                { size: "5T", chest: "26-28", waist: "24-26", length: "21", age: "5-6 years" },
            ],
            trousers: [
                { size: "2T", waist: "18-20", hip: "20-22", inseam: "16", age: "2-3 years" },
                { size: "3T", waist: "20-22", hip: "22-24", inseam: "17", age: "3-4 years" },
                { size: "4T", waist: "22-24", hip: "24-26", inseam: "18", age: "4-5 years" },
                { size: "5T", waist: "24-26", hip: "26-28", inseam: "19", age: "5-6 years" },
            ]
        }
    }

    const measurementGuides = {
        men: {
            chest: "Measure around the fullest part of your chest, keeping the tape horizontal",
            waist: "Measure around your natural waistline, keeping the tape comfortably loose",
            inseam: "Measure from the crotch to the bottom of your ankle",
            neck: "Measure around your neck at the height where your collar would normally sit"
        },
        women: {
            bust: "Measure around the fullest part of your bust, keeping the tape horizontal",
            waist: "Measure around your natural waistline, keeping the tape comfortably loose",
            hip: "Measure around the fullest part of your hips",
            inseam: "Measure from the crotch to the bottom of your ankle"
        },
        kids: {
            chest: "Measure around the fullest part of the child's chest, keeping the tape horizontal",
            waist: "Measure around the child's natural waistline",
            hip: "Measure around the fullest part of the child's hips",
            height: "Measure the child's height from top of head to bottom of feet"
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
                    <h1 className="text-4xl font-bold mb-4">Size Guide</h1>
                    <p className="text-gray-400">
                        Find your perfect fit with our comprehensive sizing guide
                    </p>
                </div>

                {/* Category Selection */}
                <div className="mb-8">
                    <div className="flex space-x-2">
                        {["men", "women", "kids"].map((category) => (
                            <Button
                                key={category}
                                variant={selectedCategory === category ? "default" : "outline"}
                                onClick={() => setSelectedCategory(category)}
                                className={selectedCategory === category ? "bg-lime-yellow-600 text-black" : "border-gray-600 text-white hover:bg-gray-800"}
                            >
                                {category === "men" && <Users className="w-4 h-4 mr-2" />}
                                {category === "women" && <Heart className="w-4 h-4 mr-2" />}
                                {category === "kids" && <Baby className="w-4 h-4 mr-2" />}
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Size Charts */}
                    <div className="lg:col-span-2">
                        <Tabs defaultValue="shirts" className="space-y-6">
                            <TabsList className="bg-gray-900 border-gray-800">
                                <TabsTrigger value="shirts" className="text-white">
                                    <Shirt className="w-4 h-4 mr-2" />
                                    Shirts
                                </TabsTrigger>
                                <TabsTrigger value="trousers" className="text-white">
                                    <Package className="w-4 h-4 mr-2" />
                                    Trousers
                                </TabsTrigger>
                                <TabsTrigger value="suits" className="text-white">
                                    <Crown className="w-4 h-4 mr-2" />
                                    Suits
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="shirts">
                                <Card className="bg-gray-900 border-gray-800">
                                    <CardHeader>
                                        <CardTitle className="flex items-center justify-between">
                                            <span>Shirt Size Chart - {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</span>
                                            <Button variant="outline" size="sm" className="border-gray-600 text-white">
                                                <Download className="w-4 h-4 mr-2" />
                                                Download
                                            </Button>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Size</TableHead>
                                                    {selectedCategory === "men" && (
                                                        <>
                                                            <TableHead>Chest (inches)</TableHead>
                                                            <TableHead>Waist (inches)</TableHead>
                                                            <TableHead>Length (inches)</TableHead>
                                                        </>
                                                    )}
                                                    {selectedCategory === "women" && (
                                                        <>
                                                            <TableHead>Bust (inches)</TableHead>
                                                            <TableHead>Waist (inches)</TableHead>
                                                            <TableHead>Length (inches)</TableHead>
                                                        </>
                                                    )}
                                                    {selectedCategory === "kids" && (
                                                        <>
                                                            <TableHead>Chest (inches)</TableHead>
                                                            <TableHead>Waist (inches)</TableHead>
                                                            <TableHead>Length (inches)</TableHead>
                                                            <TableHead>Age</TableHead>
                                                        </>
                                                    )}
                                                    <TableHead>Fit</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {sizeGuides[selectedCategory as keyof typeof sizeGuides]?.shirts?.map((item, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell className="font-semibold">{item.size}</TableCell>
                                                        <TableCell>{item.chest || item.bust}</TableCell>
                                                        <TableCell>{item.waist}</TableCell>
                                                        <TableCell>{item.length}</TableCell>
                                                        {selectedCategory === "kids" && <TableCell>{item.age}</TableCell>}
                                                        <TableCell>
                                                            <Badge variant="secondary">{item.fit}</Badge>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="trousers">
                                <Card className="bg-gray-900 border-gray-800">
                                    <CardHeader>
                                        <CardTitle className="flex items-center justify-between">
                                            <span>Trouser Size Chart - {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</span>
                                            <Button variant="outline" size="sm" className="border-gray-600 text-white">
                                                <Download className="w-4 h-4 mr-2" />
                                                Download
                                            </Button>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Size</TableHead>
                                                    <TableHead>Waist (inches)</TableHead>
                                                    {selectedCategory === "women" && <TableHead>Hip (inches)</TableHead>}
                                                    <TableHead>Inseam (inches)</TableHead>
                                                    {selectedCategory === "kids" && <TableHead>Age</TableHead>}
                                                    <TableHead>Fit</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {sizeGuides[selectedCategory as keyof typeof sizeGuides]?.trousers?.map((item, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell className="font-semibold">{item.size}</TableCell>
                                                        <TableCell>{item.waist}</TableCell>
                                                        {selectedCategory === "women" && <TableCell>{item.hip}</TableCell>}
                                                        <TableCell>{item.inseam}</TableCell>
                                                        {selectedCategory === "kids" && <TableCell>{item.age}</TableCell>}
                                                        <TableCell>
                                                            <Badge variant="secondary">{item.fit}</Badge>
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>

                            <TabsContent value="suits">
                                <Card className="bg-gray-900 border-gray-800">
                                    <CardHeader>
                                        <CardTitle className="flex items-center justify-between">
                                            <span>Suit Size Chart - {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}</span>
                                            <Button variant="outline" size="sm" className="border-gray-600 text-white">
                                                <Download className="w-4 h-4 mr-2" />
                                                Download
                                            </Button>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Size</TableHead>
                                                    <TableHead>Chest/Bust (inches)</TableHead>
                                                    <TableHead>Waist (inches)</TableHead>
                                                    <TableHead>Jacket</TableHead>
                                                    <TableHead>Pants</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {sizeGuides[selectedCategory as keyof typeof sizeGuides]?.suits?.map((item, index) => (
                                                    <TableRow key={index}>
                                                        <TableCell className="font-semibold">{item.size}</TableCell>
                                                        <TableCell>{item.chest || item.bust}</TableCell>
                                                        <TableCell>{item.waist}</TableCell>
                                                        <TableCell>{item.jacket}</TableCell>
                                                        <TableCell>{item.pants}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    {/* Measurement Guide */}
                    <div className="space-y-6">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Ruler className="w-5 h-5 mr-2" />
                                    How to Measure
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {Object.entries(measurementGuides[selectedCategory as keyof typeof measurementGuides] || {}).map(([key, description]) => (
                                    <div key={key} className="p-3 border border-gray-700 rounded-lg">
                                        <h4 className="font-semibold capitalize mb-1">{key}</h4>
                                        <p className="text-sm text-gray-400">{description}</p>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Info className="w-5 h-5 mr-2" />
                                    Size Tips
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="text-sm text-gray-300">
                                    <p className="mb-2">• Measure yourself while wearing light clothing</p>
                                    <p className="mb-2">• Keep the measuring tape snug but not tight</p>
                                    <p className="mb-2">• For best results, have someone else measure you</p>
                                    <p className="mb-2">• If between sizes, we recommend sizing up</p>
                                    <p>• All measurements are in inches</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle>Fit Guide</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center space-x-2">
                                    <Badge variant="secondary">Slim</Badge>
                                    <span className="text-sm text-gray-400">Fitted, close to body</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Badge variant="secondary">Regular</Badge>
                                    <span className="text-sm text-gray-400">Standard fit, comfortable</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Badge variant="secondary">Relaxed</Badge>
                                    <span className="text-sm text-gray-400">Loose, roomy fit</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Additional Help */}
                <div className="mt-16">
                    <h2 className="text-2xl font-bold mb-8">Need Help?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6">
                                <h3 className="font-semibold mb-2">Contact Support</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Still unsure about your size? Our customer service team is here to help.
                                </p>
                                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                                    Contact Us
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="bg-gray-900 border-gray-800">
                            <CardContent className="p-6">
                                <h3 className="font-semibold mb-2">Virtual Fitting</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Try our virtual fitting room to see how clothes look on you.
                                </p>
                                <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                                    Try Virtual Fitting
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
} 