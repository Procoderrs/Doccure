import React, { useState, useMemo } from 'react'
import { useNavigate } from "react-router-dom"
import { hospitalsData } from '../../../../data/hospitalData'
import FilterBar from '../components/FilterBar'
import HospitalTable from '../components/HospitalTable'

export default function HospitalListPage() {
  const navigate = useNavigate()
  const [hospitals, setHospitals] = useState(hospitalsData)
  const [filters, setFilters] = useState({
    search: "",
    city: "All Cities",
    department: "All Departments",
    status: "All Status",
  })

  const filteredHospitals = useMemo(() => {
    return hospitals.filter((h) => {
      const matchesSearch = h.name.toLowerCase().includes(filters.search.toLowerCase())
      const matchesCity = filters.city === "All Cities" || h.city === filters.city
      const matchesDept = filters.department === "All Departments" || h.departments.includes(filters.department)
      const matchesStatus = filters.status === "All Status" || h.status === filters.status
      return matchesSearch && matchesCity && matchesDept && matchesStatus
    })
  }, [hospitals, filters])

  const onToggleBlock = (id) => {
    setHospitals((prev) => prev.map((h) => h.id === id ? { ...h, status: h.status === "blocked" ? "active" : "blocked" } : h))
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Hospitals</h2>
          <p className="text-sm text-gray-400">Manage hospitals, departments, and linked doctors</p>
        </div>
        <button
          onClick={() => navigate('/admin/hospitals/new')}
          className="bg-[#316dff] text-white rounded-full px-5 py-2.5 text-sm font-semibold"
        >
          + Add Hospital
        </button>
      </div>

      <FilterBar filters={filters} setFilters={setFilters} />
      <HospitalTable hospitals={filteredHospitals} onToggleBlock={onToggleBlock} />
    </div>
  )
}