'use client'

import { useState, useRef, useCallback } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { CinematicImage } from '@/components/ui/CinematicImage'
import { ScrollCta } from '@/components/ui/ScrollCta'
import { Ic } from '@/components/ui/Icons'

const FOCAL = 'center center'

export function CompareSection() {
  const [pos, setPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const clamp = (v: number) => Math.max(6, Math.min(94, v))

  const calc = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    setPos(clamp((clientX - rect.left) / rect.width * 100))
  }, [])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    // Prevent browser's native image drag and text selection
    e.preventDefault()
    calc(e.clientX)

    // Global listeners so drag works even when mouse leaves the container
    const onMove = (ev: MouseEvent) => calc(ev.clientX)
    const onUp = () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseup', onUp)
    }
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseup', onUp)
  }, [calc])

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    calc(e.touches[0].clientX)
  }, [calc])

  return (
    <section className="section">
      <div className="wrap">
        <div className="compare-wrap">
          <Reveal>
            <div
              ref={containerRef}
              className="compare"
              onMouseDown={onMouseDown}
              onTouchMove={onTouchMove}
              style={{ touchAction: 'none' }}
            >
              <span className="tag before">Antes</span>
              <span className="tag after">Depois</span>

              {/* BEFORE — pele sem glow, tom frio */}
              <div className="panel">
                <CinematicImage
                  src="/images/compare/before.png"
                  alt="Pele antes do sérum GIORA"
                  pos={FOCAL}
                  sizes="(max-width: 820px) 100vw, 45vw"
                  imgStyle={{ filter: 'grayscale(0.22) brightness(0.88) saturate(0.72) contrast(1.04)', pointerEvents: 'none' }}
                />
              </div>

              {/* AFTER — glow dourado, realce sutil */}
              <div className="panel after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
                <CinematicImage
                  src="/images/compare/after.png"
                  alt="Pele depois do sérum GIORA — glow dourado"
                  pos={FOCAL}
                  sizes="(max-width: 820px) 100vw, 45vw"
                  imgStyle={{ filter: 'saturate(1.12) brightness(1.05) contrast(1.02) sepia(0.06)', pointerEvents: 'none' }}
                />
              </div>

              <div className="handle" style={{ left: `${pos}%` }}>
                <span className="knob"><Ic.Arrows size={18} /></span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="compare-text">
              <span className="eyebrow">Resultado</span>
              <h2 style={{ marginTop: 14 }}>
                Glow dourado desde a <span className="accent">primeira aplicação.</span>
              </h2>
              <p>
                A textura dourada de GIORA cria um efeito luminoso sofisticado que
                valoriza a beleza natural da pele enquanto entrega hidratação e
                sensação de pele mais saudável.
              </p>
              <ScrollCta to="checkout" className="synergy-cta" style={{ marginTop: 22 }}>
                Quero minha pele dourada
                <Ic.ChevronRight size={14} />
              </ScrollCta>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
