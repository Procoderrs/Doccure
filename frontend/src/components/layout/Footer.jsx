import React from 'react'
import { Link } from 'react-router-dom'
import { RiSendPlaneFill, RiFacebookCircleLine, RiTwitterXLine, RiInstagramLine, RiLinkedinFill } from "@remixicon/react"

const footerLinks = [
  {
    title: "Company",
    links: ["About", "Features", "Works", "Careers", "Locations"],
  },
  {
    title: "Treatments",
    links: ["Dental", "Cardiac", "Spinal Cord", "Hair Growth", "Anemia & Disorder"],
  },
  {
    title: "Specialities",
    links: ["Transplant", "Cardiologist", "Oncology", "Pediatrics", "Gynacology"],
  },
  {
    title: "Utilites",
    links: ["Pricing", "Contact", "Request A Quote", "Premium Membership", "Integrations"],
  },
]

const socialIcons = [
  RiFacebookCircleLine,
  RiTwitterXLine,
  RiInstagramLine,
  RiLinkedinFill,
]

const paymentIcons = [
  "/card-01.svg",
  "/card-02.svg",
  "/card-03.svg",
  "/card-04.svg",
  "/card-05.svg",
  "/card-06.svg",
]

export default function Footer() {
  return (
    <footer className="w-full font-user relative">

      {/* Background image */}
      <img
        src="/footer-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none hidden md:block"
      />

      {/* Links + Newsletter */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-18 py-10 md:py-16">

        {/* grid cols:
            default  → 1 col  (mobile)
            sm       → 2 cols
            md       → 4 cols
            xl       → 5 cols (4 link cols + newsletter) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-[15%_15%_15%_16%_30%] gap-6 md:gap-8">

          {footerLinks.map((col, i) => (
            <div key={i}>
              <h3 className="font-bold text-gray-900 text-lg md:text-xl lg:text-2xl mb-3 md:mb-5">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-2 md:gap-3">
                {col.links.map((link, j) => (
                  <li key={j}>
                    <Link
                      to="#"
                      className="text-gray-600 text-sm md:text-base lg:text-lg hover:text-[#316dff] transition-colors duration-200"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter:
              default  → 1 col span
              sm       → 2 col span (puri width)
              md       → 4 col span (puri width)
              xl       → apna 1 col */}
          <div className="col-span-1 sm:col-span-2 md:col-span-2 xl:col-span-1">
            <h3 className="font-bold text-gray-900 text-lg mb-3 md:mb-5">Newsletter</h3>
            <p className="text-gray-500 text-sm mb-3 md:mb-4">
              Subscribe & Stay Updated from the Doccure
            </p>

            <div className="flex items-center bg-white gap-2 border border-gray-200 rounded-full px-3 md:px-4 py-2 mb-5 md:mb-6">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 text-sm text-gray-500 outline-none bg-transparent min-w-0"
              />
              <button
                className="flex items-center gap-1 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-white text-sm font-semibold shrink-0"
                style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
              >
                <RiSendPlaneFill size={14} />
                <span className="hidden sm:inline">Send</span>
              </button>
            </div>

            <h3 className="font-bold text-gray-900 text-lg mb-3 md:mb-4">Connect With Us</h3>
            <div className="flex gap-2 md:gap-3 flex-wrap">
              {socialIcons.map((Icon, i) => (
                <Link
                  key={i}
                  to="#"
                  className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#316dff] hover:border-[#316dff] transition-all duration-200"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-gray-200 bg-[#e6f1fe]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-18 py-4 md:py-5 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0">

          {/* Copyright */}
          <p className="text-gray-600 text-xs md:text-sm text-center md:text-left">
            Copyright © 2026 Doccure. All Rights Reserved
          </p>

          {/* Links */}
          <div className="flex items-center gap-2 md:gap-4 flex-wrap justify-center">
            <Link to="#" className="text-gray-600 text-xs md:text-sm hover:text-[#316dff] transition-colors">Legal Notice</Link>
            <span className="text-blue-400">•</span>
            <Link to="#" className="text-gray-600 text-xs md:text-sm hover:text-[#316dff] transition-colors">Privacy Policy</Link>
            <span className="text-blue-400">•</span>
            <Link to="#" className="text-gray-600 text-xs md:text-sm hover:text-[#316dff] transition-colors">Refund Policy</Link>
          </div>

          {/* Payment icons */}
          <div className="flex items-center gap-1 md:gap-2 flex-wrap justify-center">
            {paymentIcons.map((src, i) => (
              <img key={i} src={src} alt="" className="h-4 md:h-6 object-contain" />
            ))}
          </div>

        </div>
      </div>

    </footer>
  )
}