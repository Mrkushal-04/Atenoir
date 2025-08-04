"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail } from "lucide-react";

export default function EmailVerificationPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const context = searchParams.get('context');
    const email = searchParams.get('email') || (typeof window !== 'undefined' ? localStorage.getItem('reset-email') : '') || '';

    const [verificationCode, setVerificationCode] = useState(["", "", "", "", "", ""]);
    const [isLoading, setIsLoading] = useState(false);
    const [isVerified, setIsVerified] = useState(false);
    const [countdown, setCountdown] = useState(60);
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        if (countdown > 0) {
            const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
            return () => clearTimeout(timer);
        } else {
            setCanResend(true);
        }
    }, [countdown]);

    const handleCodeChange = (index: number, value: string) => {
        if (value.length <= 1 && /^\d*$/.test(value)) {
            const newCode = [...verificationCode];
            newCode[index] = value;
            setVerificationCode(newCode);
            if (value && index < 5) {
                const nextInput = document.getElementById(`code-${index + 1}`);
                nextInput?.focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !verificationCode[index] && index > 0) {
            const prevInput = document.getElementById(`code-${index - 1}`);
            prevInput?.focus();
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const code = verificationCode.join("");
        if (code.length === 6) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                setIsVerified(true);
                if (context === 'reset-password') {
                    localStorage.setItem('email-verified', 'true');
                }
            }, 2000);
        }
    };

    const handleResend = () => {
        setCountdown(60);
        setCanResend(false);
    };

    return (
        <div className="min-h-screen bg-black/[0.96] relative overflow-hidden flex items-center justify-center">
            <div className="flex w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Left Panel */}
                <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-lime-yellow-500 p-8">
                    <img src="/images/email-verification.png" alt="Verify Email" className="w-64 mb-6" />
                    <h2 className="text-2xl font-bold text-black mb-2">Atenoir</h2>
                    <p className="text-black/80 text-center">A luxury experience for your fashion journey.</p>
                </div>
                {/* Right Panel */}
                {isVerified ? (
                    <div className="flex-1 flex flex-col justify-center items-center p-8 bg-black/90 rounded-2 ">
                        <div className="w-full max-w-sm">
                            
                                <h1 className="text-2xl font-bold text-white mb-4 text-center">Email Verified!</h1>
                                <p className="text-gray-300 text-center mb-6">
                                    {context === 'reset-password'
                                        ? "Your email has been verified. You can now reset your password."
                                        : "Your email has been successfully verified. You can now access your account."}
                                </p>
                                {context === 'reset-password' ? (
                                    <button
                                        onClick={() => router.push('/authentication/reset-password')}
                                        className="w-full bg-lime-yellow-500 hover:bg-lime-yellow-400 text-black font-bold py-3 rounded-xl transition-all duration-200 flex items-center justify-center text-base shadow-md focus:ring-2 focus:ring-lime-yellow-500 mb-2"
                                    >
                                        Reset Password
                                    </button>
                                ) : (
                                    <Link
                                        href="/authentication/login"
                                        className="w-full bg-lime-yellow-500 hover:bg-lime-yellow-400 text-black font-bold py-3 rounded-xl transition-all duration-200 flex items-center justify-center text-base shadow-md focus:ring-2 focus:ring-lime-yellow-500 mb-2"
                                    >
                                        Continue to Login
                                    </Link>
                                )}
                        </div>
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col justify-center items-center p-8 bg-black/90 rounded-2 shadow-2xl">
                        <div className="w-full max-w-sm">

                            <h1 className="text-2xl font-bold text-white mb-4 text-center">
                                {context === 'reset-password' ? 'Verify Email to Reset Password' : 'Verify Your Email'}
                            </h1>
                            <p className="text-gray-300 text-center mb-6">
                                {context === 'reset-password'
                                    ? `Enter the 6-digit code sent to ${email}`
                                    : "Enter the 6-digit code sent to your email address"}
                            </p>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="flex justify-center gap-2 mb-4" role="group" aria-label="Verification code input">
                                    {verificationCode.map((digit, idx) => (
                                        <input
                                            key={idx}
                                            id={`code-${idx}`}
                                            type="text"
                                            maxLength={1}
                                            inputMode="numeric"
                                            autoComplete="one-time-code"
                                            aria-label={`Digit ${idx + 1}`}
                                            placeholder="•"
                                            title={`Verification code digit ${idx + 1}`}
                                            value={digit}
                                            onChange={e => handleCodeChange(idx, e.target.value)}
                                            onKeyDown={e => handleKeyDown(idx, e)}
                                            className="w-12 h-12 text-center bg-transparent border border-gray-400/40 rounded-xl text-lg font-bold text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-yellow-500 focus:border-lime-yellow-500"
                                        />
                                    ))}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-lime-yellow-500 hover:bg-lime-yellow-400 text-black font-bold py-3 rounded-xl transition-all duration-200 flex items-center justify-center text-base shadow-md focus:ring-2 focus:ring-lime-yellow-500"
                                    disabled={isLoading || verificationCode.join('').length !== 6}
                                >
                                    {isLoading ? "Verifying..." : "Verify Email"}
                                </button>
                            </form>
                            <div className="flex flex-col items-center mt-6">
                                <button
                                    onClick={handleResend}
                                    disabled={!canResend}
                                    className="text-lime-yellow-500 hover:underline text-sm mb-2 disabled:text-gray-400"
                                >
                                    {canResend ? "Resend Code" : `Resend in ${countdown}s`}
                                </button>
                                <Link href="/authentication/login" className="text-gray-400 hover:underline text-sm">
                                    Back to Login
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}