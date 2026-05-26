import { Reveal } from '@/components/ui/Reveal'

const STATS = [
  { b: 'PDRN', s: 'Regeneração' },
  { b: 'Exossomos', s: 'Rejuvenescimento' },
  { b: 'Hialurônico', s: 'Hidratação' },
  { b: 'Mica', s: 'Glow' },
]

export function GoldenTechSection() {
  return (
    <section className="section golden-tech">
      <div className="wrap">
        <Reveal>
          <div className="golden-tech-card">
            <div className="gt-bg" aria-hidden="true" />
            <div className="gt-content">
              <span className="eyebrow" style={{ color: 'var(--gold-3)' }}>
                Tecnologia exclusiva
              </span>
              <h2 style={{ color: '#FFF5DA' }}>
                Conheça a{' '}
                <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--gold-3)' }}>
                  Golden Repair Technology™
                </span>
              </h2>
              <p style={{ color: 'rgba(255,245,218,0.78)', fontSize: 17, lineHeight: 1.55, maxWidth: 720 }}>
                Uma combinação inspirada na tecnologia coreana de regeneração que ajuda a devolver{' '}
                <b style={{ color: '#FFF5DA' }}>glow, hidratação e aparência rejuvenescida</b> à pele.
              </p>
              <div className="gt-stats">
                {STATS.map((s, i) => (
                  <div className="gt-stat" key={i}>
                    <b>{s.b}</b>
                    <span>{s.s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
