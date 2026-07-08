import React, { useState } from 'react'
import { RiCheckLine, RiCloseLine, RiVideoLine, RiPhoneLine, RiMessage2Line,RiTimeFill,RiLiveFill, RiPhoneFill,RiChat4Fill  } from "@remixicon/react"
import Breadcrumb from '../../../components/ui/Breadcrumb'

const requests = [
  {
    id: "#Apt0001", img: "/profile-01.jpg", name: "Adrian",
    date: "11 Nov 2024 10.45 AM", visitType: "General Visit",time:RiTimeFill,
    appointmentType: "Video Call", icon: RiLiveFill, isNew: true,
  },
  {
    id: "#Apt0002", img: "/profile-02.jpg", name: "Kelly",
    date: "10 Nov 2024 02.00 PM", visitType: "General Visit",time:RiTimeFill,
    appointmentType: "Direct Visit", icon: RiChat4Fill ,
  },
  {
    id: "#Apt0003", img: "/profile-03.jpg", name: "Samuel",
    date: "08 Nov 2024 08.30 AM", visitType: "Consultation for Cardio",time:RiTimeFill,
    appointmentType: "Audio Call", icon:  RiPhoneFill,
  },
  {
    id: "#Apt0004", img: "/profile-04.jpg", name: "Anderea",
    date: "05 Nov 2024 11.00 AM", visitType: "Consultation for Dental",time:RiTimeFill,
    appointmentType: "Audio Call", icon: RiPhoneFill,
  },
  {
    id: "#Apt0005", img: "/profile-05.jpg", name: "Robert",
    date: "01 Nov 2024 04.00 PM", visitType: "General Visit",time:RiTimeFill,
    appointmentType: "Video Call", icon: RiLiveFill,
  },
]

export default function Requests() {
  const [items, setItems] = useState(requests)

  const accept = (id) => setItems(prev => prev.filter(r => r.id !== id))
  const reject = (id) => setItems(prev => prev.filter(r => r.id !== id))

  return (
    <div className="p-6">

      <div className="flex flex-col gap-4">
        {items.map((r, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-6">

            {/* Patient */}
            <div className="flex items-center gap-3 w-48 shrink-0">
              <div className="relative">
                <img src={r.img} alt={r.name} className="w-12 h-12 rounded-xl object-cover bg-gray-100" />
                {r.isNew && (
                  <span className="absolute top-6 -right-23 bg-[#6938ef] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                    New
                  </span>
                )}
              </div>
              <div>
                <p className="text-[#316dff] text-xs font-medium">{r.id}</p>
                <p className="font-bold text-gray-900">{r.name}</p>
              </div>
            </div>

            
            {/* Date + Visit */}
<div className="flex-1">
  <p className="text-gray-500 text-sm flex items-center gap-1 mb-1">
    <r.time size={14} className="text-gray-900" />
    {r.date}
  </p>
  <p className="font-semibold text-gray-800">{r.visitType}</p>
</div>

            {/* Type */}
            <div className="w-44 shrink-0">
              <p className="text-gray-400 text-xs mb-1">Type of Appointment</p>
              <p className="text-gray-700 text-sm flex items-center gap-1 font-medium">
                <r.icon size={16} className="text-[#316dff]" />
                {r.appointmentType}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => accept(r.id)}
                className="flex items-center gap-1 text-green-500 text-sm font-semibold hover:bg-green-50 px-3 py-1.5 rounded-lg transition"
              >
                <RiCheckLine size={16} />
                Accept
              </button>
              <button
                onClick={() => reject(r.id)}
                className="flex items-center gap-1 text-red-500 text-sm font-semibold hover:bg-red-50 px-3 py-1.5 rounded-lg transition"
              >
                <RiCloseLine size={16} />
                Reject
              </button>
            </div>

          </div>
        ))}

        {items.length === 0 && (
          <div className="bg-white rounded-2xl border border-gray-100 p-10 text-center text-gray-400">
            No pending requests
          </div>
        )}
      </div>
    </div>
  )
}