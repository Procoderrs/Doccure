import React, { useState } from 'react'
import { RiCalendarLine, RiMapPinLine, RiFilterLine,RiTimeFill,RiMapPinFill,RiCalendarCheckFill } from "@remixicon/react"
import Breadcrumb from '../../../components/ui/Breadcrumb'

const patients = [
  { id: "#Apt0001", img: "/profile-01.jpg", name: "Adrian", age: 42, gender: "Male", blood: "AB+", date: "11 Nov 2024 10.45 AM",icon:RiTimeFill, location: "Alabama, USA",locationIcon: RiMapPinFill , lastBooking: "27 Feb 2024",cal: RiCalendarCheckFill },
  { id: "#Apt0002", img: "/profile-02.jpg", name: "Kelly Stevens", age: 37, gender: "Female", blood: "O+", date: "05 Nov 2024 11.50 AM",icon:RiTimeFill, location: "San Diego, USA",locationIcon: RiMapPinFill , lastBooking: "20 Mar 2024",cal: RiCalendarCheckFill },
  { id: "#Apt0003", img: "/profile-03.jpg", name: "Samuel James", age: 43, gender: "Male", blood: "B+", date: "27 Oct 2024 09.30 AM",icon:RiTimeFill, location: "Chicago, USA",locationIcon: RiMapPinFill , lastBooking: "12 Mar 2024",cal: RiCalendarCheckFill },
  { id: "#Apt0004", img: "/profile-04.jpg", name: "Catherine Gracey", age: 36, gender: "Female", blood: "AB-", date: "18 Oct 2024 12.20 PM",icon:RiTimeFill, location: "Dallas, USA",locationIcon: RiMapPinFill , lastBooking: "05 Mar 2024",cal: RiCalendarCheckFill },
  { id: "#Apt0005", img: "/profile-05.jpg", name: "Robert Miller", age: 38, gender: "Male", blood: "A+", date: "10 Oct 2024 11.30 AM",icon:RiTimeFill, location: "Miami, USA", locationIcon: RiMapPinFill , lastBooking: "18 Feb 2024",cal: RiCalendarCheckFill },
  { id: "#Apt0006", img: "/profile-06.jpg", name: "Anderea Kearns", age: 40, gender: "Female", blood: "B-", date: "26 Sep 2024 10.20 AM",icon:RiTimeFill, location: "Houston, USA",locationIcon: RiMapPinFill , lastBooking: "10 Feb 2024",cal: RiCalendarCheckFill },
]

export default function MyPatients() {
  const [tab, setTab] = useState('Active')

  return (
    <div className="p-6">

      {/* Tabs + Filter */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTab('Active')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: tab === 'Active' ? "#316dff" : "#f3f4f6",
              color: tab === 'Active' ? "white" : "#374151"
            }}
          >
            Active <span className="bg-white/30 px-2 py-0.5 rounded-full text-xs">200</span>
          </button>
          <button
            onClick={() => setTab('InActive')}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: tab === 'InActive' ? "#316dff" : "#f3f4f6",
              color: tab === 'InActive' ? "white" : "#374151"
            }}
          >
            InActive <span className="px-2 py-0.5 rounded-full text-xs bg-gray-200 text-gray-600">22</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-lg px-4 py-2 text-sm text-gray-900">
          Jul 26 - 06 Jul 26
          </div>
          <button className="flex items-center gap-2 border border-gray-200 bg-white rounded-lg px-4 py-2 text-sm text-gray-900">
            <RiFilterLine size={16} />
            Filter By
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 gap-5">
        {patients.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition">

            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <img src={p.img} alt={p.name} className="w-16 h-16 rounded-xl object-cover bg-gray-100" />
              <div>
                <p className="text-[#316dff] text-xs font-medium">{p.id}</p>
                <p className="font-bold text-gray-900">{p.name}</p>
                <p className="text-gray-800 text-xs">
                  Age : {p.age} &nbsp; {p.gender} &nbsp; {p.blood}
                </p>
              </div>
            </div>

            {/* Info box */}
            <div className="bg-[#e7eeff] rounded-xl p-3 mb-3">
              <p className="text-gray-900  flex items-center gap-1 mb-1">
                <p.icon size={15}/> {p.date}
              </p>
              <p className="text-gray-900  flex items-center gap-1">
                 <p.locationIcon size={15}/> {p.location}
              </p>
            </div>

            {/* Last Booking */}
            <p className="text-gray-900  px-2 flex items-center gap-1">
              <RiCalendarCheckFill size={15} />
              Last Booking {p.lastBooking}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}