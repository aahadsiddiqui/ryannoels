import React from "react";
import { motion } from "framer-motion";

export const DrawCircleText = () => {
  return (
    <div className="grid place-content-center px-4 py-24">
      <h1 className="max-w-4xl text-center text-4xl md:text-5xl leading-snug text-gray-900">
        Your Trusted Partner in{" "}
        <span className="relative">
          Property Buying
          <svg
            viewBox="0 0 386 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 366.298 70.689 375.761 38.0785C380.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#4169E1"
              strokeWidth="3"
            />
          </svg>
        </span>
      </h1>
    </div>
  );
}; 