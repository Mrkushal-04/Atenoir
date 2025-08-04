"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
    const router = useRouter();
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [email, setEmail] = useState("");

    useEffect(() => {
        // Check if email is verified
        const isVerified = localStorage.getItem('email-verified');
        const resetEmail = localStorage.getItem('reset-email');
        if (!isVerified || !resetEmail) {
            router.push('/authentication/forgot-password');
            return;
        }
        setEmail(resetEmail);
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }
        if (newPassword.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsSuccess(true);
            localStorage.removeItem('email-verified');
            localStorage.removeItem('reset-email');
        }, 2000);
    };

    const handleBackToLogin = () => {
        localStorage.removeItem('email-verified');
        localStorage.removeItem('reset-email');
        router.push('/authentication/login');
    };

    return (
        <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden flex items-center justify-center">
            <div className="flex w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden">
                {/* Left Panel */}
                <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-lime-yellow-500 p-8">
                    <img src="/images/password-recover.png" alt="Reset Password" className="w-64 mb-6" />
                    <h2 className="text-2xl font-bold text-black mb-2">Reset Your Password</h2>
                    <p className="text-black/80 text-center">Set a new password to regain access to your account.</p>
                </div>
                {/* Right Panel */}
                <div className="flex-1 flex flex-col justify-center items-center p-8 bg-black/90 rounded-2xl shadow-2xl">
                    <div className="w-full max-w-sm">
                        {isSuccess ? (
                            <div className="bg-black/60 rounded-2xl shadow-lg p-8">
                                <h1 className="text-2xl font-bold text-white mb-4 text-center">Password Reset Successfully!</h1>
                                <p className="text-gray-300 text-center mb-6">
                                    Your password has been updated. You can now log in with your new password.
                                </p>
                                <button
                                    onClick={handleBackToLogin}
                                    className="w-full bg-lime-yellow-500 hover:bg-lime-yellow-400 text-black font-bold py-3 rounded-xl transition-all duration-200 flex items-center justify-center text-base shadow-md focus:ring-2 focus:ring-lime-yellow-500 mb-2"
                                >
                                    Continue to Login
                                </button>
                            </div>
                        ) : (
                            <div className="bg-black/60 rounded-2xl shadow-lg p-8">
                                <h1 className="text-2xl font-bold text-white mb-4 text-center">Reset Your Password</h1>
                                <p className="text-gray-300 text-center mb-6">
                                    Enter your new password below
                                </p>
                                {email && (
                                    <p className="text-gray-400 text-sm text-center mb-4">
                                        For: <span className="text-white">{email}</span>
                                    </p>
                                )}
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                    <div>
                                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-300 mb-2">
                                            New Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showNewPassword ? "text" : "password"}
                                                id="newPassword"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                required
                                                className="w-full px-4 py-3 pr-12 bg-transparent border border-gray-400/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-yellow-500 focus:border-lime-yellow-500"
                                                placeholder="Enter new password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowNewPassword(!showNewPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-lime-yellow-500"
                                                tabIndex={-1}
                                            >
                                                {showNewPassword ? (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.403-3.22 1.125-4.575M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                ) : (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                                            Confirm New Password
                                        </label>
                                        <div className="relative">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                id="confirmPassword"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                required
                                                className="w-full px-4 py-3 pr-12 bg-transparent border border-gray-400/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-yellow-500 focus:border-lime-yellow-500"
                                                placeholder="Confirm new password"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-lime-yellow-500"
                                                tabIndex={-1}
                                            >
                                                {showConfirmPassword ? (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10 0-1.657.403-3.22 1.125-4.575M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                ) : (
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={isLoading || !newPassword || !confirmPassword}
                                        className="w-full bg-lime-yellow-500 hover:bg-lime-yellow-400 text-black font-bold py-3 rounded-xl transition-all duration-200 flex items-center justify-center text-base shadow-md focus:ring-2 focus:ring-lime-yellow-500"
                                    >
                                        {isLoading ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Resetting Password...
                                            </>
                                        ) : (
                                            "Reset Password"
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
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 