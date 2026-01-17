import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <header className="container header" role="banner">
        <div className="brand">
          <img src="/logo.png" alt="Owona Media" />
          <div style={{fontWeight:700}}>Owona Media</div>
        </div>
        <nav className="nav" role="navigation" aria-label="Hauptnavigation">
          <Link href="#features"><a>Features</a></Link>
          <Link href="#pricing"><a>Preise</a></Link>
          <Link href="#references"><a>Referenzen</a></Link>
          <Link href="#contact"><a>Kontakt</a></Link>
          <Link href="/impressum"><a style={{marginLeft:12}}>Impressum</a></Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="container footer" role="contentinfo">
        <div>© {new Date().getFullYear()} Owona Media</div>
        <div>
          <a href="/privacy">Datenschutzerklärung</a>
          <span style={{marginLeft:12}}>|</span>
          <a href="/impressum" style={{marginLeft:12}}>Impressum</a>
        </div>
      </footer>
    </>
  )
}
