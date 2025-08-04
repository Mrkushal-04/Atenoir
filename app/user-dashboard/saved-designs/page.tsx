"use client";
import React, { useState } from "react";
import { UserData } from "@/lib/hooks/useUserData";
import { useUserData } from "@/lib/hooks/useUserData";

interface SavedDesignsPageProps {
    userData: UserData;
}

export default function SavedDesignsPage({ userData }: SavedDesignsPageProps) {
    const { deleteSavedDesign } = useUserData();
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleDeleteDesign = (id: string) => {
        if (confirm("Are you sure you want to delete this design?")) {
            setDeletingId(id);
            deleteSavedDesign(id);
            setTimeout(() => setDeletingId(null), 1000);
        }
    };
    return (
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
            <div className="bg-white/5 rounded-2xl shadow-lg p-10 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-lime-yellow-500 mb-6">Saved Designs</h2>
                <ul className="space-y-6">
                    {userData.savedDesigns.map(design => (
                        <li key={design.id} className="bg-black/60 rounded-lg p-4 flex items-center gap-4">
                            <img src={design.image} alt={design.name} className="w-16 h-16 rounded object-cover border border-lime-yellow-500" />
                            <div className="flex-1">
                                <div className="text-white font-semibold">{design.name}</div>
                                <div className="text-gray-400 text-xs">Created: {new Date(design.createdDate).toLocaleDateString()}</div>
                                {design.description && <div className="text-gray-400 text-xs">{design.description}</div>}
                            </div>
                            <div className="flex gap-2">
                                <button className="text-lime-yellow-500 hover:underline">View</button>
                                <button
                                    onClick={() => handleDeleteDesign(design.id)}
                                    disabled={deletingId === design.id}
                                    className="text-red-400 hover:underline disabled:opacity-50"
                                >
                                    {deletingId === design.id ? "Deleting..." : "Delete"}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
} 