"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { Lock, AlertTriangle, CheckCircle } from "lucide-react";

export default function AccountLockedPage() {
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
        }, 2000);
    };

    if (isSubmitted) {
        return (
            <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <div className="relative z-10">
                    <Navbar />

                    <div className="container mx-auto px-6 py-16">
                        <div className="max-w-md mx-auto">
                            <Link href="/authentication" className="text-lime-yellow-500 hover:underline mb-6 inline-block">
                                ← Back to Authentication
                            </Link>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-8 h-8 text-green-400" />
                                </div>

                                <h1 className="text-3xl font-bold text-white mb-4">Unlock Email Sent</h1>
                                <p className="text-gray-400 mb-6">
                                    We've sent account unlock instructions to <strong className="text-white">{email}</strong>
                                </p>
                                <p className="text-gray-400 text-sm mb-8">
                                    Follow the instructions in the email to unlock your account.
                                </p>

                                <div className="space-y-4">
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="w-full bg-lime-yellow-500 hover:bg-lime-yellow-400 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                                    >
                                        Send Another Email
                                    </button>
                                    <Link
                                        href="/authentication/login"
                                        className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 inline-block"
                                    >
                                        Back to Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className="relative z-10">
                <Navbar />

                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-md mx-auto">
                        <Link href="/authentication" className="text-lime-yellow-500 hover:underline mb-6 inline-block">
                            ← Back to Authentication
                        </Link>

                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                            <div className="text-center mb-8">
                                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Lock className="w-8 h-8 text-red-400" />
                                </div>
                                <h1 className="text-3xl font-bold text-white mb-2">Account Locked</h1>
                                <p className="text-gray-400">
                                    Your account has been temporarily locked due to multiple failed login attempts.
                                </p>
                            </div>

                            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6">
                                <div className="flex items-start">
                                    <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                                    <div className="text-sm text-red-300">
                                        <p className="font-medium mb-1">Security Notice</p>
                                        <p>For your security, your account has been locked. This is a temporary measure to protect your account from unauthorized access.</p>
                                    </div>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-yellow-500 focus:border-transparent"
                                        placeholder="Enter your email address"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading || !email}
                                    className="w-full bg-lime-yellow-500 hover:bg-lime-yellow-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Unlock Email"
                                    )}
                                </button>
                            </form>

                            <div className="mt-8 space-y-4">
                                <div className="text-center">
                                    <p className="text-gray-400 text-sm">
                                        Need immediate assistance?{" "}
                                        <Link href="/support" className="text-lime-yellow-500 hover:underline font-medium">
                                            Contact Support
                                        </Link>
                                    </p>
                                </div>

                                <div className="bg-white/5 rounded-lg p-4">
                                    <h3 className="text-white font-medium mb-2">Why was my account locked?</h3>
                                    <ul className="text-gray-400 text-sm space-y-1">
                                        <li>• Multiple failed login attempts</li>
                                        <li>• Suspicious activity detected</li>
                                        <li>• Security policy violation</li>
                                        <li>• Unusual login location</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </main>
    );
} 