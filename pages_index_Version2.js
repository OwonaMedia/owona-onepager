import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function Home() {
  const faq = [
    { q: 'Wie schnell ist meine neue Website live?', a: 'Erste Version in 3–7 Werktagen, je nach Paket und Briefing.' },
    { q: 'Ist die Website DSGVO‑konform?', a: 'Wir liefern Impressum & eine DSGVO‑Kurzvariante; eine juristische Prüfung empfehlen wir zusätzlich.' }
  ]

  return (
    <Layout>
      <SEO title="Owona Media — Websites für KMU" description="Professionelle, responsive Websites für kleine und mittlere Unternehmen. Schnell, DSGVO‑bewusst und persönlich." path="/" faq={faq} />

      <section className="container hero" id="home" aria-labelledby="hero-heading">
        <div className="hero-left">
          <h1 id="hero-heading">Ihre neue Website — schnell, persönlich, professionell</h1>
          <p>Wir erstellen hochwertige, conversion‑optimierte Websites für kleine und mittelständische Unternehmen — fertig in Tagen, nicht Wochen.</p>
          <div className="cta-row">
            <a className="btn" href="#contact">Jetzt Website erstellen lassen</a>
            <a className="btn-ghost" href="#pricing">Preise ansehen</a>
          </div>

          <div style={{marginTop:18}}>
            <div className="card contact-card" style={{maxWidth:520}}>
              <strong>Kontakt</strong><br />
              Telefon: <a href="tel:+4962034202697">+49 6203 4202697</a><br />
              E‑Mail: <a href="mailto:salomon@owona.de">salomon@owona.de</a>
            </div>
          </div>
        </div>

        <div style={{flex:1}}>
          {/* Hero image / decorative */}
          <img src="/logo.png" alt="Owona Media" style={{width:'100%',maxWidth:420,display:'block'}}/>
        </div>
      </section>

      <section className="container" id="features" aria-labelledby="features-heading">
        <h2 id="features-heading">Warum Owona Media</h2>
        <div className="grid">
          <div className="card">
            <h4>Schnell</h4>
            <p>Fertige erste Version innerhalb von 3–7 Werktagen.</p>
          </div>
          <div className="card">
            <h4>Persönlich</h4>
            <p>Direkter Ansprechpartner & individuelles Design.</p>
          </div>
          <div className="card">
            <h4>DSGVO‑bewusst</h4>
            <p>Impressum & Datenschutzhinweis inklusive; Hinweise zu Hosting & Stripe bei Bedarf.</p>
          </div>
        </div>
      </section>

      <section className="container" id="pricing" aria-labelledby="pricing-heading">
        <h2 id="pricing-heading">Preise</h2>
        <p style={{color:'#6b7280'}}>Transparente Pakete — starte klein oder wähle Managed Support.</p>
        <div className="pricing">
          <div className="card plan">
            <h3>One Page</h3>
            <div style={{fontSize:20,fontWeight:700}}>7,90 €</div>
            <ul>
              <li>1 Seite</li>
              <li>Mobile‑optimiert</li>
              <li>SSL & Grund‑SEO</li>
            </ul>
            <a className="btn" href="#contact">Bestellen</a>
          </div>

          <div className="card plan">
            <h3>5 Pages</h3>
            <div style={{fontSize:20,fontWeight:700}}>17,90 €</div>
            <ul>
              <li>Bis zu 5 Seiten</li>
              <li>Impressum & Datenschutz</li>
              <li>Basis‑SEO</li>
            </ul>
            <a className="btn" href="#contact">Bestellen</a>
          </div>

          <div className="card plan">
            <h3>Managed Premium</h3>
            <div style={{fontSize:20,fontWeight:700}}>99 €/Monat</div>
            <ul>
              <li>Monatliche Änderungen</li>
              <li>Backups & Support</li>
              <li>Priorisierter Service</li>
            </ul>
            <a className="btn" href="#contact">Bestellen</a>
          </div>
        </div>
      </section>

      <section className="container" id="references" aria-labelledby="references-heading">
        <h2 id="references-heading">Referenzen</h2>
        <div className="grid">
          <div className="card">
            <h4>WhatsApp.owona.de</h4>
            <p>Schnelle Onepager‑Lösung mit Fokus auf Mobile.</p>
            <a href="https://whatsapp.owona.de" target="_blank" rel="noreferrer">Visit</a>
          </div>
          <div className="card">
            <h4>salomonowona.com</h4>
            <p>Unternehmenswebsite mit Teamseiten und Leistungsdarstellung.</p>
            <a href="https://salomonowona.com" target="_blank" rel="noreferrer">Visit</a>
          </div>
        </div>
      </section>

      <section className="container" id="contact" aria-labelledby="contact-heading">
        <h2 id="contact-heading">Kontakt</h2>
        <p>Schreibe uns dein Projekt oder vereinbare ein kostenloses Erstgespräch.</p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:20}}>
          <div>
            <form action={`mailto:salomon@owona.de`} method="post" encType="text/plain">
              <input name="Name" placeholder="Name" style={{width:'100%',padding:10,marginBottom:8}} required />
              <input name="Firma" placeholder="Firma" style={{width:'100%',padding:10,marginBottom:8}} />
              <input name="E-Mail" placeholder="E‑Mail" style={{width:'100%',padding:10,marginBottom:8}} required />
              <textarea name="Nachricht" placeholder="Kurzbeschreibung Ihres Projekts" rows="6" style={{width:'100%',padding:10,marginBottom:8}} />
              <button className="btn" type="submit">Anfrage senden</button>
            </form>
          </div>

          <div>
            <div className="card contact-card">
              <h4>Direkter Kontakt</h4>
              <p>Telefon: <a href="tel:+4962034202697">+49 6203 4202697</a><br/>E‑Mail: <a href="mailto:salomon@owona.de">salomon@owona.de</a></p>
              <p style={{color: '#6b7280', fontSize:13}}>Oder schreibe uns direkt per E‑Mail — wir melden uns zeitnah.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}