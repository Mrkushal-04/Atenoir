"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Sparkles, Shirt, ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function OurStoryPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-yellow-400 to-light-gold-600 mb-4">
              Our Story
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The journey of Atenoir: From a vision to a legacy of timeless style.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-16">
            <motion.section
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col md:flex-row items-center gap-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Calendar className="text-lime-yellow-400" /> The Genesis (2018)
                </h2>
                <p className="text-lg leading-relaxed text-gray-300">
                  Atenoir was born from a shared passion among a small group of designers and textile enthusiasts. We
                  envisioned a brand that would challenge fast fashion by focusing on enduring quality, sophisticated
                  design, and ethical production. Our journey began in a modest studio, fueled by a desire to create
                  clothing that truly mattered.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Genesis of Atenoir"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl border border-white/10"
                />
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col md:flex-row-reverse items-center gap-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Sparkles className="text-lime-yellow-400" /> Crafting Excellence (2020)
                </h2>
                <p className="text-lg leading-relaxed text-gray-300">
                  The early years were dedicated to meticulous research and development. We experimented with a myriad
                  of sustainable fabrics, perfected our tailoring techniques, and established partnerships with ethical
                  manufacturers who shared our vision. Every stitch, every seam, and every detail was refined to ensure
                  unparalleled comfort and durability.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Crafting Excellence"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl border border-white/10"
                />
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col md:flex-row items-center gap-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <Shirt className="text-lime-yellow-400" /> A Global Presence (Present)
                </h2>
                <p className="text-lg leading-relaxed text-gray-300">
                  Today, Atenoir has grown into a recognized name in conscious fashion, cherished by individuals who
                  appreciate quality and timeless style. We continue to innovate, expand our sustainable practices, and
                  connect with a global community that believes in fashion with purpose. Our story is still being
                  written, and we invite you to be a part of it.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Global Presence"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl border border-white/10"
                />
              </div>
            </motion.section>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
