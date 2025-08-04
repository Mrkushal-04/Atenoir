"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Clock, ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function StoreLocatorPage() {
  const stores = [
    {
      name: "Atenoir Flagship Store - New York",
      address: "123 Fashion Ave, New York, NY 10001",
      phone: "(212) 555-1234",
      hours: "Mon-Sat: 10 AM - 8 PM, Sun: 11 AM - 6 PM",
    },
    {
      name: "Atenoir Boutique - Los Angeles",
      address: "456 Sunset Blvd, Los Angeles, CA 90069",
      phone: "(310) 555-5678",
      hours: "Mon-Sat: 10 AM - 7 PM, Sun: 12 PM - 5 PM",
    },
    {
      name: "Atenoir Pop-Up - London",
      address: "789 Oxford St, London W1D 1BS, UK",
      phone: "+44 20 7123 4567",
      hours: "Mon-Fri: 9 AM - 7 PM, Sat: 10 AM - 6 PM, Sun: Closed",
    },
  ]

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
              Store Locator
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find an Atenoir store near you and experience our collections firsthand.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Retail Locations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {stores.map((store, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 rounded-lg p-6 border border-white/20"
                  >
                    <h3 className="text-xl font-semibold text-lime-yellow-400 mb-3">{store.name}</h3>
                    <p className="flex items-start gap-2 text-gray-300 mb-2">
                      <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                      {store.address}
                    </p>
                    <p className="flex items-center gap-2 text-gray-300 mb-2">
                      <Phone className="w-5 h-5 flex-shrink-0" />
                      <a href={`tel:${store.phone}`} className="hover:underline">
                        {store.phone}
                      </a>
                    </p>
                    <p className="flex items-center gap-2 text-gray-300">
                      <Clock className="w-5 h-5 flex-shrink-0" />
                      {store.hours}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Interactive Map</h2>
              <div className="w-full h-96 bg-gray-800 rounded-md flex items-center justify-center text-gray-500 text-center text-xl">
                {/* Placeholder for an embedded map (e.g., Google Maps iframe) */}
                <p>Interactive map coming soon!</p>
              </div>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
