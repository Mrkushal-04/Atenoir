"use client";
import React, { useState } from "react";
import { useUserData } from "@/lib/hooks/useUserData";

export default function NotificationsPage() {
    const { userData, markNotificationAsRead, deleteNotification } = useUserData();
    const [deletingId, setDeletingId] = useState<string | null>(null);

    const handleMarkAsRead = (id: string) => {
        markNotificationAsRead(id);
    };

    const handleDeleteNotification = (id: string) => {
        if (confirm("Are you sure you want to delete this notification?")) {
            setDeletingId(id);
            deleteNotification(id);
            setTimeout(() => setDeletingId(null), 1000);
        }
    };

    if (!userData) {
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
            <div className="bg-white/5 rounded-2xl shadow-lg p-10 w-full max-w-2xl">
                <h2 className="text-2xl font-bold text-lime-yellow-500 mb-6">Notifications</h2>
                <ul className="space-y-6">
                    {userData.notifications.map(note => (
                        <li key={note.id} className={`bg-black/60 rounded-lg p-4 ${!note.isRead ? 'border-l-4 border-lime-yellow-500' : ''}`}>
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-white font-semibold">{note.title}</span>
                                <span className="text-gray-400 text-xs">{new Date(note.date).toLocaleDateString()}</span>
                            </div>
                            <div className="text-gray-300 text-sm">{note.message}</div>
                            <div className="flex gap-2 mt-2">
                                <span className={`text-xs px-2 py-1 rounded ${note.type === 'order' ? 'bg-blue-500/20 text-blue-300' : note.type === 'promotion' ? 'bg-green-500/20 text-green-300' : 'bg-gray-500/20 text-gray-300'}`}>
                                    {note.type}
                                </span>
                                {!note.isRead && (
                                    <>
                                        <span className="text-lime-yellow-500 text-xs">New</span>
                                        <button
                                            onClick={() => handleMarkAsRead(note.id)}
                                            className="text-lime-yellow-500 hover:underline text-xs"
                                        >
                                            Mark as Read
                                        </button>
                                    </>
                                )}
                                <button
                                    onClick={() => handleDeleteNotification(note.id)}
                                    disabled={deletingId === note.id}
                                    className="text-red-400 hover:underline text-xs disabled:opacity-50"
                                >
                                    {deletingId === note.id ? "Deleting..." : "Delete"}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}