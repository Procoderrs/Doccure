import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { RiArrowLeftLine } from "@remixicon/react"
import { hospitalsData } from '../../../../data/hospitalData'
import StatusBadge from '../components/StatusBadge'
import ProfileTab from '../components/tabs/ProfileTab'
import DepartmentsTab from '../components/tabs/DepartmentTab'
import DoctorsLinkedTab from '../components/tabs/DoctorsLinkedTab'
import AppointmentsTab from '../components/tabs/AppointmentsTab'
import LocationTab from '../components/tabs/LocationTab'
import ReviewsTab from '../components/tabs/ReviewsTab'

const tabs = ["Profile", "Departments", "Doctors", "Appointments", "Location", "Reviews"]

export default function HospitalDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("Profile")

  const hospital = hospitalsData.find((h) => h.id === id)

  if (!hospital) {
    return (
      <div className="p-6">
        <p className="text-gray-500">Hospital not found.</p>
        <button onClick={() => navigate(-1)} className="text-[#316dff] font-medium mt-2">Go back</button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-gray-500 w-fit">
        <RiArrowLeftLine size={16} /> Back to Hospitals
      </button>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <img src={hospital.logo} alt={hospital.name} className="w-16 h-16 rounded-xl object-cover bg-gray-100" />
          <div>
            <p className="font-bold text-lg text-gray-900">{hospital.name}</p>
            <p className="text-sm text-gray-500">{hospital.city} &nbsp;•&nbsp; {hospital.totalDoctors} Doctors &nbsp;•&nbsp; {hospital.totalAppointments} Appointments</p>
          </div>
        </div>
        <StatusBadge status={hospital.status} />
      </div>

      <div className="flex gap-2 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2.5 rounded-full text-sm font-medium ${
              activeTab === tab ? "bg-[#316dff] text-white" : "border border-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Profile" && <ProfileTab hospital={hospital} />}
      {activeTab === "Departments" && <DepartmentsTab hospital={hospital} />}
      {activeTab === "Doctors" && <DoctorsLinkedTab hospital={hospital} />}
      {activeTab === "Appointments" && <AppointmentsTab hospital={hospital} />}
      {activeTab === "Location" && <LocationTab hospital={hospital} />}
      {activeTab === "Reviews" && <ReviewsTab hospital={hospital} />}
    </div>
  )
}