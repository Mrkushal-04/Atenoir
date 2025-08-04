"use client";
import React, { useState } from "react";
import { UserData } from "@/lib/hooks/useUserData";
import { useUserData } from "@/lib/hooks/useUserData";

interface AddressBookPageProps {
    userData: UserData;
}

export default function AddressBookPage({ userData }: AddressBookPageProps) {
    const { deleteAddress } = useUserData();
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleDeleteAddress = (id: string) => {
        if (confirm("Are you sure you want to delete this address?")) {
            setDeletingId(id);
            deleteAddress(id);
            setTimeout(() => setDeletingId(null), 1000);
        }
    };
    return (
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
            <div className="bg-white/5 rounded-2xl shadow-lg p-10 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-lime-yellow-500 mb-6">Address Book</h2>
                <ul className="space-y-6">
                    {userData.addresses.map(addr => (
                        <li key={addr.id} className="bg-black/60 rounded-lg p-4 flex justify-between items-center">
                            <div>
                                <div className="text-white font-semibold">{addr.name}</div>
                                <div className="text-gray-400 text-sm">{addr.address}</div>
                                <div className="text-gray-400 text-sm">{addr.phone}</div>
                                {addr.isDefault && <span className="text-lime-yellow-500 text-xs">Default</span>}
                            </div>
                            <div className="flex gap-2">
                                <button className="text-lime-yellow-500 hover:underline">Edit</button>
                                <button
                                    onClick={() => handleDeleteAddress(addr.id)}
                                    disabled={deletingId === addr.id}
                                    className="text-red-400 hover:underline disabled:opacity-50"
                                >
                                    {deletingId === addr.id ? "Deleting..." : "Delete"}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
} 