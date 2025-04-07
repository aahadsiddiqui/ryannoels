import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StatsSection from '@/components/StatsSection'
import JourneySection from '@/components/JourneySection'
import BuyingSection from '@/components/BuyingSection'
import Testimonials from '@/components/Testimonials'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ShuffleHero from '@/components/ShuffleHero'

export default function Home() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ShuffleHero />
      <BuyingSection />
      <JourneySection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  )
} 