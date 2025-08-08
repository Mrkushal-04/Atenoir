"use client";
import React, { useState } from "react";
import { UserData } from "@/lib/hooks/useUserData";
import { useUserData } from "@/lib/hooks/useUserData";
import { useRouter } from "next/navigation";

interface EditProfilePageProps {
    userData?: UserData;
}

export default function EditProfilePage({ userData }: EditProfilePageProps) {
    const router = useRouter();
    const { updateProfile } = useUserData();
    
    // Handle case where userData is undefined (during static export)
    if (!userData || !userData.profile) {
        return (
            <div className="bg-white/5 rounded-2xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Edit Profile</h2>
                <div className="text-gray-400">Please log in to edit your profile</div>
            </div>
        );
    }
    
    const [name, setName] = useState(userData.profile.name);
    const [email, setEmail] = useState(userData.profile.email);
    const [avatar, setAvatar] = useState(userData.profile.avatar);
    const [isUpdating, setIsUpdating] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsUpdating(true);

        // Update profile using the hook
        updateProfile({
            name,
            email,
            avatar
        });

        setTimeout(() => {
            setIsUpdating(false);
            alert("Profile updated successfully!");
            // Redirect to profile page
            router.push("/user-dashboard?section=profile");
        }, 1000);
    }

    return (
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
            <form
                className="bg-white/5 rounded-2xl shadow-lg p-10 w-full max-w-xl flex flex-col items-center gap-6"
                onSubmit={handleSubmit}
            >
                <img src={avatar} alt="User" className="w-28 h-28 rounded-full object-cover border-4 border-lime-yellow-500 mb-2" />
                <label className="mb-2 w-full flex flex-col items-center">
                    <span className="text-sm text-gray-300 mb-1">Change Avatar</span>
                    <input
                        type="file"
                        className="mb-0"
                        title="Upload avatar"
                        aria-label="Upload avatar"
                        onChange={e => { }}
                    />
                </label>
                <label className="w-full flex flex-col">
                    <span className="text-sm text-gray-300 mb-1">Name</span>
                    <input
                        className="w-full px-4 py-2 rounded bg-black/60 text-white border border-lime-yellow-500 focus:outline-none"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                        title="Name"
                        aria-label="Name"
                    />
                </label>
                <label className="w-full flex flex-col">
                    <span className="text-sm text-gray-300 mb-1">Email</span>
                    <input
                        className="w-full px-4 py-2 rounded bg-black/60 text-white border border-lime-yellow-500 focus:outline-none"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        title="Email"
                        aria-label="Email"
                    />
                </label>
                <button
                    type="submit"
                    disabled={isUpdating}
                    className="w-full bg-lime-yellow-500 text-black font-bold py-2 rounded mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {isUpdating ? "Updating..." : "Save Changes"}
                </button>
            </form>
        </div>
    );
} 