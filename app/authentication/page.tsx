"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import {
    UserIcon,
    LockClosedIcon,
    EnvelopeIcon,
    ShieldCheckIcon,
    KeyIcon,
    ExclamationTriangleIcon,
    FingerPrintIcon,
    GlobeAltIcon
} from "@heroicons/react/24/outline";

export default function AuthenticationPage() {
    const [searchTerm, setSearchTerm] = useState("");

    const authFeatures = [
        {
            title: "Login",
            description: "Access your account with email and password",
            icon: UserIcon,
            href: "/authentication/login",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Sign Up",
            description: "Create a new account to start shopping",
            icon: UserIcon,
            href: "/authentication/signup",
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Email Verification",
            description: "Verify your email address to activate your account",
            icon: EnvelopeIcon,
            href: "/authentication/email-verification",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Forgot Password",
            description: "Reset your password if you've forgotten it",
            icon: KeyIcon,
            href: "/authentication/forgot-password",
            color: "from-orange-500 to-red-500"
        },
        {
            title: "Reset Password",
            description: "Set a new password for your account",
            icon: LockClosedIcon,
            href: "/authentication/reset-password",
            color: "from-indigo-500 to-purple-500"
        },
        {
            title: "Account Locked",
            description: "Unlock your account if it's been temporarily locked",
            icon: ExclamationTriangleIcon,
            href: "/authentication/account-locked",
            color: "from-red-500 to-pink-500"
        },
        {
            title: "Two-Factor Authentication",
            description: "Set up additional security for your account",
            icon: ShieldCheckIcon,
            href: "/authentication/two-factor",
            color: "from-teal-500 to-cyan-500"
        },
        {
            title: "OAuth Login",
            description: "Sign in with Google, Facebook, or Apple",
            icon: GlobeAltIcon,
            href: "/authentication/oauth",
            color: "from-yellow-500 to-orange-500"
        }
    ];

    const filteredFeatures = authFeatures.filter(feature =>
        feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        feature.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className="relative z-10">
                <Navbar />

                <div className="container mx-auto px-6 py-16">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            Authentication
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Secure access to your Atenoir account. Choose from our comprehensive authentication options.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto mb-12">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search authentication options..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-yellow-500 focus:border-transparent"
                            />
                            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                        {filteredFeatures.map((feature, index) => (
                            <Link
                                key={index}
                                href={feature.href}
                                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                            >
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <feature.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-lime-yellow-400 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-5 h-5 text-lime-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Need Immediate Help Section */}
                    <div className="bg-gradient-to-r from-lime-yellow-500/10 to-cyan-500/10 border border-lime-yellow-500/20 rounded-2xl p-8 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Need Immediate Help?</h2>
                        <p className="text-gray-300 mb-6">
                            Having trouble with authentication? Our support team is here to help 24/7.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-lime-yellow-500 hover:bg-lime-yellow-400 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Live Chat Support
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                Call Support
                            </button>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </main>
    );
} 