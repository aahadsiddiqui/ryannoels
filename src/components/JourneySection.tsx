'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FiUser,
  FiMapPin,
  FiHome,
  FiCheck,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import { IconType } from 'react-icons';

interface FeatureItem {
  title: string;
  Icon: IconType;
  description: string;
}

interface FeatureProps extends FeatureItem {
  position: number;
  index: number;
}

const JourneySection = () => {
  const [position, setPosition] = useState(0);

  const shiftLeft = () => {
    if (position > 0) {
      setPosition((pv) => pv - 1);
    }
  };

  const shiftRight = () => {
    if (position < features.length - 1) {
      setPosition((pv) => pv + 1);
    }
  };

  return (
    <section className="overflow-hidden bg-gradient-to-b from-white to-gray-50 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex justify-between gap-4">
          <div>
            <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl">
              Your Journey to Success
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              A simple, transparent process to help you achieve your real estate goals
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className="h-fit rounded-lg bg-blue-600 p-4 text-2xl text-white transition-colors hover:bg-blue-700"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </button>
            <button
              className="h-fit rounded-lg bg-blue-600 p-4 text-2xl text-white transition-colors hover:bg-blue-700"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className="flex gap-4">
          {features.map((feat, index) => (
            <Feature {...feat} key={index} position={position} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({ position, index, title, description, Icon }: FeatureProps) => {
  const translateAmt =
    position >= index ? index * 100 : index * 100 - 100 * (index - position);

  return (
    <motion.div
      animate={{ x: `${-translateAmt}%` }}
      transition={{
        ease: "easeInOut",
        duration: 0.35,
      }}
      className={`relative flex min-h-[300px] w-10/12 max-w-lg shrink-0 flex-col justify-between overflow-hidden rounded-xl p-8 shadow-lg md:w-3/5 ${
        index % 2 ? "bg-blue-600 text-white" : "bg-white"
      }`}
    >
      <Icon className="absolute right-4 top-4 text-7xl opacity-20" />
      <h3 className="mb-8 text-3xl font-bold">{title}</h3>
      <p className={index % 2 ? "text-blue-100" : "text-gray-600"}>{description}</p>
    </motion.div>
  );
};

export default JourneySection;

const features = [
  {
    title: "Meet Ryan",
    Icon: FiUser,
    description:
      "Connect with Ryan to discuss your real estate goals and create a personalized strategy tailored to your needs and preferences.",
  },
  {
    title: "Choose Location",
    Icon: FiMapPin,
    description:
      "Explore prime locations that match your lifestyle and investment criteria, with expert guidance on neighborhood trends and future growth potential.",
  },
  {
    title: "Select Your Property",
    Icon: FiHome,
    description:
      "Find your perfect property and get expert guidance on making the right choice, whether it's your dream home or an investment opportunity.",
  },
  {
    title: "Confirmation",
    Icon: FiCheck,
    description:
      "Complete your purchase with confidence and celebrate your new investment. Our team ensures a smooth closing process every step of the way.",
  },
]; 