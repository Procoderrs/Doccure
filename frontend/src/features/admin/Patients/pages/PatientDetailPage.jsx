import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { RiArrowLeftLine } from "@remixicon/react"
import { patientsData } from '../../../../data/patientData'
import StatusBadge from '../components/StatusBadge'
import ProfileTab from '../components/tabs/ProfileTab'
import AppointmentsHistoryTab from '../components/tabs/AppointmenthistoryTab'
import DoctorsVisitedTab from '../components/tabs/DoctorsVisitiedTabs'
import PrescriptionsTab from '../components/tabs/PrescriptionTab'
import InvoicesTab from '../components/tabs/InvoicesTab'
import ReviewsGivenTab from '../components/tabs/ReviewsGivenTab'

const tabs = ["Profile", "Appointments History", "Doctors Visited", "Prescriptions", "Invoices", "Reviews Given"]

export default function PatientDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("Profile")

  const patient = patientsData.find((p) => p.id === id)

  if (!patient) {
    return (
      <div className="p-6">
        <p className="text-gray-500">Patient not found.</p>
        <button onClick={() => navigate(-1)} className="text-[#316dff] font-medium mt-2">Go back</button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-gray-500 w-fit">
        <RiArrowLeftLine size={16} /> Back to Patients
      </button>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <img src={patient.img} alt={patient.name} className="w-16 h-16 rounded-full object-cover bg-gray-100" />
          <div>
            <p className="font-bold text-lg text-gray-900">{patient.name}</p>
            <p className="text-sm text-gray-500">{patient.city} &nbsp;•&nbsp; {patient.age} / {patient.gender}</p>
          </div>
        </div>
        <StatusBadge status={patient.status} />
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

      {activeTab === "Profile" && <ProfileTab patient={patient} />}
      {activeTab === "Appointments History" && <AppointmentsHistoryTab patient={patient} />}
      {activeTab === "Doctors Visited" && <DoctorsVisitedTab patient={patient} />}
      {activeTab === "Prescriptions" && <PrescriptionsTab patient={patient} />}
      {activeTab === "Invoices" && <InvoicesTab patient={patient} />}
      {activeTab === "Reviews Given" && <ReviewsGivenTab patient={patient} />}
    </div>
  )
}