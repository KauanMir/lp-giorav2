const WORDS = [
  'Sérum GIORA',
  'Ouro líquido para sua pele',
  'Golden Repair Technology™',
  'PDRN · Exossomos · Hialurônico',
  'Glow Dourado',
  'Queridinho do TikTok',
  'Tecnologia Coreana',
]

function MarqueeRow() {
  return (
    <span>
      {WORDS.map((w, i) => (
        <span key={i}>
          <em style={{ fontStyle: 'normal' }}>{w}</em>
          <span className="sep">✦</span>
        </span>
      ))}
    </span>
  )
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  )
}
