import { Reveal } from '@/components/ui/Reveal'
import { CinematicImage } from '@/components/ui/CinematicImage'
import { ATIVOS } from '@/lib/constants'

export function ActivesSection() {
  return (
    <section className="section section-cream" id="ativos">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">A fórmula</span>
          <h2>O poder da fórmula <span className="accent">GIORA.</span></h2>
          <p>
            6 ativos selecionados de tecnologia coreana avançada para entregar glow
            dourado, hidratação e rejuvenescimento.
          </p>
        </Reveal>
        <div className="actives-6">
          {ATIVOS.map((a, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="active6-card">
                <div className="a6-pic" style={{ position: 'relative' }}>
                  <CinematicImage
                    src={a.img}
                    alt={`${a.name} — ${a.role}`}
                    pos={a.imgPos}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="a6-body">
                  <h3 className="a6-name">{a.name}</h3>
                  <span className="a6-role">{a.role}</span>
                  <p>{a.p}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
