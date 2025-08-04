"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Package, Truck, CheckCircle, Clock, Eye, Download } from "lucide-react"
import Link from "next/link"
import type { Order } from "@/lib/types"

export default function OrdersPage() {
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedStatus, setSelectedStatus] = useState<string>("all")

    const orders: Order[] = [
        {
            id: "1",
            orderNumber: "ORD-2024-001",
            items: [
                {
                    id: "1",
                    productId: "classic-black-tee",
                    name: "Classic Black Tee",
                    price: 350.0,
                    image: "/images/black-tshirt.jpeg",
                    quantity: 2,
                    size: "M",
                    color: "Black"
                },
                {
                    id: "2",
                    productId: "champagne-short-sleeve",
                    name: "Champagne Short Sleeve",
                    price: 480.0,
                    image: "/images/champagne-shirt.jpeg",
                    quantity: 1,
                    size: "L",
                    color: "Champagne"
                }
            ],
            subtotal: 1180.0,
            tax: 212.4,
            shipping: 100.0,
            discount: 118.0,
            total: 1374.4,
            status: "shipped",
            paymentStatus: "paid",
            shippingAddress: {
                id: "1",
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
                id: "2",
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
                id: "1",
                type: "card",
                last4: "3456",
                brand: "Visa"
            },
            createdAt: new Date("2024-01-15"),
            estimatedDelivery: new Date("2024-01-22"),
            trackingNumber: "TRK123456789"
        },
        {
            id: "2",
            orderNumber: "ORD-2024-002",
            items: [
                {
                    id: "3",
                    productId: "crisp-white-tee",
                    name: "Crisp White Tee",
                    price: 380.0,
                    image: "/images/white-tshirt.jpeg",
                    quantity: 1,
                    size: "L",
                    color: "White"
                }
            ],
            subtotal: 380.0,
            tax: 68.4,
            shipping: 100.0,
            discount: 0,
            total: 548.4,
            status: "delivered",
            paymentStatus: "paid",
            shippingAddress: {
                id: "1",
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
                id: "2",
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
                id: "1",
                type: "card",
                last4: "3456",
                brand: "Visa"
            },
            createdAt: new Date("2024-01-10"),
            estimatedDelivery: new Date("2024-01-17")
        }
    ]

    const getStatusIcon = (status: Order['status']) => {
        switch (status) {
            case 'pending':
                return <Clock className="w-5 h-5 text-yellow-500" />
            case 'confirmed':
                return <Package className="w-5 h-5 text-blue-500" />
            case 'processing':
                return <Package className="w-5 h-5 text-blue-500" />
            case 'shipped':
                return <Truck className="w-5 h-5 text-lime-yellow-500" />
            case 'delivered':
                return <CheckCircle className="w-5 h-5 text-green-500" />
            case 'cancelled':
                return <Clock className="w-5 h-5 text-red-500" />
            default:
                return <Clock className="w-5 h-5 text-gray-500" />
        }
    }

    const getStatusColor = (status: Order['status']) => {
        switch (status) {
            case 'pending':
                return 'bg-yellow-600'
            case 'confirmed':
                return 'bg-blue-600'
            case 'processing':
                return 'bg-blue-600'
            case 'shipped':
                return 'bg-lime-yellow-600'
            case 'delivered':
                return 'bg-green-600'
            case 'cancelled':
                return 'bg-red-600'
            default:
                return 'bg-gray-600'
        }
    }

    const filteredOrders = orders.filter(order => {
        const matchesSearch = order.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
            order.items.some(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        const matchesStatus = selectedStatus === "all" || order.status === selectedStatus
        return matchesSearch && matchesStatus
    })

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">My Orders</h1>

                {/* Search and Filter */}
                <div className="flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                placeholder="Search orders by order number or product name..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10 bg-gray-800 border-gray-700 text-white"
                            />
                        </div>
                    </div>
                    <select
                        value={selectedStatus}
                        onChange={(e) => setSelectedStatus(e.target.value)}
                        className="px-4 py-2 bg-gray-800 border border-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-lime-yellow-600"
                        aria-label="Filter orders by status"
                    >
                        <option value="all">All Orders</option>
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="processing">Processing</option>
                        <option value="shipped">Shipped</option>
                        <option value="delivered">Delivered</option>
                        <option value="cancelled">Cancelled</option>
                    </select>
                </div>

                {/* Orders List */}
                <div className="space-y-6">
                    {filteredOrders.map((order) => (
                        <Card key={order.id} className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-white flex items-center space-x-3">
                                            {getStatusIcon(order.status)}
                                            <span>Order #{order.orderNumber}</span>
                                            <Badge className={getStatusColor(order.status)}>
                                                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                            </Badge>
                                        </CardTitle>
                                        <p className="text-gray-400 mt-1">
                                            Placed on {order.createdAt.toLocaleDateString()}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-white font-bold">₹{order.total.toFixed(2)}</p>
                                        <p className="text-gray-400 text-sm">{order.items.length} item{order.items.length !== 1 ? 's' : ''}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {/* Order Items */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    {order.items.map((item) => (
                                        <div key={item.id} className="flex items-center space-x-3 p-3 border border-gray-800 rounded-lg">
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
                                                <p className="text-gray-400 text-sm">Qty: {item.quantity}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-white">₹{(item.price * item.quantity).toFixed(2)}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Order Details */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div>
                                        <h4 className="text-white font-medium mb-2">Shipping Address</h4>
                                        <div className="text-gray-400 text-sm">
                                            <p>{order.shippingAddress.firstName} {order.shippingAddress.lastName}</p>
                                            <p>{order.shippingAddress.addressLine1}</p>
                                            {order.shippingAddress.addressLine2 && <p>{order.shippingAddress.addressLine2}</p>}
                                            <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-2">Payment</h4>
                                        <div className="text-gray-400 text-sm">
                                            {order.paymentMethod.type === 'cod' ? (
                                                <>
                                                    <p>Cash on Delivery</p>
                                                    <p className="capitalize">{order.paymentStatus}</p>
                                                </>
                                            ) : (
                                                <>
                                                    <p>{order.paymentMethod.brand} •••• {order.paymentMethod.last4}</p>
                                                    <p className="capitalize">{order.paymentStatus}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-2">Delivery</h4>
                                        <div className="text-gray-400 text-sm">
                                            {order.estimatedDelivery && (
                                                <p>Estimated: {order.estimatedDelivery.toLocaleDateString()}</p>
                                            )}
                                            {order.trackingNumber && (
                                                <p>Tracking: {order.trackingNumber}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-wrap gap-3">
                                    <Link href={`/checkout/track/${order.orderNumber}`}>
                                        <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                                            <Truck className="w-4 h-4 mr-2" />
                                            Track Order
                                        </Button>
                                    </Link>
                                    <Link href="/checkout/invoice">
                                        <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                                            <Download className="w-4 h-4 mr-2" />
                                            Download Invoice
                                        </Button>
                                    </Link>
                                    <Link href={`/checkout/confirmation?orderId=${order.orderNumber}`}>
                                        <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                                            <Eye className="w-4 h-4 mr-2" />
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {filteredOrders.length === 0 && (
                    <div className="text-center py-12">
                        <Package className="w-24 h-24 mx-auto text-gray-400 mb-6" />
                        <h2 className="text-2xl font-bold text-white mb-4">No orders found</h2>
                        <p className="text-gray-400 mb-8">
                            {searchTerm || selectedStatus !== "all"
                                ? "Try adjusting your search or filter criteria."
                                : "You haven't placed any orders yet."
                            }
                        </p>
                        <Link href="/shop">
                            <Button className="bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black">
                                Start Shopping
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
} 