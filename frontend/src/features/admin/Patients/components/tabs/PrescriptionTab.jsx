import React from 'react'
import { RiFileTextLine } from "@remixicon/react"

export default function PrescriptionsTab({ patient }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6">
      <h3 className="font-bold text-lg text-gray-900 mb-4">Prescriptions</h3>
      <div className="flex flex-col divide-y divide-gray-100">
        {patient.prescriptions.map((rx) => (
          <div key={rx.id} className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <RiFileTextLine className="text-gray-400" size={18} />
              <div>
                <p className="font-semibold text-gray-900">{rx.id}</p>
                <p className="text-sm text-gray-500">{rx.doctor} &nbsp;•&nbsp; {rx.date}</p>
              </div>
            </div>
            <button className="text-[#316dff] font-medium text-sm">View</button>
          </div>
        ))}
        {patient.prescriptions.length === 0 && (
          <p className="text-center py-8 text-gray-400">No prescriptions yet.</p>
        )}
      </div>
    </div>
  )
}