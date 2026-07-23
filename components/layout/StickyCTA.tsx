'use client'

import { scrollToId } from '@/lib/scroll'
import { KITS, brl } from '@/lib/constants'
import { useKitSelection } from '@/lib/kit-selection'

export function StickyCTA() {
  const { selected } = useKitSelection()
  const kit = KITS.find((k) => k.id === selected)!

  return (
    <div className="sticky-cta">
      <div className="price">
        <span className="p1">12x R$ {brl(kit.installment)}</span>
        <span className="p2">Frete grátis full</span>
      </div>
      <button type="button" onClick={() => scrollToId('checkout')}>
        Quero minha pele dourada →
      </button>
    </div>
  )
}
