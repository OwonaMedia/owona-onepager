import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function Privacy() {
  return (
    <Layout>
      <SEO title="Datenschutzerklärung — Owona Media" description="Kurzfassung der Datenschutzerklärung" path="/privacy" />
      <article className="container" style={{paddingTop:20}}>
        <h1>Datenschutzerklärung (Kurzfassung)</h1>
        <p>Verantwortlich: Owona Media, Inhaber: Salomon Owona, Ahornstrasse 52, 68542 Heddesheim, Deutschland. Kontakt: salomon@owona.de</p>

        <h2>Welche Daten wir verarbeiten</h2>
        <p>Wir verarbeiten personenbezogene Daten, die Sie uns mitteilen (z. B. Name, E‑Mail, Dateien über das Dashboard), sowie technische Verbindungsdaten (IP, Browser).</p>

        <h2>Rechte der Betroffenen</h2>
        <p>Sie haben Auskunfts-, Berichtigungs- und Löschungsrechte. Kontakt: salomon@owona.de</p>

        <p><em>Dies ist eine Kurzfassung. Für die vollständige Datenschutzerklärung prüfen Sie bitte vor Live‑Betrieb mit Ihrem Rechtsberater.</em></p>
      </article>
    </Layout>
  )
}