"use client";
import React, { useState } from "react";
import { UserData } from "@/lib/hooks/useUserData";
import { useUserData } from "@/lib/hooks/useUserData";

interface ReviewsPageProps {
    userData?: UserData;
}

export default function ReviewsPage({ userData }: ReviewsPageProps) {
    // Handle case where userData is undefined (during static export)
    if (!userData) {
        return (
            <div className="bg-white/5 rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">My Reviews</h2>
                <div className="text-gray-400">Please log in to view your reviews</div>
            </div>
        );
    }
    const { deleteReview } = useUserData();
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleDeleteReview = (id: string) => {
        if (confirm("Are you sure you want to delete this review?")) {
            setDeletingId(id);
            deleteReview(id);
            setTimeout(() => setDeletingId(null), 1000);
        }
    };
    return (
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
            <div className="bg-white/5 rounded-2xl shadow-lg p-10 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-lime-yellow-500 mb-6">My Reviews</h2>
                <ul className="space-y-6">
                    {userData.reviews.map(review => (
                        <li key={review.id} className="bg-black/60 rounded-lg p-4">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-white font-semibold">{review.productName}</span>
                                <span className="text-lime-yellow-500">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</span>
                            </div>
                            <div className="text-gray-300 text-sm">{review.comment}</div>
                            <div className="text-gray-400 text-xs mt-2">Reviewed on {new Date(review.date).toLocaleDateString()}</div>
                            <div className="flex gap-2 mt-2">
                                <button className="text-lime-yellow-500 hover:underline text-xs">Edit</button>
                                <button
                                    onClick={() => handleDeleteReview(review.id)}
                                    disabled={deletingId === review.id}
                                    className="text-red-400 hover:underline text-xs disabled:opacity-50"
                                >
                                    {deletingId === review.id ? "Deleting..." : "Delete"}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
} 