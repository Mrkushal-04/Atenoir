"use client"

import React, { useState } from "react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { Shield, QrCode, Key, CheckCircle } from "lucide-react";

export default function TwoFactorPage() {
    const [step, setStep] = useState(1);
    const [verificationCode, setVerificationCode] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);

    const handleVerify = async (e: React.FormEvent) => {
        e.preventDefault();
        if (verificationCode.length === 6) {
            setIsLoading(true);
            // Simulate API call
            setTimeout(() => {
                setIsLoading(false);
                setStep(3);
            }, 2000);
        }
    };

    const handleEnable = () => {
        setIsEnabled(true);
        setStep(4);
    };

    if (isEnabled) {
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

                                <h1 className="text-3xl font-bold text-white mb-4">2FA Enabled!</h1>
                                <p className="text-gray-400 mb-8">
                                    Two-factor authentication has been successfully enabled for your account.
                                </p>

                                <div className="space-y-4">
                                    <Link
                                        href="/authentication/login"
                                        className="w-full bg-lime-yellow-500 hover:bg-lime-yellow-400 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-300 inline-block"
                                    >
                                        Continue to Login
                                    </Link>
                                    <Link
                                        href="/authentication"
                                        className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 inline-block"
                                    >
                                        Back to Authentication
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
                                <div className="w-16 h-16 bg-lime-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Shield className="w-8 h-8 text-lime-yellow-400" />
                                </div>
                                <h1 className="text-3xl font-bold text-white mb-2">Two-Factor Authentication</h1>
                                <p className="text-gray-400">
                                    Add an extra layer of security to your account
                                </p>
                            </div>

                            {step === 1 && (
                                <div className="space-y-6">
                                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                                        <div className="flex items-start">
                                            <Shield className="w-5 h-5 text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                                            <div className="text-sm text-blue-300">
                                                <p className="font-medium mb-1">Enhanced Security</p>
                                                <p>Two-factor authentication adds an extra layer of protection to your account by requiring a second form of verification.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-white font-medium">How it works:</h3>
                                        <ul className="text-gray-400 text-sm space-y-2">
                                            <li className="flex items-start">
                                                <span className="w-6 h-6 bg-lime-yellow-500/20 rounded-full flex items-center justify-center text-lime-yellow-400 text-xs font-bold mr-3 mt-0.5">1</span>
                                                <span>Download an authenticator app (Google Authenticator, Authy, etc.)</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-6 h-6 bg-lime-yellow-500/20 rounded-full flex items-center justify-center text-lime-yellow-400 text-xs font-bold mr-3 mt-0.5">2</span>
                                                <span>Scan the QR code with your authenticator app</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-6 h-6 bg-lime-yellow-500/20 rounded-full flex items-center justify-center text-lime-yellow-400 text-xs font-bold mr-3 mt-0.5">3</span>
                                                <span>Enter the 6-digit code to verify setup</span>
                                            </li>
                                        </ul>
                                    </div>

                                    <button
                                        onClick={() => setStep(2)}
                                        className="w-full bg-lime-yellow-500 hover:bg-lime-yellow-400 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                                    >
                                        Get Started
                                    </button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <h3 className="text-white font-medium mb-4">Scan QR Code</h3>
                                        <div className="bg-white rounded-lg p-4 inline-block mb-4">
                                            <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                                                <QrCode className="w-24 h-24 text-gray-400" />
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-sm">
                                            Open your authenticator app and scan this QR code
                                        </p>
                                    </div>

                                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                                        <div className="flex items-start">
                                            <Key className="w-5 h-5 text-yellow-400 mt-0.5 mr-3 flex-shrink-0" />
                                            <div className="text-sm text-yellow-300">
                                                <p className="font-medium mb-1">Backup Codes</p>
                                                <p>Save these backup codes in a secure location. You can use them to access your account if you lose your authenticator device.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-2">
                                        {['ABC123', 'DEF456', 'GHI789', 'JKL012', 'MNO345', 'PQR678', 'STU901', 'VWX234'].map((code, index) => (
                                            <div key={index} className="bg-white/10 border border-white/20 rounded-lg p-3 text-center">
                                                <span className="text-white font-mono text-sm">{code}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setStep(1)}
                                            className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                                        >
                                            Back
                                        </button>
                                        <button
                                            onClick={() => setStep(3)}
                                            className="flex-1 bg-lime-yellow-500 hover:bg-lime-yellow-400 text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <h3 className="text-white font-medium mb-4">Verify Setup</h3>
                                        <p className="text-gray-400 mb-6">
                                            Enter the 6-digit code from your authenticator app
                                        </p>
                                    </div>

                                    <form onSubmit={handleVerify} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-300 mb-4 text-center">
                                                Verification Code
                                            </label>
                                            <div className="flex gap-3 justify-center">
                                                {Array.from({ length: 6 }, (_, index) => (
                                                    <input
                                                        key={index}
                                                        type="text"
                                                        value={verificationCode[index] || ""}
                                                        onChange={(e) => {
                                                            const value = e.target.value;
                                                            if (value.length <= 1 && /^\d*$/.test(value)) {
                                                                const newCode = verificationCode.split("");
                                                                newCode[index] = value;
                                                                setVerificationCode(newCode.join(""));

                                                                if (value && index < 5) {
                                                                    const nextInput = document.getElementById(`verify-${index + 1}`);
                                                                    nextInput?.focus();
                                                                }
                                                            }
                                                        }}
                                                        onKeyDown={(e) => {
                                                            if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
                                                                const prevInput = document.getElementById(`verify-${index - 1}`);
                                                                prevInput?.focus();
                                                            }
                                                        }}
                                                        id={`verify-${index}`}
                                                        className="w-12 h-12 text-center bg-white/10 border border-white/20 rounded-lg text-white text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-lime-yellow-500 focus:border-transparent"
                                                        maxLength={1}
                                                        aria-label={`Verification code digit ${index + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <button
                                                type="button"
                                                onClick={() => setStep(2)}
                                                className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                                            >
                                                Back
                                            </button>
                                            <button
                                                type="submit"
                                                disabled={isLoading || verificationCode.length !== 6}
                                                className="flex-1 bg-lime-yellow-500 hover:bg-lime-yellow-400 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                        </svg>
                                                        Verifying...
                                                    </>
                                                ) : (
                                                    "Verify & Enable"
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </main>
    );
} 