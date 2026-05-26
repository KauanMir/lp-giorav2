'use client'

import { useState } from 'react'
import Image from 'next/image'

interface GallerySlot {
  src: string
  alt: string
  pos: string
}

const SLOTS: GallerySlot[] = [
  { src: '/images/gallery/g1.png', alt: 'Sérum GIORA — still life luxuoso', pos: 'center center' },
  { src: '/images/gallery/g2.png', alt: 'Sérum GIORA — editorial com modelo', pos: 'center 38%' },
  { src: '/images/gallery/g3.png', alt: 'Sérum GIORA — ritual nas mãos', pos: 'center 50%' },
  { src: '/images/gallery/g4.png', alt: 'Sérum GIORA — conta-gotas dourado ao entardecer', pos: 'center center' },
]

export function Gallery() {
  const [active, setActive] = useState(0)

  return (
    <div className="gallery">
      <div className="thumbs">
        {SLOTS.map((slot, i) => (
          <div
            key={i}
            className={`thumb${active === i ? ' active' : ''}`}
            onClick={() => setActive(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setActive(i)}
            aria-label={slot.alt}
            style={{ position: 'relative' }}
          >
            <Image
              src={slot.src}
              alt={slot.alt}
              fill
              sizes="80px"
              quality={75}
              style={{ objectFit: 'cover', objectPosition: slot.pos }}
            />
          </div>
        ))}
      </div>

      <div className="main-image">
        <span className="flag-best">✦ Lançamento Oficial</span>
        <span className="flag-discount"><b>Oferta</b></span>

        <Image
          src={SLOTS[active].src}
          alt={SLOTS[active].alt}
          fill
          sizes="(max-width: 560px) 100vw, (max-width: 860px) 50vw, 40vw"
          quality={90}
          priority={active <= 1}
          style={{ objectFit: 'cover', objectPosition: SLOTS[active].pos }}
        />
      </div>
    </div>
  )
}
