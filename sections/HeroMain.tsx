import Image, { getImageProps } from 'next/image'
import { preload } from 'react-dom'
import { HeroRibbon } from '@/components/ui/HeroRibbon'
import { HeroAnimationGate } from '@/components/ui/HeroAnimationGate'

// Mobile and desktop each render their own priority HERO.png at a different
// `sizes`. Without media-scoping, Next's automatic priority preload/eager
// fetch for BOTH would each start immediately regardless of which one CSS
// actually shows for the current breakpoint (display:none does not stop an
// eager/priority image from loading), doubling the transfer on every visit.
// Preloading manually via React's resource API — matching the same
// breakpoint used by .hero-export-desktop/.hero-export-mobile in
// globals.css — lets the browser fetch only the variant that matches the
// current viewport; the two <Image> below are left un-prioritized since
// this preload already gives the right one its head start, and the other
// one (display:none) never gets requested at all.
function preloadHero(sizes: string, media: string) {
  const { props } = getImageProps({
    src: '/images/novos/HERO.png',
    alt: '',
    width: 2916,
    height: 1834,
    quality: 75,
    sizes,
  })
  preload(props.src, { as: 'image', imageSrcSet: props.srcSet, imageSizes: props.sizes, media })
}

export function HeroMain() {
  preloadHero('100vw', '(max-width: 1099.98px)')
  preloadHero('82vw', '(min-width: 1100px)')

  return (
    <section className="hero-export">
      <HeroAnimationGate />
      {/* ============================ MOBILE ============================ */}
      <div className="hero-export-mobile">
        <div className="hero-export-anim hero-export-glow-mobile" />
        <div className="hero-export-wash-mobile" />

        <div className="hero-export-content-mobile">
          <Image
            src="/images/logo.png"
            alt="GIORA"
            width={90}
            height={28}
            priority
            className="hero-export-anim hero-export-logo hero-export-logo-mobile"
          />
          <div className="hero-export-anim hero-export-line hero-export-line-mobile" />
          <h1 className="hero-export-anim hero-export-title hero-export-title-mobile">
            O sérum <em>dourado</em> que transforma sua pele em <em>um ritual de luxo.</em>
          </h1>
          <p className="hero-export-anim hero-export-sub hero-export-sub-mobile">
            Com PDRN, exossomos e ácido hialurônico.
          </p>
        </div>

        <div className="hero-export-media-mobile">
          <Image
            src="/images/novos/HERO.png"
            alt="Modelo GIORA segurando o sérum dourado"
            width={2916}
            height={1834}
            sizes="100vw"
            className="hero-export-anim hero-export-img hero-export-img-mobile"
          />
        </div>

        <div className="hero-export-ribbon hero-export-ribbon-mobile">
          <HeroRibbon
            className="hero-export-ribbon-svg"
            viewBox="0 0 820 134"
            pathId="hero-ribbon-m"
            pathD="M -90,76 C 170,44 340,102 500,72 C 640,47 780,50 920,76"
            strokeWidth={52}
            fontSize={17}
            letterSpacing={1.4}
            dist={900}
          />
        </div>
      </div>

      {/* ============================ DESKTOP ============================ */}
      <div className="hero-export-desktop">
        <div className="hero-export-anim hero-export-glow-1" />
        <div className="hero-export-anim hero-export-glow-2" />
        <div className="hero-export-wash-desktop" />

        <Image
          src="/images/novos/HERO.png"
          alt="Modelo GIORA segurando o sérum dourado"
          width={2916}
          height={1834}
          sizes="82vw"
          className="hero-export-anim hero-export-img hero-export-img-desktop"
        />

        <div className="hero-export-content-desktop">
          <Image
            src="/images/logo.png"
            alt="GIORA"
            width={90}
            height={28}
            priority
            className="hero-export-anim hero-export-logo hero-export-logo-desktop"
          />
          <div className="hero-export-anim hero-export-line hero-export-line-desktop" />
          <h1 className="hero-export-anim hero-export-title hero-export-title-desktop">
            O sérum <em>dourado</em> que transforma sua pele em{' '}
            <em className="hero-export-nowrap">um ritual de luxo.</em>
          </h1>
          <p className="hero-export-anim hero-export-sub hero-export-sub-desktop">
            Com PDRN, exossomos e ácido hialurônico.
          </p>
        </div>

        <div className="hero-export-ribbon hero-export-ribbon-desktop">
          <HeroRibbon
            className="hero-export-ribbon-svg"
            viewBox="0 0 1400 240"
            pathId="hero-ribbon-d"
            pathD="M -160,132 C 240,74 520,188 800,124 C 1050,76 1300,90 1560,118"
            strokeWidth={75}
            fontSize={28}
            letterSpacing={2}
            dist={1500}
          />
        </div>
      </div>
    </section>
  )
}
