import React, { useState, useMemo } from 'react'
import { appointmentsData } from '../../../../data/AppointmentData'
import FilterBar from '../components/FilterBar'
import AppointmentTable from '../components/AppointmentTable'

export default function AppointmentListPage() {
  const [filters, setFilters] = useState({
    search: "",
    status: "All Status",
    specialty: "All Specialties",
    type: "All Types",
    payment: "All Payments",
    dateFrom: "",
    dateTo: "",
  })

  const filteredAppointments = useMemo(() => {
    return appointmentsData.filter((a) => {
      const matchesSearch =
        a.patient.toLowerCase().includes(filters.search.toLowerCase()) ||
        a.doctor.toLowerCase().includes(filters.search.toLowerCase())
      const matchesStatus = filters.status === "All Status" || a.status === filters.status
      const matchesSpecialty = filters.specialty === "All Specialties" || a.specialty === filters.specialty
      const matchesType = filters.type === "All Types" || a.type === filters.type
      const matchesPayment = filters.payment === "All Payments" || a.payment === filters.payment
      const matchesDateFrom = !filters.dateFrom || a.date >= filters.dateFrom
      const matchesDateTo = !filters.dateTo || a.date <= filters.dateTo
      return matchesSearch && matchesStatus && matchesSpecialty && matchesType && matchesPayment && matchesDateFrom && matchesDateTo
    })
  }, [filters])

  return (
    <div className="flex flex-col gap-6 p-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
        <p className="text-sm text-gray-400">Monitor bookings across all doctors and patients</p>
      </div>

      <FilterBar filters={filters} setFilters={setFilters} />
      <AppointmentTable appointments={filteredAppointments} />
    </div>
  )
}