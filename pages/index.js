// pages/index.js

import Layout from '../components/Layout'
import { JsonLd, LocalBusiness } from 'react-schemaorg'
import { siteConfig } from '../lib/siteConfig'
import ServiceCard from '../components/ServiceCard'

const services = [
  "Beyaz Eşya Servisi",
  "Buzdolabı",
  "Çamaşır Makinesi",
  "Bulaşık Makinesi",
  "Fırın",
  "Klima",
  "Kombi",
  "Televizyon"
]

export default function HomePage() {
  return (
    <Layout>
      {/* Schema.org LocalBusiness verisi */}
      <JsonLd>
        <LocalBusiness
          name={siteConfig.companyName}
          image="https://example.com/logo.png"
          address={{
            "@type": "PostalAddress",
            addressLocality: siteConfig.address,
            addressCountry: "TR"
          }}
          telephone={siteConfig.phone}
          url="https://example.com/"
        />
      </JsonLd>

      {/* Yetkili servis uyarısı */}
      <div className="bg-yellow-100 text-yellow-800 p-4 text-sm text-center">
        Bu site yetkili servis değildir. Sadece garantisi olmayan cihazlar için teknik destek sağlanmaktadır.
      </div>

      {/* Hero / Giriş */}
      <section className="text-center p-8">
        <h1 className="text-4xl font-bold mb-4">Profesyonel Teknik Servis Hizmetleri</h1>
        <p className="text-lg mb-4">
          {siteConfig.companyName} olarak garantisi bitmiş cihazlarınız için hızlı ve güvenilir servis sunuyoruz.
        </p>
        <a href={`tel:${siteConfig.phone}`} className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          📞 {siteConfig.phone} - Hemen Ara
        </a>
      </section>

      {/* Hizmet Kartları */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 pb-12">
        {services.map((service, i) => (
          <ServiceCard key={i} service={service} />
        ))}
      </section>
    </Layout>
  )
}
