"use client";
import React from "react";

export default function SubscriptionPage() {
    const subscription = {
        status: "Active",
        plan: "Premium",
        renewal: "2024-12-01",
    };
    return (
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
            <div className="bg-white/5 rounded-2xl shadow-lg p-10 w-full max-w-xl flex flex-col items-center gap-6">
                <h2 className="text-2xl font-bold text-lime-yellow-500 mb-4">Subscription Management</h2>
                <div className="text-white font-semibold">Status: <span className="text-lime-yellow-500">{subscription.status}</span></div>
                <div className="text-white font-semibold">Plan: <span className="text-lime-yellow-500">{subscription.plan}</span></div>
                <div className="text-gray-400">Renewal Date: {subscription.renewal}</div>
                <button className="w-full bg-lime-yellow-500 text-black font-bold py-2 rounded mt-4">Manage / Cancel Subscription</button>
            </div>
        </div>
    );
} 