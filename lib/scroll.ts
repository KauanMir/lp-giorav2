import type Lenis from 'lenis'

let lenisInstance: Lenis | null = null

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance
}

function headerOffset(): number {
  const header = document.querySelector('.site-header')
  return (header?.getBoundingClientRect().height ?? 64) + 16
}

export function scrollToId(id: string) {
  if (typeof window === 'undefined') return
  const target = id.startsWith('#') ? id : `#${id}`
  const offset = -headerOffset()

  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset, duration: 1.2 })
    return
  }

  const el = document.querySelector(target)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
