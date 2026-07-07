import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { RiMapPinLine, RiTimeLine, RiCalendarLine, RiHeartLine, RiHeartFill } from "@remixicon/react"

import "swiper/css"
import "swiper/css/navigation"

const doctors = [
  {
    img: "/michelbrown.jpg",
    rating: 5.0,
    specialty: "Psychologist",
    specialtyColor: "#316dff",
    borderColor: "#316dff",
    name: "Dr. Michael Brown",
    location: "Minneapolis, MN",
    time: "30 Min",
    fee: "$650",
  },
  {
    img: "/michelbrown.jpg",
    rating: 4.6,
    specialty: "Pediatrician",
    specialtyColor: "#dd2590",
    borderColor: "#dd2590",
    name: "Dr. Nicholas Tello",
    location: "Ogden, IA",
    time: "60 Min",
    fee: "$350",
  },
  {
    img: "/michelbrown.jpg",
    rating: 4.8,
    specialty: "Neurologist",
    specialtyColor: "#0e3894",
    borderColor: "#0e3894",
    name: "Dr. Harold Bryant",
    location: "Winona, MS",
    time: "30 Min",
    fee: "$500",
  },
  {
    img: "/michelbrown.jpg",
    rating: 4.8,
    specialty: "Cardiologist",
    specialtyColor: "#02bfff",
    borderColor: "#02bfff",
    name: "Dr. Sandra Jones",
    location: "Beckley, WV",
    time: "30 Min",
    fee: "$550",
  },
]

export default function FeaturedDoctors() {
  const [liked, setLiked] = useState({})

  const toggleLike = (i) => {
    setLiked((prev) => ({ ...prev, [i]: !prev[i] }))
  }

  return (
    <section className="w-full bg-gray-50 py-16 font-user">
      <div className="max-w-7xl mx-auto px-6 lg:px-18">

        {/* Badge + Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div
            className="flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold mb-4"
            style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            <span>•</span>
            <span>Featured Doctors</span>
            <span>•</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span style={{ color: "#316dff" }}>Highlighted</span> Doctor
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0:    { slidesPerView: 1 },
            480:  { slidesPerView: 2 },
            768:  { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {doctors.map((doc, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">

                {/* Image area */}
                <div className="relative bg-gray-100">
                  <img
                    src={doc.img}
                    alt={doc.name}
                    className="w-full h-56 object-cover object-top"
                  />

                  {/* Rating badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    <span>★</span>
                    <span>{doc.rating.toFixed(1)}</span>
                  </div>

                  {/* Heart button */}
                  <button
                    onClick={() => toggleLike(i)}
                    className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform duration-200"
                  >
                    {liked[i]
                      ? <RiHeartFill size={16} className="text-red-500" />
                      : <RiHeartLine size={16} className="text-gray-400" />
                    }
                  </button>
                </div>

                {/* Card body */}
                <div className="p-4">

                  {/* Specialty + Available */}
                  <div
                    className="flex items-center justify-between mb-2 pb-2"
                    style={{ borderLeft: `3px solid ${doc.borderColor}`, paddingLeft: "8px" }}
                  >
                    <span className="text-sm font-semibold" style={{ color: doc.specialtyColor }}>
                      {doc.specialty}
                    </span>
                    <span className="flex items-center gap-1 text-green-500 text-xs font-medium">
                      <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                      Available
                    </span>
                  </div>

                  {/* Doctor name */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{doc.name}</h3>

                  {/* Location + Time */}
                  <div className="flex items-center gap-3 text-gray-500 text-sm mb-4 flex-wrap">
                    <span className="flex items-center gap-1">
                      <RiMapPinLine size={14} />
                      {doc.location}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span className="flex items-center gap-1">
                      <RiTimeLine size={14} />
                      {doc.time}
                    </span>
                  </div>

                  {/* Fees + Book button */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div>
                      <p className="text-gray-400 text-xs">Consultation Fees</p>
                      <p className="text-orange-500 font-bold text-lg">{doc.fee}</p>
                    </div>
                    <button
                      className="w-11 h-11 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 duration-200"
                      style={{ background: "#0f172a" }}
                    >
                      <RiCalendarLine size={18} />
                    </button>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}