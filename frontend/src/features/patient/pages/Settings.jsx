import React, { useState } from 'react'
import {RiImageFill} from "@remixicon/react";
const tabs = ["Profile", "Change Password", "2 Factor Authentication", "Delete Account"]

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Profile")
  const [twoFactor, setTwoFactor] = useState(true)


  return (
    <div className="pr-12 pl-4  ">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-100 pb-1">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-4 py-2  font-medium rounded-lg border border-gray-400 transition-all"
            style={{
              background: activeTab === tab ? "#316dff" : "transparent",
              color: activeTab === tab ? "white" : "#6b7280",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Profile" && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-900 mb-5 text-2xl border-b border-gray-300 pb-4">Profile Settings</h3>

          {/* Profile Photo */}
         <div className="border border-gray-300 p-4 rounded-lg mb-5">

  <p className="text-gray-900 text-lg mb-1">Profile Photo</p>

  <div className="rounded-xl flex items-center gap-4">
    <div className="w-20 h-20 rounded-xl border-2 border-dashed flex items-center border-gray-300 justify-center shrink-0">
      <span className="text-gray-400 text-2xl">
        <RiImageFill />
      </span>
    </div>

    <div>
      {/* Hidden Input */}
      <input
        type="file"
        id="profilePhoto"
        accept=".jpg,.jpeg,.png,.svg"
        className="hidden"
      />

      <div className="flex gap-3">
        <label
          htmlFor="profilePhoto"
          className="text-[#316dff] hover:underline cursor-pointer"
        >
          Upload New
        </label>

        <button
          type="button"
          className="text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>

      <p className="text-gray-400 text-sm mt-1">
        Your Image should Below 4 MB, Accepted format jpg,png,svg
      </p>
    </div>
  </div>

</div>
          {/* Information */}
          <h4 className="font-bold text-gray-900 text-xl mb-4">Information</h4>
          <div className="border border-gray-300 p-3 rounded-lg mb-6">

          
          <div className="grid grid-cols-3 gap-4 mb-4">
            {["First Name", "Last Name", "Date of Birth"].map((label, i) => (
              <div key={i}>
                <label className="block  text-gray-900 mb-1.5">{label} <span className="text-red-500">*</span></label>
                <input
                  type={label === "Date of Birth" ? "date" : "text"}
                  className="w-full border border-gray-200 rounded-lg px-3 text-sm py-2.5 outline-none focus:border-[#316dff]"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {["Phone Number", "Email Address"].map((label, i) => (
              <div key={i}>
                <label className="block text-xs text-gray-900 mb-1.5">{label} <span className="text-red-500">*</span></label>
                <input
                  type={label === "Email Address" ? "email" : "text"}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]"
                />
              </div>
            ))}
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Blood Group <span className="text-red-500">*</span></label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff] text-gray-500">
                <option>Select</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>
          </div>
          </div>
          {/* Address */}

          

         
          <h4 className="font-bold  text-gray-900 text-xl mb-4">Address</h4>
          <div className="border border-gray-300 p-3 rounded-xl">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block  text-gray-900 mb-1.5">Address <span className="text-red-500">*</span></label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {["City", "State"].map((label, i) => (
              <div key={i}>
                <label className="block  text-gray-900 mb-1.5">{label} <span className="text-red-500">*</span></label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {["Country", "Pincode"].map((label, i) => (
              <div key={i}>
                <label className="block  text-gray-900 mb-1.5">{label} <span className="text-red-500">*</span></label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
              </div>
            ))}
          </div>
          </div>
          <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
            <button className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">
              Cancel
            </button>
            <button
              className="px-6 py-2.5 rounded-full text-white text-sm font-semibold"
              style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}

      {activeTab === "2 Factor Authentication" && (
  <div className="p-6 border border-gray-300 rounded-lg ">

    {/* Header + Toggle */}

    <div className="flex items-center justify-between border-b  border-gray-300 mb-6 pb-4 ">
      <h3 className="font-bold text-gray-900 text-2xl ">2 Factor Authentication</h3>
      {/* Toggle */}
      <button
        onClick={() => setTwoFactor(!twoFactor)}
        className="w-12 h-6 rounded-full transition-all relative"
        style={{ background: twoFactor ? "#22c55e" : "#e5e7eb" }}
      >
        <span
          className="absolute top-1 w-4 h-4 rounded-full bg-white transition-all"
          style={{ left: twoFactor ? "26px" : "4px" }}
        />
      </button>
    </div>

    <div className="flex flex-col gap-5">

      {/* Set up using Email */}
      <div className="border border-gray-300 rounded-2xl p-6 bg-white">
        <h4 className="font-bold text-gray-900 text-[22px] mb-1">Set up using an Email</h4>
        <p className="text-gray-900 mb-5">Enter your Email which we send you code</p>

        {/* Email input + Continue */}
        <div className="mb-6 border-b border-gray-300 pb-6">
          <label className="block text-xl text-gray-900 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-3">
            <input
              type="email"
              className="flex-1 border rounded-lg border-gray-200 py-2 text-sm outline-none focus:border-[#316dff] transition-colors"
              placeholder=""
            />
            <button
              className="px-6 py-2.5 rounded-full text-white text-sm font-semibold shrink-0"
              style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
            >
              Continue
            </button>
          </div>
        </div>

        {/* OTP boxes */}
        <div className="mb-5">
          <p className=" text-gray-900 mb-3">Enter the code generated by Email</p>
          <div className="flex gap-3">
            {[0, 1, 2, 3].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="w-12 h-12 border border-gray-200 rounded-lg text-center text-lg font-bold outline-none focus:border-[#316dff] transition-colors"
              />
            ))}
          </div>
        </div>

        <button
          className="px-8 py-2.5 rounded-full text-white text-sm font-semibold"
          style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
        >
          Submit
        </button>
      </div>

      {/* Set up using SMS */}
      <div className="border border-gray-300 rounded-2xl p-6 bg-white">
        <h4 className="font-bold text-gray-900 text-[22px] mb-1">Set up using an SMS</h4>
        <p className="text-gray-900 text-sm mb-5">Enter your phone number which we send you code</p>

        {/* Phone input + Continue */}
        <div className="mb-6 pb-6 border-b border-gray-300">
          <label className="block  text-lg text-gray-900 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-3">
            <input
              type="tel"
              className="flex-1 border border-gray-300 rounded-lg py-2 text-sm outline-none focus:border-[#316dff] transition-colors"
              placeholder=""
            />
            <button
              className="px-6 py-2.5 rounded-full text-white text-sm font-semibold shrink-0"
              style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
            >
              Continue
            </button>
          </div>
        </div>

        {/* OTP boxes */}
        <div className="mb-5">
          <p className=" text-gray-900 mb-3">Enter the code generated by SMS</p>
          <div className="flex gap-3">
            {[0, 1, 2, 3].map((_, i) => (
              <input
                key={i}
                type="text"
                maxLength={1}
                className="w-12 h-12 border border-gray-200 rounded-lg text-center text-lg font-bold outline-none focus:border-[#316dff] transition-colors"
              />
            ))}
          </div>
        </div>

        <button
          className="px-8 py-2.5 rounded-full text-white text-sm font-semibold"
          style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
        >
          Submit
        </button>
      </div>

    </div>
  </div>
)}

      {activeTab === "Change Password" && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 max-w-md">
          <h3 className="font-bold text-gray-900 mb-5">Change Password</h3>
          <div className="flex flex-col gap-4">
            {["Old Password", "New Password", "Confirm Password"].map((label, i) => (
              <div key={i}>
                <label className="block  text-gray-900 mb-1.5">{label} <span className="text-red-500">*</span></label>
                <input
                  type="password"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100">
            <button className="px-6 py-2.5 rounded-full border border-gray-200 text-gray-600 text-sm font-medium">Cancel</button>
            <button
              className="px-6 py-2.5 rounded-full text-white text-sm font-semibold"
              style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}

      {activeTab === "Delete Account" && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 ">
          <h3 className="font-bold text-gray-900 mb-3  text-2xl border-b border-gray-300 pb-3">Delete Account</h3>
          <p className="text-black font-bold text-xl ">
            Are you sure you want to delete your account? 
          </p>
          <p className="text-lg text-gray-700 mb-5">
            Refers to the action of permanently removing a user's account and associated data from a system, service and platform.
          </p>
          <button className="px-6 py-2.5 rounded-full  text-white text-lg font-semibold " style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}>
            Delete Account
          </button>
        </div>
      )}
    </div>
  )
}