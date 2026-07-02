import React from 'react'
import { RiSearchLine, RiUser3Line, RiCalendarLine, RiMessage2Line } from "@remixicon/react"

const steps = [
  {
    icon: RiSearchLine,
    bg: "#316dff",
    title: "Search For Doctors",
    desc: "Search for a doctor based on specialization, location, or availability for your Treatements",
    number: "01",
  },
  {
    icon: RiUser3Line,
    bg: "#e04f16",
    title: "Check Doctor Profile",
    desc: "Explore detailed doctor profiles on our platform to make informed healthcare decisions.",
    number: "02",
  },
  {
    icon: RiCalendarLine,
    bg: "#02bfff",
    title: "Schedule Appointment",
    desc: "After choose your preferred doctor, select a convenient time slot, & confirm your appointment.",
    number: "03",
    active: true,
  },
  {
    icon: RiMessage2Line,
    bg: "#6938ef",
    title: "Get Your Solution",
    desc: "Discuss your health with the doctor and the personalized advice & with solution.",
    number: "04",
  },
]

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#000103]  font-user relative overflow-hidden">

      {/* BG decorative lines left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20">
        <div className="flex flex-col gap-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-[2px] bg-blue-400 rounded" style={{ width: `${60 - i * 10}px` }} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-18">
        <div className="grid grid-cols-4 gap-8 relative">

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">

              {/* Dashed arrow — between steps */}
              {i < steps.length - 1 && (
                <div className="absolute top-10 left-[60%] w-[80%] z-10">
                  <svg width="120" height="30" viewBox="0 0 120 30">
                    <path
                      d="M 0 15 Q 60 0 120 15"
                      stroke="#444"
                      strokeWidth="1.5"
                      strokeDasharray="6 4"
                      fill="none"
                    />
                    <polygon points="115,10 120,15 115,20" fill="#444" />
                  </svg>
                </div>
              )}

              {/* Icon circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 z-10 relative"
                style={{ backgroundColor: step.bg }}
              >
                <step.icon size={32} className="text-white" />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: step.active ? "#02bfff" : "white" }}
              >
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {step.desc}
              </p>

              {/* Big number */}
              <span
                className="text-7xl font-black"
                style={{ color: step.active ? "#02bfff" : "#1a2235" }}
              >
                {step.number}
              </span>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}