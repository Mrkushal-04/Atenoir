"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { RefreshCw, DollarSign, Package } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

export default function ReturnsExchangesPage() {
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
              Returns & Exchanges
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your satisfaction is our priority. Learn about our easy return and exchange process.
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
                <RefreshCw className="text-lime-yellow-400" /> Our Return Policy
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-3 text-lg text-gray-300">
                <li>
                  Items can be returned within <span className="font-semibold text-white">30 days</span> of the delivery
                  date.
                </li>
                <li>
                  All returned items must be{" "}
                  <span className="font-semibold text-white">
                    unworn, unwashed, and have all original tags attached
                  </span>
                  .
                </li>
                <li>Returns must be accompanied by the original packing slip or proof of purchase.</li>
                <li>
                  Refunds will be issued to the original payment method within 7-10 business days after we receive and
                  inspect the returned item.
                </li>
                <li>Original shipping charges are non-refundable.</li>
              </ul>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <DollarSign className="text-lime-yellow-400" /> Exchange Policy
              </h2>
              <ul className="list-disc list-inside ml-4 space-y-3 text-lg text-gray-300">
                <li>
                  Exchanges are available for the same item in a different size or color, subject to availability.
                </li>
                <li>If the desired item is unavailable, a refund will be issued according to our return policy.</li>
                <li>Please contact our customer service to initiate an exchange for a seamless process.</li>
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
                <Package className="text-lime-yellow-400" /> How to Initiate a Return or Exchange
              </h2>
              <ol className="list-decimal list-inside ml-4 space-y-3 text-lg text-gray-300">
                <li>
                  **Contact Customer Service:** Email us at{" "}
                  <a href="mailto:returns@atenoir.com" className="text-lime-yellow-400 hover:underline">
                    returns@atenoir.com
                  </a>{" "}
                  with your order number and reason for return/exchange.
                </li>
                <li>
                  **Receive Instructions:** Our team will provide you with a return authorization number (RMA) and
                  detailed shipping instructions.
                </li>
                <li>**Package Your Item:** Securely package your item(s) with the original packing slip.</li>
                <li>
                  **Ship Your Item:** Send your package to the address provided by our customer service team. We
                  recommend using a trackable shipping service for your peace of mind.
                </li>
              </ol>
              <p className="mt-8 text-center text-gray-300">
                For any further questions regarding returns or exchanges, please do not hesitate to{" "}
                <Link href="/contact" className="text-lime-yellow-400 hover:underline">
                  contact us
                </Link>
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
