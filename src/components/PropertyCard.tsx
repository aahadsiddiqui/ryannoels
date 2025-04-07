import Image from 'next/image'
import Link from 'next/link'

interface PropertyCardProps {
  id: string
  title: string
  price: string
  location: string
  bedrooms: number
  bathrooms: number
  squareFeet: number
  imageUrl: string
}

export default function PropertyCard({
  id,
  title,
  price,
  location,
  bedrooms,
  bathrooms,
  squareFeet,
  imageUrl,
}: PropertyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-2xl font-bold text-primary mb-2">{price}</p>
        <p className="text-gray-600 mb-4">{location}</p>
        <div className="flex justify-between text-gray-600 mb-4">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            {bedrooms} beds
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {bathrooms} baths
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
            {squareFeet} sqft
          </div>
        </div>
        <Link
          href={`/properties/${id}`}
          className="block w-full text-center btn"
        >
          View Details
        </Link>
      </div>
    </div>
  )
} 