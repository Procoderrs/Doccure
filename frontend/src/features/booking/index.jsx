import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMapPinLine, RiArrowLeftSLine, RiArrowRightSLine, RiCalendarLine, RiCheckLine, RiPhoneLine, RiUserLine, RiBankCardLine, RiShieldLine } from "@remixicon/react"

// ===== Mock Doctor Data =====
const doctor = {
  img: "/michelbrown.jpg",
  name: "Dr. Michael Brown",
  specialty: "Psychologist",
  rating: 5.0,
  specialtyColor: "#316dff",
  address: "5th Street - 1011 W 5th St, Suite 120, Austin, TX 78703",
}

const services = [
  { name: "Echocardiograms", price: 310 },
  { name: "Stress tests", price: 754 },
  { name: "Stress tests", price: 754 },
  { name: "Heart Catheterization", price: 150 },
  { name: "Echocardiograms", price: 200 },
  { name: "Echocardiograms", price: 200 },
]

const specialities = ["Cardiology", "Neurology", "Psychologist", "Pediatrics"]

const appointmentTypes = [
  { label: "Clinic", icon: "🏥" },
  { label: "Video Call", icon: "📹" },
  { label: "Audio Call", icon: "📞" },
  { label: "Chat", icon: "💬" },
  { label: "Home Visit", icon: "🏠" },
]

const clinics = [
  { name: "AllCare Family Medicine", address: "3343 Private Lane, Valdosta", distance: "500 Meters", img: "/clinic-01.jpg" },
  { name: "Vitalplus Clinic", address: "4223 Pleasant Hill Road, Miami, FL 33169", distance: "12 KM", img: "/clinic-02.jpg" },
  { name: "Wellness Path Chiropractic", address: "418 Patton Lane, Garner, NC 27529, FL 33169", distance: "16 KM", img: "/clinic-03.jpg" },
]

const timeSlots = {
  Morning: ["09:45", "-", "10:45", "10:45", "10:45", "-", "09:45", "-", "10:45", "10:45", "10:45"],
  Afternoon: ["09:45", "-", "10:45", "10:45", "10:45"],
  Evening: ["09:45", "-", "10:45", "10:45", "10:45", "-", "09:45", "-", "10:45", "10:45", "10:45", "-"],
}

// ===== Step Indicator =====
const steps = ["Specialty", "Appointment Type", "Date & Time", "Basic Information", "Payment", "Confirmation"]

