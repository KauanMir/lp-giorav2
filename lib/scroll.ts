// Shared page-scroll progress (0..1), read by multiple components (e.g. the
// mobile + desktop HeroRibbon instances). A single passive scroll listener
// is kept alive while at least one subscriber needs it, instead of every
// consumer registering its own duplicate listener.
let scrollProgress = 0
let progressSubscribers = 0

function computeScrollProgress(): number {
  const doc = document.documentElement
  const max = doc.scrollHeight - window.innerHeight
  const y = window.scrollY || doc.scrollTop || 0
  return max > 4 ? Math.min(1, Math.max(0, y / max)) : 0
}

function onProgressScroll() {
  scrollProgress = computeScrollProgress()
}

export function subscribeScrollProgress(): () => void {
  if (progressSubscribers === 0) {
    scrollProgress = computeScrollProgress()
    window.addEventListener('scroll', onProgressScroll, { passive: true })
  }
  progressSubscribers++

  return () => {
    progressSubscribers--
    if (progressSubscribers === 0) {
      window.removeEventListener('scroll', onProgressScroll)
    }
  }
}

export function getScrollProgress(): number {
  return scrollProgress
}

function headerOffset(): number {
  const header = document.querySelector('.site-header')
  return (header?.getBoundingClientRect().height ?? 64) + 16
}

export function scrollToId(id: string) {
  if (typeof window === 'undefined') return
  const target = id.startsWith('#') ? id : `#${id}`
  const offset = -headerOffset()

  const el = document.querySelector(target)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
