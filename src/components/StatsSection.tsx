"use client"

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiDollarSign, FiHome, FiTrendingUp, FiAward } from "react-icons/fi";
import { IconType } from 'react-icons';
import Image from 'next/image';

interface Feature {
  id: number;
  callout: string;
  title: string;
  description: string;
  contentPosition: 'l' | 'r';
  Icon: IconType;
}

const features: Feature[] = [
  {
    id: 1,
    callout: "Portfolio Value",
    title: "$150M+",
    description:
      "Our growing real estate portfolio represents over $150 million in total value, showcasing our commitment to building lasting wealth through strategic property investments.",
    contentPosition: "r",
    Icon: FiDollarSign,
  },
  {
    id: 2,
    callout: "Pre-Construction Success",
    title: "50+ Units",
    description:
      "We've successfully secured over 50 pre-construction units, providing our clients with early access to premium properties and exceptional investment opportunities.",
    contentPosition: "l",
    Icon: FiHome,
  },
  {
    id: 3,
    callout: "Market Growth",
    title: "25% ROI",
    description:
      "Our strategic approach to real estate investment has consistently delivered strong returns, with an average ROI of 25% across our portfolio.",
    contentPosition: "r",
    Icon: FiTrendingUp,
  },
  {
    id: 4,
    callout: "Client Success",
    title: "100+ Clients",
    description:
      "We've helped over 100 clients achieve their real estate goals, from first-time homebuyers to seasoned investors building their portfolios.",
    contentPosition: "l",
    Icon: FiAward,
  },
];

interface SlidingFeatureDisplayProps {
  featureInView: Feature;
}

interface ContentProps extends Feature {
  setFeatureInView: (feature: Feature) => void;
  featureInView: Feature;
}

export default function StatsSection() {
  const [featureInView, setFeatureInView] = useState<Feature>(features[0]);

  return (
    <section className="relative mx-auto max-w-7xl py-20">
      <SlidingFeatureDisplay featureInView={featureInView} />
      <div className="-mt-[100vh] hidden md:block" />
      {features.map((s) => (
        <Content
          key={s.id}
          featureInView={s}
          setFeatureInView={setFeatureInView}
          {...s}
        />
      ))}
    </section>
  );
}

const SlidingFeatureDisplay = ({ featureInView }: SlidingFeatureDisplayProps) => {
  return (
    <div
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-end" : "flex-start",
      }}
      className="pointer-events-none sticky top-0 z-10 hidden h-screen w-full items-center justify-center md:flex"
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        className="h-fit w-3/5 rounded-xl p-8"
      >
        <StatDisplay featureInView={featureInView} />
      </motion.div>
    </div>
  );
};

const Content = ({ setFeatureInView, featureInView, ...props }: ContentProps) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  useEffect(() => {
    if (isInView) {
      setFeatureInView(featureInView);
    }
  }, [isInView, setFeatureInView, featureInView]);

  return (
    <section
      ref={ref}
      className="relative z-0 flex h-fit md:h-screen"
      style={{
        justifyContent:
          featureInView.contentPosition === "l" ? "flex-start" : "flex-end",
      }}
    >
      <div className="grid h-full w-full place-content-center px-4 py-12 md:w-2/5 md:px-8 md:py-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <span className="rounded-full bg-blue-600 px-2 py-1.5 text-xs font-medium text-white">
            {featureInView.callout}
          </span>
          <p className="my-3 text-5xl font-bold text-gray-900">{featureInView.title}</p>
          <p className="text-gray-600">{featureInView.description}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mt-8 block md:hidden"
        >
          <StatDisplay featureInView={featureInView} />
        </motion.div>
      </div>
    </section>
  );
};

const StatDisplay = ({ featureInView }: SlidingFeatureDisplayProps) => {
  const getBackgroundImage = (callout: string) => {
    switch (callout) {
      case "Portfolio Value":
        return "/100.png";
      case "Pre-Construction Success":
        return "/50.png";
      default:
        return null;
    }
  };

  const bgImage = getBackgroundImage(featureInView.callout);

  return (
    <div className="relative h-96 w-full rounded-xl overflow-hidden">
      {/* Background Image */}
      {bgImage && (
        <div className="absolute inset-0">
          <Image
            src={bgImage}
            alt={featureInView.callout}
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 to-blue-100/90" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative h-full w-full flex flex-col items-center justify-center p-8">
        <span className="mb-6 text-6xl text-blue-600">
          <featureInView.Icon />
        </span>
        <h3 className="mb-2 text-4xl font-bold text-gray-900">{featureInView.title}</h3>
        <p className="text-center text-gray-600">{featureInView.callout}</p>
      </div>
    </div>
  );
}; 