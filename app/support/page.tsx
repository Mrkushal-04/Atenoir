"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, MessageSquare, Phone, Ticket, Search, Clock, Users, HelpCircle, FileText, Calendar } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function SupportPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter()

    const supportOptions = [
        {
            id: "submit-ticket",
            title: "Submit a Ticket",
            description: "Create a support ticket for complex issues that need detailed attention",
            icon: Ticket,
            color: "from-blue-500 to-cyan-500",
            features: ["24/7 Support", "Detailed Tracking", "Priority Handling"],
            href: "/support/submit-ticket",
            estimatedTime: "2-3 minutes"
        },
        {
            id: "live-chat",
            title: "Live Chat Support",
            description: "Get instant help from our support team via real-time chat",
            icon: MessageSquare,
            color: "from-green-500 to-emerald-500",
            features: ["Instant Response", "Real-time Chat", "File Sharing"],
            href: "/support/chat",
            estimatedTime: "Immediate"
        },
        {
            id: "track-ticket",
            title: "Track Ticket Status",
            description: "Check the status of your existing support tickets",
            icon: Search,
            color: "from-purple-500 to-pink-500",
            features: ["Real-time Updates", "Status History", "Response Tracking"],
            href: "/support/track-ticket",
            estimatedTime: "1 minute"
        },
        {
            id: "call-support",
            title: "Schedule a Call",
            description: "Book a phone call with our support specialists",
            icon: Phone,
            color: "from-orange-500 to-red-500",
            features: ["Personalized Support", "Screen Sharing", "Follow-up"],
            href: "/support/call-scheduler",
            estimatedTime: "5-10 minutes"
        },
        {
            id: "faq",
            title: "Live Support FAQ",
            description: "Find quick answers to common questions and issues",
            icon: HelpCircle,
            color: "from-indigo-500 to-purple-500",
            features: ["Instant Answers", "Searchable Database", "Video Guides"],
            href: "/support/faq",
            estimatedTime: "Immediate"
        },
        {
            id: "knowledge-base",
            title: "Knowledge Base",
            description: "Browse comprehensive guides and tutorials",
            icon: FileText,
            color: "from-teal-500 to-blue-500",
            features: ["Step-by-step Guides", "Video Tutorials", "Troubleshooting"],
            href: "/support/knowledge-base",
            estimatedTime: "Self-paced"
        }
    ]

    const quickActions = [
        {
            title: "Order Status",
            description: "Check your order status and tracking information",
            icon: Clock,
            href: "/orders"
        },
        {
            title: "Returns & Exchanges",
            description: "Learn about our return policy and process",
            icon: Users,
            href: "/returns-exchanges"
        },
        {
            title: "Size Guide",
            description: "Find your perfect fit with our size guide",
            icon: FileText,
            href: "/size-guide"
        },
        {
            title: "Shipping Information",
            description: "Get details about shipping times and costs",
            icon: Calendar,
            href: "/shipping-information"
        }
    ]

    const filteredOptions = supportOptions.filter(option =>
        option.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        option.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className="h-full w-full absolute inset-0 z-0"></div>
            <div className="relative z-10">
                <Navbar />
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="mb-12">
                            <button
                                onClick={() => router.back()}
                                className="inline-flex items-center bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black rounded-full px-4 py-2 transition-colors mb-6"
                            >
                                <ChevronLeft className="w-5 h-5 mr-2" /> Back
                            </button>
                            <div className="text-center">
                                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                                    Customer Support
                                </h1>
                                <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                                    We're here to help! Choose the best way to get the support you need.
                                </p>
                                <div className="flex flex-wrap justify-center gap-4">
                                    <Badge className="bg-lime-yellow-600 text-black px-4 py-2">24/7 Support</Badge>
                                    <Badge className="bg-lime-yellow-600 text-black px-4 py-2">Live Chat</Badge>
                                    <Badge className="bg-lime-yellow-600 text-black px-4 py-2">Phone Support</Badge>
                                    <Badge className="bg-lime-yellow-600 text-black px-4 py-2">Ticket System</Badge>
                                </div>
                            </div>
                        </div>

                        {/* Search */}
                        <div className="mb-8">
                            <div className="relative max-w-md mx-auto">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search support options..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-lime-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                                />
                            </div>
                        </div>

                        {/* Support Options Grid */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6">How Can We Help You?</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filteredOptions.map((option) => {
                                    const IconComponent = option.icon
                                    return (
                                        <Link key={option.id} href={option.href}>
                                            <Card className="bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-all duration-300 cursor-pointer group h-full">
                                                <CardHeader>
                                                    <div className="flex items-center space-x-3 mb-4">
                                                        <div className={`p-3 rounded-lg bg-gradient-to-r ${option.color}`}>
                                                            <IconComponent className="w-6 h-6 text-white" />
                                                        </div>
                                                        <CardTitle className="text-white group-hover:text-lime-yellow-400 transition-colors">
                                                            {option.title}
                                                        </CardTitle>
                                                    </div>
                                                </CardHeader>
                                                <CardContent>
                                                    <p className="text-gray-400 mb-4">{option.description}</p>
                                                    <div className="space-y-2 mb-4">
                                                        {option.features.map((feature, index) => (
                                                            <div key={index} className="flex items-center space-x-2">
                                                                <div className="w-1.5 h-1.5 bg-lime-yellow-500 rounded-full"></div>
                                                                <span className="text-sm text-gray-300">{feature}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xs text-gray-500">
                                                            Est. time: {option.estimatedTime}
                                                        </span>
                                                        <Button
                                                            variant="outline"
                                                            className="border-lime-yellow-500 text-lime-yellow-500 hover:bg-lime-yellow-500 hover:text-black transition-all"
                                                        >
                                                            Get Started
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-white mb-6">Quick Actions</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {quickActions.map((action) => {
                                    const IconComponent = action.icon
                                    return (
                                        <Link key={action.title} href={action.href} className="group">
                                            <Card className="bg-gray-900 border-gray-800 hover:border-lime-yellow-500 transition-all duration-300 cursor-pointer h-full">
                                                <CardContent className="p-6 text-center">
                                                    <div className="w-12 h-12 bg-gradient-to-br from-lime-yellow-600 to-lime-yellow-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                                                        <IconComponent className="w-6 h-6 text-black" />
                                                    </div>
                                                    <h3 className="font-bold text-white group-hover:text-lime-yellow-400 transition-colors mb-2">
                                                        {action.title}
                                                    </h3>
                                                    <p className="text-gray-400 text-sm">
                                                        {action.description}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Contact Information */}
                        <div className="bg-gradient-to-r from-lime-yellow-600 to-lime-yellow-700 rounded-xl p-8 text-center">
                            <h2 className="text-3xl font-bold text-black mb-4">Need Immediate Help?</h2>
                            <p className="text-black/80 mb-6 text-lg">
                                Our support team is available 24/7 to assist you with any questions or concerns.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/support/chat">
                                    <Button className="bg-black text-lime-yellow-500 hover:bg-gray-800">
                                        Start Live Chat
                                    </Button>
                                </Link>
                                <Link href="/support/call-scheduler">
                                    <Button variant="outline" className="border-black text-black hover:bg-black hover:text-lime-yellow-500">
                                        Schedule a Call
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
} 