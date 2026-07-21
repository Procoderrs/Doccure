import React from 'react'
import { RiMailLine, RiPhoneLine, RiMapPinLine } from "@remixicon/react"

export default function ProfileTab({ hospital }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6">
      <h3 className="font-bold text-lg text-gray-900 mb-4">Hospital Profile</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm mb-5">
        <Info label="Email" value={hospital.email} icon={<RiMailLine size={14} />} />
        <Info label="Phone" value={hospital.phone} icon={<RiPhoneLine size={14} />} />
        <Info label="City" value={hospital.city} />
        <Info label="Total Doctors" value={hospital.totalDoctors} />
      </div>
      <p className="text-sm text-gray-500 mb-1 flex items-center gap-1"><RiMapPinLine size={14} /> Address</p>
      <p className="text-gray-900 font-medium mb-4">{hospital.address}</p>

      <p className="text-sm text-gray-500 mb-2">Facilities</p>
      <div className="flex flex-wrap gap-2">
        {hospital.facilities.map((f) => (
          <span key={f} className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full">{f}</span>
        ))}
      </div>
    </div>
  )
}

function Info({ label, value, icon }) {
  return (
    <div>
      <p className="text-gray-500 mb-1 flex items-center gap-1">{icon} {label}</p>
      <p className="text-gray-900 font-medium">{value}</p>
    </div>
  )
}