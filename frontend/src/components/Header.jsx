import React, { useState } from 'react'
import { RiSearchLine, RiLayoutGridFill, RiVidiconLine, RiMicLine, RiPhoneLine } from "@remixicon/react"

function HeroSection() {
  const [hoveredDoctor, setHoveredDoctor] = useState(null)

  const doctors = [
    { id: 1, img: "/doctor-thumb-22.jpg" },
    { id: 2, img: "/doctor-thumb-23.jpg" },
    { id: 3, img: "/doctor-thumb-24.jpg" },
  ]

  const categories = [
    { img: "/list-icon-01.svg", label: "Book Appointment", bg: "#02bfff" },
    { img: "/list-icon-02.svg", label: "Talk to Doctors", bg: "#316dff" },
    { img: "/list-icon-03.svg", label: "Hospitals & Clinics", bg: "#dd2590" },
    { img: "/list-icon-04.svg", label: "Healthcare", bg: "#06aed4" },
    { img: "/list-icon-05.svg", label: "Medicine & Supplies", bg: "#6938ef" },
    { img: "/list-icon-06.svg", label: "Lab Testing", bg: "#e04f16" },
    { img: "/list-icon-07.svg", label: "Home Care", bg: "#0e3894" },
  ]

  return (
    <section
      className="relative w-full h-full pb-12 lg:pb-48 flex items-center font-user"
      style={{
        background: "linear-gradient(#016be7 0%, #0066e9 50.5%, #96e8fe 88.5%, #b1fcf7 100%)",
      }}
    >
      {/* ===== Decorative images — mobile pe hide ===== */}
      <img
        src="/banner-element-02.png"
        alt=""
        className="absolute -rotate-12 -top-13 opacity-20 -right-32 pointer-events-none hidden lg:block"
      />
      <img
        src="/banner-element-01.png"
        alt=""
        className="absolute bottom-0 -left-24 pointer-events-none hidden lg:block"
      />
      <img
        className="absolute bottom-24 left-18 spin-star hidden lg:block"
        src="/banner-star.svg"
        alt=""
      />

      {/* ===== Main content grid =====
          mobile  → 1 col (stacked)
          lg      → 2 col [60% content | 40% doctor image] */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-18 pt-28 lg:pt-0 grid grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-8">

        {/* ===== Left — Content ===== */}
        <div className="w-full text-center lg:text-left">

          {/* 5K Appointments card */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2 mb-6 shadow-md cursor-pointer">
            <div className="flex -space-x-4">
              {doctors.map((doc) => (
                <div
                  key={doc.id}
                  className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white overflow-hidden transition-all duration-300 cursor-pointer z-10 hover:z-20 hover:-translate-y-2 hover:scale-110"
                  onMouseEnter={() => setHoveredDoctor(doc.id)}
                  onMouseLeave={() => setHoveredDoctor(null)}
                >
                  <img src={doc.img} alt="" className="w-full h-full object-cover object-top" />
                </div>
              ))}
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm leading-tight">5K+ Appointments</p>
              <div className="flex items-center gap-1 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xs">★</span>
                ))}
                <span className="text-gray-500 text-xs ml-1">5.0 Ratings</span>
              </div>
            </div>
          </div>

          {/* Heading — 2 lines:
              Line 1: Discover Health: Find Your Trusted [icon]
              Line 2: Doctors Today */}
          <h1 className="text-[26px] md:text-[40px] lg:text-[52px] font-bold text-white leading-tight mb-8 text-center lg:text-left">
            Discover Health: Find Your Trusted{" "}
            {/* video icon — inline so it stays in line 1 */}
            <span className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-blue-500/80 backdrop-blur-sm mx-1 align-middle">
              <img src="/video.svg" className="w-7 h-7 lg:w-10 lg:h-10" />
            </span>
            <br />
            Doctors Today
          </h1>

          {/* Search Bar — pill on desktop, stacked on mobile */}
          <div className="bg-white rounded-2xl lg:rounded-full px-4 py-3 flex flex-col lg:flex-row items-stretch lg:items-center gap-3 shadow-lg w-full lg:max-w-[600px] mx-auto lg:mx-0">

            {/* Select Speciality */}
            <div className="flex items-center gap-2 lg:border-r border-b lg:border-b-0 border-gray-200 pb-3 lg:pb-0 lg:pr-4">
              <RiLayoutGridFill size={14} className="text-gray-700 shrink-0" />
              <span className="text-gray-700 text-sm font-medium whitespace-nowrap">Select Speciality</span>
              <span className="text-gray-500 text-xs ml-auto lg:ml-3">▼</span>
            </div>

            {/* Search input */}
            <div className="flex items-center gap-2 flex-1">
              <RiSearchLine size={18} className="text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Search for Medical Procedures, hospitals"
                className="flex-1 text-sm text-gray-500 outline-none bg-transparent"
              />
            </div>

            {/* Search button */}
            <button
              className="w-full lg:w-auto px-6 py-2.5 rounded-full text-white text-sm font-semibold shrink-0"
              style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
            >
              Search
            </button>

          </div>
        </div>

        {/* ===== Right — Doctor image (desktop only) ===== */}
        <div className="relative hidden lg:flex items-end justify-center">
          <img
            src="/banner-doctor.svg"
            alt="Doctor"
            className="relative z-10 h-[520px] object-contain drop-shadow-2xl"
          />

          <img
            className="absolute bottom-12 left-10 spin-star"
            src="/banner-star.svg"
            alt=""
          />

          {/* Pulse call widget */}
          <div className="absolute bottom-24 right-8 z-50">
            <span className="pulse-ring-1 absolute inset-0 rounded-full bg-white/80" />
            <span className="pulse-ring-2 absolute inset-0 rounded-full bg-white/55" />
            <div className="relative bg-white shadow-lg rounded-full">
              <div className="flex items-center justify-between py-3 px-6 gap-10">
                <RiVidiconLine className="text-black w-6 h-6" />
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-red-500">
                  <RiPhoneLine className="text-white w-6 h-6" />
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 48 48">
                    <line x1="30" y1="14" x2="18" y2="34" stroke="white" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                </div>
                <RiMicLine className="text-black w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* ===== Category Icons — desktop pe absolute bottom overlap ===== */}
      <div className="hidden md:block absolute -bottom-20 lg:-bottom-28 left-1/2 -translate-x-1/2 w-full max-w-[95%] lg:max-w-[1100px] px-4 z-20">
        <div className="bg-white rounded-2xl shadow-xl py-6 lg:py-10 px-4 lg:px-10">
          <div className="grid grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6 place-items-center">
            {categories.map((item, i) => (
              <div key={i} className="flex flex-col items-center justify-center gap-2 cursor-pointer group">
                <div
                  style={{ backgroundColor: item.bg }}
                  className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
                >
                  <img src={item.img} alt={item.label} className="w-6 h-6 lg:w-8 lg:h-8 object-contain" />
                </div>
                <p className="text-gray-800 text-xs lg:text-sm font-bold text-center leading-tight">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default HeroSection