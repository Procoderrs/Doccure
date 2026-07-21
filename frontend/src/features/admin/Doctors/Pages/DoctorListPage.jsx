import React, { useState, useMemo } from 'react'
import { doctorsData } from '../../../../data/doctorData'
import FilterBar from '../components/FilterBar'
import DoctorsTable from '../components/DoctorTable'
export default function DoctorsListPage() {
  const [doctors, setDoctors] = useState(doctorsData)
  const [filters, setFilters] = useState({
    search: "",
    specialty: "All Specialties",
    city: "All Cities",
    status: "All Status",
  })

  const filteredDoctors = useMemo(() => {
    return doctors.filter((d) => {
      const matchesSearch =
        d.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        d.email.toLowerCase().includes(filters.search.toLowerCase())
      const matchesSpecialty = filters.specialty === "All Specialties" || d.specialty === filters.specialty
      const matchesCity = filters.city === "All Cities" || d.city === filters.city
      const matchesStatus = filters.status === "All Status" || d.status === filters.status
      return matchesSearch && matchesSpecialty && matchesCity && matchesStatus
    })
  }, [doctors, filters])

  const onApprove = (id) => {
    setDoctors((prev) => prev.map((d) => d.id === id ? { ...d, status: "approved" } : d))
  }

  const onToggleBlock = (id) => {
    setDoctors((prev) => prev.map((d) =>
      d.id === id ? { ...d, status: d.status === "blocked" ? "approved" : "blocked", active: d.status === "blocked" } : d
    ))
  }

  const onToggleFeatured = (id) => {
    setDoctors((prev) => prev.map((d) => d.id === id ? { ...d, featured: !d.featured } : d))
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Doctors</h2>
          <p className="text-sm text-gray-400">Manage doctor approvals, status, and visibility</p>
        </div>
      </div>

      <FilterBar filters={filters} setFilters={setFilters} />
      <DoctorsTable
        doctors={filteredDoctors}
        onApprove={onApprove}
        onToggleBlock={onToggleBlock}
        onToggleFeatured={onToggleFeatured}
      />
    </div>
  )
}