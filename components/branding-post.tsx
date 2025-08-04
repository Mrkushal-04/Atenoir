"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function BrandingPost() {
  return (
    <section className="container mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row items-center gap-12 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8"
      >
        <div className="md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Crafted for the Modern Individual
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            At Atenoir, we believe in the power of timeless design and exceptional quality. Our collections are
            meticulously crafted to offer comfort, durability, and a sophisticated aesthetic that transcends fleeting
            trends. Discover pieces that not only complement your style but also empower your everyday.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="md:w-1/2 flex justify-center"
        >
          <Image
            src="/images/collection-rack-2.jpeg"
            alt="Atenoir Brand Philosophy"
            width={500}
            height={500}
            className="rounded-lg shadow-xl border border-white/10"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
