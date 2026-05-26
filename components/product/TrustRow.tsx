import { Ic } from '@/components/ui/Icons'
import { TRUST_ROW_ITEMS } from '@/lib/constants'

const ICONS = {
  Sparkle: Ic.Sparkle,
  Drop: Ic.Drop,
  Shield: Ic.Shield,
  Leaf: Ic.Leaf,
} as const

export function TrustRow() {
  return (
    <div className="trust-row">
      {TRUST_ROW_ITEMS.map((item, i) => {
        const Icon = ICONS[item.icon]
        return (
          <div className="item" key={i}>
            <Icon />
            <div>
              <b>{item.t}</b>
              <span>{item.s}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
