import { Reveal } from '@/components/ui/Reveal'
import { CinematicImage } from '@/components/ui/CinematicImage'
import { STEPS } from '@/lib/constants'

export function ComoUsarSection() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Modo de uso</span>
          <h2>Simples. Sofisticado. <span className="accent">Poderoso.</span></h2>
          <p>4 passos para o seu glow dourado diário.</p>
        </Reveal>
        <div className="steps-grid">
          {STEPS.map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="step-card">
                <div className="step-pic" style={{ position: 'relative' }}>
                  <CinematicImage
                    src={s.img}
                    alt={`Passo ${s.n} — ${s.t}`}
                    pos={s.imgPos}
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="step-body">
                  <span className="step-num">Passo {s.n}</span>
                  <h3>{s.t}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
