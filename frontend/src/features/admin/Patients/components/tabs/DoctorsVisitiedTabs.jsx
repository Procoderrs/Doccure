import React from 'react'

export default function DoctorsVisitedTab({ patient }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6">
      <h3 className="font-bold text-lg text-gray-900 mb-4">Doctors Visited</h3>
      <div className="flex flex-col divide-y divide-gray-100">
        {patient.doctorsVisited.map((d, i) => (
          <div key={i} className="flex items-center justify-between py-4">
            <div>
              <p className="font-semibold text-gray-900">{d.name}</p>
              <p className="text-sm text-gray-500">{d.specialty}</p>
            </div>
            <span className="text-sm text-gray-600">{d.visits} visits</span>
          </div>
        ))}
        {patient.doctorsVisited.length === 0 && (
          <p className="text-center py-8 text-gray-400">No doctors visited yet.</p>
        )}
      </div>
    </div>
  )
}