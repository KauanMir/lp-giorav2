'use client'

import { useState, useEffect } from 'react'

interface CountdownTime {
  h: number
  m: number
  s: number
}

export function useCountdown(initial: CountdownTime = { h: 2, m: 47, s: 32 }) {
  const [t, setT] = useState<CountdownTime>(initial)

  useEffect(() => {
    const id = setInterval(() => {
      setT(({ h, m, s }) => {
        let H = h, M = m, S = s - 1
        if (S < 0) { S = 59; M -= 1 }
        if (M < 0) { M = 59; H -= 1 }
        if (H < 0) { return initial }
        return { h: H, m: M, s: S }
      })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const pad = (n: number) => String(n).padStart(2, '0')

  return {
    display: `${pad(t.h)}:${pad(t.m)}:${pad(t.s)}`,
    hours: t.h,
    minutes: t.m,
    seconds: t.s,
  }
}
