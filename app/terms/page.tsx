"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

export default function TermsAndConditionsPage() {
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
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read our terms of service carefully before using our website.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg">
            <p className="text-lg leading-relaxed text-gray-300 mb-8">
              Welcome to Atenoir. These Terms and Conditions govern your use of our website and the purchase of products
              from us. By accessing or using our website, you agree to be bound by these Terms.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-lime-yellow-400 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-300">
                By using the Atenoir website, you agree to these Terms and Conditions, our Privacy Policy, and all
                applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from
                using or accessing this site.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-lime-yellow-400 mb-4">2. Use of Website</h2>
              <p className="text-gray-300">
                You agree to use the website only for lawful purposes and in a way that does not infringe the rights of,
                restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes
                harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive
                content, or disrupting the normal flow of dialogue within our website.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-lime-yellow-400 mb-4">3. Product Information</h2>
              <p className="text-gray-300">
                We strive to ensure that all information on our website, including product descriptions, pricing, and
                availability, is accurate and up-to-date. However, we do not guarantee the accuracy or completeness of
                any information and reserve the right to correct any errors or omissions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-lime-yellow-400 mb-4">4. Orders and Payments</h2>
              <p className="text-gray-300">
                All orders placed through our website are subject to acceptance and availability. We reserve the right
                to refuse or cancel any order for any reason. Payment must be received in full before an order is
                processed and shipped.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-lime-yellow-400 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-300">
                All content on this website, including text, graphics, logos, images, and software, is the property of
                Atenoir or its content suppliers and is protected by international copyright laws.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-lime-yellow-400 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-300">
                Atenoir will not be liable for any direct, indirect, incidental, special, or consequential damages
                arising from the use of, or inability to use, this website or the products purchased through it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-2xl font-bold text-lime-yellow-400 mb-4">7. Governing Law</h2>
              <p className="text-gray-300">
                These Terms and Conditions are governed by and construed in accordance with the laws of [Your
                Country/State], and you irrevocably submit to the exclusive jurisdiction of the courts in that State or
                location.
              </p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
