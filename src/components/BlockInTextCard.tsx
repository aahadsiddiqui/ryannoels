'use client'

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DotExpandButton from "./DotExpandButton";

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;
const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;
const SWAP_DELAY_IN_MS = 5500;

export const BlockInTextCard = ({ tag, text, examples }: { tag: string; text: React.ReactNode; examples: string[] }) => {
  return (
    <div className="w-full max-w-4xl space-y-8">
      <div>
        <p className="mb-1.5 text-sm font-light uppercase text-blue-200">{tag}</p>
        <hr className="border-blue-400/30" />
      </div>
      <div className="space-y-4">
        {text}
      </div>
      <div>
        <Typewrite examples={examples} />
        <hr className="border-blue-400/30" />
      </div>
      <div className="flex justify-center pt-4">
        <DotExpandButton 
          text="Contact Us Today" 
          href="/contact"
          className="bg-white text-blue-600 hover:bg-gray-100 shadow-md"
        />
      </div>
    </div>
  );
};

const Typewrite = ({ examples }: { examples: string[] }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  }, [examples]);

  return (
    <p className="mb-2.5 text-sm font-light uppercase text-blue-200">
      <span className="inline-block size-2 bg-white" />
      <span className="ml-3">
        FEATURED:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-white"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};

export default BlockInTextCard; 