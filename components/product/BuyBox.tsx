'use client'

import { Ic } from '@/components/ui/Icons'
import { StarRow } from '@/components/ui/StarRow'
import { KitSelector } from './KitSelector'
import { KITS, brl } from '@/lib/constants'
import { useKitSelection } from '@/lib/kit-selection'

export function BuyBox() {
  const { selected, setSelected } = useKitSelection()
  const kit = KITS.find((k) => k.id === selected)!
  const installment = kit.installment

  return (
    <div className="buybox">
      <div className="reviews-row">
        <StarRow value={5} size={13} />
        <span style={{ color: 'var(--ink-2)', fontWeight: 600 }}>Lançamento oficial</span>
        <span style={{ color: 'var(--ink-4)' }}>·</span>
        <a href="#avaliacoes">Veja avaliações</a>
      </div>

      <div>
        <h1 className="product-title">
          Sérum Facial <span className="accent">GIORA</span>
        </h1>
        <p className="product-sub">
          O sérum dourado que transforma sua pele em um ritual de luxo. Com{' '}
          <b>PDRN, exossomos e ácido hialurônico</b>, GIORA combina a mais avançada
          tecnologia coreana com um glow dourado sofisticado para uma pele mais
          iluminada, hidratada e rejuvenescida.
        </p>
      </div>

      <ul className="bullets">
        <li><Ic.Check size={14} /><span><b>Glow dourado imediato</b></span></li>
        <li><Ic.Check size={14} /><span><b>Tecnologia coreana avançada</b></span></li>
        <li><Ic.Check size={14} /><span><b>Pele mais firme e hidratada</b></span></li>
        <li><Ic.Check size={14} /><span><b>Textura leve e sofisticada</b></span></li>
        <li><Ic.Check size={14} /><span><b>Queridinho do TikTok</b> ✦</span></li>
      </ul>

      <div className="price-box">
        <div className="left">
          <span className="price-installments">
            <small>12x </small>
            <b>R$ {brl(installment).split(',')[0]}<small>,{brl(installment).split(',')[1]}</small></b>
          </span>
          <span className="price-cash">
            ou <b>R$ {brl(kit.price)}</b> à vista no Pix
          </span>
        </div>
        <div className="price-off">Oferta</div>
      </div>

      <KitSelector kits={KITS} selected={selected} onSelect={setSelected} />

      <a href={kit.checkoutUrl} className="cta cta-gold">
        <span className="cta-main">Quero minha pele dourada</span>
        <span className="cta-arrow">
          <Ic.ChevronRight size={18} />
        </span>
      </a>

      <div className="cta-sub">
        <span className="sec"><Ic.Lock /> Compra 100% segura</span>
        <span className="sec"><Ic.CreditCard /> Pix · Cartão · Boleto</span>
      </div>
    </div>
  )
}
