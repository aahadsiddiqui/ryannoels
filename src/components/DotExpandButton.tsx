'use client'

import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Link from 'next/link';

interface DotExpandButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const DotExpandButton = ({ text, href, onClick, className = "" }: DotExpandButtonProps) => {
  const buttonContent = (
    <button 
      onClick={onClick}
      className={`group flex h-12 items-center gap-2 rounded-full pl-3 pr-4 transition-all duration-300 ease-in-out hover:pl-2 active:bg-blue-700 ${className}`}
    >
      <span className="rounded-full bg-blue-600 p-1 text-sm text-white transition-colors duration-300 group-hover:bg-white">
        <FiArrowRight className="-translate-x-[200%] text-[0px] transition-all duration-300 group-hover:translate-x-0 group-hover:text-lg group-hover:text-blue-600 group-active:-rotate-45" />
      </span>
      <span className="font-medium">{text}</span>
    </button>
  );

  if (href) {
    return (
      <Link href={href}>
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
};

export default DotExpandButton; 