'use client'

import Image from 'next/image'
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const ONE_SECOND = 1000;
const WAIT_TIME = ONE_SECOND * 3;

const AnimatedText = ({ phrases }: { phrases: string[] }) => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      setActive((pv) => (pv + 1) % phrases.length);
    }, WAIT_TIME);

    return () => clearInterval(intervalRef);
  }, [phrases]);

  return (
    <div className="relative mb-14 mt-2 w-full">
      {phrases.map((phrase) => {
        const isActive = phrases[active] === phrase;
        return (
          <motion.div
            key={phrase}
            initial={false}
            animate={isActive ? "active" : "inactive"}
            style={{
              x: "-50%",
            }}
            variants={{
              active: {
                opacity: 1,
                scale: 1,
              },
              inactive: {
                opacity: 0,
                scale: 0,
              },
            }}
            className="absolute left-1/2 top-0 w-full text-blue-600"
          >
            {phrase}
          </motion.div>
        );
      })}
    </div>
  );
};

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            EXCELLENCE IN
            <AnimatedText
              phrases={[
                "REAL ESTATE",
                "INVESTMENT",
                "CLIENT SERVICE",
                "MARKET INSIGHTS",
                "PROPERTY DEALS",
              ]}
            />
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl text-gray-600">
              Ryan Noel stands as a distinguished real estate professional in the Greater Toronto Area, 
              known for his exceptional client service and strategic investment expertise.
            </p>
            <p className="text-xl text-gray-600">
              With a proven track record in financial services, including a successful tenure at the Bank 
              of Montreal, Ryan brings a wealth of financial acumen to every real estate transaction. His 
              unique approach combines deep market insights with personalized investment strategies, 
              ensuring each client's portfolio is optimized for both immediate returns and long-term growth.
            </p>
            <p className="text-xl text-gray-600">
              As a trusted advisor in the GTA's dynamic real estate market, Ryan specializes in 
              identifying high-value opportunities and executing seamless transactions that align 
              perfectly with his clients' investment goals and lifestyle aspirations.
            </p>
          </div>
          <div className="relative h-[600px]">
            <Image
              src="/ryan.jpg"
              alt="Ryan Noel - Real Estate Professional"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
} 