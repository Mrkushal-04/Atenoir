"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, ArrowLeft, Printer, Mail } from "lucide-react"
import Link from "next/link"

export default function InvoicePage() {
    const invoiceData = {
        invoiceNumber: "INV-2024-001",
        orderNumber: "ORD-2024-001",
        date: new Date().toLocaleDateString(),
        dueDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString(),
        status: "paid" as const,
        items: [
            {
                id: "1",
                name: "Classic Black Tee",
                description: "Premium cotton t-shirt in black",
                price: 350.0,
                quantity: 2,
                total: 700.0
            },
            {
                id: "2",
                name: "Champagne Short Sleeve",
                description: "Elegant short-sleeve shirt in champagne",
                price: 480.0,
                quantity: 1,
                total: 480.0
            }
        ],
        customer: {
            name: "John Doe",
            email: "john.doe@example.com",
            phone: "+91 98765 43210",
            address: {
                line1: "123 Main Street",
                line2: "Apartment 4B",
                city: "Mumbai",
                state: "Maharashtra",
                postalCode: "400001",
                country: "India"
            }
        },
        company: {
            name: "Atenoir",
            address: {
                line1: "456 Fashion Street",
                line2: "Suite 100",
                city: "Mumbai",
                state: "Maharashtra",
                postalCode: "400002",
                country: "India"
            },
            phone: "+91 1800-123-4567",
            email: "support@atenoir.com",
            website: "www.atenoir.com"
        },
        subtotal: 1180.0,
        shipping: 100.0,
        tax: 212.4,
        discount: 118.0,
        total: 1374.4
    }

    const downloadInvoice = () => {
        // Mock invoice download
        const blob = new Blob([JSON.stringify(invoiceData, null, 2)], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `invoice-${invoiceData.invoiceNumber}.json`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
    }

    const printInvoice = () => {
        window.print()
    }

    const emailInvoice = () => {
        // Mock email functionality
        window.open(`mailto:${invoiceData.customer.email}?subject=Invoice ${invoiceData.invoiceNumber}&body=Please find attached invoice for your recent order.`)
    }

    return (
        <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <Link href="/checkout/confirmation">
                        <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Order
                        </Button>
                    </Link>
                    <div className="flex space-x-2">
                        <Button onClick={downloadInvoice} variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                        </Button>
                        <Button onClick={printInvoice} variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                            <Printer className="w-4 h-4 mr-2" />
                            Print
                        </Button>
                        <Button onClick={emailInvoice} variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                            <Mail className="w-4 h-4 mr-2" />
                            Email
                        </Button>
                    </div>
                </div>

                {/* Invoice */}
                <Card className="bg-gray-900 border-gray-800">
                    <CardContent className="p-8">
                        {/* Invoice Header */}
                        <div className="flex justify-between items-start mb-8">
                            <div>
                                <h1 className="text-3xl font-bold text-white mb-2">INVOICE</h1>
                                <div className="text-gray-400 space-y-1">
                                    <p>Invoice #: {invoiceData.invoiceNumber}</p>
                                    <p>Order #: {invoiceData.orderNumber}</p>
                                    <p>Date: {invoiceData.date}</p>
                                    <p>Due Date: {invoiceData.dueDate}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="mb-4">
                                    <Badge className="bg-green-600 text-white">PAID</Badge>
                                </div>
                                <div className="text-gray-400">
                                    <p className="font-medium text-white">{invoiceData.company.name}</p>
                                    <p>{invoiceData.company.address.line1}</p>
                                    <p>{invoiceData.company.address.line2}</p>
                                    <p>{invoiceData.company.address.city}, {invoiceData.company.address.state} {invoiceData.company.address.postalCode}</p>
                                    <p>{invoiceData.company.address.country}</p>
                                    <p className="mt-2">{invoiceData.company.phone}</p>
                                    <p>{invoiceData.company.email}</p>
                                    <p>{invoiceData.company.website}</p>
                                </div>
                            </div>
                        </div>

                        {/* Bill To */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">Bill To:</h3>
                                <div className="text-gray-300">
                                    <p className="font-medium">{invoiceData.customer.name}</p>
                                    <p>{invoiceData.customer.address.line1}</p>
                                    <p>{invoiceData.customer.address.line2}</p>
                                    <p>{invoiceData.customer.address.city}, {invoiceData.customer.address.state} {invoiceData.customer.address.postalCode}</p>
                                    <p>{invoiceData.customer.address.country}</p>
                                    <p className="mt-2">{invoiceData.customer.email}</p>
                                    <p>{invoiceData.customer.phone}</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">Ship To:</h3>
                                <div className="text-gray-300">
                                    <p className="font-medium">{invoiceData.customer.name}</p>
                                    <p>{invoiceData.customer.address.line1}</p>
                                    <p>{invoiceData.customer.address.line2}</p>
                                    <p>{invoiceData.customer.address.city}, {invoiceData.customer.address.state} {invoiceData.customer.address.postalCode}</p>
                                    <p>{invoiceData.customer.address.country}</p>
                                </div>
                            </div>
                        </div>

                        {/* Items Table */}
                        <div className="mb-8">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-700">
                                        <th className="text-left py-3 px-4 text-white font-medium">Item</th>
                                        <th className="text-left py-3 px-4 text-white font-medium">Description</th>
                                        <th className="text-right py-3 px-4 text-white font-medium">Quantity</th>
                                        <th className="text-right py-3 px-4 text-white font-medium">Unit Price</th>
                                        <th className="text-right py-3 px-4 text-white font-medium">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoiceData.items.map((item, index) => (
                                        <tr key={item.id} className="border-b border-gray-800">
                                            <td className="py-4 px-4 text-white">{item.name}</td>
                                            <td className="py-4 px-4 text-gray-400">{item.description}</td>
                                            <td className="py-4 px-4 text-right text-white">{item.quantity}</td>
                                            <td className="py-4 px-4 text-right text-white">₹{item.price.toFixed(2)}</td>
                                            <td className="py-4 px-4 text-right text-white">₹{item.total.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Totals */}
                        <div className="flex justify-end">
                            <div className="w-80 space-y-2">
                                <div className="flex justify-between text-gray-300">
                                    <span>Subtotal:</span>
                                    <span>₹{invoiceData.subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-300">
                                    <span>Shipping:</span>
                                    <span>₹{invoiceData.shipping.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-300">
                                    <span>Tax (18% GST):</span>
                                    <span>₹{invoiceData.tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-green-400">
                                    <span>Discount:</span>
                                    <span>-₹{invoiceData.discount.toFixed(2)}</span>
                                </div>
                                <div className="border-t border-gray-700 pt-2">
                                    <div className="flex justify-between text-white font-bold text-lg">
                                        <span>Total:</span>
                                        <span>₹{invoiceData.total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-12 pt-8 border-t border-gray-700">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="text-white font-semibold mb-2">Payment Terms</h4>
                                    <p className="text-gray-400 text-sm">
                                        Payment is due within 30 days of invoice date. Late payments may be subject to a 1.5% monthly service charge.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-2">Thank You</h4>
                                    <p className="text-gray-400 text-sm">
                                        Thank you for choosing Atenoir. We appreciate your business and look forward to serving you again.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
} 