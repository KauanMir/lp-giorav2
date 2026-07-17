export interface Kit {
  id: string
  units: number
  name: string
  desc: string
  price: number
  save?: number
  badge?: { kind: 'best' | 'deal'; label: string }
}

export const KITS: Kit[] = [
  {
    id: 'k1',
    units: 1,
    name: '1 Unidade — Sérum GIORA',
    desc: 'Glow Inicial · 30 dias de ritual',
    price: 197,
  },
  {
    id: 'k2',
    units: 2,
    name: '2 Unidades — Sérum GIORA',
    desc: 'Ritual Completo · 60 dias de tratamento',
    price: 334,
    save: 60,
    badge: { kind: 'best', label: 'Mais Vendido' },
  },
  {
    id: 'k3',
    units: 4,
    name: '4 Unidades — Sérum GIORA',
    desc: 'Tratamento Intensivo · 120 dias contínuos',
    price: 597,
    save: 191,
    badge: { kind: 'deal', label: 'Melhor Preço' },
  },
]

export const ATIVOS = [
  {
    name: 'PDRN',
    role: 'Regeneração e revitalização profunda',
    variant: 5 as const,
    p: 'Ajuda a melhorar a aparência da pele, promovendo viço, textura mais uniforme e sensação de renovação.',
    img: '/images/actives/a1.png',
    imgPos: 'center center',
  },
  {
    name: 'Exossomos',
    role: 'Tecnologia avançada para rejuvenescimento',
    variant: 1 as const,
    p: 'Ativo moderno conhecido por auxiliar na renovação da pele e melhorar a aparência do envelhecimento.',
    img: '/images/actives/a2.png',
    imgPos: 'center center',
  },
  {
    name: 'Ácido Hialurônico',
    role: 'Hidratação intensa e preenchimento',
    variant: 2 as const,
    p: 'Ajuda a manter a pele hidratada, macia e com aparência mais firme.',
    img: '/images/actives/a3.png',
    imgPos: 'center center',
  },
  {
    name: 'Extrato de Pêssego',
    role: 'Glow natural e luminosidade',
    variant: 3 as const,
    p: 'Contribui para uma aparência iluminada e saudável.',
    img: '/images/actives/a4.png',
    imgPos: 'center center',
  },
  {
    name: 'Extrato de Abacate',
    role: 'Nutrição e maciez',
    variant: 1 as const,
    p: 'Ajuda na hidratação e na sensação de pele sedosa.',
    img: '/images/actives/a5.png',
    imgPos: 'center center',
  },
  {
    name: 'Mica Dourada',
    role: 'Glow sofisticado imediato',
    variant: 5 as const,
    p: 'Responsável pelo brilho dourado luxuoso que deixa a pele iluminada instantaneamente.',
    img: '/images/actives/a6.png',
    imgPos: 'center center',
  },
]

export const PROBLEMS = [
  { t: 'Pele opaca', p: 'A falta de hidratação e renovação deixa a pele sem vida.' },
  { t: 'Linhas aparentes', p: 'A perda de firmeza faz a pele parecer cansada.' },
  { t: 'Textura irregular', p: 'Poros e ressecamento comprometem o glow natural.' },
  { t: 'Sensação de envelhecimento', p: 'Mesmo com maquiagem, a pele continua sem viço.' },
]

export const STEPS = [
  { n: '01', t: 'Limpe e seque a pele.', variant: 1 as const, img: '/images/steps/s1-new.png', imgPos: 'center 35%' },
  { n: '02', t: 'Aplique algumas gotas de GIORA no rosto.', variant: 2 as const, img: '/images/steps/s2.png', imgPos: 'center 40%' },
  { n: '03', t: 'Espalhe suavemente até absorver.', variant: 5 as const, img: '/images/steps/s3.png', imgPos: 'center 32%' },
  { n: '04', t: 'Aproveite o glow dourado da sua pele.', variant: 3 as const, img: '/images/steps/s4.png', imgPos: 'center 30%' },
]

export const TESTIMONIALS = [
  {
    q: 'Minha pele ficou muito mais iluminada. O glow que ele deixa é simplesmente surreal.',
    avatarGradient: 'linear-gradient(135deg,#C9A04A,#5C4724)',
  },
  {
    q: 'Parece skincare de marca internacional. A textura dourada chama MUITA atenção.',
    avatarGradient: 'linear-gradient(135deg,#E8D4A0,#A07A2A)',
  },
  {
    q: 'Minha pele amanhece muito mais hidratada e com aparência descansada.',
    avatarGradient: 'linear-gradient(135deg,#F5E6BD,#C9A04A)',
  },
]

export const TRUST_ROW_ITEMS = [
  { t: 'Tecnologia coreana', s: 'PDRN · Exossomos', icon: 'Sparkle' as const },
  { t: 'Ácido Hialurônico', s: 'Hidratação profunda', icon: 'Drop' as const },
  { t: 'Dermatologicamente seguro', s: 'Hipoalergênico', icon: 'Shield' as const },
  { t: 'Cruelty-free', s: 'Não testado em animais', icon: 'Leaf' as const },
]

export const AVATAR_GRADIENTS = [
  'linear-gradient(135deg,#C9A04A,#5C4724)',
  'linear-gradient(135deg,#E8D4A0,#A07A2A)',
  'linear-gradient(135deg,#D6BB7E,#7A5A22)',
  'linear-gradient(135deg,#B58A3A,#3A2C16)',
  'linear-gradient(135deg,#F5E6BD,#C9A04A)',
]

export function brl(n: number): string {
  return n.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}
