"use client"

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, CheckCircle } from "lucide-react";
import AuthLayout from "../AuthLayout";
import Image from "next/image";

export default function ForgotPasswordPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call to send verification email
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);
            // Store email in localStorage for verification flow
            localStorage.setItem('reset-email', email);
        }, 2000);
    };

    const handleVerifyEmail = () => {
        // Redirect to email verification page with reset password context
        router.push(`/authentication/email-verification?context=reset-password&email=${encodeURIComponent(email)}`);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-black/[0.96] pt-5">
                <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
                    <div className="flex w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden">
                        {/* Left: Lime Yellow Gradient Panel */}
                        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-lime-yellow-500 text-lime-yellow-500 p-8">
                            <Image
                                src="/images/Forgotpassword.png"
                                alt="Forgot Password Illustration"
                                width={320}
                                height={320}
                                className="object-contain"
                                priority
                            />
                        </div>
                        {/* Right: Form Card */}
                        <div className="flex-1 flex flex-col justify-center items-center p-8 bg-black/90">
                            <div className="w-full max-w-sm">
                                <div className="bg-black/90 rounded-2xl shadow-lg p-8 text-center">
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-8 h-8 text-green-400" />
                                    </div>
                                    <h1 className="text-3xl font-bold text-white mb-4">Check Your Email</h1>
                                    <p className="text-gray-400 mb-6">
                                        We've sent a verification code to <strong className="text-white">{email}</strong>
                                    </p>
                                    <p className="text-gray-400 text-sm mb-8">
                                        Please verify your email to reset your password. If you don't see the email, check your spam folder.
                                    </p>
                                    <div className="space-y-4">
                                        <button
                                            onClick={handleVerifyEmail}
                                            className="w-full bg-lime-yellow-500 hover:bg-lime-yellow-400 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                                        >
                                            Verify Email
                                        </button>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
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
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-black/[0.96]">
            <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
                <div className="flex w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden">
                    {/* Left: Lime Yellow Gradient Panel */}
                    <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-lime-yellow-500 text-lime-yellow-500 p-8">
                        <Image
                            src="/images/Forgotpassword.png"
                            alt="Forgot Password Illustration"
                            width={320}
                            height={320}
                            className="object-contain"
                            priority
                        />
                    </div>
                    {/* Right: Form Card */}
                    <div className="flex-1 flex flex-col justify-center items-center p-8 bg-black/90">
                        <div className="w-full max-w-sm">
                            <div className="bg-black/90 rounded-2xl shadow-lg p-8">
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-lime-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Mail className="w-8 h-8 text-lime-yellow-400" />
                                    </div>
                                    <h1 className="text-3xl font-bold text-white mb-2">Forgot Password?</h1>
                                    <p className="text-gray-400">
                                        Enter your email address and we'll send you a link to reset your password.
                                    </p>
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
                                            className="w-full px-4 py-3 bg-transparent border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-yellow-500 focus:border-lime-yellow-500"
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
                                            "Send Reset Link"
                                        )}
                                    </button>
                                </form>
                                <div className="mt-8 text-center">
                                    <p className="text-gray-400">
                                        Remember your password?{" "}
                                        <Link href="/authentication/login" className="text-lime-yellow-500 hover:underline font-medium">
                                            Sign in
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 