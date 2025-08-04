"use client";
import React from "react";

export default function ReferralsPage() {
    const referralCode = "ATEN1234";
    const friends = [
        { id: 1, name: "Alice", status: "Joined" },
        { id: 2, name: "Bob", status: "Pending" },
    ];
    return (
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
            <div className="bg-white/5 rounded-2xl shadow-lg p-10 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-lime-yellow-500 mb-6">Referrals</h2>
                <div className="mb-6 flex items-center gap-4">
                    <span className="bg-black/60 px-4 py-2 rounded text-white font-mono">{referralCode}</span>
                    <button className="bg-lime-yellow-500 text-black px-3 py-1 rounded font-bold">Copy</button>
                </div>
                <ul className="space-y-4">
                    {friends.map(friend => (
                        <li key={friend.id} className="flex justify-between items-center bg-black/60 rounded p-3">
                            <span className="text-white font-semibold">{friend.name}</span>
                            <span className={friend.status === "Joined" ? "text-lime-yellow-500" : "text-gray-400"}>{friend.status}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
} 