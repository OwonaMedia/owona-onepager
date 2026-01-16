One‑Pager (Owona Media) — statische Next.js Version

Vorbereitung
1. Lege dein Logo aus dem Chat in: public/logo.png
2. Node 18+ installiert haben

Install & Local Test
1. npm install
2. npm run dev
   -> öffne http://localhost:3000

Build / Export (statisch)
1. npm run build
2. npm run export
   -> Statische Dateien befinden sich im Ordner "out/"

Deploy
- Vercel: direkt das Projekt verbinden (Next.js wird erkannt)
- Netlify: lade den Inhalt von "out/" hoch (oder nutze Netlify Build mit export script)
- S3 / CloudFront: upload "out/"

Anmerkungen
- Kein Bezahlsystem enthalten (wie besprochen).
- Kontaktformular nutzt mailto, du kannst später ein Formular‑Backend (z. B. Formspree) hinzufügen.
- JSON‑LD (Organization, FAQ) ist in components/SEO.js integriert.
- Für LLM/AI‑Indexing: sitemap.xml, FAQ‑Schema und klare TL;DRs sind vorhanden.

Wenn du bereit bist, baue ich daraus in einem zweiten Schritt:
- vollständige mehrsprachige Inhalte,
- verbesserte Bildauswahl (Stock Fotos in Figma),
- oder ich setze die fertigen Figma‑Designs als HTML/CSS um.