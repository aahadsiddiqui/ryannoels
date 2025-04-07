import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Ryan Noels | Real Estate Agent',
  description: 'Professional real estate services in the Greater Toronto Area. Find your dream home with Ryan Noels.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="overflow-x-hidden">
        {children}
      </body>
    </html>
  )
} 