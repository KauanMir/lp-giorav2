'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { getScrollProgress, subscribeScrollProgress } from '@/lib/scroll'

// Previously set by the (now-removed) Lenis integration — kept here since
// this ticker is still shared with Lenis's old raf-driving role: without it,
// GSAP's ticker "catches up" with a jump after any stall (tab switch, long
// task), which would show up as a visible snap in the ribbon's easing.
gsap.ticker.lagSmoothing(0)

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
  const svgRef = useRef<SVGSVGElement>(null)
  const textPathRef = useRef<SVGTextPathElement>(null)

  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    const reduce = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    let cur = 0
    let last: number | null = null
    const t0 = performance.now()

    function tick() {
      const target = getScrollProgress()
      const now = performance.now()
      cur += (target - cur) * (reduce ? 1 : 0.11)
      const idle = reduce ? 0 : Math.sin((now - t0) / 1500) * 7
      const off = -220 - cur * dist + idle
      if (last === null || Math.abs(off - last) > 0.05) {
        last = off
        textPathRef.current?.setAttribute('startOffset', off.toFixed(1))
      }
    }

    // Piggyback on gsap's own shared ticker instead of spinning up an
    // independent setInterval/rAF loop.
    let unsubscribeScroll: (() => void) | null = null
    let active = false

    function start() {
      if (active) return
      active = true
      unsubscribeScroll = subscribeScrollProgress()
      tick()
      gsap.ticker.add(tick)
    }

    function stop() {
      if (!active) return
      active = false
      gsap.ticker.remove(tick)
      unsubscribeScroll?.()
      unsubscribeScroll = null
    }

    // Fully pause the ribbon (no scroll listener, no per-frame DOM writes)
    // whenever it's outside the viewport — this also naturally covers the
    // CSS-hidden mobile/desktop breakpoint variant, since a display:none
    // element never intersects.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start()
        else stop()
      },
      { threshold: 0 },
    )
    io.observe(svg)

    return () => {
      io.disconnect()
      stop()
    }
  }, [dist])

  return (
    <svg ref={svgRef} className={className} viewBox={viewBox} preserveAspectRatio="xMidYMid slice">
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
