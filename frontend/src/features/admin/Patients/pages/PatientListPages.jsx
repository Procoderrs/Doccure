import React, { useState, useMemo } from 'react'
import { patientsData } from '../../../../data/patientData'
import FilterBar from '../components/FilterBar'
import PatientTable from '../components/PatientsTable'

export default function PatientListPage() {
  const [patients, setPatients] = useState(patientsData)
  const [filters, setFilters] = useState({
    search: "",
    city: "All Cities",
    status: "All Status",
  })

  const filteredPatients = useMemo(() => {
    return patients.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.email.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.phone.includes(filters.search)
      const matchesCity = filters.city === "All Cities" || p.city === filters.city
      const matchesStatus = filters.status === "All Status" || p.status === filters.status
      return matchesSearch && matchesCity && matchesStatus
    })
  }, [patients, filters])

  const onToggleBlock = (id) => {
    setPatients((prev) => prev.map((p) =>
      p.id === id ? { ...p, status: p.status === "blocked" ? "active" : "blocked" } : p
    ))
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">All Patients</h2>
        <p className="text-sm text-gray-400">System-wide patients — registered, booked, or created via doctor appointments</p>
      </div>

      <FilterBar filters={filters} setFilters={setFilters} />
      <PatientTable patients={filteredPatients} onToggleBlock={onToggleBlock} />
    </div>
  )
}