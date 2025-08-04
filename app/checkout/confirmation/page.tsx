"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, Truck, Mail, Phone, MapPin, ArrowRight, FileText } from "lucide-react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function ConfirmationPage() {
    const searchParams = useSearchParams()
    const orderId = searchParams.get('orderId') || 'ORD-2024-001'
    const [orderDetails, setOrderDetails] = useState({
        id: orderId,
        orderNumber: orderId,
        status: 'confirmed' as const,
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
        subtotal: 1180.0,
        shipping: 100.0,
        tax: 212.4,
        discount: 118.0,
        total: 1374.4,
        estimatedDelivery: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        trackingNumber: "TRK123456789"
    })

    useEffect(() => {
        // Send confirmation email (mock)
        console.log('Sending confirmation email...')
    }, [])

    const downloadInvoice = () => {
        // Mock invoice download
        const invoiceData = {
            orderNumber: orderDetails.orderNumber,
            date: new Date().toLocaleDateString(),
            items: orderDetails.items,
            total: orderDetails.total
        }

        const blob = new Blob([JSON.stringify(invoiceData, null, 2)], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `invoice-${orderDetails.orderNumber}.json`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
                {/* Success Message */}
                <div className="text-center mb-12">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h1 className="text-4xl font-bold text-white mb-4">Order Confirmed!</h1>
                    <p className="text-gray-400 text-lg mb-2">Thank you for your purchase</p>
                    <p className="text-gray-500">Order #{orderDetails.orderNumber}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Order Details */}
                    <div className="space-y-6">
                        {/* Order Status */}
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Order Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center space-x-3">
                                    <Badge className="bg-green-600 text-white">Confirmed</Badge>
                                    <span className="text-gray-300">Your order has been confirmed and is being processed</span>
                                </div>
                                <div className="mt-4 space-y-2 text-sm text-gray-400">
                                    <p>Order Date: {new Date().toLocaleDateString()}</p>
                                    <p>Estimated Delivery: {orderDetails.estimatedDelivery.toLocaleDateString()}</p>
                                    <p>Tracking Number: {orderDetails.trackingNumber}</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Order Items */}
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
                    </div>

                    {/* Order Summary & Actions */}
                    <div className="space-y-6">
                        {/* Order Summary */}
                        <Card className="bg-gray-900 border-gray-800">
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
                            </CardContent>
                        </Card>

                        {/* Quick Actions */}
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Quick Actions</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button
                                    onClick={downloadInvoice}
                                    variant="outline"
                                    className="w-full border-gray-600 text-white hover:bg-gray-800"
                                >
                                    <Download className="w-4 h-4 mr-2" />
                                    Download Invoice
                                </Button>

                                <Link href={`/checkout/track/${orderDetails.orderNumber}`}>
                                    <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-800">
                                        <Truck className="w-4 h-4 mr-2" />
                                        Track Order
                                    </Button>
                                </Link>

                                <Link href="/checkout/invoice">
                                    <Button variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-800">
                                        <FileText className="w-4 h-4 mr-2" />
                                        View Invoice
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Contact Support */}
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Need Help?</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Mail className="w-4 h-4" />
                                    <span>support@atenoir.com</span>
                                </div>
                                <div className="flex items-center space-x-3 text-gray-300">
                                    <Phone className="w-4 h-4" />
                                    <span>+91 1800-123-4567</span>
                                </div>
                                <p className="text-sm text-gray-400">
                                    Our customer support team is available 24/7 to help you with any questions.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Continue Shopping */}
                <div className="text-center mt-12">
                    <Link href="/">
                        <Button className="bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black">
                            Continue Shopping
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
} 