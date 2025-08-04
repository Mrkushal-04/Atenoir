"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Truck, Globe, PackageCheck, ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ShippingInformationPage() {
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
              Shipping Information
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Reliable delivery options to get your Atenoir pieces to you, wherever you are.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <PackageCheck className="text-lime-yellow-400" /> Order Processing
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                Orders are typically processed and shipped within{" "}
                <span className="font-semibold text-white">1-3 business days</span> (Monday-Friday, excluding holidays)
                after payment confirmation. You will receive a shipping confirmation email with tracking information
                once your order has been dispatched.
              </p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Truck className="text-lime-yellow-400" /> Domestic Shipping (within [Your Country])
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-3 text-lg text-gray-300">
                <li>
                  **Standard Shipping:** Estimated delivery within{" "}
                  <span className="font-semibold text-white">5-7 business days</span>. Free for orders over $150. For
                  orders under $150, a flat rate of $8 applies.
                </li>
                <li>
                  **Expedited Shipping:** Estimated delivery within{" "}
                  <span className="font-semibold text-white">2-3 business days</span>. Flat rate of $20.
                </li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="text-lime-yellow-400" /> International Shipping
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-3 text-lg text-gray-300">
                <li>
                  **Standard International Shipping:** Estimated delivery within{" "}
                  <span className="font-semibold text-white">7-21 business days</span>. Flat rate of $30.
                </li>
                <li>
                  **Expedited International Shipping:** Estimated delivery within{" "}
                  <span className="font-semibold text-white">3-7 business days</span>. Flat rate of $50.
                </li>
                <li>
                  **Customs and Duties:** International customers are responsible for any customs duties, taxes, or fees
                  imposed by their country's customs office. These charges are not included in the item price or
                  shipping cost.
                </li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Tracking Your Order</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Once your order ships, you will receive an email with a tracking number. You can use this number to
                track your package's journey on the carrier's website. Please note that delivery times are estimates and
                may vary due to unforeseen circumstances.
              </p>
            </motion.section>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
