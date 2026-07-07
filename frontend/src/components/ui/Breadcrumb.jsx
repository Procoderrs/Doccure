import React from "react";
import { Link } from "react-router-dom";
import { RiHomeLine, RiArrowRightSLine } from "@remixicon/react";

export default function Breadcrumb({
  title = "Dashboard",
  parent = "Doctor Dashboard",
}) {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFF] rounded-2xl py-14 px-10 mb-8">

      {/* Left Background */}
      <img
        src="/breadcrumb-bg-01.png"
        alt=""
        className="absolute left-0 top-0 pointer-events-none"
      />

      {/* Right Background */}
      <img
        src="/breadcrumb-bg-02.png"
        alt=""
        className="absolute right-0 top-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 flex items-center gap-6">

        {/* Icon Image */}
        <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center shrink-0">
          <img
            src="/breadcrumb-icon.png"
            alt=""
            className="w-10 h-10 object-contain"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold text-[#1F2937] mb-3">
            {title}
          </h2>

          <div className="flex items-center gap-2 text-gray-500 text-sm">

            <Link
              to="/"
              className="flex items-center gap-1 hover:text-[#316dff]"
            >
              <RiHomeLine size={16} />
              Home
            </Link>

            <RiArrowRightSLine size={18} />

            <span>{parent}</span>

            <RiArrowRightSLine size={18} />

            <span className="text-[#316dff] font-medium">
              {title}
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}