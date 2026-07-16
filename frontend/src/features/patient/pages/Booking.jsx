import React, { useState } from 'react'
import {
  RiStarFill, RiMapPinLine, RiCheckLine, RiArrowLeftSLine, RiArrowRightSLine,
  RiHomeSmile2Line, RiVideoLine, RiPhoneLine, RiChat3Line, RiUserLocationLine,
  RiUserLine, RiBankCardLine, RiCalendarLine, RiShieldCheckFill, RiFileTextLine,RiHospitalFill 
} from "@remixicon/react"

const steps = ["Specialty", "Appointment Type", "Date & Time", "Basic Information", "Payment", "Confirmation"]

const services = [
  { name: "Echocardiograms", price: "$310" },
  { name: "Stress tests", price: "$754" },
  { name: "Stress tests", price: "$754" },
  { name: "Heart Catheterization", price: "$150" },
  { name: "Echocardiograms", price: "$200" },
  { name: "Echocardiograms", price: "$200" },
]

const appointmentTypes = [
  { label: "Clinic", icon: RiHomeSmile2Line },
  { label: "Video Call", icon: RiVideoLine },
  { label: "Audio Call", icon: RiPhoneLine },
  { label: "Chat", icon: RiChat3Line },
  { label: "Home Visit", icon: RiUserLocationLine },
]

const optionsData = {
  "Clinic": [
    { name: "AllCare Family Medicine", address: "3343 Private Lane, Valdosta", distance: "500 Meters", img: "/clinics/clinic1.jpg" },
    { name: "Vitalplus Clinic", address: "4223 Pleasant Hill Road, Miami, FL 33169", distance: "12 KM", img: "/clinics/clinic2.jpg" },
    { name: "Wellness Path Chiropractic", address: "418 Patton Lane, Garner, NC 27529, FL 33169", distance: "16 KM", img: "/clinics/clinic3.jpg" },
    { name: "CarePoint Medical Center", address: "220 Oak Street, Dallas, TX 75201", distance: "20 KM", img: "/clinics/clinic4.jpg" },
  ],
  "Video Call": [
    { name: "Instant Video Consultation", address: "Available 9 AM - 9 PM", distance: "Online", img: "/options/video1.jpg" },
    { name: "Scheduled Video Session", address: "Book a slot in advance", distance: "Online", img: "/options/video2.jpg" },
    { name: "Follow-up Video Call", address: "For existing patients", distance: "Online", img: "/options/video3.jpg" },
    { name: "Family Video Consultation", address: "Up to 3 members", distance: "Online", img: "/options/video4.jpg" },
  ],
  "Audio Call": [
    { name: "Instant Audio Consultation", address: "Available 9 AM - 9 PM", distance: "Online", img: "/options/audio1.jpg" },
    { name: "Scheduled Audio Call", address: "Book a slot in advance", distance: "Online", img: "/options/audio2.jpg" },
    { name: "Follow-up Audio Call", address: "For existing patients", distance: "Online", img: "/options/audio3.jpg" },
    { name: "Emergency Audio Line", address: "Priority connect", distance: "Online", img: "/options/audio4.jpg" },
  ],
  "Chat": [
    { name: "Instant Chat Consultation", address: "Available 9 AM - 9 PM", distance: "Online", img: "/options/chat1.jpg" },
    { name: "Scheduled Chat Session", address: "Book a slot in advance", distance: "Online", img: "/options/chat2.jpg" },
    { name: "Follow-up Chat", address: "For existing patients", distance: "Online", img: "/options/chat3.jpg" },
    { name: "Prescription Chat Review", address: "Quick review", distance: "Online", img: "/options/chat4.jpg" },
  ],
  "Home Visit": [
    { name: "Standard Home Visit", address: "Austin, TX area", distance: "5 KM", img: "/options/home1.jpg" },
    { name: "Priority Home Visit", address: "Same day availability", distance: "8 KM", img: "/options/home2.jpg" },
    { name: "Elderly Care Home Visit", address: "Specialized care", distance: "10 KM", img: "/options/home3.jpg" },
    { name: "Post-Surgery Home Visit", address: "Recovery check-up", distance: "12 KM", img: "/options/home4.jpg" },
  ],
}

export default function Booking() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState(0)
  const [selectedType, setSelectedType] = useState(0)
  const [selectedClinic, setSelectedClinic] = useState(2)
  const [selectedDate, setSelectedDate] = useState(13)
  const [selectedOption, setSelectedOption] = useState(0)

