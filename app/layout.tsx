import type { Metadata } from 'next'
import { Cormorant_Garamond, Marcellus, Manrope, JetBrains_Mono, Jost } from 'next/font/google'
import { LenisProvider } from '@/components/layout/LenisProvider'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sérum Facial GIORA — Tecnologia Coreana com Glow Dourado',
  description:
    'O sérum dourado com PDRN, exossomos e ácido hialurônico. Tecnologia coreana avançada para pele mais firme, hidratada e iluminada.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${marcellus.variable} ${manrope.variable} ${jetbrainsMono.variable} ${jost.variable}`}
    >
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}
