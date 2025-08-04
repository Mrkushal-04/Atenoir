"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { motion } from "framer-motion"

export default function FAQsPage() {
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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find quick answers to common questions about Atenoir products, orders, and policies.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="relative mb-8"
            >
              <Input
                type="text"
                placeholder="Search FAQs..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 border-white/20 text-white placeholder:text-gray-500 focus:ring-lime-yellow-500 focus:border-lime-yellow-500"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
            </motion.div>

            <Accordion type="single" collapsible className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <AccordionItem value="item-1" className="border-b border-white/10">
                  <AccordionTrigger className="text-lg text-lime-yellow-400 hover:no-underline py-4">
                    What materials does Atenoir use?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base pb-4">
                    Atenoir prioritizes sustainable and high-quality materials, including organic cotton, recycled
                    polyester, Tencel, and ethically sourced wool. We are constantly researching new eco-friendly
                    fabrics to ensure both luxury and responsibility.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <AccordionItem value="item-2" className="border-b border-white/10">
                  <AccordionTrigger className="text-lg text-lime-yellow-400 hover:no-underline py-4">
                    How do I care for my Atenoir garments?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base pb-4">
                    Each garment comes with specific care instructions on its label. Generally, we recommend gentle
                    machine wash with cold water and air drying to preserve the quality and extend the life of your
                    clothing. Avoid harsh chemicals and high heat.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <AccordionItem value="item-3" className="border-b border-white/10">
                  <AccordionTrigger className="text-lg text-lime-yellow-400 hover:no-underline py-4">
                    What is your return policy?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base pb-4">
                    We offer free returns and exchanges within 30 days of purchase, provided the items are unworn,
                    unwashed, and have all original tags attached. Please visit our{" "}
                    <Link href="/returns-exchanges" className="text-lime-yellow-400 hover:underline">
                      Returns & Exchanges
                    </Link>{" "}
                    page for more detailed information and instructions.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <AccordionItem value="item-4" className="border-b border-white/10">
                  <AccordionTrigger className="text-lg text-lime-yellow-400 hover:no-underline py-4">
                    Do you ship internationally?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base pb-4">
                    Yes, Atenoir ships worldwide! Shipping costs and delivery times vary depending on your location and
                    chosen shipping method. You can find more information on our{" "}
                    <Link href="/shipping-information" className="text-lime-yellow-400 hover:underline">
                      Shipping Information
                    </Link>{" "}
                    page.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg text-lime-yellow-400 hover:no-underline py-4">
                    How can I find my size?
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-base pb-4">
                    Please refer to our comprehensive{" "}
                    <Link href="/size-guide" className="text-lime-yellow-400 hover:underline">
                      Size Guide
                    </Link>{" "}
                    available on each product page and also linked in the footer. It provides detailed measurements and
                    fitting tips to help you find your perfect fit.
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            </Accordion>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
