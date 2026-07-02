import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
const specialties = [
  { img: "/neurology.jpeg", icon: "/speciality-icon-01.svg", label: "Cardiology", doctors: 254 },
  { img: "/cardiology.jpeg", icon: "/speciality-icon-02.svg", label: "Orthopedics", doctors: 151 },
  { img: "/orthopedics.jpeg", icon: "/speciality-icon-03.svg", label: "Neurology", doctors: 176 },
  { img: "/pediatrics.jpeg", icon: "/speciality-icon-04.svg", label: "Pediatrics", doctors: 124 },
  { img: "/urology.jpeg", icon: "/speciality-icon-05.svg", label: "Psychiatry", doctors: 112 },
  { img: "/pediatrics.jpeg", icon: "/speciality-icon-06.svg", label: "Endocrinology", doctors: 104 },
  { img: "/endocrinology.jpeg", icon: "/speciality-icon-07.svg", label: "Dentistry", doctors: 189 },
  { img: "/pulmonology.jpeg", icon: "/speciality-icon-08.svg", label: "Ophthalmology", doctors: 98 },
]


export default function TopSpecialties() {
  

  return (
    <section className="w-full bg-white pt-56 pb-24 font-user">
      <div className="max-w-7xl mx-auto px-4">

        {/* Badge + Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div
            className="flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold mb-4"
            style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            <span>•</span>
            <span>Top Specialties</span>
            <span>•</span>
          </div>
          <h2 className="text-[28px] font-bold text-gray-900">
            Highlighting the{" "}
            <span style={{ color: "#316dff" }}>Care & Support</span>
          </h2>
        </div>

        <div className="relative">

  <Swiper
    modules={[Navigation]}
    
    spaceBetween={20}
    loop={true}
    breakpoints={{
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 7,
      },
    }}
  >
    {specialties.map((item, i) => (
      <SwiperSlide key={i}>

        <div className="flex flex-col items-center gap-3 cursor-pointer group">

          {/* Image */}
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">

            <img
              src={item.img}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/40" />

            <div className="absolute inset-0 flex items-center justify-center z-10">

              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">

                <img
                  src={item.icon}
                  alt=""
                  className="w-7 h-7 object-contain"
                />

              </div>

            </div>

          </div>

          <div className="text-center">

            <p className="font-bold text-gray-900 text-lg md:text-xl">
              {item.label}
            </p>

            <p className="text-gray-500">
              {item.doctors} Doctors
            </p>

          </div>

        </div>

      </SwiperSlide>
    ))}
  </Swiper>

</div>
      </div>
    </section>
  )
}