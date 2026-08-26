'use client'

import { useEffect, useRef, ReactNode } from 'react'
import gsap from 'gsap'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

// Uses a plain IntersectionObserver instead of GSAP's ScrollTrigger. With
// ~24 Reveal instances on the page, each ScrollTrigger.create() call forced
// a synchronous layout read to compute the trigger's scroll position.
// An IntersectionObserver gives the same "top 88% of viewport, once"
// behavior without forcing layout, and lets the ScrollTrigger plugin be
// dropped from the bundle entirely (nothing else uses it — Lenis drives
// its own rAF loop independently).
export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: delay / 1000,
          ease: 'power2.out',
        })
      },
      // rootMargin bottom -12% shrinks the effective viewport the same way
      // ScrollTrigger's "top 88%" start position did.
      { rootMargin: '0px 0px -12% 0px', threshold: 0 },
    )
    io.observe(el)

    return () => io.disconnect()
  }, [delay])

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}
