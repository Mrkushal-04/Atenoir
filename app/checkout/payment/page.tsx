"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, CreditCard, Smartphone, Building2, Wallet, Truck } from "lucide-react"
import Link from "next/link"
import type { PaymentMethod } from "@/lib/types"

export default function PaymentPage() {
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod['type']>('card')
    const [cardDetails, setCardDetails] = useState({
        number: '',
        expiry: '',
        cvv: '',
        name: ''
    })
    const [upiId, setUpiId] = useState('')
    const [selectedBank, setSelectedBank] = useState('')
    const [walletType, setWalletType] = useState('')

    const banks = [
        'State Bank of India',
        'HDFC Bank',
        'ICICI Bank',
        'Axis Bank',
        'Kotak Mahindra Bank',
        'Punjab National Bank',
        'Bank of Baroda',
        'Canara Bank'
    ]

    const wallets = [
        'Paytm',
        'PhonePe',
        'Google Pay',
        'Amazon Pay',
        'MobiKwik'
    ]

    const isFormValid = () => {
        switch (paymentMethod) {
            case 'card':
                return cardDetails.number && cardDetails.expiry && cardDetails.cvv && cardDetails.name
            case 'upi':
                return upiId.includes('@')
            case 'netbanking':
                return selectedBank
            case 'wallet':
                return walletType
            case 'cod':
                return true // Cash on delivery doesn't need additional validation
            default:
                return false
        }
    }

    const formatCardNumber = (value: string) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        const matches = v.match(/\d{4,16}/g)
        const match = matches && matches[0] || ''
        const parts = []
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4))
        }
        if (parts.length) {
            return parts.join(' ')
        } else {
            return v
        }
    }

    const formatExpiry = (value: string) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
        if (v.length >= 2) {
            return v.substring(0, 2) + '/' + v.substring(2, 4)
        }
        return v
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
                        <div className="w-16 h-0.5 bg-lime-yellow-600"></div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-lime-yellow-600 rounded-full flex items-center justify-center text-black font-bold">2</div>
                            <span className="ml-2 text-lime-yellow-600 font-medium">Payment</span>
                        </div>
                        <div className="w-16 h-0.5 bg-gray-600"></div>
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-gray-400 font-bold">3</div>
                            <span className="ml-2 text-gray-400">Review</span>
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl font-bold text-white mb-8">Payment Method</h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Payment Methods */}
                    <div className="space-y-6">
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Select Payment Method</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <RadioGroup value={paymentMethod} onValueChange={(value: PaymentMethod['type']) => setPaymentMethod(value)}>
                                    <div className="space-y-4">
                                        <div className="flex items-center space-x-3 p-4 border border-gray-700 rounded-lg hover:border-lime-yellow-600 cursor-pointer">
                                            <RadioGroupItem value="card" id="card" className="text-lime-yellow-600" />
                                            <Label htmlFor="card" className="flex items-center flex-1 cursor-pointer">
                                                <CreditCard className="w-5 h-5 mr-2" />
                                                <span className="text-white">Credit/Debit Card</span>
                                            </Label>
                                        </div>

                                        <div className="flex items-center space-x-3 p-4 border border-gray-700 rounded-lg hover:border-lime-yellow-600 cursor-pointer">
                                            <RadioGroupItem value="upi" id="upi" className="text-lime-yellow-600" />
                                            <Label htmlFor="upi" className="flex items-center flex-1 cursor-pointer">
                                                <Smartphone className="w-5 h-5 mr-2" />
                                                <span className="text-white">UPI</span>
                                            </Label>
                                        </div>

                                        <div className="flex items-center space-x-3 p-4 border border-gray-700 rounded-lg hover:border-lime-yellow-600 cursor-pointer">
                                            <RadioGroupItem value="netbanking" id="netbanking" className="text-lime-yellow-600" />
                                            <Label htmlFor="netbanking" className="flex items-center flex-1 cursor-pointer">
                                                <Building2 className="w-5 h-5 mr-2" />
                                                <span className="text-white">Net Banking</span>
                                            </Label>
                                        </div>

                                        <div className="flex items-center space-x-3 p-4 border border-gray-700 rounded-lg hover:border-lime-yellow-600 cursor-pointer">
                                            <RadioGroupItem value="wallet" id="wallet" className="text-lime-yellow-600" />
                                            <Label htmlFor="wallet" className="flex items-center flex-1 cursor-pointer">
                                                <Wallet className="w-5 h-5 mr-2" />
                                                <span className="text-white">Digital Wallet</span>
                                            </Label>
                                        </div>

                                        <div className="flex items-center space-x-3 p-4 border border-gray-700 rounded-lg hover:border-lime-yellow-600 cursor-pointer">
                                            <RadioGroupItem value="cod" id="cod" className="text-lime-yellow-600" />
                                            <Label htmlFor="cod" className="flex items-center flex-1 cursor-pointer">
                                                <Truck className="w-5 h-5 mr-2" />
                                                <span className="text-white">Cash on Delivery</span>
                                            </Label>
                                        </div>
                                    </div>
                                </RadioGroup>
                            </CardContent>
                        </Card>

                        {/* Payment Details */}
                        <Card className="bg-gray-900 border-gray-800">
                            <CardHeader>
                                <CardTitle className="text-white">Payment Details</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {paymentMethod === 'card' && (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Card Number *</label>
                                            <Input
                                                value={cardDetails.number}
                                                onChange={(e) => setCardDetails(prev => ({ ...prev, number: formatCardNumber(e.target.value) }))}
                                                className="bg-gray-800 border-gray-700 text-white"
                                                placeholder="1234 5678 9012 3456"
                                                maxLength={19}
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-1">Expiry Date *</label>
                                                <Input
                                                    value={cardDetails.expiry}
                                                    onChange={(e) => setCardDetails(prev => ({ ...prev, expiry: formatExpiry(e.target.value) }))}
                                                    className="bg-gray-800 border-gray-700 text-white"
                                                    placeholder="MM/YY"
                                                    maxLength={5}
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-300 mb-1">CVV *</label>
                                                <Input
                                                    value={cardDetails.cvv}
                                                    onChange={(e) => setCardDetails(prev => ({ ...prev, cvv: e.target.value.replace(/\D/g, '') }))}
                                                    className="bg-gray-800 border-gray-700 text-white"
                                                    placeholder="123"
                                                    maxLength={4}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-1">Cardholder Name *</label>
                                            <Input
                                                value={cardDetails.name}
                                                onChange={(e) => setCardDetails(prev => ({ ...prev, name: e.target.value }))}
                                                className="bg-gray-800 border-gray-700 text-white"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>
                                )}

                                {paymentMethod === 'upi' && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">UPI ID *</label>
                                        <Input
                                            value={upiId}
                                            onChange={(e) => setUpiId(e.target.value)}
                                            className="bg-gray-800 border-gray-700 text-white"
                                            placeholder="username@upi"
                                        />
                                        <p className="text-sm text-gray-400 mt-1">Enter your UPI ID (e.g., john@okicici)</p>
                                    </div>
                                )}

                                {paymentMethod === 'netbanking' && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">Select Bank *</label>
                                        <select
                                            value={selectedBank}
                                            onChange={(e) => setSelectedBank(e.target.value)}
                                            className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-yellow-600"
                                            aria-label="Select your bank"
                                        >
                                            <option value="">Choose your bank</option>
                                            {banks.map(bank => (
                                                <option key={bank} value={bank}>{bank}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                {paymentMethod === 'wallet' && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-300 mb-1">Select Wallet *</label>
                                        <select
                                            value={walletType}
                                            onChange={(e) => setWalletType(e.target.value)}
                                            className="w-full bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-lime-yellow-600"
                                            aria-label="Select your wallet"
                                        >
                                            <option value="">Choose your wallet</option>
                                            {wallets.map(wallet => (
                                                <option key={wallet} value={wallet}>{wallet}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                {paymentMethod === 'cod' && (
                                    <div className="bg-blue-900/20 border border-blue-600 rounded-lg p-4">
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Truck className="w-5 h-5 text-blue-400" />
                                            <h3 className="text-blue-400 font-medium">Cash on Delivery</h3>
                                        </div>
                                        <p className="text-gray-300 text-sm">
                                            Pay with cash when your order is delivered. A small convenience fee of ₹50 will be added to your order.
                                        </p>
                                        <div className="mt-3 text-sm text-gray-400">
                                            <p>• Available for orders above ₹500</p>
                                            <p>• Payment collected at doorstep</p>
                                            <p>• No online payment required</p>
                                        </div>
                                    </div>
                                )}
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
                                        <span>₹1,180.00</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300">
                                        <span>Shipping</span>
                                        <span>₹100.00</span>
                                    </div>
                                    <div className="flex justify-between text-gray-300">
                                        <span>Tax (18% GST)</span>
                                        <span>₹212.40</span>
                                    </div>
                                    <div className="flex justify-between text-green-400">
                                        <span>Discount</span>
                                        <span>-₹118.00</span>
                                    </div>
                                    <div className="border-t border-gray-700 pt-2">
                                        <div className="flex justify-between text-white font-bold text-lg">
                                            <span>Total</span>
                                            <span>₹1,374.40</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-800 p-4 rounded-lg">
                                    <h4 className="text-white font-medium mb-2">Items in your order:</h4>
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm text-gray-300">
                                            <span>Classic Black Tee (M) × 2</span>
                                            <span>₹700.00</span>
                                        </div>
                                        <div className="flex justify-between text-sm text-gray-300">
                                            <span>Champagne Short Sleeve (L) × 1</span>
                                            <span>₹480.00</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                    <Link href="/checkout/delivery">
                        <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Delivery
                        </Button>
                    </Link>
                    <Link href="/checkout/review">
                        <Button
                            className="bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black"
                            disabled={!isFormValid()}
                        >
                            Continue to Review
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
} 