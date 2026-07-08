import React, { useState } from 'react'
import Breadcrumb from '../../../components/ui/Breadcrumb'

const tabs = ["Basic Details", "Experience", "Education", "Awards", "Insurances", "Clinics", "Business Hours"]

// ===== Basic Details Tab =====
function BasicDetails() {
  const [languages, setLanguages] = useState(["English German", "Portugese"])
  const [newLang, setNewLang] = useState("")

  return (
    <div>
      {/* Profile Section */}
      <h3 className="font-bold text-gray-900 text-base mb-4">Profile</h3>
      <div className="border border-gray-100 rounded-xl p-5 mb-6">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center shrink-0">
            <span className="text-gray-400 text-2xl">👤</span>
          </div>
          <div>
            <p className="font-semibold text-gray-900 mb-1">Profile Image</p>
            <div className="flex gap-3 mb-1">
              <button className="text-[#316dff] text-sm font-medium hover:underline">Upload New</button>
              <button className="text-red-500 text-sm font-medium hover:underline">Remove</button>
            </div>
            <p className="text-gray-400 text-xs">Your Image should Below 4 MB, Accepted format jpg,png,svg</p>
          </div>
        </div>
      </div>

      {/* Information */}
      <h3 className="font-bold text-gray-900 text-base mb-4">Information</h3>
      <div className="border border-gray-100 rounded-xl p-5 mb-6">
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[
            { label: "First Name", required: true },
            { label: "Last Name", required: true },
            { label: "Display Name", required: true },
            { label: "Designation", required: true },
            { label: "Phone Numbers", required: true },
            { label: "Email Address", required: true },
          ].map((field, i) => (
            <div key={i}>
              <label className="block text-sm text-gray-600 mb-1.5">
                {field.label} {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type="text"
                className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff] transition-colors"
              />
            </div>
          ))}
        </div>

        {/* Known Languages */}
        <div>
          <label className="block text-sm text-gray-600 mb-1.5">
            Known Languages <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-wrap items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 min-h-[44px]">
            {languages.map((lang, i) => (
              <span key={i} className="flex items-center gap-1 bg-blue-50 text-[#316dff] text-xs px-3 py-1 rounded-full font-medium">
                {lang}
                <button
                  onClick={() => setLanguages(prev => prev.filter((_, j) => j !== i))}
                  className="hover:text-red-500 ml-1"
                >×</button>
              </span>
            ))}
            <input
              type="text"
              placeholder="Add a tag"
              value={newLang}
              onChange={e => setNewLang(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && newLang.trim()) {
                  setLanguages(prev => [...prev, newLang.trim()])
                  setNewLang("")
                }
              }}
              className="flex-1 min-w-24 text-sm outline-none text-gray-600"
            />
            <button className="text-[#316dff] text-sm font-medium ml-auto hover:underline">Save</button>
          </div>
        </div>
      </div>

      {/* Memberships */}
      <h3 className="font-bold text-gray-900 text-base mb-4">Memberships</h3>
      <div className="border border-gray-100 rounded-xl p-5 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Add Title"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">About Membership</label>
            <input
              type="text"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]"
            />
          </div>
        </div>
        <div className="flex justify-end mt-3">
          <button className="text-[#316dff] text-sm font-medium hover:underline">Add New</button>
        </div>
      </div>
    </div>
  )
}

// ===== Experience Tab =====
function Experience() {
  return (
    <div>
      <h3 className="font-bold text-gray-900 text-base mb-4">Experience</h3>
      <div className="border border-gray-100 rounded-xl p-5 mb-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">Hospital Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">From <span className="text-red-500">*</span></label>
            <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">Designation <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">To <span className="text-red-500">*</span></label>
            <input type="date" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-red-400 text-sm hover:text-red-600">Remove</button>
        </div>
      </div>
      <button className="text-[#316dff] text-sm font-medium hover:underline">+ Add More</button>
    </div>
  )
}

// ===== Education Tab =====
function Education() {
  return (
    <div>
      <h3 className="font-bold text-gray-900 text-base mb-4">Education</h3>
      <div className="border border-gray-100 rounded-xl p-5 mb-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">Degree <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">Year of Completion <span className="text-red-500">*</span></label>
            <input type="text" placeholder="YYYY" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
          </div>
          <div className="col-span-2">
            <label className="block text-sm text-gray-600 mb-1.5">Institution <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-red-400 text-sm hover:text-red-600">Remove</button>
        </div>
      </div>
      <button className="text-[#316dff] text-sm font-medium hover:underline">+ Add More</button>
    </div>
  )
}

