import { PromoBar } from '@/components/layout/PromoBar'
import { Footer } from '@/components/layout/Footer'
import { StickyCTA } from '@/components/layout/StickyCTA'
import { HeroMain } from '@/sections/HeroMain'
import { Hero } from '@/sections/Hero'
import { Marquee } from '@/components/ui/Marquee'
import { ManifestoSection } from '@/sections/ManifestoSection'
import { ProblemsSection } from '@/sections/ProblemsSection'
import { GoldenTechSection } from '@/sections/GoldenTechSection'
import { ActivesSection } from '@/sections/ActivesSection'
import { CompareSection } from '@/sections/CompareSection'
import { RitualSection } from '@/sections/RitualSection'
// TestimonialsSection temporarily disabled — component and data kept for later use.
// import { TestimonialsSection } from '@/sections/TestimonialsSection'
import { ComoUsarSection } from '@/sections/ComoUsarSection'
import { FinalCTASection } from '@/sections/FinalCTASection'

export default function Page() {
  return (
    <>
      <PromoBar />
      <main>
        <HeroMain />
        <ManifestoSection />
        <ProblemsSection />
        <GoldenTechSection />
        <ActivesSection />
        <CompareSection />
        <RitualSection />
        {/* <TestimonialsSection /> — temporarily disabled, see import above */}
        <ComoUsarSection />
        <Marquee />
        <FinalCTASection />
        <Hero />
      </main>
      <Footer />
      <StickyCTA />
    </>
  )
}
