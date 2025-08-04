"use client"

import React, { useState } from 'react';
import { ChevronLeft, Gift, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

const presetAmounts = [500, 1000, 2000, 5000];

export default function GiftCardsPage() {
    const router = useRouter();
    const [selected, setSelected] = useState<number | null>(null);

    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className="h-full w-full absolute inset-0 z-0"></div>
            <div className="relative z-10">
                <Navbar />
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-xl mx-auto">
                        <button
                            onClick={() => router.back()}
                            className="inline-flex items-center bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black rounded-full px-4 py-2 transition-colors mb-6"
                        >
                            <ChevronLeft className="w-5 h-5 mr-2" /> Back
                        </button>
                        <div className="flex items-center gap-3 mb-4">
                            <Gift className="w-8 h-8 text-lime-yellow-600" />
                            <h1 className="text-3xl font-bold text-white">Gift Cards</h1>
                        </div>
                        <p className="text-gray-300 mb-6">Give the gift of choice! Purchase and send digital gift cards to friends and family.</p>
                        <div className="mb-8">
                            <div className="mb-2 text-white font-semibold">Choose an amount:</div>
                            <div className="flex gap-3 mb-4">
                                {presetAmounts.map(amount => (
                                    <button
                                        key={amount}
                                        onClick={() => setSelected(amount)}
                                        className={`px-5 py-2 rounded-lg font-bold border transition-colors ${selected === amount ? 'bg-lime-yellow-600 text-black border-lime-yellow-600' : 'bg-gray-900 text-white border-gray-700 hover:bg-gray-800'}`}
                                    >
                                        ₹{amount}
                                    </button>
                                ))}
                            </div>
                            <button
                                className="w-full bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black px-6 py-3 rounded-lg font-semibold transition-colors mb-4 disabled:opacity-60"
                                disabled={selected === null}
                            >
                                {selected ? `Buy ₹${selected} Gift Card` : 'Select Amount'}
                            </button>
                        </div>
                        <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex items-start gap-3">
                            <Info className="w-6 h-6 text-lime-yellow-600 mt-1" />
                            <div>
                                <div className="font-semibold text-white mb-1">How do gift cards work?</div>
                                <ul className="text-gray-400 text-sm list-disc ml-5 space-y-1">
                                    <li>Gift cards are delivered instantly by email.</li>
                                    <li>Redeemable online at checkout.</li>
                                    <li>No expiration date or fees.</li>
                                    <li>Can be used with other promotions.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
} 