import React from 'react'

export default function Mobile() {
  return (
    <section className="relative w-full py-10 md:pb-20 px-4 md:px-12 lg:px-24 font-user overflow-hidden">

      <div
        className="relative max-w-7xl mx-auto rounded-2xl md:rounded-3xl overflow-hidden"
        style={{ background: "#316dff" }}
      >

        {/* Decorative background blobs — desktop only */}
        <img
          src="/app-bg-03.webp"
          alt=""
          className="absolute top-0 left-0 pointer-events-none hidden md:block"
        />
        <img
          src="/app-bg-02.webp"
          alt=""
          className="absolute -bottom-5 left-5 pointer-events-none hidden md:block"
        />
        <img
          src="/app-bg-04.webp"
          alt=""
          className="absolute bottom-5 right-0 pointer-events-none hidden md:block"
        />

        {/* Content */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-end px-4 lg:px-12 lg:px-16 pt-10 lg:pt-16 gap-8 md:gap-0">

          {/* Left text content */}
          <div className="pb-8 lg:pb-16 text-center lg:text-left">
            <p className="text-white/80 text-sm md:text-base mb-2 md:mb-3">
              Working for Your Better Health.
            </p>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 md:mb-8">
              Download the Doccure App today!
            </h2>

            <div className="flex  items-center justify-center gap-3 md:gap-4  ">
              <img
                src="/app-store.svg"
                alt="App Store"
                className="h"
              />
              <img
                src="/google-play.svg"
                alt="Google Play"
                className=""
              />
            </div>
          </div>

          {/* Right — phone mockup */}
          <div className=" justify-center hidden lg:flex md:justify-end">
            <img
              src="/mobile-img.webp"
              alt="App preview"
              className="max-h-[280px] md:max-h-[380px] lg:max-h-[480px] object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  )
}