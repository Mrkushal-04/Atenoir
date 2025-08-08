"use client"

import React, { Suspense, useState, useEffect } from 'react';
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

// Dynamic import for Three.js components to avoid SSR issues
const ThreeJSShowroom = React.lazy(() => import('./ThreeJSShowroom'));

export default function VirtualShowroomPage() {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

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
                        <h1 className="text-4xl font-bold text-white mb-6 text-center">3D Virtual Showroom</h1>
                        <p className="text-xl text-gray-400 mb-8 text-center">Interact with our 3D cube as a preview of immersive showroom experiences.</p>
                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center">
                            <div className="w-full h-[400px] rounded-lg overflow-hidden">
                                {isClient ? (
                                    <Suspense fallback={
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="text-white">Loading 3D Showroom...</div>
                                        </div>
                                    }>
                                        <ThreeJSShowroom />
                                    </Suspense>
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-white">Loading 3D Showroom...</div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
} 