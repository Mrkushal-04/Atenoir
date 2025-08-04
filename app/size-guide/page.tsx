"use client"

import Navbar from "@/components/navbar"
import Image from "next/image"
import { motion } from "framer-motion"
import { Ruler, Shirt, Tally2, ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function SizeGuidePage() {
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
              Atenoir Size Guide
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find your perfect fit with our detailed measurements and helpful tips.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg flex flex-col md:flex-row items-center gap-8"
            >
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="How to Measure"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-md border border-white/10 object-cover w-full h-auto"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center md:justify-start gap-3">
                  <Ruler className="text-lime-yellow-400" /> How to Measure
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  For the most accurate fit, we recommend taking your measurements and comparing them to our charts.
                  Here's how:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2 text-gray-300 text-base">
                  <li>Bust/Chest: Measure around the fullest part, keeping the tape horizontal.</li>
                  <li>Waist: Measure around the narrowest part of your waist.</li>
                  <li>Hips: Measure around the fullest part of your hips.</li>
                  <li>Inseam: Measure from the top of your inner thigh to your ankle.</li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg overflow-x-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Shirt className="text-lime-yellow-400" /> Women's Apparel Size Chart (Inches)
              </h2>
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-white/10">
                    <th className="p-3 border-b border-white/20">Size</th>
                    <th className="p-3 border-b border-white/20">Bust</th>
                    <th className="p-3 border-b border-white/20">Waist</th>
                    <th className="p-3 border-b border-white/20">Hips</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-white/10">XS (0-2)</td>
                    <td className="p-3 border-b border-white/10">31-32</td>
                    <td className="p-3 border-b border-white/10">24-25</td>
                    <td className="p-3 border-b border-white/10">34-35</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-white/10">S (4-6)</td>
                    <td className="p-3 border-b border-white/10">33-34</td>
                    <td className="p-3 border-b border-white/10">26-27</td>
                    <td className="p-3 border-b border-white/10">36-37</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-white/10">M (8-10)</td>
                    <td className="p-3 border-b border-white/10">35-36</td>
                    <td className="p-3 border-b border-white/10">28-29</td>
                    <td className="p-3 border-b border-white/10">38-39</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-white/10">L (12-14)</td>
                    <td className="p-3 border-b border-white/10">37-39</td>
                    <td className="p-3 border-b border-white/10">30-32</td>
                    <td className="p-3 border-b border-white/10">40-42</td>
                  </tr>
                  <tr>
                    <td className="p-3">XL (16)</td>
                    <td className="p-3">40-42</td>
                    <td className="p-3">33-35</td>
                    <td className="p-3">43-45</td>
                  </tr>
                </tbody>
              </table>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg overflow-x-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Tally2 className="text-lime-yellow-400" /> Men's Apparel Size Chart (Inches)
              </h2>
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-white/10">
                    <th className="p-3 border-b border-white/20">Size</th>
                    <th className="p-3 border-b border-white/20">Chest</th>
                    <th className="p-3 border-b border-white/20">Waist</th>
                    <th className="p-3 border-b border-white/20">Inseam</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border-b border-white/10">S</td>
                    <td className="p-3 border-b border-white/10">34-36</td>
                    <td className="p-3 border-b border-white/10">28-30</td>
                    <td className="p-3 border-b border-white/10">30</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-white/10">M</td>
                    <td className="p-3 border-b border-white/10">38-40</td>
                    <td className="p-3 border-b border-white/10">32-34</td>
                    <td className="p-3 border-b border-white/10">31</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-white/10">L</td>
                    <td className="p-3 border-b border-white/10">42-44</td>
                    <td className="p-3 border-b border-white/10">36-38</td>
                    <td className="p-3 border-b border-white/10">32</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-b border-white/10">XL</td>
                    <td className="p-3 border-b border-white/10">46-48</td>
                    <td className="p-3 border-b border-white/10">40-42</td>
                    <td className="p-3 border-b border-white/10">33</td>
                  </tr>
                  <tr>
                    <td className="p-3">XXL</td>
                    <td className="p-3">50-52</td>
                    <td className="p-3">44-46</td>
                    <td className="p-3">34</td>
                  </tr>
                </tbody>
              </table>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg overflow-x-auto"
            >
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Tally2 className="text-lime-yellow-400" /> Measurement Notes
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                * Measurements refer to body size, not garment dimensions, unless otherwise stated.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                * If you fall between sizes, choose the larger size for a better fit.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                * Allow for slight variations in measurements due to manufacturing tolerances.
              </p>
            </motion.section>
          </div>
        </div>
      </div>
    </main>
  )
}
