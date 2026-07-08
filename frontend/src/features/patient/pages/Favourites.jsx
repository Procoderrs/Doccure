import React, { useState } from 'react'
import { RiHeartFill, RiSearchLine, RiMapPinLine, RiCalendarLine } from "@remixicon/react"
import { favourites } from '../../../data/patient'

export default function Favourites() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Favourites</h2>
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white">
          <RiSearchLine size={16} className="text-gray-400" />
          <input type="text" placeholder="Search" className="text-sm outline-none text-gray-600 w-32" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {favourites.map((doc, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center hover:shadow-md transition">

            <div className="relative mb-3">
              <img src={doc.img} alt={doc.name} className="w-20 h-20 rounded-full object-cover bg-gray-100" />
              <button className="absolute top-0 right-0 w-7 h-7 rounded-full bg-red-50 flex items-center justify-center">
                <RiHeartFill size={14} className="text-red-500" />
              </button>
            </div>

            <div className="flex items-center gap-1 mb-1">
              <p className="font-bold text-gray-900">{doc.name}</p>
              {doc.verified && <span className="text-green-500 text-sm">✓</span>}
            </div>
            <p className="text-gray-500 text-sm mb-2">{doc.degree}</p>

            <div className="flex items-center gap-1 mb-3">
              {[1,2,3,4,5].map(s => (
                <span key={s} className={`text-sm ${s <= Math.floor(doc.rating) ? 'text-yellow-400' : 'text-gray-200'}`}>★</span>
              ))}
              <span className="text-gray-500 text-xs ml-1">
                {doc.reviews ? `(${doc.reviews})` : doc.rating.toFixed(1)}
              </span>
            </div>

            <div className="w-full text-left text-xs text-gray-500 flex flex-col gap-1.5 mb-4">
              <p className="flex items-center gap-1">
                <RiCalendarLine size={12} /> Next Availability : {doc.nextAvailability}
              </p>
              <p className="flex items-center gap-1">
                <RiMapPinLine size={12} /> Location : {doc.location}
              </p>
            </div>

            <div className="w-full bg-gray-50 rounded-xl py-2 text-center text-xs text-gray-500 mb-3">
              Last Book on {doc.lastBook}
            </div>

            <button
              className="w-full py-2.5 rounded-full text-sm font-semibold border-2 hover:bg-blue-50 transition"
              style={{ color: "#316dff", borderColor: "#316dff" }}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}