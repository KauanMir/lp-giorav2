import Image from 'next/image'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">

          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <Image
                src="/images/logo.png"
                alt="GIORA"
                width={115}
                height={36}
                style={{ objectFit: 'contain', filter: 'invert(1)' }}
              />
            </a>
            <p>Sérum Facial GIORA · Tecnologia coreana avançada com PDRN, exossomos e ácido hialurônico. Ouro líquido para sua pele.</p>
          </div>

          <div className="footer-nav">
            <h5>Produto</h5>
            <ul>
              <li><a href="#manifesto">Sobre o GIORA</a></li>
              <li><a href="#ativos">Ativos</a></li>
              <li><a href="#avaliacoes">Avaliações</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} GIORA · Todos os direitos reservados</span>
        </div>
      </div>
    </footer>
  )
}
