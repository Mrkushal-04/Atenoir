"use client";
import React from "react";
import { UserData } from "@/lib/hooks/useUserData";
import { useRouter } from "next/navigation";

interface LogoutPageProps {
    userData: UserData;
}

export default function LogoutPage({ userData }: LogoutPageProps) {
    const router = useRouter();

    const handleLogout = () => {
        // Clear user data from localStorage
        localStorage.removeItem('atenoir-user-data');
        alert("Logged out successfully!");
        // Redirect to login page
        router.push("/authentication/login");
    };
    return (
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
            <div className="bg-white/5 rounded-2xl shadow-lg p-10 w-full max-w-md flex flex-col items-center gap-6">
                <h2 className="text-2xl font-bold text-lime-yellow-500 mb-4">Logout</h2>
                <div className="text-white mb-4">Are you sure you want to logout?</div>
                <button onClick={handleLogout} className="w-full bg-lime-yellow-500 text-black font-bold py-2 rounded">Logout</button>
            </div>
        </div>
    );
} 