"use client"

import type { Testimonial } from "@/lib/types"
import { TestimonialCard } from "./testimonial-card"
import { motion } from "framer-motion"

interface TestimonialSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialSection({ testimonials }: TestimonialSectionProps) {
  return (
    <section className="py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-white text-center mb-10"
      >
        What Our Customers Say
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <TestimonialCard testimonial={testimonial} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
