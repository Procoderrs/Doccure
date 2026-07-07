import React, { useState } from 'react'
import Breadcrumb from '../../../components/ui/Breadcrumb'

const defaultLinks = [
  { platform: "Facebook", url: "" },
  { platform: "Instagram", url: "" },
  { platform: "Twitter", url: "" },
  { platform: "Instagram", url: "" },
]

export default function SocialMedia() {
  const [links, setLinks] = useState(defaultLinks)

  return (
    <div className="p-6">
      <Breadcrumb title="Social Media" parent="Doctor" />

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
        <div className="flex justify-end mb-5">
          <button
            className="px-5 py-2.5 rounded-full text-white text-sm font-semibold"
            style={{ background: "linear-gradient(90.08deg, #316dff 0.09%, #02bfff 70.28%)" }}
          >
            Add New Social Media
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {links.map((link, i) => (
            <div key={i} className="grid grid-cols-[200px_1fr] gap-4 items-center">
              <select
                value={link.platform}
                onChange={e => {
                  const updated = [...links]
                  updated[i].platform = e.target.value
                  setLinks(updated)
                }}
                className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm outline-none text-gray-700"
              >
                {["Facebook", "Instagram", "Twitter", "LinkedIn", "YouTube"].map(p => (
                  <option key={p}>{p}</option>
                ))}
              </select>
              <input
                type="url"
                value={link.url}
                onChange={e => {
                  const updated = [...links]
                  updated[i].url = e.target.value
                  setLinks(updated)
                }}
                placeholder="Add Url"
                className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#316dff] text-gray-600"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}