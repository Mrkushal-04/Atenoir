"use client"

import React from 'react';
import Link from 'next/link';
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChevronLeft, Box, RotateCcw, User, Camera, Tv, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const features = [
    { name: '3D Virtual Showroom', href: '/showroom/virtual', description: 'Explore our showroom in 3D.', icon: Box },
    { name: '3D Collection Rotator', href: '/showroom/rotator', description: 'Spin and view collections in 3D.', icon: RotateCcw, badge: 'New' },
    { name: 'Interactive Mannequin', href: '/showroom/mannequin', description: 'Style and interact with mannequins.', icon: User },
    { name: 'Try On in Virtual Mirror', href: '/showroom/virtual-mirror', description: 'See yourself in our latest looks.', icon: Camera },
    { name: 'Live Fashion Show Broadcast', href: '/showroom/live-show', description: 'Watch live fashion events.', icon: Tv, badge: 'New' },
    { name: 'Stylist Booking', href: '/showroom/stylist', description: 'Book a session with a stylist.', icon: Calendar, badge: 'New' },
];

export default function ShowroomPage() {
    const router = useRouter();
    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className="h-full w-full absolute inset-0 z-0"></div>
            <div className="relative z-10">
                <Navbar />
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-6xl mx-auto">
                        <button
                            onClick={() => router.back()}
                            className="inline-flex items-center bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black rounded-full px-4 py-2 transition-colors mb-8"
                        >
                            <ChevronLeft className="w-5 h-5 mr-2" /> Back
                        </button>
                        <div className="text-center mb-12">
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">3D Showroom & Interactive Features</h1>
                            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                                Experience fashion in a whole new dimension.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature) => {
                                const Icon = feature.icon;
                                return (
                                    <Link key={feature.name} href={feature.href} className="group">
                                        <div className="bg-gray-900 border border-gray-800 hover:border-lime-yellow-500 transition-all duration-300 cursor-pointer group h-full rounded-lg p-6 flex flex-col justify-between">
                                            <div className="flex items-center space-x-3 mb-4">
                                                <div className="p-3 rounded-lg bg-lime-yellow-600">
                                                    <Icon className="w-6 h-6 text-black" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-white text-lg font-semibold group-hover:text-lime-yellow-400 transition-colors">
                                                        {feature.name}
                                                    </h3>
                                                    {feature.badge && <span className="ml-2 bg-lime-yellow-600 text-black text-xs px-2 py-1 rounded-full font-medium">{feature.badge}</span>}
                                                </div>
                                            </div>
                                            <p className="text-gray-400 mb-4 flex-1">{feature.description}</p>
                                            <button className="border border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500 hover:text-black transition-all px-4 py-2 rounded font-medium w-full">Explore</button>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                        {/* Need Immediate Help? */}
                        <div className="bg-gradient-to-r from-lime-yellow-600 to-lime-yellow-700 rounded-xl p-8 text-center mt-16">
                            <h2 className="text-3xl font-bold text-black mb-4">Need Immediate Help?</h2>
                            <p className="text-black/80 mb-6 text-lg">
                                Our support team is available 24/7 to assist you with any questions or concerns.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/support/chat">
                                    <Button className="bg-black text-lime-yellow-500 hover:bg-gray-800">Start Live Chat</Button>
                                </Link>
                                <Link href="/support/call-scheduler">
                                    <Button variant="outline" className="border-black text-black hover:bg-black hover:text-lime-yellow-500">Schedule a Call</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
} 