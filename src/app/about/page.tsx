'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FiAward, FiHome, FiTrendingUp, FiUsers } from 'react-icons/fi'
import DotExpandButton from '@/components/DotExpandButton'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SpinningBoxText from '@/components/SpinningBoxText'
import BlockInTextCard from '@/components/BlockInTextCard'

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

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/office.png"
              alt="Modern real estate office"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Elevating Real Estate Excellence</h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Transforming property dreams into reality with expertise, integrity, and innovation
            </p>
          </motion.div>
        </section>

        {/* Mission Statement */}
        <motion.section 
          className="py-20 px-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              variants={fadeInUp}
            >
              <SpinningBoxText />
            </motion.div>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed text-center"
              variants={fadeInUp}
            >
              At Ryan Noels, we're committed to revolutionizing the real estate experience. 
              Our approach combines deep market insights, personalized service, and cutting-edge 
              technology to deliver exceptional results for our clients.
            </motion.p>
          </div>
        </motion.section>

        {/* Core Values */}
        <motion.section 
          className="py-16 bg-blue-50/50"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900"
              variants={fadeInUp}
            >
              Our Core Values
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FiHome,
                  title: "Expert Guidance",
                  description: "Providing comprehensive real estate expertise and market insights"
                },
                {
                  icon: FiUsers,
                  title: "Client-Centric",
                  description: "Putting our clients' needs first with personalized service"
                },
                {
                  icon: FiTrendingUp,
                  title: "Innovation",
                  description: "Leveraging cutting-edge technology for better results"
                },
                {
                  icon: FiAward,
                  title: "Excellence",
                  description: "Maintaining the highest standards in every transaction"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
                  variants={fadeInUp}
                >
                  <value.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Investment Opportunities */}
        <motion.section 
          className="py-20 px-4 bg-white"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto flex justify-center">
            <BlockInTextCard
              tag="/ Investment Opportunities"
              text={
                <>
                  <strong className="text-2xl md:text-3xl font-bold text-gray-900 block mb-4">
                    Ready to grow your portfolio?
                  </strong>
                  <p className="text-lg text-gray-700">
                    Discover exclusive real estate opportunities tailored to your investment goals. 
                    From pre-construction to luxury properties, we'll guide you every step of the way.
                  </p>
                </>
              }
              examples={[
                "Premium Pre-Construction Projects",
                "High-ROI Investment Properties",
                "Luxury Real Estate Opportunities",
                "Strategic Market Locations",
                "Exclusive VIP Access",
              ]}
            />
          </div>
        </motion.section>

        {/* Expertise Section */}
        <motion.section 
          className="py-20 px-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeInUp}>
                <Image
                  src="/back.png"
                  alt="Real estate expertise"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                  quality={100}
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  Unparalleled Expertise
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  With years of experience in the real estate market, we've developed 
                  a deep understanding of property values, market trends, and negotiation 
                  strategies. Our expertise spans residential properties, pre-construction 
                  investments, and luxury real estate.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Strategic property analysis and valuation",
                    "Expert negotiation skills",
                    "Comprehensive market research",
                    "Innovative marketing strategies"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
                <DotExpandButton 
                  text="Start Your Journey" 
                  href="/contact"
                  className="bg-blue-600 text-white hover:bg-blue-700"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <section className="bg-[#4169E1] py-32">
          <div className="max-w-6xl mx-auto text-center px-4 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience Excellence in Real Estate?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl">
              Let's work together to find your perfect property or maximize your investment potential.
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