"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ChevronLeft, Gift, PlusCircle, CheckCircle, UserPlus, QrCode, Clock, Wrench, AlertTriangle, Bug, Mail, Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const features = [
    { name: 'Gift Cards', href: '/features/gift-cards', description: 'Send digital gift cards to friends and family.', icon: Gift, badge: 'Popular' },
    { name: 'Create Gift Card', href: '/features/create-gift-card', description: 'Create a new gift card for someone special.', icon: PlusCircle },
    { name: 'Redeem Gift Card', href: '/features/redeem-gift-card', description: 'Redeem your gift card code for store credit.', icon: CheckCircle },
    { name: 'Refer a Friend', href: '/features/refer-a-friend', description: 'Invite friends and earn rewards.', icon: UserPlus },
    { name: 'QR Code Scanner', href: '/features/qr-code-scanner', description: 'Scan QR codes for offers and info.', icon: QrCode },
    { name: 'Coming Soon', href: '/features/coming-soon', description: 'Preview upcoming features and launches.', icon: Clock },
    { name: 'Maintenance Mode', href: '/features/maintenance', description: 'See our maintenance/upgrade status.', icon: Wrench },
    { name: 'Error 404 Page', href: '/features/404', description: 'Custom not found error page.', icon: AlertTriangle },
    { name: 'Error 500 Page', href: '/features/500', description: 'Custom server error page.', icon: Bug },
    { name: 'Newsletter Subscription', href: '/features/newsletter', description: 'Subscribe for updates and offers.', icon: Mail },
    { name: 'Loyalty Program Overview', href: '/features/loyalty', description: 'Learn about our loyalty rewards.', icon: Star, badge: 'New' },
];

export default function FeaturesPage() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const filtered = features.filter(f =>
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        (f.description && f.description.toLowerCase().includes(search.toLowerCase()))
    );
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
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Special Features</h1>
                            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                                Explore exclusive features to enhance your experience.
                            </p>
                        </div>
                        <div className="mb-8">
                            <div className="relative max-w-md mx-auto">
                                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                                <input
                                    type="text"
                                    placeholder="Search features..."
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-lime-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filtered.map((feature) => {
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
                        {filtered.length === 0 && (
                            <div className="text-center py-12">
                                <Bug className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">No features found</h3>
                                <p className="text-gray-400">
                                    Try adjusting your search terms
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                {/* Need Immediate Help Section */}
                <div className="container mx-auto px-6 pb-16">
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-gradient-to-r from-lime-yellow-600 to-lime-yellow-700 rounded-xl p-8 text-center">
                            <h2 className="text-3xl font-bold text-black mb-4">Need Immediate Help?</h2>
                            <p className="text-black/80 mb-6 text-lg">
                                Our support team is available 24/7 to assist you with any questions or concerns.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/support/chat">
                                    <Button className="bg-black text-lime-yellow-500 hover:bg-gray-800">
                                        Live Chat
                                    </Button>
                                </Link>
                                <Link href="/support/call-scheduler">
                                    <Button variant="outline" className="border-black text-black hover:bg-black hover:text-lime-yellow-500">
                                        Call Support
                                    </Button>
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