"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your data.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg">
            <p className="text-lg leading-relaxed text-gray-300 mb-8">
              At Atenoir, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our website atenoir.com, including any other media
              form, media channel, mobile website, or mobile application related or connected thereto (collectively, the
              "Site"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy
              policy, please do not access the Site.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-lime-yellow-400 mb-4">1. Collection of Your Information</h2>
              <p className="text-gray-300 mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the Site
                includes:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                <li>
                  **Personal Data:** Personally identifiable information, such as your name, shipping address, email
                  address, and telephone number, and demographic information, such as your age, gender, hometown, and
                  interests, that you voluntarily give to us when you register with the Site or when you choose to
                  participate in various activities related to the Site, such as online chat and message boards.
                </li>
                <li>
                  **Derivative Data:** Information our servers automatically collect when you access the Site, such as
                  your IP address, your browser type, your operating system, your access times, and the pages you have
                  viewed directly before and after accessing the Site.
                </li>
                <li>
                  **Financial Data:** Financial information, such as data related to your payment method (e.g., valid
                  credit card number, card brand, expiration date) that we may collect when you purchase, order, return,
                  exchange, or request information about our services from the Site.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-lime-yellow-400 mb-4">2. Use of Your Information</h2>
              <p className="text-gray-300 mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized
                experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                <li>Create and manage your account.</li>
                <li>Process your orders and payments.</li>
                <li>Deliver products and services.</li>
                <li>Communicate with you about your orders, products, services, and promotional offers.</li>
                <li>Improve our website, products, and services.</li>
                <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-lime-yellow-400 mb-4">3. Disclosure of Your Information</h2>
              <p className="text-gray-300 mb-4">
                We may share information we have collected about you in certain situations. Your information may be
                disclosed as follows:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300">
                <li>
                  **By Law or to Protect Rights:** If we believe the release of information about you is necessary to
                  respond to legal process, to investigate or remedy potential violations of our policies, or to protect
                  the rights, property, or safety of others, we may share your information as permitted or required by
                  any applicable law, rule, or regulation.
                </li>
                <li>
                  **Third-Party Service Providers:** We may share your information with third parties that perform
                  services for us or on our behalf, including payment processing, data analysis, email delivery, hosting
                  services, customer service, and marketing assistance.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-lime-yellow-400 mb-4">4. Security of Your Information</h2>
              <p className="text-gray-300">
                We use administrative, technical, and physical security measures to help protect your personal
                information. While we have taken reasonable steps to secure the personal information you provide to us,
                please be aware that despite our efforts, no security measures are perfect or impenetrable, and no
                method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-lime-yellow-400 mb-4">5. Contact Us</h2>
              <p className="text-gray-300">
                If you have questions or comments about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:privacy@atenoir.com" className="text-lime-yellow-400 hover:underline">
                  privacy@atenoir.com
                </a>
              </p>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
