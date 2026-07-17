'use client'

import { useEffect, useRef } from 'react'

interface HeroRibbonProps {
  className: string
  viewBox: string
  pathId: string
  pathD: string
  strokeWidth: number
  fontSize: number
  letterSpacing: number
  /** Pixels the ribbon text travels across the full scroll range of the page. */
  dist: number
}

const UNIT =
  'O SÉRUM DOURADO QUE TRANSFORMA SUA PELE EM UM RITUAL DE LUXO • PDRN • EXOSSOMOS • ÁCIDO HIALURÔNICO • '
const RIBBON_TEXT = UNIT.repeat(3)

// Ports the scroll-linked textPath animation from the approved Claude Design
// export 1:1: an eased cursor chases the page's scroll progress, plus a
// small continuous idle sine wobble so the ribbon is never fully static.
export function HeroRibbon({
  className,
  viewBox,
  pathId,
  pathD,
  strokeWidth,
  fontSize,
  letterSpacing,
  dist,
}: HeroRibbonProps) {
  const textPathRef = useRef<SVGTextPathElement>(null)

  useEffect(() => {
    const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    let cur = 0
    let target = 0
    let last: number | null = null
    const t0 = performance.now()

    function progress() {
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      const y = window.scrollY || doc.scrollTop || 0
      return max > 4 ? Math.min(1, Math.max(0, y / max)) : 0
    }

    function onScroll() {
      target = progress()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    function tick() {
      const now = performance.now()
      cur += (target - cur) * (reduce ? 1 : 0.11)
      const idle = reduce ? 0 : Math.sin((now - t0) / 1500) * 7
      const off = -220 - cur * dist + idle
      if (last === null || Math.abs(off - last) > 0.05) {
        last = off
        textPathRef.current?.setAttribute('startOffset', off.toFixed(1))
      }
    }
    tick()
    const timer = window.setInterval(tick, 16)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.clearInterval(timer)
    }
  }, [dist])

  return (
    <svg className={className} viewBox={viewBox} preserveAspectRatio="xMidYMid slice">
      <path id={pathId} d={pathD} fill="none" stroke="#1C130A" strokeWidth={strokeWidth} strokeLinecap="butt" />
      <text
        style={{ fontFamily: 'var(--jost)' }}
        fontWeight={600}
        fontSize={fontSize}
        letterSpacing={letterSpacing}
        fill="#EFE0B8"
        dominantBaseline="central"
      >
        <textPath ref={textPathRef} href={`#${pathId}`} startOffset="-220">
          {RIBBON_TEXT}
        </textPath>
      </text>
    </svg>
  )
}
