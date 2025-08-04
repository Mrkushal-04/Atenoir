"use client"

import React, { useState } from 'react';
import { ChevronLeft, Search, FileText, ShoppingBag, CreditCard, Truck, RefreshCw, Ruler, Heart, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

interface Article {
    id: string;
    title: string;
    category: string;
    description: string;
    icon: React.ComponentType<any>;
    content: string;
}

const articles: Article[] = [
    {
        id: 'sizing-guide',
        title: 'How to Find Your Perfect Size',
        category: 'Sizing & Fit',
        description: 'Complete guide to measuring yourself and finding the right fit',
        icon: Ruler,
        content: 'Learn how to measure your chest, waist, and hips to find your perfect size in our clothing.'
    },
    {
        id: 'order-tracking',
        title: 'Track Your Order',
        category: 'Orders & Shipping',
        description: 'How to track your order status and delivery',
        icon: Truck,
        content: 'Find your order number and track its progress from warehouse to your doorstep.'
    },
    {
        id: 'returns-policy',
        title: 'Returns & Exchanges',
        category: 'Returns & Exchanges',
        description: 'Our return policy and how to process returns',
        icon: RefreshCw,
        content: 'Learn about our 30-day return policy and how to initiate a return or exchange.'
    },
    {
        id: 'payment-methods',
        title: 'Accepted Payment Methods',
        category: 'Payment & Billing',
        description: 'All payment options we accept',
        icon: CreditCard,
        content: 'We accept major credit cards, PayPal, and other secure payment methods.'
    },
    {
        id: 'shipping-info',
        title: 'Shipping Information',
        category: 'Orders & Shipping',
        description: 'Shipping times, costs, and delivery options',
        icon: Truck,
        content: 'Standard shipping takes 3-5 business days. Express shipping available for faster delivery.'
    },
    {
        id: 'care-instructions',
        title: 'Care Instructions',
        category: 'Product Care',
        description: 'How to care for your Atenoir clothing',
        icon: Heart,
        content: 'Proper washing, drying, and storage instructions to maintain your clothing quality.'
    },
    {
        id: 'security-privacy',
        title: 'Security & Privacy',
        category: 'Account & Security',
        description: 'How we protect your information',
        icon: Shield,
        content: 'We use industry-standard encryption to protect your personal and payment information.'
    },
    {
        id: 'account-management',
        title: 'Managing Your Account',
        category: 'Account & Security',
        description: 'Update profile, change password, and account settings',
        icon: FileText,
        content: 'Learn how to update your profile information, change your password, and manage account settings.'
    }
];

const categories = [
    { name: 'Sizing & Fit', icon: Ruler },
    { name: 'Orders & Shipping', icon: Truck },
    { name: 'Returns & Exchanges', icon: RefreshCw },
    { name: 'Payment & Billing', icon: CreditCard },
    { name: 'Product Care', icon: Heart },
    { name: 'Account & Security', icon: Shield }
];

export default function KnowledgeBasePage() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const filteredArticles = articles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className="h-full w-full absolute inset-0 z-0"></div>
            <div className="relative z-10">
                <Navbar />
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-4xl mx-auto">
                        <button
                            onClick={() => router.back()}
                            className="inline-flex items-center bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black rounded-full px-4 py-2 transition-colors mb-6"
                        >
                            <ChevronLeft className="w-5 h-5 mr-2" /> Back
                        </button>

                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-white mb-4">Knowledge Base</h1>
                            <p className="text-xl text-gray-400 mb-8">
                                Find answers to common questions and helpful guides
                            </p>

                            {/* Search Bar */}
                            <div className="relative max-w-md mx-auto mb-8">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-lime-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                                />
                            </div>

                            {/* Category Filters */}
                            <div className="flex flex-wrap justify-center gap-2 mb-8">
                                <button
                                    onClick={() => setSelectedCategory('all')}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === 'all'
                                            ? 'bg-lime-yellow-600 text-black'
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                        }`}
                                >
                                    All Categories
                                </button>
                                {categories.map((category) => {
                                    const IconComponent = category.icon;
                                    return (
                                        <button
                                            key={category.name}
                                            onClick={() => setSelectedCategory(category.name)}
                                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${selectedCategory === category.name
                                                    ? 'bg-lime-yellow-600 text-black'
                                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                                }`}
                                        >
                                            <IconComponent className="w-4 h-4" />
                                            {category.name}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Articles Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredArticles.map((article) => {
                                const IconComponent = article.icon;
                                return (
                                    <div
                                        key={article.id}
                                        className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-lime-yellow-500 transition-colors cursor-pointer group"
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="p-3 bg-lime-yellow-600 rounded-lg">
                                                <IconComponent className="w-6 h-6 text-black" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-white group-hover:text-lime-yellow-400 transition-colors mb-2">
                                                    {article.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm mb-3">
                                                    {article.description}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                                                        {article.category}
                                                    </span>
                                                    <button className="text-lime-yellow-500 hover:text-lime-yellow-400 text-sm font-medium">
                                                        Read More →
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {filteredArticles.length === 0 && (
                            <div className="text-center py-12">
                                <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
                                <p className="text-gray-400">
                                    Try adjusting your search terms or category filter
                                </p>
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
} 