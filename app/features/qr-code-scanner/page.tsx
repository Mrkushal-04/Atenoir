import React from 'react';
export default function QRCodeScannerPage() {
    return (
        <main className="min-h-screen bg-black/[0.96] p-8 text-white flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-4">QR Code Scanner</h1>
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-8 flex flex-col items-center">
                <p className="mb-4">QR code scanning coming soon!</p>
                <div className="w-32 h-32 bg-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500">[QR]</span>
                </div>
            </div>
        </main>
    );
} 