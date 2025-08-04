"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Crown, Heart, Sun, Snowflake, Coffee, Briefcase, Clock, Star, Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { ChevronLeft } from "lucide-react"

const collections = [
  {
    id: "summer",
    title: "Summer Collection",
    subtitle: "Ethereal Lightness",
    description: "Breathable fabrics and sun-kissed hues for the perfect summer wardrobe.",
    image: "/images/collection-rack-1.jpeg",
    icon: <Sun className="h-6 w-6" />,
    color: "from-amber-500 to-orange-500",
    href: "/collections/summer",
  },
  {
    id: "winter",
    title: "Winter Collection",
    subtitle: "Sophisticated Warmth",
    description: "Luxurious materials and expert tailoring for the colder months.",
    image: "/images/collection-rack-2.jpeg",
    icon: <Snowflake className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-500",
    href: "/collections/winter",
  },
  {
    id: "wedding",
    title: "Wedding Collection",
    subtitle: "Eternal Elegance",
    description: "Exquisite pieces designed to make your special day unforgettable.",
    image: "/images/collection-organized.jpeg",
    icon: <Heart className="h-6 w-6" />,
    color: "from-rose-500 to-pink-500",
    href: "/collections/wedding",
  },
  {
    id: "casual",
    title: "Casual Wear",
    subtitle: "Effortless Sophistication",
    description: "The perfect balance between comfort and style for everyday wear.",
    image: "/images/collection-grid.jpeg",
    icon: <Coffee className="h-6 w-6" />,
    color: "from-emerald-500 to-teal-500",
    href: "/collections/casual",
  },
  {
    id: "formal",
    title: "Formal Wear",
    subtitle: "Commanding Presence",
    description: "Precision-tailored pieces that embody confidence and executive presence.",
    image: "/images/atenoir-boutique.jpeg",
    icon: <Briefcase className="h-6 w-6" />,
    color: "from-indigo-500 to-purple-500",
    href: "/collections/formal",
  },
  {
    id: "heritage",
    title: "Heritage Collection",
    subtitle: "Timeless Legacy",
    description: "Celebrating decades of craftsmanship and design excellence.",
    image: "/images/atenoir-store-display.jpeg",
    icon: <Clock className="h-6 w-6" />,
    color: "from-amber-600 to-yellow-600",
    href: "/collections/heritage",
  },
  {
    id: "signature",
    title: "Signature Line",
    subtitle: "Distinctive Identity",
    description: "Our most coveted pieces that define the ATENOIR aesthetic.",
    image: "/images/atenoir-rack-gold.jpeg",
    icon: <Sparkles className="h-6 w-6" />,
    color: "from-yellow-500 to-amber-500",
    href: "/collections/signature",
  },
  {
    id: "celebrity",
    title: "Celebrity Styles",
    subtitle: "Red Carpet Ready",
    description: "Exclusive pieces worn by icons and tastemakers worldwide.",
    image: "/images/atenoir-rack-black.jpeg",
    icon: <Star className="h-6 w-6" />,
    color: "from-purple-500 to-pink-500",
    href: "/collections/celebrity",
  },
  {
    id: "limited",
    title: "Limited Time Drops",
    subtitle: "Exclusive Moments",
    description: "Rare pieces available for a fleeting moment in time.",
    image: "/images/collection-rack-1.jpeg",
    icon: <Zap className="h-6 w-6" />,
    color: "from-red-500 to-pink-500",
    href: "/collections/limited",
  },
]

export default function CollectionsPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-black text-white ">
      <div className="container mx-auto px-6 pt-8 pb-4">
        <button
          onClick={() => router.back()}
          className="inline-flex items-center bg-lime-yellow-600 hover:bg-lime-yellow-700 text-black rounded-full px-4 py-2 transition-colors"
          aria-label="Go back"
        >
          <ChevronLeft className="w-5 h-5 mr-2" /> Back
        </button>
      </div>
      {/* Hero Section */}
      <section className="relative  flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center mb-6"
          >
            <Crown className="h-10 w-10 text-lime-yellow mr-4" />
            <span className="text-lime-yellow font-medium text-xl">Collections & Campaigns</span>
          </motion.div>

          <motion.h1
            className="text-7xl md:text-8xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Curated
            <span className="block text-lime-yellow">Excellence</span>
          </motion.h1>

          <motion.p
            className="text-2xl text-gray-300 mb-10 leading-relaxed max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Discover our meticulously crafted collections, each telling a unique story of luxury, innovation, and
            timeless style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-lime-yellow text-black hover:bg-lime-yellow/90 font-semibold text-lg px-8 py-4"
            >
              Explore Collections
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6">Our Collections</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Each collection represents a unique chapter in our design journey, crafted with passion and precision.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={collection.href}>
                  <div className="relative h-96 rounded-2xl overflow-hidden mb-6 bg-gray-900">
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Collection Icon */}
                    <div
                      className={`absolute top-6 left-6 p-3 rounded-full bg-gradient-to-r ${collection.color} text-white`}
                    >
                      {collection.icon}
                    </div>

                    {/* Collection Info */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold mb-2">{collection.title}</h3>
                      <p
                        className={`text-lg font-medium mb-3 bg-gradient-to-r ${collection.color} bg-clip-text text-transparent`}
                      >
                        {collection.subtitle}
                      </p>
                      <p className="text-gray-300 text-sm leading-relaxed">{collection.description}</p>

                      <div className="flex items-center mt-4 text-lime-yellow group-hover:translate-x-2 transition-transform duration-300">
                        <span className="font-medium">Explore Collection</span>
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">Ready to Discover?</h2>
            <p className="text-xl text-gray-400 mb-10">
              Join thousands of fashion enthusiasts who trust ATENOIR for their most important moments.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-lime-yellow text-black hover:bg-lime-yellow/90 font-semibold">
                Shop All Collections
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
