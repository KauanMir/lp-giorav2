'use client'

import { useCountdown } from '@/hooks/useCountdown'
import { Gallery } from '@/components/product/Gallery'
import { BuyBox } from '@/components/product/BuyBox'

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
    <section className="hero" id="checkout">
      <div className="wrap">
        <div className="section-head" style={{ marginBottom: 28 }}>
          <span className="eyebrow">Sua oferta exclusiva</span>
          <h2>
            Escolha seu <span className="accent">ritual GIORA.</span>
          </h2>
        </div>
        <HeroPromoBar />
        <div className="hero-grid">
          <Gallery />
          <BuyBox />
        </div>
      </div>
    </section>
  )
}
