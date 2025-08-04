"use client"

import React, { useState } from 'react';
import { ChevronLeft, Star, Gift, Crown, Zap, TrendingUp, Award, Users, ShoppingBag, Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

const tiers = [
    { name: 'Bronze', points: 0, color: 'from-amber-600 to-orange-600', icon: Star },
    { name: 'Silver', points: 1000, color: 'from-gray-400 to-gray-600', icon: Award },
    { name: 'Gold', points: 5000, color: 'from-yellow-400 to-yellow-600', icon: Crown },
    { name: 'Platinum', points: 10000, color: 'from-purple-400 to-purple-600', icon: Zap }
];

const rewards = [
    { name: 'Birthday Gift', points: 500, icon: Gift, description: 'Special gift on your birthday' },
    { name: 'Free Shipping', points: 1000, icon: ShoppingBag, description: 'Free shipping on all orders' },
    { name: 'Exclusive Access', points: 2000, icon: Crown, description: 'Early access to new collections' },
    { name: 'VIP Support', points: 5000, icon: Users, description: 'Priority customer support' },
    { name: 'Double Points', points: 10000, icon: TrendingUp, description: 'Earn 2x points on purchases' },
    { name: 'Personal Stylist', points: 15000, icon: Heart, description: 'Free personal styling session' }
];

export default function LoyaltyProgramPage() {
    const router = useRouter();
    const [currentPoints] = useState(2750); // Simulated user points
    const currentTier = tiers.find(tier => currentPoints >= tier.points) || tiers[0];
    const nextTier = tiers.find(tier => tier.points > currentPoints);
    const pointsToNext = nextTier ? nextTier.points - currentPoints : 0;

    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className="h-full w-full absolute inset-0 z-0"></div>
            <div className="relative z-10">
                <Navbar />
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-4xl mx-auto">
                        <button
                            onClick={() => router.back()}
                            className="inline-flex items-center bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black rounded-full px-4 py-2 transition-colors mb-6"
                        >
                            <ChevronLeft className="w-5 h-5 mr-2" /> Back
                        </button>

                        {/* Header */}
                        <div className="text-center mb-12">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Star className="w-10 h-10 text-lime-yellow-600" />
                                <h1 className="text-4xl font-bold text-white">Loyalty Program</h1>
                            </div>
                            <p className="text-xl text-gray-400 mb-8">
                                Earn points, unlock rewards, and enjoy exclusive benefits
                            </p>
                        </div>

                        {/* Current Status */}
                        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 mb-8">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2">Your Status</h2>
                                    <p className="text-gray-400">Current tier and progress</p>
                                </div>
                                <div className={`p-4 rounded-lg bg-gradient-to-r ${currentTier.color}`}>
                                    <currentTier.icon className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            <div className="mb-6">
                                <div className="flex justify-between text-sm text-gray-400 mb-2">
                                    <span>{currentTier.name} Member</span>
                                    <span>{currentPoints} points</span>
                                </div>
                                <div className="w-full bg-gray-800 rounded-full h-3">
                                    <div
                                        className="bg-gradient-to-r from-lime-yellow-500 to-lime-yellow-600 h-3 rounded-full transition-all duration-500"
                                        style={{ width: `${Math.min((currentPoints / (nextTier?.points || 1)) * 100, 100)}%` }}
                                    ></div>
                                </div>
                                {nextTier && (
                                    <p className="text-sm text-gray-400 mt-2">
                                        {pointsToNext} more points to reach {nextTier.name}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="text-center p-4 bg-gray-800 rounded-lg">
                                    <div className="text-2xl font-bold text-lime-yellow-500">{currentPoints}</div>
                                    <div className="text-sm text-gray-400">Total Points</div>
                                </div>
                                <div className="text-center p-4 bg-gray-800 rounded-lg">
                                    <div className="text-2xl font-bold text-lime-yellow-500">{currentTier.name}</div>
                                    <div className="text-sm text-gray-400">Current Tier</div>
                                </div>
                                <div className="text-center p-4 bg-gray-800 rounded-lg">
                                    <div className="text-2xl font-bold text-lime-yellow-500">₹{currentPoints * 0.1}</div>
                                    <div className="text-sm text-gray-400">Value</div>
                                </div>
                            </div>
                        </div>

                        {/* How It Works */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">How It Works</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center p-6 bg-gray-900 border border-gray-800 rounded-lg">
                                    <div className="w-12 h-12 bg-lime-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <ShoppingBag className="w-6 h-6 text-black" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Shop & Earn</h3>
                                    <p className="text-gray-400">Earn 1 point for every ₹10 spent on purchases</p>
                                </div>
                                <div className="text-center p-6 bg-gray-900 border border-gray-800 rounded-lg">
                                    <div className="w-12 h-12 bg-lime-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <TrendingUp className="w-6 h-6 text-black" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Level Up</h3>
                                    <p className="text-gray-400">Reach higher tiers for exclusive benefits and rewards</p>
                                </div>
                                <div className="text-center p-6 bg-gray-900 border border-gray-800 rounded-lg">
                                    <div className="w-12 h-12 bg-lime-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Gift className="w-6 h-6 text-black" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white mb-2">Redeem Rewards</h3>
                                    <p className="text-gray-400">Use your points for discounts, gifts, and exclusive offers</p>
                                </div>
                            </div>
                        </div>

                        {/* Available Rewards */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-white mb-6">Available Rewards</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {rewards.map((reward) => {
                                    const IconComponent = reward.icon;
                                    const canAfford = currentPoints >= reward.points;
                                    return (
                                        <div key={reward.name} className={`p-6 rounded-lg border transition-all duration-300 ${canAfford
                                                ? 'bg-gray-900 border-lime-yellow-500 hover:border-lime-yellow-400'
                                                : 'bg-gray-900 border-gray-800 opacity-60'
                                            }`}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={`p-3 rounded-lg ${canAfford ? 'bg-lime-yellow-600' : 'bg-gray-700'}`}>
                                                    <IconComponent className={`w-6 h-6 ${canAfford ? 'text-black' : 'text-gray-400'}`} />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white">{reward.name}</h3>
                                                    <p className="text-sm text-gray-400">{reward.points} points</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-300 text-sm mb-4">{reward.description}</p>
                                            <button
                                                className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${canAfford
                                                        ? 'bg-lime-yellow-600 text-black hover:bg-lime-yellow-700'
                                                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                                    }`}
                                                disabled={!canAfford}
                                            >
                                                {canAfford ? 'Redeem' : 'Not Enough Points'}
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Tier Benefits */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6">Tier Benefits</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {tiers.map((tier) => {
                                    const IconComponent = tier.icon;
                                    const isCurrentTier = tier.name === currentTier.name;
                                    return (
                                        <div key={tier.name} className={`p-4 rounded-lg border text-center ${isCurrentTier
                                                ? 'bg-gradient-to-r from-lime-yellow-600 to-lime-yellow-700 border-lime-yellow-500'
                                                : 'bg-gray-900 border-gray-800'
                                            }`}>
                                            <div className={`p-3 rounded-lg mx-auto mb-3 w-fit ${isCurrentTier ? 'bg-white' : 'bg-gray-800'
                                                }`}>
                                                <IconComponent className={`w-6 h-6 ${isCurrentTier ? 'text-black' : 'text-gray-400'}`} />
                                            </div>
                                            <h3 className={`font-semibold mb-1 ${isCurrentTier ? 'text-black' : 'text-white'}`}>
                                                {tier.name}
                                            </h3>
                                            <p className={`text-sm ${isCurrentTier ? 'text-black' : 'text-gray-400'}`}>
                                                {tier.points} points
                                            </p>
                                            {isCurrentTier && (
                                                <span className="inline-block mt-2 px-2 py-1 bg-black text-white text-xs rounded-full">
                                                    Current
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
} 