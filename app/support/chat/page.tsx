"use client"

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";

interface ChatMessage {
    sender: 'user' | 'support';
    text: string;
}

export default function ChatWithSupportPage() {
    const router = useRouter();
    const [messages, setMessages] = useState<ChatMessage[]>([
        { sender: 'support', text: 'Hello! How can we help you today?' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    function handleSend(e?: React.FormEvent) {
        if (e) e.preventDefault();
        if (!input.trim()) return;
        setMessages((msgs) => [...msgs, { sender: 'user', text: input }]);
        setInput('');
        setTimeout(() => {
            setMessages((msgs) => [
                ...msgs,
                { sender: 'support', text: 'Thank you for your message! A support agent will reply soon.' }
            ]);
        }, 1200);
    }

    return (
        <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <div className="h-full w-full absolute inset-0 z-0"></div>
            <div className="relative z-10">
                <Navbar />
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-xl mx-auto flex flex-col h-[70vh]">
                        <button
                            onClick={() => router.back()}
                            className="inline-flex items-center bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black rounded-full px-4 py-2 transition-colors mb-6"
                        >
                            <ChevronLeft className="w-5 h-5 mr-2" /> Back
                        </button>
                        <h1 className="text-3xl font-bold text-white mb-6">Live Chat with Support</h1>
                        <div className="flex-1 overflow-y-auto bg-gray-900 border border-gray-800 rounded-lg p-4 mb-4">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`mb-2 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`px-4 py-2 rounded-lg max-w-[70%] text-sm ${msg.sender === 'user'
                                                ? 'bg-lime-yellow-600 text-black'
                                                : 'bg-gray-800 text-white'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        <form onSubmit={handleSend} className="flex gap-2">
                            <input
                                className="flex-1 p-3 bg-gray-900 border border-gray-800 rounded-lg focus:ring-2 focus:ring-lime-yellow-500 focus:border-transparent text-white placeholder-gray-400"
                                placeholder="Type your message..."
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                autoFocus
                            />
                            <button
                                type="submit"
                                className="bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black px-4 py-2 rounded-lg flex items-center justify-center"
                                aria-label="Send message"
                            >
                                <Send className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    );
} 