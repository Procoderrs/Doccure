import React from 'react'
import { RiMapPinLine, RiFileTextLine, RiMailLine, RiPhoneLine } from "@remixicon/react"
import StatusBadge from '../StatusBadge'

export default function ProfileTab({ doctor }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 bg-white border border-gray-100 rounded-2xl p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-4">Profile Information</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
          <Info label="Full Name" value={doctor.name} />
          <Info label="Email" value={doctor.email} icon={<RiMailLine size={14} />} />
          <Info label="Phone" value={doctor.phone} icon={<RiPhoneLine size={14} />} />
          <Info label="Specialty" value={doctor.specialty} />
          <Info label="Degree" value={doctor.degree} />
          <Info label="Experience" value={doctor.experience} />
          <Info label="Consultation Fee" value={`$${doctor.fee}`} />
          <Info label="Clinic/Hospital" value={doctor.hospital} />
        </div>

        <div className="mt-5 pt-5 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-1 flex items-center gap-1"><RiMapPinLine size={14} /> Location</p>
          <p className="text-gray-900 font-medium">{doctor.address}</p>
          <div className="mt-3 h-40 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 text-sm">
            Map Preview
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-gray-100">
          <p className="text-sm text-gray-500 mb-2 flex items-center gap-1"><RiFileTextLine size={14} /> License / Documents</p>
          <div className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3 text-sm">
            <span className="text-gray-700">{doctor.licenseDoc}</span>
            <button className="text-[#316dff] font-medium">View</button>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 h-fit">
        <h3 className="font-bold text-lg text-gray-900 mb-4">Approval Status</h3>
        <StatusBadge status={doctor.status} />
        <p className="text-sm text-gray-400 mt-3">
          {doctor.status === "pending" && "Awaiting review of submitted documents."}
          {doctor.status === "approved" && "This doctor is verified and active on the platform."}
          {doctor.status === "blocked" && "This doctor's account is currently blocked."}
        </p>
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