import React, { useState } from 'react'
import { RiEyeFill, RiMessage2Fill, RiVideoFill, RiCloseFill,RiTimeFill,RiMailFill,RiPhoneFill  } from "@remixicon/react"
import Breadcrumb from '../../../components/ui/Breadcrumb'

const appointments = [
  {
    id: "#Apt0001", img: "/profile-01.jpg", name: "Adrian",
    date: "11 Nov 2024 10.45 AM", visitType: "General Visit",
    time: RiTimeFill, mailIcon: RiMailFill, phoneIcon: RiPhoneFill,
    type: "Video Call", email: "adran@example.com", phone: "+1 504 368 6874", isNew: true,
  },
  {
    id: "#Apt0002", img: "/profile-02.jpg", name: "Kelly",
    date: "05 Nov 2024 11.50 AM", visitType: "General Visit",
    time: RiTimeFill, mailIcon: RiMailFill, phoneIcon: RiPhoneFill,
    type: "Audio Call", email: "kelly@example.com", phone: "+1 832 891 8403", isNew: true,
  },
  {
    id: "#Apt0003", img: "/profile-03.jpg", name: "Samuel",
    date: "27 Oct 2024 09.30 AM", visitType: "General Visit",
    time: RiTimeFill, mailIcon: RiMailFill, phoneIcon: RiPhoneFill,
    type: "Video Call", email: "samuel@example.com", phone: "+1 749 104 6291",
  },
  {
    id: "#Apt0004", img: "/profile-04.jpg", name: "Catherine",
    date: "18 Oct 2024 12.20 PM", visitType: "General Visit",
    time: RiTimeFill, mailIcon: RiMailFill, phoneIcon: RiPhoneFill,
    type: "Direct Visit", email: "catherine@example.com", phone: "+1 584 920 7183",
  },
]

export default function Appointments() {
  return (
    <div className="p-6">
      <Breadcrumb title="Appointments" parent="Doctor" />

      <div className="flex flex-col gap-4">
        {appointments.map((apt, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-5">

            {/* Patient */}
            <div className="flex items-center gap-3 w-44 shrink-0">
              <div className="relative">
                <img src={apt.img} alt={apt.name} className="w-12 h-12 rounded-full object-cover bg-gray-100" />
                {apt.isNew && (
                  <span className="absolute top-6 -right-24 bg-[#6938ef] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                    New
                  </span>
                )}
              </div>
              <div>
                <p className="text-[#316dff] text-xs font-medium">{apt.id}</p>
                <p className="font-semibold text-gray-900">{apt.name}</p>
              </div>
            </div>

            {/* Date + Type */}
<div className="flex-1">
  <div className="text-gray-500 text-sm flex items-center gap-1 mb-1">
    <apt.time size={14} className="text-gray-900" />
    <span className="text-gray-900">{apt.date}</span>
  </div>
  <div className="flex items-center gap-2">
    <span className="text-gray-900 text-sm">{apt.visitType}</span>
    <span className="w-1 h-1 rounded-full bg-gray-900" />
    <span className="text-gray-900 text-sm">{apt.type}</span>
  </div>
</div>

{/* Contact */}
<div className="w-48 shrink-0">
  <p className="text-gray-900 text-sm flex items-center gap-1 mb-1">
    <apt.mailIcon size={15} />
    {apt.email}
  </p>
  <p className="text-gray-900 text-sm flex items-center gap-1">
    <apt.phoneIcon  size={15} />
    {apt.phone}
  </p>
</div>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <RiEyeFill size={16} className="text-gray-900" />
              </button>
              <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <RiMessage2Fill size={16} className="text-gray-900" />
              </button>
              <button className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <RiCloseFill size={16} className="text-gray-900" />
              </button>
              <button
                className="px-4 py-2 rounded-full text-black underline text-lg font-semibold"
               /*  style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }} */
              >
                Start Now
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}