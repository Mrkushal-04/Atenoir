"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, ArrowRight, MapPin, User, Mail, Phone } from "lucide-react"
import Link from "next/link"
import type { Address } from "@/lib/types"

export default function DeliveryPage() {
    const [shippingAddress, setShippingAddress] = useState<Address>({
        id: "1",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "India"
    })

    const [billingAddress, setBillingAddress] = useState<Address>({
        id: "2",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "India"
    })

    const [sameAsShipping, setSameAsShipping] = useState(true)
    const [deliveryMethod, setDeliveryMethod] = useState("standard")

    const updateShippingAddress = (field: keyof Address, value: string) => {
        setShippingAddress(prev => ({ ...prev, [field]: value }))
        if (sameAsShipping) {
            setBillingAddress(prev => ({ ...prev, [field]: value }))
        }
    }

    const updateBillingAddress = (field: keyof Address, value: string) => {
        setBillingAddress(prev => ({ ...prev, [field]: value }))
    }

    const handleSameAsShippingChange = (checked: boolean) => {
        setSameAsShipping(checked)
        if (checked) {
            setBillingAddress(shippingAddress)
        }
    }

    const isFormValid = () => {
        const requiredFields: (keyof Address)[] = ['firstName', 'lastName', 'email', 'phone', 'addressLine1', 'city', 'state', 'postalCode']
        return requiredFields.every(field => shippingAddress[field] && billingAddress[field])
    }

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
                {/* Progress Steps */}
                <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-lime-yellow-600 rounded-full flex items-center justify-center text-black font-bold">1</div>
                            <span className="ml-2 text-lime-yellow-600 font-medium">Delivery</span>
                        </div>
                        <div className="w-16 h-0.5 bg-gray-600"></div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-gray-400 font-bold">2</div>
                            <span className="ml-2 text-gray-400">Payment</span>
                        </div>
                        <div className="w-16 h-0.5 bg-gray-600"></div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-gray-400 font-bold">3</div>
                            <span className="ml-2 text-gray-400">Review</span>
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-white mb-8">Delivery Information</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Shipping Address */}
                    <Card className="bg-gray-900 border-gray-800">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <MapPin className="w-5 h-5 mr-2" />
                                Shipping Address
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">First Name *</label>
                                    <Input
                                        value={shippingAddress.firstName}
                                        onChange={(e) => updateShippingAddress('firstName', e.target.value)}
                                        className="bg-gray-800 border-gray-700 text-white"
                                        placeholder="John"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Last Name *</label>
                                    <Input
                                        value={shippingAddress.lastName}
                                        onChange={(e) => updateShippingAddress('lastName', e.target.value)}
                                        className="bg-gray-800 border-gray-700 text-white"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                                <Input
                                    type="email"
                                    value={shippingAddress.email}
                                    onChange={(e) => updateShippingAddress('email', e.target.value)}
                                    className="bg-gray-800 border-gray-700 text-white"
                                    placeholder="john.doe@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Phone *</label>
                                <Input
                                    value={shippingAddress.phone}
                                    onChange={(e) => updateShippingAddress('phone', e.target.value)}
                                    className="bg-gray-800 border-gray-700 text-white"
                                    placeholder="+91 98765 43210"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Address Line 1 *</label>
                                <Input
                                    value={shippingAddress.addressLine1}
                                    onChange={(e) => updateShippingAddress('addressLine1', e.target.value)}
                                    className="bg-gray-800 border-gray-700 text-white"
                                    placeholder="123 Main Street"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Address Line 2</label>
                                <Input
                                    value={shippingAddress.addressLine2}
                                    onChange={(e) => updateShippingAddress('addressLine2', e.target.value)}
                                    className="bg-gray-800 border-gray-700 text-white"
                                    placeholder="Apartment, suite, etc."
                                />
                            </div>

                            <div className="grid grid-cols-3 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">City *</label>
                                    <Input
                                        value={shippingAddress.city}
                                        onChange={(e) => updateShippingAddress('city', e.target.value)}
                                        className="bg-gray-800 border-gray-700 text-white"
                                        placeholder="Mumbai"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">State *</label>
                                    <Input
                                        value={shippingAddress.state}
                                        onChange={(e) => updateShippingAddress('state', e.target.value)}
                                        className="bg-gray-800 border-gray-700 text-white"
                                        placeholder="Maharashtra"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-1">Postal Code *</label>
                                    <Input
                                        value={shippingAddress.postalCode}
                                        onChange={(e) => updateShippingAddress('postalCode', e.target.value)}
                                        className="bg-gray-800 border-gray-700 text-white"
                                        placeholder="400001"
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Billing Address */}
                    <Card className="bg-gray-900 border-gray-800">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center">
                                <User className="w-5 h-5 mr-2" />
                                Billing Address
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-2 mb-4">
                                <Checkbox
                                    id="same-as-shipping"
                                    checked={sameAsShipping}
                                    onCheckedChange={handleSameAsShippingChange}
                                />
                                <label htmlFor="same-as-shipping" className="text-sm text-gray-300">
                                    Same as shipping address
                                </label>
                            </div>

                            {!sameAsShipping && (
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">First Name *</label>
                                            <Input
                                                value={billingAddress.firstName}
                                                onChange={(e) => updateBillingAddress('firstName', e.target.value)}
                                                className="bg-gray-800 border-gray-700 text-white"
                                                placeholder="John"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Last Name *</label>
                                            <Input
                                                value={billingAddress.lastName}
                                                onChange={(e) => updateBillingAddress('lastName', e.target.value)}
                                                className="bg-gray-800 border-gray-700 text-white"
                                                placeholder="Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">Email *</label>
                                        <Input
                                            type="email"
                                            value={billingAddress.email}
                                            onChange={(e) => updateBillingAddress('email', e.target.value)}
                                            className="bg-gray-800 border-gray-700 text-white"
                                            placeholder="john.doe@example.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">Phone *</label>
                                        <Input
                                            value={billingAddress.phone}
                                            onChange={(e) => updateBillingAddress('phone', e.target.value)}
                                            className="bg-gray-800 border-gray-700 text-white"
                                            placeholder="+91 98765 43210"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">Address Line 1 *</label>
                                        <Input
                                            value={billingAddress.addressLine1}
                                            onChange={(e) => updateBillingAddress('addressLine1', e.target.value)}
                                            className="bg-gray-800 border-gray-700 text-white"
                                            placeholder="123 Main Street"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">Address Line 2</label>
                                        <Input
                                            value={billingAddress.addressLine2}
                                            onChange={(e) => updateBillingAddress('addressLine2', e.target.value)}
                                            className="bg-gray-800 border-gray-700 text-white"
                                            placeholder="Apartment, suite, etc."
                                        />
                                    </div>

                                    <div className="grid grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">City *</label>
                                            <Input
                                                value={billingAddress.city}
                                                onChange={(e) => updateBillingAddress('city', e.target.value)}
                                                className="bg-gray-800 border-gray-700 text-white"
                                                placeholder="Mumbai"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">State *</label>
                                            <Input
                                                value={billingAddress.state}
                                                onChange={(e) => updateBillingAddress('state', e.target.value)}
                                                className="bg-gray-800 border-gray-700 text-white"
                                                placeholder="Maharashtra"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Postal Code *</label>
                                            <Input
                                                value={billingAddress.postalCode}
                                                onChange={(e) => updateBillingAddress('postalCode', e.target.value)}
                                                className="bg-gray-800 border-gray-700 text-white"
                                                placeholder="400001"
                                            />
                                        </div>
                                    </div>
                                </>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Delivery Method */}
                <Card className="bg-gray-900 border-gray-800 mt-8">
                    <CardHeader>
                        <CardTitle className="text-white">Delivery Method</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 p-4 border border-gray-700 rounded-lg">
                                <input
                                    type="radio"
                                    id="standard"
                                    name="delivery"
                                    value="standard"
                                    checked={deliveryMethod === "standard"}
                                    onChange={(e) => setDeliveryMethod(e.target.value)}
                                    className="text-lime-yellow-600"
                                />
                                <label htmlFor="standard" className="flex-1 text-white">
                                    <div className="font-medium">Standard Delivery</div>
                                    <div className="text-sm text-gray-400">5-7 business days • ₹100</div>
                                </label>
                            </div>
                            <div className="flex items-center space-x-3 p-4 border border-gray-700 rounded-lg">
                                <input
                                    type="radio"
                                    id="express"
                                    name="delivery"
                                    value="express"
                                    checked={deliveryMethod === "express"}
                                    onChange={(e) => setDeliveryMethod(e.target.value)}
                                    className="text-lime-yellow-600"
                                />
                                <label htmlFor="express" className="flex-1 text-white">
                                    <div className="font-medium">Express Delivery</div>
                                    <div className="text-sm text-gray-400">2-3 business days • ₹250</div>
                                </label>
                            </div>
                            <div className="flex items-center space-x-3 p-4 border border-gray-700 rounded-lg">
                                <input
                                    type="radio"
                                    id="overnight"
                                    name="delivery"
                                    value="overnight"
                                    checked={deliveryMethod === "overnight"}
                                    onChange={(e) => setDeliveryMethod(e.target.value)}
                                    className="text-lime-yellow-600"
                                />
                                <label htmlFor="overnight" className="flex-1 text-white">
                                    <div className="font-medium">Overnight Delivery</div>
                                    <div className="text-sm text-gray-400">Next business day • ₹500</div>
                                </label>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    <Link href="/checkout">
                        <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Cart
                        </Button>
                    </Link>
                    <Link href="/checkout/payment">
                        <Button
                            className="bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black"
                            disabled={!isFormValid()}
                        >
                            Continue to Payment
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
} 