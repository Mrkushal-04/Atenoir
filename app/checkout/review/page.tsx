"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Check, MapPin, CreditCard, Truck, FileText } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function ReviewPage() {
    const router = useRouter()
    const [isProcessing, setIsProcessing] = useState(false)

    const orderDetails = {
        items: [
            {
                id: "1",
                name: "Classic Black Tee",
                price: 350.0,
                image: "/images/black-tshirt.jpeg",
                quantity: 2,
                size: "M",
                color: "Black"
            },
            {
                id: "2",
                name: "Champagne Short Sleeve",
                price: 480.0,
                image: "/images/champagne-shirt.jpeg",
                quantity: 1,
                size: "L",
                color: "Champagne"
            }
        ],
        shippingAddress: {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            phone: "+91 98765 43210",
            addressLine1: "123 Main Street",
            addressLine2: "Apartment 4B",
            city: "Mumbai",
            state: "Maharashtra",
            postalCode: "400001",
            country: "India"
        },
        billingAddress: {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            phone: "+91 98765 43210",
            addressLine1: "123 Main Street",
            addressLine2: "Apartment 4B",
            city: "Mumbai",
            state: "Maharashtra",
            postalCode: "400001",
            country: "India"
        },
        paymentMethod: {
            type: "card" as "card" | "cod",
            last4: "3456",
            brand: "Visa"
        },
        deliveryMethod: "Standard Delivery",
        subtotal: 1180.0,
        shipping: 100.0,
        tax: 212.4,
        discount: 118.0,
        total: 1374.4
    }

    const handlePlaceOrder = async () => {
        setIsProcessing(true)

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 3000))

        // Redirect to order confirmation
        router.push('/checkout/confirmation?orderId=ORD-2024-001')
    }

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
                {/* Progress Steps */}
                <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                            <span className="ml-2 text-green-600 font-medium">Delivery</span>
                        </div>
                        <div className="w-16 h-0.5 bg-green-600"></div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                            <span className="ml-2 text-green-600 font-medium">Payment</span>
                        </div>
                        <div className="w-16 h-0.5 bg-lime-yellow-600"></div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-lime-yellow-600 rounded-full flex items-center justify-center text-black font-bold">3</div>
                            <span className="ml-2 text-lime-yellow-600 font-medium">Review</span>
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-white mb-8">Review Your Order</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Order Details */}
                    <div className="space-y-6">
                        {/* Items */}
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Order Items</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {orderDetails.items.map((item) => (
                                    <div key={item.id} className="flex items-center space-x-4 p-4 border border-gray-800 rounded-lg">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                        <div className="flex-1">
                                            <h3 className="text-white font-medium">{item.name}</h3>
                                            <div className="flex items-center space-x-2 mt-1">
                                                {item.size && <Badge variant="secondary" className="text-xs">{item.size}</Badge>}
                                                {item.color && <Badge variant="secondary" className="text-xs">{item.color}</Badge>}
                                            </div>
                                            <p className="text-gray-400 text-sm mt-1">Qty: {item.quantity}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-white font-medium">₹{(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>

                        {/* Shipping Address */}
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    Shipping Address
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-gray-300">
                                    <p className="font-medium">{orderDetails.shippingAddress.firstName} {orderDetails.shippingAddress.lastName}</p>
                                    <p>{orderDetails.shippingAddress.addressLine1}</p>
                                    {orderDetails.shippingAddress.addressLine2 && <p>{orderDetails.shippingAddress.addressLine2}</p>}
                                    <p>{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.postalCode}</p>
                                    <p>{orderDetails.shippingAddress.country}</p>
                                    <p className="mt-2">{orderDetails.shippingAddress.email}</p>
                                    <p>{orderDetails.shippingAddress.phone}</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Payment Method */}
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center">
                                    <CreditCard className="w-5 h-5 mr-2" />
                                    Payment Method
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-gray-300">
                                    {orderDetails.paymentMethod.type === 'cod' ? (
                                        <>
                                            <p className="font-medium">Cash on Delivery</p>
                                            <p className="text-sm text-gray-400">Pay at doorstep</p>
                                        </>
                                    ) : (
                                        <>
                                            <p className="font-medium">{orderDetails.paymentMethod.brand} •••• {orderDetails.paymentMethod.last4}</p>
                                            <p className="text-sm text-gray-400">Card payment</p>
                                        </>
                                    )}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Delivery Method */}
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center">
                                    <Truck className="w-5 h-5 mr-2" />
                                    Delivery Method
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-gray-300">
                                    <p className="font-medium">{orderDetails.deliveryMethod}</p>
                                    <p className="text-sm text-gray-400">5-7 business days</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Order Summary */}
                    <div>
                        <Card className="bg-gray-900 border-gray-800 sticky top-24">
                            <CardHeader>
                                <CardTitle className="text-white">Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-gray-300">
                                        <span>Subtotal</span>
                                        <span>₹{orderDetails.subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300">
                                        <span>Shipping</span>
                                        <span>₹{orderDetails.shipping.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300">
                                        <span>Tax (18% GST)</span>
                                        <span>₹{orderDetails.tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-green-400">
                                        <span>Discount</span>
                                        <span>-₹{orderDetails.discount.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-gray-700 pt-2">
                                        <div className="flex justify-between text-white font-bold text-lg">
                                            <span>Total</span>
                                            <span>₹{orderDetails.total.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <h4 className="text-white font-medium mb-2">Order Information:</h4>
                                    <div className="space-y-1 text-sm text-gray-300">
                                        <p>Order ID: ORD-2024-001</p>
                                        <p>Date: {new Date().toLocaleDateString()}</p>
                                        <p>Estimated Delivery: {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                                    </div>
                                </div>

                                <Button
                                    onClick={handlePlaceOrder}
                                    disabled={isProcessing}
                                    className="w-full bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black"
                                >
                                    {isProcessing ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                                            Processing Payment...
                                        </>
                                    ) : (
                                        <>
                                            <Check className="w-4 h-4 mr-2" />
                                            Place Order
                                        </>
                                    )}
                                </Button>

                                <div className="text-xs text-gray-400 text-center">
                                    By placing this order, you agree to our Terms of Service and Privacy Policy
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    <Link href="/checkout/payment">
                        <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Payment
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
} 