import { Reveal } from '@/components/ui/Reveal'
import { CinematicImage } from '@/components/ui/CinematicImage'

export function ManifestoSection() {
  return (
    <section className="section section-cream" id="manifesto">
      <div className="wrap">
        <div className="manifesto-grid">
          <Reveal>
            <div className="manifesto-media">
              <CinematicImage
                src="/images/manifesto/skincare-hero.png"
                alt="Sérum GIORA — modelo ao entardecer com frasco dourado"
                pos="center 30%"
                sizes="(max-width: 768px) 100vw, 45vw"
                priority
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="manifesto-text">
              <span className="eyebrow">Sobre o produto</span>
              <h2>
                Não é apenas skincare. <br />
                <span className="accent">É ouro líquido para sua pele.</span>
              </h2>
              <p>
                GIORA foi desenvolvido para transformar sua rotina de cuidados em um
                verdadeiro ritual de luxo. Sua fórmula dourada une ativos avançados de
                rejuvenescimento com uma textura glow sofisticada que deixa a pele
                iluminada desde a primeira aplicação.
              </p>
              <p>
                Inspirado nas tendências mais modernas do skincare coreano, GIORA entrega{' '}
                <b>hidratação profunda, aparência radiante e uma experiência visual única.</b>
              </p>
              <div className="manifesto-pills">
                <span className="pill">Glow dourado</span>
                <span className="pill">K-Beauty</span>
                <span className="pill">Ouro líquido</span>
                <span className="pill">Rejuvenescimento</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
