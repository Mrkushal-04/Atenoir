import type React from "react"
import Navbar from "@/components/navbar"

export default function CheckoutLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="min-h-screen bg-black/[0.96] antialiased">
            <Navbar />
            <main className="pt-20">
                {children}
            </main>
        </div>
    )
} 