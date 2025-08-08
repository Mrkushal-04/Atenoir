"use client";
import React from "react";
import { UserData } from "@/lib/hooks/useUserData";

interface OrderHistoryPageProps {
    userData?: UserData;
}

export default function OrderHistoryPage({ userData }: OrderHistoryPageProps) {
    // Handle case where userData is undefined (during static export)
    if (!userData) {
        return (
            <div className="bg-white/5 rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Order History</h2>
                <div className="text-gray-400">Please log in to view your order history</div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
            <div className="bg-white/5 rounded-2xl shadow-lg p-10 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-lime-yellow-500 mb-6">Order History</h2>
                <ul className="space-y-6">
                    {userData.orders.map(order => (
                        <li key={order.id} className="bg-black/60 rounded-lg p-4 flex justify-between items-center">
                            <div>
                                <div className="text-white font-semibold">Order #{order.orderNumber}</div>
                                <div className="text-gray-400 text-sm">Date: {new Date(order.date).toLocaleDateString()}</div>
                                <div className="text-gray-400 text-sm">Status: {order.status}</div>
                                <div className="text-lime-yellow-500 font-bold text-sm">Total: ₹{order.total.toFixed(2)}</div>
                            </div>
                            <button className="text-lime-yellow-500 hover:underline">View Details</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
} 