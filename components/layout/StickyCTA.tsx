'use client'

export function StickyCTA() {
  function scrollToBuyBox() {
    const el = document.querySelector('.buybox')
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth',
      })
    }
  }

  return (
    <div className="sticky-cta">
      <div className="price">
        <span className="p1">12x R$ 33,40</span>
        <span className="p2">Frete grátis full</span>
      </div>
      <button type="button" onClick={scrollToBuyBox}>
        Quero minha pele dourada →
      </button>
    </div>
  )
}
