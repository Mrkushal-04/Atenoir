"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Package, Truck, CheckCircle, Clock, MapPin } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

interface TrackingStep {
    id: string
    title: string
    description: string
    status: 'completed' | 'current' | 'pending'
    date?: string
    time?: string
    location?: string
}

export default function TrackOrderPage() {
    const params = useParams()
    const orderId = params.orderId as string

    const [orderDetails, setOrderDetails] = useState({
        orderNumber: orderId,
        status: 'shipped' as const,
        estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        trackingNumber: "TRK123456789",
        carrier: "Express Logistics",
        items: [
            {
                id: "1",
                name: "Classic Black Tee",
                image: "/images/black-tshirt.jpeg",
                quantity: 2
            },
            {
                id: "2",
                name: "Champagne Short Sleeve",
                image: "/images/champagne-shirt.jpeg",
                quantity: 1
            }
        ],
        shippingAddress: {
            firstName: "John",
            lastName: "Doe",
            addressLine1: "123 Main Street",
            addressLine2: "Apartment 4B",
            city: "Mumbai",
            state: "Maharashtra",
            postalCode: "400001",
            country: "India"
        }
    })

    const [trackingSteps, setTrackingSteps] = useState<TrackingStep[]>([
        {
            id: "1",
            title: "Order Confirmed",
            description: "Your order has been confirmed and is being processed",
            status: "completed",
            date: "2024-01-15",
            time: "10:30 AM",
            location: "Mumbai, India"
        },
        {
            id: "2",
            title: "Order Processed",
            description: "Your order has been processed and is ready for shipping",
            status: "completed",
            date: "2024-01-15",
            time: "2:45 PM",
            location: "Mumbai, India"
        },
        {
            id: "3",
            title: "Shipped",
            description: "Your order has been shipped and is on its way",
            status: "current",
            date: "2024-01-16",
            time: "9:15 AM",
            location: "Mumbai, India"
        },
        {
            id: "4",
            title: "In Transit",
            description: "Your order is in transit to the delivery address",
            status: "pending",
            date: "2024-01-17",
            time: "Expected: 11:00 AM",
            location: "Mumbai, India"
        },
        {
            id: "5",
            title: "Out for Delivery",
            description: "Your order is out for delivery",
            status: "pending",
            date: "2024-01-18",
            time: "Expected: 9:00 AM - 6:00 PM",
            location: "Mumbai, India"
        },
        {
            id: "6",
            title: "Delivered",
            description: "Your order has been delivered",
            status: "pending",
            date: "2024-01-18",
            time: "Expected: 9:00 AM - 6:00 PM",
            location: "Mumbai, India"
        }
    ])

    const getStatusIcon = (status: TrackingStep['status']) => {
        switch (status) {
            case 'completed':
                return <CheckCircle className="w-6 h-6 text-green-500" />
            case 'current':
                return <Package className="w-6 h-6 text-lime-yellow-500" />
            case 'pending':
                return <Clock className="w-6 h-6 text-gray-500" />
            default:
                return <Clock className="w-6 h-6 text-gray-500" />
        }
    }

    const getStatusColor = (status: TrackingStep['status']) => {
        switch (status) {
            case 'completed':
                return 'text-green-500'
            case 'current':
                return 'text-lime-yellow-500'
            case 'pending':
                return 'text-gray-500'
            default:
                return 'text-gray-500'
        }
    }

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <Link href="/checkout/confirmation">
                        <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Orders
                        </Button>
                    </Link>
                    <div className="text-right">
                        <h1 className="text-3xl font-bold text-white">Track Order</h1>
                        <p className="text-gray-400">Order #{orderDetails.orderNumber}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Tracking Timeline */}
                    <div className="lg:col-span-2">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white flex items-center">
                                    <Truck className="w-5 h-5 mr-2" />
                                    Tracking Timeline
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {trackingSteps.map((step, index) => (
                                        <div key={step.id} className="flex items-start space-x-4">
                                            <div className="flex-shrink-0">
                                                {getStatusIcon(step.status)}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center space-x-2 mb-1">
                                                    <h3 className={`font-medium ${getStatusColor(step.status)}`}>
                                                        {step.title}
                                                    </h3>
                                                    {step.status === 'current' && (
                                                        <Badge className="bg-lime-yellow-600 text-black">Current</Badge>
                                                    )}
                                                </div>
                                                <p className="text-gray-400 text-sm mb-2">{step.description}</p>
                                                <div className="flex items-center space-x-4 text-xs text-gray-500">
                                                    {step.date && (
                                                        <div className="flex items-center">
                                                            <Clock className="w-3 h-3 mr-1" />
                                                            {step.date} at {step.time}
                                                        </div>
                                                    )}
                                                    {step.location && (
                                                        <div className="flex items-center">
                                                            <MapPin className="w-3 h-3 mr-1" />
                                                            {step.location}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            {index < trackingSteps.length - 1 && (
                                                <div className="absolute left-3 top-8 w-0.5 h-12 bg-gray-700"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Order Details */}
                    <div className="space-y-6">
                        {/* Order Status */}
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Order Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <Badge className="bg-lime-yellow-600 text-black">Shipped</Badge>
                                        <span className="text-gray-300">Your order is on its way</span>
                                    </div>
                                    <div className="space-y-2 text-sm text-gray-400">
                                        <p>Tracking Number: {orderDetails.trackingNumber}</p>
                                        <p>Carrier: {orderDetails.carrier}</p>
                                        <p>Estimated Delivery: {orderDetails.estimatedDelivery.toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Order Items */}
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Order Items</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    {orderDetails.items.map((item) => (
                                        <div key={item.id} className="flex items-center space-x-3">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-12 h-12 object-cover rounded-md"
                                            />
                                            <div className="flex-1">
                                                <p className="text-white text-sm font-medium">{item.name}</p>
                                                <p className="text-gray-400 text-xs">Qty: {item.quantity}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Shipping Address */}
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Shipping Address</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-gray-300 text-sm">
                                    <p className="font-medium">{orderDetails.shippingAddress.firstName} {orderDetails.shippingAddress.lastName}</p>
                                    <p>{orderDetails.shippingAddress.addressLine1}</p>
                                    {orderDetails.shippingAddress.addressLine2 && <p>{orderDetails.shippingAddress.addressLine2}</p>}
                                    <p>{orderDetails.shippingAddress.city}, {orderDetails.shippingAddress.state} {orderDetails.shippingAddress.postalCode}</p>
                                    <p>{orderDetails.shippingAddress.country}</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Need Help */}
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Need Help?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-400 text-sm mb-3">
                                    If you have any questions about your order or delivery, our customer support team is here to help.
                                </p>
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-300">Email: support@atenoir.com</p>
                                    <p className="text-gray-300">Phone: +91 1800-123-4567</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
} 