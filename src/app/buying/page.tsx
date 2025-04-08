'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiHome, FiSearch, FiDollarSign, FiCheck, FiKey } from 'react-icons/fi'
import DotExpandButton from '@/components/DotExpandButton'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { DrawCircleText } from '@/components/DrawCircleText'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const steps = [
  {
    icon: FiSearch,
    title: "Property Search",
    description: "We'll help you find properties that match your criteria, from location to amenities.",
    details: [
      "Personalized property recommendations",
      "Access to exclusive listings",
      "Virtual and in-person viewings",
      "Neighborhood insights"
    ]
  },
  {
    icon: FiDollarSign,
    title: "Financial Planning",
    description: "Get expert guidance on mortgages, down payments, and financial requirements.",
    details: [
      "Mortgage pre-approval assistance",
      "Down payment planning",
      "Investment strategy consultation",
      "Cost breakdown analysis"
    ]
  },
  {
    icon: FiCheck,
    title: "Offer & Negotiation",
    description: "We'll handle negotiations and paperwork to secure the best deal for you.",
    details: [
      "Market value assessment",
      "Strategic offer preparation",
      "Negotiation expertise",
      "Contract review"
    ]
  },
  {
    icon: FiKey,
    title: "Closing & Beyond",
    description: "Support through closing and continued assistance after purchase.",
    details: [
      "Closing process guidance",
      "Final walkthrough assistance",
      "Post-purchase support",
      "Property management resources"
    ]
  }
]

export default function BuyingPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/buying.png"
              alt="Luxury real estate buying"
              fill
              className="object-cover"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <motion.div 
            className="relative z-10 text-center text-white max-w-4xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Your Dream Home Awaits</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Let us guide you through every step of your home buying journey
            </p>
            <DotExpandButton 
              text="Start Your Search" 
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100"
            />
          </motion.div>
        </section>

        {/* Introduction */}
        <motion.section 
          className="py-20 px-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <DrawCircleText />
          <div className="max-w-4xl mx-auto text-center">
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed mb-16"
              variants={fadeInUp}
            >
              Whether you're a first-time homebuyer or an experienced investor, our expert team 
              will guide you through every step of the buying process. We combine market expertise 
              with personalized service to help you make informed decisions and find the perfect property.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-2xl text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600 text-center">Personalized support throughout your buying journey</p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-2xl text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Insights</h3>
                <p className="text-gray-600 text-center">Access to exclusive property listings and market data</p>
              </motion.div>

              <motion.div
                className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-2xl text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Seamless Process</h3>
                <p className="text-gray-600 text-center">Streamlined buying experience from search to closing</p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Buying Process Steps */}
        <motion.section 
          className="py-20 px-4 bg-blue-50/50"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
              variants={fadeInUp}
            >
              Your Path to Property Ownership
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer group"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Featured Properties */}
        <motion.section 
          className="py-20 px-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
              variants={fadeInUp}
            >
              Featured Properties
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="bg-white rounded-xl shadow-md overflow-hidden group cursor-pointer"
                  variants={fadeInUp}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-64">
                    <Image
                      src={`/property${item}.png`}
                      alt={`Featured property ${item}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">Luxury Home {item}</h3>
                    <p className="text-gray-600 mb-4">
                      Discover this stunning property with modern amenities and prime location.
                    </p>
                    <DotExpandButton 
                      text="View Details" 
                      href="/contact"
                      className="bg-blue-600 text-white hover:bg-blue-700 w-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <section className="bg-[#4169E1] py-32">
          <div className="max-w-6xl mx-auto text-center px-4 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl">
              Let's start your property search today and make your dream home a reality.
            </p>
            <DotExpandButton 
              text="Contact Us Today" 
              href="/contact"
              className="bg-white text-[#4169E1] hover:bg-gray-100 shadow-lg text-lg px-8 py-3 rounded-full"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 