// components/ServiceCard.js

import Link from 'next/link'

export default function ServiceCard({ service }) {
  const serviceParam = encodeURIComponent(service)

  return (
    <Link href={`/service?service=${serviceParam}`}>
      <div className="border rounded p-4 hover:shadow-md transition cursor-pointer bg-white">
        <h2 className="text-xl font-semibold">{service}</h2>
        <p className="text-sm text-gray-600">Detaylı bilgi için tıklayın</p>
      </div>
    </Link>
  )
}
