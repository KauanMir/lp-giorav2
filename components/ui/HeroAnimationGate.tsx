'use client'

import { useEffect } from 'react'

// Pauses the Hero's infinite CSS glow/float/drift animations once the
// section scrolls out of view, so they stop costing compositor work while
// invisible. Purely additive — while in view, nothing changes.
export function HeroAnimationGate() {
  useEffect(() => {
    const el = document.querySelector('.hero-export')
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle('is-offscreen', !entry.isIntersecting)
      },
      { threshold: 0 },
    )
    io.observe(el)

    return () => io.disconnect()
  }, [])

  return null
}
