import { Reveal } from '@/components/ui/Reveal'
import { ScrollCta } from '@/components/ui/ScrollCta'
import { Ic } from '@/components/ui/Icons'

export function RitualSection() {
  return (
    <section className="section section-cream">
      <div className="wrap">
        <div className="ritual-grid">
          <Reveal>
            <div className="ritual-text">
              <span className="eyebrow">Sobre a experiência</span>
              <h2>
                Um ritual de luxo <span className="accent">todas as noites.</span>
              </h2>
              <p>
                A textura leve, o brilho dourado e a absorção confortável transformam
                sua rotina em um momento de autocuidado sofisticado.
              </p>
              <p>
                GIORA não foi criado apenas para cuidar da pele.{' '}
                <b>Foi criado para fazer você sentir sua pele mais bonita, iluminada e valiosa.</b>
              </p>
              <ScrollCta to="checkout" className="cta cta-gold" style={{ width: 'auto', maxWidth: 380, marginTop: 8 }}>
                <span className="cta-main">Quero meu Sérum GIORA</span>
                <span className="cta-arrow">
                  <Ic.ChevronRight size={16} />
                </span>
              </ScrollCta>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="ritual-video">
              <div className="ritual-video-placeholder" aria-hidden="true" />
              <span className="ritual-play"><Ic.Play size={28} /></span>
              <span className="ritual-vlabel">Vídeo em breve</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
