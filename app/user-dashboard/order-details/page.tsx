"use client";
import React from "react";

export default function OrderDetailsPage() {
    const order = {
        number: "ORD-2024-001",
        date: "2024-06-01",
        status: "Delivered",
        address: "123 Main St, City, Country",
        items: [
            { name: "Classic Black Tee", qty: 2, price: 350 },
            { name: "Champagne Short Sleeve", qty: 1, price: 480 },
        ],
    };
    return (
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
            <div className="bg-white/5 rounded-2xl shadow-lg p-10 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-lime-yellow-500 mb-6">Order Details</h2>
                <div className="mb-4 text-white font-semibold">Order #{order.number}</div>
                <div className="mb-2 text-gray-400 text-sm">Date: {order.date}</div>
                <div className="mb-2 text-gray-400 text-sm">Status: {order.status}</div>
                <div className="mb-4 text-gray-400 text-sm">Shipping Address: {order.address}</div>
                <div className="mb-2 text-lime-yellow-500 font-bold">Items:</div>
                <ul className="space-y-2">
                    {order.items.map((item, idx) => (
                        <li key={idx} className="flex justify-between text-white bg-black/60 rounded p-2">
                            <span>{item.name} (x{item.qty})</span>
                            <span>₹{(item.price * item.qty).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
} 