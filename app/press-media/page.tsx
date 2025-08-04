"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Newspaper, Download, Mail, ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function PressMediaPage() {
  const router = useRouter()
  const pressReleases = [
    {
      title: "Atenoir Unveils Spring/Summer 2025 Collection",
      date: "March 15, 2025",
      description:
        "Atenoir announces its latest collection, focusing on lightweight, sustainable fabrics and vibrant colors inspired by nature.",
      link: "#", // Placeholder link
    },
    {
      title: "Atenoir Partners with Eco-Textile Innovators",
      date: "January 20, 2025",
      description:
        "Atenoir strengthens its commitment to sustainability through a new partnership with leading eco-textile research firm.",
      link: "#", // Placeholder link
    },
    {
      title: "Atenoir Recognized for Ethical Production Practices",
      date: "November 10, 2024",
      description:
        "Leading fashion industry body awards Atenoir for its commitment to fair labor and transparent supply chain.",
      link: "#", // Placeholder link
    },
  ]

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
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-yellow-400 to-light-gold-600 mb-4">
              Press & Media
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your go-to resource for Atenoir's latest news, brand assets, and media inquiries.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Newspaper className="text-lime-yellow-400" /> Latest Press Releases
              </h2>
              <div className="space-y-6">
                {pressReleases.map((release, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 rounded-lg p-6 border border-white/20"
                  >
                    <h3 className="text-xl font-semibold text-lime-yellow-400 mb-1">{release.title}</h3>
                    <p className="text-gray-300 text-sm mb-2">Date: {release.date}</p>
                    <p className="text-gray-400 text-base">{release.description}</p>
                    <Link href={release.link}>
                      <Button
                        variant="outline"
                        className="mt-4 text-white border-lime-yellow-500 hover:bg-lime-yellow-500/20"
                      >
                        Read More
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                <Download className="text-lime-yellow-400" /> Media Kit & Assets
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
                Download our comprehensive media kit, including high-resolution logos, brand guidelines, and product
                imagery for your publications.
              </p>
              <Button className="bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black">Download Media Kit</Button>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                <Mail className="text-lime-yellow-400" /> Media Inquiries
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-4">
                For all press and media-related questions, interview requests, or collaborations, please contact our PR
                team directly:
              </p>
              <p className="text-xl font-semibold text-lime-yellow-400">
                Email:{" "}
                <a href="mailto:press@atenoir.com" className="hover:underline">
                  press@atenoir.com
                </a>
              </p>
              <p className="text-xl font-semibold text-lime-yellow-400 mt-2">Phone: +1 (987) 654-3210</p>
            </motion.section>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
