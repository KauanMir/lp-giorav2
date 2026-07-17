import { Reveal } from '@/components/ui/Reveal'
import { ScrollCta } from '@/components/ui/ScrollCta'
import { Ic } from '@/components/ui/Icons'

export function FinalCTASection() {
  return (
    <section
      className="section section-dark"
      style={{ padding: '96px 0', position: 'relative', overflow: 'hidden' }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', inset: 0,
          background:
            'radial-gradient(800px 400px at 50% 0%, rgba(216,184,112,0.18), transparent 70%), radial-gradient(600px 300px at 50% 100%, rgba(216,184,112,0.10), transparent 70%)',
        }}
      />
      <div className="wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <Reveal>
          <span className="eyebrow" style={{ color: 'var(--gold-3)' }}>
            Sérum Facial GIORA
          </span>
          <h2
            style={{
              fontFamily: 'var(--display)',
              fontSize: 52,
              lineHeight: 1.04,
              color: 'var(--bg-2)',
              marginTop: 18,
              letterSpacing: '-0.01em',
              maxWidth: 760,
              marginInline: 'auto',
            }}
          >
            Não é apenas skincare.<br />
            <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--gold-3)' }}>
              É ouro líquido para sua pele.
            </span>
          </h2>
          <p
            style={{
              color: 'rgba(255,245,218,0.7)',
              fontSize: 16,
              maxWidth: 560,
              margin: '20px auto 32px',
            }}
          >
            Tecnologia coreana avançada com PDRN, exossomos e ácido hialurônico.
            Glow dourado, hidratação profunda e pele rejuvenescida.
          </p>
          <ScrollCta
            to="checkout"
            className="cta cta-gold"
            style={{ width: 'auto', display: 'inline-flex', padding: '20px 36px', maxWidth: 460 }}
          >
            <span className="cta-main">Quero minha pele dourada</span>
            <span className="cta-arrow">
              <Ic.ChevronRight size={16} />
            </span>
          </ScrollCta>
          <p
            style={{
              color: 'rgba(255,245,218,0.45)',
              fontSize: 11,
              marginTop: 20,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            Frete grátis full · Pix ou 12x sem juros
          </p>
        </Reveal>
      </div>
    </section>
  )
}
