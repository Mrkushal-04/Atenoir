"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { GlobeAltIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function OAuthPage() {
    const [isLoading, setIsLoading] = useState<string | null>(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const oauthProviders = [
        {
            name: "Google",
            icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
            ),
            color: "from-red-500 to-orange-500",
            bgColor: "bg-white",
            textColor: "text-gray-700",
            borderColor: "border-gray-300"
        },
        {
            name: "Facebook",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            ),
            color: "from-blue-600 to-blue-700",
            bgColor: "bg-blue-600",
            textColor: "text-white",
            borderColor: "border-blue-600"
        },
        {
            name: "Apple",
            icon: (
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
            ),
            color: "from-gray-800 to-gray-900",
            bgColor: "bg-black",
            textColor: "text-white",
            borderColor: "border-gray-800"
        }
    ];

    const handleOAuthLogin = async (provider: string) => {
        setIsLoading(provider);

        // Simulate OAuth flow
        setTimeout(() => {
            setIsLoading(null);
            setIsSuccess(true);
        }, 2000);
    };

    if (isSuccess) {
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
                                    <CheckCircleIcon className="w-8 h-8 text-green-400" />
                                </div>

                                <h1 className="text-3xl font-bold text-white mb-4">Welcome to Atenoir!</h1>
                                <p className="text-gray-400 mb-8">
                                    You have successfully signed in with your social account.
                                </p>

                                <Link
                                    href="/"
                                    className="w-full bg-lime-yellow-500 hover:bg-lime-yellow-400 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-300 inline-block"
                                >
                                    Continue to Home
                                </Link>
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
                                <div className="w-16 h-16 bg-lime-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <GlobeAltIcon className="w-8 h-8 text-lime-yellow-400" />
                                </div>
                                <h1 className="text-3xl font-bold text-white mb-2">Sign In with Social</h1>
                                <p className="text-gray-400">
                                    Choose your preferred social login method
                                </p>
                            </div>

                            <div className="space-y-4">
                                {oauthProviders.map((provider) => (
                                    <button
                                        key={provider.name}
                                        onClick={() => handleOAuthLogin(provider.name)}
                                        disabled={isLoading !== null}
                                        className={`w-full ${provider.bgColor} ${provider.textColor} ${provider.borderColor} border-2 font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed`}
                                    >
                                        {isLoading === provider.name ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Connecting to {provider.name}...
                                            </>
                                        ) : (
                                            <>
                                                {provider.icon}
                                                Continue with {provider.name}
                                            </>
                                        )}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-8">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-white/20"></div>
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-black/[0.96] text-gray-400">Or</span>
                                    </div>
                                </div>

                                <div className="mt-6 space-y-3">
                                    <Link
                                        href="/authentication/login"
                                        className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 inline-block text-center"
                                    >
                                        Sign in with Email
                                    </Link>
                                    <Link
                                        href="/authentication/signup"
                                        className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 inline-block text-center"
                                    >
                                        Create Account
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <p className="text-gray-400 text-sm">
                                    By continuing, you agree to our{" "}
                                    <Link href="/terms" className="text-lime-yellow-500 hover:underline">
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link href="/privacy" className="text-lime-yellow-500 hover:underline">
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </main>
    );
} 