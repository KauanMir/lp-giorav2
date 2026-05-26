import { PromoBar } from '@/components/layout/PromoBar'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyCTA } from '@/components/layout/StickyCTA'
import { Hero } from '@/sections/Hero'
import { Marquee } from '@/components/ui/Marquee'
import { ManifestoSection } from '@/sections/ManifestoSection'
import { ProblemsSection } from '@/sections/ProblemsSection'
import { GoldenTechSection } from '@/sections/GoldenTechSection'
import { ActivesSection } from '@/sections/ActivesSection'
import { CompareSection } from '@/sections/CompareSection'
import { RitualSection } from '@/sections/RitualSection'
import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { ComoUsarSection } from '@/sections/ComoUsarSection'
import { FinalCTASection } from '@/sections/FinalCTASection'

export default function Page() {
  return (
    <>
      <PromoBar />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <ManifestoSection />
        <ProblemsSection />
        <GoldenTechSection />
        <ActivesSection />
        <CompareSection />
        <RitualSection />
        <TestimonialsSection />
        <ComoUsarSection />
        <Marquee />
        <FinalCTASection />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
