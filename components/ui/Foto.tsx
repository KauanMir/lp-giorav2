interface FotoProps {
  n: number
  variant?: 1 | 2 | 3 | 4 | 5
}

export function Foto({ n, variant = 1 }: FotoProps) {
  return (
    <div className={`foto var-${variant}`} aria-hidden="true">
      <span>Foto {String(n).padStart(2, '0')}</span>
    </div>
  )
}
