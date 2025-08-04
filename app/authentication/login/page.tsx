"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import AuthLayout from "../AuthLayout";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useUserData } from "@/lib/hooks/useUserData";

export default function LoginPage() {
    const router = useRouter();
    const { userData, isLoading: userDataLoading, setUserDataDirectly } = useUserData();
    const [formData, setFormData] = useState({ email: "", password: "", rememberMe: false });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [oauthLoading, setOauthLoading] = useState<string | null>(null);



    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setIsLoading(true);

        // Simulate login process
        setTimeout(() => {
            setIsLoading(false);

            // Create user data from login form
            const userData = {
                profile: {
                    name: formData.email.split('@')[0], // Use email prefix as name
                    email: formData.email,
                    avatar: "/images/user-avatar.png",
                    registeredDate: new Date().toISOString().split('T')[0],
                    phone: "",
                    dateOfBirth: "",
                    gender: ""
                },
                addresses: [],
                wishlist: [],
                orders: [],
                savedDesigns: [],
                reviews: [],
                notifications: [],
                loyaltyPoints: 0,
                referralCode: "",
                subscription: {
                    isActive: false,
                    plan: "",
                    nextBilling: ""
                }
            };

            // Set user data using the hook
            setUserDataDirectly(userData);

            // Redirect to dashboard
            router.push("/user-dashboard");
        }, 1500);
    }

    const handleOAuthLogin = async (provider: string) => {
        setOauthLoading(provider);
        setTimeout(() => {
            setOauthLoading(null);

            // Create user data for OAuth login
            const userData = {
                profile: {
                    name: `${provider} User`,
                    email: `user@${provider.toLowerCase()}.com`,
                    avatar: "/images/user-avatar.png",
                    registeredDate: new Date().toISOString().split('T')[0],
                    phone: "",
                    dateOfBirth: "",
                    gender: ""
                },
                addresses: [],
                wishlist: [],
                orders: [],
                savedDesigns: [],
                reviews: [],
                notifications: [],
                loyaltyPoints: 0,
                referralCode: "",
                subscription: {
                    isActive: false,
                    plan: "",
                    nextBilling: ""
                }
            };

            // Set user data using the hook
            setUserDataDirectly(userData);

            // Redirect to dashboard after OAuth login
            router.push("/user-dashboard");
        }, 2000);
    };



    return (
        <AuthLayout
            headline="Step Into Style, Step Into Atenoir."
            subtext="Sign in to access exclusive collections, personalized recommendations, and seamless shopping."
            illustration="/images/new-login-illustration.png"
        >
            {/* Right: Dark Card Form */}
            <div className="flex-1 flex flex-col justify-center items-center px-2 py-0 h-full bg-black/90 rounded-3xl shadow-2xl w-full max-w-full">
                <div className="w-full max-w-sm mx-auto p-4 rounded-2xl shadow-2xl">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-[150px] h-[100px] bg-black/80">
                            <Image
                                src="/images/atenoir-logo.png"
                                alt="Atenoir Logo"
                                width={150}
                                height={100}
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                    <h1 className="text-2xl font-extrabold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-300 text-base mb-8">Please login to your account</p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
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
                        <div className="flex items-center justify-between text-sm w-full mb-2">
                            <label className="flex items-center text-gray-500">
                                <input
                                    type="checkbox"
                                    name="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={handleInputChange}
                                    className="w-4 h-4 text-lime-yellow-500 bg-white border-gray-300 rounded focus:ring-lime-yellow-500 focus:ring-2"
                                />
                                <span className="ml-2">Remember me</span>
                            </label>
                            <Link href="/authentication/forgot-password" className="text-lime-yellow-500 hover:underline font-medium">
                                Forgot password?
                            </Link>
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-lime-yellow-500 hover:bg-lime-yellow-400 disabled:bg-gray-300 text-black font-bold py-3 px-5 rounded-xl transition-all duration-200 flex items-center justify-center text-base shadow-md focus:ring-2 focus:ring-lime-yellow-500"
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Signing in...
                                </>
                            ) : (
                                "Login"
                            )}
                        </button>
                    </form>
                    <div className="flex items-center gap-3 my-6 w-full">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-gray-400 text-xs">Or Login with</span>
                        <div className="flex-1 h-px bg-gray-200" />
                    </div>
                    <div className="flex gap-4 w-full justify-center mb-4">
                        <button
                            title="Login with Google"
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
                            title="Login with Facebook"
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
                            title="Login with Apple"
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
                    <div className="text-center text-gray-500 text-base mt-2 w-full">
                        Don&apos;t have an account?{' '}
                        <Link href="/authentication/signup" className="text-lime-yellow-500 hover:underline font-medium">
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
} 