import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function Home() {
	const faq = [
		{ q: 'Wie schnell ist die Fertigstellung?', a: 'Erste Version in 3–7 Werktagen, Livegang nach Abstimmung.' },
		{ q: 'Werden rechtliche Texte mitgeliefert?', a: 'DSGVO‑Basis & Impressum sind im Paket. Individuelle Rechtstexte optional.' },
		{ q: 'Kann ich später Seiten ergänzen?', a: 'Ja, Upgrades jederzeit möglich.' },
		{ q: 'Wo werden Daten gespeichert?', a: 'Server: 173.249.2.158 (EU/DE). Ordner pro Kunde.' }
	];

	return (
		<Layout>
			<SEO title="Owona Media — Websites für KMU" description="Professionelle, responsive Websites für kleine und mittlere Unternehmen. Schnell, DSGVO‑bewusst und persönlich." path="/" faq={faq} />


			<section className="container hero" id="home" aria-labelledby="hero-heading">
				<div className="hero-left">
					<h1 id="hero-heading">Ihre neue Website — schnell, persönlich, ohne Baukasten‑Look</h1>
					<p>Wir erstellen hochwertige, conversion‑optimierte Websites für kleine und mittelständische Unternehmen — fertig in Tagen, nicht Wochen. Maßgeschneidertes Design, kein Baukasten-Look, SEO‑grundoptimiert & DSGVO‑konform, mobile‑first und mit persönlichem Ansprechpartner.</p>
					<ul style={{margin:'18px 0 18px 18px',color:'#444',fontSize:'1.08em'}}>
						<li><b>Maßgeschneidertes Design</b> — keine Standard‑Templates, sondern echtes Design mit Conversion‑Fokus.</li>
						<li><b>SEO‑grundoptimiert & DSGVO‑konform</b> — On‑Page SEO, Ladezeitoptimierung und DSGVO‑Ready‑Pakete inklusive.</li>
						<li><b>Mobile‑first & Performance</b> — Schnelle Ladezeiten, barrierearme Struktur und responsive Darstellung.</li>
						<li><b>Pflege & Sicherheit</b> — Regelmäßige Backups, SSL, Security‑Updates und optionales Content‑Management.</li>
					</ul>
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
						<p>Direkter Ansprechpartner + individuelles Design.</p>
					</div>
					<div className="card">
						<h4>Mehr Leistung zum besseren Preis</h4>
						<p>Professionelles Ergebnis ohne Agentur‑Preise.</p>
					</div>
				</div>
			</section>

			<section className="container" id="pricing" aria-labelledby="pricing-heading">
				<h2 id="pricing-heading">Preise</h2>
				<p style={{color:'#6b7280'}}>Klar, transparent und modular — wählen Sie das Paket oder lassen Sie sich ein individuelles Angebot erstellen.</p>
				<div className="pricing">
					<div className="card plan">
						<h3>One Page</h3>
						<div style={{fontSize:20,fontWeight:700}}>7,90 € (einmalig)</div>
						<ul>
							<li>1 Seite, Mobile‑optimiert, SSL, Grund‑SEO, Kontaktformular</li>
							<li>Ideal für: Solo‑Selbständige & einfache Präsenzseiten</li>
						</ul>
						<a className="btn" href="#contact">One Page bestellen</a>
					</div>
					<div className="card plan">
						<h3>5 Pages</h3>
						<div style={{fontSize:20,fontWeight:700}}>17,90 € (einmalig)</div>
						<ul>
							<li>Bis zu 5 Seiten, Impressum/Datenschutz‑Integration, Basis‑SEO, 2 Kontaktformular‑Varianten</li>
						</ul>
						<a className="btn" href="#contact">5 Pages bestellen</a>
					</div>
					<div className="card plan">
						<h3>10 Pages</h3>
						<div style={{fontSize:20,fontWeight:700}}>24,90 € (einmalig)</div>
						<ul>
							<li>Bis zu 10 Seiten, Blog‑Startseite, Basis‑SEO, Performance‑Optimierung</li>
						</ul>
						<a className="btn" href="#contact">10 Pages bestellen</a>
					</div>
					<div className="card plan">
						<h3>Managed Basic</h3>
						<div style={{fontSize:20,fontWeight:700}}>17 €/Monat</div>
						<ul>
							<li>Onepager, Hosting, SSL, Support per E‑Mail (keine regelmäßigen Änderungen)</li>
						</ul>
						<a className="btn" href="#contact">Managed Basic buchen</a>
					</div>
					<div className="card plan">
						<h3>Managed Premium</h3>
						<div style={{fontSize:20,fontWeight:700}}>99 €/Monat <span style={{color:'#FFD166',fontWeight:400}}>(meistgebucht)</span></div>
						<ul>
							<li>Bis zu 10 Seiten, monatliche Content‑Änderungen, SEO‑Basis, Backups, 24/5 Support, Onboarding‑Call</li>
						</ul>
						<a className="btn" href="#contact">Premium jetzt buchen</a>
					</div>
				</div>
				<div style={{marginTop:24}}>
					<a className="btn-ghost" href="#contact">Zum vollständigen Preisplan</a>
				</div>
			</section>

			<section className="container" id="references" aria-labelledby="references-heading">
				<h2 id="references-heading">Referenzen</h2>
				<div className="grid">
					<div className="card">
						<h4>WhatsApp.owona.de</h4>
						<p>Onepager für Direktkommunikation (Mobile‑First, klare CTAs)</p>
						<a href="https://whatsapp.owona.de" target="_blank" rel="noreferrer">Visit</a>
					</div>
					<div className="card">
						<h4>salomonowona.com</h4>
						<p>Unternehmensseite mit Team‑Seiten & Kontaktformular</p>
						<a href="https://salomonowona.com" target="_blank" rel="noreferrer">Visit</a>
					</div>
					<div className="card">
						<h4>ndasi.com</h4>
						<p>Dienstleisterseite mit Buchungsintegration</p>
						<a href="https://ndasi.com" target="_blank" rel="noreferrer">Visit</a>
					</div>
				</div>
				<div style={{marginTop:18}}>
					<a className="btn-ghost" href="#contact">Weitere Projekte ansehen</a>
				</div>
			</section>

			<section className="container" id="contact" aria-labelledby="contact-heading">
				<h2 id="contact-heading">Kontaktieren Sie uns</h2>
				<p>Wir beraten Sie kostenlos und unverbindlich. Nutzen Sie das Formular oder kontaktieren Sie uns direkt per E‑Mail oder Telefon.</p>
				<div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:20}}>
					<div>
						<form action={`mailto:salomon@owona.de`} method="post" encType="text/plain">
							<input name="Name" placeholder="Name" style={{width:'100%',padding:10,marginBottom:8}} required />
							<input name="Firma" placeholder="Firma" style={{width:'100%',padding:10,marginBottom:8}} />
							<input name="E-Mail" placeholder="E‑Mail" style={{width:'100%',padding:10,marginBottom:8}} required />
							<input name="Telefon" placeholder="Telefon (optional)" style={{width:'100%',padding:10,marginBottom:8}} />
							<select name="Paket" style={{width:'100%',padding:10,marginBottom:8}}>
								<option value="">Gewünschtes Paket wählen</option>
								<option value="One Page">One Page</option>
								<option value="5 Pages">5 Pages</option>
								<option value="10 Pages">10 Pages</option>
								<option value="Managed Basic">Managed Basic</option>
								<option value="Managed Premium">Managed Premium</option>
								<option value="Enterprise">Enterprise</option>
							</select>
							<textarea name="Nachricht" placeholder="Kurzbeschreibung Ihres Projekts" rows="6" style={{width:'100%',padding:10,marginBottom:8}} />
							<label style={{fontSize:13,display:'block',marginBottom:8}}>
								<input type="checkbox" required style={{marginRight:6}} /> Ich willige in die Verarbeitung meiner Daten gemäß Datenschutzerklärung ein.
							</label>
							<button className="btn" type="submit">Anfrage senden</button>
						</form>
						<div style={{marginTop:10,color:'#6b7280',fontSize:13}}>Supportzeiten: Mo–Fr, 9–17 Uhr</div>
					</div>
					<div>
						<div className="card contact-card">
							<h4>Direkter Kontakt</h4>
							<p>Telefon: <a href="tel:+4962034202697">+49 6203 4202697</a><br/>E‑Mail: <a href="mailto:salomon@owona.de">salomon@owona.de</a></p>
							<p style={{color: '#6b7280', fontSize:13}}>Oder schreiben Sie uns direkt per E‑Mail — wir melden uns zeitnah.</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}
// ...existing code from pages_index_Version2.js will be placed here...