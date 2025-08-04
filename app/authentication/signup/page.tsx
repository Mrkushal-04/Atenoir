"use client"

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Mail, User, Lock, Eye, EyeOff, CheckCircle, XCircle } from "lucide-react";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

export default function SignupPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
        acceptNewsletter: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [oauthLoading, setOauthLoading] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            // Handle signup logic here
        }, 2000);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const isPasswordValid = formData.password.length >= 8;
    const doPasswordsMatch = formData.password === formData.confirmPassword;

    const handleOAuthLogin = async (provider: string) => {
        setOauthLoading(provider);
        setTimeout(() => {
            setOauthLoading(null);
        }, 2000);
    };

    return (
        <div className="min-h-screen flex flex-col bg-black/[0.96]">
            <div className="flex-1 flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto w-full h-[calc(100vh-5rem)] pt-2">
                {/* Left: Signup Form */}
                <div className="flex-1 flex flex-col justify-center items-start px-10 py-0 h-full bg-black/90 rounded-l-3xl w-full max-w-xl shadow-xl relative z-10">
                    <div className="w-full max-w-md mx-auto flex flex-col items-center justify-center h-full pt-2">
                        <h1 className="text-4xl font-extrabold text-white mb-3">Create Your Account</h1>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
                            <div className="relative w-full">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lime-yellow-500">
                                    <User className="w-5 h-5" />
                                </span>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 bg-transparent border border-gray-400/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-yellow-500 focus:border-lime-yellow-500 text-base transition-all duration-200 shadow-sm"
                                    placeholder="First name"
                                />
                            </div>
                            <div className="relative w-full">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lime-yellow-500">
                                    <User className="w-5 h-5" />
                                </span>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 bg-transparent border border-gray-400/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-yellow-500 focus:border-lime-yellow-500 text-base transition-all duration-200 shadow-sm"
                                    placeholder="Last name"
                                />
                            </div>
                            <div className="relative w-full">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lime-yellow-500">
                                    <Mail className="w-5 h-5" />
                                </span>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full pl-12 pr-4 py-3 bg-transparent border border-gray-400/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-yellow-500 focus:border-lime-yellow-500 text-base transition-all duration-200 shadow-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div className="relative w-full">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lime-yellow-500">
                                    <Lock className="w-5 h-5" />
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full pl-12 pr-12 py-3 bg-transparent border border-gray-400/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-yellow-500 focus:border-lime-yellow-500 text-base transition-all duration-200 shadow-sm"
                                    placeholder="Password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-lime-yellow-500"
                                    tabIndex={-1}
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {/* Remove the password requirements checklist and any related UI below the password field */}
                            <div className="relative w-full">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lime-yellow-500">
                                    <Lock className="w-5 h-5" />
                                </span>
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full pl-12 pr-12 py-3 bg-transparent border border-gray-400/40 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-yellow-500 focus:border-lime-yellow-500 text-base transition-all duration-200 shadow-sm"
                                    placeholder="Re-type Password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-lime-yellow-500"
                                    tabIndex={-1}
                                >
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading || !formData.acceptTerms || !isPasswordValid || !doPasswordsMatch}
                                className="w-full bg-lime-yellow-500 hover:bg-lime-yellow-400 disabled:bg-gray-300 text-black font-bold py-3 px-5 rounded-xl transition-all duration-200 flex items-center justify-center text-base shadow-md focus:ring-2 focus:ring-lime-yellow-500 mb-2"
                            >
                                {isLoading ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Creating account...
                                    </>
                                ) : (
                                    "Sign Up"
                                )}
                            </button>
                        </form>
                        <div className="w-full text-center mt-8">
                            <span className="text-gray-300 text-sm">Already member?{' '}
                                <Link href='/authentication/login' className="text-lime-yellow-500 hover:underline font-semibold">Sign in</Link>
                            </span>
                        </div>
                        <div className="flex items-center gap-3 my-6 w-full">
                            <div className="flex-1 h-px bg-gray-200" />
                            <span className="text-gray-400 text-xs">Or sign up with</span>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>
                        <div className="flex gap-4 w-full justify-center mb-4">
                            <button
                                title="Sign up with Google"
                                onClick={() => handleOAuthLogin('Google')}
                                disabled={oauthLoading !== null}
                                className="flex items-center justify-center border border-gray-200 rounded-full w-12 h-12 bg-white text-gray-900 hover:bg-lime-yellow-100 transition-all shadow-sm focus:ring-2 focus:ring-lime-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {oauthLoading === 'Google' ? (
                                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    <FaGoogle className="w-6 h-6" />
                                )}
                            </button>
                            <button
                                title="Sign up with Facebook"
                                onClick={() => handleOAuthLogin('Facebook')}
                                disabled={oauthLoading !== null}
                                className="flex items-center justify-center border border-gray-200 rounded-full w-12 h-12 bg-white text-[#1877F3] hover:bg-lime-yellow-100 transition-all shadow-sm focus:ring-2 focus:ring-lime-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {oauthLoading === 'Facebook' ? (
                                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    <FaFacebook className="w-6 h-6" />
                                )}
                            </button>
                            <button
                                title="Sign up with Apple"
                                onClick={() => handleOAuthLogin('Apple')}
                                disabled={oauthLoading !== null}
                                className="flex items-center justify-center border border-gray-200 rounded-full w-12 h-12 bg-white text-black hover:bg-lime-yellow-100 transition-all shadow-sm focus:ring-2 focus:ring-lime-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {oauthLoading === 'Apple' ? (
                                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                ) : (
                                    <FaApple className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {/* Right: Illustration & Cards */}
                <div className="flex-1 flex flex-col justify-center items-center px-10 py-0 h-full min-h-full bg-lime-yellow-500 rounded-r-3xl w-full max-w-xl shadow-xl relative z-10">
                    <div className="absolute inset-0 z-0 opacity-60" style={{ background: "repeating-linear-gradient(135deg,rgba(255,255,255,0.08) 0 20px,transparent 20px 40px)" }} />
                    <div className="relative z-10 flex flex-col items-center w-full px-10">
                        <div className="bg-lime-yellow-500 rounded-2xl shadow-lg p-6 flex flex-col items-center w-full max-w-xs mt-16">
                            <h2 className="text-3xl font-bold text-black mb-2">Step Into Style, Step Into Atenoir.</h2>
                            <p className="text-black text-sm mb-2 text-center">Sign up to access exclusive collections, personalized recommendations, and seamless shopping.</p>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-black rounded-full" />
                                <span className="w-2 h-2 bg-white rounded-full" />
                                <span className="w-2 h-2 bg-light-gold-400 rounded-full" />
                            </div>
                        </div>
                        <div className="flex gap-5 mt-2 justify-center w-full">
                            <img src="/images/illustration-concept.png" alt="Signup Illustration" className="w-100 h-50 object-contain mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 