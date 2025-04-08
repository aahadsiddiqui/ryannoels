'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'
import DotExpandButton from './DotExpandButton'

const navVariants = {
  open: {
    x: '0%',
    borderTopLeftRadius: '0vw',
    borderBottomLeftRadius: '0vw',
    opacity: 1,
  },
  closed: {
    x: '100%',
    borderTopLeftRadius: '50vw',
    borderBottomLeftRadius: '50vw',
    opacity: 0,
  },
}

const linkWrapperVariants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const navLinkVariants = {
  open: { x: 0 },
  closed: { x: 25 },
}

const NavLink = ({ text, href, onClick }: { text: string; href: string; onClick?: () => void }) => {
  return (
    <motion.div
      variants={navLinkVariants}
      transition={{
        type: 'spring',
        damping: 3,
      }}
      whileHover={{
        y: -5,
        rotate: '-3deg',
      }}
    >
      <Link 
        href={href}
        className="inline-block z-10 text-slate-800 w-fit font-bold text-4xl md:text-5xl hover:text-blue-600 transition-colors"
        onClick={onClick}
      >
        {text}
      </Link>
    </motion.div>
  )
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeNav = () => setIsOpen(false)

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center py-4">
            <Image
              src="/logo.png"
              alt="Ryan Noels Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`text-base font-medium ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-blue-600 transition-colors`}>
              Home
            </Link>
            <Link href="/about" className={`text-base font-medium ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-blue-600 transition-colors`}>
              About
            </Link>
            <Link href="/buying" className={`text-base font-medium ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-blue-600 transition-colors`}>
              Buying
            </Link>
            <Link href="/selling" className={`text-base font-medium ${isScrolled ? 'text-gray-900' : 'text-white'} hover:text-blue-600 transition-colors`}>
              Selling
            </Link>
            <DotExpandButton 
              text="Contact Us" 
              href="/contact" 
              className={`${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white text-blue-600 hover:bg-gray-100'
              } shadow-md transition-colors mt-0`} 
            />
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ rotate: '180deg' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="md:hidden text-3xl p-2 rounded-full"
          >
            <FiMenu className={`${isScrolled ? 'text-gray-900' : 'text-white'} transition-colors`} />
          </motion.button>

          {/* Mobile Navigation */}
          <motion.nav
            className="fixed top-0 bottom-0 right-0 w-full md:w-[400px] bg-white"
            animate={isOpen ? 'open' : 'closed'}
            variants={navVariants}
            initial="closed"
          >
            <motion.button
              className="text-2xl text-gray-900 hover:text-blue-600 p-4 absolute top-6 right-6"
              whileHover={{ rotate: '180deg' }}
              onClick={closeNav}
              whileTap={{ scale: 0.9 }}
            >
              <FiX />
            </motion.button>

            <motion.div
              variants={linkWrapperVariants}
              className="flex flex-col gap-8 absolute top-1/2 -translate-y-1/2 left-8"
            >
              <NavLink text="Home" href="/" onClick={closeNav} />
              <NavLink text="About" href="/about" onClick={closeNav} />
              <NavLink text="Buying" href="/buying" onClick={closeNav} />
              <NavLink text="Selling" href="/selling" onClick={closeNav} />
              <NavLink text="Contact" href="/contact" onClick={closeNav} />
            </motion.div>
          </motion.nav>
        </div>
      </div>
    </nav>
  )
} 