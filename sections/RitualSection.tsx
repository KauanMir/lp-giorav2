import { Reveal } from '@/components/ui/Reveal'
import { CinematicImage } from '@/components/ui/CinematicImage'
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
              <a href="#" className="cta cta-gold" style={{ width: 'auto', maxWidth: 380, marginTop: 8 }}>
                <span className="cta-main">Quero meu Sérum GIORA</span>
                <span className="cta-arrow">
                  <Ic.ChevronRight size={16} />
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="ritual-video">
              <CinematicImage
                src="/images/ritual/hero.jpg"
                alt="Sérum GIORA — ritual noturno, modelo com frasco dourado ao entardecer"
                pos="38% center"
                sizes="(max-width: 768px) 100vw, 45vw"
              />
              <span className="ritual-play"><Ic.Play size={28} /></span>
              <span className="ritual-vlabel">Vídeo · Aplicação do Sérum GIORA</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
