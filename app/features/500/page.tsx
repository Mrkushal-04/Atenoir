"use client"

import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Error500Page() {
    const { toast } = useToast();
    const router = useRouter();
    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex flex-col">
            <div className="h-full w-full absolute inset-0 z-0"></div>
            <div className="relative z-10 flex-1 flex flex-col">
                <Navbar />
                <div className="container mx-auto px-6 py-16 flex-1 flex flex-col items-center justify-center">
                    <div className="max-w-xl w-full text-center">
                        <button
                            onClick={() => router.back()}
                            className="inline-flex items-center bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black rounded-full px-4 py-2 transition-colors mb-6"
                        >
                            <ChevronLeft className="w-5 h-5 mr-2" /> Back
                        </button>
                        <h1 className="text-6xl font-bold mb-4 text-white">500</h1>
                        <p className="text-xl mb-6 text-gray-300">Internal server error. Please try again later.</p>
                        <Link href="/" className="bg-lime-yellow-600 text-black px-4 py-2 rounded hover:bg-lime-yellow-700 mr-2">Go Home</Link>
                        <button
                            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 ml-2"
                            onClick={() => toast({ title: "Error reported!", description: "Thank you for letting us know." })}
                        >
                            Report this error
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
} 