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
      className="relative w-full h-full pb-12 md:pb-48 flex items-center font-user"
      style={{
        background: "linear-gradient(#016be7 0%, #0066e9 50.5%, #96e8fe 88.5%, #b1fcf7 100%)",
      }}
    >
      {/* Decorative images — mobile pe hide */}
      <img
        src="/banner-element-02.png"
        alt=""
        className="absolute -rotate-340 -top-13 opacity-12 -right-32 pointer-events-none hidden md:block"
      />
      <img
        src="/banner-element-01.png"
        alt=""
        className="absolute bottom-0 -rotate-360 -left-24  pointer-events-none hidden md:block"
      />
      <img
        className="absolute bottom-24 left-18 spin-star   hidden md:block"
        src="/banner-star.svg"
        alt=""
      />

      {/* Main content */}
      <div className="relative z-10 pt-24 w-full max-w-7xl mx-auto px-12 large:px-18  md:pt-12 large:pt-12 grid grid-cols-1 large:grid-cols-[70%_30%] items-center gap-8">

        {/* Left content */}
        <div className="w-full text-center large:text-left">

          {/* 5K Appointments Card */}
          <div className="inline-flex items-center gap-3 bg-white rounded-full px-4 py-2 mb-4 shadow-md cursor-pointer">
            <div className="flex -space-x-5.5">
              {doctors.map((doc) => (
                <div
                  key={doc.id}
                  className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white overflow-hidden transition-all duration-300 cursor-pointer z-10 hover:z-20 hover:-translate-y-2 hover:scale-110"
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

          
         {/* Heading */}
<h1 className="text-[25px] md:text-[46px] lg:text-[56px] w-full font-bold text-white leading-tight mb-6 text-center large:text-left">
  Discover Health: Find Your  <br className="hidden sm:inline lg:hidden"/>Trusted{" "}
  {/* Video icon inline — text flow nahi todta */}
  <span className="inline-flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-blue-500/80 backdrop-blur-sm mx-2 align-middle">
    <img src="/video.svg" className="w-6 h-6 md:w-10 md:h-10" />
  </span>
  <br className="hidden large:inline "/>
  {" "}Doctors Today
</h1>

          {/* Search Bar */}
          <div className="bg-white rounded-2xl lg:rounded-full px-4 py-3 flex flex-col md:flex-row items-stretch lg:items-center gap-3 shadow-lg w-full lg:max-w-[630px] mx-auto lg:mx-0">

            {/* Select Speciality */}
            <div className="flex items-center  gap-2    lg:pb-0 lg:pr-3">
              <RiLayoutGridFill size={12} className="text-black shrink-0" />
              <span className="text-black text-sm font-medium">Select Speciality</span>
              <span className="text-black text-xs ml-auto">▼</span>
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
              className="w-full md:w-auto px-5 py-2 rounded-full text-white text-sm font-semibold"
              style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
            >
              Search
            </button>

          </div>
        </div>

        {/* Right — Doctor Image — desktop only */}
        <div className="relative hidden large:block">
          <img
            src="/banner-doctor.svg"
            alt="Doctor"
            className="relative z-10 h-[520px] large:h-[700px] object-contain drop-shadow-2xl"
          />

          <img
            className="absolute bottom-12 left-18 spin-star"
            src="/banner-star.svg"
            alt=""
          />

          {/* Pulse wrapper */}
          <div className="absolute bottom-26 right-32 large:right-12 z-50">
            <span className="pulse-ring-1 absolute inset-0 rounded-full bg-white/80" />
            <span className="pulse-ring-2 absolute inset-0 rounded-full bg-white/55" />

            <div className="relative bg-white shadow-lg rounded-full">
              <div className="flex items-center justify-between py-3 px-6 gap-12">
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

      {/* Category Icons */}
    {/* Category Icons */}
<div className="  hidden md:block md:absolute md:-bottom-22 -bottom-46  left-1/2 -translate-x-1/2 w-full max-w-[95%] md:max-w-[1100px] px-4 z-20">
  <div className="bg-white rounded-2xl shadow-xl py-6 lg:py-12 px-4 lg:px-8">

    {/* place-items-center — har cell mein icon+text dono direction center */}
    <div className="grid grid-cols-4 lg:grid-cols-7 gap-4 lg:gap-6 place-items-center">
      {categories.map((item, i) => (
        <div key={i} className="flex flex-col items-center  justify-center gap-2 cursor-pointer group">
          <div
            style={{ backgroundColor: item.bg }}
            className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1"
          >
            <img src={item.img} alt={item.label} className="w-6 h-6 lg:w-8 lg:h-8 object-contain" />
          </div>
          <p className="text-gray-800 text-xs md:text-base font-bold text-center leading-tight">
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