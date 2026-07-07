import React from 'react'

// ===== Partner / Trusted brands data =====
// img ki jagah apni saved images ka path lagao (public folder ke andar)
const partners = [
  { name: "vaCare", logo: "/novacare.svg" },
  { name: "Apex Health", logo: "/apex.svg" },
  { name: "PrimeLife", logo: "/primelife.svg" },
  { name: "ClearSound", logo: "/clearsound.svg" },
  { name: "Airway", logo: "/airway.svg" },
  { name: "Cureplus", logo: "/cureplus.svg" },
  { name: "MediCare", logo: "/medicure.svg" },
]

// Seamless loop ke liye array ko duplicate kar diya
// (agar logos kam hain to 3 baar bhi duplicate kar sakte ho, taake gap na dikhe)
const marqueeLogos = [...partners, ...partners]

export default function TrustedPartners() {
  return (
    // ===== Section wrapper — black background jaisa screenshot mein hai =====
    <section className="w-full bg-black py-16 font-user relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-18">

        {/* ===== Heading ===== */}
        <h2 className="text-center text-white text-2xl md:text-3xl font-bold mb-12">
          Trusted Partners with Doccure
        </h2>

      </div>

      {/* ===== Auto-scrolling marquee row ===== */}
      {/* Outer wrapper — overflow hidden taake scrolling content bahar na dikhe */}
      {/* Left-right pe thoda fade-out mask laga diya taake edges smooth lagein */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        {/* Track jo continuously left ki taraf move karega */}
        <div className="flex w-max animate-marquee">

          {/* Logos do baar render ho rahe hain taake jab pehla set khatam ho,
              dusra set turant continue ho jaye — koi gap ya jerk nahi dikhega */}
          {marqueeLogos.map((partner, i) => (
            <div
              key={i}
              className="flex items-center justify-center shrink-0 px-14 opacity-90 hover:opacity-100 transition-opacity duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                draggable={false}
                className="h-9 w-auto object-contain"
              />
            </div>
          ))}

        </div>
      </div>

      
    </section>
  )
}