"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Leaf, Recycle, Factory, HeartHandshake, ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SustainabilityPage() {
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
              Our Commitment to Sustainability
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fashion with a conscience: Crafting beautiful garments responsibly for a better planet.
            </p>
          </motion.div>

          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">Our Holistic Approach</h2>
              <p className="text-lg leading-relaxed text-gray-300 max-w-3xl mx-auto">
                At Atenoir, sustainability isn't just a buzzword; it's woven into the fabric of our brand. We are
                dedicated to minimizing our environmental footprint and ensuring ethical practices across our entire
                value chain, from design to delivery.
              </p>
            </motion.div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">Key Pillars of Our Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 text-center shadow-lg"
              >
                <Leaf className="w-12 h-12 text-lime-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Sustainable Materials</h3>
                <p className="text-gray-300">
                  Prioritizing organic, recycled, and innovative eco-friendly fabrics that reduce environmental impact.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 text-center shadow-lg"
              >
                <Recycle className="w-12 h-12 text-lime-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Circular Economy</h3>
                <p className="text-gray-300">
                  Designing for longevity and exploring initiatives for recycling and repurposing garments.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 text-center shadow-lg"
              >
                <Factory className="w-12 h-12 text-lime-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Responsible Production</h3>
                <p className="text-gray-300">
                  Minimizing waste, water, and energy consumption in our manufacturing processes.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 1.0 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-6 text-center shadow-lg"
              >
                <HeartHandshake className="w-12 h-12 text-lime-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Ethical Labor</h3>
                <p className="text-gray-300">
                  Ensuring fair wages, safe working conditions, and human rights across our supply chain.
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
              Our Journey Towards a Greener Future
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
            >
              We are continuously learning and evolving our practices to become a more sustainable brand. Your support
              helps us make a positive impact on the fashion industry and the planet.
            </motion.p>
          </section>
        </div>
        <Footer />
      </div>
    </main>
  )
}
