'use client'

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from 'next/link';
import DotExpandButton from './DotExpandButton';
import Image from 'next/image';

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-blue-600 font-medium">
          Your Real Estate Journey
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Your Journey to Success
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          A simple, transparent process to help you achieve your real estate goals. From initial consultation to final closing, we're here to guide you every step of the way.
        </p>
        <DotExpandButton 
          text="Start Your Journey"
          href="/contact"
        />
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: typeof squareData) => {
  const newArray = [...array];
  let currentIndex = newArray.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray;
};

const squareData = [
  {
    id: 1,
    src: "/journey1.png",
  },
  {
    id: 2,
    src: "/journey2.png",
  },
  {
    id: 3,
    src: "/journey3.png",
  },
  {
    id: 4,
    src: "/journey4.png",
  },
  {
    id: 5,
    src: "/journey5.png",
  },
  {
    id: 6,
    src: "/journey6.png",
  },
  {
    id: 7,
    src: "/journey7.png",
  },
  {
    id: 8,
    src: "/journey8.png",
  },
  {
    id: 9,
    src: "/journey9.png",
  },
  {
    id: 10,
    src: "/journey10.png",
  },
  {
    id: 11,
    src: "/journey11.png",
  },
  {
    id: 12,
    src: "/journey12.png",
  },
  {
    id: 13,
    src: "/journey13.png",
  },
  {
    id: 14,
    src: "/journey14.png",
  },
  {
    id: 15,
    src: "/journey15.png",
  },
  {
    id: 16,
    src: "/journey16.png",
  },
];

const ShuffleGrid = () => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [squares, setSquares] = useState<JSX.Element[]>([]);

  useEffect(() => {
    // Initial render with static grid
    const initialSquares = squareData.map((sq) => (
      <motion.div
        key={sq.id}
        layout
        transition={{ duration: 1.5, type: "spring" }}
        className="w-full h-full relative"
      >
        <Image
          src={sq.src}
          alt={`Journey image ${sq.id}`}
          fill
          className="object-cover"
        />
      </motion.div>
    ));
    setSquares(initialSquares);

    // Start shuffling after mount
    const startShuffling = () => {
      const shuffled = shuffle(squareData).map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 1.5, type: "spring" }}
          className="w-full h-full relative"
        >
          <Image
            src={sq.src}
            alt={`Journey image ${sq.id}`}
            fill
            className="object-cover"
          />
        </motion.div>
      ));
      setSquares(shuffled);
      timeoutRef.current = setTimeout(startShuffling, 3000);
    };

    const timer = setTimeout(startShuffling, 1000);

    return () => {
      clearTimeout(timer);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares}
    </div>
  );
};

export default ShuffleHero; 