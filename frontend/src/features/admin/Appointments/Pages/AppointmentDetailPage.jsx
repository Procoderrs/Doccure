import React, { useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { RiArrowLeftLine, RiMapPinLine, RiFileTextLine, RiStarFill } from "@remixicon/react"
import { appointmentsData } from '../../../../data/AppointmentData'
import { StatusBadge, PaymentBadge } from '../components/StatusBadge'
import StatusTimeline from '../components/StatusTimeLine';
export default function AppointmentDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [appointment, setAppointment] = useState(() => appointmentsData.find((a) => a.id === id))
  const [showCancelConfirm, setShowCancelConfirm] = useState(false)

  if (!appointment) {
    return (
      <div className="p-6">
        <p className="text-gray-500">Appointment not found.</p>
        <button onClick={() => navigate(-1)} className="text-[#316dff] font-medium mt-2">Go back</button>
      </div>
    )
  }

  const cancelAppointment = () => {
    setAppointment((prev) => ({
      ...prev,
      status: "Cancelled",
      statusTimeline: [...prev.statusTimeline, { label: "Cancelled by Admin", date: "Just now" }],
    }))
    setShowCancelConfirm(false)
  }

  const setRefund = (value) => {
    setAppointment((prev) => ({ ...prev, refundStatus: value }))
  }

  return (
    <div className="flex flex-col gap-6 p-6">
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-sm text-gray-500 w-fit">
        <RiArrowLeftLine size={16} /> Back to Appointments
      </button>

      <div className="bg-white border border-gray-100 rounded-2xl p-6 flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-[#316dff] font-semibold">{appointment.id}</p>
          <p className="text-sm text-gray-500">{appointment.date} &nbsp;•&nbsp; {appointment.timeSlot}</p>
        </div>
        <div className="flex items-center gap-2">
          <StatusBadge status={appointment.status} />
          <PaymentBadge payment={appointment.payment} />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Patient Info</h3>
          <p className="font-semibold text-gray-900">{appointment.patient}</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Doctor Info</h3>
          <p className="font-semibold text-gray-900">{appointment.doctor}</p>
          <p className="text-sm text-[#316dff]">{appointment.specialty}</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Hospital / Clinic Info</h3>
          <p className="flex items-center gap-2 text-gray-700">
            <RiMapPinLine size={16} /> {appointment.hospital}
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Appointment Type</h3>
          <p className="font-semibold text-gray-900">{appointment.type}</p>
          <p className="text-sm text-gray-500 mt-1">{appointment.date} at {appointment.timeSlot}</p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Status Timeline</h3>
          <StatusTimeline timeline={appointment.statusTimeline} />
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-4">Payment / Invoice</h3>
          <div className="flex items-center justify-between text-sm mb-3">
            <span className="text-gray-500">Amount</span>
            <span className="font-semibold text-gray-900">${appointment.amount}</span>
          </div>
          <div className="flex items-center justify-between text-sm mb-4">
            <span className="text-gray-500">Payment Status</span>
            <PaymentBadge payment={appointment.payment} />
          </div>

          {appointment.refundStatus && (
            <div className="flex items-center justify-between text-sm mb-4 pt-3 border-t border-gray-100">
              <span className="text-gray-500">Refund Status</span>
              <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                appointment.refundStatus === "done" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-700"
              }`}>
                {appointment.refundStatus === "done" ? "Refund Done" : "Refund Pending"}
              </span>
            </div>
          )}

          {appointment.status === "Cancelled" && (
            <div className="flex gap-2 pt-3 border-t border-gray-100">
              <button
                onClick={() => setRefund("pending")}
                className="flex-1 border border-yellow-300 text-yellow-700 rounded-full py-2 text-sm font-medium"
              >
                Mark Refund Pending
              </button>
              <button
                onClick={() => setRefund("done")}
                className="flex-1 border border-green-300 text-green-600 rounded-full py-2 text-sm font-medium"
              >
                Mark Refund Done
              </button>
            </div>
          )}

          <div className="flex items-center justify-between pt-4 mt-2 border-t border-gray-100 text-sm">
            <a href="#" className="flex items-center gap-1 text-[#316dff] font-medium">
              <RiFileTextLine size={14} /> {appointment.prescriptionId ? "View Prescription" : "No prescription yet"}
            </a>
            <a href="#" className="flex items-center gap-1 text-[#316dff] font-medium">
              <RiStarFill size={14} /> {appointment.reviewId ? "View Review" : "No review yet"}
            </a>
          </div>
        </div>
      </div>

      {/* Admin actions */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-1">Admin Actions</h3>
        <p className="text-sm text-gray-400 mb-4">
          Admin can monitor, cancel, and manage refunds. Accept/Reject is handled by the doctor.
        </p>
        <div className="flex gap-3">
          {appointment.status !== "Cancelled" && appointment.status !== "Completed" && appointment.status !== "Rejected" && (
            <button
              onClick={() => setShowCancelConfirm(true)}
              className="border border-red-300 text-red-600 rounded-full px-6 py-2.5 text-sm font-semibold"
            >
              Cancel Appointment
            </button>
          )}
        </div>
      </div>

      {showCancelConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm">
            <p className="font-bold text-gray-900 mb-2">Cancel this appointment?</p>
            <p className="text-sm text-gray-500 mb-5">This will notify the patient and doctor. This action cannot be undone.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowCancelConfirm(false)} className="flex-1 border border-gray-200 rounded-full py-2.5 text-sm font-medium">
                Keep Appointment
              </button>
              <button onClick={cancelAppointment} className="flex-1 bg-red-500 text-white rounded-full py-2.5 text-sm font-medium">
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}