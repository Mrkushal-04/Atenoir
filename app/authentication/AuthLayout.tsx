import React from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";

interface AuthLayoutProps {
    headline: string;
    subtext: string;
    illustration: string;
    children: React.ReactNode;
    leftPanelClassName?: string;
}

export default function AuthLayout({ headline, subtext, illustration, children, leftPanelClassName }: AuthLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col bg-black/[0.96]">
            <Navbar />
            <div className="flex-1 flex flex-col md:flex-row items-center justify-center max-w-4xl mx-auto w-full h-[calc(100vh-5rem)] pt-2">
                {/* Left: Lime Yellow Gradient Panel */}
                <div className={`flex-1 flex flex-col justify-center items-center px-8 py-0 h-full rounded-3xl md:max-w-[420px] w-full shadow-lg border border-white/10 ${leftPanelClassName ? leftPanelClassName : "bg-gradient-to-br from-lime-yellow-400 via-lime-yellow-500 to-lime-yellow-300"}`}>
                    <div className="w-full max-w-xs flex flex-col justify-center items-center mt-16 md:mt-24">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 leading-tight">{headline}</h2>
                        <p className="text-black/80 mb-8 text-base font-medium">{subtext}</p>
                    </div>
                    <div className="w-full flex justify-center mt-8">
                        <Image
                            src={illustration}
                            alt="Auth illustration"
                            width={300}
                            height={300}
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
                {/* Right: Content */}
                {children}
            </div>
        </div>
    );
} 