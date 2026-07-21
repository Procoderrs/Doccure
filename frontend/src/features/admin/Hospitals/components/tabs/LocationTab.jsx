import React from 'react'
import { RiMapPinLine } from "@remixicon/react"

export default function LocationTab({ hospital }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6">
      <h3 className="font-bold text-lg text-gray-900 mb-4">Location</h3>
      <p className="flex items-center gap-2 text-gray-700 mb-4">
        <RiMapPinLine size={16} /> {hospital.address}
      </p>
      <div className="h-56 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm mb-3">
        Map Preview
      </div>
      <a href={hospital.mapLink} target="_blank" rel="noreferrer" className="text-[#316dff] font-medium text-sm">
        Open in Google Maps
      </a>
    </div>
  )
}