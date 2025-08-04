"use client"

import React, { useState } from 'react';
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useToast } from "@/hooks/use-toast";

export default function RedeemGiftCardPage() {
    const router = useRouter();
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toast({ title: "Gift Card Redeemed!", description: "Your gift card has been applied to your account." });
        }, 1200);
    }

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
                        <h1 className="text-3xl font-bold text-white mb-6">Redeem Gift Card</h1>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 text-white" placeholder="Gift Card Code" required />
                            <button type="submit" disabled={loading} className="bg-lime-yellow-600 text-black px-6 py-3 rounded-lg hover:bg-lime-yellow-700 transition-colors font-medium w-full">
                                {loading ? 'Redeeming...' : 'Redeem'}
                            </button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
} 