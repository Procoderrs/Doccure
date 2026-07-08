import React, { useState } from 'react'

const tabs = ["Profile", "Change Password", "2 Factor Authentication", "Delete Account"]

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Profile")

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Settings</h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 border-b border-gray-100 pb-1">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-4 py-2 text-sm font-medium rounded-t-lg transition-all"
            style={{
              background: activeTab === tab ? "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" : "transparent",
              color: activeTab === tab ? "white" : "#6b7280",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Profile" && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <h3 className="font-bold text-gray-900 mb-5">Profile Settings</h3>

          {/* Profile Photo */}
          <div className="border border-gray-100 rounded-xl p-4 flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
              <span className="text-gray-400 text-2xl">👤</span>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm mb-1">Profile Photo</p>
              <div className="flex gap-3">
                <button className="text-[#316dff] text-sm hover:underline">Upload New</button>
                <button className="text-red-500 text-sm hover:underline">Remove</button>
              </div>
              <p className="text-gray-400 text-xs mt-1">Your Image should Below 4 MB, Accepted format jpg,png,svg</p>
            </div>
          </div>

          {/* Information */}
          <h4 className="font-bold text-gray-900 text-sm mb-4">Information</h4>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {["First Name", "Last Name", "Date of Birth"].map((label, i) => (
              <div key={i}>
                <label className="block text-xs text-gray-500 mb-1.5">{label} <span className="text-red-500">*</span></label>
                <input
                  type={label === "Date of Birth" ? "date" : "text"}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {["Phone Number", "Email Address"].map((label, i) => (
              <div key={i}>
                <label className="block text-xs text-gray-500 mb-1.5">{label} <span className="text-red-500">*</span></label>
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

          {/* Address */}
          <h4 className="font-bold text-gray-900 text-sm mb-4">Address</h4>
          <div className="grid grid-cols-1 gap-4 mb-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">Address <span className="text-red-500">*</span></label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            {["City", "State"].map((label, i) => (
              <div key={i}>
                <label className="block text-xs text-gray-500 mb-1.5">{label} <span className="text-red-500">*</span></label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {["Country", "Pincode"].map((label, i) => (
              <div key={i}>
                <label className="block text-xs text-gray-500 mb-1.5">{label} <span className="text-red-500">*</span></label>
                <input className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
              </div>
            ))}
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

      {activeTab === "Change Password" && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 max-w-md">
          <h3 className="font-bold text-gray-900 mb-5">Change Password</h3>
          <div className="flex flex-col gap-4">
            {["Old Password", "New Password", "Confirm Password"].map((label, i) => (
              <div key={i}>
                <label className="block text-xs text-gray-500 mb-1.5">{label} <span className="text-red-500">*</span></label>
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
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 max-w-md">
          <h3 className="font-bold text-gray-900 mb-3">Delete Account</h3>
          <p className="text-gray-500 text-sm mb-5">
            Are you sure you want to delete your account? This action cannot be undone and all your data will be permanently removed.
          </p>
          <button className="px-6 py-2.5 rounded-full bg-red-500 text-white text-sm font-semibold hover:bg-red-600">
            Delete Account
          </button>
        </div>
      )}
    </div>
  )
}