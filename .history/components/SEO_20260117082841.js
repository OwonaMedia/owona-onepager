import Head from 'next/head'

export default function SEO({ title, description, path = '/', faq = [] }) {
  const siteUrl = (process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000').replace(/\/$/, '')
  const url = siteUrl + path
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Owona Media",
    "url": siteUrl,
    "logo": siteUrl + "/logo.png",
    "contactPoint": [{
      "@type":"ContactPoint",
      "telephone":"+49 6203 4202697",
      "contactType":"customer support",
      "email":"salomon@owona.de",
      "areaServed":"DE"
    }]
  }
  const faqSchema = faq.length ? {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    "mainEntity": faq.map(q => ({
      "@type":"Question",
      "name": q.q,
      "acceptedAnswer": { "@type":"Answer", "text": q.a }
    }))
  } : null

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
    </Head>
  )
}
