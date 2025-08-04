"use client";
import React, { useState } from "react";
import { UserData } from "@/lib/hooks/useUserData";
import { useUserData } from "@/lib/hooks/useUserData";
import { useRouter } from "next/navigation";

interface ChangePasswordPageProps {
    userData: UserData;
}

export default function ChangePasswordPage({ userData }: ChangePasswordPageProps) {
    const router = useRouter();
    const { changePassword } = useUserData();
    const [current, setCurrent] = useState("");
    const [next, setNext] = useState("");
    const [confirm, setConfirm] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (next !== confirm) {
            alert("New passwords don't match!");
            return;
        }

        setIsUpdating(true);

        // Change password using the hook
        changePassword(current, next).then(() => {
            setTimeout(() => {
                setIsUpdating(false);
                alert("Password updated successfully!");
                // Redirect to profile page
                router.push("/user-dashboard?section=profile");
            }, 1000);
        });
    }

    return (
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
            <form className="bg-white/5 rounded-2xl shadow-lg p-10 w-full max-w-xl flex flex-col gap-6" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-lime-yellow-500 mb-4">Change Password</h2>
                <input
                    type="password"
                    className="w-full px-4 py-2 rounded bg-black/60 text-white border border-lime-yellow-500 focus:outline-none"
                    value={current}
                    onChange={e => setCurrent(e.target.value)}
                    placeholder="Current Password"
                />
                <input
                    type="password"
                    className="w-full px-4 py-2 rounded bg-black/60 text-white border border-lime-yellow-500 focus:outline-none"
                    value={next}
                    onChange={e => setNext(e.target.value)}
                    placeholder="New Password"
                />
                <input
                    type="password"
                    className="w-full px-4 py-2 rounded bg-black/60 text-white border border-lime-yellow-500 focus:outline-none"
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)}
                    placeholder="Confirm New Password"
                />
                <button
                    type="submit"
                    disabled={isUpdating}
                    className="w-full bg-lime-yellow-500 text-black font-bold py-2 rounded mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {isUpdating ? "Updating..." : "Update Password"}
                </button>
            </form>
        </div>
    );
} 