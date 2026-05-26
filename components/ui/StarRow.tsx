import { Ic } from './Icons'

interface StarRowProps {
  value?: number
  size?: number
}

export function StarRow({ value = 5, size = 12 }: StarRowProps) {
  return (
    <span className="stars" aria-label={`${value} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Ic.Star key={i} size={size} />
      ))}
    </span>
  )
}
