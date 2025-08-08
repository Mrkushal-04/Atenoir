"use client";
import React, { useState } from "react";
import { UserData } from "@/lib/hooks/useUserData";
import { useUserData } from "@/lib/hooks/useUserData";

interface WishlistPageProps {
    userData?: UserData;
}

export default function WishlistPage({ userData }: WishlistPageProps) {
    const { removeFromWishlist } = useUserData();
    const [removingId, setRemovingId] = useState<string | null>(null);

    // Handle case where userData is undefined (during static export)
    if (!userData) {
        return (
            <div className="bg-white/5 rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Wishlist</h2>
                <div className="text-gray-400">Please log in to view your wishlist</div>
            </div>
        );
    }

    const handleRemoveFromWishlist = (id: string) => {
        setRemovingId(id);
        removeFromWishlist(id);
        setTimeout(() => setRemovingId(null), 1000);
    };
    return (
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
            <div className="bg-white/5 rounded-2xl shadow-lg p-10 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-lime-yellow-500 mb-6">Wishlist</h2>
                <ul className="space-y-6">
                    {userData.wishlist.map(item => (
                        <li key={item.id} className="bg-black/60 rounded-lg p-4 flex items-center gap-4">
                            <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover border border-lime-yellow-500" />
                            <div className="flex-1">
                                <div className="text-white font-semibold">{item.name}</div>
                                <div className="text-lime-yellow-500 font-bold">₹{item.price.toFixed(2)}</div>
                                <div className="text-gray-400 text-xs">Added: {new Date(item.addedDate).toLocaleDateString()}</div>
                            </div>
                            <button
                                onClick={() => handleRemoveFromWishlist(item.id)}
                                disabled={removingId === item.id}
                                className="text-red-400 hover:underline disabled:opacity-50"
                            >
                                {removingId === item.id ? "Removing..." : "Remove"}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
} 