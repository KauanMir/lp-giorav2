'use client'

import { scrollToId } from '@/lib/scroll'

export function StickyCTA() {
  return (
    <div className="sticky-cta">
      <div className="price">
        <span className="p1">12x R$ 33,40</span>
        <span className="p2">Frete grátis full</span>
      </div>
      <button type="button" onClick={() => scrollToId('checkout')}>
        Quero minha pele dourada →
      </button>
    </div>
  )
}
