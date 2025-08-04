"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Lock, Shield } from "lucide-react"
import type { PaymentMethod } from "@/lib/types"

interface PaymentGatewayProps {
    amount: number
    currency?: string
    onSuccess: (paymentId: string) => void
    onFailure: (error: string) => void
    onCancel: () => void
}

export function PaymentGateway({
    amount,
    currency = "INR",
    onSuccess,
    onFailure,
    onCancel
}: PaymentGatewayProps) {
    const [isProcessing, setIsProcessing] = useState(false)
    const [cardDetails, setCardDetails] = useState({
        number: '',
        expiry: '',
        cvv: '',
        name: ''
    })

    const processPayment = async () => {
        setIsProcessing(true)

        try {
            // Mock payment processing
            await new Promise(resolve => setTimeout(resolve, 2000))

            // Simulate successful payment
            const paymentId = `pay_${Date.now()}`
            onSuccess(paymentId)
        } catch (error) {
            onFailure('Payment failed. Please try again.')
        } finally {
            setIsProcessing(false)
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

    const isFormValid = () => {
        return cardDetails.number && cardDetails.expiry && cardDetails.cvv && cardDetails.name
    }

    return (
        <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
                <CardTitle className="text-white flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Secure Payment
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Payment Amount */}
                <div className="bg-gray-800 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-gray-300">Total Amount:</span>
                        <span className="text-white font-bold text-lg">₹{amount.toFixed(2)}</span>
                    </div>
                </div>

                {/* Card Details */}
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="card-number" className="text-gray-300">Card Number</Label>
                        <Input
                            id="card-number"
                            value={cardDetails.number}
                            onChange={(e) => setCardDetails(prev => ({ ...prev, number: formatCardNumber(e.target.value) }))}
                            className="bg-gray-800 border-gray-700 text-white"
                            placeholder="1234 5678 9012 3456"
                            maxLength={19}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label htmlFor="expiry" className="text-gray-300">Expiry Date</Label>
                            <Input
                                id="expiry"
                                value={cardDetails.expiry}
                                onChange={(e) => setCardDetails(prev => ({ ...prev, expiry: formatExpiry(e.target.value) }))}
                                className="bg-gray-800 border-gray-700 text-white"
                                placeholder="MM/YY"
                                maxLength={5}
                            />
                        </div>
                        <div>
                            <Label htmlFor="cvv" className="text-gray-300">CVV</Label>
                            <Input
                                id="cvv"
                                value={cardDetails.cvv}
                                onChange={(e) => setCardDetails(prev => ({ ...prev, cvv: e.target.value.replace(/\D/g, '') }))}
                                className="bg-gray-800 border-gray-700 text-white"
                                placeholder="123"
                                maxLength={4}
                            />
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="card-name" className="text-gray-300">Cardholder Name</Label>
                        <Input
                            id="card-name"
                            value={cardDetails.name}
                            onChange={(e) => setCardDetails(prev => ({ ...prev, name: e.target.value }))}
                            className="bg-gray-800 border-gray-700 text-white"
                            placeholder="John Doe"
                        />
                    </div>
                </div>

                {/* Security Info */}
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Lock className="w-4 h-4" />
                    <span>Your payment information is encrypted and secure</span>
                </div>

                {/* Payment Buttons */}
                <div className="space-y-3">
                    <Button
                        onClick={processPayment}
                        disabled={!isFormValid() || isProcessing}
                        className="w-full bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black"
                    >
                        {isProcessing ? (
                            <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black mr-2"></div>
                                Processing Payment...
                            </>
                        ) : (
                            <>
                                <Shield className="w-4 h-4 mr-2" />
                                Pay ₹{amount.toFixed(2)}
                            </>
                        )}
                    </Button>

                    <Button
                        onClick={onCancel}
                        variant="outline"
                        className="w-full border-gray-600 text-white hover:bg-gray-800"
                    >
                        Cancel Payment
                    </Button>
                </div>

                {/* Payment Methods */}
                <div className="text-center">
                    <p className="text-sm text-gray-400 mb-2">We accept:</p>
                    <div className="flex justify-center space-x-4">
                        <div className="text-xs text-gray-500">Visa</div>
                        <div className="text-xs text-gray-500">Mastercard</div>
                        <div className="text-xs text-gray-500">American Express</div>
                        <div className="text-xs text-gray-500">Rupay</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

// Razorpay Integration (for future use)
export function RazorpayPayment({ amount, onSuccess, onFailure }: {
    amount: number
    onSuccess: (paymentId: string) => void
    onFailure: (error: string) => void
}) {
    const initializeRazorpay = () => {
        // This would integrate with Razorpay SDK
        console.log('Initializing Razorpay payment...')
    }

    return (
        <Button onClick={initializeRazorpay} className="w-full bg-blue-600 hover:bg-blue-700">
            Pay with Razorpay
        </Button>
    )
}

// Stripe Integration (for future use)
export function StripePayment({ amount, onSuccess, onFailure }: {
    amount: number
    onSuccess: (paymentId: string) => void
    onFailure: (error: string) => void
}) {
    const initializeStripe = () => {
        // This would integrate with Stripe SDK
        console.log('Initializing Stripe payment...')
    }

    return (
        <Button onClick={initializeStripe} className="w-full bg-purple-600 hover:bg-purple-700">
            Pay with Stripe
        </Button>
    )
} 