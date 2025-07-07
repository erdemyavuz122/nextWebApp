// pages/service.js

import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { JsonLd, Article } from 'react-schemaorg'
import { siteConfig } from '../lib/siteConfig'
import { articles } from '../lib/articles'
import ReviewList from '../components/ReviewList'

export default function ServicePage() {
  const router = useRouter()
  const { service } = router.query
  const decodedService = decodeURIComponent(service || '')

  if (!decodedService) return null

  const articleContent = articles[decodedService] || "Bu hizmet hakkında yakında daha fazla bilgi eklenecektir."

  return (
    <Layout>
      {/* Schema.org JSON-LD verisi */}
      <JsonLd>
        <Article
          name={decodedService}
          headline={`Profesyonel ${decodedService}`}
          author={{ "@type": "Organization", name: siteConfig.companyName }}
          datePublished="2025-07-07"
          publisher={{
            "@type": "Organization",
            name: siteConfig.companyName,
            logo: {
              "@type": "ImageObject",
              url: "/logo.png",
            },
          }}
          mainEntityOfPage={`https://example.com/service?service=${encodeURIComponent(decodedService)}`}
        />
      </JsonLd>

      {/* Sayfa içeriği */}
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">{decodedService}</h1>

        {/* Yetkili servis uyarısı */}
        <div className="bg-yellow-100 text-yellow-800 p-4 rounded mb-4 text-sm">
          Bu site yetkili servis değildir. Sadece garanti süresi dolmuş cihazlar için tamir, bakım ve onarım hizmeti verilmektedir.
        </div>

        {/* Makale içeriği */}
        <p className="mb-8">{articleContent}</p>

        {/* Sahte yorumlar */}
        <ReviewList service={decodedService} />
      </div>
    </Layout>
  )
}