// ===== Awards Tab =====
function Awards() {
  return (
    <div>
      <h3 className="font-bold text-gray-900 text-base mb-4">Awards</h3>
      <div className="border border-gray-100 rounded-xl p-5 mb-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">Award Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">Year <span className="text-red-500">*</span></label>
            <input type="text" placeholder="YYYY" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-red-400 text-sm hover:text-red-600">Remove</button>
        </div>
      </div>
      <button className="text-[#316dff] text-sm font-medium hover:underline">+ Add More</button>
    </div>
  )
}

// ===== Insurances Tab =====
function Insurances() {
  return (
    <div>
      <h3 className="font-bold text-gray-900 text-base mb-4">Insurances</h3>
      <div className="border border-gray-100 rounded-xl p-5 mb-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">Insurance Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">Insurance Value <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-red-400 text-sm hover:text-red-600">Remove</button>
        </div>
      </div>
      <button className="text-[#316dff] text-sm font-medium hover:underline">+ Add More</button>
    </div>
  )
}

// ===== Clinics Tab =====
function Clinics() {
  return (
    <div>
      <h3 className="font-bold text-gray-900 text-base mb-4">Clinics</h3>
      <div className="border border-gray-100 rounded-xl p-5 mb-4">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">Clinic Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1.5">Clinic Fees ($) <span className="text-red-500">*</span></label>
            <input type="number" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
          </div>
          <div className="col-span-2">
            <label className="block text-sm text-gray-600 mb-1.5">Clinic Address <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-[#316dff]" />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="text-red-400 text-sm hover:text-red-600">Remove</button>
        </div>
      </div>
      <button className="text-[#316dff] text-sm font-medium hover:underline">+ Add More</button>
    </div>
  )
}

// ===== Business Hours Tab =====
const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

function BusinessHours() {
  const [schedule, setSchedule] = useState(
    daysOfWeek.map(day => ({ day, enabled: true, from: "09:00", to: "17:00" }))
  )

  const toggle = (i) => {
    setSchedule(prev => prev.map((s, j) => j === i ? { ...s, enabled: !s.enabled } : s))
  }

  return (
    <div>
      <h3 className="font-bold text-gray-900 text-base mb-4">Business Hours</h3>
      <div className="border border-gray-100 rounded-xl p-5">
        <div className="flex flex-col gap-3">
          {schedule.map((s, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-8">
                <input
                  type="checkbox"
                  checked={s.enabled}
                  onChange={() => toggle(i)}
                  className="accent-[#316dff] w-4 h-4 cursor-pointer"
                />
              </div>
              <span className="w-28 text-sm font-medium text-gray-700">{s.day}</span>
              {s.enabled ? (
                <div className="flex items-center gap-3 flex-1">
                  <input
                    type="time"
                    value={s.from}
                    onChange={e => setSchedule(prev => prev.map((x, j) => j === i ? { ...x, from: e.target.value } : x))}
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#316dff]"
                  />
                  <span className="text-gray-400">—</span>
                  <input
                    type="time"
                    value={s.to}
                    onChange={e => setSchedule(prev => prev.map((x, j) => j === i ? { ...x, to: e.target.value } : x))}
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-[#316dff]"
                  />
                </div>
              ) : (
                <span className="text-gray-400 text-sm">Closed</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ===== Main ProfileSettings =====
export default function ProfileSettings() {
  const [activeTab, setActiveTab] = useState("Basic Details")

  const renderTab = () => {
    switch (activeTab) {
      case "Basic Details":    return <BasicDetails />
      case "Experience":       return <Experience />
      case "Education":        return <Education />
      case "Awards":           return <Awards />
      case "Insurances":       return <Insurances />
      case "Clinics":          return <Clinics />
      case "Business Hours":   return <BusinessHours />
      default:                 return <BasicDetails />
    }
  }

  return (
    <div className="p-6">

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
            style={{
              background: activeTab === tab ? "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" : "#f3f4f6",
              color: activeTab === tab ? "white" : "#374151",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        {renderTab()}

        {/* Footer Buttons */}
        <div className="flex justify-end gap-3 pt-6 mt-6 border-t border-gray-100">
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
    </div>
  )
}