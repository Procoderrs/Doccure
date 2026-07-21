import React from 'react'

export default function DoctorsLinkedTab({ hospital }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6">
      <h3 className="font-bold text-lg text-gray-900 mb-4">Doctors Linked</h3>
      <div className="flex flex-col divide-y divide-gray-100">
        {hospital.doctorsLinked.map((d, i) => (
          <div key={i} className="flex items-center justify-between py-4">
            <div>
              <p className="font-semibold text-gray-900">{d.name}</p>
              <p className="text-sm text-gray-500">{d.specialty}</p>
            </div>
            <button className="text-[#316dff] font-medium text-sm">View Doctor</button>
          </div>
        ))}
        {hospital.doctorsLinked.length === 0 && (
          <p className="text-center py-8 text-gray-400">No doctors linked yet.</p>
        )}
      </div>
    </div>
  )
}