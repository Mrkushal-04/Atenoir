"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { PromoCode } from "@/lib/types"
import { useCart } from "@/lib/hooks/useCart"

export default function CheckoutPage() {
    const { cartItems, updateQuantity, removeFromCart } = useCart()

    const [promoCode, setPromoCode] = useState("")
    const [appliedPromo, setAppliedPromo] = useState<PromoCode | null>(null)

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const shipping = subtotal > 1000 ? 0 : 100
    const tax = subtotal * 0.18 // 18% GST
    const discount = appliedPromo ? (appliedPromo.type === 'percentage' ? subtotal * (appliedPromo.discount / 100) : appliedPromo.discount) : 0
    const total = subtotal + shipping + tax - discount



    const applyPromoCode = () => {
        // Mock promo code validation
        if (promoCode.toUpperCase() === "WELCOME10") {
            setAppliedPromo({
                code: "WELCOME10",
                discount: 10,
                type: "percentage",
                minAmount: 500,
                maxDiscount: 500,
                validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
            })
        }
    }

    const removePromoCode = () => {
        setAppliedPromo(null)
        setPromoCode("")
    }

    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-6 py-16">
                <div className="max-w-2xl mx-auto text-center">
                    <ShoppingBag className="w-24 h-24 mx-auto text-gray-400 mb-6" />
                    <h1 className="text-3xl font-bold text-white mb-4">Your cart is empty</h1>
                    <p className="text-gray-400 mb-8">Looks like you haven't added any items to your cart yet.</p>
                    <Link href="/">
                        <Button className="bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black">
                            Continue Shopping
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Shopping Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Cart Items ({cartItems.length})</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-800 rounded-lg">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-white font-medium">{item.name}</h3>
                                            <div className="flex items-center space-x-2 mt-1">
                                                {item.size && <Badge variant="secondary" className="text-xs">{item.size}</Badge>}
                                                {item.color && <Badge variant="secondary" className="text-xs">{item.color}</Badge>}
                                            </div>
                                            <p className="text-gray-400 text-sm mt-1">₹{item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="border-gray-600 text-white hover:bg-gray-800"
                                            >
                                                <Minus className="w-4 h-4" />
                                            </Button>
                                            <span className="text-white min-w-[2rem] text-center">{item.quantity}</span>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="border-gray-600 text-white hover:bg-gray-800"
                                            >
                                                <Plus className="w-4 h-4" />
                                            </Button>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-white font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Promo Code */}
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Promo Code</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {appliedPromo ? (
                                    <div className="flex items-center justify-between p-3 bg-green-900/20 border border-green-600 rounded-lg">
                                        <div>
                                            <p className="text-green-400 font-medium">{appliedPromo.code}</p>
                                            <p className="text-green-300 text-sm">
                                                {appliedPromo.type === 'percentage' ? `${appliedPromo.discount}% off` : `₹${appliedPromo.discount} off`}
                                            </p>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            onClick={removePromoCode}
                                            className="text-red-400 hover:text-red-300"
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                ) : (
                                    <div className="flex space-x-2">
                                        <Input
                                            placeholder="Enter promo code"
                                            value={promoCode}
                                            onChange={(e) => setPromoCode(e.target.value)}
                                            className="flex-1 bg-gray-800 border-gray-700 text-white"
                                        />
                                        <Button
                                            onClick={applyPromoCode}
                                            className="bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black"
                                        >
                                            Apply
                                        </Button>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <Card className="bg-gray-900 border-gray-800 sticky top-24">
                            <CardHeader>
                                <CardTitle className="text-white">Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-gray-300">
                                        <span>Subtotal</span>
                                        <span>₹{subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300">
                                        <span>Shipping</span>
                                        <span>{shipping === 0 ? 'Free' : `₹${shipping.toFixed(2)}`}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300">
                                        <span>Tax (18% GST)</span>
                                        <span>₹{tax.toFixed(2)}</span>
                                    </div>
                                    {discount > 0 && (
                                        <div className="flex justify-between text-green-400">
                                            <span>Discount</span>
                                            <span>-₹{discount.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="border-t border-gray-700 pt-2">
                                        <div className="flex justify-between text-white font-bold text-lg">
                                            <span>Total</span>
                                            <span>₹{total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                <Link href="/checkout/delivery">
                                    <Button className="w-full bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black">
                                        Proceed to Checkout
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>

                                <Link href="/">
                                    <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-800">
                                        Continue Shopping
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
} 