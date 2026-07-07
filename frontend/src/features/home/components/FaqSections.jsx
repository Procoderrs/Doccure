import React, { useState } from 'react'
import { RiAddLine, RiCloseLine } from "@remixicon/react"

const faqs = [
  {
    question: "How do I book an appointment with a doctor?",
    answer: "Yes, simply visit our website and log in or create an account. Search for a doctor based on specialization, location, or availability & confirm your booking.",
  },
  {
    question: "Can I request a specific doctor when booking my appointment?",
    answer: "Yes, you can usually request a specific doctor when booking your appointment, though availability may vary based on their schedule.",
  },
  {
    question: "What should I do if I need to cancel or reschedule my appointment?",
    answer: "If you need to cancel or reschedule your appointment, contact the doctor as soon as possible to inform them and to reschedule for another available time slot.",
  },
  {
    question: "What if I'm running late for my appointment?",
    answer: "If you know you will be late, it's courteous to call the doctor's office and inform them. Depending on their policy and schedule, they may be able to accommodate you or reschedule your appointment.",
  },
  {
    question: "Can I book appointments for family members or dependents?",
    answer: "Yes, in many cases, you can book appointments for family members or dependents. However, you may need to provide their personal information and consent to do so.",
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section className="w-full bg-white py-12 md:py-20 font-user relative overflow-hidden">

      {/* BG decorative images */}
      <div className="absolute -top-20 md:-top-96 right-0 pointer-events-none hidden md:block">
        <img src="/faq-bg-one.webp" alt="" />
      </div>
      <div className="absolute bottom-0 left-0 pointer-events-none hidden md:block">
        <img src="/faq-bg.webp" alt="" />
      </div>

      <div className="relative z-10 w-full max-w-3xl lg:max-w-5xl mx-auto px-4 md:px-8 lg:px-18">

        {/* Badge + Heading */}
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <div
            className="flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold mb-4"
            style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            <span>•</span>
            <span>FAQ'S</span>
            <span>•</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Your Questions are <span style={{ color: "#316dff" }}>Answered</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3 md:gap-5">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className="border rounded-xl md:rounded-2xl overflow-hidden transition-all duration-300"
                style={{ borderColor: isOpen ? "#316dff" : "#e5e7eb" }}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-3 px-4 md:px-8 py-4 md:py-6 text-left cursor-pointer"
                >
                  <span
                    className="font-bold text-base md:text-xl transition-colors duration-300"
                    style={{ color: isOpen ? "#316dff" : "#111827" }}
                  >
                    {faq.question}
                  </span>
                  <span
                    className="w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
                    style={{
                      borderColor: isOpen ? "#316dff" : "#d1d5db",
                      color: isOpen ? "#316dff" : "#374151",
                    }}
                  >
                    {isOpen
                      ? <RiCloseLine size={16} />
                      : <RiAddLine size={16} />
                    }
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="px-4 md:px-8 pb-4 md:pb-6 text-gray-500 text-sm md:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}