function StepIndicator({ currentStep }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-8 flex-wrap">
      {steps.map((step, i) => {
        const stepNum = i + 1
        const isDone = stepNum < currentStep
        const isActive = stepNum === currentStep

        return (
          <React.Fragment key={i}>
            <div className="flex flex-col items-center">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold mb-1 transition-all"
                style={{
                  background: isDone || isActive ? "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" : "#f3f4f6",
                  color: isDone || isActive ? "white" : "#9ca3af",
                }}
              >
                {isDone ? <RiCheckLine size={16} /> : stepNum}
              </div>
              <span
                className="text-xs font-medium whitespace-nowrap"
                style={{ color: isActive ? "#316dff" : isDone ? "#316dff" : "#9ca3af" }}
              >
                {step}
              </span>
            </div>

            {i < steps.length - 1 && (
              <div
                className="w-16 md:w-0 h-px mb-5 mx-1"
                style={{
                  background: stepNum < currentStep
                    ? "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)"
                    : "#e5e7eb",
                  borderTop: stepNum >= currentStep ? "2px dashed #e5e7eb" : "none",
                  height: stepNum >= currentStep ? "0" : "2px"
                }}
              />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

// ===== Doctor Info Card =====
function DoctorInfoCard({ bookingInfo }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-6 mb-6">
      <div className="flex items-center gap-4 mb-4">
        <img src={doctor.img} alt={doctor.name} className="w-16 h-16 rounded-full object-cover" />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-gray-900 text-lg">{doctor.name}</h3>
            <span className="flex items-center gap-1 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              ★ {doctor.rating}
            </span>
          </div>
          <p style={{ color: doctor.specialtyColor }} className="font-semibold text-sm">{doctor.specialty}</p>
          <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
            <RiMapPinLine size={14} />
            {doctor.address}
          </p>
        </div>
      </div>

      {bookingInfo && (
        <>
          <div className="border-t border-gray-100 pt-4">
            <p className="font-bold text-gray-900 mb-3">Booking Info</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              {bookingInfo.service && (
                <div>
                  <p className="text-gray-400">Service</p>
                  <p className="font-medium text-gray-800">{bookingInfo.service}</p>
                </div>
              )}
              {bookingInfo.additionalService && (
                <div>
                  <p className="text-gray-400">Service</p>
                  <p className="font-medium text-gray-800">{bookingInfo.additionalService}</p>
                </div>
              )}
              {bookingInfo.dateTime && (
                <div>
                  <p className="text-gray-400">Date & Time</p>
                  <p className="font-medium text-gray-800">{bookingInfo.dateTime}</p>
                </div>
              )}
              {bookingInfo.appointmentType && (
                <div>
                  <p className="text-gray-400">Appointment type</p>
                  <p className="font-medium text-gray-800">{bookingInfo.appointmentType}</p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// ===== STEP 1: Specialty =====
function Step1({ data, setData }) {
  return (
    <div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Select Speciality</label>
        <select
          value={data.speciality || ''}
          onChange={e => setData({ ...data, speciality: e.target.value })}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#316dff] transition-colors"
        >
          <option value="">Select Speciality</option>
          {specialities.map((s, i) => <option key={i} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <p className="font-bold text-gray-900 mb-4">Services</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <div
              key={i}
              onClick={() => setData({ ...data, service: s.name, servicePrice: s.price })}
              className="border rounded-xl p-4 cursor-pointer transition-all"
              style={{
                borderColor: data.service === s.name ? "#316dff" : "#e5e7eb",
                background: data.service === s.name ? "#f0f5ff" : "white"
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{s.name}</p>
                  <p className="text-gray-500 text-sm">${s.price}</p>
                </div>
                <div
                  className="w-5 h-5 rounded border flex items-center justify-center"
                  style={{
                    borderColor: data.service === s.name ? "#316dff" : "#d1d5db",
                    background: data.service === s.name ? "#316dff" : "white"
                  }}
                >
                  {data.service === s.name && <RiCheckLine size={12} className="text-white" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ===== STEP 2: Appointment Type =====
function Step2({ data, setData }) {
  return (
    <div>
      <p className="font-bold text-gray-900 mb-4">Select Appointment Type</p>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-8">
        {appointmentTypes.map((t, i) => (
          <div
            key={i}
            onClick={() => setData({ ...data, appointmentType: t.label })}
            className="border rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer transition-all"
            style={{
              borderColor: data.appointmentType === t.label ? "#316dff" : "#e5e7eb",
              background: data.appointmentType === t.label ? "#f0f5ff" : "white"
            }}
          >
            <span className="text-2xl">{t.icon}</span>
            <span className="text-sm font-medium text-gray-700">{t.label}</span>
          </div>
        ))}
      </div>

      <p className="font-bold text-gray-900 mb-4">Select Clinics</p>
      <div className="flex flex-col gap-3">
        {clinics.map((c, i) => (
          <div
            key={i}
            onClick={() => setData({ ...data, clinic: c.name })}
            className="border rounded-xl p-4 flex items-center gap-4 cursor-pointer transition-all"
            style={{
              borderColor: data.clinic === c.name ? "#316dff" : "#e5e7eb",
              background: data.clinic === c.name ? "#f0f5ff" : "white"
            }}
          >
            <img src={c.img} alt={c.name} className="w-12 h-12 rounded-xl object-cover bg-gray-100" />
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{c.name}</p>
              <p className="text-gray-500 text-sm">{c.address}</p>
            </div>
            <span className="text-[#316dff] text-sm font-medium flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#316dff]" />
              {c.distance}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ===== STEP 3: Date & Time =====
function Step3({ data, setData }) {
  const [selectedDate, setSelectedDate] = useState(3)
  const [viewMode, setViewMode] = useState('Month')

  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  const dates = [
    [28, 29, 30, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 31, 1],
    [2, 3, 4, 5, 6, 7, 8],
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Calendar */}
      <div className="border border-gray-200 rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <select className="border border-gray-200 rounded-lg px-2 py-1 text-sm outline-none">
            <option>2026</option>
          </select>
          <select className="border border-gray-200 rounded-lg px-2 py-1 text-sm outline-none">
            <option>Jul</option>
          </select>
          <div className="flex gap-1 ml-auto">
            {['Month', 'Year'].map(v => (
              <button
                key={v}
                onClick={() => setViewMode(v)}
                className="px-3 py-1 text-sm rounded-lg font-medium transition-colors"
                style={{
                  background: viewMode === v ? "#316dff" : "transparent",
                  color: viewMode === v ? "white" : "#6b7280"
                }}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {days.map(d => (
            <div key={d} className="text-center text-xs font-medium text-gray-400 py-1">{d}</div>
          ))}
        </div>

        {dates.map((week, wi) => (
          <div key={wi} className="grid grid-cols-7 gap-1">
            {week.map((date, di) => (
              <button
                key={di}
                onClick={() => {
                  setSelectedDate(date)
                  setData({ ...data, date: `${date} Jul 2026` })
                }}
                className="text-center text-sm py-1.5 rounded-full transition-all"
                style={{
                  background: selectedDate === date && wi !== 0 && wi !== 5 ? "#316dff" : "transparent",
                  color: selectedDate === date && wi !== 0 && wi !== 5
                    ? "white"
                    : (wi === 0 && date > 20) || (wi === 5 && date < 10)
                    ? "#d1d5db"
                    : "#374151"
                }}
              >
                {date}
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Time Slots */}
      <div className="border border-gray-200 rounded-2xl p-5">
        {Object.entries(timeSlots).map(([period, slots]) => (
          <div key={period} className="mb-5">
            <p className="font-bold text-gray-800 mb-3">{period}</p>
            <div className="grid grid-cols-5 gap-2">
              {slots.map((slot, i) => (
                <button
                  key={i}
                  onClick={() => slot !== '-' && setData({ ...data, time: slot })}
                  className="py-1.5 px-1 text-xs rounded-lg font-medium transition-all"
                  style={{
                    background: data.time === slot && slot !== '-'
                      ? "#316dff"
                      : slot === '-' ? "#f9fafb" : "#f3f4f6",
                    color: data.time === slot && slot !== '-'
                      ? "white"
                      : slot === '-' ? "#d1d5db" : "#374151",
                    cursor: slot === '-' ? "not-allowed" : "pointer"
                  }}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ===== STEP 4: Basic Information =====
function Step4({ data, setData }) {
  return (
    <div className="border border-gray-200 rounded-2xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">First Name</label>
          <input
            type="text"
            value={data.firstName || ''}
            onChange={e => setData({ ...data, firstName: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Last Name</label>
          <input
            type="text"
            value={data.lastName || ''}
            onChange={e => setData({ ...data, lastName: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
          <input
            type="tel"
            value={data.phone || ''}
            onChange={e => setData({ ...data, phone: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email Address</label>
          <input
            type="email"
            value={data.email || ''}
            onChange={e => setData({ ...data, email: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Select Patient</label>
          <select
            value={data.patient || ''}
            onChange={e => setData({ ...data, patient: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]"
          >
            <option value="">Select</option>
            <option>Myself</option>
            <option>Family Member</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Symptoms</label>
          <input
            type="text"
            value={data.symptoms || ''}
            onChange={e => setData({ ...data, symptoms: e.target.value })}
            className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm text-gray-600 mb-1">Attachment</label>
        <input
          type="file"
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none"
        />
      </div>

      <div>
        <label className="block text-sm text-gray-600 mb-1">Reason for Visit</label>
        <textarea
          value={data.reason || ''}
          onChange={e => setData({ ...data, reason: e.target.value })}
          rows={4}
          className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff] resize-none"
        />
      </div>
    </div>
  )
}

// ===== STEP 5: Payment =====
function Step5({ data, setData }) {
  const [paymentMethod, setPaymentMethod] = useState('Credit Card')
  const servicePrice = data.servicePrice || 200
  const bookingFee = 20
  const tax = 18
  const discount = -15
  const total = servicePrice + bookingFee + tax + discount

  const paymentMethods = [
    { label: "Credit Card", icon: "💳" },
    { label: "Paypal", icon: "🅿️" },
    { label: "Stripe", icon: "⚡" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Payment Form */}
      <div className="border border-gray-200 rounded-2xl p-6">
        <h3 className="font-bold text-gray-900 mb-4">Payment Gateway</h3>

        {/* Payment method tabs */}
        <div className="flex gap-3 mb-6">
          {paymentMethods.map((m, i) => (
            <button
              key={i}
              onClick={() => setPaymentMethod(m.label)}
              className="flex items-center gap-2 px-4 py-2 border rounded-xl text-sm font-medium transition-all"
              style={{
                borderColor: paymentMethod === m.label ? "#316dff" : "#e5e7eb",
                background: paymentMethod === m.label ? "#f0f5ff" : "white",
                color: paymentMethod === m.label ? "#316dff" : "#6b7280"
              }}
            >
              <span>{m.icon}</span>
              {m.label}
            </button>
          ))}
        </div>

        {/* Card fields */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Card Holder Name</label>
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5">
              <RiUserLine size={16} className="text-gray-400" />
              <input
                type="text"
                className="flex-1 text-sm outline-none"
                placeholder="John Doe"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Card Number</label>
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5">
  <RiBankCardLine size={16} className="text-gray-400" />   
  <input type="text" className="flex-1 text-sm outline-none" placeholder="1234 5678 9012 3456" />
</div>

          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Expire Date</label>
              <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5">
                <RiCalendarLine size={16} className="text-gray-400" />
                <input type="text" className="flex-1 text-sm outline-none" placeholder="MM/YY" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">CVV</label>
             <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5">
  <RiShieldLine size={16} className="text-gray-400" />     {/* ← yahan */}
  <input type="text" className="flex-1 text-sm outline-none" placeholder="123" />
</div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Summary */}
      <div className="border border-gray-200 rounded-2xl p-6">
        <h3 className="font-bold text-gray-900 mb-4">Booking Info</h3>
        <div className="mb-4">
          <p className="text-gray-400 text-sm">Date & Time</p>
          <p className="text-gray-800 font-medium">{data.time || '10:00'} - 11:00 AM, 15, Oct 2025</p>
        </div>
        <div className="mb-6">
          <p className="text-gray-400 text-sm">Appointment type</p>
          <p className="text-gray-800 font-medium">{data.appointmentType || 'Clinic'} ({data.clinic || 'Wellness Path'})</p>
        </div>

        <h3 className="font-bold text-gray-900 mb-4">Payment Info</h3>
        <div className="flex flex-col gap-3 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">{data.service || 'Echocardiograms'}</span>
            <span className="text-gray-800 font-medium">${servicePrice}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Booking Fees</span>
            <span className="text-gray-800 font-medium">${bookingFee}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Tax</span>
            <span className="text-gray-800 font-medium">${tax}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Discount</span>
            <span className="text-red-500 font-medium">-${Math.abs(discount)}</span>
          </div>
        </div>

        <div
          className="flex justify-between items-center p-4 rounded-xl"
          style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
        >
          <span className="text-white font-bold">Total</span>
          <span className="text-white font-bold text-xl">${total}</span>
        </div>
      </div>
    </div>
  )
}

// ===== STEP 6: Confirmation =====
function Step6({ data }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-6">
      {/* Left */}
      <div className="border border-gray-200 rounded-2xl p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-green-500 text-xl">✅</span>
          <h3 className="font-bold text-gray-900 text-lg">Booking Confirmed</h3>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <img src={doctor.img} alt="" className="w-10 h-10 rounded-full object-cover" />
          <p className="text-gray-600 text-sm">
            Your Booking has been Confirmed with{" "}
            <span className="font-bold text-gray-900">{doctor.name}</span>{" "}
            be on time before{" "}
            <span className="font-bold text-gray-900">15 Mins</span>{" "}
            From the appointment Time
          </p>
        </div>

        <div className="border border-gray-200 rounded-xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-bold text-gray-900">Booking Info</h4>
            <button className="flex items-center gap-1 text-sm border border-gray-200 px-3 py-1.5 rounded-lg text-gray-600 hover:bg-gray-50">
              <RiCalendarLine size={14} />
              Reschedule
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Service</p>
              <p className="font-medium text-gray-800">Cardiology (30 Mins)</p>
            </div>
            <div>
              <p className="text-gray-400">Additional Service</p>
              <p className="font-medium text-gray-800">{data.service || 'Echocardiograms'}</p>
            </div>
            <div>
              <p className="text-gray-400">Date & Time</p>
              <p className="font-medium text-gray-800">10:00 - 11:00 AM, 15, Oct 2025</p>
            </div>
            <div>
              <p className="text-gray-400">Appointment type</p>
              <p className="font-medium text-gray-800">{data.appointmentType || 'Clinic'}</p>
            </div>
            <div>
              <p className="text-gray-400">Clinic Name & Location</p>
              <p className="font-medium text-gray-800">
                Wellness Path{" "}
                <a href="#" className="text-[#316dff] underline">View Location</a>
              </p>
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl p-5 mt-4 flex items-center justify-between">
          <div>
            <h4 className="font-bold text-gray-900 mb-1">Need Our Assistance</h4>
            <p className="text-gray-500 text-sm">Call us in case you face any Issue on Booking / Cancellation</p>
          </div>
          <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50">
            <RiPhoneLine size={16} />
            Call Us
          </button>
        </div>
      </div>

      {/* Right — QR */}
      <div className="border border-gray-200 rounded-2xl p-6 flex flex-col items-center">
        <p className="font-bold text-gray-900 mb-3">Booking Number</p>
        <div className="border border-gray-200 rounded-lg px-6 py-2 mb-4">
          <p className="font-bold text-gray-800 tracking-wider">DCRA12565</p>
        </div>

        <img
          src="/qr-code.png"
          alt="QR Code"
          className="w-40 h-40 object-contain mb-3"
          onError={e => {
            e.target.style.display = 'none'
            e.target.nextSibling.style.display = 'flex'
          }}
        />
        <div
          className="w-40 h-40 border-2 border-gray-200 rounded-xl hidden items-center justify-center text-gray-400 text-xs text-center mb-3"
          style={{ display: 'none' }}
        >
          QR Code
        </div>

        <p className="text-gray-500 text-sm text-center mb-6">
          Scan this QR Code to Download the details of Appointment
        </p>

        <button
          className="w-full py-3 rounded-xl font-semibold text-gray-900 border border-gray-200 hover:bg-gray-50 transition mb-3 text-sm"
        >
          Add To Calendar
        </button>

        <button
          className="w-full py-3 rounded-xl font-semibold text-white text-sm transition"
          style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
        >
          Start New Booking
        </button>
      </div>
    </div>
  )
}

// ===== MAIN BOOKING PAGE =====
export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [data, setData] = useState({})

  const getBookingInfo = () => {
    if (step < 3) return null
    return {
      service: data.speciality ? `${data.speciality} (30 Mins)` : null,
      additionalService: data.service,
      dateTime: data.date && data.time ? `${data.time}, ${data.date}` : null,
      appointmentType: data.appointmentType && data.clinic
        ? `${data.appointmentType} (${data.clinic})`
        : data.appointmentType,
    }
  }

  const nextLabels = ["Select Appointment Type", "Date & Time", "Add Basic Information", "Select Payment", "Confirm & Pay", null]
  const prevAllowed = step > 1

  return (
    <div className="min-h-screen bg-white font-user">
      <div className="max-w-4xl mx-auto px-4 py-10">

        {/* Step Indicator */}
        <StepIndicator currentStep={step} />

        {/* Doctor Info */}
        <DoctorInfoCard bookingInfo={getBookingInfo()} />

        {/* Step Content */}
        <div className="mb-8">
          {step === 1 && <Step1 data={data} setData={setData} />}
          {step === 2 && <Step2 data={data} setData={setData} />}
          {step === 3 && <Step3 data={data} setData={setData} />}
          {step === 4 && <Step4 data={data} setData={setData} />}
          {step === 5 && <Step5 data={data} setData={setData} />}
          {step === 6 && <Step6 data={data} />}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center justify-between">
          {prevAllowed ? (
            <button
              onClick={() => setStep(s => s - 1)}
              className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm"
              style={{ background: "#0f172a", color: "white" }}
            >
              <RiArrowLeftSLine size={18} />
              Back
            </button>
          ) : (
            <Link
              to="/doctors"
              className="flex items-center gap-1 text-gray-500 hover:text-[#316dff] text-sm transition-colors"
            >
              <RiArrowLeftSLine size={18} />
              Back to Bookings
            </Link>
          )}

          {step < 6 && (
            <button
              onClick={() => setStep(s => s + 1)}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm"
              style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
            >
              {nextLabels[step - 1]}
              <RiArrowRightSLine size={18} />
            </button>
          )}
        </div>

        <p className="text-center text-gray-400 text-sm mt-8">
          Copyright © 2026. All Rights Reserved, Doccure
        </p>
      </div>
    </div>
  )
}