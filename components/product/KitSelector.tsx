import { Kit, brl } from '@/lib/constants'

interface KitSelectorProps {
  kits: Kit[]
  selected: string
  onSelect: (id: string) => void
}

export function KitSelector({ kits, selected, onSelect }: KitSelectorProps) {
  return (
    <>
      <div className="kits-label">Escolha seu kit</div>
      <div className="kits">
        {kits.map((k) => {
          const sel = selected === k.id
          const unitPrice = k.price / k.units
          return (
            <div
              key={k.id}
              className={`kit ${sel ? 'selected' : ''}`}
              onClick={() => onSelect(k.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onSelect(k.id)}
            >
              {k.badge && (
                <span className={`badge ${k.badge.kind}`}>
                  {k.badge.kind === 'best' && '★ '}{k.badge.label}
                </span>
              )}
              <span className="radio" />
              <div className="kit-info">
                <span className="kit-name">{k.name}</span>
                <span className="kit-desc">{k.desc}</span>
              </div>
              <div className="kit-price">
                {k.units > 1 && (
                  <span className="each">R$ {brl(unitPrice)} cada</span>
                )}
                <span className="total">R$ {brl(k.price)}</span>
                {k.save && (
                  <span className="save">economize R$ {k.save}</span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
