"use client";
import React from "react";

export default function LoyaltyPage() {
    const points = 320;
    const rewards = [
        { id: 1, name: "10% Off Coupon", required: 200, claimed: true },
        { id: 2, name: "Free Shipping", required: 500, claimed: false },
        { id: 3, name: "Exclusive Tee", required: 1000, claimed: false },
    ];
    return (
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
            <div className="bg-white/5 rounded-2xl shadow-lg p-10 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-lime-yellow-500 mb-6">Loyalty Points / Rewards</h2>
                <div className="mb-4 text-white font-semibold">Current Points: <span className="text-lime-yellow-500">{points}</span></div>
                <div className="w-full bg-black/60 rounded h-4 mb-6 overflow-hidden">
                    <div className="bg-lime-yellow-500 h-4 rounded" style={{ width: `${Math.min(points / 10, 100)}%` }}></div>
                </div>
                <div className="mb-2 text-lime-yellow-500 font-bold">Available Rewards:</div>
                <ul className="space-y-4">
                    {rewards.map(reward => (
                        <li key={reward.id} className="flex justify-between items-center bg-black/60 rounded p-3">
                            <span className="text-white font-semibold">{reward.name}</span>
                            <span className={points >= reward.required ? "text-lime-yellow-500" : "text-gray-400"}>{reward.claimed ? "Claimed" : points >= reward.required ? "Available" : `Need ${reward.required}`}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
} 