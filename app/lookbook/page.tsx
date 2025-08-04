"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { motion } from "framer-motion"
import { GalleryHorizontal, ArrowRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function LookbookPage() {
  const router = useRouter()
  const lookbookCollections = [
    {
      title: "Spring/Summer 2025: Ethereal Bloom",
      description: "Lightweight fabrics and vibrant hues inspired by nature's awakening.",
      image: "/placeholder.svg?height=400&width=600",
      link: "#", // Placeholder for a specific collection page
    },
    {
      title: "Autumn/Winter 2024: Urban Serenity",
      description: "Cozy textures and muted tones for sophisticated city living.",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
    {
      title: "Resort 2024: Coastal Breeze",
      description: "Effortless styles and breathable materials for sun-drenched escapes.",
      image: "/placeholder.svg?height=400&width=600",
      link: "#",
    },
  ]

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
              Atenoir Lookbook
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Immerse yourself in our curated collections and discover the inspiration behind Atenoir's designs.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            {lookbookCollections.map((collection, index) => (
              <motion.section
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg flex flex-col md:flex-row items-center gap-8"
              >
                <div className="md:w-1/2">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md border border-white/10 object-cover w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-3">
                    <GalleryHorizontal className="text-lime-yellow-400" /> {collection.title}
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">{collection.description}</p>
                  <Link href={collection.link}>
                    <Button
                      variant="outline"
                      className="text-white border-lime-yellow-500 hover:bg-lime-yellow-500/20 flex items-center gap-2 mx-auto md:mx-0"
                    >
                      View Collection <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </motion.section>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Discover Your Signature Style</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Our lookbooks are designed to inspire and guide you in building a wardrobe that reflects your unique
              personality and values.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black px-8">
                Shop All Products
              </Button>
            </Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
