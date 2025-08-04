"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion } from "framer-motion"
import { Shirt, Gem, Palette, ChevronLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function StyleGuidePage() {
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
              Atenoir Style Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock your personal style with our expert tips and curated inspirations.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg flex flex-col md:flex-row items-center gap-8"
            >
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Capsule Wardrobe"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md border border-white/10 object-cover w-full h-auto"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-3">
                  <Shirt className="text-lime-yellow-400" /> Building a Capsule Wardrobe
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Discover the art of creating a versatile and timeless capsule wardrobe with Atenoir essentials. Focus
                  on high-quality, foundational pieces that can be effortlessly mixed and matched for any occasion.
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 text-base">
                  <li>Invest in classic, durable basics.</li>
                  <li>Choose a cohesive color palette.</li>
                  <li>Incorporate versatile layering pieces.</li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg flex flex-col md:flex-row-reverse items-center gap-8"
            >
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Accessorizing"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md border border-white/10 object-cover w-full h-auto"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-right">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center md:justify-end gap-3">
                  Accessorizing Your Look <Gem className="text-lime-yellow-400" />
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Elevate any outfit with the right accessories. Learn how to choose pieces that complement your Atenoir
                  garments and add a touch of personal flair, from minimalist jewelry to statement scarves.
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 text-base">
                  <li>Use belts to define your silhouette.</li>
                  <li>Add scarves for color and texture.</li>
                  <li>Choose jewelry that enhances, not overpowers.</li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg flex flex-col md:flex-row items-center gap-8"
            >
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Color Palette"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md border border-white/10 object-cover w-full h-auto"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-3">
                  <Palette className="text-lime-yellow-400" /> Mastering Color Palettes
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Understand how to build a harmonious color palette for your wardrobe. From classic neutrals to pops of
                  seasonal color, learn to combine shades that flatter your complexion and express your mood.
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 text-base">
                  <li>Start with a base of neutrals.</li>
                  <li>Introduce accent colors strategically.</li>
                  <li>Consider seasonal color trends.</li>
                </ul>
              </div>
            </motion.section>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need More Style Advice?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Our team of styling experts is here to help you curate your perfect Atenoir wardrobe.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black px-8">
                Contact a Stylist
              </Button>
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
