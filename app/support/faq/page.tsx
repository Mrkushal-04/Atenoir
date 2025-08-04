"use client"

import React from 'react';
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

const faqs = [
    {
        question: 'How do I submit a support ticket?',
        answer: 'Go to the Submit a Ticket page and fill out the form with your issue details.'
    },
    {
        question: 'How can I chat with support?',
        answer: 'Visit the Chat with Support page for live chat options.'
    },
    {
        question: 'How do I track my ticket status?',
        answer: 'Use the Track Ticket Status page and enter your ticket number.'
    },
    {
        question: 'How do I schedule a support call?',
        answer: 'Go to the Call Support Scheduler page and select your preferred date and time.'
    },
    {
        question: 'What support options are available?',
        answer: 'You can submit a ticket, chat live, track your ticket, or schedule a call.'
    }
];

export default function FAQPage() {
    const router = useRouter();

    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className="h-full w-full absolute inset-0 z-0"></div>
            <div className="relative z-10">
                <Navbar />
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-xl mx-auto">
                        <button
                            onClick={() => router.back()}
                            className="inline-flex items-center bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black rounded-full px-4 py-2 transition-colors mb-6"
                        >
                            <ChevronLeft className="w-5 h-5 mr-2" /> Back
                        </button>
                        <h1 className="text-3xl font-bold text-white mb-6">Live Support FAQ</h1>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="border-b border-gray-800 pb-4">
                                    <h2 className="font-semibold text-white mb-2">{faq.question}</h2>
                                    <p className="text-gray-300">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
} 