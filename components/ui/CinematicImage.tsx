import Image from 'next/image'
import type { CSSProperties } from 'react'

interface Props {
  src: string
  alt: string
  pos?: string
  sizes?: string
  priority?: boolean
  imgStyle?: CSSProperties
}

export function CinematicImage({
  src,
  alt,
  pos = 'center center',
  sizes = '(max-width: 768px) 100vw, 50vw',
  priority = false,
  imgStyle,
}: Props) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        quality={90}
        priority={priority}
        style={{ objectFit: 'cover', objectPosition: pos, ...imgStyle }}
      />
    </div>
  )
}
