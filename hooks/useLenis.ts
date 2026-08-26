'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { setLenisInstance } from '@/lib/scroll'

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis()
    setLenisInstance(lenis)

    const onTick = (time: number) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(onTick)

    gsap.ticker.lagSmoothing(0)

    return () => {
      setLenisInstance(null)
      gsap.ticker.remove(onTick)
      lenis.destroy()
    }
  }, [])
}
