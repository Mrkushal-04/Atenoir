"use client"

import { Button } from "@/components/ui/button"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Lightbulb, Handshake, Leaf } from "lucide-react" // Icons for values

export default function AboutUsPage() {
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
              About Atenoir
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Crafting timeless elegance and sustainable fashion for the modern individual.
            </p>
          </motion.div>

          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center gap-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
            >
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-lg leading-relaxed text-gray-300">
                  At Atenoir, our mission is to redefine contemporary fashion by blending sophisticated design with
                  unwavering commitment to quality and sustainability. We strive to create garments that not only
                  enhance your style but also reflect your values, offering pieces that are both beautiful and
                  responsibly made.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Atenoir Mission"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-xl border border-white/10"
                />
              </div>
            </motion.div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 text-center shadow-lg"
              >
                <Lightbulb className="w-12 h-12 text-lime-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">
                  Continuously exploring new designs, materials, and technologies to push the boundaries of fashion.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 text-center shadow-lg"
              >
                <Handshake className="w-12 h-12 text-lime-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Integrity</h3>
                <p className="text-gray-300">
                  Upholding ethical practices, transparency, and fairness in all our operations, from sourcing to sales.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 text-center shadow-lg"
              >
                <Leaf className="w-12 h-12 text-lime-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Sustainability</h3>
                <p className="text-gray-300">
                  Committed to minimizing our environmental impact through eco-friendly materials and responsible
                  production.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Join the Atenoir Family
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
            >
              We invite you to explore our collections and become part of a community that values elegance, quality, and
              conscious living.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/shop">
                <Button size="lg" className="bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black px-8">
                  Shop Our Collections
                </Button>
              </Link>
            </motion.div>
          </section>
        </div>
        <Footer />
      </div>
    </main>
  )
}
