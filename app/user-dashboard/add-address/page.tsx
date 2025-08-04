"use client";
import React, { useState } from "react";
import { UserData } from "@/lib/hooks/useUserData";
import { useUserData } from "@/lib/hooks/useUserData";
import { useRouter } from "next/navigation";

interface AddAddressPageProps {
    userData: UserData;
}

export default function AddAddressPage({ userData }: AddAddressPageProps) {
    const router = useRouter();
    const { addAddress } = useUserData();
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [isAdding, setIsAdding] = useState(false);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsAdding(true);

        // Add address using the hook
        addAddress({
            name,
            address,
            phone,
            isDefault: userData.addresses.length === 0, // First address becomes default
            type: "home"
        });

        setTimeout(() => {
            setIsAdding(false);
            alert("Address added successfully!");
            // Redirect to address book
            router.push("/user-dashboard?section=address-book");
        }, 1000);
    }

    return (
        <div className="min-h-screen bg-black/[0.96] flex items-center justify-center">
            <form className="bg-white/5 rounded-2xl shadow-lg p-10 w-full max-w-xl flex flex-col gap-6" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold text-lime-yellow-500 mb-4">Add New Address</h2>
                <input
                    className="w-full px-4 py-2 rounded bg-black/60 text-white border border-lime-yellow-500 focus:outline-none"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Name"
                />
                <input
                    className="w-full px-4 py-2 rounded bg-black/60 text-white border border-lime-yellow-500 focus:outline-none"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    placeholder="Address"
                />
                <input
                    className="w-full px-4 py-2 rounded bg-black/60 text-white border border-lime-yellow-500 focus:outline-none"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Phone"
                />
                <button
                    type="submit"
                    disabled={isAdding}
                    className="w-full bg-lime-yellow-500 text-black font-bold py-2 rounded mt-4 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {isAdding ? "Adding..." : "Add Address"}
                </button>
            </form>
        </div>
    );
} 