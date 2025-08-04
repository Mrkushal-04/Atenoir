"use client"

import React from 'react';
import { ChevronLeft, User } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function MannequinPage() {
    const router = useRouter();
    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className="h-full w-full absolute inset-0 z-0"></div>
            <div className="relative z-10">
                <Navbar />
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-3xl mx-auto">
                        <button
                            onClick={() => router.back()}
                            className="inline-flex items-center bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black rounded-full px-4 py-2 transition-colors mb-8"
                        >
                            <ChevronLeft className="w-5 h-5 mr-2" /> Back
                        </button>
                        <div className="flex items-center gap-3 mb-4">
                            <User className="w-8 h-8 text-lime-yellow-600" />
                            <h1 className="text-3xl font-bold text-white">Interactive Mannequin</h1>
                        </div>
                        <p className="text-gray-300 mb-6">Style and interact with our virtual mannequins. (Feature coming soon!)</p>
                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 flex flex-col items-center justify-center">
                            <span className="text-gray-500">[Mannequin Placeholder]</span>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
} 