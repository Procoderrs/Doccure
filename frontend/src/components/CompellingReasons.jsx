import React from 'react'
import { RiContactsBook2Fill,RiFingerprintLine , RiAccessibilityLine} from "@remixicon/react";

export default function CompellingReasons() {
  const reasons = [
  {
    icon: RiContactsBook2Fill,
    bg: "#fde9df",       // light orange
    text: "#e04f16",     // dark orange icon
    title: "Follow-Up Care",
    desc: "We ensure continuity of care through regular follow-ups and communication, helping you stay on track with health goals.",
  },
  {
    icon: RiFingerprintLine,
    bg: "#dce8ff",       // light blue
    text: "#316dff",     // blue icon
    title: "Patient-Centered",
    desc: "We prioritize your comfort and preferences, tailoring our services to meet your individual needs and Care from Our Experts",
  },
  {
    icon: RiAccessibilityLine,
    bg: "#d9f4fa",       // light cyan
    text: "#06aed4",     // cyan icon
    title: "Convenient Access",
    desc: "Easily book appointments online or through our dedicated customer service team, with flexible hours to fit your schedule.",
  },
]

  return (
    <section className="relative py-24 w-full overflow-hidden bg-white font-user">

      {/* BG images */}
      <img
        src="/reason-bg-one.webp"
        alt=""
        className="absolute -bottom-14 left-0 pointer-events-none"
      />
      <img
        src="/reason-bg-two.webp"
        alt=""
        className="absolute bottom-12 right-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto lg:px-18 px-4">

        {/* Badge + Heading */}
        <div className="flex flex-col items-center text-center mb-8">
          <div
            className="flex items-center gap-2 px-5 py-2 rounded-full text-white text-sm font-semibold mb-4"
            style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            <span>•</span>
            <span>Why Book With Us</span>
            <span>•</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900">
            Compelling <span style={{ color: "#316dff" }}>Reasons</span> to Choose
          </h2>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 lg:grid-rows-1 place-items-center grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-6">
          {reasons.map((item, i) => (
            <div key={i} className="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300">

              {/* Icon circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: item.bg }}
              >
  <item.icon size={36} style={{ color: item.text }} />
    </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-700  leading-relaxed">{item.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}