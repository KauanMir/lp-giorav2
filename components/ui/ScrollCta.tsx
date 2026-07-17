'use client'

import type { CSSProperties, MouseEvent, ReactNode } from 'react'
import { scrollToId } from '@/lib/scroll'

interface ScrollCtaProps {
  to: string
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export function ScrollCta({ to, className, style, children }: ScrollCtaProps) {
  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    scrollToId(to)
  }

  return (
    <a href={`#${to}`} className={className} style={style} onClick={onClick}>
      {children}
    </a>
  )
}
