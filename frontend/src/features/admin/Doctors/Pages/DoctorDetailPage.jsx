import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { RiArrowLeftLine, RiStarFill } from "@remixicon/react"
import { doctorsData } from '../../../../data/doctorData'
import StatusBadge from '../components/StatusBadge'
import ProfileTab from '../components/tabs/ProfileTab'
import ScheduleTab from '../components/tabs/ScheduleTab'
import AppointmentsTab from '../components/tabs/AppointmentTab'
import PatientsTab from '../components/tabs/PatientTab'
import ReviewsTab from '../components/tabs/ReviewTab'

const tabs = ["Profile", "Schedule", "Appointments", "Patients", "Reviews"]

export default function DoctorDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("Profile")

  const doctor = doctorsData.find((d) => d.id === id)

  if (!doctor) {
    return (
      <div className="p-6">
        <p className="text-gray-500">Doctor not found.</p>
        <button onClick={() => navigate(-1)} className="text-[#316dff] font-medium mt-2">Go back</button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-gray-500 w-fit">
        <RiArrowLeftLine size={16} /> Back to Doctors
      </button>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <img src={doctor.img} alt={doctor.name} className="w-16 h-16 rounded-full object-cover bg-gray-100" />
          <div>
            <p className="font-bold text-lg text-gray-900">{doctor.name}</p>
            <p className="text-[#316dff] text-sm font-medium">{doctor.specialty}</p>
            <p className="flex items-center gap-1 text-sm text-gray-500 mt-1">
              <RiStarFill size={14} className="text-yellow-400" /> {doctor.rating} &nbsp;•&nbsp; {doctor.appointmentsCount} Appointments
            </p>
          </div>
        </div>
        <StatusBadge status={doctor.status} />
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

      {activeTab === "Profile" && <ProfileTab doctor={doctor} />}
      {activeTab === "Schedule" && <ScheduleTab doctor={doctor} />}
      {activeTab === "Appointments" && <AppointmentsTab doctor={doctor} />}
      {activeTab === "Patients" && <PatientsTab doctor={doctor} />}
      {activeTab === "Reviews" && <ReviewsTab doctor={doctor} />}
    </div>
  )
}