'use client'

import { FiHome, FiCheckCircle, FiUsers, FiFileText, FiStar, FiGrid, FiZap, FiAward } from 'react-icons/fi'
import DotExpandButton from './DotExpandButton'

export default function BuyingSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Residential Properties */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Residential Properties</h2>
            <p className="text-gray-600 mb-8">
              Whether you're a first-time homebuyer or looking to expand your portfolio, 
              we provide comprehensive support throughout your real estate journey.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <FiHome className="text-blue-600 text-xl" />
                <span className="text-gray-700">As low as 5% down payment options</span>
              </div>
              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-blue-600 text-xl" />
                <span className="text-gray-700">RRSP Home Buyer Plan eligible</span>
              </div>
              <div className="flex items-center gap-3">
                <FiUsers className="text-blue-600 text-xl" />
                <span className="text-gray-700">Expert guidance and market insights</span>
              </div>
              <div className="flex items-center gap-3">
                <FiFileText className="text-blue-600 text-xl" />
                <span className="text-gray-700">Access to legal team & consultants</span>
              </div>
            </div>
            <DotExpandButton 
              text="Start Your Home Journey"
              href="/contact"
              className="!bg-blue-600 hover:!bg-blue-700 !text-white"
            />
          </div>

          {/* Pre-Construction Investment */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-6">Pre-Construction Investment</h2>
            <p className="text-gray-600 mb-8">
              Secure early access to Ontario's most promising pre-construction projects 
              and maximize your investment potential.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <FiStar className="text-blue-600 text-xl" />
                <span className="text-gray-700">Exclusive VIP access to launches</span>
              </div>
              <div className="flex items-center gap-3">
                <FiGrid className="text-blue-600 text-xl" />
                <span className="text-gray-700">Premium unit selection priority</span>
              </div>
              <div className="flex items-center gap-3">
                <FiZap className="text-blue-600 text-xl" />
                <span className="text-gray-700">First access to new projects</span>
              </div>
              <div className="flex items-center gap-3">
                <FiAward className="text-blue-600 text-xl" />
                <span className="text-gray-700">Special VIP pricing & incentives</span>
              </div>
            </div>
            <DotExpandButton 
              text="Access VIP Opportunities"
              href="/contact"
              className="!bg-blue-600 hover:!bg-blue-700 !text-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 