"use client";
import { FaUser, FaHeart, FaStar } from "react-icons/fa";
import { UserData } from "@/lib/hooks/useUserData";

interface ProfilePageProps {
    userData?: UserData;
}

export default function ProfilePage({ userData }: ProfilePageProps) {
    // Handle case where userData is undefined (during static export)
    if (!userData || !userData.profile) {
        return (
            <div className="bg-white/5 rounded-2xl shadow-lg p-6 flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-gray-600 flex items-center justify-center border-4 border-lime-yellow-500">
                    <FaUser className="w-12 h-12 text-gray-400" />
                </div>
                <div>
                    <div className="text-xl font-bold text-white">Loading Profile...</div>
                    <div className="text-gray-400">Please log in to view your profile</div>
                    <div className="flex gap-2 mt-2 text-lime-yellow-500">
                        <FaUser /><FaHeart /><FaStar />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white/5 rounded-2xl shadow-lg p-6 flex items-center gap-6">
            <img src={userData.profile.avatar} alt="User" className="w-24 h-24 rounded-full object-cover border-4 border-lime-yellow-500" />
            <div>
                <div className="text-xl font-bold text-white">{userData.profile.name}</div>
                <div className="text-gray-400">Registered: {new Date(userData.profile.registeredDate).toLocaleDateString()}</div>
                <div className="text-gray-400">Email: {userData.profile.email}</div>
                <div className="flex gap-2 mt-2 text-lime-yellow-500">
                    <FaUser /><FaHeart /><FaStar />
                </div>
            </div>
        </div>
    );
} 