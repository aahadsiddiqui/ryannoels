'use client'

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Link from 'next/link';

interface CardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: string;
  imgUrl: string;
  author: string;
}

const DragShuffleHero = () => {
  const [order, setOrder] = useState<string[]>(["front", "middle", "back"]);

  const handleShuffle = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop() as string);
    setOrder(orderCopy);
  };

  return (
    <section className="overflow-hidden bg-gradient-to-b from-gray-900 to-black px-8 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2 md:gap-8">
        <div>
          <h3 className="text-5xl font-black leading-[1.25] text-white md:text-7xl">
            Your Dream Home Awaits
          </h3>
          <p className="mb-8 mt-4 text-lg text-gray-400">
            Join hundreds of satisfied clients who've found their perfect property with Ryan Noels. 
            Whether you're looking for your first home or a pre-construction investment opportunity, 
            we're here to guide you every step of the way.
          </p>
          <form
            onSubmit={(e: React.FormEvent) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded border-transparent bg-gray-800 px-4 py-3 text-white transition-colors focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Link 
              href="/contact"
              className="w-full sm:w-auto whitespace-nowrap rounded bg-blue-600 px-6 py-3 font-semibold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Get Started
            </Link>
          </form>
        </div>
        <div className="relative h-[450px] w-[350px] mx-auto">
          <Card
            imgUrl="/client1.png"
            testimonial="Ryan's expertise in the Toronto real estate market is unmatched. He helped us find our dream home in record time!"
            author="Monisha M. - First Time Home Buyer"
            handleShuffle={handleShuffle}
            position={order[0]}
          />
          <Card
            imgUrl="/client2.png"
            testimonial="The pre-construction investment opportunities Ryan brought to us have been incredible. His market insights are invaluable."
            author="Michael K. - Property Investor"
            handleShuffle={handleShuffle}
            position={order[1]}
          />
          <Card
            imgUrl="/client3.png"
            testimonial="Professional, knowledgeable, and always available. Ryan made our property purchase smooth and stress-free."
            author="Jennifer L. - Property Owner"
            handleShuffle={handleShuffle}
            position={order[2]}
          />
        </div>
      </div>
    </section>
  );
};

const Card = ({ handleShuffle, testimonial, position, imgUrl, author }: CardProps) => {
  const mousePosRef = useRef<number>(0);

  const onDragStart = (e: MouseEvent | TouchEvent | PointerEvent) => {
    if ('clientX' in e) {
      mousePosRef.current = e.clientX;
    }
  };

  const onDragEnd = (e: MouseEvent | TouchEvent | PointerEvent) => {
    if ('clientX' in e) {
      const diff = mousePosRef.current - e.clientX;
      if (diff > 150) {
        handleShuffle();
      }
      mousePosRef.current = 0;
    }
  };

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const rotateZ =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

  const draggable = position === "front";

  return (
    <motion.div
      style={{
        zIndex,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-gray-700/50 bg-gray-800/20 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full" />
        <img
          src={imgUrl}
          alt={`Image of ${author}`}
          className="relative pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-gray-700 bg-gray-800 object-cover"
        />
      </div>
      <span className="text-center text-lg italic text-gray-300">
        "{testimonial}"
      </span>
      <span className="text-center text-sm font-medium text-blue-400">
        {author}
      </span>
    </motion.div>
  );
};

export default DragShuffleHero; 