import React, { useState } from 'react'
import { RiSearchLine, RiEditLine, RiDeleteBinLine } from "@remixicon/react"
import { dependants } from '../../../data/patient'

export default function Dependants() {
  const [items, setItems] = useState(dependants)

  const toggleActive = (i) => {
    setItems(prev => prev.map((d, j) => j === i ? { ...d, active: !d.active } : d))
  }

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Dependants</h2>
      </div>

      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white flex-1 max-w-sm">
          <RiSearchLine size={16} className="text-gray-400" />
          <input type="text" placeholder="Search" className="text-sm outline-none text-gray-600 flex-1" />
        </div>
        <button
          className="px-5 py-2.5 rounded-full text-white text-sm font-semibold"
          style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
        >
          Add Dependants
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((d, i) => (
          <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex items-center gap-5">

            <img src={d.img} alt={d.name} className="w-14 h-14 rounded-full object-cover bg-gray-100" />

            <div className="flex-1">
              <p className="font-bold text-gray-900 text-base">{d.name}</p>
              <p className="text-gray-500 text-sm flex items-center gap-1 mt-0.5">
                <span className="text-gray-400">{d.relation}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-gray-400">{d.gender}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300" />
                <span className="text-gray-400">{d.age}</span>
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-xs mb-1">Blood Group</p>
              <p className="font-bold text-gray-800">{d.bloodGroup}</p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              {/* Toggle */}
              <button
                onClick={() => toggleActive(i)}
                className="w-12 h-6 rounded-full transition-all relative"
                style={{ background: d.active ? "#316dff" : "#e5e7eb" }}
              >
                <span
                  className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all"
                  style={{ left: d.active ? "26px" : "4px" }}
                />
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <RiEditLine size={15} className="text-gray-500" />
              </button>
              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-50">
                <RiDeleteBinLine size={15} className="text-red-400" />
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}