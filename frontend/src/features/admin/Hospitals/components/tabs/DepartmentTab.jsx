import React from 'react'

export default function DepartmentsTab({ hospital }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6">
      <h3 className="font-bold text-lg text-gray-900 mb-4">Departments</h3>
      <div className="flex flex-wrap gap-2">
        {hospital.departments.map((d) => (
          <span key={d} className="bg-blue-50 text-[#316dff] text-sm font-medium px-4 py-2 rounded-full">{d}</span>
        ))}
      </div>
    </div>
  )
}