import Image from 'next/image'
import DotExpandButton from './DotExpandButton'

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/cntowerhero.png"
          alt="CN Tower Toronto Skyline"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
              The Best Investment on Earth, is Earth.
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Let's Make A Move For Your Future.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <DotExpandButton 
                text="Start Buying"
                href="/buying"
                className="!bg-white hover:!bg-gray-100 !text-black hover:!text-black"
              />
              <DotExpandButton 
                text="Contact Us"
                href="/contact"
                className="!bg-transparent hover:!bg-white/10 !text-white border-2 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 