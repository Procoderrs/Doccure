import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMoreLine, RiCloseLine, RiMessage3Line, RiPhoneFill, RiLockPasswordLine, RiUserLine, RiFacebookCircleLine, RiTwitterXLine, RiInstagramLine, RiLinkedinFill,RiMenuLine } from "@remixicon/react"

const navLinks = ["Home", "Doctors", "Patients", "Pharmacy", "Pages", "Blog", "Admin"]

export default function Bottom_Header() {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <>
      <section className="font-user border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="mx-auto px-6 lg:px-18 py-4">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <div>
              <img src="/logo.svg" alt="Doccure" className="h-10" />
            </div>

            {/* Desktop nav */}
            <ul className="hidden lg:flex gap-6 items-center">
              {navLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    to="#"
                    className="text-gray-700 hover:text-[#316dff] text-sm font-medium transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/signup"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-sm hover:opacity-90 transition"
                style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
              >
                <RiLockPasswordLine size={16} />
                Sign In
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-semibold text-sm hover:opacity-80 transition"
                style={{ background: "#0f172a" }}
              >
                <RiUserLine size={16} />
                Sign Up
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpenDrawer(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            >
              <RiMenuLine size={28} className="text-gray-700 border-gray-300 cursor-pointer border rounded-full p-1" />
            </button>

          </div>
        </div>
      </section>

      {/* Overlay */}
      {openDrawer && (
        <div
          className="fixed inset-0 bg-black/40 z-[998]"
          onClick={() => setOpenDrawer(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[320px] bg-white z-[999] shadow-2xl
        flex flex-col transition-all duration-300 ease-in-out
        ${openDrawer ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}
      >

        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <img src="/logo.svg" alt="Doccure" className="h-8" />
          <button
            onClick={() => setOpenDrawer(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-100 transition"
          >
            <RiCloseLine size={18} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">

          {/* Nav Links */}
          <div className="px-4 py-4 border-b border-gray-100">
            {navLinks.map((item, i) => (
              <div
                key={i}
                className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0"
              >
                <Link
                  to="#"
                  onClick={() => setOpenDrawer(false)}
                  className="text-gray-800 font-medium text-lg hover:text-[#316dff] transition-colors"
                >
                  {item}
                </Link>
                <span className="text-gray-400">›</span>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="px-6 py-6 border-b border-gray-100">
            <h3 className="font-bold text-xl text-gray-900 mb-4">Contact Information</h3>

            <div className="flex items-start gap-3 mb-4">
              <RiMessage3Line
                size={34}
                className="text-white rounded-full p-2 bg-blue-500 shrink-0"
              />
              <div>
                <p className="text-gray-500 text-sm">General Inquiries</p>
                <p className="font-bold text-gray-900">info@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <RiPhoneFill
                size={34}
                className="text-white rounded-full p-2 bg-blue-500 shrink-0"
              />
              <div>
                <p className="text-gray-500 text-sm">Emergency Cases</p>
                <p className="font-bold text-gray-900">+1 24565 89856</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="px-6 py-6 border-b border-gray-100">
            <h3 className="font-bold text-xl text-gray-900 mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {[RiFacebookCircleLine, RiTwitterXLine, RiInstagramLine, RiLinkedinFill].map((Icon, i) => (
                <Link
                  key={i}
                  to="#"
                  className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#316dff] hover:border-[#316dff] transition-all duration-200"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Sign In / Sign Up buttons */}
        <div className="px-6 py-6 flex flex-col gap-3 border-t border-gray-100">
          <Link
            to="/signin"
            className="flex items-center justify-center gap-2 py-3 rounded-full text-white font-semibold text-sm"
            style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            <RiLockPasswordLine size={16} />
            Sign In
          </Link>
          <Link
            to="/signup"
            className="flex items-center justify-center gap-2 py-3 rounded-full text-white font-semibold text-sm"
            style={{ background: "#0f172a" }}
          >
            <RiUserLine size={16} />
            Sign Up
          </Link>
        </div>

      </div>
    </>
  )
}