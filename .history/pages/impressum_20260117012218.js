import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function Impressum() {
	return (
		<Layout>
			<SEO title="Impressum — Owona Media" description="Impressum von Owona Media" path="/impressum" />
			<article className="container" style={{paddingTop:20}}>
				<h1>Impressum</h1>
				<p><strong>Diensteanbieter:</strong><br/>
				Owona Media<br/>
				Inhaber: Salomon Owona<br/>
				Ahornstrasse 52<br/>
				68542 Heddesheim<br/>
				Deutschland</p>

				<p><strong>Kontakt</strong><br/>
				Telefon: +49 6203 4202697<br/>
				E‑Mail: <a href="mailto:salomon@owona.de">salomon@owona.de</a></p>

				<h2>Hinweis</h2>
				<p>Dieses Impressum enthält allgemeine Angaben. Für eine rechtssichere Fassung empfehlen wir eine juristische Prüfung.</p>
			</article>
		</Layout>
	)
}
// ...existing code from pages_impressum_Version2.js will be placed here...