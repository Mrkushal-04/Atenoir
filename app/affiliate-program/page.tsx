"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { DollarSign, Users, Handshake, ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function AffiliateProgramPage() {
  const router = useRouter()
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <div className="h-full w-full absolute inset-0 z-0"></div>
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-6 pt-8 pb-4">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black rounded-full px-4 py-2 transition-colors"
            aria-label="Go back"
          >
            <ChevronLeft className="w-5 h-5 mr-2" /> Back
          </button>
        </div>
        <div className="container mx-auto px-6 py-16 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
              Atenoir Affiliate Program
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partner with Atenoir and earn commissions by promoting timeless and sustainable fashion.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Why Join Our Program?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <DollarSign className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Competitive Commissions</h3>
                  <p className="text-gray-300">Earn attractive commission rates on every sale you drive.</p>
                </div>
                <div className="flex flex-col items-center">
                  <Users className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Brand Alignment</h3>
                  <p className="text-gray-300">
                    Partner with a brand committed to quality, elegance, and sustainability.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <Handshake className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Dedicated Support</h3>
                  <p className="text-gray-300">Receive personalized support and resources to maximize your success.</p>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Who Can Join?</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
                We welcome fashion bloggers, influencers, content creators, and websites that align with Atenoir's brand
                values and have an engaged audience interested in high-quality apparel.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 text-base">
                <li>Fashion & Lifestyle Bloggers</li>
                <li>Social Media Influencers (Instagram, TikTok, YouTube)</li>
                <li>Content Creators with a focus on style and sustainability</li>
                <li>Fashion Review Sites & Online Magazines</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">How to Apply</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
                Ready to become an Atenoir affiliate? Click the button below to fill out our application form. We'll
                review your application and get back to you shortly.
              </p>
              <Link href="/contact">
                {" "}
                {/* Directing to contact for application */}
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8">
                  Apply Now
                </Button>
              </Link>
              <p className="mt-8 text-gray-300">
                For any questions about the affiliate program, please contact us at{" "}
                <a href="mailto:affiliates@atenoir.com" className="text-purple-400 hover:underline">
                  affiliates@atenoir.com
                </a>
                .
              </p>
            </motion.section>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
