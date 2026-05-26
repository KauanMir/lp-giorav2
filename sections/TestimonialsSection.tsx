import { Reveal } from '@/components/ui/Reveal'
import { StarRow } from '@/components/ui/StarRow'
import { TESTIMONIALS } from '@/lib/constants'

export function TestimonialsSection() {
  return (
    <section className="section" id="avaliacoes">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Avaliações</span>
          <h2>Quem usa, <span className="accent">sente a diferença.</span></h2>
        </Reveal>
        <div className="quotes-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="quote-card">
                <span className="q-mark">&ldquo;</span>
                <p>{t.q}</p>
                <div className="q-foot">
                  <span className="q-avatar" style={{ background: t.avatarGradient }} />
                  <div className="q-meta">
                    <span className="q-stars"><StarRow size={11} /></span>
                    <span className="q-by">Cliente verificada</span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
