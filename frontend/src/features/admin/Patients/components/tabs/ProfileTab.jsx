import React from 'react'
import { RiMailLine, RiPhoneLine } from "@remixicon/react"

export default function ProfileTab({ patient }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6">
      <h3 className="font-bold text-lg text-gray-900 mb-4">Patient Profile</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
        <Info label="Full Name" value={patient.name} />
        <Info label="Email" value={patient.email} icon={<RiMailLine size={14} />} />
        <Info label="Phone" value={patient.phone} icon={<RiPhoneLine size={14} />} />
        <Info label="Age" value={patient.age} />
        <Info label="Gender" value={patient.gender} />
        <Info label="City" value={patient.city} />
        <Info label="Total Appointments" value={patient.totalAppointments} />
        <Info label="Last Visited Doctor" value={patient.lastVisitedDoctor} />
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