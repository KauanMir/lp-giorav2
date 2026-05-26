'use client'

import { useCountdown } from '@/hooks/useCountdown'
import { Gallery } from '@/components/product/Gallery'
import { BuyBox } from '@/components/product/BuyBox'
import { TrustRow } from '@/components/product/TrustRow'

function HeroPromoBar() {
  const { display } = useCountdown()

  return (
    <div className="hero-promo">
      <span className="hp-label">Oferta de Lançamento</span>
      <span className="hp-sep" />
      <span className="hp-ship">✦ Você ganhou <b>FRETE GRÁTIS FULL</b></span>
      <span className="hp-timer" aria-live="polite">
        <span className="hp-timer-label">Termina em</span>
        <span className="hp-timer-clock">{display}</span>
      </span>
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <HeroPromoBar />
        <div className="hero-grid">
          <Gallery />
          <BuyBox />
        </div>
        <TrustRow />
      </div>
    </section>
  )
}
