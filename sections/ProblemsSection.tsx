import { Reveal } from '@/components/ui/Reveal'
import { PROBLEMS } from '@/lib/constants'

export function ProblemsSection() {
  return (
    <section className="section section-dark" id="problemas">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow" style={{ color: 'var(--gold-3)' }}>Por que GIORA?</span>
          <h2 style={{ color: 'var(--bg-2)' }}>
            Sua pele perdeu o{' '}
            <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--gold-3)' }}>
              brilho natural?
            </span>
          </h2>
          <p style={{ color: 'rgba(255,245,218,0.65)' }}>
            4 sinais de que sua pele está pedindo socorro.
          </p>
        </Reveal>
        <div className="problems-grid">
          {PROBLEMS.map((b, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="problem-card">
                <span className="problem-n">0{i + 1}</span>
                <h3>{b.t}</h3>
                <p>{b.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
