"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

export default function ContactUsPage() {
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
              Get in Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We'd love to hear from you! Reach out to us with any questions, feedback, or inquiries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:ring-lime-yellow-500 focus:border-lime-yellow-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:ring-lime-yellow-500 focus:border-lime-yellow-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    type="text"
                    placeholder="Subject of your inquiry"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:ring-lime-yellow-500 focus:border-lime-yellow-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Your message..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:ring-lime-yellow-500 focus:border-lime-yellow-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" /> Send Message
                </Button>
              </form>
            </motion.div>

            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <div className="space-y-4 text-lg text-gray-300">
                  <p className="flex items-center gap-3">
                    <Mail className="text-lime-yellow-400 w-6 h-6" />
                    Email:{" "}
                    <a href="mailto:support@atenoir.com" className="text-lime-yellow-400 hover:underline">
                      support@atenoir.com
                    </a>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="text-lime-yellow-400 w-6 h-6" />
                    Phone:{" "}
                    <a href="tel:+1234567890" className="text-lime-yellow-400 hover:underline">
                      +1 (234) 567-890
                    </a>
                  </p>
                  <p className="flex items-start gap-3">
                    <MapPin className="text-lime-yellow-400 w-6 h-6 mt-1" />
                    Address: 123 Fashion Lane, Suite 100, Metropolis, CA 90210
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold text-white mb-6">Find Us on the Map</h2>
                <div className="w-full h-64 bg-gray-800 rounded-md flex items-center justify-center text-gray-500 text-center">
                  {/* Placeholder for an embedded map (e.g., Google Maps iframe) */}
                  <p>Map integration coming soon!</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
