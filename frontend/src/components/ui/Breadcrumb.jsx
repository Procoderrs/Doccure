import React from "react";
import { Link } from "react-router-dom";
import { RiHomeLine, RiArrowRightSLine } from "@remixicon/react";

export default function Breadcrumb({
  title = "Dashboard",
  parent = "Doctor",
}) {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFF] w-full py-10 px-18 mb-0">

      {/* Left Background */}
      <img
        src="/breadcrumb-bg-01.png"
        alt=""
        className="absolute left-0 top-0 pointer-events-none h-full object-cover"
      />

      {/* Right Background */}
      <img
        src="/breadcrumb-bg-02.png"
        alt=""
        className="absolute right-0 top-0 pointer-events-none h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 text-center">

        <h2 className="text-4xl font-bold text-[#1F2937] mb-3">
          {title}
        </h2>

        <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-[#316dff]"
          >
            <RiHomeLine size={16} />
          </Link>

          <RiArrowRightSLine size={18} />

          <span>{parent}</span>

          <RiArrowRightSLine size={18} />

          <span className="text-[#316dff] font-medium">
            {title}
          </span>
        </div>
      </div>
    </section>
  );
}