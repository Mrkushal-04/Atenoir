"use client"

import Navbar from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, TrendingUp, ChevronLeft } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function CareersPage() {
  const router = useRouter()
  const jobOpenings = [
    {
      title: "Fashion Designer (Senior)",
      location: "New York, NY",
      description:
        "Seeking an experienced designer with a strong portfolio in contemporary apparel and a passion for sustainable fashion.",
    },
    {
      title: "E-commerce Marketing Specialist",
      location: "Remote",
      description:
        "Responsible for developing and executing digital marketing strategies to drive online sales and brand awareness.",
    },
    {
      title: "Retail Sales Associate",
      location: "Los Angeles, CA",
      description: "Provide exceptional customer service and styling advice in our boutique store.",
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
              Careers at Atenoir
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our passionate team and help shape the future of timeless and sustainable fashion.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-12">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg text-center"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center">
                  <Users className="w-12 h-12 text-lime-yellow-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Collaborative Culture</h3>
                  <p className="text-gray-300">
                    Work in a supportive environment that fosters creativity and teamwork.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <TrendingUp className="w-12 h-12 text-lime-yellow-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Growth Opportunities</h3>
                  <p className="text-gray-300">Develop your skills and advance your career with continuous learning.</p>
                </div>
                <div className="flex flex-col items-center">
                  <Briefcase className="w-12 h-12 text-lime-yellow-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Impactful Work</h3>
                  <p className="text-gray-300">Contribute to a brand committed to ethical and sustainable fashion.</p>
                </div>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Current Openings</h2>
              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 rounded-lg p-6 border border-white/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                  >
                    <div>
                      <h3 className="text-xl font-semibold text-lime-yellow-400 mb-1">{job.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{job.location}</p>
                      <p className="text-gray-400 text-base">{job.description}</p>
                    </div>
                    <Link href="/contact">
                      {" "}
                      {/* Link to contact page for application */}
                      <Button
                        variant="outline"
                        className="text-white border-lime-yellow-500 hover:bg-lime-yellow-500/20"
                      >
                        Apply Now
                      </Button>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <p className="mt-8 text-center text-gray-300">
                Don't see a role that fits? Send us your resume and cover letter to{" "}
                <a href="mailto:careers@atenoir.com" className="text-lime-yellow-400 hover:underline">
                  careers@atenoir.com
                </a>
                . We're always interested in connecting with talented individuals.
              </p>
            </motion.section>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}
