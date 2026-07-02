import React from 'react'
import { RiHeadphoneLine, RiMessage2Line } from "@remixicon/react"

export default function FooterUpper() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-18 py-6 md:py-8">
      <div
        className="relative rounded-2xl md:rounded-3xl overflow-hidden py-10 md:py-16 px-6 md:px-16 flex flex-col items-center text-center"
        style={{ background: "#316dff" }}
      >
        {/* Background image */}
        <img
          src="/info-bg.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none hidden md:block"
        />

        <div className="relative z-10 w-full">

          {/* Heading */}
          <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-white mb-6 md:mb-10">
            Working for Your Better Health.
          </h2>

          {/* Contact boxes */}
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center">

            {/* Phone */}
            <div className="flex items-center gap-3 md:gap-4  rounded-full px-4 md:px-6 py-2.5 md:py-3 w-full sm:w-auto">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                <RiHeadphoneLine size={18} style={{ color: "#316dff" }} />
              </div>
              <div className="text-left">
                <p className="text-white/80 text-xs md:text-sm">Customer Support</p>
                <p className="text-white font-bold text-sm md:text-base">+1 56589 54598</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 md:gap-4  rounded-full px-4 md:px-6 py-2.5 md:py-3 w-full sm:w-auto">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                <RiMessage2Line size={18} style={{ color: "#316dff" }} />
              </div>
              <div className="text-left">
                <p className="text-white/80 text-xs md:text-sm">Drop Us an Email</p>
                <p className="text-white font-bold text-sm md:text-base">info1256@example.com</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}