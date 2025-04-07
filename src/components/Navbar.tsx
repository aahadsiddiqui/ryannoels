'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DotExpandButton from './DotExpandButton'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Ryan Noels Logo"
                width={800}
                height={600}
                className="h-24 w-auto object-contain py-2"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`nav-link ${!scrolled && 'text-white hover:text-gray-300'}`}>
              Home
            </Link>
            <Link href="/properties" className={`nav-link ${!scrolled && 'text-white hover:text-gray-300'}`}>
              Properties
            </Link>
            <Link href="/about" className={`nav-link ${!scrolled && 'text-white hover:text-gray-300'}`}>
              About
            </Link>
            <Link href="/testimonials" className={`nav-link ${!scrolled && 'text-white hover:text-gray-300'}`}>
              Testimonials
            </Link>
            <DotExpandButton 
              text="Contact Us"
              href="/contact"
              className={scrolled ? 
                "!bg-blue-600 hover:!bg-blue-700 !text-white" : 
                "!bg-white hover:!bg-gray-100 !text-black"
              }
            />
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                scrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-gray-300'
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-screen opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="bg-white shadow-lg rounded-b-lg overflow-hidden">
            <Link href="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/properties" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
              Properties
            </Link>
            <Link href="/about" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/testimonials" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
              Testimonials
            </Link>
            <div className="p-4">
              <DotExpandButton 
                text="Contact Us"
                href="/contact"
                className="w-full !bg-blue-600 hover:!bg-blue-700 !text-white"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
} 