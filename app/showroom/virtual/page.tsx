/// <reference types="@react-three/fiber" />
"use client"

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

function Box() {
    return (
        <mesh rotation={[0.4, 0.4, 0]} castShadow receiveShadow>
            <boxGeometry args={[2, 2, 2]} />
            <meshStandardMaterial color="#eab308" metalness={0.5} roughness={0.2} />
        </mesh>
    );
}

export default function VirtualShowroomPage() {
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
                        <h1 className="text-4xl font-bold text-white mb-6 text-center">3D Virtual Showroom</h1>
                        <p className="text-xl text-gray-400 mb-8 text-center">Interact with our 3D cube as a preview of immersive showroom experiences.</p>
                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col items-center justify-center">
                            <div className="w-full h-[400px] rounded-lg overflow-hidden">
                                <Canvas camera={{ position: [5, 5, 5], fov: 50 }} shadows>
                                    <ambientLight intensity={0.7} />
                                    <directionalLight position={[5, 10, 7]} intensity={1.2} castShadow />
                                    <Suspense fallback={null}>
                                        <Box />
                                        <Environment preset="city" />
                                    </Suspense>
                                    <OrbitControls enablePan enableZoom enableRotate />
                                </Canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
} 