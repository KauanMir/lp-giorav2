import Image from 'next/image'

export function Header() {
  return (
    <header className="site-header">
      <div className="wrap row">
        <nav className="nav-left">
          <a href="#beneficios">Sérum Giora</a>
          <a href="#ativos">Ativos</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <a className="brand" href="#">
          <Image
            src="/images/logo.png"
            alt="GIORA"
            width={90}
            height={28}
            priority
            style={{ objectFit: 'contain' }}
          />
        </a>
        <div className="nav-right" />
      </div>
    </header>
  )
}
