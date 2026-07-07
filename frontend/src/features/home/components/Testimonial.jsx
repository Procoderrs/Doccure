import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const testimonials = [
  {
    name: "John Doe",
    location: "United States",
    img: "/patient22.webp",
    title: "Excellent Service",
    text: "I had a wonderful experience. The staff was friendly and attentive, and the doctor explained everything clearly.",
    rating: 5,
  },
  {
    name: "John Doe",
    location: "United States",
    img: "/patient22.webp",
    title: "Excellent Service",
    text: "I had a wonderful experience. The staff was friendly and attentive, and the doctor explained everything clearly.",
    rating: 5,
  },
  {
    name: "John Doe",
    location: "United States",
    img: "/patient22.webp",
    title: "Excellent Service",
    text: "I had a wonderful experience. The staff was friendly and attentive, and the doctor explained everything clearly.",
    rating: 5,
  },
  {
    name: "John Doe",
    location: "United States",
    img: "/patient22.webp",
    title: "Excellent Service",
    text: "I had a wonderful experience. The staff was friendly and attentive, and the doctor explained everything clearly.",
    rating: 5,
  },
  {
    name: "John Doe",
    location: "United States",
    img: "/patient22.webp",
    title: "Excellent Service",
    text: "I had a wonderful experience. The staff was friendly and attentive, and the doctor explained everything clearly.",
    rating: 5,
  },
  {
    name: "John Doe",
    location: "United States",
    img: "/patient22.webp",
    title: "Excellent Service",
    text: "I had a wonderful experience. The staff was friendly and attentive, and the doctor explained everything clearly.",
    rating: 5,
  },
]

const stats = [
  { number: "500+", color: "#22c55e", status: "Doctors Available" },
  { number: "18+", color: "#02bfff", status: "Specialities" },
  { number: "30K", color: "#6938ef", status: "Health Packages" },
  { number: "100+", color: "#22c55e", status: "Lab Tests" },
  { number: "99%", color: "#02bfff", status: "Happy Patients" },
]

export default function Testimonials() {
  return (
    <section
      className="w-full py-20 font-user overflow-hidden"
      style={{ background: "linear-gradient(180deg, #e6f1fb 0%, #ffffff 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-18">

        {/* Badge + Heading */}
        <div className="flex flex-col items-center text-center mb-12">
          <div
            className="flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold mb-4"
            style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            <span>•</span>
            <span>Testimonials</span>
            <span>•</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            15k Users <span style={{ color: "#316dff" }}>Trust Doccure</span> Worldwide
          </h2>
        </div>

        {/* Swiper Carousel */}
        <div className="mb-16">
          <Swiper
            modules={[Navigation, Pagination]}
            
           
            loop={true}
            spaceBetween={20}
            breakpoints={{
              0:    { slidesPerView: 1 },
              640:  { slidesPerView: 1 },
              768:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-500 ease-in-out hover:bg-[#316dff] h-full">

                  {/* Stars + Quote */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex gap-1">
                      {[...Array(t.rating)].map((_, j) => (
                        <span
                          key={j}
                          className="text-yellow-400 text-lg group-hover:text-yellow-300 transition-colors duration-500"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <img
                      src="/quote-icon.svg"
                      alt="quote"
                      className="w-8 h-8 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-[24px] font-bold text-gray-900 mb-3 group-hover:text-white transition-colors duration-500">
                    {t.title}
                  </h3>

                  {/* Text */}
                  <p className="text-gray-500 text-sm md:text-base mb-6 group-hover:text-blue-100 transition-colors duration-500">
                    {t.text}
                  </p>

                  {/* Avatar + Name */}
                  <div className="flex items-center gap-3">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-bold text-gray-900 group-hover:text-white transition-colors duration-500">
                        {t.name}
                      </p>
                      <p className="text-gray-500 text-sm group-hover:text-blue-100 transition-colors duration-500">
                        {t.location}
                      </p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-5xl font-black text-gray-900 mb-2">{stat.number}</p>
              <div
                className="h-[3px] w-16 md:w-[100px] mx-auto rounded-full"
                style={{ backgroundColor: stat.color }}
              />
              <p className="pt-3 md:pt-4 text-sm md:text-lg text-gray-500">{stat.status}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}