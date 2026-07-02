import React, { useState } from 'react'
import { RiPlayLine, RiSubtractLine, RiAddLine, RiSearchLine, RiUser3Line, RiCalendarLine, RiMessage2Line, RiCloseLine } from "@remixicon/react"

const faqs = [
  {
    title: "Our Vision",
    desc: "We envision a community where everyone has access to high-quality healthcare and the resources they need to lead healthy, fulfilling lives.",
  },
  {
    title: "Our Mission",
    desc: "To provide accessible, affordable, and high-quality healthcare services to every individual, regardless of their location or background.",
  },
]

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

export default function AboutUs() {
  const [openIndex, setOpenIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="w-full bg-[#000103] py-20 font-user relative overflow-hidden">

      {/* ===== Video Modal ===== */}
      {showVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center px-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition"
            >
              <RiCloseLine size={20} className="text-gray-800" />
            </button>
            <div className="rounded-2xl overflow-hidden aspect-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/MyQxnFgPgQU?autoplay=1"
                title="Doccure Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}

      {/* ===== About Us block ===== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-18 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">

        {/* Left — Images — mobile pe neeche */}
        <div className="relative order-2 lg:order-1">

          <img
            src="/book-01.webp"
            alt=""
            className="w-full h-[220px] md:h-[280px] object-cover rounded-2xl"
          />

          <div className="grid grid-cols-2 gap-4 mt-4">
            <img src="/book-02.webp" alt="" className="w-full h-[150px] md:h-[200px] object-cover rounded-2xl" />
            <img src="/book-03.webp" alt="" className="w-full h-[150px] md:h-[200px] object-cover rounded-2xl" />
          </div>

          {/* Play Video button */}
          <div className="absolute top-[55%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20">
            <div
              className="bg-white rounded-full p-2 flex items-center justify-center shadow-lg cursor-pointer"
              onClick={() => setShowVideo(true)}
            >
              <div className="bg-[#316dff] rounded-full p-2 flex items-center justify-center">
                <div className="relative w-20 h-20 md:w-28 md:h-28">
                  <svg
                    className="absolute inset-0 w-full h-full animate-spin-slow"
                    viewBox="0 0 100 100"
                  >
                    <defs>
                      <path id="circle" d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                    </defs>
                    <text className="text-[11px]" fill="#fff" letterSpacing="4">
                      <textPath href="#circle">Play Video • Play Video •</textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 m-auto w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-black">
                    <RiPlayLine size={20} className="text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right — Content — mobile pe upar */}
        <div className="order-1 lg:order-2">

          <div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold mb-6"
            style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            <span>•</span>
            <span>About Us</span>
            <span>•</span>
          </div>

          <h2 className="text-[24px] md:text-[32px] lg:text-[42px] font-bold text-white leading-snug mb-4">
            We are committed to understanding your{" "}
            <span style={{ color: "#02bfff" }}>unique needs and delivering care.</span>
          </h2>

          <p className="text-white text-sm md:text-base mb-8">
            As a trusted health as a trusted healthcare provider in our community, we are passionate about promoting health and wellness beyond the clinic.
          </p>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-700 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer"
                >
                  <span
                    className="font-semibold text-lg md:text-xl"
                    style={{ color: openIndex === i ? "#316dff" : "white" }}
                  >
                    {faq.title}
                  </span>
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center shrink-0"
                    style={{ background: openIndex === i ? "#316dff" : "#1e2a3a" }}
                  >
                    {openIndex === i
                      ? <RiSubtractLine size={16} className="text-white" />
                      : <RiAddLine size={16} className="text-white" />
                    }
                  </div>
                </button>

                {openIndex === i && (
                  <div className="px-5 pb-4 text-gray-400 text-sm leading-relaxed border-t border-gray-700 pt-3">
                    {faq.desc}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ===== How It Works block ===== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-18 relative">

        {/* Left decorative lines */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 hidden md:block">
          <div className="flex flex-col gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-[2px] bg-blue-400 rounded"
                style={{ width: `${60 - i * 10}px` }}
              />
            ))}
          </div>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 large:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center group">

              {/* Arrow — desktop only */}
              {i < steps.length - 1 && (
                <img
                  src="/way-icon.svg"
                  alt=""
                  className="absolute top-10 left-[80%] w-[60%] z-10 pointer-events-none hidden large:block"
                />
              )}

              {/* Icon circle */}
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 md:mb-6 z-10 relative"
                style={{ backgroundColor: step.bg }}
              >
                <step.icon size={28} className="text-white" />
              </div>

              {/* Title */}
              <h3
                className="text-base md:text-[20px] lg:text-[24px] font-bold mb-2 md:mb-3 transition-colors duration-300 group-hover:text-[#3872ff]"
                style={{ color: step.active ? "#02bfff" : "white" }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-white text-xs md:text-sm lg:text-base leading-relaxed mb-4 md:mb-6 transition-colors duration-300">
                {step.desc}
              </p>

              {/* Big number */}
              <span
                className="font-bold text-transparent group-hover:text-[#85b7eb]"
                style={{
                  background: "linear-gradient(#2a2a2a 0%, #031c36 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  fontSize: "clamp(40px, 5vw, 80px)",
                  fontWeight: 700,
                  transition: "all 0.7s",
                }}
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