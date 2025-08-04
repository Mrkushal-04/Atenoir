"use client"

import React from 'react';
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function TrackTicketStatusPage() {
    const router = useRouter();

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
                        <h1 className="text-3xl font-bold text-white mb-6">Track Ticket Status</h1>
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-1 font-medium text-white">Ticket Number</label>
                                <input type="text" className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-lime-yellow-500 focus:border-transparent text-white placeholder-gray-400" required placeholder="Enter your ticket number" title="Ticket Number" />
                            </div>
                            <button type="submit" className="bg-lime-yellow-600 text-black px-6 py-3 rounded-lg hover:bg-lime-yellow-700 transition-colors font-medium">Check Status</button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
} 