const currentTypeLabel = appointmentTypes[selectedType].label
  const currentOptions = optionsData[currentTypeLabel]

  const next = () => setCurrentStep((s) => Math.min(s + 1, 6))
  const back = () => setCurrentStep((s) => Math.max(s - 1, 1))

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <img src="/logo.svg" alt="Doccure" className="h-9 mb-10" />

        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-8">
          {steps.map((label, i) => {
            const stepNum = i + 1
            const isCompleted = stepNum < currentStep
            const isActive = stepNum === currentStep
            return (
              <React.Fragment key={label}>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                      isCompleted
                        ? "bg-[#22c55e] text-white"
                        : isActive
                        ? "bg-[#316dff] text-white"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {isCompleted ? <RiCheckLine size={14} /> : stepNum}
                  </div>
                  <p
                    className={`text-xs mt-2 font-medium whitespace-nowrap ${
                      isCompleted || isActive ? "text-gray-900" : "text-gray-400"
                    }`}
                  >
                    {label}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`w-16 h-[2px] mx-2 mb-5 border-t-2 border-dotted ${
                      isCompleted ? "border-[#22c55e]" : "border-gray-200"
                    }`}
                  />
                )}
              </React.Fragment>
            )
          })}
        </div>

        {/* Doctor Card */}
        <div className="border border-gray-100 rounded-2xl p-6 mb-6 shadow-sm">
          <div className="flex items-center gap-4">
            <img src="/doctors/michael-brown.jpg" alt="Dr. Michael Brown" className="w-16 h-16 rounded-full object-cover bg-gray-100" />
            <div>
              <p className="font-bold text-gray-900 flex items-center gap-2">
                Dr. Michael Brown
                <span className="bg-[#316dff] text-white text-xs font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                  <RiStarFill size={12} /> 5.0
                </span>
              </p>
              <p className="text-[#316dff] text-sm font-medium">Psychologist</p>
              <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                <RiMapPinLine size={14} /> 5th Street - 1011 W 5th St, Suite 120, Austin, TX 78703
              </p>
            </div>
          </div>

          {currentStep >= 3 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100">
              <BookingInfoField label="Service" value="Cardiology (30 Mins)" />
              <BookingInfoField label="Service" value={services[selectedService].name} />
              {currentStep >= 4 && <BookingInfoField label="Date & Time" value="10:00 - 11:00 AM, 15, Oct" />}
              {currentStep >= 4 && <BookingInfoField label="Appointment type" value={`${appointmentTypes[selectedType].label} (${clinics[selectedClinic].name.split(" ")[0]} ${clinics[selectedClinic].name.split(" ")[1] || ""})`} />}
            </div>
          )}
        </div>

        {/* Step content */}
        <div className="border border-gray-100 rounded-2xl p-6 shadow-sm mb-6">
          {currentStep === 1 && (
            <>
              <label className="text-sm font-semibold text-gray-900 block mb-2">Select Speciality</label>
              <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-500 mb-6">
                <option>Select Speciality</option>
                <option>Cardiology</option>
              </select>

              <h3 className="font-bold text-lg text-gray-900 mb-4">Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {services.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedService(i)}
                    className={`text-left border rounded-xl px-5 py-4 relative ${
                      selectedService === i ? "border-[#316dff] bg-blue-50/40" : "border-gray-200"
                    }`}
                  >
                    <p className="font-semibold text-gray-900">{s.name}</p>
                    <p className="text-gray-500 text-sm">{s.price}</p>
                    {selectedService === i && (
                      <span className="absolute top-3 right-3 w-5 h-5 rounded-md bg-[#316dff] flex items-center justify-center">
                        <RiCheckLine size={14} className="text-white" />
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <h3 className="font-bold text-lg text-gray-900 mb-4">Select Appointment Type</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-8">
                {appointmentTypes.map((t, i) => {
                  const Icon = t.icon
                  return (
                    <button
                      key={t.label}
                      onClick={() => setSelectedType(i)}
                      className={`flex flex-col items-center justify-center gap-2 border rounded-xl py-6 ${
                        selectedType === i ? "border-[#316dff] text-[#316dff]" : "border-gray-200 text-gray-700"
                      }`}
                    >
                      <Icon size={22} />
                      <span className="text-sm font-medium">{t.label}</span>
                    </button>
                  )
                })}
              </div>

              <h3 className="font-bold text-lg text-gray-900 mb-4">Select Clinics</h3>
              <div className="flex flex-col gap-4">
                {clinics.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedClinic(i)}
                    className={`flex items-center gap-4 border rounded-xl px-5 py-4 text-left ${
                      selectedClinic === i ? "border-[#316dff] bg-blue-50/30" : "border-gray-200"
                    }`}
                  >
                    <img src={c.img} alt={c.name} className="w-12 h-12 rounded-full object-cover bg-gray-100" />
                    <div>
                      <p className="font-semibold text-gray-900">{c.name}</p>
                      <p className="text-sm text-gray-500">{c.address} &nbsp;•&nbsp; {c.distance}</p>
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}

          {currentStep === 3 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm">
                    <option>2026</option>
                  </select>
                  <select className="border border-gray-200 rounded-lg px-3 py-1.5 text-sm">
                    <option>Jul</option>
                  </select>
                  <div className="flex text-sm ml-auto">
                    <span className="text-[#316dff] font-medium border-b-2 border-[#316dff] pb-1 px-2">Month</span>
                    <span className="text-gray-400 px-2">Year</span>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-2 text-center text-sm">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                    <span key={d} className="text-gray-400 font-medium">{d}</span>
                  ))}
                  {Array.from({ length: 35 }, (_, i) => {
                    const dayNum = i - 1
                    const display = dayNum <= 0 ? 28 + dayNum : dayNum > 31 ? dayNum - 31 : dayNum
                    const isSelected = display === selectedDate && dayNum > 0 && dayNum <= 31
                    return (
                      <button
                        key={i}
                        onClick={() => dayNum > 0 && dayNum <= 31 && setSelectedDate(display)}
                        className={`py-2 rounded-md ${isSelected ? "bg-[#316dff] text-white" : "text-gray-700"}`}
                      >
                        {display}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                {["Morning", "Afternoon", "Evening"].map((period, pi) => (
                  <div key={period} className="mb-5">
                    <p className="font-semibold text-gray-900 mb-2">{period}</p>
                    <div className="grid grid-cols-5 gap-2">
                      {Array.from({ length: pi === 1 ? 5 : 10 }, (_, i) => (
                        <button
                          key={i}
                          className={`text-xs rounded-md py-2 ${
                            i === 0 ? "bg-cyan-400 text-white font-semibold" : "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {i === 0 ? "09:45" : i % 4 === 0 ? "-" : "10:45"}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <Field label="First Name" />
              <Field label="Last Name" />
              <Field label="Phone Number" />
              <Field label="Email Address" />
              <div>
                <label className="text-sm text-gray-700 mb-1 block">Select Patient</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-500">
                  <option>Select</option>
                </select>
              </div>
              <Field label="Symptoms" />
              <div className="md:col-span-3">
                <label className="text-sm text-gray-700 mb-1 block">Attachment</label>
                <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-500">
                  <span className="bg-gray-100 px-3 py-1 rounded text-gray-700">Choose file</span> No file chosen
                </div>
              </div>
              <div className="md:col-span-3">
                <label className="text-sm text-gray-700 mb-1 block">Reason for Visit</label>
                <textarea rows={3} className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm" />
              </div>
            </div>
          )}

          {currentStep === 5 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Payment Gateway</h3>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <button className="flex items-center justify-center gap-2 border-2 border-[#316dff] rounded-lg py-2.5 text-sm font-medium text-gray-900">
                    <RiBankCardLine size={16} /> Credit Card
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-500">
                    Paypal
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2.5 text-sm font-medium text-gray-500">
                    Stripe
                  </button>
                </div>
                <Field label="Card Holder Name" icon={<RiUserLine size={16} />} />
                <div className="mt-4"><Field label="Card Number" icon={<RiBankCardLine size={16} />} /></div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Field label="Expire Date" icon={<RiCalendarLine size={16} />} />
                  <Field label="CVV" icon={<RiShieldCheckFill size={16} />} />
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg text-gray-900 mb-4">Booking Info</h3>
                <p className="text-sm text-gray-500">Date & Time</p>
                <p className="font-semibold text-gray-900 mb-4">10:00 - 11:00 AM, 15, Oct 2025</p>
                <p className="text-sm text-gray-500">Appointment type</p>
                <p className="font-semibold text-gray-900 mb-4 pb-4 border-b border-gray-100">Clinic (Wellness Path)</p>

                <p className="font-bold text-gray-900 mb-3">Payment Info</p>
                <div className="flex flex-col gap-2 text-sm">
                  <Row label="Echocardiograms" value="$200" />
                  <Row label="Booking Fees" value="$20" />
                  <Row label="Tax" value="$18" />
                  <Row label="Discount" value="-$15" valueClass="text-red-500" />
                </div>
                <div className="bg-[#316dff] text-white rounded-lg flex items-center justify-between px-4 py-3 mt-4 font-bold">
                  <span>Total</span> <span>$320</span>
                </div>
              </div>
            </div>
          )}

          {currentStep === 6 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <p className="flex items-center gap-2 font-bold text-lg text-gray-900 mb-4">
                  <span className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <RiCheckLine size={14} className="text-white" />
                  </span>
                  Booking Confirmed
                </p>
                <div className="flex items-start gap-3 mb-6">
                  <img src="/doctors/michael-brown.jpg" className="w-10 h-10 rounded-full object-cover bg-gray-100" alt="" />
                  <p className="text-sm text-gray-700">
                    Your Booking has been Confirmed with <span className="font-semibold">Dr. Michael Brown</span> be on time before <span className="font-semibold">15 Mins</span> From the appointment Time
                  </p>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <p className="font-bold text-gray-900">Booking Info</p>
                  <button className="text-sm font-medium border border-gray-200 rounded-full px-4 py-1.5 flex items-center gap-1">
                    ⟲ Reschedule
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                  <div><p className="text-gray-500">Service</p><p className="font-semibold text-gray-900">Cardiology (30 Mins)</p></div>
                  <div><p className="text-gray-500">Additional Service</p><p className="font-semibold text-gray-900">Echocardiograms</p></div>
                  <div><p className="text-gray-500">Date & Time</p><p className="font-semibold text-gray-900">10:00 - 11:00 AM, 15, Oct 2025</p></div>
                  <div><p className="text-gray-500">Appointment type</p><p className="font-semibold text-gray-900">Clinic</p></div>
                </div>
                <p className="text-sm text-gray-500">Clinic Name & Location</p>
                <p className="font-semibold text-gray-900">Wellness Path <a href="#" className="text-[#316dff] font-medium">View Location</a></p>

                <div className="flex items-center justify-between border border-gray-100 rounded-xl px-5 py-4 mt-6">
                  <div>
                    <p className="font-semibold text-gray-900">Need Our Assistance</p>
                    <p className="text-sm text-gray-500">Call us in case you face any Issue on Booking / Cancellation</p>
                  </div>
                  <button className="flex items-center gap-2 bg-[#0f172a] text-white rounded-full px-4 py-2 text-sm font-semibold">
                    <RiPhoneLine size={16} /> Call Us
                  </button>
                </div>
              </div>

              <div className="border border-gray-100 rounded-2xl p-6 text-center">
                <p className="font-bold text-gray-900 mb-3">Booking Number</p>
                <p className="border border-green-300 text-green-600 font-semibold rounded-lg py-2 mb-4">DCRA12565</p>
                <div className="w-40 h-40 bg-gray-100 mx-auto mb-4 flex items-center justify-center text-xs text-gray-400">QR CODE</div>
                <p className="text-sm text-gray-500 mb-6">Scan this QR Code to Download the details of Appointment</p>
                <button className="w-full bg-[#0f172a] text-white rounded-full py-3 font-semibold mb-3">Add To Calendar</button>
                <button className="w-full bg-[#316dff] text-white rounded-full py-3 font-semibold">Start New Booking</button>
              </div>
            </div>
          )}
        </div>

        {currentStep < 6 && (
          <div className="flex items-center justify-between">
            <button
              onClick={back}
              disabled={currentStep === 1}
              className="flex items-center gap-1 bg-[#0f172a] text-white rounded-full px-6 py-3 font-semibold text-sm disabled:opacity-40"
            >
              <RiArrowLeftSLine size={18} /> Back
            </button>
            <button
              onClick={next}
              className="flex items-center gap-1 bg-[#316dff] text-white rounded-full px-6 py-3 font-semibold text-sm"
            >
              {currentStep === 1 && "Select Appointment Type"}
              {currentStep === 2 && "Add Basic Information".replace("Add Basic Information", "Add Basic Information")}
              {currentStep === 2 && ""}
              {currentStep === 3 && "Add Basic Information"}
              {currentStep === 4 && "Select Payment"}
              {currentStep === 5 && "Confirm & Pay"}
              {currentStep === 2 && "Add Basic Information"}
              <RiArrowRightSLine size={18} />
            </button>
          </div>
        )}

        {currentStep < 6 && (
          <p className="text-center text-sm text-gray-400 mt-10">Copyright © 2026. All Rights Reserved, Doccure</p>
        )}
      </div>
    </div>
  )
}

function BookingInfoField({ label, value }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-semibold text-gray-900">{value}</p>
    </div>
  )
}

function Field({ label, icon }) {
  return (
    <div>
      <label className="text-sm text-gray-700 mb-1 block">{label}</label>
      <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-3">
        {icon && <span className="text-gray-400">{icon}</span>}
        <input className="w-full text-sm outline-none" />
      </div>
    </div>
  )
}

function Row({ label, value, valueClass = "text-gray-900" }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-500">{label}</span>
      <span className={`font-semibold ${valueClass}`}>{value}</span>
    </div>
  )
}